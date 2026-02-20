"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { label: "Home",           href: "/",        accent: null     },
  { label: "VFX Work",       href: "/vfx",     accent: "cyan"   },
  { label: "Teaching Tools", href: "/teaching", accent: "green"  },
  { label: "Dev Projects",   href: "/dev",     accent: "orange" },
  { label: "About",          href: "/about",   accent: null     },
  { label: "Contact",        href: "/contact", accent: null     },
] as const;

const accentStyles = {
  cyan: {
    bar:       "bg-[#C90808]",
    text:      "text-[#C90808]",
    border:    "border-[#C90808]",
    activeBg:  "bg-[#C90808]/10",
    hoverText: "hover:text-[#C90808]",
    hoverBg:   "hover:bg-[#C90808]/[0.08]",
  },
  green: {
    bar:       "bg-[#25C908]",
    text:      "text-[#25C908]",
    border:    "border-[#25C908]",
    activeBg:  "bg-[#25C908]/10",
    hoverText: "hover:text-[#25C908]",
    hoverBg:   "hover:bg-[#25C908]/[0.08]",
  },
  orange: {
    bar:       "bg-[#0A8BF5]",
    text:      "text-[#0A8BF5]",
    border:    "border-[#0A8BF5]",
    activeBg:  "bg-[#0A8BF5]/10",
    hoverText: "hover:text-[#0A8BF5]",
    hoverBg:   "hover:bg-[#0A8BF5]/[0.08]",
  },
} as const;

/* Fallback for links without an identity accent (Home, About, Contact) */
const neutralMobile = {
  text:      "text-white",
  border:    "border-indigo-400",
  activeBg:  "bg-indigo-400/10",
  hoverText: "hover:text-slate-100",
  hoverBg:   "hover:bg-white/[0.07]",
};

export default function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled,   setScrolled]   = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      {/* ── Nav bar ───────────────────────────────────────────────── */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#0a1628]/80 shadow-lg shadow-indigo-500/5"
            : "bg-[#0a1628]/50"
        } backdrop-blur-xl border-b border-white/5`}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">

            {/* ── Logo / Brand ──────────────────────────────────── */}
            <Link
              href="/"
              className="bg-gradient-to-r from-blue-400 via-violet-400 to-purple-500 bg-clip-text text-xl font-extrabold tracking-tight text-transparent transition-all duration-300 drop-shadow-[0_0_11px_rgba(139,120,255,0.23)] hover:drop-shadow-[0_0_15px_rgba(139,120,255,0.45)]"
            >
              Bonacci
            </Link>

            {/* ── Desktop links ─────────────────────────────────── */}
            <ul className="hidden md:flex items-center gap-1">
              {navLinks.map(({ label, href, accent }) => {
                const isActive = pathname === href;
                const styles   = accent ? accentStyles[accent] : null;
                return (
                  <li key={href}>
                    <Link
                      href={href}
                      className={`relative px-3 py-2 text-sm transition-colors duration-200 group ${
                        isActive
                          ? styles?.text ?? "text-white"
                          : "text-slate-300/90 hover:text-white"
                      }`}
                    >
                      {label}
                      <span
                        className={`absolute inset-x-3 -bottom-px h-px transition-transform duration-300 origin-left ${
                          styles?.bar ?? "bg-gradient-to-r from-indigo-500 to-purple-500"
                        } ${isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"}`}
                      />
                    </Link>
                  </li>
                );
              })}
            </ul>

            {/* ── Mobile hamburger ──────────────────────────────── */}
            <button
              type="button"
              onClick={() => setMobileOpen((v) => !v)}
              className={`md:hidden relative z-[60] w-10 h-10 flex items-center justify-center rounded-lg transition-colors duration-200 ${
                mobileOpen
                  ? "text-white bg-white/10"
                  : "text-slate-300 hover:text-white hover:bg-white/5"
              }`}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
            >
              <span className={`absolute h-0.5 w-5 bg-current transition-all duration-300 ${mobileOpen ? "rotate-45"        : "-translate-y-1.5"}`} />
              <span className={`absolute h-0.5 w-5 bg-current transition-all duration-300 ${mobileOpen ? "opacity-0 scale-x-0" : ""}`} />
              <span className={`absolute h-0.5 w-5 bg-current transition-all duration-300 ${mobileOpen ? "-rotate-45"       : "translate-y-1.5"}`} />
            </button>
          </div>
        </div>
      </nav>

      {/*
        ── Mobile menu overlay ────────────────────────────────────────
        IMPORTANT: This is a SIBLING of <nav>, not a child.
        If it were inside <nav>, Chrome would treat the nav's
        backdrop-blur-xl as a containing block for this fixed element,
        causing top-16/bottom-0 to resolve against the 64 px nav
        instead of the viewport — making the overlay invisible.
      */}
      <div
        aria-hidden={!mobileOpen}
        onClick={() => setMobileOpen(false)}
        className={`md:hidden fixed inset-x-0 top-16 bottom-0 z-40 transition-all duration-300 ease-out ${
          mobileOpen
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-3 pointer-events-none"
        }`}
        style={{
          background:     "rgba(7, 10, 22, 0.98)",
          backdropFilter: "blur(24px)",
        }}
      >
        {/* Thin accent separator at the very top */}
        <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        {/* Content — stopPropagation so backdrop-click only fires outside links */}
        <div
          onClick={(e) => e.stopPropagation()}
          className={`h-full overflow-y-auto transition-all duration-[350ms] ease-out ${
            mobileOpen ? "translate-y-0 opacity-100" : "-translate-y-4 opacity-0"
          }`}
        >
          <ul className="flex flex-col space-y-2 px-5 pt-6 pb-4">
            {navLinks.map(({ label, href, accent }, i) => {
              const isActive = pathname === href;
              const styles   = accent ? accentStyles[accent] : null;

              const activeTextClass   = styles?.text      ?? neutralMobile.text;
              const activeBgClass     = styles?.activeBg  ?? neutralMobile.activeBg;
              const activeBorderClass = styles?.border    ?? neutralMobile.border;
              const hoverTextClass    = styles?.hoverText ?? neutralMobile.hoverText;
              const hoverBgClass      = styles?.hoverBg   ?? neutralMobile.hoverBg;

              return (
                <li
                  key={href}
                  className={`transition-all duration-300 ease-out ${
                    mobileOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
                  }`}
                  style={{ transitionDelay: mobileOpen ? `${60 + i * 50}ms` : "0ms" }}
                >
                  <Link
                    href={href}
                    onClick={() => setMobileOpen(false)}
                    className={`flex items-center min-h-[64px] rounded-2xl px-6 py-5 text-2xl font-semibold tracking-tight border-l-4 transition-all duration-200 ${
                      isActive
                        ? `${activeBgClass} ${activeTextClass} ${activeBorderClass}`
                        : `text-slate-300 border-transparent ${hoverTextClass} ${hoverBgClass}`
                    }`}
                  >
                    {label}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Bottom branding mark */}
          <p className="text-center pt-4 pb-10 text-[10px] font-medium uppercase tracking-[0.3em] text-slate-700">
            Bonacci · Portfolio
          </p>
        </div>
      </div>
    </>
  );
}
