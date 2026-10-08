"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface ShowcaseItem {
  id: string;
  name: string;
  subtitle: string;
  image: string;
  href: string;
}

// Exactly formatted like the mobile reference design:
// 2-column rounded cards with white square image container, bold title, and benefit subtitle
const REAL_LIFE_CHALLENGES: ShowcaseItem[] = [
  {
    id: "sol-sales",
    name: "Increase Business Sales",
    subtitle: "Attract more clients & opportunities.",
    image: "/images/products/prod3.webp",
    href: "/products?category=gemstones",
  },
  {
    id: "sol-wealth",
    name: "Improve Cash Flow",
    subtitle: "Activate wealth energy & stabilise finances.",
    image: "/images/products/prod4.webp",
    href: "/products?category=bracelets",
  },
  {
    id: "sol-protection",
    name: "Remove Negative Energy",
    subtitle: "Cleanse your space & create protection.",
    image: "/images/products/prod1.webp",
    href: "/products?category=rudraksha",
  },
  {
    id: "sol-relationships",
    name: "Better Relationships",
    subtitle: "Bring harmony, love & understanding.",
    image: "/images/products/prod2.webp",
    href: "/products?category=tulsi",
  },
  {
    id: "sol-peace",
    name: "Mental Peace & Focus",
    subtitle: "Quiet restlessness & cultivate daily mindfulness.",
    image: "/images/origin/know_tulsi_wood.jpg",
    href: "/products?category=tulsi",
  },
  {
    id: "sol-zodiac",
    name: "Zodiac Chart Alignment",
    subtitle: "Harmonize astrological birth planetary energy.",
    image: "/images/products/zodiac_bracelets_collection.jpg",
    href: "/tools/energy-finder",
  },
];

const SACRED_MATERIALS: ShowcaseItem[] = [
  {
    id: "mat-bracelets",
    name: "Spiritual Bracelets",
    subtitle: "Daily energy alignment & mindful touch.",
    image: "/images/origin/brand_macro_detail.jpg",
    href: "/products?category=bracelets",
  },
  {
    id: "mat-malas",
    name: "Sacred 108 Malas",
    subtitle: "Traditional hand-knotted contemplation beads.",
    image: "/images/origin/stage9_svastiman.jpg",
    href: "/products?category=malas",
  },
  {
    id: "mat-zodiac",
    name: "Zodiac Jewellery",
    subtitle: "Astrological charts & birthstones.",
    image: "/images/products/zodiac_bracelets_collection.jpg",
    href: "/tools/energy-finder",
  },
  {
    id: "mat-rudraksha",
    name: "Sacred Rudraksha",
    subtitle: "Wild Himalayan seeds with lab provenance.",
    image: "/images/origin/hero_journey_fruit.jpg",
    href: "/products?category=rudraksha",
  },
  {
    id: "mat-tulsi",
    name: "Vrindavan Tulsi",
    subtitle: "Naturally cured holy basil heartwood.",
    image: "/images/origin/tulsi_heritage_plant.jpg",
    href: "/products?category=tulsi",
  },
  {
    id: "mat-gemstones",
    name: "Healing Gemstones",
    subtitle: "Untreated raw minerals cut with water lapidary.",
    image: "/images/origin/raw_gemstone_craft.jpg",
    href: "/products?category=gemstones",
  },
];

export function CategoryShowcase() {
  const [activeTab, setActiveTab] = useState<"challenges" | "materials">("challenges");
  const items = activeTab === "challenges" ? REAL_LIFE_CHALLENGES : SACRED_MATERIALS;

  return (
    <section
      id="categories"
      className="pt-10 sm:pt-14 pb-14 sm:pb-20 bg-[#FBF9F5] text-[#0C161D] relative overflow-hidden border-b border-[#E8E2D5]"
    >
      {/* Background Texture */}
      <div className="absolute inset-0 bg-[radial-gradient(#C5A880_1px,transparent_1px)] [background-size:28px_28px] opacity-[0.08] pointer-events-none" />

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 relative z-10">
        {/* Top Header Block matching reference */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6 sm:mb-8">
          <div>
            <p className="text-[10px] sm:text-[11.5px] font-sans font-semibold tracking-[0.18em] uppercase text-[#8C6D46] mb-1">
              SOLUTIONS DESIGNED FOR REAL-LIFE CHALLENGES
            </p>
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-normal text-[#1A1815] leading-tight">
              Wear Your Energy.{" "}
              <span className="italic text-[#7A6242] font-light block sm:inline">
                Crafted for mindfulness &amp; alignment.
              </span>
            </h2>
          </div>

          <div className="flex items-center gap-4 self-start sm:self-auto">
            {/* View All Link */}
            <Link
              href="/products"
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold tracking-wider text-[#8C6D46] hover:text-[#122E46] transition-colors shrink-0 group"
            >
              <span>View all</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

        {/* Tab Pills Switcher */}
        <div className="flex items-center gap-2 mb-6 sm:mb-8 overflow-x-auto scrollbar-none pb-1">
          <button
            onClick={() => setActiveTab("challenges")}
            className={`px-4 sm:px-5 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-200 cursor-pointer whitespace-nowrap ${
              activeTab === "challenges"
                ? "bg-[#122E46] text-[#FAF8F5] shadow-sm"
                : "bg-[#EFECE6] text-stone-600 hover:text-black hover:bg-white/80 border border-[#DCD6C7]"
            }`}
          >
            Real-Life Challenges
          </button>
          <button
            onClick={() => setActiveTab("materials")}
            className={`px-4 sm:px-5 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-200 cursor-pointer whitespace-nowrap ${
              activeTab === "materials"
                ? "bg-[#122E46] text-[#FAF8F5] shadow-sm"
                : "bg-[#EFECE6] text-stone-600 hover:text-black hover:bg-white/80 border border-[#DCD6C7]"
            }`}
          >
            Sacred Materials
          </button>
        </div>

        {/* 2-Column Mobile Grid, 3-Col Tablet, 6-Col Desktop */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 lg:gap-5">
          {items.map((item) => (
            <Link
              key={item.id}
              href={item.href}
              className="group bg-[#F6EFE3] hover:bg-[#EFE8DC] border border-[#EADBCA] hover:border-[#C5A880] rounded-[18px] sm:rounded-[20px] p-2.5 sm:p-3.5 flex flex-col justify-between transition-all duration-300 shadow-xs hover:shadow-md cursor-pointer"
            >
              {/* Inner White Box with Centered Product Photo */}
              <div className="w-full aspect-square bg-white rounded-xl overflow-hidden relative p-2.5 flex items-center justify-center border border-[#ECE5D8] group-hover:scale-[1.02] transition-transform duration-300 shadow-2xs">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-contain p-1.5 group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 640px) 45vw, (max-width: 1024px) 30vw, 18vw"
                />
              </div>

              {/* Text Info Below Box */}
              <div className="pt-2.5 pb-0.5 px-0.5 space-y-1">
                <h3 className="font-sans text-[13px] sm:text-[14.5px] font-semibold text-[#1A1815] leading-snug group-hover:text-[#8C6D46] transition-colors line-clamp-2">
                  {item.name}
                </h3>
                <p className="text-[11px] sm:text-xs text-stone-600 font-normal leading-snug line-clamp-2">
                  {item.subtitle}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
