# bonaccivfx.com — Glucose Compass Page: Diagnose Stale Live Page + Verify Live

**Repo:** bonaccivfx.com (Next.js app-router `src/app/`, static export → `out/`, Cloudflare Pages, deploys from `origin/main`)
**Environment:** Windows / PowerShell
**Problem:** After commit `b8b12e5` (the availability flip), the LIVE page at `https://bonaccivfx.com/glucose-compass/` still shows the old state — "v2.0.0 — Freemium Build", "App Store Review Pending", and a "Coming Soon to the App Store" button. The prior run reported success and a clean export, so the edit either landed in a file that isn't what's served, or a stale file is overwriting it in the export. **Diagnose before re-editing. Verify against the live URL, not just the build.**

## Constraints
- `Out-File -Encoding utf8` for file writes; never `>`.
- Detect package manager from lockfile (pnpm).
- Do not invent copy — reuse the exact availability content already written into `src/app/glucose-compass/page.tsx` in `b8b12e5`.

## Phase 0 — Diagnose (no edits)
1. Find every artifact that can produce `/glucose-compass/`:
   ```powershell
   Get-ChildItem -Recurse -File | Where-Object { $_.FullName -notmatch '\\node_modules\\' -and $_.FullName -match 'glucose-compass' }
   ```
   Specifically check for `public/glucose-compass/index.html` (or any `public/glucose-compass/*.html`) alongside `src/app/glucose-compass/page.tsx`.
2. Grep each candidate for OLD markers ("Coming Soon", "App Store Review Pending", "v2.0.0", "Freemium Build") and NEW markers ("Available", "Why I Built This"). Report which file has which.
3. Determine the deployed truth — run a clean build, then inspect the FINAL export output:
   ```powershell
   # build via the repo's script, then:
   Get-Content .\out\glucose-compass\index.html | Select-String "Coming Soon|App Store Review Pending|Available|Why I Built This"
   ```
   Report whether `out\glucose-compass\index.html` contains OLD or NEW markers.
4. Check how sibling pages (`/glucose-compass/privacy`, `/glucose-compass/support`) are implemented — static HTML in `public/`, or app-router pages? Report the pattern.
5. State a diagnosis: is the staleness caused by (a) a `public/` static file overwriting the generated page, (b) the edit landing in a non-served file, or (c) the repo is already correct and it's a deploy/cache issue (`out/` already has NEW markers)?

## Phase 1 — Fix (converge on a single source of truth)
- There must be **exactly one** artifact serving `/glucose-compass/`, and it must contain the availability flip.
- If a stale `public/glucose-compass/index.html` exists and is what's served: either port the `b8b12e5` content into it, or remove it so the app-router `page.tsx` is canonical — **match whichever pattern the sibling pages use** (Phase 0 §4). Report the choice.
- Eliminate the collision. Re-run the clean build and re-grep `out\glucose-compass\index.html`: it must show NEW markers and **zero** OLD markers.

## Phase 2 — Commit & push
- Conventional commit, e.g. `fix(glucose-compass): resolve stale page source so availability flip is served`
- **`git push origin main`** — explicit, required.

## Phase 3 — Verify LIVE (the step that was missing)
1. Wait ~1–3 min for the Cloudflare deploy after push.
2. Fetch the live page and grep — do not trust the build alone:
   ```powershell
   $r = Invoke-WebRequest -Uri "https://bonaccivfx.com/glucose-compass/" -UseBasicParsing -Headers @{ "Cache-Control" = "no-cache" }
   $r.Content | Select-String "Coming Soon|App Store Review Pending|Available|Why I Built This"
   ```
3. Pass condition: the live response contains NEW markers, **zero** OLD markers, and the App Store badge links to a URL containing `id6760599854`.
4. If `out\` is correct but the live response is still stale after a retry: report that the repo is fixed and this is now a **Cloudflare deploy/cache** issue (not code) — the user purges the Cloudflare Pages cache / confirms the deployment. Do not keep re-editing.

## Report back
- The diagnosis (which file was serving the stale page)
- What changed to converge on one source
- `out\glucose-compass\index.html` grep result (NEW, zero OLD)
- The **live** `Invoke-WebRequest` grep result
- Commit SHA + confirmation `git push origin main` succeeded
