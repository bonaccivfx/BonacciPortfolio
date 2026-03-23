import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Glucose Compass — Type 1 Diabetes Tracker | Bonacci",
  description:
    "Track glucose, meals, and insulin with AI-powered insights. Free setup, local data storage, emergency alerts always free.",
};

export default function T1DGLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#0a1628] via-[#1a1052] to-[#2d1b69]">
      {children}
    </main>
  );
}
