import Image from "next/image";
import Link from "next/link";
import PageTransition from "@/components/shared/PageTransition";

const stackCategories = [
  {
    category: "Frontend",
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "HTML / CSS"],
  },
  {
    category: "Backend",
    items: ["Node.js", "Express", "Python", "REST APIs", "GraphQL"],
  },
  {
    category: "Tools & Infrastructure",
    items: ["Git", "Docker", "Vercel", "PostgreSQL", "MongoDB"],
  },
] as const;

export const metadata = {
  title: "Dev Projects — Bonacci",
  description:
    "Full-stack development work, including Glucose Compass — a Type 1 diabetes tracker on the App Store — alongside modern web applications.",
};

export default function DevPage() {
  return (
    <PageTransition>
    <main className="relative min-h-screen overflow-hidden bg-gradient-to-br from-[#0a1628] via-[#1a1052] to-[#2d1b69]">
      {/* Radial overlays */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(10,139,245,0.15),_transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(139,92,246,0.15),_transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(99,102,241,0.08),_transparent_70%)]" />

      <div className="relative z-10 mx-auto max-w-5xl px-6 pt-32 pb-24 sm:px-12">
        {/* Hero */}
        <section className="text-center">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.25em] text-[#0A8BF5]/80">
            Development
          </p>
          <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-6xl lg:text-7xl">
            Development{" "}
            <span className="bg-gradient-to-r from-[#0A8BF5] to-blue-600 bg-clip-text text-transparent glow-blue">
              Projects
            </span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-xl leading-relaxed text-slate-300/90 sm:text-2xl">
            Building tools and applications that solve real problems — including
            Glucose Compass, a Type 1 diabetes tracker now on the App Store —
            alongside full-stack web work.
          </p>
        </section>

        {/* Featured Project: Glucose Compass */}
        <section className="mt-20">
          <div className="rounded-2xl border-l-4 border-[#00D9FF] bg-white/5 p-6 backdrop-blur-sm sm:p-8">
            <span className="mb-4 inline-block rounded-full bg-[#00D9FF]/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#00D9FF]">
              ★ Featured Project
            </span>
            <div className="flex flex-col gap-6 sm:flex-row sm:items-start">
              {/* App icon */}
              <Image
                src="/images/t1dg/app-icon.png"
                alt="Glucose Compass app icon"
                width={64}
                height={64}
                className="flex-shrink-0 rounded-2xl"
              />

              <div className="flex-1">
                <h2 className="text-2xl font-bold text-white">Glucose Compass</h2>
                <p className="mt-1 text-sm text-gray-400">
                  Type 1 Diabetes Tracker
                </p>
                <p className="mt-3 leading-relaxed text-slate-300/90">
                  A personal health logging tool with AI-powered insights for
                  people with Type 1 Diabetes. Track glucose, meals, and insulin
                  — all stored locally on your device.
                </p>

                {/* Tech stack pills */}
                <div className="mt-4 flex flex-wrap gap-2">
                  {["React Native", "Expo", "TypeScript", "SQLite", "Zustand", "Gemini AI", "RevenueCat"].map(
                    (tech) => (
                      <span
                        key={tech}
                        className="rounded-full bg-[#00D9FF]/10 px-3 py-0.5 text-xs font-medium text-[#00D9FF] ring-1 ring-[#00D9FF]/20"
                      >
                        {tech}
                      </span>
                    )
                  )}
                </div>

                {/* CTAs — App Store primary, in-site page secondary */}
                <div className="mt-6 flex flex-wrap items-center gap-4">
                  <a
                    href="https://apps.apple.com/app/id6760599854"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-full bg-[#00D9FF] px-5 py-2 text-sm font-semibold text-[#06121f] transition hover:bg-[#00D9FF]/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00D9FF] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a1628]"
                  >
                    Download on the App Store
                    <span aria-hidden="true">↗</span>
                    <span className="sr-only">(opens in new tab)</span>
                  </a>
                  <Link
                    href="/glucose-compass"
                    className="inline-flex items-center gap-1 text-sm font-medium text-[#00D9FF] transition hover:text-[#00D9FF]/80"
                  >
                    View Project →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Tech Stack */}
        <section className="mt-20">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">
            Tech Stack
          </h2>
          <div className="mt-2 h-1 w-16 rounded-full bg-gradient-to-r from-[#0A8BF5] to-blue-600" />

          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            {stackCategories.map(({ category, items }) => (
              <div
                key={category}
                className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all duration-300 hover:border-[#0A8BF5]/40 hover:bg-white/10"
              >
                <h3 className="text-lg font-semibold text-white">
                  {category}
                </h3>
                <ul className="mt-4 space-y-2.5">
                  {items.map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#0A8BF5] shadow-lg shadow-[#0A8BF5]/[38]" />
                      <span className="text-sm text-slate-300/90">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
    </PageTransition>
  );
}
