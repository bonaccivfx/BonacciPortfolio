import ScrollReveal from "@/components/ScrollReveal";
import VideoFacade from "@/components/VideoFacade";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import FrameViewer from "@/components/FrameViewer";
import LightboxGallery from "@/components/LightboxGallery";

export const metadata = {
  title: "VFX Compositor Portfolio — Bonacci",
  description:
    "10+ years of visual effects compositing across film, episodic, and commercial projects.",
};

/* ─── Data ───────────────────────────────────────────────────────── */

const primaryReel = {
  vimeoId: "983360818",
  title: "VFX Compositing Reel",
  vimeoUrl: "https://vimeo.com/983360818",
};

const breakdownReel = {
  vimeoId: "458259067",
  title: "Breakdown Reel",
  vimeoUrl: "https://vimeo.com/458259067",
};

const beforeAfterPairs = [
  {
    beforeSrc: "/vfx/before-greenscreen.jpg",
    afterSrc: "/vfx/after-greenscreen.jpg",
    beforeAlt: "Raw greenscreen plate",
    afterAlt: "Final composite with CG environment",
    beforeLabel: "Raw Plate",
    afterLabel: "Final Comp",
  },
  {
    beforeSrc: "/vfx/before-cleanup.jpg",
    afterSrc: "/vfx/after-cleanup.jpg",
    beforeAlt: "Plate with wires and rigs visible",
    afterAlt: "Clean plate after wire and rig removal",
    beforeLabel: "Production Plate",
    afterLabel: "Cleaned Up",
  },
] as const;

const frameLayers = [
  { label: "Background Plate", src: "/vfx/layer-bg.jpg" },
  { label: "Set Extension", src: "/vfx/layer-set-ext.jpg" },
  { label: "CG Elements", src: "/vfx/layer-cg.jpg" },
  { label: "Atmosphere & Fog", src: "/vfx/layer-atmo.jpg" },
  { label: "Color Grade", src: "/vfx/layer-grade.jpg" },
  { label: "Final Composite", src: "/vfx/layer-final.jpg" },
] as const;

const galleryCategories = ["All", "Feature", "Episodic", "Commercial"] as const;

const galleryItems = [
  { src: "/vfx/gallery/feat-01.jpg", alt: "CG environment integration", title: "Environment Integration", category: "Feature" },
  { src: "/vfx/gallery/feat-02.jpg", alt: "Digital matte painting", title: "Matte Painting", category: "Feature" },
  { src: "/vfx/gallery/feat-03.jpg", alt: "Creature compositing", title: "Creature Comp", category: "Feature" },
  { src: "/vfx/gallery/ep-01.jpg", alt: "Episodic set extension", title: "Set Extension", category: "Episodic" },
  { src: "/vfx/gallery/ep-02.jpg", alt: "Greenscreen extraction", title: "Greenscreen Key", category: "Episodic" },
  { src: "/vfx/gallery/ep-03.jpg", alt: "2.5D projection", title: "2.5D Projection", category: "Episodic" },
  { src: "/vfx/gallery/comm-01.jpg", alt: "Automotive CG composite", title: "Auto Commercial", category: "Commercial" },
  { src: "/vfx/gallery/comm-02.jpg", alt: "Beauty and cleanup work", title: "Beauty Work", category: "Commercial" },
] as const;

/* ─── Page ───────────────────────────────────────────────────────── */

