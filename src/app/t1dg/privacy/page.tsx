import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy — T1DG | Bonacci",
  description:
    "How T1DG Tracker handles your health data, AI queries, advertising, and subscriptions. Apple Guideline 5.1.3 compliant.",
};

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mt-10 mb-4 text-xl font-semibold text-white">{children}</h2>
  );
}

export default function T1DGPrivacyPage() {
  return (
    <article className="mx-auto max-w-3xl px-4 text-gray-300 leading-relaxed pt-28 pb-24 sm:px-6 lg:px-8">
      {/* Breadcrumb */}
      <nav className="mb-8 text-sm text-gray-500">
        <Link href="/" className="hover:text-cyan-400 transition-colors">Home</Link>
        <span className="mx-2">&gt;</span>
        <Link href="/t1dg" className="hover:text-cyan-400 transition-colors">T1DG Tracker</Link>
        <span className="mx-2">&gt;</span>
        <span className="text-gray-400">Privacy Policy</span>
      </nav>

      <h1 className="mb-2 text-3xl font-bold text-white sm:text-4xl">
        T1DG — Privacy Policy
      </h1>
      <p className="mb-8 text-sm text-gray-400">Last updated: March 2026</p>

      <p>
        T1DG (&quot;the App&quot;) is a Type&nbsp;1 Diabetes tracking app
        developed by Alex Bonacci (&quot;we,&quot; &quot;us,&quot;
        &quot;our&quot;). We take your privacy — especially regarding health
        data — very seriously. This policy explains what data we collect, how it
        is stored, and when it leaves your device.
      </p>

      {/* ── 1. What Data We Collect ── */}
      <SectionHeading>1. What Data We Collect</SectionHeading>
      <ul className="list-disc space-y-2 pl-6">
        <li>
          <strong className="text-white">Health data</strong> — blood glucose
          readings, meals &amp; carbohydrate counts, symptoms, insulin doses, and
          free-text notes.
        </li>
        <li>
          <strong className="text-white">Emergency contacts</strong> — names and
          phone numbers you add for extreme-glucose alerts.
        </li>
        <li>
          <strong className="text-white">AI API keys</strong> — stored locally
          on your device via{" "}
          <span className="text-white">expo-secure-store</span>. Keys are never
          sent to our servers.
        </li>
        <li>
          <strong className="text-white">Usage analytics</strong> — anonymous
          crash and usage data to help us improve app stability.
        </li>
        <li>
          <strong className="text-white">Advertising identifiers</strong> —
          standard device identifiers used solely for non-personalized ads.
        </li>
      </ul>

      {/* ── 2. How Data Is Stored ── */}
      <SectionHeading>2. How Data Is Stored</SectionHeading>
      <p>
        <strong className="text-white">All</strong> health data is stored
        locally on your device in a SQLite database. There is no cloud sync, no
        remote backup, and no account required. API keys are stored via{" "}
        <span className="text-white">expo-secure-store</span>, which uses the
        iOS Keychain under the hood.
      </p>

      {/* ── 3. When Data Leaves Your Device ── */}
      <SectionHeading>3. When Data Leaves Your Device</SectionHeading>
      <p>
        Your data leaves your device{" "}
        <strong className="text-white">only</strong> when you explicitly request
        an AI insight. At that point, a snapshot of recent data — glucose
        readings, meals, and symptoms — is sent to the selected AI provider.
        Your name, location, and account details are{" "}
        <strong className="text-white">never</strong> included in any AI
        request.
      </p>

      {/* ── 4. AI Provider Data Handling ── */}
      <SectionHeading>4. AI Provider Data Handling</SectionHeading>
      <ul className="list-disc space-y-2 pl-6">
        <li>
          The default AI provider is{" "}
          <strong className="text-white">Google Gemini</strong> (free tier).
        </li>
        <li>
          Lifetime-tier subscribers can use BYOK (Bring Your Own Key) to connect
          alternative providers such as Groq, OpenRouter, or Anthropic.
        </li>
        <li>
          AI providers do not persistently store the data sent during a request.
        </li>
        <li>
          You can disconnect AI at any time in{" "}
          <strong className="text-white">Settings &gt; AI Settings</strong>.
        </li>
        <li>
          All AI-generated content is accompanied by a medical disclaimer
          reminding you to consult your healthcare provider.
        </li>
      </ul>

      {/* ── 5. Advertising ── */}
      <SectionHeading>5. Advertising</SectionHeading>
      <p>
        T1DG displays{" "}
        <strong className="text-white">non-personalized</strong> ads served by
        Google AdMob. Your health data is{" "}
        <strong className="text-white">
          never used for ad targeting
        </strong>
        . The App Tracking Transparency (ATT) prompt is shown before any
        tracking identifiers are accessed. Premium and Lifetime subscribers see
        no ads at all.
      </p>

      {/* ── 6. Subscription & Purchase Data ── */}
      <SectionHeading>6. Subscription &amp; Purchase Data</SectionHeading>
      <p>
        Subscriptions are managed by{" "}
        <strong className="text-white">RevenueCat</strong>, which processes
        purchase receipts through Apple. RevenueCat does{" "}
        <strong className="text-white">not</strong> have access to any of your
        health data. For details, see{" "}
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

      {/* ── 7. Third-Party Services ── */}
      <SectionHeading>7. Third-Party Services</SectionHeading>
      <div className="mt-4 overflow-x-auto">
        <table className="w-full text-left text-sm">
          <thead>
            <tr className="border-b border-white/20 text-white">
              <th className="py-2 pr-4 font-semibold">Service</th>
              <th className="py-2 pr-4 font-semibold">Data Accessed</th>
              <th className="py-2 font-semibold">Purpose</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/10">
            <tr>
              <td className="py-3 pr-4 text-white">Google Gemini</td>
              <td className="py-3 pr-4">Recent health data snapshots</td>
              <td className="py-3">AI insights (on request)</td>
            </tr>
            <tr>
              <td className="py-3 pr-4 text-white">BYOK Providers</td>
              <td className="py-3 pr-4">Recent health data snapshots</td>
              <td className="py-3">User-chosen AI provider</td>
            </tr>
            <tr>
              <td className="py-3 pr-4 text-white">Google AdMob</td>
              <td className="py-3 pr-4">Device identifiers</td>
              <td className="py-3">Non-personalized advertising</td>
            </tr>
            <tr>
              <td className="py-3 pr-4 text-white">RevenueCat</td>
              <td className="py-3 pr-4">Purchase receipts</td>
              <td className="py-3">Subscription management</td>
            </tr>
            <tr>
              <td className="py-3 pr-4 text-white">Expo</td>
              <td className="py-3 pr-4">Anonymous crash data</td>
              <td className="py-3">App stability</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* ── 8. Data Deletion ── */}
      <SectionHeading>8. Data Deletion</SectionHeading>
      <ul className="list-disc space-y-2 pl-6">
        <li>
          <strong className="text-white">Delete the app</strong> = delete all
          your data. There is no cloud backup or server-side copy.
        </li>
        <li>
          <strong className="text-white">Disconnect AI</strong> in Settings
          &gt; AI Settings to clear stored API keys.
        </li>
        <li>
          <strong className="text-white">Manage or cancel</strong> your
          subscription via{" "}
          <strong className="text-white">
            iOS Settings &gt; Apple ID &gt; Subscriptions
          </strong>
          .
        </li>
      </ul>

      {/* ── 9. Children's Privacy ── */}
      <SectionHeading>9. Children&apos;s Privacy</SectionHeading>
      <p>
        T1DG is not directed at children under 13. If a parent or guardian
        manages diabetes data for a minor, the parent or guardian is responsible
        for the data entered. We do not knowingly collect personal information
        from children under 13.
      </p>

      {/* ── 10. Contact & Changes ── */}
      <SectionHeading>10. Contact &amp; Changes</SectionHeading>
      <p>
        If you have questions about this privacy policy or your data, contact us
        at:{" "}
        <a
          href="mailto:bonaccivfx@gmail.com"
          className="text-cyan-400 underline hover:text-cyan-300"
        >
          bonaccivfx@gmail.com
        </a>
      </p>
      <p className="mt-3">
        We may update this policy from time to time. Changes will be posted at
        this URL with an updated &quot;Last updated&quot; date. Continued use of
        the App after changes constitutes acceptance of the updated policy.
      </p>

      {/* ── Apple Guideline 5.1.3 Compliance ── */}
      <div className="mt-10 rounded-lg border border-white/10 bg-white/5 p-5 text-sm">
        <p className="mb-2 font-semibold text-white">
          Apple App Store Review Guideline 5.1.3 Compliance
        </p>
        <ul className="list-disc space-y-1 pl-5">
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
            A clear mechanism for data deletion is provided (uninstalling the
            App).
          </li>
        </ul>
      </div>
    </article>
  );
}
