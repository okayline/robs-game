// The Worker: the page, a new match link, and one Durable Object (Match) per match that holds the true board.
//   GET /            a new match against the scripted dummy (src/dummy.js): redirects to it
//   GET /m/<id>      the match page; GET /m/<id>/ws the match's WebSocket. You are seat a in every tab; the dummy is b.
// Built like UN/TAP (okayline/tap-game), and dealt from the same 88x31 buttons.
import { DurableObject } from "cloudflare:workers";
import { newGame, dealDeck, cast, letIt, tap, pay, pass, view } from "./rules.js";
import { dummyRun } from "./dummy.js";
import PAGE from "./page.html";

export default {
  async fetch(req, env) {
    const url = new URL(req.url);
    if (url.pathname === "/") {
      const id = env.MATCH.newUniqueId();
      await env.MATCH.get(id).setup(await env.REGISTRY.dealPool("88x31", { uncommons: true }));
      return Response.redirect(`${url.origin}/m/${id}`, 302);
    }
    const m = url.pathname.match(/^\/m\/([0-9a-f]{64})(\/ws)?$/);
    if (m && m[2]) return env.MATCH.get(env.MATCH.idFromString(m[1])).fetch(req);
    if (m) return new Response(PAGE, { headers: { "content-type": "text/html; charset=utf-8" } });
    return new Response("Not found", { status: 404 });
  },
};

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
    const err =
      a.do === "cast" ? cast(g, "a", a.uid) :
      a.do === "let" ? letIt(g, "a") :
      a.do === "tap" ? tap(g, "a", a.uid) :
      a.do === "pay" ? pay(g, "a", a.uid ?? null) :
      a.do === "pass" ? pass(g, "a") : "Unknown action.";
    if (err) return ws.send(JSON.stringify({ error: err }));
    dummyRun(g);
    await this.ctx.storage.put("g", g);
    for (const s of this.ctx.getWebSockets()) s.send(JSON.stringify({ v: view(g, "a") }));
  }
}
