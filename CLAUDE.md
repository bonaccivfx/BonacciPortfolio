# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
pnpm dev            # Start dev server (Next.js, port 3000)
pnpm build          # Production build
pnpm lint           # ESLint (eslint.config.mjs)
pnpm generate-gallery  # Regenerate src/data/gallery-images.ts from public/ assets
```

There are no tests in this project.

## Architecture

This is a **Next.js 16 App Router** portfolio site with **React 19**, **TypeScript**, **Tailwind CSS v4**, and the React Compiler enabled (`reactCompiler: true` in `next.config.ts`). Package manager is **pnpm**.

### Pages (src/app/)

The site has six routes, each a Server Component by default:

| Route | Purpose |
|-------|---------|
| `/` | Hero landing page |
| `/vfx` | VFX compositing portfolio — videos, galleries, shot comparisons |
| `/about` | Bio page |
| `/teaching` | Teaching tools page |
| `/dev` | Dev projects page |
| `/contact` | Contact page |

`layout.tsx` wraps all pages with the `<Navigation>` component and Geist fonts.

### Components (src/components/)

All interactive components are Client Components (`"use client"`):

- **Navigation** — sticky nav with scroll-aware background, mobile hamburger overlay, accent color system (cyan=VFX, green=Teaching, orange=Dev)
- **VideoFacade** — lazy Vimeo embed: renders a thumbnail + play button first, only loads the iframe on click. Falls back to a direct Vimeo link on iframe error. Thumbnails fetched from `vumbnail.com/{vimeoId}.jpg`
- **PaginatedLightboxGallery** — paginated image grid (8/page), category filter tabs, lightbox with keyboard navigation (←/→/Esc). Accepts `accent="cyan"|"amber"` for color theming
- **ScrollReveal** — IntersectionObserver wrapper (via `useScrollReveal` hook) that fades+slides children in on scroll
- **BeforeAfterSlider** — drag slider to compare before/after images
- **FrameViewer** — step through compositing layers of a single frame
- **LightboxGallery** — simpler (non-paginated) version of the gallery

### Data layer (src/data/)

- **vfx-videos.ts** — hand-authored arrays: `mainReels`, `breakdowns`, `technicalDemos` (Vimeo IDs + metadata)
- **gallery-images.ts** — **auto-generated**, do not edit manually. Run `pnpm generate-gallery` after adding/removing `.webp` files in `public/`

### Gallery asset pipeline

Images live under `public/` in two trees:
```
public/vfx/gallery/{3d,additional,drawings}/*.webp
public/photography/{commute,me,neighborhood,protests,school}/*.webp
```
`scripts/generate-gallery.js` scans these directories and regenerates `src/data/gallery-images.ts` with typed arrays and category constants. To add a new category, add a directory, drop in `.webp` files, update the `VFX_CATS` or `PHOTO_CATS` config in `generate-gallery.js`, then run the script.

### Styling conventions

- Tailwind CSS v4 (configured via `postcss.config.mjs`, no `tailwind.config`)
- Global CSS custom properties: `--accent-cyan: #00D9FF`, used throughout as `var(--accent-cyan)`
- Page backgrounds use a consistent dark indigo gradient: `from-[#0a1628] via-[#1a1052] to-[#2d1b69]`
- Custom keyframe animations defined in `globals.css`: `fade-in-up`, `grow-from-left`, `pulse-cyan`, `shimmer`
- The VFX page uses inline sub-components (`SectionHeader`, `ImdbBadge`, `FilmIcon`) rather than separate files since they're not reused elsewhere
