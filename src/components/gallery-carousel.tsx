"use client";

import { useState, useCallback, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight, Play } from "lucide-react";

/* ─────────────────────────────────────────
   Types
───────────────────────────────────────── */
export type GalleryItem =
  | { type: "image"; src: string; alt: string; caption?: string }
  | {
      type: "video";
      src: string;           // local path or URL
      poster?: string;       // thumbnail shown before play / on side slides
      alt: string;
      caption?: string;
      muted?: boolean;       // default true
      loop?: boolean;        // default false
    };

interface GalleryCarouselProps {
  items: GalleryItem[];
  autoPlay?: boolean;        // auto-advances slides (paused while a video plays)
  autoPlayInterval?: number;
}

/* ─────────────────────────────────────────
   Helper — renders image or video for a
   given role (prev | active | next)
───────────────────────────────────────── */
function SlideMedia({
  item,
  role,
  isAnimating,
}: {
  item: GalleryItem;
  role: "prev" | "active" | "next";
  isAnimating: boolean;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  // Pause / reset video when it leaves the active slot
  useEffect(() => {
    if (role !== "active" && videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
      setPlaying(false);
    }
  }, [role]);

  if (item.type === "image") {
    return (
      <img
        src={item.src}
        alt={item.alt}
        className="w-full h-full object-cover"
        draggable={false}
      />
    );
  }

  /* ── video ── */
  const isActive = role === "active";

  const handlePlay = () => {
    if (!videoRef.current) return;
    videoRef.current.play();
    setPlaying(true);
  };

  const handlePause = () => {
    if (!videoRef.current) return;
    videoRef.current.pause();
    setPlaying(false);
  };

  const handleEnded = () => setPlaying(false);

  return (
    <div className="relative w-full h-full bg-black">
      {/* Poster image shown on side slides (cheaper than a running video) */}
      {!isActive && item.poster && (
        <img
          src={item.poster}
          alt={item.alt}
          className="w-full h-full object-cover"
          draggable={false}
        />
      )}

      {/* Actual video element — only fully active in the centre slot */}
      <video
        ref={videoRef}
        src={item.src}
        poster={item.poster}
        muted={item.muted ?? true}
        loop={item.loop ?? false}
        playsInline
        onEnded={handleEnded}
        className={`w-full h-full object-cover transition-opacity duration-300 ${
          isActive ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        aria-label={item.alt}
      />

      {/* Play / Pause overlay — only when active */}
      {isActive && !isAnimating && (
        <button
          onClick={playing ? handlePause : handlePlay}
          aria-label={playing ? "Pause video" : "Play video"}
          className="absolute inset-0 flex items-center justify-center group"
        >
          {!playing && (
            <span
              className="w-14 h-14 rounded-full bg-white/90 backdrop-blur-sm
                         flex items-center justify-center shadow-xl
                         group-hover:scale-110 transition-transform duration-200"
            >
              <Play className="w-6 h-6 text-[#1A4D8F] ml-0.5" fill="#1A4D8F" />
            </span>
          )}
        </button>
      )}

      {/* Video badge on side slides */}
      {!isActive && (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <span className="w-10 h-10 rounded-full bg-black/50 flex items-center justify-center">
            <Play className="w-4 h-4 text-white ml-0.5" fill="white" />
          </span>
        </div>
      )}
    </div>
  );
}

/* ─────────────────────────────────────────
   Dot indicator — shows camera or film icon
───────────────────────────────────────── */
function Dot({
  item,
  active,
  onClick,
}: {
  item: GalleryItem;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      role="tab"
      aria-selected={active}
      onClick={onClick}
      className={`rounded-full transition-all duration-300 ${
        active
          ? "w-6 h-2 bg-[#1A4D8F]"
          : "w-2 h-2 bg-[#1A4D8F]/25 hover:bg-[#1A4D8F]/50"
      }`}
      aria-label={`${item.type === "video" ? "Video" : "Image"} slide`}
    />
  );
}

/* ─────────────────────────────────────────
   Main carousel
───────────────────────────────────────── */
export function GalleryCarousel({
  items,
  autoPlay = false,
  autoPlayInterval = 5000,
}: GalleryCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [direction, setDirection] = useState<"left" | "right" | null>(null);
  const touchStartX = useRef<number | null>(null);
  const autoPlayRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const total = items.length;
  const getPrev = (i: number) => (i - 1 + total) % total;
  const getNext = (i: number) => (i + 1) % total;

  const navigate = useCallback(
    (dir: "left" | "right") => {
      if (isAnimating || total <= 1) return;
      setIsAnimating(true);
      setDirection(dir);
      setTimeout(() => {
        setActiveIndex((prev) => (dir === "right" ? getNext(prev) : getPrev(prev)));
        setIsAnimating(false);
        setDirection(null);
      }, 420);
    },
    [isAnimating, total]
  );

  const goTo = useCallback(
    (i: number) => {
      if (isAnimating || i === activeIndex) return;
      setDirection(i > activeIndex ? "right" : "left");
      setIsAnimating(true);
      setTimeout(() => {
        setActiveIndex(i);
        setIsAnimating(false);
        setDirection(null);
      }, 420);
    },
    [isAnimating, activeIndex]
  );

  // Auto-play — skip if active item is a video (let it play naturally)
  useEffect(() => {
    if (!autoPlay) return;
    autoPlayRef.current = setInterval(() => {
      if (items[activeIndex]?.type !== "video") navigate("right");
    }, autoPlayInterval);
    return () => { if (autoPlayRef.current) clearInterval(autoPlayRef.current); };
  }, [autoPlay, autoPlayInterval, navigate, activeIndex, items]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") navigate("left");
    if (e.key === "ArrowRight") navigate("right");
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const handleTouchEnd = (e: React.TouchEvent) => {
    const delta = (touchStartX.current ?? 0) - e.changedTouches[0].clientX;
    if (Math.abs(delta) > 40) navigate(delta > 0 ? "right" : "left");
  };

  const prevIndex = getPrev(activeIndex);
  const nextIndex = getNext(activeIndex);
  const activeItem = items[activeIndex];

  /* ── slide positioning ── */
  const getSlideStyle = (role: "prev" | "active" | "next"): React.CSSProperties => {
    const base: React.CSSProperties = {
      position: "absolute",
      top: 0,
      borderRadius: "1rem",
      overflow: "hidden",
      transition: "all 0.42s cubic-bezier(0.4, 0, 0.2, 1)",
      willChange: "transform, opacity, width",
    };

    if (role === "active") {
      return {
        ...base,
        left: "50%",
        width: "56%",
        height: "100%",
        transform: `translateX(-50%) ${
          isAnimating && direction === "right" ? "translateX(-8%)"
          : isAnimating && direction === "left" ? "translateX(8%)"
          : "translateX(0)"
        }`,
        opacity: 1,
        zIndex: 10,
        boxShadow: "0 24px 64px rgba(0,0,0,0.32)",
      };
    }
    if (role === "prev") {
      return {
        ...base,
        left: 0,
        width: "28%",
        height: "88%",
        top: "6%",
        transform: `translateX(${isAnimating && direction === "left" ? "8%" : "0"})`,
        opacity: isAnimating && direction === "left" ? 0.35 : 0.5,
        zIndex: 5,
        boxShadow: "0 12px 32px rgba(0,0,0,0.18)",
      };
    }
    return {
      ...base,
      right: 0,
      width: "28%",
      height: "88%",
      top: "6%",
      transform: `translateX(${isAnimating && direction === "right" ? "-8%" : "0"})`,
      opacity: isAnimating && direction === "right" ? 0.35 : 0.5,
      zIndex: 5,
      boxShadow: "0 12px 32px rgba(0,0,0,0.18)",
    };
  };

  return (
    <div className="w-full select-none" aria-label="Event gallery carousel">

      {/* ── Desktop 3-up carousel ── */}
      <div
        className="relative hidden md:block"
        style={{ height: "360px" }}
        onKeyDown={handleKeyDown}
        tabIndex={0}
        role="region"
        aria-label="Media carousel"
      >
        {/* Prev slide */}
        <div style={getSlideStyle("prev")} aria-hidden="true"
          onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
          <SlideMedia item={items[prevIndex]} role="prev" isAnimating={isAnimating} />
          <div className="absolute inset-0 bg-[#0a1628]/40 pointer-events-none" />
        </div>

        {/* Next slide */}
        <div style={getSlideStyle("next")} aria-hidden="true"
          onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
          <SlideMedia item={items[nextIndex]} role="next" isAnimating={isAnimating} />
          <div className="absolute inset-0 bg-[#0a1628]/40 pointer-events-none" />
        </div>

        {/* Active slide */}
        <div style={getSlideStyle("active")} aria-current="true"
          onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
          <SlideMedia item={activeItem} role="active" isAnimating={isAnimating} />
          {/* Caption gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
          {activeItem.caption && (
            <div className="absolute bottom-0 left-0 right-0 p-5 pointer-events-none">
              <p className="text-sm text-blue-200 font-medium tracking-wide uppercase mb-0.5">
                {activeItem.type === "video" ? "Video" : "Sacred Grounds"}
              </p>
              <h3 className="text-white font-semibold text-lg leading-snug">
                {activeItem.caption}
              </h3>
            </div>
          )}
        </div>

        {/* Left arrow */}
        <button
          onClick={() => navigate("left")}
          disabled={isAnimating}
          aria-label="Previous slide"
          className="absolute z-20 w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm
                     flex items-center justify-center shadow-lg border border-white/60
                     hover:bg-white hover:scale-110 disabled:opacity-40 disabled:cursor-not-allowed
                     transition-all duration-200"
          style={{ left: "18%", top: "50%", transform: "translate(-50%, -50%)" }}
        >
          <ChevronLeft className="w-5 h-5 text-[#1A4D8F]" />
        </button>

        {/* Right arrow */}
        <button
          onClick={() => navigate("right")}
          disabled={isAnimating}
          aria-label="Next slide"
          className="absolute z-20 w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm
                     flex items-center justify-center shadow-lg border border-white/60
                     hover:bg-white hover:scale-110 disabled:opacity-40 disabled:cursor-not-allowed
                     transition-all duration-200"
          style={{ right: "18%", top: "50%", transform: "translate(50%, -50%)" }}
        >
          <ChevronRight className="w-5 h-5 text-[#1A4D8F]" />
        </button>
      </div>

      {/* ── Mobile single-slide ── */}
      <div
        className="relative block md:hidden overflow-hidden rounded-2xl bg-black"
        style={{ height: "280px" }}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        role="region"
        aria-label="Media carousel"
      >
        <div
          className="w-full h-full transition-opacity duration-300"
          style={{ opacity: isAnimating ? 0.6 : 1 }}
        >
          <SlideMedia item={activeItem} role="active" isAnimating={isAnimating} />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
        {activeItem.caption && (
          <div className="absolute bottom-0 left-0 right-0 p-4 pointer-events-none">
            <p className="text-xs text-blue-200 uppercase tracking-wide mb-0.5">
              {activeItem.type === "video" ? "Video" : "Sacred Grounds"}
            </p>
            <h3 className="text-white font-semibold text-base">{activeItem.caption}</h3>
          </div>
        )}
        <button onClick={() => navigate("left")} aria-label="Previous slide"
          className="absolute left-3 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full
                     bg-white/80 backdrop-blur-sm flex items-center justify-center shadow-md">
          <ChevronLeft className="w-4 h-4 text-[#1A4D8F]" />
        </button>
        <button onClick={() => navigate("right")} aria-label="Next slide"
          className="absolute right-3 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full
                     bg-white/80 backdrop-blur-sm flex items-center justify-center shadow-md">
          <ChevronRight className="w-4 h-4 text-[#1A4D8F]" />
        </button>
      </div>

      {/* Dot indicators */}
      <div className="flex justify-center gap-2 mt-4" role="tablist" aria-label="Slide indicators">
        {items.map((item, i) => (
          <Dot key={i} item={item} active={i === activeIndex} onClick={() => goTo(i)} />
        ))}
      </div>
    </div>
  );
}
