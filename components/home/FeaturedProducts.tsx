"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
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
    image: "/images/origin/zodiac_pendant_centered.jpg",
    itemCount: "12 Zodiac Signs",
    href: "#zodiac-finder",
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
  const N = CATEGORIES.length;
  const targetProgressRef = useRef(0); // default center card: Spiritual Bracelets (idx 0)
  const animatedProgressRef = useRef(0);
  const [renderProgress, setRenderProgress] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);

  // Helper: Normalize difference into [-N/2, N/2] for shortest circular path
  const getNormalizedDiff = (targetIdx: number, fromProgress: number) => {
    let diff = (targetIdx - fromProgress) % N;
    while (diff > N / 2) diff -= N;
    while (diff < -N / 2) diff += N;
    return diff;
  };

  useEffect(() => {
    const onHashChange = () => {
      const hash = window.location.hash;
      if (hash.includes("bracelets")) goToCategory(0);
      else if (hash.includes("malas")) goToCategory(1);
      else if (hash.includes("zodiac")) goToCategory(2);
      else if (hash.includes("botanicals") || hash.includes("rudraksha") || hash.includes("tulsi")) goToCategory(3);
      else if (hash.includes("gemstones")) goToCategory(4);
    };

    window.addEventListener("hashchange", onHashChange);
    onHashChange();

    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  // Responsive, crisp lerp loop (~500ms smooth transition)
  useEffect(() => {
    let animId: number;
    const updateLoop = () => {
      const diff = targetProgressRef.current - animatedProgressRef.current;
      if (Math.abs(diff) > 0.0005) {
        animatedProgressRef.current += diff * 0.085;
        setRenderProgress(animatedProgressRef.current);
      }
      animId = requestAnimationFrame(updateLoop);
    };
    animId = requestAnimationFrame(updateLoop);
    return () => cancelAnimationFrame(animId);
  }, []);

  // Infinite Next Slide
  const nextSlide = () => {
    targetProgressRef.current += 1;
  };

  // Infinite Prev Slide
  const prevSlide = () => {
    targetProgressRef.current -= 1;
  };

  // Rotate to specific category via the shortest circular path
  const goToCategory = (targetIdx: number) => {
    const diff = getNormalizedDiff(targetIdx, targetProgressRef.current);
    targetProgressRef.current += diff;
  };

  // Touch Swipe on mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStart === null) return;
    const touchEnd = e.changedTouches[0].clientX;
    const distance = touchStart - touchEnd;
    if (distance > 45) {
      nextSlide();
    } else if (distance < -45) {
      prevSlide();
    }
    setTouchStart(null);
  };

  const handleCardClick = (idx: number, cat: CategoryShowcaseItem) => {
    const diff = getNormalizedDiff(idx, targetProgressRef.current);
    if (Math.abs(diff) < 0.25) {
      // Front center card: Navigate to products catalog or section
      if (cat.href.startsWith("#")) {
        const el = document.querySelector(cat.href);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      } else {
        window.location.href = cat.href;
      }
    } else {
      // Rotate clicked card to front center
      targetProgressRef.current += diff;
    }
  };

  // Active index for indicators (modulo mapped to 0, 1, 2, 3, 4)
  const activeIndex = ((Math.round(renderProgress) % N) + N) % N;

  return (
    <section
      id="featured-products"
      className="relative bg-[#FBF9F5] text-[#1A1815] border-b border-[#E8E2D5] select-none py-12 sm:py-16 md:py-20 overflow-hidden"
    >
      <div id="featured-products-all" className="absolute -top-32" />
      <div id="featured-products-bracelets" className="absolute -top-32" />
      <div id="featured-products-malas" className="absolute -top-32" />
      <div id="featured-products-zodiac" className="absolute -top-32" />
      <div id="featured-products-botanicals" className="absolute -top-32" />
      <div id="featured-products-gemstones" className="absolute -top-32" />

      {/* Background Subtle Organic Texture */}
      <div className="absolute inset-0 bg-[radial-gradient(#C5A880_1px,transparent_1px)] [background-size:28px_28px] opacity-[0.08] pointer-events-none" />

      {/* Main Container - Full Width End-to-End Header */}
      <div className="w-full mx-auto px-5 sm:px-8 lg:px-12 flex flex-col justify-between relative z-10">
        {/* Section Header & Filters */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-8 sm:mb-10 w-full shrink-0">
          <div className="text-left max-w-2xl">
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#1A1815] leading-[1.15] tracking-tight">
              Sacred Collections,{" "}
              <span className="italic text-[#7A6242] font-light block sm:inline">
                crafted for daily spiritual wear.
              </span>
            </h2>
          </div>

          {/* Category Filter Pills - Flushed to Right */}
          <div className="flex items-center gap-1 sm:gap-1.5 bg-[#EFECE6] p-1.5 rounded-full border border-[#DCD6C7] shrink-0 overflow-x-auto scrollbar-none self-start lg:self-end lg:ml-auto max-w-full">
            <Link
              href="/products"
              className="px-3.5 py-1.5 rounded-full text-[11px] sm:text-xs font-medium tracking-wider uppercase transition-all duration-300 text-stone-600 hover:text-black hover:bg-white/60 whitespace-nowrap shrink-0"
            >
              All
            </Link>
            {CATEGORIES.map((cat, idx) => {
              const label = cat.name
                .replace("Spiritual ", "")
                .replace("Sacred ", "")
                .replace("Earth ", "")
                .replace(" Jewellery", "");

              return (
                <button
                  key={cat.id}
                  onClick={() => goToCategory(idx)}
                  className={`px-3 sm:px-3.5 py-1.5 rounded-full text-[11px] sm:text-xs font-medium tracking-wider uppercase transition-all duration-300 cursor-pointer whitespace-nowrap shrink-0 ${
                    activeIndex === idx
                      ? "bg-[#1A1815] text-[#FAF8F5] font-semibold shadow-md"
                      : "text-stone-600 hover:text-black hover:bg-white/60"
                  }`}
                >
                  {label}
                </button>
              );
            })}
          </div>
        </div>

        {/* 3D Cylindrical Wheel Stage */}
        <div
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          style={{
            perspective: "1400px",
            transformStyle: "preserve-3d",
          }}
          className="relative w-full h-[420px] sm:h-[520px] md:h-[580px] flex items-center justify-center overflow-visible my-6 sm:my-8"
        >
          {/* Left Scroll Button */}
          <button
            onClick={prevSlide}
            className="absolute left-2 sm:left-4 lg:left-6 top-1/2 -translate-y-1/2 z-40 w-11 h-11 sm:w-12 sm:h-12 rounded-full border border-[#C5A880]/70 bg-[#F4EFE6] hover:bg-[#1A1815] text-[#1A1815] hover:text-[#DFCAAB] hover:border-[#1A1815] flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110 active:scale-95 cursor-pointer"
            aria-label="Previous category"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          {/* Right Scroll Button */}
          <button
            onClick={nextSlide}
            className="absolute right-2 sm:right-4 lg:right-6 top-1/2 -translate-y-1/2 z-40 w-11 h-11 sm:w-12 sm:h-12 rounded-full border border-[#C5A880]/70 bg-[#F4EFE6] hover:bg-[#1A1815] text-[#1A1815] hover:text-[#DFCAAB] hover:border-[#1A1815] flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110 active:scale-95 cursor-pointer"
            aria-label="Next category"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          {/* 3D Cylindrical Cards Wrapper */}
          <div className="relative w-full h-full flex items-center justify-center">
            {CATEGORIES.map((cat, idx) => {
              const diff = getNormalizedDiff(idx, renderProgress);
              const absDiff = Math.abs(diff);

              // 3D positioning:
              const rotateY = -diff * 22;
              const translateZ = `${30 - Math.min(absDiff, 1.4) * 140}px`;
              const translateX = `calc(-50% + ${diff * 68}%)`;

              // Uniform scaling to avoid distortion
              const scale = Math.max(0.60, 1 - Math.min(absDiff, 1.3) * 0.32);

              // Subtle visibility transition:
              // - Center card is 1.0 (primary focus)
              // - Side cards are 0.85
              // - When leaving side to back: "thoda sa" dikhta hai aur silently deep back me fade ho jata hai (zero distraction)
              // - When approaching next position: gracefully fades in and docks smoothly into the side slot
              let opacity = 1;
              if (absDiff <= 1.0) {
                opacity = 1 - absDiff * 0.15;
              } else if (absDiff < 1.32) {
                // Gentle fade into back / gentle emergence from back
                opacity = Math.max(0, 0.85 * (1 - (absDiff - 1.0) / 0.32));
              } else {
                opacity = 0; // deep back: zero distraction, center card remains the complete focus
              }

              const brightness = 1 - Math.min(0.35, absDiff * 0.25);
              const zIndex = Math.round(30 - Math.min(absDiff, 1.5) * 16);

              const isCentered = absDiff < 0.35;
              const boxShadow = isCentered
                ? "0 30px 65px -15px rgba(0,0,0,0.55), 0 10px 30px -10px rgba(0,0,0,0.3)"
                : "0 20px 45px -15px rgba(0,0,0,0.4)";

              return (
                <div
                  key={cat.id}
                  onClick={() => handleCardClick(idx, cat)}
                  style={{
                    transform: `translate3d(${translateX}, -50%, ${translateZ}) rotateY(${rotateY}deg) scale(${scale})`,
                    zIndex,
                    opacity,
                    filter: `brightness(${brightness})`,
                    boxShadow,
                    transformStyle: "preserve-3d",
                    willChange: "transform, opacity",
                  }}
                  className="absolute top-1/2 left-1/2 w-[84vw] sm:w-[440px] md:w-[500px] lg:w-[560px] aspect-square rounded-2xl sm:rounded-3xl overflow-hidden border border-[#E0D8CB]/40 shadow-2xl cursor-pointer group/card"
                >
                  {/* Full-bleed Category Image - 100% full fit edge-to-edge */}
                  <Image
                    src={cat.image}
                    alt={cat.name}
                    fill
                    priority={isCentered}
                    className="object-cover object-center transition-transform duration-700 group-hover/card:scale-105"
                    sizes="(max-width: 640px) 90vw, (max-width: 1024px) 500px, 560px"
                  />

                  {/* Subtle Bottom Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 via-40% to-transparent pointer-events-none" />

                  {/* Bottom Content Area: Large Centered Luxury Serif Title */}
                  <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6 md:p-8 flex flex-col items-center text-center">
                    <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl font-normal text-white uppercase tracking-[0.08em] leading-tight drop-shadow-lg mb-1 transition-transform duration-300">
                      {cat.name}
                    </h3>

                    <p className="text-xs sm:text-sm text-[#DFCAAB] font-light tracking-wide mb-3.5 drop-shadow">
                      {cat.subtitle}
                    </p>

                    {/* Explore Collection Action Button (Active Card Only) */}
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
                        className="inline-flex items-center gap-2.5 px-6 py-2.5 rounded-full text-xs font-semibold tracking-widest uppercase transition-all duration-300 shadow-2xl bg-white hover:bg-[#C5A880] text-[#1A1815] hover:text-white group/btn"
                      >
                        <span>Explore Collection</span>
                        <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover/btn:translate-x-1" />
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom Horizontal Dash Indicators */}
        <div className="flex items-center justify-center gap-2 sm:gap-2.5 mt-4 sm:mt-6 shrink-0">
          {CATEGORIES.map((_, idx) => (
            <button
              key={catIdx(idx)}
              onClick={() => goToCategory(idx)}
              aria-label={`Go to category ${idx + 1}`}
              className={`h-1.5 rounded-full transition-all duration-400 cursor-pointer ${
                idx === activeIndex
                  ? "w-10 sm:w-12 bg-[#1A1815]"
                  : "w-5 sm:w-6 bg-[#DCD6C7] hover:bg-[#C5A880]"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

// Key helper
function catIdx(i: number) {
  return `ind-${i}`;
}
