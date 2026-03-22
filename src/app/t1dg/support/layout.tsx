import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Support — T1DG | Bonacci",
  description:
    "Get help with T1DG Tracker. FAQ, contact information, and app support for Type 1 Diabetes tracking.",
};

export default function SupportLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
