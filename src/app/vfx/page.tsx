import { mainReels, breakdowns, technicalDemos } from "@/data/vfx-videos";
import ScrollReveal from "@/components/ScrollReveal";
import PageTransition from "@/components/shared/PageTransition";
import VideoFacade from "@/components/VideoFacade";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import FrameViewer from "@/components/FrameViewer";
import PaginatedLightboxGallery from "@/components/PaginatedLightboxGallery";
import {
  vfxGallery,
  photographyGallery,
  vfxGalleryCategories,
  photographyCategories,
} from "@/data/gallery-images";

export const metadata = {
  title: "VFX Compositing Portfolio — Bonacci",
  description:
    "10+ years of visual effects compositing across film, episodic, and commercial projects.",
};

/* ─── Static data ─────────────────────────────────────────────── */

const stats = [
  { value: "10+", label: "Years Experience" },
  { value: "3", label: "Cities" },
  { value: "34+", label: "Productions" },
];

const filmCredits = [
  { title: "Star Trek Beyond", year: 2016, role: "Compositor" },
  { title: "Guardians of the Galaxy Vol. 3", year: 2023, role: "Compositor" },
  { title: "Ready Player One", year: 2018, role: "Compositor" },
  { title: "They Shall Not Grow Old", year: 2018, role: "Compositor" },
] as const;

const tvCredits = [
  { title: "Ripley", network: "Netflix", year: 2024 },
  { title: "Mr & Mrs. Smith", network: "Amazon", year: 2024 },
] as const;

const beforeAfterPairs = [
  {
    beforeSrc: "/vfx/before-greenscreen.jpg",
    afterSrc: "/vfx/after-greenscreen.jpg",
    beforeAlt: "Raw greenscreen plate",
    afterAlt: "Final composite with CG environment",
    beforeLabel: "Raw Plate",
    afterLabel: "Final Comp",
    caption: "Greenscreen extraction & environment integration",
  },
  {
    beforeSrc: "/vfx/before-cleanup.jpg",
    afterSrc: "/vfx/after-cleanup.jpg",
    beforeAlt: "Plate with wires and rigs visible",
    afterAlt: "Clean plate after wire removal",
    beforeLabel: "Production Plate",
    afterLabel: "Cleaned Up",
    caption: "Wire removal & rig cleanup",
  },
] as const;

const frameLayers = [
  { label: "Background Plate", src: "/vfx/layer-bg.jpg" },
  { label: "Set Extension", src: "/vfx/layer-set-ext.jpg" },
  { label: "CG Elements", src: "/vfx/layer-cg.jpg" },
  { label: "Atmosphere & Fog", src: "/vfx/layer-atmo.jpg" },
  { label: "Color Grade", src: "/vfx/layer-grade.jpg" },
  { label: "Final Composite", src: "/vfx/layer-final.jpg" },
];


/* ─── Shared sub-components ──────────────────────────────────── */

function SectionHeader({
  title,
  sub = false,
}: {
  title: string;
  sub?: boolean;
}) {
  return (
    <>
      <h2
        className={
          sub
            ? "text-xl font-semibold text-slate-300 sm:text-2xl"
            : "text-2xl font-bold text-white sm:text-3xl"
        }
      >
        {title}
      </h2>
      <div
        className={`mt-2 h-0.5 rounded-full bg-gradient-to-r from-[#C90808] to-red-700 ${
          sub ? "w-10 opacity-60" : "w-16"
        }`}
      />
    </>
  );
}

function ImdbBadge() {
  return (
    <span className="inline-flex items-center rounded bg-[#F5C518] px-2 py-0.5 text-[11px] font-extrabold tracking-wide text-black">
      IMDb
    </span>
  );
}

/* Film reel icon for credit cards */
function FilmIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-5 w-5"
    >
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="3" />
      <path d="M12 2v4M12 18v4M2 12h4M18 12h4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
    </svg>
  );
}

/* ─── Page ───────────────────────────────────────────────────── */

