"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { label: "Home", href: "/", accent: null },
  { label: "About", href: "/about", accent: null },
  { label: "VFX Work", href: "/vfx", accent: "cyan" },
  { label: "Teaching Tools", href: "/teaching", accent: "green" },
  { label: "Dev Projects", href: "/dev", accent: "orange" },
  { label: "Contact", href: "/contact", accent: null },
] as const;

const accentStyles = {
  cyan: {
    bar: "bg-cyan-400",
    text: "text-cyan-300",
    border: "border-cyan-400",
  },
  green: {
    bar: "bg-green-400",
    text: "text-green-300",
    border: "border-green-400",
  },
  orange: {
    bar: "bg-orange-400",
    text: "text-orange-300",
    border: "border-orange-400",
  },
} as const;

export default function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0a1628]/80 shadow-lg shadow-indigo-500/5"
          : "bg-[#0a1628]/50"
      } backdrop-blur-xl border-b border-white/5`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo / Brand */}
          <Link
            href="/"
            className="text-lg font-bold bg-gradient-to-r from-blue-400 via-violet-400 to-purple-500 bg-clip-text text-transparent hover:brightness-125 transition-all duration-300"
          >
            Portfolio
          </Link>

          {/* Desktop links */}
          <ul className="hidden md:flex items-center gap-1">
            {navLinks.map(({ label, href, accent }) => {
              const isActive = pathname === href;
              const styles = accent ? accentStyles[accent] : null;
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
                        styles?.bar ??
                        "bg-gradient-to-r from-indigo-500 to-purple-500"
                      } ${
                        isActive
                          ? "scale-x-100"
                          : "scale-x-0 group-hover:scale-x-100"
                      }`}
                    />
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Mobile hamburger button */}
          <button
            type="button"
            onClick={() => setMobileOpen((v) => !v)}
            className="md:hidden relative w-8 h-8 flex items-center justify-center text-slate-300 hover:text-white transition-colors"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            <span
              className={`absolute h-0.5 w-5 bg-current transition-all duration-300 ${
                mobileOpen ? "rotate-45" : "-translate-y-1.5"
              }`}
            />
            <span
              className={`absolute h-0.5 w-5 bg-current transition-all duration-300 ${
                mobileOpen ? "opacity-0 scale-x-0" : ""
              }`}
            />
            <span
              className={`absolute h-0.5 w-5 bg-current transition-all duration-300 ${
                mobileOpen ? "-rotate-45" : "translate-y-1.5"
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile menu overlay */}
      <div
        className={`md:hidden fixed inset-0 top-16 bg-[#0a1628]/95 backdrop-blur-xl transition-all duration-300 ${
          mobileOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <ul className="flex flex-col items-center justify-center gap-2 pt-12">
          {navLinks.map(({ label, href, accent }, i) => {
            const isActive = pathname === href;
            const styles = accent ? accentStyles[accent] : null;
            return (
              <li
                key={href}
                className={`transition-all duration-300 ${
                  mobileOpen
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-4"
                }`}
                style={{
                  transitionDelay: mobileOpen ? `${i * 75}ms` : "0ms",
                }}
              >
                <Link
                  href={href}
                  onClick={() => setMobileOpen(false)}
                  className={`block px-6 py-3 text-lg rounded-lg transition-all duration-200 border-l-2 ${
                    isActive
                      ? `bg-white/5 ${styles?.text ?? "text-white"} ${styles?.border ?? "border-indigo-500"}`
                      : "text-slate-300/90 border-transparent hover:text-white hover:bg-white/5"
                  }`}
                >
                  {label}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
