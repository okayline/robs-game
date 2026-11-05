# Rob's Game Changelog

Newest first. Times are Hawaii time (HST).

---

## v0.44 "Remand" · Wed Nov 4, 11:24 PM
- A new counter, Remand (Instant): "counter target spell. Return it to its caster's hand" (kura: "let's do a new mechanic. Remand please"). Unlike Magic's Remand, it doesn't draw a card (drawing comes out of your own deck). Half the Wiretaps are Remands: each deck is 5 Wiretap and 4 Remand. The dummy counters with Refute first, then Rollback, then Remand, then Paywall. A remanded card flies from the stack back to the hand (the dummy's, face down, to its hand count). Its flavour lines are real ones from tap-game's list. Removed: 4 of the 9 Wiretaps.
- A discard rule, no text on the cards (kura: "i have wanted a discard mechanic", "i dont want to write a lot of text on every card"): on your turn, instead of casting a spell, you may discard a card to draw a card. The pink bar shows Discard beside Pass turn; Discard, then tap the card (two taps, so a stray tap throws nothing away; Cancel backs out). The dummy discards its least useful card (an Undelete, then its weakest counter) when it has nothing to cast and a full hand. The card flies to your graveyard and the new one is dealt from your deck. Removed: nothing.
- Fixed: a match could go on forever. When both hands were 5 cards that can't be cast on your own turn (counters, or an Undelete the dummy won't cast), the refill drew 0 cards and both sides passed forever: 1 in 400 simulated matches before Remand, 8 in 400 with it. Discarding to draw keeps the decks shrinking. In 400 simulated matches (the dummy's rules playing both sides): none unfinished, the longest 44 turns, 15.4 turns on average, 280 won by 3 Broadcasts and 120 by decking. Removed: nothing.

## v0.43 "Auto Pass" · Wed Nov 4, 11:18 PM
- When passing the turn is your only move (no card in your hand you can play then), it happens by itself 1 s after the last board of the move has shown (kura: "instead of PASS TURN can we have it automatically go to the next turn ... give it a beat"). The pink button says "Passing…" and can't be pressed. A new board or a move of yours cancels the wait. "Pass turn" still shows when you have a card you could cast instead, and Resolve and Don't pay stay buttons (kura: "i still like RESOLVE though, just not the final PASS"). Removed: pressing "Pass turn" when there was nothing else to do.

## v0.42 "No Labels" · Wed Nov 4, 11:12 PM
- No label under the cards on the stack (kura: "get rid of YOU under the card in the play area"), and the room it took goes to the cards (kura: "make the cards in the play area bigger"): 179px wide on a wide screen (was 162), about 136px on a 390px phone (was 119), with the middle panel the same height. A Wiretap's look cards grow a little with them. Removed: the "you" label and its 24px, and card()'s tag option (its last use).

## v0.41 "Off Air" · Wed Nov 4, 11:12 PM
- Each empty Broadcast place shows a crossed-out signal and "Broadcast: off" (kura: "could we put like Broadcast: OFF and have some sort of no signal sign"), in small grey capitals sized to the place (about 8px on a wide screen, 6px on a phone; kura: "can the text be smaller"). Removed: the empty dotted places with nothing in them.

## v0.40 "Spam" · Wed Nov 4, 11:08 PM
- A new Sorcery, Spam: "put the top 2 cards of their deck into their graveyard" (kura: "let's add sorcery, spam"), a blind mill with no look and no choice. Its picture is a Guestbook button and its flavour lines are real guestbook lines (from tap-game's list). Each deck is 9 Wiretap and 4 Spam. The dummy casts Spam before a Wiretap, and counters your Spam as it does your Wiretap (only while it holds 3 or more counters). The card Spam mills flies from the deck to the graveyard. In 400 simulated games (the dummy's rules playing both sides): 19.2 turns a match on average (was 23.5), 159 won by 3 Broadcasts (was 72), 240 by decking (was 328), 1 left unfinished after 400 moves (was 0). Removed: 4 of the 13 Wiretaps.
- Fixed: the page threw an error, and stopped drawing the rest of that board, when a card went to a graveyard under another card going there in the same step (graveOf() looked the graveyard up by the wrong kind of name, since v0.33). Spam does this every time. Removed: the wrong lookup.

## v0.39 "To the Graveyard" · Wed Nov 4, 10:56 PM
- A finished Wiretap flies from the stack to its caster's graveyard, as a resolved sorcery goes to the graveyard in Magic (kura: "after the wiretap, the main card just disappeared, could it go to the graveyard"). The match puts it in the graveyard as soon as it starts resolving, so the page showed it on the stack and on top of the graveyard at once, and it had nowhere to fly; the graveyard now leaves it out (and doesn't count it) until it leaves the stack. Removed: the Wiretap vanishing from the stack.

