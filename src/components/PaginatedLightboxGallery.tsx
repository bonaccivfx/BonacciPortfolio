"use client";

import { useState, useCallback, useEffect, useRef } from "react";

const IMAGES_PER_PAGE = 8;

interface GalleryItem {
  id?: string;
  src: string;
  alt: string;
  title?: string;
  category: string;
}

interface PaginatedLightboxGalleryProps {
  items: GalleryItem[];
  categories: readonly string[] | string[];
  /** Cyan = VFX sections, amber = Photography section */
  accent?: "cyan" | "amber";
}

/* ── Accent colour token maps ──────────────────────────────────────────────── */

const A = {
  cyan: {
    tab:    "bg-[#00D9FF]/20 text-[#00D9FF] border border-[#00D9FF]/40",
    btn:    "border-[#00D9FF]/30 bg-[#00D9FF]/10 text-[#00D9FF] hover:bg-[#00D9FF]/20 active:bg-[#00D9FF]/30",
    ring:   "focus-visible:ring-[#00D9FF]",
    meta:   "text-[#00D9FF]/60",
  },
  amber: {
    tab:    "bg-amber-400/20 text-amber-400 border border-amber-400/40",
    btn:    "border-amber-400/30 bg-amber-400/10 text-amber-400 hover:bg-amber-400/20 active:bg-amber-400/30",
    ring:   "focus-visible:ring-amber-400",
    meta:   "text-amber-400/60",
  },
} as const;

/* ── Component ─────────────────────────────────────────────────────────────── */

