# Glucose Compass — Website: Coming Soon → Available Now

**Repo:** bonaccivfx.com (Next.js, Cloudflare Pages, deploys from `origin/main`)
**Environment:** Windows / PowerShell
**Goal:** Flip the Glucose Compass landing page from "coming soon" to "available now," add the official App Store download badge linked to the live listing, and add developer attribution (Type 1 Diabetic of 22 years).

---

## Inputs (use exactly — do not invent copy or URLs)

- **App Store URL:** `https://apps.apple.com/app/id6760599854`
  Confirm this resolves to the live listing before deploy. If App Store Connect shows a canonical slug URL (e.g. `.../app/glucose-compass/id6760599854`), prefer that.

- **Developer copy (American English) — active = Option A:**
  > "Glucose Compass was built by someone who lives it. I've managed Type 1 Diabetes for 22 years, and I built the tracker I always wanted — shaped by the daily reality of T1D, not a feature checklist."

  Alternative (Option B), only if explicitly instructed:
  > "Built by a Type 1 Diabetic of 22 years. Every decision in Glucose Compass comes from living with the condition, not theorizing about it."

---

## Constraints

- American English in all user-facing strings.
- When writing any file via PowerShell redirection, use `Out-File -Encoding utf8` — never `>` (writes a UTF-16 LE BOM and breaks tooling).
- Match the existing markup, styling, and component conventions of the page. Do not restyle or re-theme the page.
- Use the **official** Apple "Download on the App Store" badge asset. Do not recolor, reproportion, or hand-draw a substitute — that violates Apple's marketing guidelines. Reference: https://developer.apple.com/app-store/marketing/guidelines/
- Leave the existing Privacy and Support links intact.

---

## Phase 0 — Inspect & report (no edits)

1. Locate the Glucose Compass landing page source. Check `public/glucose-compass/` first (static HTML is expected to live here, not in `out/`), then `app/` and `pages/` routes. Report exact path(s).
2. Identify the current "coming soon" markup/state and where the primary CTA should sit.
3. Search `public/` for an existing App Store badge asset (`app-store`, `appstore`, `badge`). Report found / not found.
4. Report findings, then proceed to Phase 1.

## Phase 1 — Availability + store link

1. Replace the "coming soon" state with an "available now" CTA.
2. Add the official Apple "Download on the App Store" badge, linked to the App Store URL, opening in a new tab with `rel="noopener noreferrer"`.
   - Recommended asset location: `public/glucose-compass/assets/app-store-badge.svg`.
   - If the official badge asset is not already in the repo and cannot be retrieved this session, place a clearly-marked `<!-- TODO: drop official Apple "Download on the App Store" SVG here -->` and wire the link on a text fallback ("Download on the App Store"). Do **not** substitute an unofficial badge image.
3. Preserve existing layout and spacing conventions.

## Phase 2 — Developer attribution

1. Add the Option A copy as a short "Why I built this" block on the landing page, placed where it supports trust/conversion (near the top fold or just under the hero).
2. Keep it visually consistent with surrounding sections.

## Phase 3 — Verify

1. Detect the package manager from the lockfile (`pnpm-lock.yaml` → pnpm) and run the build script defined in `package.json` to confirm a clean build with no new errors.
2. If the page is static HTML in `public/`, also confirm the file is well-formed.

## Phase 4 — Commit & push

1. Conventional commit:
   `feat(glucose-compass): mark app available, add App Store badge + T1D developer attribution`
2. **`git push origin main`** — explicit, required. Cloudflare deploys from `origin/main` only; a local commit alone does not deploy.

---

## Report back

- Files changed (paths)
- Whether the official badge asset was placed or a TODO was left
- Commit SHA
- Confirmation that `git push origin main` succeeded
