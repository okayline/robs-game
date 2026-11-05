// Rob's Game rules: a blue-only card game (kura, Nov 4). Pure functions over a plain game object, so the Match Durable Object
// (index.js), the dummy (dummy.js) and the tests all use the same rules.
//
// Each player has a 30-card deck: 5 GPU, 5 Wiretap, 4 Spam, 2 Undelete, 6 Refute, 4 Remand, 2 Rollback, 2 Paywall. Start with 5 cards.
// On your turn: your hand refills to 5 (kura, Nov 4), then cast at most one Enchantment or Sorcery, then pass.
// Instants (Refute, Remand, Rollback, Paywall) are only cast in answer to a spell, and a Counter can be answered by another Counter:
// the stack resolves from the top, each Counter countering the spell just below it.
// You win when 3 of your GPUs have resolved. You lose when you must draw from an empty deck.
// The GPU's key in code is still "broadcast" (it was the Broadcast until v0.69), so old matches and the dummy's play keep working.
//
// A deck is an array with its top card at index 0.

export const CARDS = {
  broadcast: { name: "GPU", kind: "Enchantment", text: "Broken until it resolves, then its temps are stable. A player with 3 stable GPUs wins." },
  wiretap: { name: "Wiretap", kind: "Sorcery", type: "construction", text: "Look at the top 3 cards of their deck. Put 1 in their graveyard and the rest back in their deck." },
  spam: { name: "Spam", kind: "Sorcery", type: "guestbook", text: "Put the top 2 cards of their deck into their graveyard." },
  undelete: { name: "Undelete", kind: "Sorcery", type: "construction", text: "Shuffle your graveyard into your deck." },
  refute: { name: "Refute", kind: "Instant", type: "counter", text: "Counter target spell." },
  remand: { name: "Remand", kind: "Instant", type: "counter", text: "Counter target spell. Return it to its caster's hand." },
  rollback: { name: "Rollback", kind: "Instant", type: "counter", text: "Counter target spell. Put it on top of its caster's deck." },
  paywall: { name: "Paywall", kind: "Instant", type: "counter", text: "Counter target spell unless the player who cast it discards a card." },
};
// kura, Nov 4: "too many Wiretap"; 4 of them are Spam (was 13 Wiretap)
// kura, Nov 4: half of the 9 Wiretaps are counters, a new one: Remand (was 9 Wiretap, no Remand)
export const DECK = { broadcast: 5, wiretap: 5, spam: 4, undelete: 2, refute: 6, remand: 4, rollback: 2, paywall: 2 };
export const HAND = 5, WIN = 3;
export const isCounter = (c) => CARDS[c.card].kind === "Instant";
export const other = (s) => (s === "a" ? "b" : "a");
export const NAMES = { a: "you", b: "the Webmaster" };

// Flavour lines: real lines from old personal web pages (kura, Nov 4), one picked per card when the decks are dealt. The same lines,
// with where each was found, are in tap-game's page.html (by button type).
export const FLAVOUR = {
  wiretap: ["Lurker Lounge Lizard", "This site is still under construction", "I only sampled a bit of it but will return to view the rest when able.",
    "no time to scan it all but what I requested was interesting", "Some of these would look great on my home page."],
  // guestbook spam (tap-game page.html's guestbook lines: oocities.org/capecanaveral/lab/8803/geobook.html, 1998-2000, and oocities.org/mbreden/cats.html)
  spam: ["Wicked site one of the best I've seen! Visit my site.....", "Please sign my guest book.", "Good Site!!!", "New to internet, so you are first hit."],
  undelete: ["I am carrying out a major upgrade on my homepage", "Don't worry, I'm pretty sure I've got everything on back-up in case something happens...",
    "...come back next week when the other stuff's been recovered..."],
  refute: ["Stop! Think! Do you really want to do this?", "Please ask me before using these pictures", "Please do NOT link these graphics to my server",
    "Sorry, Your browser does not support this applet.", "NO TRESPASSING", "When pigs fly!"],
  // tap-game page.html's lines: oocities.org/esberet/Webrings.html; oocities.org/capecanaveral/lab/8803/geobook.html (1998-2000)
  remand: ["Go to the previous site!", "What about a new background?", "fantastische Bilder komme bald wieder"],
  rollback: ["Coming Soon (some of the diagram links don't work...be patient)", "...or just hit your \"back\" button on your web browser.", "Wednesday. More reviews. Be here!"],
  paywall: ["No frames? Too bad! Continue at your own risk.", "Once you're here you're stuck.", "Any reproduction, duplication, or distribution in any form is expressly prohibited."],
};

