// Rob's Game rules: a blue-only card game (kura, Nov 4). Pure functions over a plain game object, so the Match Durable Object
// (index.js), the dummy (dummy.js) and the tests all use the same rules.
//
// Each player has a 30-card deck: 5 Broadcast, 13 Wiretap, 2 Undelete, 6 Refute, 2 Rollback, 2 Paywall. Start with 5 cards.
// On your turn: your hand refills to 5 (kura, Nov 4), then cast at most one Enchantment or Sorcery, then pass.
// Instants (Refute, Rollback, Paywall) are only cast in answer to a spell, and a Counter can be answered by another Counter:
// the stack resolves from the top, each Counter countering the spell just below it.
// You win when 3 of your Broadcasts have resolved. You lose when you must draw from an empty deck.
//
// A deck is an array with its top card at index 0.

export const CARDS = {
  broadcast: { name: "Broadcast", kind: "Enchantment", type: "neon", text: "stays on your side when it resolves." },
  wiretap: { name: "Wiretap", kind: "Sorcery", type: "construction", text: "look at the top 3 cards of their deck. Put 1 in their graveyard and the rest back in any order." },
  undelete: { name: "Undelete", kind: "Sorcery", type: "construction", text: "shuffle your graveyard into your deck." },
  refute: { name: "Refute", kind: "Instant", type: "counter", text: "counter target spell." },
  rollback: { name: "Rollback", kind: "Instant", type: "counter", text: "counter target spell. Put it on top of its caster's deck." },
  paywall: { name: "Paywall", kind: "Instant", type: "counter", text: "counter target spell unless its caster discards a card." },
};
export const DECK = { broadcast: 5, wiretap: 13, undelete: 2, refute: 6, rollback: 2, paywall: 2 };
export const HAND = 5, WIN = 3;
export const isCounter = (c) => CARDS[c.card].kind === "Instant";
export const other = (s) => (s === "a" ? "b" : "a");
export const NAMES = { a: "you", b: "the dummy" };

// Flavour lines: real lines from old personal web pages (kura, Nov 4), one picked per card when the decks are dealt. The same lines,
// with where each was found, are in tap-game's page.html (by button type).
export const FLAVOUR = {
  broadcast: ["You have to really have a site that ROCKS to win this one.", "This award is hard to acquire.", "Awards This Site Has Won",
    "Your page is spectacular....", "You are one of the best.....", "It's my honour to win this award.",
    "I cannot express my happiness in words when I receive this award.", "Click HERE to vote for this page as a Starting Point Hot Site.",
    "Your site has been awarded the .Cool Reality Award.", "My teacher just about kissed the screen.", "Absolutly mind bogglingly awesome site!"],
  wiretap: ["Lurker Lounge Lizard", "This site is still under construction", "I only sampled a bit of it but will return to view the rest when able.",
    "no time to scan it all but what I requested was interesting", "Some of these would look great on my home page."],
  undelete: ["I am carrying out a major upgrade on my homepage", "Don't worry, I'm pretty sure I've got everything on back-up in case something happens...",
    "...come back next week when the other stuff's been recovered..."],
  refute: ["Stop! Think! Do you really want to do this?", "Please ask me before using these pictures", "Please do NOT link these graphics to my server",
    "Sorry, Your browser does not support this applet.", "NO TRESPASSING", "When pigs fly!"],
  rollback: ["Coming Soon (some of the diagram links don't work...be patient)", "...or just hit your \"back\" button on your web browser.", "Wednesday. More reviews. Be here!"],
  paywall: ["No frames? Too bad! Continue at your own risk.", "Once you're here you're stuck.", "Any reproduction, duplication, or distribution in any form is expressly prohibited."],
};

export function shuffle(arr, rnd = Math.random) {
  for (let i = arr.length - 1; i > 0; i--) { const j = Math.floor(rnd() * (i + 1)); [arr[i], arr[j]] = [arr[j], arr[i]]; }
  return arr;
}
const pick = (arr, rnd) => arr[Math.floor(rnd() * arr.length)];

// One deck from the deal pool (88x31's commons and uncommons: dungeon-items dealPool). Each card is a button of its card's type,
// all different within a deck while the type has enough (construction has exactly 15 for 15 slots); both decks deal separately.
export function dealDeck(pool, side, rnd = Math.random) {
  const byType = {};
  for (const b of pool) if (!b.hidden) (byType[b.type] ??= []).push(b);
  const left = Object.fromEntries(Object.entries(byType).map(([t, l]) => [t, shuffle([...l], rnd)]));
  const deck = [];
  for (const [card, n] of Object.entries(DECK)) {
    const t = CARDS[card].type;
    for (let i = 0; i < n; i++) {
      if (!left[t]?.length) left[t] = shuffle([...(byType[t] ?? [])], rnd);
      const b = left[t].pop() ?? { id: 0, name: CARDS[card].name, image: null };
      deck.push({ uid: `${side}${deck.length}`, card, id: b.id, name: b.name, image: b.image, series: b.series ?? null, rarity: b.rarity ?? "common", flav: pick(FLAVOUR[card], rnd) });
    }
  }
  return shuffle(deck, rnd);
}

