import type { ComponentType } from "react";
import ScrollReveal from "@/components/ScrollReveal";
import ContactForm from "@/components/ContactForm";
import PageTransition from "@/components/shared/PageTransition";
import { Mail, Linkedin, Instagram, Youtube, Film } from "lucide-react";

/* ─── Metadata ───────────────────────────────────────────────────── */

export const metadata = {
  title: "Contact — Bonacci",
  description:
    "Get in touch about VFX compositing, teaching, or development projects.",
};

/* ─── Types ──────────────────────────────────────────────────────── */

interface SocialLink {
  label: string;
  value: string;
  href: string;
  Icon: ComponentType<{ className?: string }> | null;
  color: string;
  bg: string;
  border: string;
  hoverBorder: string;
  hoverBg: string;
  vimeoIcon?: boolean;
}

/* ─── Static data ────────────────────────────────────────────────── */

const socialLinks: SocialLink[] = [
  {
    label: "LinkedIn",
    value: "linkedin.com/in/alex-bonacci",
    href: "https://www.linkedin.com/in/alex-bonacci/",
    Icon: Linkedin,
    color: "text-[#0A66C2]",
    bg: "bg-[#0A66C2]/10",
    border: "border-[#0A66C2]/20",
    hoverBorder: "hover:border-[#0A66C2]/50",
    hoverBg: "hover:bg-[#0A66C2]/15",
  },
  {
    label: "Instagram",
    value: "@bonaccivfx",
    href: "https://www.instagram.com/bonaccivfx/",
    Icon: Instagram,
    color: "text-pink-400",
    bg: "bg-pink-400/10",
    border: "border-pink-400/20",
    hoverBorder: "hover:border-pink-400/50",
    hoverBg: "hover:bg-pink-400/10",
  },
  {
    label: "Vimeo",
    value: "vimeo.com/user14223031",
    href: "https://vimeo.com/user14223031",
    Icon: null,
    vimeoIcon: true,
    color: "text-[#1AB7EA]",
    bg: "bg-[#1AB7EA]/10",
    border: "border-[#1AB7EA]/20",
    hoverBorder: "hover:border-[#1AB7EA]/50",
    hoverBg: "hover:bg-[#1AB7EA]/10",
  },
  {
    label: "YouTube",
    value: "@Bonaccivfx",
    href: "https://www.youtube.com/@Bonaccivfx",
    Icon: Youtube,
    color: "text-red-500",
    bg: "bg-red-500/10",
    border: "border-red-500/20",
    hoverBorder: "hover:border-red-500/50",
    hoverBg: "hover:bg-red-500/10",
  },
  {
    label: "IMDb",
    value: "Alex Bonacci",
    href: "https://www.imdb.com/name/nm8251181/",
    Icon: Film,
    color: "text-[#F5C518]",
    bg: "bg-[#F5C518]/10",
    border: "border-[#F5C518]/20",
    hoverBorder: "hover:border-[#F5C518]/50",
    hoverBg: "hover:bg-[#F5C518]/10",
  },
];

/* ─── Collaboration interests ────────────────────────────────────── */

interface Interest {
  title: string;
  icon: "film" | "graduation" | "code" | "users";
  description: string;
}

const interests: Interest[] = [
  {
    title: "VFX Work",
    icon: "film",
    description:
      "Feature films, episodic TV, and commercial projects. Specializing in challenging composites, paint/roto, and CG integration.",
  },
  {
    title: "Teaching Opportunities",
    icon: "graduation",
    description:
      "College-level VFX instruction, K-12 special education, curriculum development, and educational tool consultation.",
  },
  {
    title: "Development Projects",
    icon: "code",
    description:
      "Educational technology, workflow automation, and tools that solve real problems for creatives and educators.",
  },
  {
    title: "Consulting",
    icon: "users",
    description:
      "Pipeline development, educational program design, and bridging technical arts with traditional curriculum.",
  },
];

/* ─── Sub-components ─────────────────────────────────────────────── */

function VimeoSvg() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
      <path d="M22.396 7.164c-.093 2.026-1.507 4.799-4.245 8.32C15.322 19.2 12.928 21 10.97 21c-1.214 0-2.24-1.12-3.08-3.36-.56-2.052-1.12-4.105-1.68-6.158-.623-2.24-1.293-3.36-2.013-3.36-.156 0-.7.328-1.634.98L1.5 7.697c1.027-.903 2.04-1.806 3.037-2.709C5.942 3.768 7.1 3.148 7.909 3.07c2.054-.197 3.32 1.207 3.8 4.21.51 3.23.865 5.237 1.063 6.022.59 2.685 1.24 4.026 1.953 4.026.552 0 1.384-.873 2.495-2.62 1.11-1.747 1.704-3.08 1.784-3.998.158-1.51-.435-2.267-1.784-2.267-.636 0-1.29.146-1.962.438 1.305-4.277 3.797-6.35 7.477-6.22 2.724.088 4.007 1.853 3.849 5.303l.022-.8h-.21z" />
    </svg>
  );
}

