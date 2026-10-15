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

Coverage includes character loadouts, conditional/weapon/spirit skills, chapter-registered skins, all loaded chapters (objectives, optional supply recovery, evidence, materials, rewards, prerequisites, chapter recruitment and CG unlocks), expanded enemies with vanilla and Legends values, guaranteed enemy loot, bounty camps, bond stages, personal corruption stage rewards and skin/skill unlock conditions, source recruitment assessments, signature equipment, Lily spirits, Sword Maiden hunt milestones, memory archive thresholds and shop products, roster/formation controls, volume settings, summoning, and the equipment rarity/affix catalog. Character order, supplemental templates, traits, skills and skins follow `load.nut`, including the eight-character, five-character, Olga, Black Beast, Tenka Goken, Shu and Ryza modules; files that have not entered the loading chain are not presented as playable chapters.

The October 15 snapshot contains 78 characters and 14 chapters. Shu's Granary and Ryza's Fieldwork expose repeatable routes, fixed rewards, cooldowns and special CG conditions. The 11-stage Tenka Goken festival includes its five legendary sword rewards. Ryza's workshop has searchable tables for 20 companion species, 68 pet recipes, 17 permanent traits and eight inheritance threshold tables; these belong to Battle Valkyries, independently of the optional equipment mod.

The site labels its content as a development snapshot. `sourceRevision`, `updatedAt` (Asia/Shanghai) and `generatedAt` (UTC) identify the checkout and extraction time; `+working-tree` means the source includes uncommitted changes. This does not imply that all content is in the downloadable release or has passed in-game testing. See [the latest synchronization audit](docs/wiki-sync-2026-10-15.md) for current differences, [the October 13 audit](docs/wiki-sync-2026-10-13.md), [the October 8 audit](docs/wiki-sync-2026-10-08.md) and [the September audit](docs/wiki-sync-2026-09-27.md) for earlier work. Version labels come from `variants/`, not release-note titles.

To use a mod checkout in another location, pass it directly:

```powershell
node tools\extract-wiki-data.mjs D:\path\to\battle-valkyries
```

Verify snapshot counts, bilingual character and skill completeness, chapter-to-character/skill/skin links, chapter prerequisites and recruit groups, personal progression thresholds and unlock links, recruitment assessments, goal prerequisites and evidence, reward stages, translated currencies, roster/volume setting types, enemy profiles and every referenced asset with:

```powershell
npm run check
```

When a later refresh intentionally changes the roster/catalog sizes, review the source additions before updating the snapshot count assertions in `tools/verify-wiki-data.mjs`. The structural checks should remain in place. System explanations are maintained in `tools/extract-reference-data.mjs` and `tools/extract-gameplay-data.mjs`; review them when gameplay behavior changes. The workshop extractor mirrors `RyzaAlchemy.recipes()` for tiers, costs and combined materials, so review that function when refreshing gameplay. Verification checks supplemental guides, chapter-specific stage counts, recipe inputs and materials, fusion inheritance, permanent traits, weapon techniques and referenced artwork.

## Bug Reports

The bilingual Bug report navigation entry guides players to `Documents\Battle Brothers\log.html` using `Win + R` → `shell:Personal`. The form asks only for a problem description, game environment (Legends, Reforged, Vanilla or a custom entry), Battle Valkyries version and enchantment mod version, then the original log and up to five optional screenshots. Players can enter “unknown” for versions or “not installed” for the enchantment mod. If the log cannot be found, they can explicitly select the missing-log option without answering another question. Text and JSON reports use the same simplified fields (report format version 2).

`feedback.js` generates a local ZIP containing a UTF-8 text report, JSON metadata and the original selected files; `feedback-pack.js` writes a standard ZIP without external dependencies. It accepts logs in `.html`, `.htm`, `.log` or `.txt` format and screenshots in PNG/JPG/WebP, with limits of 25 MiB per file and 50 MiB combined. File contents are not rendered or sent to a server. Players manually send the downloaded ZIP to the author via QQ. Language changes preserve entered information and file selections. Wiki snapshot metadata is recorded separately from the player's installed versions.

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
