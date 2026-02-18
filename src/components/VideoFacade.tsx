"use client";

import { useState, useCallback } from "react";

interface VideoFacadeProps {
  vimeoId: string;
  title: string;
  /** Direct Vimeo URL for the fallback link */
  vimeoUrl?: string;
  /** Visual size variant */
  size?: "large" | "default";
}

export default function VideoFacade({
  vimeoId,
  title,
  vimeoUrl,
  size = "default",
}: VideoFacadeProps) {
  const [loaded, setLoaded] = useState(false);
  const [iframeError, setIframeError] = useState(false);
  const [thumbLoaded, setThumbLoaded] = useState(false);

  const thumbnailUrl = `https://vumbnail.com/${vimeoId}.jpg`;
  const iframeSrc = `https://player.vimeo.com/video/${vimeoId}?autoplay=1&title=0&byline=0&portrait=0`;
  const directLink = vimeoUrl ?? `https://vimeo.com/${vimeoId}`;

  const playBtnSize =
    size === "large"
      ? "h-20 w-20 sm:h-24 sm:w-24"
      : "h-14 w-14 sm:h-16 sm:w-16";
  const playIconSize = size === "large" ? "ml-1.5 h-9 w-9 sm:h-11 sm:w-11" : "ml-1 h-6 w-6 sm:h-7 sm:w-7";
  const titleSize = size === "large" ? "text-base sm:text-lg font-semibold" : "text-sm font-medium";

  const handleIframeLoad = useCallback(() => {
    // iframe loaded successfully — keep showing it
  }, []);

  const handleIframeError = useCallback(() => {
    setIframeError(true);
  }, []);

  // ── Loaded state: show iframe or fallback ──
  if (loaded) {
    if (iframeError) {
      return (
        <div className="relative aspect-video w-full overflow-hidden rounded-xl bg-gradient-to-br from-[#0a1628] to-[#1a1052] border border-white/10">
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 p-6 text-center">
            <div className="flex h-14 w-14 items-center justify-center rounded-full border border-[var(--accent-cyan)]/30 bg-[var(--accent-cyan)]/10">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="var(--accent-cyan)" strokeWidth="1.5" strokeLinecap="round" className="h-6 w-6">
                <path d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M3 8a2 2 0 012-2h8a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V8z" />
              </svg>
            </div>
            <p className="text-sm text-slate-300">{title}</p>
            <p className="text-xs text-slate-500">Video couldn&apos;t be loaded here.</p>
            <a
              href={directLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-[var(--accent-cyan)]/15 border border-[var(--accent-cyan)]/30 px-5 py-2 text-sm font-medium text-[var(--accent-cyan)] transition-colors hover:bg-[var(--accent-cyan)]/25"
            >
              Watch on Vimeo
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="h-4 w-4">
                <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" />
              </svg>
            </a>
          </div>
        </div>
      );
    }

    return (
      <div className="relative aspect-video w-full overflow-hidden rounded-xl border border-white/10">
        <iframe
          src={iframeSrc}
          title={title}
          className="absolute inset-0 h-full w-full"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
          onLoad={handleIframeLoad}
          onError={handleIframeError}
        />
      </div>
    );
  }

  // ── Facade state: thumbnail + play button ──
  return (
    <button
      type="button"
      onClick={() => setLoaded(true)}
      className="group relative aspect-video w-full overflow-hidden rounded-xl border border-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-cyan)]"
      aria-label={`Play ${title}`}
    >
      {/* Gradient base (always visible as fallback) */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a1628] via-[#101a3a] to-[#1a1052]" />

      {/* Animated shimmer while thumbnail loads */}
      {!thumbLoaded && (
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 -translate-x-full animate-[shimmer_2s_infinite] bg-gradient-to-r from-transparent via-white/5 to-transparent" />
        </div>
      )}

      {/* Thumbnail */}
      <img
        src={thumbnailUrl}
        alt=""
        className={`absolute inset-0 h-full w-full object-cover transition-all duration-500 ${
          thumbLoaded
            ? "opacity-80 group-hover:opacity-100 group-hover:scale-[1.02]"
            : "opacity-0"
        }`}
        loading="lazy"
        onLoad={() => setThumbLoaded(true)}
        onError={(e) => {
          (e.target as HTMLImageElement).style.display = "none";
        }}
      />

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      {/* Play button */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className={`flex ${playBtnSize} items-center justify-center rounded-full bg-[var(--accent-cyan)]/90 shadow-lg shadow-[var(--accent-cyan)]/30 transition-all duration-300 group-hover:scale-110 group-hover:shadow-xl group-hover:shadow-[var(--accent-cyan)]/40 animate-pulse-cyan`}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className={`${playIconSize} text-black`}
          >
            <path d="M8 5v14l11-7z" />
          </svg>
        </div>
      </div>

      {/* Title + fallback link overlay */}
      <div className="absolute bottom-0 left-0 right-0 p-4">
        <p className={`${titleSize} text-white/90`}>{title}</p>
        {size === "large" && (
          <p className="mt-1 text-xs text-slate-400">Click to play</p>
        )}
      </div>

      {/* Vimeo fallback link (small, top-right corner) */}
      <span
        onClick={(e) => {
          e.stopPropagation();
          window.open(directLink, "_blank", "noopener,noreferrer");
        }}
        className="absolute top-3 right-3 z-10 rounded bg-black/50 px-2 py-1 text-[10px] text-slate-400 opacity-0 transition-opacity duration-200 group-hover:opacity-100 hover:text-[var(--accent-cyan)]"
        role="link"
        tabIndex={-1}
      >
        Open on Vimeo &rarr;
      </span>
    </button>
  );
}