## v0.38 "Under" · Wed Nov 4, 10:28 PM
- A Wiretap's second pick is the card that goes back under the other one, so the other card ends up on top (kura: "can the card the player picks be the one that goes on bottom"). The dummy still leaves the order as it is (it now picks the second card). The log asks: "Wiretap: pick the card to go under the other." Removed: the second pick being the card that goes on top.
- The dummy's cards on the stack have no label under them (kura: "can we remove DUMMY text"); yours still say "you". Removed: the "dummy" label.

## v0.37 "Big Stack" · Wed Nov 4, 10:41 PM
- The card being played on the stack is big (kura: "make the main card being played on the game field a lot bigger, not smaller"): 1.45 times a hand card on a wide screen (162px instead of 112px), as wide as a hand card on a phone (about 119px instead of 69px). The middle panel is that much taller, so on a phone the screen shrinks to fit a little more. Removed: the stack cards at hand-card size (desktop) and one fifth of the screen (phone).
- A Wiretap's look cards are stacked down the right of the stack (kura: "3 buttons stacked vertically on the right"), as big as fit there: about 118px on a wide screen, 54px on a phone. Removed: the three side by side, and their lift above the stack's bottom.

## v0.36 "Edge to Edge" · Wed Nov 4, 10:36 PM
- On a phone the panels, the pink bar and the log sit 6px in from the screen's edges with 4px inside the panels, like UN/TAP's (kura: "make the phone width the same as un/tap"); every card is that much wider (your hand cards about 11px each on a 390px phone). Removed: the phone's 16px page sides and 10px panel sides.
- No glow (kura: "no glow please"): cards you can click keep their pointer, and the ones you can't play stay dimmed. Removed: the pink glow around cards you can click.

