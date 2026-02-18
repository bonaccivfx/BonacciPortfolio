"use client";

import { useState } from "react";

interface Layer {
  label: string;
  src: string;
}

interface FrameViewerProps {
  layers: Layer[];
  title?: string;
}

export default function FrameViewer({ layers, title }: FrameViewerProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  if (layers.length === 0) return null;

  return (
    <div className="w-full">
      {title && (
        <h3 className="mb-4 text-lg font-semibold text-white">{title}</h3>
      )}

      {/* Image viewport */}
      <div
        className="relative aspect-video w-full overflow-hidden rounded-xl bg-gradient-to-br from-[#0a1628] to-[#1a1052]"
        aria-live="polite"
      >
        {layers.map((layer, i) => (
          <div
            key={layer.label}
            className="absolute inset-0 transition-opacity duration-500"
            style={{ opacity: i <= activeIndex ? 1 : 0 }}
          >
            <img
              src={layer.src}
              alt={layer.label}
              className="h-full w-full object-cover"
              loading="lazy"
              onError={(e) => {
                const img = e.target as HTMLImageElement;
                img.style.display = "none";
                if (img.parentElement) {
                  img.parentElement.classList.add(
                    "flex",
                    "items-center",
                    "justify-center",
                  );
                  const span = document.createElement("span");
                  span.className =
                    "text-sm font-medium text-[#00D9FF]/60";
                  span.textContent = layer.label;
                  img.parentElement.appendChild(span);
                }
              }}
            />
          </div>
        ))}

        {/* Current layer label */}
        <div className="pointer-events-none absolute bottom-3 left-3 rounded bg-black/60 px-2 py-1 text-xs font-medium text-[var(--accent-cyan)]">
          {layers[activeIndex].label}
        </div>
      </div>

      {/* Controls */}
      <div className="mt-4 space-y-3">
        {/* Layer buttons */}
        <div className="flex flex-wrap gap-2">
          {layers.map((layer, i) => (
            <button
              key={layer.label}
              type="button"
              onClick={() => setActiveIndex(i)}
              aria-pressed={i === activeIndex}
              className={`rounded-lg px-3 py-1.5 text-xs font-medium transition-all duration-200 ${
                i === activeIndex
                  ? "bg-[var(--accent-cyan)]/20 text-[var(--accent-cyan)] border border-[var(--accent-cyan)]/40"
                  : "bg-white/5 text-slate-400 border border-white/10 hover:bg-white/10 hover:text-white"
              }`}
            >
              {layer.label}
            </button>
          ))}
        </div>

        {/* Range slider */}
        <div className="flex items-center gap-3">
          <span className="text-xs text-slate-500">Layer</span>
          <input
            type="range"
            min={0}
            max={layers.length - 1}
            value={activeIndex}
            onChange={(e) => setActiveIndex(Number(e.target.value))}
            className="h-1.5 flex-1 cursor-pointer appearance-none rounded-full bg-white/10 accent-[var(--accent-cyan)]"
            aria-label="Layer slider"
          />
          <span className="min-w-[3ch] text-right text-xs text-slate-500">
            {activeIndex + 1}/{layers.length}
          </span>
        </div>
      </div>
    </div>
  );
}
