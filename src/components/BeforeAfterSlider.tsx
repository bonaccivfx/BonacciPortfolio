"use client";

import { useState, useCallback, useRef } from "react";

interface BeforeAfterSliderProps {
  beforeSrc: string;
  afterSrc: string;
  beforeAlt: string;
  afterAlt: string;
  beforeLabel?: string;
  afterLabel?: string;
}

export default function BeforeAfterSlider({
  beforeSrc,
  afterSrc,
  beforeAlt,
  afterAlt,
  beforeLabel = "Before",
  afterLabel = "After",
}: BeforeAfterSliderProps) {
  const [position, setPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const [beforeError, setBeforeError] = useState(false);
  const [afterError, setAfterError] = useState(false);

  const updatePosition = useCallback(
    (clientX: number) => {
      const rect = containerRef.current?.getBoundingClientRect();
      if (!rect) return;
      const x = clientX - rect.left;
      const pct = Math.max(0, Math.min(100, (x / rect.width) * 100));
      setPosition(pct);
    },
    [],
  );

  const handlePointerDown = useCallback(
    (e: React.PointerEvent) => {
      (e.target as HTMLElement).setPointerCapture(e.pointerId);
      updatePosition(e.clientX);
    },
    [updatePosition],
  );

  const handlePointerMove = useCallback(
    (e: React.PointerEvent) => {
      if (e.buttons === 0) return;
      updatePosition(e.clientX);
    },
    [updatePosition],
  );

  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      setPosition((p) => Math.max(0, p - 5));
    } else if (e.key === "ArrowRight") {
      e.preventDefault();
      setPosition((p) => Math.min(100, p + 5));
    }
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative aspect-video w-full select-none overflow-hidden rounded-xl"
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
    >
      {/* After image (bottom layer) */}
      {afterError ? (
        <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-[#1a1052] to-[#0a1628]">
          <span className="text-sm font-medium text-[var(--accent-cyan)]/60">
            {afterLabel}
          </span>
        </div>
      ) : (
        <img
          src={afterSrc}
          alt={afterAlt}
          className="absolute inset-0 h-full w-full object-cover"
          draggable={false}
          onError={() => setAfterError(true)}
        />
      )}

      {/* Before image (clipped top layer) */}
      {beforeError ? (
        <div
          className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-[#0a1628] to-[#1a1052]"
          style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
        >
          <span className="text-sm font-medium text-[var(--accent-cyan)]/60">
            {beforeLabel}
          </span>
        </div>
      ) : (
        <img
          src={beforeSrc}
          alt={beforeAlt}
          className="absolute inset-0 h-full w-full object-cover"
          style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
          draggable={false}
          onError={() => setBeforeError(true)}
        />
      )}

      {/* Slider line */}
      <div
        className="absolute top-0 bottom-0 w-0.5 bg-[var(--accent-cyan)] shadow-[0_0_8px_var(--accent-cyan)]"
        style={{ left: `${position}%`, transform: "translateX(-50%)" }}
      />

      {/* Drag handle */}
      <div
        role="slider"
        tabIndex={0}
        aria-valuenow={Math.round(position)}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label="Before and after comparison slider"
        onKeyDown={handleKeyDown}
        className="absolute top-1/2 z-10 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 cursor-ew-resize items-center justify-center rounded-full border-2 border-[var(--accent-cyan)] bg-black/70 shadow-lg shadow-[var(--accent-cyan)]/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-cyan)]"
        style={{ left: `${position}%` }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="var(--accent-cyan)"
          strokeWidth="2"
          strokeLinecap="round"
          className="h-5 w-5"
        >
          <path d="M8 18l-4-6 4-6M16 6l4 6-4 6" />
        </svg>
      </div>

      {/* Labels */}
      <div className="pointer-events-none absolute top-3 left-3 rounded bg-black/60 px-2 py-1 text-xs font-medium text-white/80">
        {beforeLabel}
      </div>
      <div className="pointer-events-none absolute top-3 right-3 rounded bg-black/60 px-2 py-1 text-xs font-medium text-white/80">
        {afterLabel}
      </div>
    </div>
  );
}