// The GPUs (kura, Nov 5: "can Broadcasts be GPUs please", for Rob, who builds PCs). Each side gets 5 of these 10, all different. pic: the
// picture in public/gpu/ (kura's own 88x31 pixel art); spin: public/gpu/<pic>-frames.png holds 24 frames of its fans turning, shown once it
// has resolved (the other pictures stay still for now). gen: the chip generation, after "Enchantment —" on the big card. flav: a real
// line from when the card was on sale (kura's pick, Nov 5; kura: capital first letter and proper punctuation), from:
//   RTX 5090: NVIDIA's CES 2025 claim, pcgamer.com/hardware/graphics-cards/nvidia-announces-the-rtx-50-series-led-by-the-usd1-999-rtx-5090-with-twice-the-performance-of-the-4090
//   RTX 5080: Jensen Huang at CES 2025, techpowerup.com/330611/nvidia-2025-international-ces-keynote-liveblog
//   RTX 5070 Ti: NVIDIA's launch article title, nvidia.com/en-in/geforce/news/rtx-5070-ti-out-now/
//   RTX 5070: Jensen Huang at CES 2025, pcgamer.com/hardware/graphics-cards/is-the-new-rtx-5070-really-as-fast-as-nvidias-previous-flagship-rtx-4090-gpu-turns-out-the-answer-is-yes-kinda
//   RTX 4090: NVIDIA's launch article, nvidia.com/en-us/geforce/news/geforce-rtx-4090-out-now
//   GTX 1080 Ti: NVIDIA's launch article, nvidia.com/en-us/geforce/news/nvidia-geforce-gtx-1080-ti
//   Arc B580: Intel Arc's banner on asrock.com/Graphics-Card/Intel/Intel%20Arc%20B580%20Steel%20Legend%2012GB%20OC/index.jp.asp
//   RX 9070 XT: David McAfee, AMD, at launch, techpowerup.com/333301/amd-rdna-4-and-radeon-rx-9070-series-unveiled-usd-549-usd-599
//   RX 9070: AMD's RX 9000 Series line, amd.com/en/products/graphics/desktops/radeon/9000-series/amd-radeon-rx-9070-gre.html
//   Voodoo3 3000: a 1999 Voodoo3 print ad as an eBay seller describes it, ebay.com/itm/166305819875 (not confirmed elsewhere)
export const GPUS = [
  { model: "RTX 5090", pic: "rtx-5090", spin: true, gen: "Blackwell", flav: "Twice the performance of the 4090." },
  { model: "RTX 5080", pic: "rtx-5080", spin: true, gen: "Blackwell", flav: "AI is coming home to GeForce." },
  { model: "RTX 5070 Ti", pic: "rtx-5070-ti", spin: true, gen: "Blackwell", flav: "Supercharge gaming and creating." },
  { model: "RTX 5070", pic: "rtx-5070", spin: true, gen: "Blackwell", flav: "RTX 4090 performance at $549." },
  { model: "RTX 4090", pic: "rtx-4090", gen: "Ada Lovelace", flav: "Beyond fast." },
  { model: "GTX 1080 Ti", pic: "gtx-1080-ti", gen: "Pascal", flav: "The world's fastest gaming GPU." },
  { model: "Arc B580", pic: "arc-b580", spin: true, gen: "Battlemage", flav: "Modern tech, better graphics, better plays." },
  { model: "RX 9070 XT", pic: "rx-9070-xt", gen: "RDNA 4", flav: "A significant leap forward in graphics performance." },
  { model: "RX 9070", pic: "rx-9070", gen: "RDNA 4", flav: "Ultra-fast gaming, with next-level visuals and features." },
  { model: "Voodoo3 3000", pic: "voodoo3-3000", gen: "Avenger", flav: "Can you tell me if your eyeball rolled?" },
];

export function shuffle(arr, rnd = Math.random) {
  for (let i = arr.length - 1; i > 0; i--) { const j = Math.floor(rnd() * (i + 1)); [arr[i], arr[j]] = [arr[j], arr[i]]; }
  return arr;
}
const pick = (arr, rnd) => arr[Math.floor(rnd() * arr.length)];