export default function PaginatedLightboxGallery({
  items,
  categories,
  accent = "cyan",
}: PaginatedLightboxGalleryProps) {
  const c = A[accent];

  /* State */
  const [activeCategory,    setActiveCategory]    = useState<string>((categories as string[])[0] ?? "All");
  const [currentPage,       setCurrentPage]       = useState(1);
  const [prevVisibleCount,  setPrevVisibleCount]  = useState(0);
  const [isLoading,         setIsLoading]         = useState(false);
  const [lightboxIndex,     setLightboxIndex]     = useState<number | null>(null);

  const topRef = useRef<HTMLDivElement>(null);

  /* Derived */
  const filtered     = activeCategory === "All" ? items : items.filter((i) => i.category === activeCategory);
  const totalImages  = filtered.length;
  const visibleCount = Math.min(currentPage * IMAGES_PER_PAGE, totalImages);
  const visible      = filtered.slice(0, visibleCount);
  const remaining    = totalImages - visibleCount;
  const allLoaded    = visibleCount >= totalImages;

  /* ── Category filter ───────────────────────────────────────────────────── */

  const handleCategoryChange = useCallback((cat: string) => {
    setActiveCategory(cat);
    setCurrentPage(1);
    setPrevVisibleCount(0);
    setLightboxIndex(null);
  }, []);

  /* ── Pagination ────────────────────────────────────────────────────────── */

  const handleLoadMore = useCallback(() => {
    if (isLoading || allLoaded) return;
    setPrevVisibleCount(visibleCount);
    setIsLoading(true);
    // 300 ms gives the spinner a moment and lets the CSS transition kick in
    setTimeout(() => {
      setCurrentPage((p) => p + 1);
      setIsLoading(false);
    }, 300);
  }, [isLoading, allLoaded, visibleCount]);

  const handleBackToStart = useCallback(() => {
    setPrevVisibleCount(0);
    setCurrentPage(1);
    setLightboxIndex(null);
    topRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  /* ── Lightbox ──────────────────────────────────────────────────────────── */

  const openLightbox  = useCallback((i: number) => setLightboxIndex(i), []);
  const closeLightbox = useCallback(() => setLightboxIndex(null), []);

  const goNext = useCallback(() => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex + 1) % visible.length);
  }, [lightboxIndex, visible.length]);

  const goPrev = useCallback(() => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex - 1 + visible.length) % visible.length);
  }, [lightboxIndex, visible.length]);

  useEffect(() => {
    if (lightboxIndex === null) return;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if      (e.key === "Escape")      closeLightbox();
      else if (e.key === "ArrowRight")  goNext();
      else if (e.key === "ArrowLeft")   goPrev();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [lightboxIndex, goNext, goPrev, closeLightbox]);

  /* ── Render ────────────────────────────────────────────────────────────── */

  return (
    <div ref={topRef}>

      {/* Category filter tabs */}
      <div role="tablist" className="mb-5 flex flex-wrap gap-2">
        {(categories as string[]).map((cat) => (
          <button
            key={cat}
            type="button"
            role="tab"
            aria-selected={cat === activeCategory}
            onClick={() => handleCategoryChange(cat)}
            className={`rounded-full px-4 py-1.5 text-sm font-medium transition-all duration-200 ${
              cat === activeCategory
                ? c.tab
                : "border border-white/10 bg-white/5 text-slate-400 hover:bg-white/10 hover:text-white"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Image count */}
      <p className="mb-4 text-xs text-slate-500">
        Showing{" "}
        <span className="font-medium text-slate-400">{visibleCount}</span> of{" "}
        <span className="font-medium text-slate-400">{totalImages}</span>{" "}
        image{totalImages !== 1 ? "s" : ""}
      </p>

      {/* Grid — only renders images that have been loaded */}
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
        {visible.map((item, index) => {
          const isNew     = prevVisibleCount > 0 && index >= prevVisibleCount;
          const staggerMs = isNew ? Math.min((index - prevVisibleCount) * 55, 440) : 0;

          return (
            <button
              key={`${item.category}-${item.src}`}
              type="button"
              onClick={() => openLightbox(index)}
              style={isNew ? { animationDelay: `${staggerMs}ms` } : undefined}
              className={`group relative aspect-video overflow-hidden rounded-lg focus:outline-none focus-visible:ring-2 ${c.ring} ${
                isNew ? "animate-fade-in-up" : ""
              }`}
              aria-label={`View ${item.title ?? item.alt}`}
            >
              {/* Placeholder background */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#0a1628] to-[#1a1052]">
                <img
                  src={item.src}
                  alt={item.alt}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = "none";
                  }}
                />
              </div>

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              {/* Caption */}
              <div className="absolute bottom-0 left-0 right-0 translate-y-full p-2 transition-transform duration-300 group-hover:translate-y-0">
                <p className="text-xs font-medium text-white">
                  {item.title ?? item.alt}
                </p>
                <p className={`text-[10px] ${c.meta}`}>{item.category}</p>
              </div>
            </button>
          );
        })}
      </div>

      {/* Pagination controls */}
      {totalImages > IMAGES_PER_PAGE && (
        <div className="mt-8 flex flex-col items-center gap-2">
          {!allLoaded ? (
            <button
              type="button"
              onClick={handleLoadMore}
              disabled={isLoading}
              className={`inline-flex items-center gap-2.5 rounded-xl border px-7 py-3 text-sm font-semibold transition-all duration-200 disabled:cursor-not-allowed disabled:opacity-50 ${c.btn}`}
            >
              {isLoading ? (
                <>
                  {/* Spinner */}
                  <svg
                    className="h-4 w-4 animate-spin"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <circle
                      className="opacity-25"
                      cx="12" cy="12" r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    />
                  </svg>
                  Loading…
                </>
              ) : (
                <>
                  {/* Down arrow */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4"
                    aria-hidden="true"
                  >
                    <path d="M12 5v14M5 12l7 7 7-7" />
                  </svg>
                  Load More ({remaining} more image{remaining !== 1 ? "s" : ""})
                </>
              )}
            </button>
          ) : (
            <button
              type="button"
              onClick={handleBackToStart}
              className={`inline-flex items-center gap-2 rounded-xl border px-7 py-3 text-sm font-medium transition-all duration-200 ${c.btn}`}
            >
              {/* Up arrow */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-4 w-4"
                aria-hidden="true"
              >
                <path d="M12 19V5M5 12l7-7 7 7" />
              </svg>
              Back to Start
            </button>
          )}

          {/* Progress text */}
          <p className="text-[11px] text-slate-600">
            {visibleCount} / {totalImages} loaded
          </p>
        </div>
      )}

      {/* ── Lightbox overlay ─────────────────────────────────────────────── */}
      {lightboxIndex !== null && visible[lightboxIndex] && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Image lightbox"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm"
          onClick={closeLightbox}
        >
          <div
            className="relative max-h-[90vh] max-w-[90vw]"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={visible[lightboxIndex].src}
              alt={visible[lightboxIndex].alt}
              className="max-h-[85vh] max-w-full rounded-lg object-contain"
              onError={(e) => {
                (e.target as HTMLImageElement).style.display = "none";
              }}
            />
            <div className="absolute bottom-0 left-0 right-0 rounded-b-lg bg-gradient-to-t from-black/80 to-transparent p-4">
              <p className="text-sm font-medium text-white">
                {visible[lightboxIndex].title ?? visible[lightboxIndex].alt}
              </p>
              <p className="mt-0.5 text-xs text-slate-400">
                {lightboxIndex + 1} / {visible.length}
              </p>
            </div>
          </div>

          {/* Close */}
          <button
            type="button"
            onClick={closeLightbox}
            className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
            aria-label="Close lightbox"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="h-5 w-5">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>

          {/* Prev */}
          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); goPrev(); }}
            className="absolute left-4 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
            aria-label="Previous image"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="h-5 w-5">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>

          {/* Next */}
          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); goNext(); }}
            className="absolute right-4 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
            aria-label="Next image"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="h-5 w-5">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        </div>
      )}
    </div>
  );
}
