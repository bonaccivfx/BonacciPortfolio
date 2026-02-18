const sections = [
  {
    title: "VFX Compositor",
    color: "cyan",
    accent: "from-cyan-400 to-blue-500",
    border: "hover:border-cyan-500/40",
    dot: "bg-cyan-400 shadow-cyan-400/50",
    description:
      "This section will showcase over a decade of experience in visual effects compositing. Expect breakdowns of film and commercial projects, a deep dive into tools like Nuke and After Effects, and behind-the-scenes looks at how raw footage becomes cinematic magic.",
  },
  {
    title: "Educator",
    color: "green",
    accent: "from-green-400 to-emerald-500",
    border: "hover:border-green-500/40",
    dot: "bg-green-400 shadow-green-400/50",
    description:
      "Here you'll find the teaching philosophy and classroom innovations that drive my work in special education. From adaptive learning tools to inclusive curriculum design, this section will highlight the strategies and stories that make education meaningful for every learner.",
  },
  {
    title: "Full-Stack Developer",
    color: "orange",
    accent: "from-orange-400 to-amber-500",
    border: "hover:border-orange-500/40",
    dot: "bg-orange-400 shadow-orange-400/50",
    description:
      "This area will feature modern web applications built with technologies like React, Next.js, Node.js, and more. Look forward to case studies, live demos, and code walkthroughs that demonstrate clean architecture, responsive design, and thoughtful user experiences.",
  },
] as const;

export default function AboutPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-gradient-to-br from-[#0a1628] via-[#1a1052] to-[#2d1b69]">
      {/* Radial overlays matching homepage Hero */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(79,70,229,0.2),_transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(139,92,246,0.15),_transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(99,102,241,0.08),_transparent_70%)]" />

      <div className="relative z-10 mx-auto max-w-5xl px-6 pt-32 pb-24 sm:px-12">
        {/* Hero section */}
        <section className="text-center">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.25em] text-indigo-300/80">
            Get to know me
          </p>
          <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-6xl lg:text-7xl">
            About{" "}
            <span className="bg-gradient-to-r from-blue-400 via-violet-400 to-purple-500 bg-clip-text text-transparent">
              Bonacci
            </span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-300/90 sm:text-xl">
            Artist, educator, and engineer — three lenses that shape a single
            creative practice. Each discipline informs the others, creating work
            that is both technically excellent and deeply human.
          </p>
        </section>

        {/* Identity sections */}
        <div className="mt-20 space-y-12">
          {sections.map(({ title, accent, border, dot, description }) => (
            <section
              key={title}
              className={`rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:-translate-y-1 sm:p-10 ${border}`}
            >
              <div className="flex items-center gap-3">
                <span
                  className={`h-3 w-3 rounded-full shadow-lg ${dot}`}
                />
                <h2
                  className={`bg-gradient-to-r ${accent} bg-clip-text text-2xl font-bold text-transparent sm:text-3xl`}
                >
                  {title}
                </h2>
              </div>
              <p className="mt-4 leading-relaxed text-slate-300/90">
                {description}
              </p>
            </section>
          ))}
        </div>
      </div>
    </main>
  );
}
