# Rob's Game Changelog

Newest first. Times are Hawaii time (HST).

---

## v1.02 "Brackets" · Thu Nov 5, 4:45 PM
- Every 3D GPU's bracket is measured on photos of the real cards (kura: "make all of them accurate to IRL"): its top tab sits about 109 mm above the bottom of the fingers on every card, and its end about 11 mm past them. The RTX 5070's bracket starts 1 px lower and its legs reach 3 px past the fingers; the Arc B580's starts 2 px below the top of the card and its legs reach 3 px past; the RX 9070 XT's and RX 9070's legs reach 4 px past. The RTX 5090, 5080, 4090 and GTX 1080 Ti already matched. Removed: the B580's and 5070's higher brackets and the shorter legs.
- The footer says v1.02. Removed: "v1.01".

## v1.01 "No Red Line" · Thu Nov 5, 4:35 PM
- Fixed: a thin red line across the RX 9070's front in 3D, seen at an angle (kura). Where a rounded shroud's corner steps in, the step takes the frame's colour, but the hidden faces between the steps took it too and showed through the hairlines between them: on the 9070, the red of its stripe. Now only the steps take it. Removed: the red line, and the frame's colour on the hidden faces.
- The footer says v1.01. Removed: "v1.00".

## v1.00 "Round Corners" · Thu Nov 5, 4:26 PM
- The RX 9070's big card is in 3D, on AMD's own design (shown only as a render, never sold): 11 px deep, from AMD's "RX 9070 Series" slide (the shorter, thinner of its two cards). Top: a mesh panel in a frame almost the whole length, the 16-pin socket in a recess in it, and a dark band by the bracket with the white-lit "RADEON"; the picture's red stripe as a red band. Bottom: the board past the fingers, then a long vent. Removed: nothing.
- The RX 9070 XT's bottom is the board and the vent too, from a photo of a black sample. Removed: its mesh bottom (a guess).
- Every 3D GPU's corners are rounded, as the real cards' are: the shroud steps in at its corners, rounder than the pictures, and its far end rounds off seen from the top and bottom too (not the GTX 1080 Ti's far end, its slanted cap). Removed: the square shrouds, and 1 to 2 px off the raised bars that would stick out past the new corners.
- Every 3D GPU's bracket is where the real one is: its top tab 111.15 mm above the bottom of the fingers (a standard card's height), so it starts lower on the taller cards (RTX 5090, 5080 and 4090: 6 px down; Arc B580: 1 px), and its legs reach 2 px past the fingers, as a real bracket's do. The RTX 5090 has three legs, like the 4090. The 5090 and 5080 ports are a row shorter each, and the 4090's vents and ports sit in the shorter bracket. Removed: brackets from the top of the picture, legs ending above or at the fingers, and the 5090's two legs.
- The footer says v1.00. Removed: "v0.99".

## v0.99 "Red Team" · Thu Nov 5, 3:30 PM
- The RX 9070 XT's big card is in 3D, on AMD's own design (shown only as a render, never sold): a mesh grille the whole length of the top with the 16-pin socket in a recess near the far end, a dark band with the white-lit "RADEON" by the bracket, and the picture's red stripe as a red band at the top right. Its bracket starts where the shroud's top corner slope ends, with two rows of vent holes and the ports from a Gigabyte 9070 XT (the HDMI turned over, as on the B580). Its thickness (12 px) and its bottom are guesses: no source gives them. Removed: nothing.
- The footer says v0.99. Removed: "v0.97".

## v0.98 "Battlemage 3D" · Thu Nov 5, 3:19 PM
- The Arc B580's big card is in 3D, 11 px deep for its two slots. Top, from kura's photos: a black frame strip with the white-lit "intel ARC", open fins on the fan half, and the 8-pin socket set into them. The bottom: the frame strip and fins. The far end: four screw holes. The bracket, from kura's photo and her marks: three rows of long slots and round holes in columns, each starting with a hole under the tab, with a row of metal on each side; the four ports along the back edge; etched logos by the fingers; and below them the bracket's two legs, one per slot. Removed: nothing.
- Every 3D GPU's bracket has its legs below it (kura, Nov 5): two on the two-slot cards, three on the RTX 4090. Removed: the brackets running straight down to their ends.
- The Arc B580's HDMI is turned over, its narrow side toward the card, as on the real one (kura). Removed: its taper on the fan side.
- A 3D part can stand off the card from any height to any other (`z: [z0, z1]` in `GPU_3D`), for the bracket's legs. Removed: every part having to reach from the card to the front.