export function newGame(deckA, deckB, rnd = Math.random) {
  const side = (deck) => ({ deck, hand: deck.splice(0, HAND), grave: [], field: [] });
  const g = { sides: { a: side(deckA), b: side(deckB) }, turn: rnd() < 0.5 ? "a" : "b", cast: false, stack: [], pending: null, winner: null, log: [], n: 1 };
  g.first = g.turn;
  say(g, `${cap(NAMES[g.turn])} ${g.turn === "a" ? "go" : "goes"} first.`);
  return g;
}

const cap = (s) => s[0].toUpperCase() + s.slice(1);
// hooks.say, when set, runs after each log line (index.js: one board per line, so the page shows every action one at a time)
export const hooks = { say: null };
function say(g, line) { g.log.push(line); if (g.log.length > 30) g.log.shift(); hooks.say?.(g); }
const cardName = (c) => `${CARDS[c.card].name} (${c.name})`;
const find = (list, uid) => list.findIndex((c) => c.uid === uid);

function draw(g, s) {
  const side = g.sides[s];
  if (!side.deck.length) { g.winner = other(s); say(g, `${cap(NAMES[s])} had to draw from an empty deck.`); return; }
  side.hand.push(side.deck.shift());
}

// The waiting state: whose move it is and what kind (play on your turn, answer a spell, finish a Wiretap, pay a Paywall).
export function waitingOn(g) {
  if (g.winner) return null;
  if (g.pending) return g.pending.who;
  return g.turn;
}

// Cast a card from s's hand: an Enchantment or Sorcery on s's own turn (once a turn, empty stack), or an Instant in answer to the
// spell on top of the stack. Returns an error string or null.
export function cast(g, s, uid) {
  if (g.winner) return "The match is over.";
  const side = g.sides[s], i = find(side.hand, uid);
  if (i < 0) return "That card isn't in your hand.";
  const c = side.hand[i];
  if (isCounter(c)) {
    if (g.pending?.kind !== "answer" || g.pending.who !== s) return `${CARDS[c.card].name} can only answer a spell.`;
  } else {
    if (g.turn !== s || g.pending || g.stack.length) return "Not now.";
    if (g.cast) return "You've already cast a spell this turn.";
    g.cast = true;
  }
  side.hand.splice(i, 1);
  g.stack.push({ ...c, by: s });
  say(g, `${cap(NAMES[s])} cast${s === "a" ? "" : "s"} ${cardName(c)}${isCounter(c) ? " at " + CARDS[g.stack[g.stack.length - 2].card].name : ""}.`);
  g.pending = { kind: "answer", who: other(s) };
  return null;
}

// s lets the top spell resolve without answering it.
export function letIt(g, s) {
  if (g.pending?.kind !== "answer" || g.pending.who !== s) return "Nothing to answer.";
  g.pending = null;
  resolve(g);
  return null;
}

function toGrave(g, c) { g.sides[c.by].grave.push(strip(c)); }
const strip = ({ by, ...c }) => c;

// Resolve the stack from the top until it's empty or someone has to choose (a Paywall or a Wiretap).
function resolve(g) {
  while (g.stack.length && !g.pending && !g.winner) {
    const top = g.stack.pop();
    if (isCounter(top)) {
      const target = g.stack[g.stack.length - 1];
      toGrave(g, top);
      if (top.card === "paywall" && g.sides[target.by].hand.length) {
        g.pending = { kind: "paywall", who: target.by, uid: target.uid };   // the target stays on the stack until they choose
        say(g, `Paywall: ${NAMES[target.by]} can discard a card to keep ${CARDS[target.card].name}.`);
        return;
      }
      g.stack.pop();
      if (top.card === "rollback") { g.sides[target.by].deck.unshift(strip(target)); say(g, `${CARDS[target.card].name} is countered and goes on top of ${NAMES[target.by] === "you" ? "your" : "the dummy's"} deck.`); }
      else { toGrave(g, target); say(g, `${CARDS[target.card].name} is countered.`); }
    } else spell(g, top);
  }
}

