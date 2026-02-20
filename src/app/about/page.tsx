import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import PageTransition from "@/components/shared/PageTransition";

export const metadata = {
  title: "About — Bonacci",
  description:
    "Compositor, educator, and developer with 10+ years of VFX experience across film, TV, and education.",
};

/* ─── Static data ─────────────────────────────────────────────── */

const credits = [
  { year: 2016, title: "Star Trek Beyond", role: "Compositor", studio: "" },
  {
    year: 2018,
    title: "They Shall Not Grow Old",
    role: "Compositor",
    studio: "",
  },
  { year: 2018, title: "Mortal Engines", role: "Compositor", studio: "" },
  {
    year: 2023,
    title: "Guardians of the Galaxy Vol. 3",
    role: "Compositor",
    studio: "",
  },
  { year: 2024, title: "Ripley", role: "Compositor", studio: "Netflix" },
  {
    year: 2024,
    title: "Mr & Mrs. Smith",
    role: "Compositor",
    studio: "Amazon Prime",
  },
] as const;

const vfxSkills = [
  "Nuke (10+ years)",
  "After Effects",
  "PFTrack",
  "Maya",
  "Premiere Pro",
  "Adobe Creative Suite",
] as const;

const devSkills = [
  "React & TypeScript",
  "Next.js",
  "Node.js",
  "Python",
  "Git workflow",
  "Full-stack development",
] as const;

const teachingSkills = [
  "Compositing & VFX",
  "3D Animation",
  "Special Education (K–12)",
  "Educational technology",
  "Accessible curriculum design",
] as const;

/* ─── Page ───────────────────────────────────────────────────── */