## v0.97 "Blower 3D" · Thu Nov 5, 3:01 PM
- The footer says v0.97. Removed: "v0.94".
- The GTX 1080 Ti's big card is in 3D, 11 px deep for its two slots. Top, from kura's photos: the silver faceted shroud on the fan side, and on the back half a black band with the green backlit "GEFORCE GTX" logo, then the 6-pin and 8-pin power sockets at the far end. Bottom, as kura marked it: a black strip along the back half, silver facets with two screws, black under the fan, and the far end's silver cap. The far end: a small finned heatsink. The bracket: triangle vents, and the ports in one column on its back edge (DisplayPort, HDMI, DisplayPort, DisplayPort). Removed: nothing.

## v0.96 "Forty Ninety 3D" · Thu Nov 5, 2:45 PM
- The RTX 4090's big card is in 3D, 15 px deep for its three slots. Top, from kura's photos: open fins across the black middle, with the power socket set into them about 60% along, pointing straight up, and the backlit GeForce RTX logo over the far fan. Underneath: fins in the angled sections. The far end: the outline of its magnetic cover plate. The bracket: four finned vents in a row on a plate with six screws, the three DisplayPorts and the HDMI in a row along the back edge under them, and plain metal by the fingers. Removed: nothing.

## v0.95 "Fifty-Seventy" · Thu Nov 5, 2:31 PM
- The RTX 5070's big card is in 3D. It's 13 px deep, because the real card is shorter than the 5080 (242 x 112 mm) but just as thick. Top, from kura's photos: two long vents side by side and the power socket's recess in the black middle, and "GeForce RTX" etched (not lit) over the far fan. Underneath: two small vents. The far end: threaded holes. The bracket: the ports on its back half and four large vent holes on the fan side. Removed: nothing.

## v0.94 "Ports" · Thu Nov 5, 2:30 PM
- The footer says v0.94 (kura, 2:24 PM). Removed: "v0.92", left there through v0.93.
- The RTX 5080's big card is in 3D too. Its top edge follows kura's photos: one long vent along the fan side and the power socket's recess in the black middle, and the lit GeForce RTX logo on the metal just past it. Underneath: two small vents. The far end: two screws for a support bracket. Removed: nothing.
- Both cards' brackets have the ports from kura's photo: three DisplayPorts above the HDMI, spread from the tab to the fingers, each a shaded slot, the HDMI tapered at its two corners. Removed: the 5090's four short, wide ports.
- Fixed: the 3D GPUs showed only black on kura's phone. Each face is now built the way the mockups that worked there were: a small canvas of its own pixels, nothing clipped. Also fixed: the top and bottom sides' details were drawn back to front, and the ends' pictures were squashed sideways. Removed: each face clipping a whole copy of the picture, and `findLast`.

## v0.93 "Depth" · Thu Nov 5, 1:50 PM
- The RTX 5090's big card shows it in 3D: turn the card and you see its real sides, 10 px deep (the real card is two slots, 40 mm). On top: the black middle section with two vents, the lit white GeForce RTX logo and the recessed power socket. Underneath: one vent. At the far end: solid metal. On the bracket: three DisplayPorts and the HDMI at the bottom, and a screw notch for each slot. The gold fingers stand 1 px off the card. Face on, it looks as it did. Removed: nothing.
- A GPU's big card (one with a 3D shape) tilts up and down too: drag a finger up or down, or move the mouse up or down over the card (it still closes more than 16 px above or below the card). Other cards turn sideways only, as before. Removed: nothing.
- Each GPU's 3D shape is its settings in `src/page.html` (`GPU_3D`): its parts' places on the picture, how deep, and what's on each side. The other nine GPUs are still flat. Removed: nothing.

