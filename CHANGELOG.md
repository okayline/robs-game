# Rob's Game Changelog

Newest first. Times are Hawaii time (HST).

---

## v0.4 "Big Stack" · Wed Nov 4, 8:27 PM
- The cards being cast (the stack) are shown full size, with their text and flavour, in the middle of the screen; the row takes no room when nothing is being cast. kura: the dummy's card had no text. Removed: small cards on the stack.

## v0.3 "Pictures" · Wed Nov 4, 8:26 PM
- Button pictures come from this site (/img/N), copied from tap-game: it fetches 88x31's picture once and keeps it cached. kura's screenshot showed no pictures. Only new matches get them. Small cards (fields, the stack, a Wiretap's look) are now just the name, picture and card name, bigger and easier to read, and who cast a card on the stack is a label under it. Removed: pictures loaded straight from 88x31.app, the small cards' stretched type line (a Broadcast's was a big dark block), and the label that sat over the top of the card.

## v0.2 "One Screen" · Wed Nov 4, 8:24 PM
- The whole match fits one screen: smaller cards (your hand stays one row and scrolls sideways if it's too wide; fields and the stack use small cards), tighter spacing, 3 log lines, and on a short window the screen shrinks to fit, as UN/TAP does (its fit()). kura: "it's way too tall". Removed: the bigger hand cards that wrapped to more rows, the full-card-height field rows, and 3 of the 6 log lines.

## v0.1 "First Deal" · Wed Nov 4, 8:22 PM
- The first playable version, against a scripted dummy. Six cards (Broadcast, Wiretap, Undelete, Refute, Rollback, Paywall) dealt from 88x31's common and uncommon buttons by type (neon, construction, counter), each with a real flavour line from an old web page. Counter fights, Wiretap's look-and-mill, Paywall's discard, Undelete's reshuffle, three Broadcasts to win and decking out to lose. Removed: nothing (new game).
