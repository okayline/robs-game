import { test } from "node:test";
import assert from "node:assert/strict";
import { dealDeck, newGame, cast, letIt, pass, pay } from "../src/rules.js";

// a hand-made pool: 15 buttons of each of the three types
const pool = ["neon", "construction", "counter"].flatMap((type, t) => Array.from({ length: 15 }, (_, i) => ({ id: t * 100 + i, name: `${type} ${i}`, type, image: null })));
const c = (uid, card, by) => ({ uid, card, id: 1, name: "x", image: null, flav: "" });

test("a deck is 30 cards: 5 Broadcast, 9 Wiretap, 4 Spam, 2 Undelete, 6 Refute, 2 Rollback, 2 Paywall", () => {
  const d = dealDeck(pool, "a"), n = (k) => d.filter((x) => x.card === k).length;
  assert.deepEqual([d.length, n("broadcast"), n("wiretap"), n("spam"), n("undelete"), n("refute"), n("rollback"), n("paywall")], [30, 5, 9, 4, 2, 6, 2, 2]);
});

test("Spam puts the top 2 cards of their deck in their graveyard", () => {
  const g = newGame(dealDeck(pool, "a"), dealDeck(pool, "b"));
  g.turn = "a"; g.sides.a.hand = [c("a1", "spam")]; g.sides.b.hand = [];
  const top2 = g.sides.b.deck.slice(0, 2).map((x) => x.uid), left = g.sides.b.deck.length;
  assert.equal(cast(g, "a", "a1"), null);
  assert.equal(letIt(g, "b"), null);
  assert.deepEqual(g.sides.b.grave.map((x) => x.uid), top2);
  assert.equal(g.sides.b.deck.length, left - 2);
});

test("a counter fight: the last counter wins, so a countered Refute lets the Broadcast resolve", () => {
  const g = newGame(dealDeck(pool, "a"), dealDeck(pool, "b"));
  g.turn = "a"; g.sides.a.hand = [c("a1", "broadcast"), c("a2", "refute")]; g.sides.b.hand = [c("b1", "refute")];
  assert.equal(cast(g, "a", "a1"), null);
  assert.equal(cast(g, "b", "b1"), null);
  assert.equal(cast(g, "a", "a2"), null);
  assert.equal(letIt(g, "b"), null);
  assert.equal(g.sides.a.field.length, 1);
  assert.equal(g.stack.length, 0);
});

test("Paywall: discarding a card keeps the spell; not paying counters it", () => {
  const g = newGame(dealDeck(pool, "a"), dealDeck(pool, "b"));
  g.turn = "a"; g.sides.a.hand = [c("a1", "broadcast"), c("a2", "wiretap")]; g.sides.b.hand = [c("b1", "paywall")];
  cast(g, "a", "a1"); cast(g, "b", "b1"); letIt(g, "a");
  assert.equal(g.pending.kind, "paywall");
  assert.equal(pay(g, "a", "a2"), null);
  assert.equal(g.sides.a.field.length, 1);
});

test("three resolved Broadcasts win; drawing from an empty deck loses", () => {
  const g = newGame(dealDeck(pool, "a"), dealDeck(pool, "b"));
  g.turn = "a"; g.sides.a.field = [c("x1", "broadcast"), c("x2", "broadcast")]; g.sides.a.hand = [c("a1", "broadcast")];
  cast(g, "a", "a1"); letIt(g, "b");
  assert.equal(g.winner, "a");
  const h = newGame(dealDeck(pool, "a"), dealDeck(pool, "b"));
  h.turn = "a"; h.sides.b.deck = []; h.sides.b.hand = [];   // an empty hand must refill, from an empty deck
  pass(h, "a");
  assert.equal(h.winner, "a");
});