function InterestIcon({ icon }: { icon: Interest["icon"] }) {
  const shared =
    "h-5 w-5" as const;

  if (icon === "film") {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={shared}
      >
        <path d="M7 4v16M17 4v16M3 8h4m10 0h4M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z" />
      </svg>
    );
  }

  if (icon === "graduation") {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={shared}
      >
        <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
        <path d="M6 12v5c3 3 9 3 12 0v-5" />
      </svg>
    );
  }

  if (icon === "code") {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={shared}
      >
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    );
  }

  // users
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={shared}
    >
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}

/* ─── Page ───────────────────────────────────────────────────────── */

export default function ContactPage() {
  return (
    <PageTransition>
    <main className="relative min-h-screen overflow-hidden bg-gradient-to-br from-[#0a1628] via-[#1a1052] to-[#2d1b69]">
      {/* Radial overlays */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(79,70,229,0.2),_transparent_50%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(139,92,246,0.15),_transparent_50%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(99,102,241,0.08),_transparent_70%)]" />

      <div className="relative z-10 mx-auto max-w-6xl px-6 pb-24 pt-32 sm:px-12">

        {/* ── 1. Hero ─────────────────────────────────────────── */}
        <section className="text-center">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.25em] text-indigo-300/80">
            Contact
          </p>
          <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-6xl lg:text-7xl">
            Let&apos;s Create Something{" "}
            <span className="bg-gradient-to-r from-[#00D9FF] via-blue-400 to-blue-500 bg-clip-text text-transparent glow-indigo">
              Together
            </span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-300/90 sm:text-xl">
            Whether it&apos;s compositing, teaching, or building tools—I&apos;m
            always open to interesting challenges and collaborations.
          </p>
        </section>

        {/* ── 2. Form + Direct Contact ─────────────────────────── */}
        <ScrollReveal delay={0}>
          <section className="mt-20 grid grid-cols-1 gap-12 lg:grid-cols-5">

            {/* Left: Contact form */}
            <div className="lg:col-span-3">
              <h2 className="text-2xl font-bold text-white sm:text-3xl">
                Send a Message
              </h2>
              <div className="mt-2 h-0.5 w-16 rounded-full bg-gradient-to-r from-[#00D9FF] to-blue-500" />
              <ContactForm />
            </div>

            {/* Right: Direct contact */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold text-white sm:text-3xl">
                Direct Contact
              </h2>
              <div className="mt-2 h-0.5 w-16 rounded-full bg-gradient-to-r from-[#00D9FF] to-blue-500" />

              {/* Email card */}
              <a
                href="mailto:bonaccivfx@gmail.com"
                className="group mt-8 flex items-center gap-4 rounded-xl border border-[#00D9FF]/20 bg-[#00D9FF]/5 px-5 py-4 transition-all hover:border-[#00D9FF]/40 hover:bg-[#00D9FF]/10"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#00D9FF]/10 text-[#00D9FF]">
                  <Mail className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-xs font-medium uppercase tracking-wider text-slate-500">
                    Email
                  </p>
                  <p className="mt-0.5 text-sm font-semibold text-white">
                    bonaccivfx@gmail.com
                  </p>
                </div>
              </a>

              {/* Social links */}
              <ul className="mt-4 space-y-3">
                {socialLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`group flex items-center gap-3 rounded-xl border px-4 py-3 transition-all duration-200 ${link.border} ${link.hoverBorder} ${link.hoverBg}`}
                    >
                      <span
                        className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg ${link.bg} ${link.color}`}
                      >
                        {link.vimeoIcon ? (
                          <VimeoSvg />
                        ) : link.Icon ? (
                          <link.Icon className="h-5 w-5" />
                        ) : null}
                      </span>
                      <div>
                        <p className="text-sm font-medium text-white">
                          {link.label}
                        </p>
                        <p className="text-xs text-slate-400">{link.value}</p>
                      </div>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        </ScrollReveal>

        {/* ── 3. Collaboration Interests ───────────────────────── */}
        <ScrollReveal delay={80}>
          <section className="mt-20">
            <h2 className="text-2xl font-bold text-white sm:text-3xl">
              Collaboration Interests
            </h2>
            <div className="mt-2 h-0.5 w-16 rounded-full bg-gradient-to-r from-[#00D9FF] to-blue-500" />

            <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2">
              {interests.map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 transition-all duration-300 hover:border-[#00D9FF]/25 hover:bg-white/[0.07]"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#00D9FF]/10 text-[#00D9FF]">
                    <InterestIcon icon={item.icon} />
                  </div>
                  <p className="mt-4 text-base font-bold text-white">
                    {item.title}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-slate-400">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </section>
        </ScrollReveal>

        {/* ── 4. Response info ─────────────────────────────────── */}
        <ScrollReveal delay={120}>
          <section className="mt-20 text-center">
            <p className="text-sm text-slate-400">
              I typically respond within{" "}
              <span className="font-medium text-slate-300">24–48 hours</span>.
              {" "}For urgent inquiries,{" "}
              <a
                href="https://www.linkedin.com/in/alex-bonacci/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#00D9FF] hover:underline"
              >
                LinkedIn messaging
              </a>{" "}
              is often fastest.
            </p>
            <p className="mt-2 text-sm text-slate-500">
              Based in New York &middot; Available for remote and on-site work
            </p>
          </section>
        </ScrollReveal>

      </div>
    </main>
    </PageTransition>
  );
}
