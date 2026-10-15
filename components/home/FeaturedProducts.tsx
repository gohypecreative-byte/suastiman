"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";

export interface CategoryShowcaseItem {
  id: string;
  name: string;
  category: "bracelets" | "malas" | "zodiac" | "botanicals" | "gemstones";
  subtitle: string;
  image: string;
  itemCount: string;
  href: string;
}

const CATEGORIES: CategoryShowcaseItem[] = [
  {
    id: "cat-bracelets",
    name: "Spiritual Bracelets",
    category: "bracelets",
    subtitle: "Energy Alignment & Daily Mindful Touch",
    image: "/images/products/prod2.webp",
    itemCount: "12 Authentic Pieces",
    href: "/products?category=bracelets",
  },
  {
    id: "cat-malas",
    name: "Sacred 108 Malas",
    category: "malas",
    subtitle: "Hand-Knotted Rudraksha & Vrindavan Tulsi Beads",
    image: "/images/products/prod1.webp",
    itemCount: "8 Sacred Pieces",
    href: "/products?category=malas",
  },
  {
    id: "cat-zodiac",
    name: "Zodiac Jewellery",
    category: "zodiac",
    subtitle: "Aligned With Your Astrological Birth Chart",
    image: "/images/products/zodiac_bracelets_collection.jpg",
    itemCount: "12 Zodiac Signs",
    href: "/tools/energy-finder",
  },
  {
    id: "cat-botanicals",
    name: "Sacred Botanicals",
    category: "botanicals",
    subtitle: "Wild Himalayan Rudraksha & Vrindavan Tulsi",
    image: "/images/origin/hero_journey_fruit.jpg",
    itemCount: "14 Authentic Seeds & Wood",
    href: "/products?category=rudraksha",
  },
  {
    id: "cat-gemstones",
    name: "Earth Gemstones",
    category: "gemstones",
    subtitle: "Untreated Metamorphic Matrix & Healing Crystals",
    image: "/images/products/prod3.webp",
    itemCount: "10 Certified Pieces",
    href: "/products?category=gemstones",
  },
];

