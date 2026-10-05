"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { ArrowRight, ChevronRight, ChevronLeft } from "lucide-react";

interface CategoryItem {
  id: string;
  name: string;
  count: string;
  image: string;
  hoverImage: string;
  href: string;
  tagline: string;
}

const CATEGORIES: CategoryItem[] = [
  {
    id: "cat-rudraksha",
    name: "Sacred Rudraksha",
    count: "Wild Himalayan Endocarp",
    image: "/images/origin/hero_journey_fruit.jpg",
    hoverImage: "/images/origin/hero_journey_seed.jpg",
    href: "#rudraksha-journey",
    tagline: "Wild Botanical Origin",
  },
  {
    id: "cat-tulsi",
    name: "Vrindavan Tulsi",
    count: "Naturally Cured Wood",
    image: "/images/origin/tulsi_heritage_plant.jpg",
    hoverImage: "/images/origin/know_tulsi_wood.jpg",
    href: "#tulsi-journey",
    tagline: "Sacred Soil Heritage",
  },
  {
    id: "cat-gemstones",
    name: "Earth Gemstones",
    count: "Untreated Mineral Matrix",
    image: "/images/origin/raw_gemstone_craft.jpg",
    hoverImage: "/images/products/prod3.webp",
    href: "#gemstone-journey",
    tagline: "Jaipur Water Lapidary",
  },
  {
    id: "cat-malas",
    name: "108 Japa Malas",
    count: "Hand-Knotted Brahmagranthi",
    image: "/images/origin/stage9_svastiman.jpg",
    hoverImage: "/images/products/prod1.webp",
    href: "#featured-products",
    tagline: "Daily Contemplative Wear",
  },
  {
    id: "cat-bracelets",
    name: "Tactile Bracelets",
    count: "Certified Natural Strata",
    image: "/images/origin/brand_macro_detail.jpg",
    hoverImage: "/images/products/prod4.webp",
    href: "#featured-products",
    tagline: "High-Tensile Resilient Cord",
  },
];

export function CategoryShowcase() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = window.innerWidth * 0.75;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="categories"
      className="pt-10 sm:pt-12 pb-16 sm:pb-20 bg-[#FBF9F5] text-[#0C161D] relative overflow-hidden border-b border-[#E8E2D5]"
    >
      {/* Background Texture */}
      <div className="absolute inset-0 bg-[radial-gradient(#C5A880_1px,transparent_1px)] [background-size:28px_28px] opacity-[0.08] pointer-events-none" />

      <div className="w-full mx-auto relative z-10">
        {/* Header - Unified Message */}
        <div className="mb-8 sm:mb-12 max-w-4xl px-5 sm:px-8 lg:px-12">
          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal text-[#1A1815] leading-[1.12] tracking-tight">
            A modern heritage house <span className="italic text-[#7A6242] font-light">built on untouched origins.</span>
          </h2>
        </div>

        {/* Carousel Container */}
        <div className="relative group/carousel">
          <div
            ref={scrollRef}
            className="flex gap-4 sm:gap-6 overflow-x-auto snap-x snap-mandatory no-scrollbar px-5 sm:px-8 lg:px-12 pb-6"
          >
            {CATEGORIES.map((cat) => (
              <a
                key={cat.id}
                href={cat.href}
                className="group block relative rounded-2xl overflow-hidden bg-white border border-[#E0D9CA] hover:border-[#C5A880] shadow-md hover:shadow-2xl transition-all duration-500 shrink-0 snap-center w-[85vw] sm:w-[45vw] lg:w-[calc(25vw-2.75rem)]"
              >
                {/* Image Container with Hover Crossfade Flip Effect */}
                <div className="relative w-full aspect-[1/1.15] overflow-hidden bg-stone-900">
                  {/* Primary Base Image */}
                  <Image
                    src={cat.image}
                    alt={cat.name}
                    fill
                    className="object-cover brightness-[0.95] contrast-[1.03] transition-all duration-700 ease-out group-hover:scale-105 group-hover:opacity-0"
                    sizes="(max-width: 640px) 90vw, (max-width: 1024px) 50vw, 25vw"
                  />

                  {/* Secondary Hover Image (Reveals on Hover) */}
                  <Image
                    src={cat.hoverImage}
                    alt={`${cat.name} craft perspective`}
                    fill
                    className="object-cover brightness-[0.95] contrast-[1.03] transition-all duration-700 ease-out opacity-0 scale-100 group-hover:opacity-100 group-hover:scale-105"
                    sizes="(max-width: 640px) 90vw, (max-width: 1024px) 50vw, 25vw"
                  />
                </div>

                {/* Clean Below-Image Label */}
                <div className="p-4 sm:p-5 sm:py-6 bg-white flex items-center justify-between border-t border-[#EAE5D8]">
                  <div className="min-w-0 pr-2">
                    <h3 className="font-serif text-lg sm:text-xl font-normal text-[#1A1815] leading-snug group-hover:text-[#7A6242] transition-colors truncate">
                      {cat.name}
                    </h3>
                    <span className="text-[11px] sm:text-xs font-mono text-stone-500 block pt-1 truncate">
                      {cat.count}
                    </span>
                  </div>
                  <ArrowRight className="w-5 h-5 text-[#7A6242] group-hover:translate-x-1.5 transition-transform shrink-0" />
                </div>
              </a>
            ))}
          </div>

          {/* Right Scroll Button */}
          <div className="absolute top-1/2 -translate-y-1/2 right-2 sm:right-6 z-20 opacity-0 group-hover/carousel:opacity-100 transition-opacity hidden lg:block">
            <button
              onClick={() => scroll("right")}
              className="p-3 sm:p-4 rounded-full bg-white/95 shadow-2xl border border-[#E0D9CA] hover:bg-[#C5A880] hover:text-white transition-all text-[#1A1815] backdrop-blur-md cursor-pointer"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-6 h-6 sm:w-7 sm:h-7" />
            </button>
          </div>

          {/* Left Scroll Button */}
          <div className="absolute top-1/2 -translate-y-1/2 left-2 sm:left-6 z-20 opacity-0 group-hover/carousel:opacity-100 transition-opacity hidden lg:block">
            <button
              onClick={() => scroll("left")}
              className="p-3 sm:p-4 rounded-full bg-white/95 shadow-2xl border border-[#E0D9CA] hover:bg-[#C5A880] hover:text-white transition-all text-[#1A1815] backdrop-blur-md cursor-pointer"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-6 h-6 sm:w-7 sm:h-7" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
