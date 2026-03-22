import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Support — T1DG",
  description:
    "Get help with T1DG, a Type 1 Diabetes companion app. FAQs, contact info, and support resources.",
};

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mt-10 mb-4 text-xl font-semibold text-white">{children}</h2>
  );
}

function FaqItem({
  question,
  children,
}: {
  question: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-lg border border-white/10 bg-white/5 p-5">
      <h3 className="mb-2 font-semibold text-white">{question}</h3>
      <div className="text-gray-300 leading-relaxed">{children}</div>
    </div>
  );
}

export default function T1DGSupportPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#0a1628] via-[#1a1052] to-[#2d1b69] px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl text-gray-300 leading-relaxed">
        <h1 className="mb-6 text-3xl font-bold text-white sm:text-4xl">
          T1DG — Support
        </h1>

        {/* ── About the App ── */}
        <SectionHeading>About T1DG</SectionHeading>
        <p>
          T1DG is a Type&nbsp;1 Diabetes companion app designed to help you log
          blood glucose readings, insulin doses, and carbohydrate intake—all
          stored privately on your device. Optional AI-powered insights can help
          you identify patterns in your data, and the app is fully functional
          without them.
        </p>

        {/* ── Contact ── */}
        <SectionHeading>Contact Us</SectionHeading>
        <p>
          For support questions, bug reports, or feedback, email us at:
        </p>
        <p className="mt-3">
          <a
            href="mailto:bonaccivfx@gmail.com"
            className="text-cyan-400 underline hover:text-cyan-300"
          >
            bonaccivfx@gmail.com
          </a>
        </p>
        <p className="mt-2 text-sm text-gray-400">
          We typically respond within 48 hours.
        </p>

        {/* ── FAQ ── */}
        <SectionHeading>Frequently Asked Questions</SectionHeading>
        <div className="space-y-4">
          <FaqItem question="How do I set up AI Insights?">
            <p>
              Open the app and navigate to <strong>Settings → AI
              Insights</strong>. The default provider is Google Gemini, which
              works out of the box. If you prefer a different provider, tap
              &quot;Bring Your Own Key&quot; and enter your API key. AI insights
              are completely optional—the app works fully without them.
            </p>
          </FaqItem>

          <FaqItem question="How do I manage my subscription?">
            <p>
              Subscriptions are handled through the Apple App Store. To manage
              or cancel your subscription, go to{" "}
              <strong>
                iPhone Settings → Apple ID → Subscriptions → T1DG
              </strong>
              . You can also manage subscriptions directly through the App Store
              app. Your subscription status is managed by RevenueCat and
              Apple—we do not process payments directly.
            </p>
          </FaqItem>

          <FaqItem question="How do I delete my data?">
            <p>
              All your data is stored locally on your device. To delete all
              data, simply delete the T1DG app from your device. There are no
              cloud backups or server-side copies—once deleted, your data is
              permanently removed. If you reinstall, you start fresh.
            </p>
          </FaqItem>

          <FaqItem question="Can I add emergency contacts?">
            <p>
              Yes. Go to <strong>Settings → Emergency Contacts</strong> to add
              contacts who can be quickly reached in an emergency. This
              information is stored locally on your device and is not shared
              with us or any third party.
            </p>
          </FaqItem>

          <FaqItem question="What data does the AI see?">
            <p>
              When you request an AI insight, only the data relevant to your
              query is sent—such as recent glucose readings, insulin doses, and
              carb entries. Data is sent directly to the AI provider (Google
              Gemini by default, or your BYOK provider) and is not stored on
              our servers. The AI never sees your data unless you explicitly
              request an insight. See our{" "}
              <Link
                href="/t1dg/privacy"
                className="text-cyan-400 underline hover:text-cyan-300"
              >
                Privacy Policy
              </Link>{" "}
              for full details.
            </p>
          </FaqItem>
        </div>

        {/* ── Privacy Policy Link ── */}
        <SectionHeading>Privacy Policy</SectionHeading>
        <p>
          Read our full{" "}
          <Link
            href="/t1dg/privacy"
            className="text-cyan-400 underline hover:text-cyan-300"
          >
            Privacy Policy
          </Link>{" "}
          to understand how your data is handled and protected.
        </p>

        {/* ── Medical Disclaimer ── */}
        <SectionHeading>Medical Disclaimer</SectionHeading>
        <div className="rounded-lg border border-amber-500/30 bg-amber-500/10 p-5">
          <p className="font-semibold text-amber-300">
            T1DG is not a medical device.
          </p>
          <p className="mt-2">
            This app is intended as a personal logging and informational tool
            only. It does not provide medical advice, diagnoses, or treatment
            recommendations. AI-generated insights are for informational
            purposes and should not replace professional medical guidance.
            Always consult your healthcare provider before making changes to
            your diabetes management plan. In case of a medical emergency,
            contact your local emergency services immediately.
          </p>
        </div>
      </div>
    </main>
  );
}