function spell(g, c) {
  const me = g.sides[c.by], them = g.sides[other(c.by)];
  if (c.card === "broadcast") {
    me.field.push(strip(c));
    say(g, `Broadcast resolves: ${NAMES[c.by]} ${c.by === "a" ? "have" : "has"} ${me.field.length} of ${WIN}.`);
    if (me.field.length >= WIN) { g.winner = c.by; say(g, `${cap(NAMES[c.by])} win${c.by === "a" ? "" : "s"}!`); }
    return;
  }
  toGrave(g, c);
  if (c.card === "undelete") {
    me.deck = shuffle(me.deck.concat(me.grave)); me.grave = [];
    say(g, `Undelete: ${NAMES[c.by]} shuffle${c.by === "a" ? "" : "s"} the graveyard back in (${me.deck.length} cards in the deck).`);
  } else if (c.card === "wiretap") {
    const n = Math.min(3, them.deck.length);
    if (!n) { say(g, "Wiretap: their deck is empty, nothing to look at."); return; }
    g.pending = { kind: "wiretap", who: c.by, step: "mill", n, card: strip(c) };   // card: the Wiretap itself, shown while it is chosen
    say(g, `Wiretap: ${NAMES[c.by]} look${c.by === "a" ? "" : "s"} at the top ${n} of ${c.by === "a" ? "the dummy's" : "your"} deck.`);
  }
}

// Wiretap, step 1: s picks one of the looked-at cards for the graveyard; step 2 (two left): which one goes on top.
export function tap(g, s, uid) {
  const p = g.pending;
  if (p?.kind !== "wiretap" || p.who !== s) return "No Wiretap to finish.";
  const deck = g.sides[other(s)].deck, i = find(deck.slice(0, p.n), uid);
  if (i < 0) return "Pick one of the cards you're looking at.";
  if (p.step === "mill") {
    const [c] = deck.splice(i, 1);
    g.sides[other(s)].grave.push(c);
    p.n--;   // before the log line, so its board shows only the cards still being looked at (kura, Nov 4: a fourth card flashed in)
    if (p.n >= 2) p.step = "top";
    say(g, `Wiretap puts ${cardName(c)} in ${s === "a" ? "the dummy's" : "your"} graveyard.`);
    if (p.n >= 2) return null;
  } else {
    deck.unshift(...deck.splice(i, 1));
  }
  if (p.n) {   // one board with the rest going back on top, the Wiretap still shown (kura, Nov 4: they vanished at once)
    p.step = "back";
    say(g, `Wiretap puts ${p.n === 1 ? "the other card" : "the rest"} back on top of ${s === "a" ? "the dummy's" : "your"} deck.`);
  }
  g.pending = null;
  resolve(g);
  return null;
}

// Paywall: s discards card uid to keep the spell, or (uid null) lets it be countered.
export function pay(g, s, uid) {
  const p = g.pending;
  if (p?.kind !== "paywall" || p.who !== s) return "No Paywall to pay.";
  const side = g.sides[s];
  if (uid) {
    const i = find(side.hand, uid);
    if (i < 0) return "Pick a card from your hand to discard.";
    const [c] = side.hand.splice(i, 1);
    side.grave.push(c);
    say(g, `${cap(NAMES[s])} discard${s === "a" ? "" : "s"} ${CARDS[c.card].name} to get past the Paywall.`);
  } else {
    const target = g.stack.pop();
    toGrave(g, target);
    say(g, `${CARDS[target.card].name} is countered.`);
  }
  g.pending = null;
  resolve(g);
  return null;
}

// s ends the turn; the other player's hand refills to HAND (kura, Nov 4: "the player's hand refill every round"), a card at a time,
// so an empty deck still loses
export function pass(g, s) {
  if (g.winner) return "The match is over.";
  if (g.turn !== s || g.pending || g.stack.length) return "Not now.";
  g.turn = other(s); g.cast = false; g.n++;
  const side = g.sides[g.turn], n = Math.max(0, HAND - side.hand.length);
  for (let i = 0; i < n && !g.winner; i++) draw(g, g.turn);
  if (!g.winner) say(g, `${g.turn === "a" ? "Your turn: you draw" : "The dummy's turn: it draws"} ${n} card${n === 1 ? "" : "s"}.`);
  return null;
}

// What seat s may see: its own hand, both fields, graveyards and deck sizes; the other hand as a count; the top cards of the
// other deck only while s is Wiretapping them.
export function view(g, s) {
  const o = other(s), p = g.pending;
  const side = (x) => ({ hand: x === s ? g.sides[x].hand : g.sides[x].hand.length, deck: g.sides[x].deck.length, grave: g.sides[x].grave, field: g.sides[x].field });
  const v = { me: side(s), them: side(o), turn: g.turn === s ? "me" : "them", cast: g.cast, winner: g.winner && (g.winner === s ? "me" : "them"),
    stack: g.stack.map((c) => ({ ...strip(c), by: c.by === s ? "me" : "them" })), log: g.log, n: g.n, waiting: waitingOn(g) === s };
  if (p) v.pending = { kind: p.kind, mine: p.who === s, step: p.step, uid: p.uid };
  if (p?.kind === "wiretap") v.pending.card = { ...p.card, by: p.who === s ? "me" : "them" };
  if (p?.kind === "wiretap" && p.who === s) v.pending.look = g.sides[o].deck.slice(0, p.n);
  return v;
}