// One deck from the deal pool (88x31's commons and uncommons: dungeon-items dealPool). Each card is a button of its card's type,
// all different within a deck while the type has enough (construction has exactly 15 for 15 slots); both decks deal separately.
// The GPUs come from GPUS instead, 5 different ones per deck.
export function dealDeck(pool, side, rnd = Math.random) {
  const byType = {};
  for (const b of pool) if (!b.hidden) (byType[b.type] ??= []).push(b);
  const left = Object.fromEntries(Object.entries(byType).map(([t, l]) => [t, shuffle([...l], rnd)]));
  const deck = [], gpus = shuffle([...GPUS], rnd);
  for (const [card, n] of Object.entries(DECK)) {
    if (card === "broadcast") {
      for (let i = 0; i < n; i++) {
        const g = gpus[i % gpus.length];
        deck.push({ uid: `${side}${deck.length}`, card, id: 0, name: g.model, image: `/gpu/${g.pic}.png`, spin: g.spin ? `/gpu/${g.pic}-frames.png` : null,
          gen: g.gen, series: null, rarity: "common", flav: g.flav });
      }
      continue;
    }
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
  const g = { sides: { a: side(deckA), b: side(deckB) }, turn: rnd() < 0.5 ? "a" : "b", cast: false, stack: [], pending: null, winner: null, log: [], n: 1, moves: 0 };
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
  g.moves = (g.moves ?? 0) + 1;   // a card played this turn, by either side (counters too): the page's "Turn 4, Move 2" (kura, Nov 5)
  // the answer is asked for before the log line, so that line's board already shows it (kura, Nov 4: the Resolve button was missing
  // while the dummy's cast was shown)
  g.pending = { kind: "answer", who: other(s) };
  say(g, `${cap(NAMES[s])} cast${s === "a" ? "" : "s"} ${cardName(c)}${isCounter(c) ? " at " + CARDS[g.stack[g.stack.length - 2].card].name : ""}.`);
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
        say(g, `Paywall resolves on ${CARDS[target.card].name}.`);   // no instructions in the log (kura, Nov 5)
        return;
      }
      g.stack.pop();
      if (top.card === "remand") { g.sides[target.by].hand.push(strip(target)); say(g, `${CARDS[target.card].name} is countered and goes back to ${NAMES[target.by] === "you" ? "your" : "the Webmaster's"} hand.`); }
      else if (top.card === "rollback") { g.sides[target.by].deck.unshift(strip(target)); say(g, `${CARDS[target.card].name} is countered and goes on top of ${NAMES[target.by] === "you" ? "your" : "the Webmaster's"} deck.`); }
      else { toGrave(g, target); say(g, `${CARDS[target.card].name} is countered.`); }
    } else spell(g, top);
  }
}

function spell(g, c) {
  const me = g.sides[c.by], them = g.sides[other(c.by)];
  if (c.card === "broadcast") {
    me.field.push(strip(c));
    say(g, `GPU resolves: ${NAMES[c.by]} ${c.by === "a" ? "have" : "has"} ${me.field.length} of ${WIN} stable.`);   // kura, Nov 5
    if (me.field.length >= WIN) { g.winner = c.by; say(g, `${cap(NAMES[c.by])} win${c.by === "a" ? "" : "s"}!`); }
    return;
  }
  toGrave(g, c);
  if (c.card === "undelete") {
    me.deck = shuffle(me.deck.concat(me.grave)); me.grave = [];
    say(g, `Undelete: ${NAMES[c.by]} shuffle${c.by === "a" ? "" : "s"} the graveyard back in (${me.deck.length} cards in the deck).`);
  } else if (c.card === "spam") {   // a blind mill: no look, no choice (kura, Nov 4: another way to mill than Wiretap)
    const n = Math.min(2, them.deck.length);
    if (!n) { say(g, "Spam: their deck is empty, nothing to put in the graveyard."); return; }
    them.grave.push(...them.deck.splice(0, n));
    say(g, `Spam puts the top ${n === 1 ? "card" : `${n} cards`} of ${c.by === "a" ? "the Webmaster's" : "your"} deck in ${c.by === "a" ? "its" : "your"} graveyard.`);
  } else if (c.card === "wiretap") {
    const n = Math.min(3, them.deck.length);
    if (!n) { say(g, "Wiretap: their deck is empty, nothing to look at."); return; }
    g.pending = { kind: "wiretap", who: c.by, step: "mill", n, card: strip(c) };   // card: the Wiretap itself, shown while it is chosen
    say(g, `Wiretap: ${NAMES[c.by]} look${c.by === "a" ? "" : "s"} at the top ${n} of ${c.by === "a" ? "the Webmaster's" : "your"} deck.`);
  }
}

