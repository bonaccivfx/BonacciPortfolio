import Image from "next/image";
import Link from "next/link";
import {
  Activity,
  Sparkles,
  ShieldCheck,
  Database,
  Lock,
  Heart,
  BadgeCheck,
  Bell,
  ChevronRight,
  Check,
  AlertCircle,
  Info,
} from "lucide-react";

// Metadata is provided by the parent layout (src/app/glucose-compass/layout.tsx)

/* ─── Static data ─────────────────────────────────────────────── */

const features = [
  {
    icon: Activity,
    title: "Smart Dashboard",
    description:
      "Time in Range, estimated A1C, and Insulin on Board — each with a visible ⓘ source link to the clinical reference behind the calculation.",
    tag: "Clinical citations included",
  },
  {
    icon: Sparkles,
    title: "AI-Powered Insights",
    description:
      "Connect free AI via Google Gemini to discover patterns, understand meal impacts, and get plain-language answers. 10 queries/day free — bring your own key for unlimited.",
    tag: "Free to set up",
  },
  {
    icon: ShieldCheck,
    title: "Safety First",
    description:
      "Emergency contacts with 30-second confirmation countdown, critical alerts, and follow-up notifications — always free, never behind a paywall.",
    tag: "Always free",
  },
  {
    icon: Bell,
    title: "Pip — Smart Reminders",
    description:
      "A companion that nudges you to log at the right times. Local notifications only — never states a glucose value, never suggests treatment.",
    tag: null,
  },
  {
    icon: Database,
    title: "On-Device Privacy",
    description:
      "All glucose, meal, and insulin data stays on your iPhone. No cloud sync, no server, no data selling. Health data never touches the ad SDK.",
    tag: null,
  },
  {
    icon: AlertCircle,
    title: "Non-Personalized Ads",
    description:
      "Free tier is ad-supported with Google AdMob. Ads are non-personalized — no IDFA, no cross-app tracking. No ads appear in safety or emergency flows.",
    tag: null,
  },
];

const screenshots = [
  { src: "/images/t1dg/screenshot-1.png", alt: "Glucose Compass Dashboard showing Time in Range, eA1C, and IOB with citation buttons" },
  { src: "/images/t1dg/screenshot-2.png", alt: "Glucose Compass AI Insights with pattern analysis cards" },
  { src: "/images/t1dg/screenshot-3.png", alt: "Glucose Compass Quick Log for glucose, meals, and insulin" },
  { src: "/images/t1dg/screenshot-4.png", alt: "Glucose Compass History view with glucose range indicators" },
  { src: "/images/t1dg/screenshot-5.png", alt: "Glucose Compass AI Chat with medical disclaimer visible" },
  { src: "/images/t1dg/screenshot-6.png", alt: "Glucose Compass AI Setup — free Gemini sign-in flow" },
  { src: "/images/t1dg/screenshot-7.png", alt: "Glucose Compass Emergency contacts — safety features always free" },
];

const steps = [
  {
    number: 1,
    title: "Log Your Data",
    description:
      "Track glucose, meals, symptoms, and insulin in seconds with a fast, dark-first interface designed for real life.",
  },
  {
    number: 2,
    title: "AI Finds Patterns",
    description:
      "Connect free AI insights powered by Google Gemini. Your health data never leaves your device except during a query.",
  },
  {
    number: 3,
    title: "Stay in Control",
    description:
      "Emergency contacts, alerts, and all safety features are permanently free. Your diabetes, your data, your control.",
  },
];

const pricingTiers = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    description: "Full logging and dashboard access. Ad-supported.",
    features: [
      "Unlimited glucose, meal & insulin logging",
      "Full Dashboard — TIR, eA1C, IOB",
      "Complete history with search",
      "AI Insights — 10 queries/day (Gemini free)",
      "Bring your own API key (unlimited)",
      "Pip reminder companion",
    ],
    safetyNote: "Emergency contacts & safety features always free",
    highlighted: false,
    badge: null,
  },
  {
    name: "Remove Ads",
    price: "One-time",
    period: "purchase",
    description: "Everything in Free, permanently ad-free.",
    features: [
      "Everything in Free",
      "No banner or native ads",
      "30 AI queries/day (vs. 10 free)",
      "Never expires — restores on new device",
    ],
    safetyNote: "Emergency contacts still always free",
    highlighted: true,
    badge: "No Subscription",
  },
];

