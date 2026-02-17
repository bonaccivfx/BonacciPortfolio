const identities = [
  { title: "VFX Compositor", detail: "10+ Years of Experience" },
  { title: "Special Education Teacher", detail: "Dedicated Educator" },
  { title: "Full-Stack Developer", detail: "Modern Web Builder" },
] as const;

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#0a1628] via-[#1a1052] to-[#2d1b69]">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(79,70,229,0.2),_transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(139,92,246,0.15),_transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(99,102,241,0.08),_transparent_70%)]" />

      <div className="relative z-10 mx-auto max-w-5xl px-8 py-32 text-center sm:px-12 lg:py-40">
        <p className="animate-fade-in-up mb-6 text-sm font-medium uppercase tracking-[0.25em] text-indigo-300/80">
          Welcome to my portfolio
        </p>

        <h1 className="animate-fade-in-up animation-delay-200 text-4xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-7xl lg:text-8xl">
          Hi, I&apos;m{" "}
          <span className="bg-gradient-to-r from-blue-400 via-violet-400 to-purple-500 bg-clip-text text-transparent">
            Bonacci
          </span>
        </h1>

        <div className="mx-auto mt-6 flex max-w-md flex-col items-start gap-2.5">
          {[
            { label: "VFX", color: "rgb(34,211,238)", shadow: "rgba(34,211,238,0.4)" },
            { label: "Education", color: "rgb(74,222,128)", shadow: "rgba(74,222,128,0.4)" },
            { label: "Development", color: "rgb(251,146,60)", shadow: "rgba(251,146,60,0.4)" },
          ].map(({ label, color, shadow }, i) => (
            <div key={label} className="flex w-full items-center gap-3">
              <span className="w-24 shrink-0 text-right text-xs font-medium uppercase tracking-wider text-slate-400">
                {label}
              </span>
              <div
                className="animate-grow-from-left h-1.5 flex-1 rounded-full"
                style={{
                  background: `linear-gradient(90deg, ${color}, transparent)`,
                  boxShadow: `0 0 12px ${shadow}, 0 0 4px ${shadow}`,
                  animationDelay: `${0.35 + i * 0.15}s`,
                }}
              />
            </div>
          ))}
        </div>

        <p className="animate-fade-in-up animation-delay-400 mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-slate-300/90 sm:text-xl">
          Three disciplines. One creative mind. I blend artistry, empathy, and
          technology to craft meaningful experiences.
        </p>

        <div className="animate-fade-in-up animation-delay-600 mt-10">
          <a
            href="#work"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 px-8 py-3.5 text-base font-semibold text-white shadow-lg shadow-indigo-500/25 transition-all hover:shadow-xl hover:shadow-indigo-500/30 hover:brightness-110 active:scale-[0.98]"
          >
            Explore My Work
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m6 9 6 6 6-6" />
            </svg>
          </a>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-3">
          {identities.map(({ title, detail }, i) => (
            <div
              key={title}
              className={`animate-fade-in-up animation-delay-${i === 0 ? "600" : "800"} group rounded-2xl border border-white/10 bg-white/5 px-6 py-10 backdrop-blur-sm transition-all duration-300 hover:border-purple-500/40 hover:bg-white/10 hover:-translate-y-1`}
              style={{ animationDelay: `${0.6 + i * 0.15}s` }}
            >
              <h2 className="text-xl font-semibold text-white">{title}</h2>
              <p className="mt-2 text-sm text-slate-400">{detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