## v0.92 "Tidy" · Thu Nov 5, 9:45 AM
- A match that goes a day with no move is deleted, and every match stored before this version was deleted (kura: "can we please clean up all the empty unused runs"). Every page load starts a match, so these were mostly ones nobody played. A link to a deleted match says "No such match". Removed: matches kept forever.
- Fixed, Thu Nov 5, 10:40 AM: This version reached the site only then. A setting left over from the old matches stopped the update from going live. Removed: that setting.

## v0.91 "No Sliver" · Thu Nov 5, 9:08 AM
- The log box is exactly its lines tall, so no sliver of the line above shows at its top. Removed: the extra 6px at the top of the box.

## v0.90 "Prompt" · Thu Nov 5, 8:51 AM
- The log's C:\> prompts stay put on every row, like UN/TAP's: only the text beside them scrolls and fades. The bottom one is bold. Removed: a C:\> on each line that scrolled and faded with it.

## v0.89 "Five and Five" · Thu Nov 5, 8:44 AM
- Each match splits the 10 GPUs between the two decks, 5 each, so you and the Student Athlete never have the same GPU. Removed: each deck picking its 5 GPUs on its own, which could share some.
- While the Student Athlete decides, their line changes with each new line in the log. Removed: one line staying for a whole stack.

## v0.88 "Once" · Thu Nov 5, 8:30 AM
- When the Student Athlete casts a spell, the log says so once, in bold. Removed: the second "The Student Athlete cast X." line under it.
- The log's text scrolls up smoothly, with reduced motion turned on too, and the bold bottom line rises into place when it changes on its own. Removed: lines just appearing with reduced motion, and the bottom line swapping without moving.

## v0.87 "Scholarship" · Thu Nov 5, 8:25 AM
- The opponent is the Student Athlete everywhere: in the log, on the button and at the end. Removed: "the Webmaster".
- While the Student Athlete decides, the log says what they're up to instead ("The Student Athlete works hard for their scholarship.", "...is icing their knee…", and eight more), a different line each time. Removed: "The Webmaster is thinking…".
- On a phone the page is shorter, so it fills more of the screen's width: the card being played is a little bigger (it takes the space above it), the button is a little thinner, your row of places is a little shorter, the log shows 2 lines, there's less space under the Student Athlete's line, and the gaps are 6px. Removed: the 3rd log line, the 12px above the card being played, and 2px from each gap, on a phone.

## v0.86 "Wiretap Ending" · Thu Nov 5, 8:12 AM
- With reduced motion turned on, the end of a Wiretap still moves: the card picked flies up into the opponent's graveyard, the rest turn face down and fly up onto their deck, and your Wiretap goes down to your graveyard (the opponent's Wiretap the other way round). Everything else stays still with reduced motion. Removed: the Wiretap's cards vanishing at its end with reduced motion.
- Resting the mouse on a card shows it up close after 1 second (was 1.2). Removed: nothing.

## v0.85 "Slow Spin" · Thu Nov 5, 8:05 AM
- With reduced motion turned on, an ONLINE GPU's fans turn slowly, about once every 2 seconds. Removed: the fans standing still with reduced motion.
- How to play's text is bigger (18, was 15; 16 on a phone, was 13), and its second tip says "Counter a counter!". Removed: "Counters are great!".

## v0.84 "Room" · Thu Nov 5, 8:01 AM
- Fixed: with reduced motion turned on, an ONLINE GPU showed its fans' whole strip of frames squeezed into its picture; it now shows its fans standing still. Removed: nothing.
- The middle panel keeps no empty line under the card being played: a message (a refused move, a lost connection) now shows over the log's last line until your next move. On a phone the page is a little shorter, so it fills more of the screen's width. Removed: the always-empty line for messages.
- The footer sits closer under the last panel (3px, was 9px). Removed: nothing.

## v0.83 "Student Athlete" · Thu Nov 5, 7:52 AM
- The opponent is "Student Athlete #832". Its line (with its hand count) is under its three places at the left, where the deck's label was; on a phone, on a line of its own under its cards. Removed: "The Webmaster" and its line above the opponent's cards.
- Both decks show their count on their back in big white numbers on every screen, as they already did on a phone. Removed: the "Deck 25" labels under the decks on PC, and the empty space under your cards they left.
- A deck's stack thickness shows straight down, so it no longer crowds the graveyard beside it, and all five places in each panel are evenly spaced. Your graveyard's dotted outline is just inside its place, like the GPU places' borders. Removed: the diagonal stack edge, the outline outside the place, and the dashed line under it.

