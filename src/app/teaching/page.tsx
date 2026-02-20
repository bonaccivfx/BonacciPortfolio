const tools = [
  {
    title: "Subject-Specific Templates",
    description:
      "Pre-built lesson frameworks for math, reading, science, and life skills — each designed with differentiated instruction baked in from the start.",
  },
  {
    title: "IEP-Aligned Objectives",
    description:
      "Automatically map lesson goals to individualized education plan benchmarks, saving hours of cross-referencing and documentation.",
  },
  {
    title: "Adaptive Scaffolding",
    description:
      "Generate tiered activity versions so every learner can access the same content at their own level of complexity and support.",
  },
] as const;

const philosophyPillars = [
  {
    title: "Every Learner Belongs",
    description:
      "Inclusion isn't an add-on — it's the foundation. Classroom design, materials, and interactions should reflect the full spectrum of how students think and learn.",
  },
  {
    title: "Strengths Before Deficits",
    description:
      "Effective teaching starts with what a student can do. Building on strengths creates confidence, and confidence opens the door to tackling challenges.",
  },
  {
    title: "Data-Informed, Human-Led",
    description:
      "Progress monitoring and data collection guide decisions, but empathy and relationship always come first. Numbers inform — they don't replace judgment.",
  },
] as const;

const resources = [
  {
    title: "Behavior Support Toolkit",
    type: "Download",
    description:
      "Visual schedules, token boards, social stories, and de-escalation guides ready for print or digital use in any classroom setting.",
  },
  {
    title: "Sensory-Friendly Classroom Guide",
    type: "Article",
    description:
      "A practical walkthrough for setting up sensory corners, choosing lighting, and reducing environmental overwhelm for neurodiverse learners.",
  },
  {
    title: "Parent Communication Templates",
    type: "Download",
    description:
      "Weekly update forms, IEP meeting prep sheets, and positive-note templates that keep families informed and involved.",
  },
  {
    title: "Assistive Technology Overview",
    type: "Article",
    description:
      "An introduction to affordable and accessible AT tools — from text-to-speech apps to adaptive input devices — with classroom implementation tips.",
  },
] as const;

import PageTransition from "@/components/shared/PageTransition";

export const metadata = {
  title: "Teaching Tools — Bonacci",
  description:
    "Educational tools and resources for inclusive, accessible learning — built from real classroom experience in special education.",
};

export default function TeachingPage() {
  return (
    <PageTransition>
    <main className="relative min-h-screen overflow-hidden bg-gradient-to-br from-[#0a1628] via-[#1a1052] to-[#2d1b69]">
      {/* Radial overlays */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(37,201,8,0.15),_transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(139,92,246,0.15),_transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(99,102,241,0.08),_transparent_70%)]" />

      <div className="relative z-10 mx-auto max-w-5xl px-6 pt-32 pb-24 sm:px-12">
        {/* Hero */}
        <section className="text-center">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.25em] text-[#25C908]/80">
            Education
          </p>
          <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-6xl lg:text-7xl">
            Educational Tools{" "}
            <span className="bg-gradient-to-r from-[#25C908] to-green-700 bg-clip-text text-transparent glow-green">
              & Resources
            </span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-xl leading-relaxed text-slate-300/90 sm:text-2xl">
            Making education accessible and effective for every learner —
            practical tools, inclusive strategies, and resources built from
            real classroom experience in special education.
          </p>
        </section>

        {/* Lesson Plan Generator */}
        <section className="mt-20">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">
            Lesson Plan Generator
          </h2>
          <div className="mt-2 h-1 w-16 rounded-full bg-gradient-to-r from-[#25C908] to-green-700" />
          <p className="mt-4 max-w-2xl text-lg text-slate-300/90">
            A tool designed to help educators quickly scaffold standards-aligned
            lesson plans with built-in accommodations and modifications for
            diverse learners.
          </p>

          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            {tools.map(({ title, description }) => (
              <div
                key={title}
                className="group rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all duration-300 hover:border-[#25C908]/40 hover:bg-white/10 hover:-translate-y-1"
              >
                <h3 className="text-lg font-semibold text-white">{title}</h3>
                <p className="mt-3 text-base leading-relaxed text-slate-300/80">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Teaching Philosophy */}
        <section className="mt-20">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">
            Teaching Philosophy
          </h2>
          <div className="mt-2 h-1 w-16 rounded-full bg-gradient-to-r from-[#25C908] to-green-700" />

          <div className="mt-8 space-y-6">
            {philosophyPillars.map(({ title, description }, i) => (
              <div
                key={title}
                className="flex gap-5 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all duration-300 hover:border-[#25C908]/40 hover:bg-white/10 sm:p-8"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#25C908]/10 text-sm font-bold text-[#25C908] ring-1 ring-[#25C908]/30">
                  {i + 1}
                </span>
                <div>
                  <h3 className="text-lg font-semibold text-white">{title}</h3>
                  <p className="mt-2 text-base leading-relaxed text-slate-300/80">
                    {description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Resources */}
        <section className="mt-20">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">
            Resources
          </h2>
          <div className="mt-2 h-1 w-16 rounded-full bg-gradient-to-r from-[#25C908] to-green-700" />

          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {resources.map(({ title, type, description }) => (
              <div
                key={title}
                className="group rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all duration-300 hover:border-[#25C908]/40 hover:bg-white/10 hover:-translate-y-1"
              >
                <div className="flex items-center gap-3">
                  <span className="h-2 w-2 rounded-full bg-[#25C908] shadow-lg shadow-[#25C908]/[38]" />
                  <h3 className="text-lg font-semibold text-white">{title}</h3>
                </div>
                <span className="mt-2 inline-block rounded-full bg-[#25C908]/10 px-3 py-0.5 text-xs font-medium text-[#25C908] ring-1 ring-[#25C908]/20">
                  {type}
                </span>
                <p className="mt-3 text-base leading-relaxed text-slate-300/80">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
    </PageTransition>
  );
}
