import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — T1DG",
  description:
    "Privacy policy for T1DG, a Type 1 Diabetes companion app. Learn how your health data is stored and protected.",
};

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mt-10 mb-4 text-xl font-semibold text-white">{children}</h2>
  );
}

export default function T1DGPrivacyPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#0a1628] via-[#1a1052] to-[#2d1b69] px-4 py-24 sm:px-6 lg:px-8">
      <article className="mx-auto max-w-3xl text-gray-300 leading-relaxed">
        <h1 className="mb-2 text-3xl font-bold text-white sm:text-4xl">
          T1DG — Privacy Policy
        </h1>
        <p className="mb-8 text-sm text-gray-400">
          Last updated: March 2026
        </p>

        <p>
          T1DG (&quot;the App&quot;) is a Type&nbsp;1 Diabetes companion app
          developed by Alex Bonacci (&quot;we,&quot; &quot;us,&quot;
          &quot;our&quot;). We take your privacy—especially regarding health
          data—very seriously. This policy explains what data we collect, how
          it is used, and your rights.
        </p>

        {/* ── 1. Health Data Storage ── */}
        <SectionHeading>1. Health Data Storage</SectionHeading>
        <p>
          All health-related data you enter into T1DG—including blood glucose
          readings, insulin doses, carbohydrate logs, and notes—is stored{" "}
          <strong className="text-white">
            exclusively on your device
          </strong>{" "}
          in a local SQLite database. We do not maintain servers that store your
          health information. Your data never leaves your device unless you
          explicitly choose to use the AI Insights feature described below.
        </p>

        {/* ── 2. AI Insights ── */}
        <SectionHeading>2. AI-Powered Insights</SectionHeading>
        <p>
          T1DG offers optional AI-powered insights to help you understand
          patterns in your diabetes management. This feature is{" "}
          <strong className="text-white">entirely opt-in</strong> and only
          activates when you explicitly request an analysis.
        </p>
        <ul className="mt-3 list-disc space-y-2 pl-6">
          <li>
            When you request an insight, the relevant data you have entered
            (e.g., recent glucose readings, insulin doses, carb entries) is sent
            to the AI provider for processing.
          </li>
          <li>
            The default AI provider is{" "}
            <strong className="text-white">Google Gemini</strong>. You may also
            configure your own API key to use a provider of your choice
            (&quot;Bring Your Own Key&quot; / BYOK).
          </li>
          <li>
            Data sent to the AI provider is used solely to generate your
            requested insight and is subject to the provider&apos;s own privacy
            policy. We do not store copies of AI requests or responses on our
            servers.
          </li>
          <li>
            You are never required to use this feature, and the App is fully
            functional without it.
          </li>
        </ul>

        {/* ── 3. Advertising ── */}
        <SectionHeading>3. Advertising</SectionHeading>
        <p>
          T1DG displays ads served by{" "}
          <strong className="text-white">Google AdMob</strong>. These ads are{" "}
          <strong className="text-white">non-personalized</strong>. Your health
          data is{" "}
          <strong className="text-white">
            never used for ad targeting or shared with advertising networks
          </strong>
          . AdMob may collect standard device identifiers and non-health usage
          data in accordance with Google&apos;s advertising policies.
        </p>

        {/* ── 4. Subscriptions ── */}
        <SectionHeading>4. Subscriptions &amp; Payments</SectionHeading>
        <p>
          In-app subscriptions are managed by{" "}
          <strong className="text-white">RevenueCat</strong>, a third-party
          subscription management platform. RevenueCat processes purchase
          receipts and subscription status through Apple&apos;s App Store.
          RevenueCat does{" "}
          <strong className="text-white">
            not have access to any of your health data
          </strong>
          . For details, see{" "}
          <a
            href="https://www.revenuecat.com/privacy"
            className="text-cyan-400 underline hover:text-cyan-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            RevenueCat&apos;s Privacy Policy
          </a>
          .
        </p>

        {/* ── 5. Data We Do Not Collect ── */}
        <SectionHeading>5. Data We Do Not Collect</SectionHeading>
        <ul className="list-disc space-y-2 pl-6">
          <li>We do not collect, store, or transmit your health data to our servers.</li>
          <li>We do not sell or share your personal or health data with third parties for marketing purposes.</li>
          <li>We do not use your health data for advertising or ad personalization.</li>
          <li>We do not create user accounts or profiles on our servers.</li>
        </ul>

        {/* ── 6. Data Deletion ── */}
        <SectionHeading>6. Data Deletion</SectionHeading>
        <p>
          Because all health data is stored locally on your device,{" "}
          <strong className="text-white">
            deleting the T1DG app will permanently delete all of your data
          </strong>
          . There is no cloud backup or server-side copy to remove. If you
          reinstall the App after deletion, you will start with a fresh, empty
          database.
        </p>

        {/* ── 7. Data Security ── */}
        <SectionHeading>7. Data Security</SectionHeading>
        <p>
          Your data is protected by your device&apos;s built-in security
          features, including device-level encryption, passcode, and biometric
          locks. We recommend keeping your device software up to date and using
          a strong passcode or biometric authentication.
        </p>

        {/* ── 8. Children ── */}
        <SectionHeading>8. Children&apos;s Privacy</SectionHeading>
        <p>
          T1DG is not directed at children under 13. If a parent or guardian
          manages diabetes data for a minor, the parent or guardian is
          responsible for the data entered. We do not knowingly collect personal
          information from children under 13.
        </p>

        {/* ── 9. Third-Party Services ── */}
        <SectionHeading>9. Third-Party Services</SectionHeading>
        <p>The App uses the following third-party services:</p>
        <ul className="mt-3 list-disc space-y-2 pl-6">
          <li>
            <strong className="text-white">Google Gemini</strong> (or BYOK
            provider) — processes data only when you request AI insights
          </li>
          <li>
            <strong className="text-white">Google AdMob</strong> — serves
            non-personalized ads; no health data shared
          </li>
          <li>
            <strong className="text-white">RevenueCat</strong> — manages
            subscription status; no health data access
          </li>
        </ul>

        {/* ── 10. Your Consent ── */}
        <SectionHeading>10. Your Consent &amp; Apple Health Guidelines</SectionHeading>
        <p>
          In compliance with{" "}
          <strong className="text-white">
            Apple App Store Review Guideline 5.1.3
          </strong>
          , we affirm that:
        </p>
        <ul className="mt-3 list-disc space-y-2 pl-6">
          <li>
            Health data entered in T1DG is not sold to advertising platforms,
            data brokers, or information resellers.
          </li>
          <li>
            Health data is not used or disclosed to third parties for marketing,
            advertising, or data-mining purposes other than improving health
            management directly within the App.
          </li>
          <li>
            Health data is not shared with third parties without your explicit
            consent.
          </li>
          <li>
            We provide a clear mechanism for data deletion (uninstalling the
            App).
          </li>
        </ul>

        {/* ── 11. Changes ── */}
        <SectionHeading>11. Changes to This Policy</SectionHeading>
        <p>
          We may update this privacy policy from time to time. Changes will be
          reflected by the &quot;Last updated&quot; date at the top of this page.
          Continued use of the App after changes constitutes acceptance of the
          updated policy.
        </p>

        {/* ── 12. Contact ── */}
        <SectionHeading>12. Contact Us</SectionHeading>
        <p>
          If you have questions or concerns about this privacy policy or your
          data, please contact us at:
        </p>
        <p className="mt-3">
          <a
            href="mailto:bonaccivfx@gmail.com"
            className="text-cyan-400 underline hover:text-cyan-300"
          >
            bonaccivfx@gmail.com
          </a>
        </p>
      </article>
    </main>
  );
}