## v0.82 "Blower" · Thu Nov 5, 7:33 AM
- The GTX 1080 Ti's blower fan spins once it has resolved: its whole silver wheel turns inside the ring. Nine of the ten GPUs now spin; the Voodoo3 3000 stays still. Removed: nothing.
- `tools/spin.py` can keep a picture's own middle and turn it with the fan (for blower wheels). Removed: nothing.

## v0.81 "XT" · Thu Nov 5, 7:26 AM
- The RX 9070 XT's three fans spin once it has resolved, like the RX 9070, RTX 5090, RTX 5080, RTX 5070 Ti, RTX 5070, RTX 4090 and Arc B580. Its picture now has round hubs. Removed: the diagonal silver hubs and a few grey pixels at the fans' edges.

## v0.80 "Triple Fan" · Thu Nov 5, 7:21 AM
- The RX 9070's three fans spin once it has resolved, like the RTX 5090, RTX 5080, RTX 5070 Ti, RTX 5070, RTX 4090 and Arc B580. Its picture now has round hubs. Removed: the diagonal silver hubs and two grey pixels at the fans' edges.

## v0.79 "Forty Ninety" · Thu Nov 5, 7:12 AM
- The RTX 4090's fan spins once it has resolved, like the RTX 5090, RTX 5080, RTX 5070 Ti, RTX 5070 and Arc B580. Its picture now has a round hub and a clean dark edge around the fan. Removed: the diagonal silver hub and a few grey pixels around the fan's edge.

## v0.78 "Five Seventy" · Thu Nov 5, 7:10 AM
- The RTX 5070's fan spins once it has resolved, like the RTX 5090, RTX 5080, RTX 5070 Ti and Arc B580. Its picture now has a round hub and a clean dark edge on the fan's left side. Removed: the diagonal silver hub and a few grey pixels around the fan's left edge.

## v0.77 "Fan Tools" · Thu Nov 5, 6:55 AM
- The RTX 5080's fan spins once it has resolved, like the RTX 5090, RTX 5070 Ti and Arc B580.
- The last tip in how to play has no exclamation mark: "Hold or hover to see a card up close". Removed: the "!".
- `tools/spin.py` makes a GPU's spinning fans, with notes at the top on how to use it and the settings for each finished card. Removed: nothing.

## v0.76 "Up Close" · Thu Nov 5, 6:49 AM
- How to play's last tip says "Hold or hover to see a card up close!". Removed: "Hold or hover over a card to see it up close".

## v0.75 "A Bit Higher" · Thu Nov 5, 6:47 AM
- How to play (at the start and from the "?") sits a little higher in the panel, on every screen. Removed: nothing.

## v0.74 "Tips" · Thu Nov 5, 6:46 AM
- How to play has bullet points under its title, and a new tip: "Hold or hover over a card to see it up close". Removed: nothing.

## v0.73 "Centered" · Thu Nov 5, 6:45 AM
- How to play at the start sits in the middle of the panel, exactly where the "?" shows it. Removed: the start's box sitting higher up, in the cards' row.

## v0.72 "Help" · Thu Nov 5, 6:42 AM
- A small "?" at the bottom right of the middle panel shows how to play again, in the same light-blue box as at the start. Rest the mouse on it to see it, or click or tap it to keep it open; click or tap again to close it. The log's lines now stop short of the "?". Removed: nothing.

