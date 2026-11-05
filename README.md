# Rob's Game

A blue-only card game: milling is how you attack, and resolving three Broadcasts is how you win. You play against a scripted dummy. The cards are 88x31 buttons from the shared item table, in UN/TAP's card style.

**Rules.** Each player has a 30-card deck: 5 Broadcast (Enchantment), 5 Wiretap, 4 Spam (the top 2 cards of their deck into their graveyard) and 2 Undelete (Sorceries), 6 Refute, 4 Remand (counter a spell; it goes back to its caster's hand), 2 Rollback and 2 Paywall (Instants). Start with 5 cards. On your turn: your hand refills to 5, then cast at most one Enchantment or Sorcery, or instead discard a card to draw a card, then pass. Instants are only cast in answer to a spell, and a counter can be answered by another counter; the last counter wins. Three resolved Broadcasts win. Drawing from an empty deck loses.

**Layout.** `src/rules.js` (the rules, pure functions), `src/dummy.js` (the dummy's fixed play), `src/index.js` (the Worker and the Match Durable Object), `src/page.html` (the page), `public/fonts` (copied from tap-game), `test/`.

- Needs the `dungeon-items` Worker deployed first (the `REGISTRY` service binding deals from its item table: `dealPool`).
- Run locally: `npm install`, then `npx wrangler dev`. Deploy: connect this repo in Cloudflare (Workers), or `npx wrangler deploy`.
- Tests: `npm test`.
