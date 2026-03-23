"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown } from "lucide-react";

// export const metadata: Metadata = {
//   title: "Support — Glucose Compass | Bonacci",
//   description:
//     "Get help with Glucose Compass. FAQ, contact information, and app support for Type 1 Diabetes tracking.",
// };
// NOTE: metadata must be in a separate file for client components — see below.

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mt-10 mb-4 text-xl font-semibold text-white">{children}</h2>
  );
}

const faqItems = [
  {
    question: "How do I set up AI insights?",
    answer:
      "Go to Settings > AI Settings > select Tier 1 (Free). Follow the walkthrough to get a free Google Gemini API key from Google AI Studio. It\u2019s a one-time setup that takes about 2 minutes.",
  },
  {
    question: "What data does the AI see?",
    answer:
      "When you request an insight, a snapshot of recent glucose, meal, and symptom data is sent to the AI provider. Your name, location, and account details are never included.",
  },
  {
    question: "How do I manage my subscription?",
    answer:
      "Go to iOS Settings > Apple ID > Subscriptions > Glucose Compass. You can upgrade, downgrade, or cancel anytime.",
  },
  {
    question: "How do I delete my data?",
    answer:
      "All data is stored locally on your device. Deleting the app removes everything. To clear AI keys: Settings > AI Settings > Disconnect.",
  },
  {
    question: "How do emergency contacts work?",
    answer:
      "Add contacts in the Emergency section. When an extreme glucose value is detected, the app asks if you\u2019d like to notify them. A 30-second countdown gives you time to cancel. Emergency features are always free.",
  },
  {
    question: "Is this a medical device?",
    answer:
      "No. Glucose Compass is a personal health logging tool. It does not provide medical advice, diagnosis, or treatment recommendations. Always consult your healthcare provider.",
  },
  {
    question: "Are my health data used for ads?",
    answer:
      "Never. All ads are non-personalized. Health data is never used for advertising targeting. Premium subscribers see no ads at all.",
  },
  {
    question: "Can I use my own AI provider?",
    answer:
      "Yes! Lifetime tier includes BYOK (Bring Your Own Key) \u2014 connect Groq, OpenRouter, Anthropic, or other providers with your own API key.",
  },
];

function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="space-y-3">
      {faqItems.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div
            key={index}
            className="rounded-lg border border-white/10 bg-white/5 overflow-hidden"
          >
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? null : index)}
              className="flex w-full items-center justify-between px-5 py-4 text-left text-white font-semibold hover:bg-white/5 transition-colors"
            >
              <span>{item.question}</span>
              <ChevronDown
                className={`h-5 w-5 shrink-0 text-gray-400 transition-transform duration-200 ${
                  isOpen ? "rotate-180" : ""
                }`}
              />
            </button>
            {isOpen && (
              <div className="px-5 pb-4 text-gray-300 leading-relaxed">
                {item.answer}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default function T1DGSupportPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 text-gray-300 leading-relaxed pt-28 pb-24 sm:px-6 lg:px-8">
      {/* Breadcrumb */}
      <nav className="mb-8 text-sm text-gray-500">
        <Link href="/" className="hover:text-cyan-400 transition-colors">Home</Link>
        <span className="mx-2">&gt;</span>
        <Link href="/glucose-compass" className="hover:text-cyan-400 transition-colors">Glucose Compass</Link>
        <span className="mx-2">&gt;</span>
        <span className="text-gray-400">Support</span>
      </nav>

      <h1 className="mb-6 text-3xl font-bold text-white sm:text-4xl">
        Glucose Compass — Support
      </h1>

      {/* ── App Information ── */}
      <SectionHeading>App Information</SectionHeading>
      <div className="flex items-center gap-4">
        <Image
          src="/images/t1dg/app-icon.png"
          alt="Glucose Compass app icon"
          width={48}
          height={48}
          className="rounded-xl"
        />
        <div>
          <p className="font-semibold text-white">Glucose Compass</p>
          <p className="text-sm text-gray-400">
            Version 1.0 &middot; iOS
          </p>
          <p className="text-sm text-gray-400">
            A personal health logging tool for people with Type 1 Diabetes.
          </p>
        </div>
      </div>

      {/* ── FAQ ── */}
      <SectionHeading>Frequently Asked Questions</SectionHeading>
      <FaqAccordion />

      {/* ── Contact ── */}
      <SectionHeading>Contact</SectionHeading>
      <p>
        For support questions, bug reports, or feedback, email us at:{" "}
        <a
          href="mailto:bonaccivfx@gmail.com"
          className="text-cyan-400 underline hover:text-cyan-300"
        >
          bonaccivfx@gmail.com
        </a>
      </p>
      <p className="mt-2 text-sm text-gray-400">
        I typically respond within 24&ndash;48 hours.
      </p>
      <p className="mt-3">
        Read our full{" "}
        <Link
          href="/glucose-compass/privacy"
          className="text-cyan-400 underline hover:text-cyan-300"
        >
          Privacy Policy
        </Link>
        .
      </p>

      {/* ── Medical Disclaimer ── */}
      <SectionHeading>Medical Disclaimer</SectionHeading>
      <div className="rounded-lg border-l-4 border-amber-500 bg-amber-500/10 p-5">
        <p className="font-semibold text-amber-300">
          Glucose Compass is not a medical device.
        </p>
        <p className="mt-2">
          Glucose Compass is a personal health logging tool. It does not provide
          medical advice, diagnosis, or treatment recommendations. Always
          consult your healthcare provider for medical decisions.
        </p>
      </div>
    </div>
  );
}
