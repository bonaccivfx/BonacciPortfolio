import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Support — Glucose Compass | Bonacci",
  description:
    "Get help with Glucose Compass. FAQ, contact information, and app support for Type 1 Diabetes tracking.",
};

export default function SupportLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