export default function VfxPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-gradient-to-br from-[#0a1628] via-[#1a1052] to-[#2d1b69]">
      {/* Radial overlays */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(0,217,255,0.12),_transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(139,92,246,0.15),_transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(0,217,255,0.05),_transparent_70%)]" />

      <div className="relative z-10 mx-auto max-w-5xl px-6 pt-32 pb-24 sm:px-12">
        {/* ── Hero ──────────────────────────────────────────── */}
        <ScrollReveal>
          <section className="text-center">
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.25em] text-[#00D9FF]/80">
              Visual Effects
            </p>
            <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-6xl lg:text-7xl">
              VFX Compositor{" "}
              <span className="bg-gradient-to-r from-[#00D9FF] to-blue-500 bg-clip-text text-transparent">
                Portfolio
              </span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-300/90 sm:text-xl">
              10+ years experience across Los Angeles, Toronto, and New York —
              delivering invisible effects and hero shots for film, episodic, and
              commercial projects.
            </p>
          </section>
        </ScrollReveal>

        {/* ── Demo Reels — hero-sized two-column layout ───── */}
        <ScrollReveal delay={100}>
          <section className="mt-24">
            <h2 className="text-2xl font-bold text-white sm:text-3xl">
              Demo Reels
            </h2>
            <div className="mt-2 h-1 w-16 rounded-full bg-gradient-to-r from-[#00D9FF] to-blue-500" />
            <p className="mt-3 text-sm text-slate-400">
              Watch my compositing and breakdown reels — click to play, or open directly on Vimeo.
            </p>

            <div className="mt-8 grid gap-6 lg:grid-cols-3">
              {/* Primary reel — 2/3 width on desktop, hero-sized */}
              <div className="lg:col-span-2">
                <VideoFacade
                  vimeoId={primaryReel.vimeoId}
                  title={primaryReel.title}
                  vimeoUrl={primaryReel.vimeoUrl}
                  size="large"
                />
                <p className="mt-3 text-center text-sm font-medium text-slate-300/70">
                  Primary Compositing Reel
                </p>
              </div>

              {/* Breakdown reel — 1/3 width on desktop */}
              <div className="flex flex-col">
                <VideoFacade
                  vimeoId={breakdownReel.vimeoId}
                  title={breakdownReel.title}
                  vimeoUrl={breakdownReel.vimeoUrl}
                  size="default"
                />
                <p className="mt-3 text-center text-sm font-medium text-slate-300/70">
                  Breakdown Reel
                </p>
              </div>
            </div>
          </section>
        </ScrollReveal>

        {/* ── Before / After ────────────────────────────────── */}
        <ScrollReveal delay={100}>
          <section className="mt-20">
            <h2 className="text-2xl font-bold text-white sm:text-3xl">
              Before &amp; After
            </h2>
            <div className="mt-2 h-1 w-16 rounded-full bg-gradient-to-r from-[#00D9FF] to-blue-500" />

            <div className="mt-8 grid gap-8 lg:grid-cols-2">
              {beforeAfterPairs.map((pair) => (
                <div key={pair.beforeAlt}>
                  <BeforeAfterSlider {...pair} />
                  <p className="mt-2 text-center text-xs text-slate-400">
                    {pair.beforeLabel} &rarr; {pair.afterLabel}
                  </p>
                </div>
              ))}
            </div>
          </section>
        </ScrollReveal>

        {/* ── Frame Breakdown ───────────────────────────────── */}
        <ScrollReveal delay={100}>
          <section className="mt-20">
            <h2 className="text-2xl font-bold text-white sm:text-3xl">
              Frame Breakdown
            </h2>
            <div className="mt-2 h-1 w-16 rounded-full bg-gradient-to-r from-[#00D9FF] to-blue-500" />
            <p className="mt-3 text-sm text-slate-400">
              Step through individual compositing layers to see how a final frame
              is built.
            </p>

            <div className="mt-8">
              <FrameViewer
                layers={frameLayers as unknown as { label: string; src: string }[]}
                title="Hero Shot Layer Build-Up"
              />
            </div>
          </section>
        </ScrollReveal>

        {/* ── Gallery ───────────────────────────────────────── */}
        <ScrollReveal delay={100}>
          <section className="mt-20">
            <h2 className="text-2xl font-bold text-white sm:text-3xl">
              Gallery
            </h2>
            <div className="mt-2 h-1 w-16 rounded-full bg-gradient-to-r from-[#00D9FF] to-blue-500" />

            <div className="mt-8">
              <LightboxGallery
                items={galleryItems as unknown as { src: string; alt: string; title?: string; category: string }[]}
                categories={galleryCategories as unknown as string[]}
              />
            </div>
          </section>
        </ScrollReveal>

        {/* ── Featured Card ─────────────────────────────────── */}
        <ScrollReveal delay={100}>
          <section className="mt-20">
            <div className="rounded-2xl border border-[#00D9FF]/20 bg-gradient-to-br from-[#00D9FF]/5 to-transparent p-8 backdrop-blur-sm">
              <div className="flex flex-col gap-6 sm:flex-row sm:items-center">
                <div className="flex h-24 w-24 shrink-0 items-center justify-center rounded-xl border border-[#00D9FF]/30 bg-[#00D9FF]/10">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#00D9FF"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-10 w-10"
                  >
                    <path d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M3 8a2 2 0 012-2h8a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V8z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">
                    They Shall Not Grow Old
                  </h3>
                  <p className="mt-1 text-sm font-medium text-[#00D9FF]/80">
                    Restoration & Colorization Compositor
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-slate-300/80">
                    Contributed to Peter Jackson&apos;s documentary restoring WWI
                    archival footage. Worked on frame-by-frame colorization,
                    stabilization, and cleanup of century-old film stock to bring
                    historical footage to vivid life.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </ScrollReveal>
      </div>
    </main>
  );
}
