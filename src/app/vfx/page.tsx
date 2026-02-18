const featured = [
  {
    title: "Project Alpha",
    role: "Lead Compositor",
    studio: "Studio Name — Los Angeles",
    description:
      "Full CG environment integration with live-action plates. Complex multi-pass compositing involving set extensions, digital matte paintings, and photorealistic lighting adjustments.",
  },
  {
    title: "Project Beta",
    role: "Senior Compositor",
    studio: "Studio Name — Toronto",
    description:
      "High-volume episodic work requiring fast turnaround on hero shots. Responsibilities included greenscreen extraction, 2.5D projections, and seamless plate stitching across multiple takes.",
  },
  {
    title: "Project Gamma",
    role: "Compositor",
    studio: "Studio Name — New York",
    description:
      "Commercial campaign with heavy beauty and cleanup work. Delivered final pixel on tight deadlines, collaborating closely with the director and colorist for a unified look.",
  },
] as const;

const reels = [
  {
    title: "Environment & Set Extension",
    description:
      "A curated reel demonstrating CG integration, digital matte paintings, and full set extensions across film and episodic work.",
  },
  {
    title: "Creature & Character",
    description:
      "Showcasing compositing work on CG characters — integration, edge treatment, contact shadows, and interactive lighting passes.",
  },
  {
    title: "Cleanup & Invisible Effects",
    description:
      "Wire removals, rig removals, beauty work, and seamless fixes that the audience should never notice.",
  },
] as const;

const additional = [
  "Automotive commercial — full CG car composited onto live-action backplates",
  "Music video — stylized particle simulations and color-graded overlays",
  "Short film — miniature photography combined with digital environments",
  "Title sequence — procedural motion graphics layered with filmed elements",
] as const;

export default function VfxPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-gradient-to-br from-[#0a1628] via-[#1a1052] to-[#2d1b69]">
      {/* Radial overlays */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(34,211,238,0.15),_transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(139,92,246,0.15),_transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(99,102,241,0.08),_transparent_70%)]" />

      <div className="relative z-10 mx-auto max-w-5xl px-6 pt-32 pb-24 sm:px-12">
        {/* Hero */}
        <section className="text-center">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.25em] text-cyan-300/80">
            Visual Effects
          </p>
          <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-6xl lg:text-7xl">
            VFX Compositor{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Portfolio
            </span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-300/90 sm:text-xl">
            10+ years experience across Los Angeles, Toronto, and New York —
            delivering invisible effects and hero shots for film, episodic, and
            commercial projects.
          </p>
        </section>

        {/* Featured Projects */}
        <section className="mt-20">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">
            Featured Projects
          </h2>
          <div className="mt-2 h-1 w-16 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500" />

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map(({ title, role, studio, description }) => (
              <div
                key={title}
                className="group rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all duration-300 hover:border-cyan-500/40 hover:bg-white/10 hover:-translate-y-1"
              >
                {/* Thumbnail placeholder */}
                <div className="mb-4 flex h-40 items-center justify-center rounded-lg border border-white/10 bg-white/5">
                  <span className="text-sm text-slate-500">
                    Thumbnail / Still
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-white">{title}</h3>
                <p className="mt-1 text-sm font-medium text-cyan-300/80">
                  {role}
                </p>
                <p className="mt-0.5 text-xs text-slate-400">{studio}</p>
                <p className="mt-3 text-sm leading-relaxed text-slate-300/80">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Breakdown Reels */}
        <section className="mt-20">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">
            Breakdown Reels
          </h2>
          <div className="mt-2 h-1 w-16 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500" />

          <div className="mt-8 space-y-6">
            {reels.map(({ title, description }) => (
              <div
                key={title}
                className="flex flex-col gap-6 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all duration-300 hover:border-cyan-500/40 hover:bg-white/10 sm:flex-row sm:items-center"
              >
                {/* Video embed placeholder */}
                <div className="flex h-36 w-full shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/5 sm:h-28 sm:w-48">
                  <span className="text-sm text-slate-500">Video Embed</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-300/80">
                    {description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Additional Pieces */}
        <section className="mt-20">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">
            Additional Pieces
          </h2>
          <div className="mt-2 h-1 w-16 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500" />

          <ul className="mt-8 grid gap-4 sm:grid-cols-2">
            {additional.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/5 px-5 py-4 backdrop-blur-sm transition-all duration-300 hover:border-cyan-500/40 hover:bg-white/10"
              >
                <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-cyan-400 shadow-lg shadow-cyan-400/50" />
                <span className="text-sm leading-relaxed text-slate-300/90">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </main>
  );
}