export default function VfxPage() {
  return (
    <PageTransition>
    <main className="relative min-h-screen overflow-hidden bg-gradient-to-br from-[#0a1628] via-[#1a1052] to-[#2d1b69]">
      {/* Background overlays */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(201,8,8,0.12),_transparent_50%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(139,92,246,0.15),_transparent_50%)]" />

      <div className="relative z-10 mx-auto max-w-6xl px-6 pt-32 pb-24 sm:px-12">

        {/* ── 1. Hero ─────────────────────────────────────────── */}
        <ScrollReveal>
          <section className="text-center">
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.25em] text-[#C90808]/80">
              Visual Effects
            </p>
            <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-6xl lg:text-7xl">
              VFX Compositing{" "}
              <span className="bg-gradient-to-r from-[#C90808] to-red-700 bg-clip-text text-transparent glow-red">
                Portfolio
              </span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-xl leading-relaxed text-slate-300/90 sm:text-2xl">
              10+ years crafting invisible effects across Los Angeles, Toronto,
              and New York
            </p>

            {/* Stat badges */}
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-[#C90808]/20 bg-[#C90808]/5 px-8 py-5 backdrop-blur-sm"
                >
                  <div className="text-3xl font-extrabold text-[#C90808]">
                    {stat.value}
                  </div>
                  <div className="mt-1 text-xs font-medium uppercase tracking-wider text-slate-400">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </section>
        </ScrollReveal>

        {/* ── 2. Main Demo Reels (large, 2-col) ───────────────── */}
        <ScrollReveal delay={80}>
          <section className="mt-28">
            <SectionHeader title="Main Demo Reels" />
            <p className="mt-3 text-base text-slate-400">
              Click any reel to play — or open directly on Vimeo.
            </p>

            {/* First two reels: 2-col on desktop */}
            <div className="mt-8 grid gap-8 lg:grid-cols-2">
              {mainReels.slice(0, 2).map((video) => (
                <div key={video.id} className="flex flex-col">
                  <VideoFacade
                    vimeoId={video.id}
                    title={video.title}
                    vimeoUrl={`https://vimeo.com/${video.id}`}
                    size="large"
                  />
                  <p className="mt-3 text-center text-base font-medium text-slate-300/80">
                    {video.title}
                  </p>
                </div>
              ))}
            </div>

            {/* Third reel: centered, capped width */}
            {mainReels[2] && (
              <div className="mt-8 mx-auto max-w-2xl">
                <VideoFacade
                  vimeoId={mainReels[2].id}
                  title={mainReels[2].title}
                  vimeoUrl={`https://vimeo.com/${mainReels[2].id}`}
                  size="large"
                />
                <p className="mt-3 text-center text-base font-medium text-slate-300/80">
                  {mainReels[2].title}
                </p>
              </div>
            )}
          </section>
        </ScrollReveal>

        {/* ── 3. Featured Credits ──────────────────────────────── */}
        <ScrollReveal delay={120}>
          <section className="mt-24">
            {/* Header row */}
            <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-xs font-medium uppercase tracking-[0.2em] text-[#C90808]/70">
                  Known for
                </p>
                <h2 className="mt-1 text-2xl font-bold text-white sm:text-3xl">
                  Featured Credits
                </h2>
                <div className="mt-2 h-1 w-16 rounded-full bg-gradient-to-r from-[#C90808] to-red-700" />
              </div>
              <a
                href="https://www.imdb.com/name/nm8251181/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 self-start rounded-lg border border-[#F5C518]/30 bg-[#F5C518]/5 px-4 py-2 text-sm font-medium text-[#F5C518] transition-colors hover:bg-[#F5C518]/15 sm:self-auto"
              >
                <ImdbBadge />
                <span>View full filmography</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  className="h-3.5 w-3.5 opacity-70"
                >
                  <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" />
                </svg>
              </a>
            </div>

            {/* Film credit cards */}
            <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {filmCredits.map((credit) => (
                <div
                  key={credit.title}
                  className="group relative overflow-hidden rounded-xl border border-[#C90808]/15 bg-gradient-to-br from-[#C90808]/5 to-white/[0.02] p-4 transition-all duration-300 hover:border-[#C90808]/35 hover:from-[#C90808]/10"
                >
                  {/* Subtle top accent line */}
                  <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#C90808]/40 to-transparent" />

                  <div className="flex items-start gap-3">
                    <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-[#C90808]/20 bg-[#C90808]/10 text-[#C90808]/70">
                      <FilmIcon />
                    </div>
                    <div className="min-w-0">
                      <p className="text-sm font-semibold leading-snug text-white">
                        {credit.title}
                      </p>
                      <p className="mt-0.5 text-xs text-slate-500">
                        {credit.year}
                      </p>
                    </div>
                  </div>

                  <div className="mt-3 border-t border-white/5 pt-3">
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-[#C90808]/20 bg-[#C90808]/8 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-[#C90808]/90">
                      {credit.role}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* TV credits strip */}
            <div className="mt-4 flex flex-wrap items-center gap-3 rounded-xl border border-white/8 bg-white/[0.03] px-5 py-3.5">
              <span className="text-xs font-medium uppercase tracking-wider text-slate-500">
                Recent TV
              </span>
              <div className="h-3 w-px bg-white/10" />
              {tvCredits.map((credit, i) => (
                <span key={credit.title} className="flex items-center gap-2">
                  <span className="text-sm font-medium text-slate-300">
                    {credit.title}
                  </span>
                  <span className="rounded bg-white/8 px-1.5 py-0.5 text-[10px] font-medium text-slate-500">
                    {credit.network} {credit.year}
                  </span>
                  {i < tvCredits.length - 1 && (
                    <span className="text-slate-700">·</span>
                  )}
                </span>
              ))}
            </div>
          </section>
        </ScrollReveal>

        {/* ── 4. Project Breakdowns (smaller, 3-col) ──────────── */}
        <ScrollReveal delay={100}>
          <section className="mt-20">
            <SectionHeader title="Project Breakdowns" sub />
            <p className="mt-2 text-sm text-slate-500">
              Shot-by-shot breakdowns showing process and technique.
            </p>

            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {breakdowns.map((video) => (
                <div key={video.id} className="flex flex-col">
                  <VideoFacade
                    vimeoId={video.id}
                    title={video.title}
                    vimeoUrl={`https://vimeo.com/${video.id}`}
                  />
                  <p className="mt-2 text-center text-xs font-medium text-slate-400/80">
                    {video.title}
                  </p>
                </div>
              ))}
            </div>
          </section>
        </ScrollReveal>

        {/* ── 5. Technical Tests & Studies (collapsible) ──────── */}
        <ScrollReveal delay={100}>
          <section className="mt-20">
            <details className="group">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 rounded-xl border border-white/10 bg-white/5 px-6 py-4 transition-colors hover:bg-white/[0.08] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C90808]">
                <div className="text-left">
                  <h2 className="text-xl font-semibold text-slate-300 sm:text-2xl">
                    Technical Tests &amp; Studies
                  </h2>
                  <p className="mt-0.5 text-sm text-slate-500">
                    {technicalDemos.length} demonstrations — click to expand
                  </p>
                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#C90808"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5 shrink-0 transition-transform duration-300 group-open:rotate-180"
                >
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </summary>

              <div className="mt-2 h-px w-full bg-gradient-to-r from-[#C90808]/30 to-transparent" />

              <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                {technicalDemos.map((video) => (
                  <div key={video.id} className="flex flex-col">
                    <VideoFacade
                      vimeoId={video.id}
                      title={video.title}
                      vimeoUrl={`https://vimeo.com/${video.id}`}
                    />
                    <p className="mt-2 text-center text-[11px] font-medium text-slate-500">
                      {video.title}
                    </p>
                  </div>
                ))}
              </div>
            </details>
          </section>
        </ScrollReveal>

        {/* ── 6. VFX Portfolio Gallery ────────────────────────── */}
        <ScrollReveal delay={100}>
          <section className="mt-24">
            {/* Header */}
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-[#C90808]/70">
                Image gallery
              </p>
              <h2 className="mt-1 text-2xl font-bold text-white sm:text-3xl">
                VFX Portfolio Gallery
              </h2>
              <div className="mt-2 h-1 w-16 rounded-full bg-gradient-to-r from-[#C90808] to-red-700" />
              <p className="mt-2 text-base text-slate-400">
                3D work, additional compositing, and digital drawings
              </p>
            </div>

            {/* Navigation hint */}
            <div className="mt-5 inline-flex items-center gap-2 rounded-lg border border-[#C90808]/15 bg-[#C90808]/5 px-4 py-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#C90808"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-4 w-4 shrink-0 opacity-70"
              >
                <rect x="3" y="3" width="18" height="18" rx="2" />
                <path d="M9 12h6M12 9l3 3-3 3" />
              </svg>
              <p className="text-xs text-slate-400">
                Interactive gallery — click any image to view full size, use{" "}
                <kbd className="rounded border border-white/10 bg-white/5 px-1 py-0.5 font-mono text-[10px] text-slate-300">
                  ←
                </kbd>{" "}
                <kbd className="rounded border border-white/10 bg-white/5 px-1 py-0.5 font-mono text-[10px] text-slate-300">
                  →
                </kbd>{" "}
                arrow keys to navigate
              </p>
            </div>

            <div className="mt-6">
              <PaginatedLightboxGallery
                items={vfxGallery}
                categories={vfxGalleryCategories}
                accent="cyan"
              />
            </div>
          </section>
        </ScrollReveal>

        {/* ── 7. Photography Gallery ───────────────────────────── */}
        <ScrollReveal delay={100}>
          <section className="mt-24">
            {/* Header — amber accent to distinguish from VFX sections */}
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-amber-400/70">
                Photography
              </p>
              <h2 className="mt-1 text-2xl font-bold text-white sm:text-3xl">
                Photography &amp; Visual Studies
              </h2>
              <div className="mt-2 h-1 w-16 rounded-full bg-gradient-to-r from-amber-400 to-orange-500" />
              <p className="mt-2 text-base text-slate-400">
                Complementary creative work demonstrating visual storytelling
                and composition
              </p>
            </div>

            {/* Navigation hint */}
            <div className="mt-5 inline-flex items-center gap-2 rounded-lg border border-amber-400/15 bg-amber-400/5 px-4 py-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#F59E0B"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-4 w-4 shrink-0 opacity-70"
              >
                <path d="M23 19a2 2 0 01-2 2H3a2 2 0 01-2-2V8a2 2 0 012-2h4l2-3h6l2 3h4a2 2 0 012 2z" />
                <circle cx="12" cy="13" r="4" />
              </svg>
              <p className="text-xs text-slate-400">
                Interactive gallery — click any image to view full size, use{" "}
                <kbd className="rounded border border-white/10 bg-white/5 px-1 py-0.5 font-mono text-[10px] text-slate-300">
                  ←
                </kbd>{" "}
                <kbd className="rounded border border-white/10 bg-white/5 px-1 py-0.5 font-mono text-[10px] text-slate-300">
                  →
                </kbd>{" "}
                arrow keys to navigate
              </p>
            </div>

            <div className="mt-6">
              <PaginatedLightboxGallery
                items={photographyGallery}
                categories={photographyCategories}
                accent="amber"
              />
            </div>
          </section>
        </ScrollReveal>

        {/* ── 8. Shot Comparisons ─────────────────────────────── */}
        <ScrollReveal delay={100}>
          <section className="mt-24">
            <SectionHeader title="Shot Comparisons" />
            <p className="mt-3 text-sm text-slate-400">
              Drag the slider to compare raw plate vs. final composite.
            </p>

            <div className="mt-8 grid gap-8 lg:grid-cols-2">
              {beforeAfterPairs.map((pair) => (
                <div key={pair.beforeAlt}>
                  <BeforeAfterSlider
                    beforeSrc={pair.beforeSrc}
                    afterSrc={pair.afterSrc}
                    beforeAlt={pair.beforeAlt}
                    afterAlt={pair.afterAlt}
                    beforeLabel={pair.beforeLabel}
                    afterLabel={pair.afterLabel}
                  />
                  <p className="mt-2 text-center text-xs text-slate-500">
                    {pair.caption}
                  </p>
                </div>
              ))}
            </div>
          </section>
        </ScrollReveal>

        {/* ── 9. Frame Breakdown ──────────────────────────────── */}
        <ScrollReveal delay={100}>
          <section className="mt-24">
            <SectionHeader title="Frame Breakdown" />
            <p className="mt-3 text-sm text-slate-400">
              Step through individual compositing layers to see how a final
              frame is built.
            </p>

            <div className="mt-8">
              <FrameViewer
                layers={frameLayers}
                title="Hero Shot Layer Build-Up"
              />
            </div>
          </section>
        </ScrollReveal>

      </div>
    </main>
    </PageTransition>
  );
}