export function FeaturedProducts() {
  const router = useRouter();
  const N = CATEGORIES.length;
  const targetProgressRef = useRef(0);
  const animatedProgressRef = useRef(0);
  const [renderProgress, setRenderProgress] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);

  // Helper: Normalize difference into [-N/2, N/2] for shortest circular path
  const getNormalizedDiff = useCallback(
    (targetIdx: number, fromProgress: number) => {
      let diff = (targetIdx - fromProgress) % N;
      while (diff > N / 2) diff -= N;
      while (diff < -N / 2) diff += N;
      return diff;
    },
    [N]
  );

  // Infinite Next Slide
  const nextSlide = useCallback(() => {
    targetProgressRef.current += 1;
  }, []);

  // Infinite Prev Slide
  const prevSlide = useCallback(() => {
    targetProgressRef.current -= 1;
  }, []);

  // Rotate to specific category via shortest circular path
  const goToCategory = useCallback(
    (targetIdx: number) => {
      const diff = getNormalizedDiff(targetIdx, targetProgressRef.current);
      targetProgressRef.current += diff;
    },
    [getNormalizedDiff]
  );

  // Smooth lerp loop (~60fps silky smooth transition)
  useEffect(() => {
    let animId: number;
    const updateLoop = () => {
      const diff = targetProgressRef.current - animatedProgressRef.current;
      if (Math.abs(diff) > 0.0005) {
        animatedProgressRef.current += diff * 0.1;
        setRenderProgress(animatedProgressRef.current);
      } else if (animatedProgressRef.current !== targetProgressRef.current) {
        animatedProgressRef.current = targetProgressRef.current;
        setRenderProgress(targetProgressRef.current);
      }
      animId = requestAnimationFrame(updateLoop);
    };
    animId = requestAnimationFrame(updateLoop);
    return () => cancelAnimationFrame(animId);
  }, []);

  // Handle URL hash changes for direct category links
  useEffect(() => {
    const onHashChange = () => {
      const hash = window.location.hash;
      if (hash.includes("bracelets")) goToCategory(0);
      else if (hash.includes("malas")) goToCategory(1);
      else if (hash.includes("zodiac")) goToCategory(2);
      else if (
        hash.includes("botanicals") ||
        hash.includes("rudraksha") ||
        hash.includes("tulsi")
      )
        goToCategory(3);
      else if (hash.includes("gemstones")) goToCategory(4);
    };

    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, [goToCategory]);

  // Touch Swipe for mobile devices
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStart === null) return;
    const touchEnd = e.changedTouches[0].clientX;
    const distance = touchStart - touchEnd;
    if (distance > 40) {
      nextSlide();
    } else if (distance < -40) {
      prevSlide();
    }
    setTouchStart(null);
  };

  const handleCardClick = (idx: number, cat: CategoryShowcaseItem) => {
    const diff = getNormalizedDiff(idx, targetProgressRef.current);
    if (Math.abs(diff) < 0.25) {
      // Center active card: Navigate to collection
      if (cat.href.startsWith("#")) {
        const el = document.querySelector(cat.href);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      } else {
        router.push(cat.href);
      }
    } else {
      // Side card clicked: Rotate smoothly to front center
      goToCategory(idx);
    }
  };

  // Active index for indicators (modulo mapped 0 to N-1)
  const activeIndex = ((Math.round(renderProgress) % N) + N) % N;

  return (
    <section
      id="featured-products"
      className="relative bg-[#FBF9F5] text-[#1A1815] select-none py-10 sm:py-12 lg:py-16 overflow-hidden"
    >
      <div id="featured-products-all" className="absolute -top-32" />
      <div id="featured-products-bracelets" className="absolute -top-32" />
      <div id="featured-products-malas" className="absolute -top-32" />
      <div id="featured-products-zodiac" className="absolute -top-32" />
      <div id="featured-products-botanicals" className="absolute -top-32" />
      <div id="featured-products-gemstones" className="absolute -top-32" />

      {/* Background Subtle Organic Texture */}
      <div className="absolute inset-0 bg-[radial-gradient(#C5A880_1px,transparent_1px)] [background-size:28px_28px] opacity-[0.08] pointer-events-none" />

      {/* Section Header & Action (Contained Width) */}
      <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12 mb-6 sm:mb-8 lg:mb-10 relative z-10 shrink-0">
        <div className="w-full flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div className="text-left max-w-2xl">
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal text-[#1A1815] leading-[1.15] tracking-tight">
              Sacred Collections,{" "}
              <span className="italic text-[#7A6242] font-light block sm:inline">
                crafted for daily spiritual wear.
              </span>
            </h2>
          </div>

          {/* View All Products Link */}
          <div className="self-start sm:self-end sm:ml-auto shrink-0">
            <Link
              href="/products"
              className="inline-flex items-center gap-2.5 px-5 sm:px-6 py-2.5 rounded-full text-xs font-semibold tracking-wider uppercase transition-all duration-300 bg-[#122E46] hover:bg-[#1A3F5E] text-white shadow-sm hover:shadow-md border border-white/10 cursor-pointer group"
            >
              <span>View All Products</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#DFCAAB] group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>

      {/* FULL-SCREEN-WIDTH Stage with Scroll Buttons placed at extreme ends */}
      <div className="relative w-full h-[360px] sm:h-[420px] md:h-[470px] lg:h-[510px] flex items-center justify-center overflow-visible my-auto">
        {/* Left Arrow Button (At the extreme outer left end) */}
        <button
          onClick={prevSlide}
          className="absolute left-2 sm:left-4 md:left-6 lg:left-8 top-1/2 -translate-y-1/2 z-50 w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 rounded-full bg-[#1A1815] hover:bg-[#122E46] text-[#FAF8F5] flex items-center justify-center shadow-2xl border border-white/20 transition-all duration-300 hover:scale-110 active:scale-95 cursor-pointer backdrop-blur-xs"
          aria-label="Previous category"
        >
          <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>

        {/* Right Arrow Button (At the extreme outer right end) */}
        <button
          onClick={nextSlide}
          className="absolute right-2 sm:right-4 md:right-6 lg:right-8 top-1/2 -translate-y-1/2 z-50 w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 rounded-full bg-[#1A1815] hover:bg-[#122E46] text-[#FAF8F5] flex items-center justify-center shadow-2xl border border-white/20 transition-all duration-300 hover:scale-110 active:scale-95 cursor-pointer backdrop-blur-xs"
          aria-label="Next category"
        >
          <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>

        {/* Cards Wrapper */}
        <div
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          className="relative w-full h-full flex items-center justify-center"
        >
          {CATEGORIES.map((cat, idx) => {
            const diff = getNormalizedDiff(idx, renderProgress);
            const absDiff = Math.abs(diff);

            // Clean constant horizontal spacing with a distinct gap between cards
            const translateX = `calc(-50% + ${diff * 106}%)`;

            // Proportional uniform scale without stretching:
            // Center card: 1.0, side cards: ~0.85
            const scale = Math.max(0.72, 1.0 - Math.min(absDiff, 1.2) * 0.15);

            // 100% full opacity for visible cards
            let opacity = 1;
            if (absDiff > 1.15) {
              opacity = Math.max(0, 1 - (absDiff - 1.15) / 0.35);
            }

            const zIndex = Math.round(30 - Math.min(absDiff, 1.5) * 16);

            const isCentered = absDiff < 0.35;
            const boxShadow = isCentered
              ? "0 25px 50px -12px rgba(0,0,0,0.45), 0 10px 20px -8px rgba(0,0,0,0.25)"
              : "0 10px 25px -8px rgba(0,0,0,0.3)";

            return (
              <div
                key={cat.id}
                onClick={() => handleCardClick(idx, cat)}
                style={{
                  transform: `translate3d(${translateX}, -50%, 0) scale(${scale})`,
                  zIndex,
                  opacity,
                  boxShadow,
                  willChange: "transform, opacity",
                  pointerEvents: absDiff < 1.35 ? "auto" : "none",
                }}
                className="absolute top-1/2 left-1/2 w-[78vw] sm:w-[360px] md:w-[420px] lg:w-[465px] aspect-[4/3] rounded-[14px] overflow-hidden shadow-xl cursor-pointer group/card bg-[#111111]"
              >
                {/* Full-bleed Image - Covers card edge-to-edge */}
                <Image
                  src={cat.image}
                  alt={cat.name}
                  fill
                  priority={isCentered}
                  className="object-cover object-center transition-transform duration-700 group-hover/card:scale-105"
                  sizes="(max-width: 640px) 80vw, (max-width: 1024px) 380px, 420px"
                />

                {/* Bottom Content Area with gradient overlay for crystal clear contrast */}
                <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 md:p-5 flex flex-col items-center text-center z-10 bg-gradient-to-t from-black/85 via-black/45 to-transparent pt-8 sm:pt-10">
                  <h3 className="font-serif text-base sm:text-xl md:text-2xl lg:text-3xl font-normal text-white uppercase tracking-[0.08em] leading-tight drop-shadow-[0_2px_12px_rgba(0,0,0,0.95)] mb-1 transition-transform duration-300">
                    {cat.name}
                  </h3>

                  <p className="text-[10px] sm:text-xs md:text-sm text-[#DFCAAB] font-light tracking-wide mb-2 sm:mb-2.5 drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)] line-clamp-1">
                    {cat.subtitle}
                  </p>

                  {/* Explore Collection Action Button (Active Center Card Only) */}
                  <div
                    className={`transition-all duration-300 ${
                      isCentered
                        ? "opacity-100 translate-y-0 pointer-events-auto"
                        : "opacity-0 translate-y-2 pointer-events-none"
                    }`}
                  >
                    <Link
                      href={cat.href}
                      onClick={(e) => e.stopPropagation()}
                      className="inline-flex items-center gap-1.5 px-4 sm:px-5 py-1.5 sm:py-2 rounded-full text-[9px] sm:text-[11px] font-semibold tracking-widest uppercase transition-all duration-300 shadow-xl bg-white hover:bg-[#C5A880] text-[#1A1815] hover:text-white group/btn"
                    >
                      <span>Explore Collection</span>
                      <ArrowRight className="w-3 h-3 transition-transform duration-300 group-hover/btn:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Bottom Horizontal Dash Indicators */}
      <div className="flex items-center justify-center gap-2 sm:gap-2.5 relative z-10 shrink-0 mt-6 sm:mt-8">
        {CATEGORIES.map((cat, idx) => (
          <button
            key={cat.id}
            onClick={() => goToCategory(idx)}
            aria-label={`Go to ${cat.name}`}
            className={`h-1.5 rounded-full transition-all duration-400 cursor-pointer ${
              idx === activeIndex
                ? "w-10 sm:w-12 bg-[#1A1815]"
                : "w-5 sm:w-6 bg-[#DCD6C7] hover:bg-[#C5A880]"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
