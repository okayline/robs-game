# Rob's Game Changelog

Newest first. Times are Hawaii time (HST).

---

## v0.21 "Refill" · Wed Nov 4, 9:10 PM
- At the start of each turn, the player's hand refills to 5 (both players), one card at a time, so drawing from an empty deck still loses. The log says how many were drawn. kura: "have the player's hand refill every round". Removed: drawing 1 card a turn, and the first player skipping their first draw (their hand is already 5).

## v0.20 "Back on Top" · Wed Nov 4, 9:02 PM
- After a Wiretap's picks, its unpicked cards fly back onto the dummy's deck while the Wiretap stays on the stack, with a log line ("Wiretap puts the rest back on top of the dummy's deck"); the next board takes the Wiretap to the graveyard. kura: the card and the rest vanished at once. Removed: the Wiretap and its last cards disappearing the moment the last pick was made.

## v0.19 "From Your Hand" · Wed Nov 4, 8:59 PM
- A card you play flies onto the stack from where it was in your hand. A Wiretap's three cards come off the top of the dummy's deck one by one, more slowly (0.9 s each, 0.4 s apart), and sit a little higher. Fixed: after you picked a card for the graveyard, a fourth card flashed into its place for a moment (the log line's board was taken before the look shrank). kura's notes on the last match. Removed: cards you play starting from the middle of your hand, the look cards appearing at once at the bottom of the row, and the flash.

## v0.18 "Your Answer" · Wed Nov 4, 8:54 PM
- Fixed: when the dummy cast a spell, the match could stop at "The dummy is thinking…" with no way to answer. Its log line was sent before the spell asked you for an answer, and nothing was sent after it; now the board as it stands is always sent last. Your hand keeps its places: a card you play leaves a gap, and the next card dealt fills it. kura: "got to this screen and cant continue" and "can the remaining cards stay in the same place". Removed: the hand closing up when a card leaves it.

## v0.17 "Fly In" · Wed Nov 4, 8:51 PM
- A card cast onto the stack flies there from your hand or the dummy's side (the same flight as dealing, like UN/TAP's cards sliding between rows), and nothing clips it. A Wiretap stays on the stack, full size, while its cards are picked, with the cards it looks at beside it. The line saying what to do now is the last line of the log, in bold. A little more space between the piles and their labels. kura: the slide-in was cut off at the top; the Wiretap vanished as soon as it resolved; "remove it, and incorporate it into the log"; "little more space above deck". Removed: the slide up/down animations, the stack's clipping, the prompt line above the stack, and the Wiretap leaving the stack before its cards were picked.

## v0.16 "Player" · Wed Nov 4, 8:46 PM
- Your deck and graveyard are at the top left of your panel (the dummy's stay at the right of its panel), your stat line says "PLAYER", and it sits a little closer to the row above. Removed: your piles at the right, "YOU", and some of the space above it.

## v0.15 "Deal" · Wed Nov 4, 8:45 PM
- Cards are dealt: each card that comes into your hand flies there from your deck (the opening five one after another), so you can see draws happen. Your deck now has a face-down pile too, and both sides' piles (deck, then graveyard) are at the right of their panels; your buttons stay at the far right. kura: "no way for the cards to get from the deck to my hand", "the graveyard can be on the right more", "a picture of the player's deck". Removed: cards appearing in your hand with no movement, your deck count on your stat line (the pile shows it), and the piles at the left.

## v0.14 "Line by Line" · Wed Nov 4, 8:43 PM
- Every action shows on its own, 1.5 s apart, with its log line: a cast, a counter, each step of a counter fight resolving, a Wiretap, a draw, a pass. The match sends one board per log line (rules.js hooks.say), yours and the dummy's. kura: actions and the log showed up all at once. Removed: one board per dummy move, which bunched several actions and log lines together.

## v0.13 "Slower" · Wed Nov 4, 8:41 PM
- Slower: the dummy's moves show 1.5 s apart, and a card arriving takes 0.6 s to slide or pop in. Removed: the 0.8 s gap between moves and the 0.35–0.4 s card animations.

## v0.12 "Holds Still" · Wed Nov 4, 8:40 PM
- Every panel keeps one height whatever is in it (the prompt, the stack, the error line, the log, the piles and Broadcast rows, your hand), so nothing on the screen moves up or down. The shared footer is drawn in its own spot under the screen, a little in from the right, as in UN/TAP. kura: "fixed height and never move up and down" and "move the footer left a little". Removed: panels that grew and shrank with their cards, the stack row collapsing when empty, and the footer drawn at the page's right edge.

## v0.11 "One at a Time" · Wed Nov 4, 8:37 PM
- The dummy's moves show one at a time, 0.8 s apart: after your move the match sends a board for each move (yours, then each of the dummy's), and the page plays them in order. kura: "space out when they are displayed". Removed: jumping straight to the board after all of the dummy's moves.

