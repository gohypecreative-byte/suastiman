"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface CategoryItem {
  id: string;
  name: string;
  count: string;
  image: string;
  href: string;
  tagline: string;
}

const CATEGORIES: CategoryItem[] = [
  {
    id: "cat-rudraksha",
    name: "Sacred Rudraksha",
    count: "Wild Himalayan Endocarp",
    image: "/images/origin/hero_journey_fruit.jpg",
    href: "#rudraksha-journey",
    tagline: "Wild Botanical Origin",
  },
  {
    id: "cat-tulsi",
    name: "Vrindavan Tulsi",
    count: "Naturally Cured Wood",
    image: "/images/origin/tulsi_heritage_plant.jpg",
    href: "#tulsi-journey",
    tagline: "Sacred Soil Heritage",
  },
  {
    id: "cat-gemstones",
    name: "Earth Gemstones",
    count: "Untreated Mineral Matrix",
    image: "/images/origin/raw_gemstone_craft.jpg",
    href: "#gemstone-journey",
    tagline: "Jaipur Water Lapidary",
  },
  {
    id: "cat-malas",
    name: "108 Japa Malas",
    count: "Hand-Knotted Brahmagranthi",
    image: "/images/origin/stage9_svastiman.jpg",
    href: "#featured-products",
    tagline: "Daily Contemplative Wear",
  },
  {
    id: "cat-bracelets",
    name: "Tactile Bracelets",
    count: "Certified Natural Strata",
    image: "/images/origin/brand_macro_detail.jpg",
    href: "#featured-products",
    tagline: "High-Tensile Resilient Cord",
  },
];

export function CategoryShowcase() {
  return (
    <section id="categories" className="pt-10 sm:pt-12 pb-16 sm:pb-20 bg-[#FBF9F5] text-[#0C161D] relative overflow-hidden border-b border-[#E8E2D5]">
      {/* Background Texture */}
      <div className="absolute inset-0 bg-[radial-gradient(#C5A880_1px,transparent_1px)] [background-size:28px_28px] opacity-[0.08] pointer-events-none" />

      <div className="max-w-[1536px] mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
        {/* Header - Single Horizontal Line */}
        <div className="mb-8 sm:mb-10">
          <h2 className="font-serif text-2xl sm:text-4xl lg:text-5xl font-normal text-[#1A1815] leading-tight tracking-tight">
            Explore by Sacred Material. <span className="italic text-[#7A6242] font-light ml-2">Each leading to its origin story.</span>
          </h2>
        </div>

        {/* Mobile App-like Horizontal Swipe Carousel / Desktop 5-Column Grid */}
        <div className="flex sm:grid sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-6 overflow-x-auto sm:overflow-x-visible snap-x snap-mandatory no-scrollbar -mx-5 px-5 sm:mx-0 sm:px-0 pb-4 sm:pb-0">
          {CATEGORIES.map((cat) => (
            <a
              key={cat.id}
              href={cat.href}
              className="group block relative rounded-2xl overflow-hidden bg-white border border-[#E0D9CA] hover:border-[#C5A880] shadow-md hover:shadow-2xl transition-all duration-500 shrink-0 w-[78vw] xs:w-[68vw] sm:w-auto snap-center"
            >
              {/* Wider Image Container (Aspect 1/1.15) */}
              <div className="relative w-full aspect-[1/1.15] overflow-hidden bg-stone-900">
                <Image
                  src={cat.image}
                  alt={cat.name}
                  fill
                  className="object-cover brightness-[0.95] contrast-[1.03] group-hover:scale-108 transition-transform duration-700 ease-out"
                  sizes="(max-width: 640px) 80vw, (max-width: 1024px) 50vw, 20vw"
                />
              </div>

              {/* Clean Below-Image Label */}
              <div className="p-4 sm:p-5 bg-white flex items-center justify-between border-t border-[#EAE5D8]">
                <div className="min-w-0 pr-2">
                  <h3 className="font-serif text-lg font-normal text-[#1A1815] leading-snug group-hover:text-[#7A6242] transition-colors truncate">
                    {cat.name}
                  </h3>
                  <span className="text-[11px] font-mono text-stone-500 block pt-0.5 truncate">{cat.count}</span>
                </div>
                <ArrowRight className="w-4 h-4 text-[#7A6242] group-hover:translate-x-1.5 transition-transform shrink-0" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
