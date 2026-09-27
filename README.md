# Battle Valkyries Wiki

Static bilingual wiki for the Battle Valkyries and Alchemy & Enchantment Battle Brothers mods.

## Tech Stack

- Zero-build static frontend: `index.html`, `styles.css`, `app.js`
- Generated local data: `data/wiki-data.js`
- Local mod art copied into `assets/`
- Deploys directly with GitHub Pages from the repository root

## Refresh Data

From this repository:

```powershell
npm run refresh
```

The extractor reads the current source tree for both mods, including uncommitted development work. It regenerates `data/wiki-data.js` and copies referenced art into `assets/` without changing the game repository.

Coverage includes character loadouts, conditional/weapon/spirit skills, chapter-registered skins, all loaded chapters (objectives, materials, rewards and CG unlocks), expanded enemies, bounty camps, bond stages, signature equipment, Lily spirits, the memory shop, volume settings, summoning, and the equipment rarity/affix catalog. Chapter and supplemental skill discovery follows `load.nut`; files that have not entered the loading chain are not presented as playable chapters.

The site labels its content as a development snapshot. `sourceRevision`, `updatedAt` and `generatedAt` identify the checkout and extraction time; `+working-tree` means the source includes uncommitted changes. This does not imply that all content is in the downloadable release or has passed in-game testing. See [the synchronization audit](docs/wiki-sync-2026-09-27.md) for the current differences from the previous Wiki.

To use a mod checkout in another location, pass it directly:

```powershell
node tools\extract-wiki-data.mjs D:\path\to\battle-valkyries
```

Verify snapshot counts, chapter-to-character/skill/skin links, reward stages, translated currencies, volume ranges and every referenced asset with:

```powershell
npm run check
```

When a later refresh intentionally changes the roster/catalog sizes, review the source additions before updating the snapshot count assertions in `tools/verify-wiki-data.mjs`. The structural checks should remain in place. System explanations are maintained in `tools/extract-reference-data.mjs`; review them when gameplay behavior changes.

## Local Preview

```powershell
npm run preview
```

Then open the URL printed by the command. The default is `http://127.0.0.1:4173/`.

## Deploy

Push this repository to GitHub, then enable GitHub Pages with:

- Source: Deploy from a branch
- Branch: `main`
- Folder: `/ (root)`
