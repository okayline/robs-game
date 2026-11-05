# Rob's Game

A blue-only card game: milling is how you attack, and resolving three Broadcasts is how you win. You play against a scripted dummy. The cards are 88x31 buttons from the shared item table, in UN/TAP's card style.

**Rules.** Each player has a 30-card deck: 5 Broadcast (Enchantment), 13 Wiretap and 2 Undelete (Sorceries), 6 Refute, 2 Rollback and 2 Paywall (Instants). Start with 5 cards. On your turn: draw 1 (the first player skips their first draw), cast at most one Enchantment or Sorcery, then pass. Instants are only cast in answer to a spell, and a counter can be answered by another counter; the last counter wins. Three resolved Broadcasts win. Drawing from an empty deck loses.

**Layout.** `src/rules.js` (the rules, pure functions), `src/dummy.js` (the dummy's fixed play), `src/index.js` (the Worker and the Match Durable Object), `src/page.html` (the page), `public/fonts` (copied from tap-game), `test/`.

- Needs the `dungeon-items` Worker deployed first (the `REGISTRY` service binding deals from its item table: `dealPool`).
- Run locally: `npm install`, then `npx wrangler dev`. Deploy: connect this repo in Cloudflare (Workers), or `npx wrangler deploy`.
- Tests: `npm test`.