## v0.10 "Stack" · Wed Nov 4, 8:36 PM
- Cards animate in: a card you cast slides up from your hand, one the dummy casts slides down from its side, and a Broadcast that resolves pops into its row. Only a card that just arrived moves; nothing moves for people who ask their system for reduced motion. On the stack, each card cast in answer sits on top of the one before, overlapping it and a little higher, like Magic's stack. Removed: the stack's cards side by side, and cards appearing with no movement.

## v0.9 "Resolve" · Wed Nov 4, 8:34 PM
- The button for letting a spell resolve says "Resolve", and the prompt above says "or resolve it". Removed: "Let it resolve" and "or let it resolve".

## v0.8 "Still Grey" · Wed Nov 4, 8:34 PM
- A graveyard's top card is grey, and its picture is a still frame instead of a moving GIF (drawn once on a canvas, like UN/TAP's knocked-out buttons). Removed: the graveyard card in full colour with its animation.

## v0.7 "Your Buttons" · Wed Nov 4, 8:31 PM
- Your buttons (Let it resolve, Pass turn, Don't pay) are in the upper right of your panel, and the game log's text is smaller (13 → 11). Removed: the buttons in the middle panel.

## v0.6 "Fit Names" · Wed Nov 4, 8:30 PM
- Small cards' text fits its bars: the name is smaller so it stays inside the pink name bar, and the card name is a little smaller in its bar. kura's screenshot showed both overlapping. Removed: the 9-size name and card name on small cards.

## v0.5 "Piles" · Wed Nov 4, 8:28 PM
- The dummy's deck shows as a face-down pile (UN/TAP's card-back stripes, thicker when fuller) with its count, and both graveyards show their top card face up with a count (an empty dashed outline when empty), beside each side's Broadcasts. kura: "a visual representation of the opponents card deck ... and maybe the graveyards too". Removed: the dummy's deck and graveyard counts and your graveyard count on the stat lines (the piles show them). Your deck count stays on your stat line.

## v0.4 "Big Stack" · Wed Nov 4, 8:27 PM
- The cards being cast (the stack) are shown full size, with their text and flavour, in the middle of the screen; the row takes no room when nothing is being cast. kura: the dummy's card had no text. Removed: small cards on the stack.

## v0.3 "Pictures" · Wed Nov 4, 8:26 PM
- Button pictures come from this site (/img/N), copied from tap-game: it fetches 88x31's picture once and keeps it cached. kura's screenshot showed no pictures. Only new matches get them. Small cards (fields, the stack, a Wiretap's look) are now just the name, picture and card name, bigger and easier to read, and who cast a card on the stack is a label under it. Removed: pictures loaded straight from 88x31.app, the small cards' stretched type line (a Broadcast's was a big dark block), and the label that sat over the top of the card.

## v0.2 "One Screen" · Wed Nov 4, 8:24 PM
- The whole match fits one screen: smaller cards (your hand stays one row and scrolls sideways if it's too wide; fields and the stack use small cards), tighter spacing, 3 log lines, and on a short window the screen shrinks to fit, as UN/TAP does (its fit()). kura: "it's way too tall". Removed: the bigger hand cards that wrapped to more rows, the full-card-height field rows, and 3 of the 6 log lines.

## v0.1 "First Deal" · Wed Nov 4, 8:22 PM
- The first playable version, against a scripted dummy. Six cards (Broadcast, Wiretap, Undelete, Refute, Rollback, Paywall) dealt from 88x31's common and uncommon buttons by type (neon, construction, counter), each with a real flavour line from an old web page. Counter fights, Wiretap's look-and-mill, Paywall's discard, Undelete's reshuffle, three Broadcasts to win and decking out to lose. Removed: nothing (new game).
