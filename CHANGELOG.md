# Rob's Game Changelog

Newest first. Times are Hawaii time (HST).

---

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