const trustPoints = [
  {
    icon: Database,
    text: "All health data stored locally on your device — no cloud sync, no server",
  },
  {
    icon: Lock,
    text: "Health data is never used for advertising or shared with the ad SDK",
  },
  {
    icon: AlertCircle,
    text: "Every AI surface shows a persistent medical disclaimer — always consult your provider",
  },
  {
    icon: Heart,
    text: "Emergency and safety features are permanently free — no paywall, ever",
  },
];

const statusChips = [
  { label: "v2.0.0 — Freemium Build", color: "text-emerald-400 border-emerald-400/20 bg-emerald-400/5" },
  { label: "App Store Review Pending", color: "text-amber-400 border-amber-400/20 bg-amber-400/5" },
  { label: "React Native · Expo SDK 54", color: "text-[#00D9FF] border-[#00D9FF]/20 bg-[#00D9FF]/5" },
  { label: "iOS 16+", color: "text-[#00D9FF] border-[#00D9FF]/20 bg-[#00D9FF]/5" },
];

/* ─── Page ────────────────────────────────────────────────────── */

export default function GlucoseCompassPage() {
  return (
    <div className="text-white">

      {/* ── Section 1: Hero ──────────────────────────────────── */}
      <section className="relative overflow-hidden px-6 pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-12 lg:flex-row lg:items-center lg:gap-20">

          {/* Left content */}
          <div className="flex flex-1 flex-col items-center text-center lg:items-start lg:text-left">
            {/* App icon */}
            <Image
              src="/images/t1dg/app-icon.png"
              alt="Glucose Compass app icon"
              width={64}
              height={64}
              className="mb-6 rounded-2xl shadow-[0_0_24px_rgba(0,217,255,0.15)]"
            />

            {/* Status chips */}
            <div className="mb-6 flex flex-wrap justify-center gap-2 lg:justify-start">
              {statusChips.map((chip) => (
                <span
                  key={chip.label}
                  className={`inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium ${chip.color}`}
                >
                  {chip.label}
                </span>
              ))}
            </div>

            <h1 className="text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
              Glucose Compass
            </h1>
            <p className="mt-2 text-xl text-gray-400 sm:text-2xl">
              Type 1 Diabetes Tracker
            </p>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-gray-300">
              Track glucose, meals, and insulin with AI-powered insights. Free
              setup, local data, emergency alerts always free.
            </p>

            {/* CTA + links */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4 lg:justify-start">
              <a
                href="#"
                className="inline-flex items-center gap-2 rounded-full bg-black px-8 py-3.5 text-sm font-medium text-white ring-1 ring-white/20 transition hover:bg-white/10 hover:ring-white/40"
              >
                <svg
                  className="h-5 w-5"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                </svg>
                Coming Soon to the App Store
              </a>
              <Link
                href="/glucose-compass/privacy"
                className="text-sm text-[#00D9FF] transition hover:text-[#00D9FF]/80"
              >
                Privacy Policy ↗
              </Link>
              <Link
                href="/glucose-compass/support"
                className="text-sm text-[#00D9FF] transition hover:text-[#00D9FF]/80"
              >
                Support ↗
              </Link>
            </div>
          </div>

          {/* Phone mockup */}
          <div className="flex flex-shrink-0 justify-center">
            <div className="w-[220px] overflow-hidden rounded-[2.5rem] border border-white/10 bg-[#0d1117] shadow-2xl shadow-[#00D9FF]/5 sm:w-[260px]">
              <Image
                src="/images/t1dg/screenshot-1.png"
                alt="Glucose Compass Dashboard showing Time in Range and current glucose"
                width={260}
                height={563}
                className="h-auto w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 2: Feature Highlights ────────────────────── */}
      <section className="px-6 py-20 lg:py-28">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-4 text-center text-3xl font-bold sm:text-4xl">
            Designed for Real Life
          </h2>
          <p className="mx-auto mb-14 max-w-2xl text-center text-gray-400">
            Every feature built with the daily reality of Type 1 diabetes in
            mind.
          </p>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((f) => (
              <div
                key={f.title}
                className="rounded-2xl border border-white/5 bg-white/[0.03] p-8 backdrop-blur-sm transition hover:border-[#00D9FF]/20 hover:bg-white/[0.05]"
              >
                <f.icon className="mb-5 h-8 w-8 text-[#00D9FF]" />
                <h3 className="mb-3 text-xl font-semibold">{f.title}</h3>
                <p className="leading-relaxed text-gray-400">
                  {f.description}
                </p>
                {f.tag && (
                  <span className="mt-4 inline-block rounded border border-[#00D9FF]/20 bg-[#00D9FF]/5 px-2 py-0.5 text-xs text-[#00D9FF]">
                    {f.tag}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 3: Screenshot Gallery ────────────────────── */}
      <section className="px-6 py-20 lg:py-28">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-4 text-center text-3xl font-bold sm:text-4xl">
            See It in Action
          </h2>
          <p className="mx-auto mb-14 max-w-2xl text-center text-gray-400">
            A clean, focused interface built for fast logging and clear insights.
          </p>

          {/* Scrollable on mobile, grid on desktop */}
          <div className="flex gap-5 overflow-x-auto pb-4 lg:grid lg:grid-cols-7 lg:overflow-visible">
            {screenshots.map((s) => (
              <div
                key={s.src}
                className="flex w-40 flex-shrink-0 flex-col overflow-hidden rounded-2xl border border-white/5 bg-white/[0.03] lg:w-auto"
              >
                <div className="h-1 w-full bg-[#00D9FF]/60" />
                <Image
                  src={s.src}
                  alt={s.alt}
                  width={320}
                  height={693}
                  className="h-auto w-full"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 4: How It Works ──────────────────────────── */}
      <section className="px-6 py-20 lg:py-28">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-4 text-center text-3xl font-bold sm:text-4xl">
            How It Works
          </h2>
          <p className="mx-auto mb-16 max-w-2xl text-center text-gray-400">
            From logging to insights in three simple steps.
          </p>

          <div className="relative">
            {/* Connecting line (desktop) */}
            <div className="absolute top-7 right-[16.67%] left-[16.67%] hidden h-0.5 bg-gradient-to-r from-[#00D9FF]/20 via-[#00D9FF]/40 to-[#00D9FF]/20 lg:block" />

            <div className="grid gap-12 lg:grid-cols-3 lg:gap-8">
              {steps.map((s) => (
                <div
                  key={s.number}
                  className="flex flex-col items-center text-center"
                >
                  <div className="relative z-10 mb-6 flex h-14 w-14 items-center justify-center rounded-full border-2 border-[#00D9FF] bg-[#0a1628] text-xl font-bold text-[#00D9FF]">
                    {s.number}
                  </div>
                  <h3 className="mb-3 text-xl font-semibold">{s.title}</h3>
                  <p className="max-w-xs leading-relaxed text-gray-400">
                    {s.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 5: Pricing ───────────────────────────────── */}
      <section className="px-6 py-20 lg:py-28">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-4 text-center text-3xl font-bold sm:text-4xl">
            Simple, Honest Pricing
          </h2>
          <p className="mx-auto mb-14 max-w-2xl text-center text-gray-400">
            Safety features are always free. The only paid option removes ads —
            no subscriptions, no locked features.
          </p>

          <div className="grid gap-6 sm:grid-cols-2">
            {pricingTiers.map((tier) => (
              <div
                key={tier.name}
                className={`relative flex flex-col rounded-2xl border p-8 ${
                  tier.highlighted
                    ? "border-[#00D9FF]/40 bg-[#00D9FF]/[0.04] shadow-[0_0_40px_rgba(0,217,255,0.08)]"
                    : "border-white/5 bg-white/[0.03]"
                }`}
              >
                {tier.badge && (
                  <span className="absolute -top-3 right-6 rounded-full bg-[#00D9FF] px-4 py-1 text-xs font-bold text-black">
                    {tier.badge}
                  </span>
                )}

                <h3 className="text-xl font-semibold">{tier.name}</h3>
                <div className="mt-4 mb-1 flex items-baseline gap-1">
                  <span className="text-4xl font-bold">{tier.price}</span>
                  {tier.period && (
                    <span className="text-sm text-gray-400">{tier.period}</span>
                  )}
                </div>
                <p className="mb-6 text-sm text-gray-500">{tier.description}</p>

                <ul className="mb-6 flex flex-1 flex-col gap-3">
                  {tier.features.map((feat) => (
                    <li
                      key={feat}
                      className="flex items-start gap-2 text-sm text-gray-300"
                    >
                      <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#00D9FF]" />
                      {feat}
                    </li>
                  ))}
                </ul>

                {tier.safetyNote && (
                  <p className="mt-auto text-xs font-medium text-emerald-400">
                    ⚡ {tier.safetyNote}
                  </p>
                )}
              </div>
            ))}
          </div>

          {/* Monetization note */}
          <div className="mt-8 flex items-start gap-3 rounded-xl border border-white/5 bg-white/[0.02] p-5">
            <Info className="mt-0.5 h-4 w-4 flex-shrink-0 text-gray-500" />
            <p className="text-xs leading-relaxed text-gray-500">
              Free tier is supported by non-personalized Google AdMob ads. No
              health data is shared with the ad SDK. Ads do not appear in
              emergency, alert, or safety flows. IDFA is not requested.
            </p>
          </div>
        </div>
      </section>

      {/* ── Section 6: Privacy & Trust ───────────────────────── */}
      <section className="px-6 py-20 lg:py-28">
        <div className="mx-auto max-w-4xl rounded-2xl border border-white/5 bg-white/[0.03] p-8 sm:p-12">
          <div className="flex gap-8">
            {/* Teal left accent */}
            <div className="hidden w-1 flex-shrink-0 rounded-full bg-gradient-to-b from-[#00D9FF] via-[#00D9FF]/60 to-[#00D9FF]/20 sm:block" />

            <div className="flex-1">
              <h2 className="mb-8 text-2xl font-bold sm:text-3xl">
                Your Data, Your Device
              </h2>

              <div className="grid gap-6 sm:grid-cols-2">
                {trustPoints.map((tp) => (
                  <div key={tp.text} className="flex items-start gap-3">
                    <tp.icon className="mt-0.5 h-5 w-5 flex-shrink-0 text-[#00D9FF]" />
                    <p className="text-sm leading-relaxed text-gray-300">
                      {tp.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 7: Developer Story ───────────────────────── */}
      <section className="px-6 py-20 lg:py-28">
        <div className="mx-auto max-w-3xl text-center">
          <BadgeCheck className="mx-auto mb-6 h-10 w-10 text-[#00D9FF]" />
          <h2 className="mb-6 text-2xl font-bold sm:text-3xl">
            Built by Bonacci
          </h2>
          <p className="mb-8 leading-relaxed text-gray-300">
            Built by a compositor, educator, and developer who believes
            technology should serve the people who need it most. Glucose Compass
            was built with the same precision applied to VFX compositing: every
            pixel matters, every interaction counts, every safety feature is
            non-negotiable.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6">
            <Link
              href="/"
              className="inline-flex items-center gap-1 text-[#00D9FF] transition hover:text-[#00D9FF]/80"
            >
              View Portfolio
              <ChevronRight className="h-4 w-4" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-1 text-[#00D9FF] transition hover:text-[#00D9FF]/80"
            >
              Get in Touch
              <ChevronRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── Section 8: Footer ────────────────────────────────── */}
      <footer className="border-t border-white/5 px-6 py-14">
        <div className="mx-auto grid max-w-6xl gap-10 sm:grid-cols-3">
          {/* App Links */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gray-400">
              App Links
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="#"
                  className="text-gray-400 transition hover:text-white"
                >
                  Download (Coming Soon)
                </a>
              </li>
              <li>
                <Link
                  href="/glucose-compass/privacy"
                  className="text-gray-400 transition hover:text-white"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/glucose-compass/support"
                  className="text-gray-400 transition hover:text-white"
                >
                  Support
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gray-400">
              Legal
            </h4>
            <p className="text-xs leading-relaxed text-gray-500">
              Glucose Compass is a personal health logging tool. It is not a
              medical device and does not provide medical advice, diagnosis, or
              treatment recommendations.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gray-400">
              Contact
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="mailto:bonaccivfx@gmail.com"
                  className="text-gray-400 transition hover:text-white"
                >
                  bonaccivfx@gmail.com
                </a>
              </li>
              <li>
                <Link
                  href="/"
                  className="text-gray-400 transition hover:text-white"
                >
                  Main Portfolio
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mx-auto mt-10 max-w-6xl border-t border-white/5 pt-6 text-center text-xs text-gray-600">
          &copy; {new Date().getFullYear()} Bonacci. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
