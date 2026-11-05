// The Worker: the page, a new match link, and one Durable Object (Match) per match that holds the true board.
//   GET /            a new match against the scripted dummy (src/dummy.js): serves its page (no redirect)
//   GET /m/<id>      the match page; GET /m/<id>/ws the match's WebSocket. You are seat a in every tab; the dummy is b.
//   GET /img/<n>     88x31 button n's GIF, from this site (img(), below)
// Built like UN/TAP (okayline/tap-game), and dealt from the same 88x31 buttons.
import { DurableObject } from "cloudflare:workers";
import { newGame, dealDecks, cast, letIt, tap, pay, pass, discard, view, hooks } from "./rules.js";
import { dummyRun } from "./dummy.js";
import PAGE from "./page.html";

export default {
  async fetch(req, env, ctx) {
    const url = new URL(req.url);
    const im = url.pathname.match(/^\/img\/(\d+)$/);
    if (im) return img(im[1], req, ctx);
    if (url.pathname === "/") {
      const id = env.GAME.newUniqueId();
      await env.GAME.get(id).setup((await env.REGISTRY.dealPool("88x31", { uncommons: true })).map((b) => ({ ...b, image: local(b.image) })));
      // its page comes straight back, with the match's id in a meta tag, so the address bar never shows /m/<id> (kura, Nov 5: the
      // redirect flashed the long address); no-store, since this page belongs to one match
      return new Response(PAGE.replace('<meta name="match" content="">', `<meta name="match" content="${id}">`),
        { headers: { "content-type": "text/html; charset=utf-8", "cache-control": "no-store" } });
    }
    const m = url.pathname.match(/^\/m\/([0-9a-f]{64})(\/ws)?$/);
    if (m && m[2]) {
      // a link to a match from before the Nov 5 wipe has an id the new class doesn't know: "No such match", like an expired one
      let id; try { id = env.GAME.idFromString(m[1]); } catch { return new Response("No such match", { status: 404 }); }
      return env.GAME.get(id).fetch(req);
    }
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
// A match is deleted after a day with no move (kura, Nov 5: "clean up all the empty unused runs"): every page load starts a match,
// and nothing else ever removed one. The alarm is set when the match starts and pushed back a day by every move.
const EXPIRE_MS = 24 * 60 * 60 * 1000;

// Game, not Match: the class was renamed on Nov 5 so its old namespace, with every match stored before the expiry, could be
// deleted (wrangler.jsonc migrations v2 and v3)
export class Game extends DurableObject {
  async setup(pool) {
    const g = newGame(...dealDecks(pool));
    dummyRun(g);
    await this.ctx.storage.put("g", g);
    await this.ctx.storage.setAlarm(Date.now() + EXPIRE_MS);
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
    if (!g) return ws.close(1000, "No such match");
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
      a.do === "pass" ? pass(g, "a") :
      a.do === "discard" ? discard(g, "a", a.uid) : "Unknown action.";
    if (err) { hooks.say = null; return ws.send(JSON.stringify({ error: err })); }
    dummyRun(g);
    hooks.say = null;
    frames.push(view(g, "a"));   // and the board as it stands now: a line can be written before its move is finished (a cast asks for an answer after it)
    await this.ctx.storage.put("g", g);
    await this.ctx.storage.setAlarm(Date.now() + EXPIRE_MS);
    for (const s of this.ctx.getWebSockets()) s.send(JSON.stringify({ frames }));
  }

  // The alarm: a day has passed with no move, so the match is deleted (deleteAll also removes the alarm at this compatibility
  // date). An open page is told it's gone.
  async alarm() {
    await this.ctx.storage.deleteAll();
    for (const ws of this.ctx.getWebSockets()) ws.close(1000, "Match expired");
  }
}
