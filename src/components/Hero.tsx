"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";

/* ─── Static data ──────────────────────────────────────────────── */

const identities = [
  {
    title: "VFX Compositor",
    detail: "10+ Years of Experience",
    href: "/vfx",
    color: "#C90808",
    rgb: "201,8,8",
  },
  {
    title: "Special Education Teacher",
    detail: "Dedicated Educator",
    href: "/teaching",
    color: "#25C908",
    rgb: "37,201,8",
  },
  {
    title: "Full-Stack Developer",
    detail: "Modern Web Builder",
    href: "/dev",
    color: "#0A8BF5",
    rgb: "10,139,245",
  },
];

const dropdownItems = [
  {
    label: "View Showreel",
    href: "/vfx#demo-reels",
    desc: "VFX compositing portfolio",
  },
  {
    label: "Explore Projects",
    href: "/dev",
    desc: "Development work",
  },
];

/* ─── Component ────────────────────────────────────────────────── */

export default function Hero() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [hoveredBadge, setHoveredBadge] = useState<number | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  /* Close dropdown on outside click */
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-[#0a1628] via-[#1a1052] to-[#2d1b69]">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(79,70,229,0.2),_transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(139,92,246,0.15),_transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(99,102,241,0.08),_transparent_70%)]" />

      <div className="relative z-10 mx-auto max-w-5xl px-8 py-32 text-center sm:px-12 lg:py-40">
        <p className="animate-fade-in-up mb-6 text-sm font-medium uppercase tracking-[0.25em] text-indigo-300/80">
          Welcome to my portfolio
        </p>

        <h1 className="animate-fade-in-up animation-delay-200 text-4xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-7xl lg:text-8xl">
          Hi, I&apos;m{" "}
          <span className="bg-gradient-to-r from-blue-400 via-violet-400 to-purple-500 bg-clip-text text-transparent glow-indigo">
            Bonacci
          </span>
        </h1>

        {/* Discipline bars */}
        <div className="mx-auto mt-6 flex max-w-md flex-col items-start gap-2.5">
          {[
            { label: "VFX",         color: "rgb(201,8,8)",    shadow: "rgba(201,8,8,0.4)"    },
            { label: "Education",   color: "rgb(37,201,8)",   shadow: "rgba(37,201,8,0.4)"   },
            { label: "Development", color: "rgb(10,139,245)", shadow: "rgba(10,139,245,0.4)" },
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

        {/* ── Primary CTA buttons ─────────────────────────────── */}
        <div className="animate-fade-in-up animation-delay-600 mt-10 flex flex-wrap items-center justify-center gap-4">
          {/* View Showreel */}
          <Link
            href="/vfx"
            className="inline-flex items-center gap-2.5 rounded-full bg-gradient-to-r from-[#C90808] to-red-700 px-8 py-3.5 text-base font-semibold text-white shadow-lg shadow-[#C90808]/25 transition-all hover:brightness-110 hover:shadow-xl hover:shadow-[#C90808]/30 active:scale-[0.98]"
          >
            {/* Play icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
            View Showreel
          </Link>

          {/* Explore Projects */}
          <Link
            href="/dev"
            className="inline-flex items-center gap-2.5 rounded-full border border-[#0A8BF5]/50 bg-[#0A8BF5]/10 px-8 py-3.5 text-base font-semibold text-[#0A8BF5] transition-all hover:border-[#0A8BF5] hover:bg-[#0A8BF5]/20 hover:shadow-lg hover:shadow-[#0A8BF5]/20 active:scale-[0.98]"
          >
            Explore Projects
            {/* Arrow icon */}
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
              aria-hidden="true"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </div>

        {/* ── "Explore My Work" dropdown ──────────────────────── */}
        <div
          ref={dropdownRef}
          className="animate-fade-in-up animation-delay-800 relative mt-4 inline-block"
        >
          <button
            type="button"
            onClick={() => setDropdownOpen((v) => !v)}
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-2.5 text-sm font-medium text-slate-300 backdrop-blur-sm transition-all hover:border-white/30 hover:bg-white/10 hover:text-white"
            aria-haspopup="true"
            aria-expanded={dropdownOpen}
          >
            Explore My Work
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className={`transition-transform duration-200 ${dropdownOpen ? "rotate-180" : ""}`}
              aria-hidden="true"
            >
              <path d="m6 9 6 6 6-6" />
            </svg>
          </button>

          {/* Dropdown panel */}
          {dropdownOpen && (
            <div
              role="menu"
              className="absolute left-1/2 top-full z-20 mt-2 w-56 -translate-x-1/2 overflow-hidden rounded-xl border border-white/10 bg-[#0a1628]/95 shadow-xl shadow-black/40 backdrop-blur-xl"
            >
              {dropdownItems.map(({ label, href, desc }) => (
                <Link
                  key={href}
                  href={href}
                  role="menuitem"
                  onClick={() => setDropdownOpen(false)}
                  className="group flex flex-col px-4 py-3 transition-colors hover:bg-white/[0.07] first:rounded-t-xl last:rounded-b-xl"
                >
                  <span className="text-sm font-medium text-white group-hover:text-[#00D9FF]">
                    {label}
                  </span>
                  <span className="mt-0.5 text-xs text-slate-500">{desc}</span>
                </Link>
              ))}
            </div>
          )}
        </div>

        {/* ── Identity badges ─────────────────────────────────── */}
        <div className="mt-16 grid gap-6 sm:grid-cols-3">
          {identities.map(({ title, detail, href, color, rgb }, i) => {
            const isHovered = hoveredBadge === i;
            return (
              <Link
                key={title}
                href={href}
                onMouseEnter={() => setHoveredBadge(i)}
                onMouseLeave={() => setHoveredBadge(null)}
                style={{
                  borderColor: isHovered
                    ? `rgba(${rgb}, 0.5)`
                    : "rgba(255,255,255,0.1)",
                  backgroundColor: isHovered
                    ? `rgba(${rgb}, 0.1)`
                    : "rgba(255,255,255,0.05)",
                  animationDelay: `${0.6 + i * 0.15}s`,
                }}
                className="animate-fade-in-up group rounded-2xl border px-6 py-10 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1"
              >
                <h2
                  style={{ color: isHovered ? color : "white" }}
                  className="text-xl font-semibold transition-colors duration-200"
                >
                  {title}
                </h2>
                <p className="mt-2 text-sm text-slate-400">{detail}</p>
                <div
                  style={{ borderTopColor: `rgba(${rgb}, 0.25)` }}
                  className="mt-4 border-t pt-3"
                >
                  <span
                    style={{ color }}
                    className="text-xs font-medium opacity-0 transition-opacity duration-200 group-hover:opacity-100"
                  >
                    Explore →
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
