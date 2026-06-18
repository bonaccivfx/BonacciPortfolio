# bonaccivfx.com — Dev Page Cleanup + app-ads.txt + QA/QC Pass

**Repo:** bonaccivfx.com (Next.js app-router `src/app/`, static export → `out/`, Cloudflare Pages, deploys from `origin/main`)
**Environment:** Windows / PowerShell
**Goal:** Fix the still-404 `app-ads.txt`, clean up the `/dev` page to feature only the real shipped app, add a top-nav link for Glucose Compass, remove empty/placeholder sections, and run a bounded QA/QC pass so two audiences — people seeking the creative/VFX/teaching work vs. people seeking the app — can each find their path quickly.

## Context
- This is a tri-identity portfolio (VFX compositor, educator, developer) plus the Glucose Compass product.
- `https://bonaccivfx.com/app-ads.txt` still returns 404 in normal **and** incognito — the file is not in the deployed output. A prior attempt did not land it. Diagnose and verify against the live URL this time, not just the build.
- The `/glucose-compass/` page content shipped in `b8b12e5` — **do not alter that page's copy/badge.**
- App Store URL: `https://apps.apple.com/app/id6760599854`
- AdMob publisher ID: `pub-5574049830982043`

## Constraints
- American English; `Out-File -Encoding utf8` (never `>`); pnpm (per `pnpm-lock.yaml`).
- Apply only clearly-correct, low-risk fixes. Anything that changes design, content, copy, or behavior beyond what's specified → list in the report for approval.
- Explicit `git push origin main` at the end.

## Phase 0 — Inspect & report (no edits)
1. **app-ads.txt:** does `public/app-ads.txt` exist in the repo? Run a clean build and check whether `out/app-ads.txt` exists. If it's missing live, determine the cause: not in repo, not copied into `out/`, or a Cloudflare/Next routing rule (`_routes.json`, `_redirects`, rewrites) intercepting static files. Report the cause.
2. **/dev page** (`src/app/dev/page.tsx`): report the full structure — the "Featured Project" hero (Glucose Compass), the "Featured Apps" grid cards (Classroom Dashboard, VFX Pipeline Tool, Portfolio Platform), and the "Open Source Contributions" section. Note where card data is defined (inline array vs data file).
3. **Nav:** locate the nav component and list current items (Home, VFX Work, Teaching Tools, Dev Projects, About, Contact) and where it's defined.
4. Report findings grouped **(A) will apply** vs **(B) needs your decision**, then proceed.

## Phase 1 — app-ads.txt (fix + verify live this time)
1. Ensure `public/app-ads.txt` contains exactly this line (UTF-8, no BOM, trailing newline):
   ```
   google.com, pub-5574049830982043, DIRECT, f08c47fec0942fa0
   ```
2. Build; confirm `out/app-ads.txt` exists and matches.
3. If it exists in `out/` but the cause in Phase 0 was a routing rule, fix the rule so static `.txt` files at the root are served as-is.

## Phase 2 — /dev page cleanup
1. **Remove** the placeholder app cards **Classroom Dashboard** and **VFX Pipeline Tool** (unbuilt). Also remove any now-unused imports/assets they referenced.
2. **Portfolio Platform card:** this describes the site itself, not an App Store app — **stop and ask** whether to remove it from the Apps grid, relocate it, or keep it. Do not delete it without confirmation.
3. **Feature Glucose Compass once, prominently.** It should appear a single time (not duplicated as both hero and grid card), with the **App Store link as the primary CTA** (`https://apps.apple.com/app/id6760599854`, new tab, `rel="noopener noreferrer"`) and the in-site page (`/glucose-compass/`) as a secondary "View Project" link. If removing the placeholders empties the "Featured Apps" grid while Glucose Compass remains the hero, consolidate to the cleaner single presentation and report the layout chosen.
4. **Remove** the "Open Source Contributions" section entirely.

## Phase 3 — Top nav: add Glucose Compass
1. Add a **Glucose Compass** nav item linking to `/glucose-compass/`, so visitors reach the product directly without going through Dev Projects → Featured Project.
2. Place it logically (e.g., after "Dev Projects"); a subtle highlight is fine since it's a shipped product, but match existing nav styling — don't restyle the bar.

## Phase 4 — QA/QC pass (bounded)
1. **Link integrity:** every nav/footer/internal link resolves (no 404s); external links use `target="_blank"` + `rel="noopener noreferrer"`.
2. **Audience clarity:** assess whether the home page makes the two paths obvious — creative/VFX/teaching work vs. the Glucose Compass app. Apply only clearly-correct, factual labeling/structure fixes; **flag any larger IA or copy suggestions in the (B) report** rather than inventing marketing copy.
3. **Core files:** ensure `robots.txt` and `sitemap.xml` exist (add if missing; include `/glucose-compass/` and `/dev`), favicon present, and per-route metadata (title, description, Open Graph, canonical) filled where missing — factual/derived only.
4. **Accessibility:** alt text, heading order, focus-visible, labels — non-visual, clearly-correct fixes only.
5. **Hygiene:** `tsc`/lint clean; remove orphaned imports/files left by the placeholder removal.

## Phase 5 — Verify
1. Clean build (tsc + lint green; note warnings).
2. Confirm in `out/`: `app-ads.txt` present with the exact line; `/dev` no longer references the removed placeholders or Open Source section; nav includes Glucose Compass; `/glucose-compass/` shows the live availability state (not "Coming Soon").
3. **Live verify after deploy** (do not trust the build alone):
   ```powershell
   (Invoke-WebRequest -Uri "https://bonaccivfx.com/app-ads.txt" -UseBasicParsing).Content
   # expect: google.com, pub-5574049830982043, DIRECT, f08c47fec0942fa0  (NOT a 404 page)
   (Invoke-WebRequest -Uri "https://bonaccivfx.com/dev/" -UseBasicParsing).StatusCode
   (Invoke-WebRequest -Uri "https://bonaccivfx.com/glucose-compass/" -UseBasicParsing).StatusCode
   ```
4. If `out/app-ads.txt` is correct but the live URL still 404s after a retry, report that the repo is fixed and it's now a **Cloudflare deploy/cache** issue (purge cache / confirm deployment) — do not keep re-editing.

## Phase 6 — Commit & push
Conventional commits per area, e.g.:
- `fix(ads): serve app-ads.txt at root for AdMob verification`
- `refactor(dev): feature Glucose Compass, remove placeholder apps`
- `feat(nav): add Glucose Compass top-nav link`
- `chore(dev): remove empty Open Source Contributions section`
- `chore(seo,a11y): metadata, links, alt text`

Then **`git push origin main`** — explicit, required.

## Report back
- Phase 0 diagnosis (why app-ads.txt was 404)
- The **live** `app-ads.txt` curl output (the actual line, not 404)
- /dev changes; the Portfolio Platform decision you're asking me about
- Nav change; files changed (created/removed)
- The **(B)** list — judgment calls (IA/copy) deferred for approval
- Commit SHA(s) + confirmation `git push origin main` succeeded