## v0.71 "Counts Wait" · Thu Nov 5, 6:38 AM
- The numbers on the board (graveyards, decks and the Webmaster's hand) change once the cards moving in a step have landed, everywhere in the game. Removed: the numbers jumping ahead before the cards got there.

## v0.70 "Quick Return" · Thu Nov 5, 6:35 AM
- After you pick a Wiretap's card for the graveyard, the other cards go back on the deck as soon as it lands (0.7 s, was 1.5 s). Removed: the longer pause before they went back.

## v0.69 "GPUs" · Thu Nov 5, 6:28 AM
- Broadcasts are now GPUs: ten real graphics cards in pixel art, from a Voodoo3 3000 to an RTX 5090, and each deck gets 5 different ones. A GPU is broken until it resolves; resolve 3 to win. The rules are the same.
- The card says "GPU · Stable temps once resolved." Its big card names the model, says "Enchantment — " and the chip generation (Blackwell, Ada Lovelace, Pascal, Battlemage, RDNA 4, Avenger), and quotes a line from when the card was on sale.
- On the RTX 5090, RTX 5070 Ti and Arc B580, the fans spin once it has resolved; the rest stay still for now. A resolved GPU's bar says "GPU · ONLINE" with a green dot.
- An empty place says "Temps: unstable" with a crossed-out thermometer, and the log says "GPU resolves: you have 2 of 3 stable."
- How to play now starts "Resolve 3 GPUs to win!".
- Removed: the Broadcasts' neon buttons and award lines, the "Broadcast: off" sign, and the on-air waves on a resolved card.

## v0.68 "How To Play" · Thu Nov 5, 4:07 AM
- Before anyone has played, the middle panel shows how to play in a thin light-blue frame: "Resolve 3 Broadcasts to win!", "Spam and Wiretap are attacks", "Counters are great!", "Discard one to draw one". It's smaller on a phone, and it goes away with the first move. Removed: the empty middle panel at the start.

## v0.67 "No Flash" · Thu Nov 5, 3:32 AM
- A new match's page comes straight back from the site's main address, so the address bar stays on "/" the whole time. Removed: the redirect to /m/… that flashed the long address for a moment.

## v0.66 "Short Address" · Thu Nov 5, 3:28 AM
- Once a match connects, the address bar shows just the site ("/"), without the match's long number. If the connection drops, the long address comes back, so reloading still reconnects to the match; reloading while connected starts a new match. Removed: the long /m/… address staying in the bar.

## v0.65 "Turn Counter" · Thu Nov 5, 1:33 AM
- "Turn 4, Move 2" in the upper left of the middle panel. The turn counts each player's turn (Turn 1 is whoever goes first). The move counts the cards played this turn by either side, counters and a discard-to-draw included, starting from 0; paying for a Paywall isn't a move. Removed: nothing.

## v0.64 "Smooth Scroll" · Thu Nov 5, 1:26 AM
- The log scrolls up smoothly: the top line slides out of the top of the box instead of vanishing, and the slide is a little slower and eases in and out (0.5 s, was 0.35 s). Removed: the top line disappearing before the slide.
- The log's text fades towards the top: 25% at the box's top edge, whole by the end of the top line. Removed: each older line being a step fainter.
- When several cards move at once, they go one after another: each card a Spam mills flies from the deck to the graveyard in turn (the new top card last), and an Undelete's cards fly back onto the deck in turn (up to 5 shown). Removed: only the top card moving for a Spam or an Undelete.
- On PC too, each graveyard shows 🪦 and its count on the card, and your graveyard is the DISCARD switch on your turn, as on a phone. Removed: the "graveyard" labels on PC.

## v0.63 "Step Down" · Thu Nov 5, 1:19 AM
- The type line on cards (Instant, Sorcery, Enchantment) is one size smaller (11, was 12), with a slightly shorter bar. Removed: the 12-size type line.
- A Broadcast's big card has the same dark Enchantment bar as on the board. Removed: the light bar on Broadcast's big card.

## v0.62 "Short Version" · Thu Nov 5, 1:15 AM
- Cards show a short line ("Broadcast · Stays on your side.", "Remand · Counter; it goes back to their hand."), in bigger text (11, was 8.5, the biggest that fits all eight). The big card shows the full text. Card texts start with a capital. Removed: the full text on cards on the board, and the 8.5 card text.

## v0.61 "Hands Off" · Thu Nov 5, 1:02 AM
- Resting the mouse on your graveyard while it's the Discard button doesn't open the big card. Holding it with a finger still does, and so does hovering it outside your turn. Removed: the big card popping up over the Discard button.
- Small cards (your and the Webmaster's Broadcasts, graveyards) use their frame better: a thinner frame, the picture a little wider (87% of the card, was 81%), picture and name in the middle, and the name bigger (12, was 8). Removed: the thicker frame on small cards, the picture at the top with space below, and the small name.
- A resolved Broadcast shows an on-air sign at the right of its name bar: the Broadcast-off mast without its slash, its waves pulsing out. Removed: nothing.

## v0.60 "Who Pays" · Thu Nov 5, 12:58 AM
- Paywall's text: "counter target spell unless the player who cast it discards a card." The rule is the same; it now says plainly who pays. Removed: "unless its caster discards a card", which could read as the Paywall's caster.
- On a phone, on your turn, your graveyard's box says DISCARD: grey while off, pink once you tap it (with the pink outline). Outside your turn it shows 🪦 and the count. Removed: the 🪦 count on your graveyard while you could discard.

## v0.59 "Just the Facts" · Thu Nov 5, 12:46 AM
- The log says only what happened, with no instructions: its last line is short ("The Webmaster cast Remand.", "Your turn.", "Wiretap.", "Paywall.", "Discard."), and a Paywall's line reads "Paywall resolves on Broadcast." The log's text is bigger: 15 on PC, 14 on a phone. Removed: the instructions in the log ("Answer it with a counter, or resolve it.", "cast an Enchantment or a Sorcery, tap your graveyard…", "pick the card…", "you can discard a card to keep…"), and the 13 (PC) and 12 (phone) log text.
- The type line on cards (Instant, Sorcery, Enchantment) is almost twice as big (12, was 6.4). Removed: the small type line.
- Broadcast's text: "stays on your side when it resolves. With 3 on your side, you win the game." Removed: the text that didn't say how to win.
- Wiretap: you pick only the card for their graveyard; the rest go back on top of their deck in the order they were, and the same for the Webmaster's Wiretap. Its text: "look at the top 3 cards of their deck. Put 1 in their graveyard and the rest back in their deck." Removed: the second pick for which card went under the other, and "in any order".
- Your graveyard always has its grey dotted outline (solid pink while you pick a discard), drawn on its place, so it stays put while a card flies in. Removed: the outline on the graveyard's top card, which flew in with each new card and only showed when you could discard.

## v0.58 "Flick" · Thu Nov 5, 12:43 AM
- On a phone, flick a card up quickly to play it, the same as tapping it: it goes to the stack. A slow drag, a short move or a sideways move doesn't play it. Removed: nothing.
- The action button is blue whenever you can press it, and grey when it only says what's happening (Passing…, Discard, Webmaster's turn). Removed: the pink action button, the blue Resolve of its own, and the pink label when it couldn't be pressed.

## v0.57 "Nameless" · Thu Nov 5, 12:37 AM
- Cards have no pink name bar, and they're shorter by its height (134 units tall, was 150), so the page shrinks less to fit a phone. The big card still shows the button's name, at the old height. Removed: the name bar on cards and the 150-unit card height.
- A graveyard you can tap for a discard has a grey dotted outline, and a solid pink one once tapped (on a graveyard with a card in it, the outline was greyed out with the card). Removed: the pink dashed outline before tapping.
- While you're picking a card to discard, the pink bar says DISCARD. Tap your graveyard again to cancel and get Pass turn back. Removed: Pass turn during a discard.

## v0.56 "Big Print" · Thu Nov 5, 12:31 AM
- The log's text is bigger: 13 on PC, 12 on a phone. Removed: the 11 (PC) and 10 (phone) log text.
- On a phone the graveyard's 🪦 and count are white on a small black box in the middle of the card, with the card showing around it. Removed: the dark count with a white glow.

## v0.55 "Deep Blue" · Thu Nov 5, 12:25 AM
- The Webmaster's things are a darker blue: its cards' frames (on the stack, its side and the big card), its card backs (its deck and its face-down cards) and its panel's labels. The darker blue is clearly different from your blue for people with red-green colour blindness too. Removed: the Webmaster's cards, card backs and labels in your blue.
- The "ROB'S GAME" title is blue, and the Resolve button is a pastel blue. Removed: the pink title and the pink Resolve button.
- On a phone the panels have a little more room inside them (8px each side, was 4px), so a tappable graveyard's dashed outline isn't squeezed against the edge. The cards are a little narrower to make room. Removed: the 4px insides.
- The Webmaster's card backs are checks instead of stripes: its deck, its face-down cards and its big card's back. Removed: the Webmaster's striped card backs.
- On a phone the Webmaster's deck shows its count on its back in white, like your deck in your hand. Removed: the "deck" label under the Webmaster's deck on a phone.
- On a phone each graveyard shows a gravestone and its count on the card (🪦 1). With no labels under them, the deck and graveyard are the same size as the Broadcast places, and every place in a row is one size: 5 across in the Webmaster's row, 4 in yours. Removed: the "graveyard" labels on a phone, and the smaller piles beside bigger Broadcast places.

## v0.54 "Plain Text" · Thu Nov 5, 12:13 AM
- Like UN/TAP, cards have no flavour line, and their text is bigger (8.5, was 7.5). The big card still shows the flavour. Removed: the flavour line and the line above it on cards.
- The log is a strip across the bottom of the middle panel, under the stack, in bigger text (11, 10 on a phone), so most lines fit on one line. Removed: the narrow 9-size log column left of the stack, which cards on the stack could cover.
- On a phone the panels sit 5px in from the screen's edges (more when the page shrinks to fit). Removed: the 14px gaps.
- On a phone your deck always stays in the last place of your hand, however few cards you hold. Removed: the deck moving forward when your hand had fewer than 5 cards.

## v0.53 "Scroll Up" · Thu Nov 5, 12:06 AM
- The log has no box of its own and reads top to bottom: oldest at the top, what to do now at the bottom. Each new line slides the lines up. Removed: the log's cream box and newest-on-top order.
- On a phone each side's 3 Broadcast places share the room beside its piles, so the row fills the panel. Removed: the small places with empty space beside them.
- No "Player" line above your hand. Removed: the "Player" line.

## v0.52 "Fine Print" · Wed Nov 4, 11:53 PM
- The log's text is much smaller: 9 on every screen. Removed: the 12 (PC) and 11 (phone) log text.
- The log's box is exactly as tall as the card on the stack, top and bottom lined up. Removed: the box starting above the card.
- On a phone the panels sit 14px in from the screen's edges, and the cards are a little smaller to make room. Removed: the 6px gaps.
- On a phone the page shrinks to fit the screen again, so it never scrolls (the gaps grow a little when it shrinks). Removed: the page scrolling on phones (from v0.48).

## v0.51 "Back in the Middle" · Wed Nov 4, 11:55 PM
- The log is in the middle panel again, on the left of the stack, as tall as the stack, in smaller text (12, and 11 on a phone). Still 3 lines, newest on top. Removed: the log's own panel under yours, and its bigger text (15).

## v0.50 "Webmaster" · Wed Nov 4, 11:48 PM
- Your opponent is now called the Webmaster, on its panel, in the log and on the buttons. Removed: the name "the dummy".

## v0.49 "Overhead" · Wed Nov 4, 11:47 PM
- Fixed: a card flying from your hand to the stack passed under a Broadcast on your side. Flying cards now pass over everything. Removed: cards flying under Broadcasts.

## v0.48 "Edge to Edge" · Wed Nov 4, 11:44 PM
- On a phone the page scrolls instead of shrinking to fit, so the panels reach 6px from the screen's edges, like UN/TAP. Removed: the whole page shrinking on phones (it pulled the panels 35px or more in from the edges).

## v0.47 "Let Go" · Wed Nov 4, 11:44 PM
- Fixed: on a PC, clicking a card while its big card was showing left the big card stuck on screen. Clicking a card now closes its big card. Removed: the stuck big card.

## v0.46 "Tap the Graveyard" · Wed Nov 4, 11:36 PM
- To discard on your turn, tap your graveyard (it lights up), then tap the card to throw away; tap the graveyard again to cancel. Pass turn is the full-width pink bar again. Removed: Discard and Cancel in the pink bar.

## v0.45 "Turned On" · Wed Nov 4, 11:28 PM
- A Broadcast's picture stays still until it resolves, then it moves. Removed: Broadcasts moving before they resolved.

## v0.44 "Remand" · Wed Nov 4, 11:24 PM
- New counter: Remand, "counter target spell. Return it to its caster's hand." Some Wiretaps became Remands.
- New rule: on your turn, instead of casting a spell, you may discard a card to draw a card. This also stops matches from getting stuck. Removed: some Wiretaps.

## v0.43 "Auto Pass" · Wed Nov 4, 11:18 PM
- When passing is the only thing left to do, your turn passes by itself after a moment ("Passing…"). Resolve stays a button. Removed: pressing Pass turn when there was nothing else to do.

## v0.42 "No Labels" · Wed Nov 4, 11:12 PM
- No label under cards on the stack, and those cards are bigger. Removed: the "you" label.

## v0.41 "Off Air" · Wed Nov 4, 11:12 PM
- Empty Broadcast places show a no-signal sign and "Broadcast: off". Removed: the blank empty places.

## v0.40 "Spam" · Wed Nov 4, 11:08 PM
- New Sorcery: Spam, "put the top 2 cards of their deck into their graveyard." Some Wiretaps became Spams.
- Fixed: a board could stop drawing partway when two cards went to the same graveyard at once. Removed: some Wiretaps.

## v0.39 "To the Graveyard" · Wed Nov 4, 10:56 PM
- A finished Wiretap flies to its caster's graveyard. Removed: the Wiretap vanishing.

## v0.38 "Under" · Wed Nov 4, 10:28 PM
- A Wiretap's second pick is the card that goes under the other one. Removed: the second pick going on top, and the "dummy" label on the stack.

## v0.37 "Big Stack" · Wed Nov 4, 10:41 PM
- The card being played is much bigger, and a Wiretap's three cards stack down its right. Removed: the smaller stack cards.

## v0.36 "Edge to Edge" · Wed Nov 4, 10:36 PM
- On a phone the panels reach closer to the screen's edges, like UN/TAP, so cards are wider. No glow on cards you can click. Removed: the wider phone margins and the glow.

## v0.35 "Stays Put" · Wed Nov 4, 10:32 PM
- The card being played stays in the middle when a Wiretap's cards come in to its right.
- Fixed: a click right after a Wiretap pick could be lost. Removed: the card jumping left.

## v0.34 "Always Pink" · Wed Nov 4, 10:18 PM
- The pink button is always there; when there's nothing to press, it says what's happening. Removed: the empty space.

## v0.33 "Where It Went" · Wed Nov 4, 10:24 PM
- Every card that leaves a spot flies to where it went: graveyards, Broadcast places and decks (face down). The dummy's draws fly to its hand. Removed: cards vanishing, and the Broadcast's pop-in bounce.

## v0.32 "Face Down" · Wed Nov 4, 10:20 PM
- The dummy's Wiretap shows what happens to your cards. Your Wiretap's cards go back face down, in order.
- Fixed: the Resolve button showing a step late. Removed: cards going back face up.

## v0.31 "Right Edge" · Wed Nov 4, 10:17 PM
- On a phone, your Broadcast places sit at the right edge of your row. Removed: the places bunched by the graveyard.

## v0.30 "Columns" · Wed Nov 4, 10:14 PM
- On wider screens, the piles and Broadcast places line up with your hand's cards. Removed: the smaller, bunched places.

## v0.29 "Three Places" · Wed Nov 4, 10:10 PM
- Each side has three dotted places for its Broadcasts. Your button is a pink bar of its own, like UN/TAP's. Removed: "No Broadcasts yet." and the small button in your panel.

## v0.28 "Big Card" · Wed Nov 4, 10:05 PM
- Hold a card (or rest the mouse on it) to see it big, like in UN/TAP. Removed: the browser's hover tooltip.

## v0.27 "Snug" · Wed Nov 4, 9:58 PM
- No empty space under the dummy's piles on a phone. Removed: that space.

## v0.26 "Log Panel" · Wed Nov 4, 9:56 PM
- The log has its own panel under yours, newest line on top, 3 lines. Removed: the log inside the middle panel.

## v0.25 "In Order" · Wed Nov 4, 9:50 PM
- Fixed: your hand refilled before the round was over (each step now shows the board as it was). On a phone your deck shows its count on the card back. Removed: the "deck" label under it.

## v0.24 "Two Rows" · Wed Nov 4, 9:47 PM
- On a phone your hand is two rows of 3 with your deck in the last place, so cards are much bigger.
- Fixed: the hand scrolled sideways on phones. Removed: the one-row phone hand.

## v0.23 "Deep Space" · Wed Nov 4, 9:32 PM
- The same space picture as UN/TAP behind the page. Removed: the flat blue background.

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
