// The scripted second player (seat b). It plays by fixed rules, not to win at all costs:
//   its turn:  casts a Broadcast if it has one, else a Wiretap, else an Undelete when a Broadcast is in its graveyard; then passes.
//   answering: counters every Broadcast of yours, and a Wiretap only while it holds 3 or more counters; when you counter one of
//              its spells (or its counter), it counters back if it can. It uses Refute first, then Rollback, then Paywall.
//   Wiretap:   mills your Broadcast if it sees one, else your best counter, else the first card; leaves the order as it is.
//   Paywall:   pays (discards its first card that isn't a Broadcast) only to keep a Broadcast.
import { cast, letIt, tap, pay, pass, isCounter, waitingOn } from "./rules.js";

const ORDER = ["refute", "rollback", "paywall"];
const counters = (side) => side.hand.filter(isCounter).sort((x, y) => ORDER.indexOf(x.card) - ORDER.indexOf(y.card));
const MILL = ["broadcast", "refute", "rollback", "paywall", "undelete", "wiretap"];

// One move for the dummy; returns false when it isn't the dummy's move.
export function dummyMove(g) {
  if (waitingOn(g) !== "b") return false;
  const me = g.sides.b, p = g.pending;
  if (p?.kind === "answer") {
    const top = g.stack[g.stack.length - 1], cs = counters(me);
    const want = top.by === "a" && (top.card === "broadcast" || (top.card === "wiretap" && cs.length >= 3) || (isCounter(top) && g.stack[g.stack.length - 2].by === "b"));
    return want && cs.length ? !cast(g, "b", cs[0].uid) : !letIt(g, "b");
  }
  if (p?.kind === "wiretap") {
    const look = g.sides.a.deck.slice(0, p.n);
    const best = [...look].sort((x, y) => MILL.indexOf(x.card) - MILL.indexOf(y.card))[0];
    return !tap(g, "b", p.step === "mill" ? best.uid : look[0].uid);
  }
  if (p?.kind === "paywall") {
    const target = g.stack[g.stack.length - 1], spare = me.hand.find((c) => c.card !== "broadcast");
    return !pay(g, "b", target.card === "broadcast" && spare ? spare.uid : null);
  }
  if (!g.cast) {
    const by = (card) => me.hand.find((c) => c.card === card);
    const c = by("broadcast") ?? by("wiretap") ?? (me.grave.some((x) => x.card === "broadcast") ? by("undelete") : null);
    if (c) return !cast(g, "b", c.uid);
  }
  return !pass(g, "b");
}

// Let the dummy move until it's your move or the match is over; step() runs after each of its moves (index.js sends each one,
// so the page can show them one at a time).
export function dummyRun(g, step = () => {}) {
  for (let i = 0; i < 50 && dummyMove(g); i++) step();
}
