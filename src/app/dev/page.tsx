const apps = [
  {
    title: "Classroom Dashboard",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
    description:
      "A real-time dashboard for tracking student progress, managing IEP goals, and generating weekly reports — built to streamline the daily workflow of special education teachers.",
  },
  {
    title: "VFX Pipeline Tool",
    tags: ["Python", "Node.js", "REST API"],
    description:
      "An internal tool that automates shot versioning, review submissions, and render-farm job tracking for compositing teams working in Nuke and After Effects.",
  },
  {
    title: "Portfolio Platform",
    tags: ["Next.js", "React", "Vercel"],
    description:
      "This very site — a responsive, multi-identity portfolio built with modern web technologies, designed to showcase work across VFX, education, and software development.",
  },
] as const;

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

const contributions = [
  {
    project: "Open Source Project A",
    role: "Contributor",
    description:
      "Added accessibility improvements to the component library, including keyboard navigation support and ARIA labeling across interactive elements.",
  },
  {
    project: "Open Source Project B",
    role: "Contributor",
    description:
      "Fixed a rendering performance regression in the virtual scroll module and added unit tests to prevent future regressions.",
  },
  {
    project: "Open Source Project C",
    role: "Maintainer",
    description:
      "Created and maintain a lightweight CLI tool that scaffolds compositing project structures with sensible defaults for Nuke and After Effects pipelines.",
  },
] as const;

import PageTransition from "@/components/shared/PageTransition";

export const metadata = {
  title: "Dev Projects — Bonacci",
  description:
    "Full-stack development projects spanning educational technology, VFX pipeline automation, and modern web applications.",
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
            Building tools and applications that solve real problems — from
            classroom management platforms to VFX pipeline automation and
            modern web experiences.
          </p>
        </section>

        {/* Featured Apps */}
        <section className="mt-20">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">
            Featured Apps
          </h2>
          <div className="mt-2 h-1 w-16 rounded-full bg-gradient-to-r from-[#0A8BF5] to-blue-600" />

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {apps.map(({ title, tags, description }) => (
              <div
                key={title}
                className="group flex flex-col rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all duration-300 hover:border-[#0A8BF5]/40 hover:bg-white/10 hover:-translate-y-1"
              >
                {/* Screenshot placeholder */}
                <div className="mb-4 flex h-36 items-center justify-center rounded-lg border border-white/10 bg-white/5">
                  <span className="text-sm text-slate-500">
                    App Screenshot
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-white">{title}</h3>
                <div className="mt-2 flex flex-wrap gap-2">
                  {tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-[#0A8BF5]/10 px-3 py-0.5 text-xs font-medium text-[#0A8BF5] ring-1 ring-[#0A8BF5]/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <p className="mt-3 text-base leading-relaxed text-slate-300/80">
                  {description}
                </p>
              </div>
            ))}
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

        {/* Open Source Contributions */}
        <section className="mt-20">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">
            Open Source Contributions
          </h2>
          <div className="mt-2 h-1 w-16 rounded-full bg-gradient-to-r from-[#0A8BF5] to-blue-600" />

          <div className="mt-8 space-y-6">
            {contributions.map(({ project, role, description }) => (
              <div
                key={project}
                className="flex gap-5 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all duration-300 hover:border-[#0A8BF5]/40 hover:bg-white/10 sm:p-8"
              >
                <span className="mt-0.5 h-3 w-3 shrink-0 rounded-full bg-[#0A8BF5] shadow-lg shadow-[#0A8BF5]/[38]" />
                <div>
                  <div className="flex flex-wrap items-center gap-3">
                    <h3 className="text-lg font-semibold text-white">
                      {project}
                    </h3>
                    <span className="rounded-full bg-[#0A8BF5]/10 px-3 py-0.5 text-xs font-medium text-[#0A8BF5] ring-1 ring-[#0A8BF5]/20">
                      {role}
                    </span>
                  </div>
                  <p className="mt-2 text-base leading-relaxed text-slate-300/80">
                    {description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
    </PageTransition>
  );
}