// Wiretap: s picks one of the looked-at cards for the graveyard, and the rest go back on top of the deck in the order they were (kura,
// Nov 5: "skip the player selecting which one goes back"; there was a second pick for which went under the other).
export function tap(g, s, uid) {
  const p = g.pending;
  if (p?.kind !== "wiretap" || p.who !== s) return "No Wiretap to finish.";
  const deck = g.sides[other(s)].deck, i = find(deck.slice(0, p.n), uid);
  if (i < 0) return "Pick one of the cards you're looking at.";
  const [c] = deck.splice(i, 1);
  g.sides[other(s)].grave.push(c);
  p.n--;   // before the log line, so its board shows only the cards still being looked at (kura, Nov 4: a fourth card flashed in)
  say(g, `Wiretap puts ${cardName(c)} in ${s === "a" ? "the Webmaster's" : "your"} graveyard.`);
  if (p.n) {   // one board with the rest going back on top, the Wiretap still shown (kura, Nov 4: they vanished at once)
    p.step = "back";
    say(g, `Wiretap puts ${p.n === 1 ? "the other card" : "the rest"} back on top of ${s === "a" ? "the Webmaster's" : "your"} deck.`);
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

// Instead of casting a spell on their turn, s may discard a card from their hand to draw a card (kura, Nov 4: "i have wanted a discard
// mechanic", a rule, no text on the cards). It counts as their spell for the turn, and it keeps a match from stalling: with two full
// hands of cards that can't be cast on your own turn, the refill drew nothing and both sides passed forever.
export function discard(g, s, uid) {
  if (g.winner) return "The match is over.";
  if (g.turn !== s || g.pending || g.stack.length) return "Not now.";
  if (g.cast) return "You've already cast a spell this turn.";
  const side = g.sides[s], i = find(side.hand, uid);
  if (i < 0) return "That card isn't in your hand.";
  const [c] = side.hand.splice(i, 1);
  side.grave.push(c); g.cast = true; g.moves = (g.moves ?? 0) + 1;   // discarding to draw is a move too
  say(g, `${cap(NAMES[s])} discard${s === "a" ? "" : "s"} ${cardName(c)} to draw a card.`);
  draw(g, s);
  return null;
}

// s ends the turn; the other player's hand refills to HAND (kura, Nov 4: "the player's hand refill every round"), a card at a time,
// so an empty deck still loses
export function pass(g, s) {
  if (g.winner) return "The match is over.";
  if (g.turn !== s || g.pending || g.stack.length) return "Not now.";
  g.turn = other(s); g.cast = false; g.n++; g.moves = 0;
  const side = g.sides[g.turn], n = Math.max(0, HAND - side.hand.length);
  for (let i = 0; i < n && !g.winner; i++) draw(g, g.turn);
  if (!g.winner) say(g, `${g.turn === "a" ? "Your turn: you draw" : "The Webmaster's turn: it draws"} ${n} card${n === 1 ? "" : "s"}.`);
  return null;
}

// What seat s may see: its own hand, both fields, graveyards and deck sizes; the other hand as a count; the top cards of the
// other deck only while s is Wiretapping them.
export function view(g, s) {
  const o = other(s), p = g.pending;
  const side = (x) => ({ hand: x === s ? g.sides[x].hand : g.sides[x].hand.length, deck: g.sides[x].deck.length, grave: g.sides[x].grave, field: g.sides[x].field });
  const v = { me: side(s), them: side(o), turn: g.turn === s ? "me" : "them", cast: g.cast, winner: g.winner && (g.winner === s ? "me" : "them"),
    stack: g.stack.map((c) => ({ ...strip(c), by: c.by === s ? "me" : "them" })), log: g.log, n: g.n, moves: g.moves ?? 0, waiting: waitingOn(g) === s };
  if (p) v.pending = { kind: p.kind, mine: p.who === s, step: p.step, uid: p.uid };
  if (p?.kind === "wiretap") v.pending.card = { ...p.card, by: p.who === s ? "me" : "them" };
  if (p?.kind === "wiretap") v.pending.n = p.n;   // how many cards are being looked at: the other side sees them face down
  if (p?.kind === "wiretap" && p.who === s) v.pending.look = g.sides[o].deck.slice(0, p.n);
  return v;
}
