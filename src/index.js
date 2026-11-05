// The Worker: the page, a new match link, and one Durable Object (Match) per match that holds the true board.
//   GET /            a new match against the scripted dummy (src/dummy.js): redirects to it
//   GET /m/<id>      the match page; GET /m/<id>/ws the match's WebSocket. You are seat a in every tab; the dummy is b.
//   GET /img/<n>     88x31 button n's GIF, from this site (img(), below)
// Built like UN/TAP (okayline/tap-game), and dealt from the same 88x31 buttons.
import { DurableObject } from "cloudflare:workers";
import { newGame, dealDeck, cast, letIt, tap, pay, pass, view, hooks } from "./rules.js";
import { dummyRun } from "./dummy.js";
import PAGE from "./page.html";

export default {
  async fetch(req, env, ctx) {
    const url = new URL(req.url);
    const im = url.pathname.match(/^\/img\/(\d+)$/);
    if (im) return img(im[1], req, ctx);
    if (url.pathname === "/") {
      const id = env.MATCH.newUniqueId();
      await env.MATCH.get(id).setup((await env.REGISTRY.dealPool("88x31", { uncommons: true })).map((b) => ({ ...b, image: local(b.image) })));
      return Response.redirect(`${url.origin}/m/${id}`, 302);
    }
    const m = url.pathname.match(/^\/m\/([0-9a-f]{64})(\/ws)?$/);
    if (m && m[2]) return env.MATCH.get(env.MATCH.idFromString(m[1])).fetch(req);
    if (m) return new Response(PAGE, { headers: { "content-type": "text/html; charset=utf-8" } });
    return new Response("Not found", { status: 404 });
  },
};

// a button's picture comes from this site, copied from tap-game's index.js (kura, Nov 4: the pictures didn't show when the page loaded
// them from 88x31.app): /img/N fetches 88x31's /api/img?d=N once, keeps it in Cloudflare's cache, and lets the browser keep it for a day
const API_IMG = /^https:\/\/88x31\.app\/api\/img\?d=(\d+)$/;
const local = (image) => { const m = API_IMG.exec(image ?? ""); return m ? `/img/${m[1]}` : image; };
async function img(n, req, ctx) {
  const cache = caches.default, key = new Request(new URL(req.url).toString());
  const hit = await cache.match(key);
  if (hit) return hit;
  const r = await fetch(`https://88x31.app/api/img?d=${n}`);   // follows 88x31's redirect to the file
  if (!r.ok) return new Response(r.body, { status: r.status });
  const res = new Response(r.body, { headers: { "content-type": r.headers.get("content-type") ?? "image/gif", "cache-control": "public, max-age=86400" } });
  ctx.waitUntil(cache.put(key, res.clone()));
  return res;
}

// The deal pool is 88x31's commons and uncommons (dungeon-items dealPool, through the REGISTRY service binding); rarer buttons
// come back hidden and are left out (rules.js dealDeck).
export class Match extends DurableObject {
  async setup(pool) {
    const g = newGame(dealDeck(pool, "a"), dealDeck(pool, "b"));
    dummyRun(g);
    await this.ctx.storage.put("g", g);
  }

  async fetch(req) {
    if (req.headers.get("Upgrade") !== "websocket") return new Response("Expected a WebSocket", { status: 426 });
    const g = await this.ctx.storage.get("g");
    if (!g) return new Response("No such match", { status: 404 });
    const [client, server] = Object.values(new WebSocketPair());
    this.ctx.acceptWebSocket(server);
    server.send(JSON.stringify({ v: view(g, "a") }));
    return new Response(null, { status: 101, webSocket: client });
  }

  async webSocketMessage(ws, msg) {
    const g = await this.ctx.storage.get("g");
    let a;
    try { a = JSON.parse(msg); } catch { return; }
    // one board per log line, yours and the dummy's: the page shows them one at a time (kura, Nov 4: actions and the log showed up
    // all at once). Everything up to the storage write below runs without waiting, so no other match's lines can land in here.
    const frames = [];
    // each board is copied as it stands when its line is written: view() hands out the game's own lists (hands, fields, graveyards,
    // the log), which would otherwise all show the end of the dummy's turn by the time they're sent (kura, Nov 4: the hand refilled
    // before the round was over)
    hooks.say = () => frames.push(structuredClone(view(g, "a")));
    const err =
      a.do === "cast" ? cast(g, "a", a.uid) :
      a.do === "let" ? letIt(g, "a") :
      a.do === "tap" ? tap(g, "a", a.uid) :
      a.do === "pay" ? pay(g, "a", a.uid ?? null) :
      a.do === "pass" ? pass(g, "a") : "Unknown action.";
    if (err) { hooks.say = null; return ws.send(JSON.stringify({ error: err })); }
    dummyRun(g);
    hooks.say = null;
    frames.push(view(g, "a"));   // and the board as it stands now: a line can be written before its move is finished (a cast asks for an answer after it)
    await this.ctx.storage.put("g", g);
    for (const s of this.ctx.getWebSockets()) s.send(JSON.stringify({ frames }));
  }
}