export default function AboutPage() {
  return (
    <PageTransition>
    <main className="relative min-h-screen overflow-hidden bg-gradient-to-br from-[#0a1628] via-[#1a1052] to-[#2d1b69]">
      {/* Radial overlays */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(79,70,229,0.2),_transparent_50%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(139,92,246,0.15),_transparent_50%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(99,102,241,0.08),_transparent_70%)]" />

      <div className="relative z-10 mx-auto max-w-6xl px-6 pt-32 pb-24 sm:px-12">

        {/* ── 1. Hero ─────────────────────────────────────────── */}
        <section className="text-center">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.25em] text-indigo-300/80">
            Artist · Educator · Engineer
          </p>
          <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-6xl lg:text-7xl">
            Where Pixels Meet{" "}
            <span className="bg-gradient-to-r from-blue-400 via-violet-400 to-purple-500 bg-clip-text text-transparent glow-indigo">
              Purpose
            </span>
          </h1>
          <p className="mt-4 text-xl font-semibold text-slate-300 sm:text-2xl">
            Compositor. Educator. Developer.
          </p>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-300/90">
            10+ years transforming impossible shots into seamless reality, then
            teaching others to do the same—and building the tools that make it
            all possible.
          </p>
        </section>

        {/* ── 2. The Journey ──────────────────────────────────── */}
        <ScrollReveal delay={0}>
          <section className="mt-24">
            <h2 className="text-2xl font-bold text-white sm:text-3xl">
              The Journey
            </h2>
            <div className="mt-2 h-0.5 w-16 rounded-full bg-gradient-to-r from-indigo-400 to-purple-500" />

            <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-3">
              {/* Compositor */}
              <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-7 backdrop-blur-sm">
                <div className="flex items-center gap-3">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#C90808]" />
                  <h3 className="text-lg font-bold text-[#C90808]">
                    The Compositor
                  </h3>
                </div>
                <p className="mt-4 leading-relaxed text-slate-300/90">
                  I&apos;ve spent a decade making the invisible visible across
                  Los Angeles, Toronto, and New York. From Star Trek Beyond to
                  Guardians of the Galaxy Vol. 3, I&apos;ve crafted shots that
                  audiences never question—because that&apos;s the job. But my
                  proudest work? They Shall Not Grow Old. Restoring WWI footage
                  frame by frame wasn&apos;t just technical work; it was
                  preserving history so future generations can learn from the
                  past. That project changed how I see my craft—it&apos;s not
                  just about making things look good, it&apos;s about what those
                  images can teach us.
                </p>
              </div>

              {/* Educator */}
              <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-7 backdrop-blur-sm">
                <div className="flex items-center gap-3">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#25C908]" />
                  <h3 className="text-lg font-bold text-[#25C908]">
                    The Educator
                  </h3>
                </div>
                <p className="mt-4 leading-relaxed text-slate-300/90">
                  Education found me through industry experience. After years of
                  solving complex visual problems, I realized I could help others
                  have those &quot;aha!&quot; moments that transformed my own
                  career. Not everyone learns the same way—I know, because
                  traditional methods didn&apos;t always work for me. Now I
                  teach compositing and VFX at the college level and work with
                  K-12 special education students, proving that everyone can
                  master complex challenges with the right support. My goal?
                  Bring computer animation and technical arts into primary
                  education, where visual storytelling overlaps beautifully with
                  core curriculum.
                </p>
              </div>

              {/* Developer */}
              <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-7 backdrop-blur-sm">
                <div className="flex items-center gap-3">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#0A8BF5]" />
                  <h3 className="text-lg font-bold text-[#0A8BF5]">
                    The Developer
                  </h3>
                </div>
                <p className="mt-4 leading-relaxed text-slate-300/90">
                  Code became the bridge between my two worlds. I build
                  educational tools that save teachers hours of work—like
                  turning lesson plans into presentations automatically. I create
                  workflows that make compositing more efficient. I develop
                  because I see problems that need solving, and I have the
                  technical creativity to solve them. React, TypeScript,
                  Next.js—these aren&apos;t just buzzwords, they&apos;re how I
                  make the impossible practical.
                </p>
              </div>
            </div>
          </section>
        </ScrollReveal>

        {/* ── 3. Core Philosophy ──────────────────────────────── */}
        <ScrollReveal delay={80}>
          <section className="mt-24">
            <h2 className="text-2xl font-bold text-white sm:text-3xl">
              What Drives Me
            </h2>
            <div className="mt-2 h-0.5 w-16 rounded-full bg-gradient-to-r from-indigo-400 to-purple-500" />

            <div className="mt-10 rounded-2xl border border-indigo-400/15 bg-gradient-to-br from-indigo-500/5 via-white/[0.02] to-transparent p-8 sm:p-10">
              <p className="leading-relaxed text-slate-300/90">
                I&apos;m proudest of my perseverance. Complex challenges
                don&apos;t scare me—they energize me. Whether it&apos;s a shot
                that seems impossible, a student struggling with a concept, or a
                technical problem that needs a creative solution, I thrive in
                the intersection of technical precision and artistic vision.
              </p>
              <p className="mt-5 leading-relaxed text-slate-300/90">
                The process matters as much as the product. Every frame teaches
                something. Every student&apos;s breakthrough matters. Every line
                of code should solve a real problem.
              </p>
            </div>
          </section>
        </ScrollReveal>

        {/* ── 4. Select Credits ────────────────────────────────── */}
        <ScrollReveal delay={120}>
          <section className="mt-24">
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div>
                <h2 className="text-2xl font-bold text-white sm:text-3xl">
                  Select Credits
                </h2>
                <div className="mt-2 h-0.5 w-16 rounded-full bg-gradient-to-r from-indigo-400 to-purple-500" />
              </div>
              <a
                href="https://www.imdb.com/name/nm8251181/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded border border-[#F5C518]/50 px-3 py-1.5 text-sm font-semibold text-[#F5C518] transition-colors hover:border-[#F5C518] hover:bg-[#F5C518]/10"
              >
                <span className="inline-flex items-center rounded bg-[#F5C518] px-1.5 py-0.5 text-[10px] font-extrabold tracking-wide text-black">
                  IMDb
                </span>
                Full filmography on IMDb →
              </a>
            </div>

            <div className="mt-10 border-l-2 border-indigo-400/30 pl-6 space-y-8">
              {credits.map((credit) => (
                <div key={`${credit.year}-${credit.title}`} className="relative">
                  {/* Dot */}
                  <span className="absolute -left-[1.8125rem] top-1 h-2.5 w-2.5 rounded-full bg-[#C90808]/70" />
                  <p className="font-mono text-sm text-[#C90808]/70">
                    {credit.year}
                  </p>
                  <p className="mt-0.5 font-semibold text-white">
                    {credit.title}
                  </p>
                  <p className="text-sm text-slate-400">
                    {credit.role}
                    {credit.studio ? ` — ${credit.studio}` : ""}
                  </p>
                </div>
              ))}
            </div>
          </section>
        </ScrollReveal>

        {/* ── 5. Tools & Approach ─────────────────────────────── */}
        <ScrollReveal delay={160}>
          <section className="mt-24">
            <h2 className="text-2xl font-bold text-white sm:text-3xl">
              Tools &amp; Approach
            </h2>
            <div className="mt-2 h-0.5 w-16 rounded-full bg-gradient-to-r from-indigo-400 to-purple-500" />

            <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3">
              {/* VFX Mastery */}
              <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6">
                <h3 className="font-bold text-[#C90808]">VFX Mastery</h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {vfxSkills.map((skill) => (
                    <span
                      key={skill}
                      className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-slate-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Development Stack */}
              <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6">
                <h3 className="font-bold text-[#0A8BF5]">Development Stack</h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {devSkills.map((skill) => (
                    <span
                      key={skill}
                      className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-slate-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Teaching */}
              <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6">
                <h3 className="font-bold text-[#25C908]">Teaching</h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {teachingSkills.map((skill) => (
                    <span
                      key={skill}
                      className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-slate-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </ScrollReveal>

        {/* ── 6. Beyond the Work ──────────────────────────────── */}
        <ScrollReveal delay={200}>
          <section className="mt-24">
            <h2 className="text-2xl font-bold text-white sm:text-3xl">
              Beyond the Work
            </h2>
            <div className="mt-2 h-0.5 w-16 rounded-full bg-gradient-to-r from-indigo-400 to-purple-500" />

            <div className="mt-8 space-y-5 max-w-3xl">
              <p className="leading-relaxed text-slate-300/90">
                I create and study in my free time. The technical and artistic
                process propels me through life—I enjoy every second of the
                journey.
              </p>
              <p className="leading-relaxed text-slate-300/90">
                My teaching philosophy centers on &quot;aha moments&quot;—those
                breakthrough instances when everything clicks. I design my
                lessons around them because I remember how powerful they were in
                my own learning journey. Everyone shines in their own way; they
                just need the right support and the right challenge.
              </p>
            </div>
          </section>
        </ScrollReveal>

        {/* ── 7. CTA ──────────────────────────────────────────── */}
        <ScrollReveal delay={240}>
          <section className="mt-24 text-center">
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
              Let&apos;s Collaborate
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-300/90">
              Whether you need a compositor who solves impossible problems, an
              educator who makes complex concepts accessible, or a developer who
              builds tools that matter—let&apos;s talk.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 px-8 py-3.5 text-base font-semibold text-white shadow-lg shadow-indigo-500/25 transition-all hover:shadow-xl hover:shadow-indigo-500/30 hover:brightness-110 active:scale-[0.98]"
              >
                Get In Touch
              </Link>
              <Link
                href="/vfx"
                className="inline-flex items-center gap-2 rounded-full border border-[#C90808] px-8 py-3.5 text-base font-semibold text-[#C90808] transition-all hover:bg-[#C90808]/10 active:scale-[0.98]"
              >
                View My Work
              </Link>
            </div>
          </section>
        </ScrollReveal>

      </div>
    </main>
    </PageTransition>
  );
}