## v0.35 "Stays Put" · Wed Nov 4, 10:32 PM
- The stack's cards stay in the middle, and a Wiretap's look cards (yours, and the dummy's face-down ones) come in to their right, sized to fit there (kura: "can the main card stay where it is and the buttons come in to the right of it"): about 70px wide on a desktop, 40px on a phone (hold one to see it whole). Removed: the stack re-centering when the look cards came in, which jumped the Wiretap left.
- Fixed: after a Wiretap's first pick, the next click was lost (kura: "the next click is a dropped click"). The last board of a move is usually the same as the one before it (2,133 of 2,327 simulated moves, every first Wiretap pick); the page redrew it 1.5 s later, replacing the cards under your finger. A board the same as the one on screen is now skipped. Removed: that redraw, and the 1.5 s pause before it.

## v0.34 "Always Pink" · Wed Nov 4, 10:18 PM
- The pink button is always there (kura: "after i click pass turn the pink button disappeared again! could we always see the pink button"). With nothing for you to press it can't be pressed and says what's happening: "Dummy's turn", "Dummy's answering" (your spell, on your turn), "Pick a card" (your Wiretap), "You win" or "The dummy wins". Removed: the empty space where the button was.

## v0.33 "Where It Went" · Wed Nov 4, 10:24 PM
- One rule for every card that leaves a spot (kura: "i like your rule"): it flies to where it went, one after another, 0.4 s apart, 0.7 s each. A resolved Broadcast flies from the stack to its place; a countered spell, a used counter, a finished Wiretap or Undelete fly to their graveyard; your Paywall discard flies from your hand to your graveyard; your Wiretap's pick flies to the dummy's graveyard; a card going onto a deck (Rollback, Undelete's top card) turns face down halfway there. A card now out of sight (in a deck, or under a newer graveyard card) is copied, and the copy flies onto the pile. The dummy's draws: face-down cards fly from its deck to its hand count. Removed: the Broadcast's pop-in with a bounce at its place, and cards vanishing from the stack and your hand.

## v0.32 "Face Down" · Wed Nov 4, 10:20 PM
- Fixed: the Resolve button was missing on the board that shows the dummy's cast (kura: "the resolve button disappeared when it was the dummy's turn"); it came back a step later. A cast now asks for an answer before its log line is written, so that board shows Resolve. Removed: that step without a button.
- The dummy's Wiretap shows what happens (kura: "simply and lightly animate what's actually happening"): your top cards come off your deck face down, one by one, beside the Wiretap; the one it picks flies to your graveyard; the rest fly back onto your deck. The match now tells your page how many cards are being looked at (only the count). Removed: the Wiretap just standing on the stack and going.
- Your Wiretap's cards keep their places on screen while you pick, then turn face down halfway as they fly back onto the dummy's deck, in the order they go back, the new top card last (kura: "have them turn face down ... and go in the correct order"). Removed: the cards reordering on screen just before going back, and flying back face up.

## v0.31 "Right Edge" · Wed Nov 4, 10:17 PM
- On a phone, your 3 Broadcast places sit at the right edge of your row, with space between them and your graveyard (kura: "left two deck and graveyard can have space between right three broadcast places", "for phones only"). Removed: the places bunched just right of the graveyard.

## v0.30 "Columns" · Wed Nov 4, 10:14 PM
- Wider than a phone, each row of piles and Broadcasts (3 places, deck and graveyard: 5 things) lines up in your hand's 5 columns, each as wide as a hand card (kura: "spread out evenly across and match the cards below them"). Phones are unchanged. Removed: on wider screens, the smaller piles and places (100px) bunched at one end of their rows.

## v0.29 "Three Places" · Wed Nov 4, 10:10 PM
- Each side's Broadcasts fill three dotted places, one for each Broadcast needed to win (kura: "blank areas for the 3 broadcast cards, dotted lines, and then they can show there"). Removed: the "No Broadcasts yet." text.
- Your button (Pass turn, Resolve, Don't pay) is a pink bar of its own above your panel, like UN/TAP's (kura: "let's have the pass turn line be it's own panel like in un/tap"); the bar keeps its height when there's no button. This also makes room for your three places on a phone. Removed: the small pink button at the right of your panel, and the 88px height it kept your row of piles at.

## v0.28 "Big Card" · Wed Nov 4, 10:05 PM
- UN/TAP's big card, copied from tap-game (kura: "copy the big card hover thing from un/tap exactly please, its perfect there"): hold any card (your hand, the stack, the Broadcasts, a graveyard's top card, a Wiretap's look) for 0.45 s, or rest the mouse on it for 1.2 s, to see it whole over a dimmed screen; it turns with your finger or mouse, shows the striped back past a quarter turn, and has UN/TAP's thin edge. A hold doesn't also cast the card, and a long press opens no menu. No big card from a mouse while the boards after a move are playing. Removed: the browser's own hover tooltip on every card (its name and effect).

## v0.27 "Snug" · Wed Nov 4, 9:58 PM
- The dummy's row of piles and Broadcasts is only as tall as a small card and its label, so on a phone its panel has no empty space under "deck" (kura: "a lot of space on the dummy's panel underneath DECK 25"; about 31px on a 390px phone). Desktop is unchanged (its small cards already need more than 88px). Removed: the 88px floor on the dummy's row (it was there for your buttons; your row keeps it).

## v0.26 "Log Panel" · Wed Nov 4, 9:56 PM
- The log is a panel of its own under yours, like UN/TAP's (kura: "take the log out of the game panel and can we make a panel for it like in un/tap"): cream, italic EB Garamond, newest at the top next to your panel, each older line fainter, 3 lines (kura: "only have it show three lines"). Its top line still says what to do now, in bold. Removed: the log inside the middle panel (3 small grey monospace lines, newest at the bottom, under the stack).

## v0.25 "In Order" · Wed Nov 4, 9:50 PM
- Fixed: after your move, the boards the page plays one at a time all showed the end of the round for your hand, both fields, both graveyards and the log, so your hand refilled before the round was over (kura: "the cards refill from the deck before the round is over"). The match now copies each board when its log line is written. Removed: the boards sharing the game's own lists, which kept changing until they were sent.
- On a phone, the deck in your hand's last place shows its count in the middle of the card back (kura: "just put a 20 in the middle of the back of the card"). Removed: the "deck 20" label under it.

## v0.24 "Two Rows" · Wed Nov 4, 9:47 PM
- On a phone (500px wide or less) your hand is two rows of 3, so each card is about 1.7 times as wide (108px instead of 63px on a 390px screen), and your deck sits face down at card size in the last place, with its count under it. kura: "is there a way to make the cards bigger on mobile??" and "last space can be the player's deck, face down cards". Dealt cards fly from whichever deck is showing. Fixed: the hand was 6px too wide on every phone and scrolled sideways (the card width left 72px for padding and gaps; it needs 78px). Removed: the phone hand's single row of 5 and its sideways scrollbar, and on a phone, the deck in the piles at the top of your panel (the graveyard stays there).

## v0.23 "Deep Space" · Wed Nov 4, 9:32 PM
- The page's background is the same space picture as UN/TAP (`public/space.jpg`, 2560 × 1440, 378 KB), fixed behind everything. kura: "can you use this for robs-game background as well?" Removed: the flat midnight-blue background (it stays only as the colour shown until the picture loads).

## v0.22 "Stays Put" · Wed Nov 4, 9:12 PM
- A Wiretap's unpicked cards fly back onto the dummy's deck one at a time, in the order they go back: the card you chose for the top lands last, on top. They don't fade; each stays on the deck pile, at its size, until the next board. kura: "can they not disappear, and go back in the order that makes sense" and "not have disappearing animations". Removed: the fade-out, and both cards flying back at once in screen order.

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
