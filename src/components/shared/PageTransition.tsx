"use client";

import { useEffect, useState, type ReactNode } from "react";

export default function PageTransition({ children }: { children: ReactNode }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // One rAF delay ensures opacity:0 is painted before the transition begins,
    // preventing a flash of the fully-visible state on fast devices.
    const raf = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <>
      {/* Top progress bar — sweeps left-to-right then fades out */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed left-0 top-0 z-[60] h-[2px] w-full origin-left bg-gradient-to-r from-[#00D9FF] via-blue-400 to-purple-500"
        style={{
          animation: mounted
            ? "page-load-bar 700ms cubic-bezier(0.4,0,0.2,1) forwards"
            : "none",
        }}
      />

      {/* Page content — fades in and slides up */}
      <div
        style={{
          opacity: mounted ? 1 : 0,
          transform: mounted ? "translateY(0)" : "translateY(16px)",
          transition: mounted
            ? "opacity 600ms cubic-bezier(0.16,1,0.3,1), transform 600ms cubic-bezier(0.16,1,0.3,1)"
            : "none",
        }}
      >
        {children}
      </div>
    </>
  );
}
