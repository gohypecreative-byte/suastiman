"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ArrowRight, CheckCircle2 } from "lucide-react";

interface PillarCard {
  id: string;
  category: string;
  title: string;
  image: string;
  altitudeOrSource: string;
  keySpecs: string[];
}

const BRAND_PILLARS: PillarCard[] = [
  {
    id: "provenance",
    category: "SACRED GEOGRAPHY",
    title: "High Himalayan Cloud Forest",
    image: "/images/origin/brand_intro_forest.jpg",
    altitudeOrSource: "Elevation: 2,200m",
    keySpecs: ["Direct Mountain Sourced", "Glacial Mineral Soil", "Zero Commercial Farm"],
  },
  {
    id: "craft",
    category: "GENERATIONAL CRAFT",
    title: "River Water Spring Cleansing",
    image: "/images/origin/brand_artisan_wash.jpg",
    altitudeOrSource: "Traditional Riverbeds",
    keySpecs: ["100% Spring Water", "Zero Acid / Chemicals", "Natural Pulp Removal"],
  },
  {
    id: "botanical",
    category: "RAW BOTANICAL FORM",
    title: "Lab-Verified Mukhi Geometry",
    image: "/images/origin/brand_macro_detail.jpg",
    altitudeOrSource: "Elaeocarpus Ganitrus",
    keySpecs: ["Raw Tactile Mukhis", "No Plastic / Dyes", "Authenticity Certified"],
  },
];

export function BrandIntro() {
  return (
    <section id="brand-intro" className="py-12 sm:py-16 bg-[#FBF9F5] text-[#0C161D] relative overflow-hidden border-b border-[#E8E2D5]">
      {/* Background Subtle Luxury Grain Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#C5A880_1px,transparent_1px)] [background-size:28px_28px] opacity-[0.08] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
        {/* Full-width clean headline (no badges, no manufacture text) */}
        <div className="mb-12 sm:mb-16">
          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal text-[#1A1815] leading-[1.12] tracking-tight">
            A modern heritage house <span className="italic text-[#7A6242] font-light">built on untouched origins.</span>
          </h2>
        </div>

        {/* 3-Column Visual Cards (Mobile Horizontal Swipe Carousel / Desktop 3-col Grid) */}
        <div className="flex md:grid md:grid-cols-3 gap-5 sm:gap-8 overflow-x-auto md:overflow-x-visible snap-x snap-mandatory no-scrollbar -mx-5 px-5 md:mx-0 md:px-0 pb-4 md:pb-0">
          {BRAND_PILLARS.map((card) => (
            <div
              key={card.id}
              className="group relative rounded-2xl overflow-hidden bg-[#F0ECE1] border border-[#C5A880]/30 shadow-md hover:shadow-2xl transition-all duration-500 flex flex-col justify-between shrink-0 w-[82vw] xs:w-[72vw] md:w-auto snap-center"
            >
              {/* Image Container (Clean Image, No Top Overlays) */}
              <div className="relative w-full aspect-[4/5] overflow-hidden bg-stone-900">
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  className="object-cover transition-transform duration-1000 ease-out group-hover:scale-105 brightness-[0.95]"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />

                {/* Subtle Gradient Shadow for bottom text */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/15 to-transparent pointer-events-none" />

                {/* Bottom Image Overlay Only */}
                <div className="absolute bottom-4 left-4 right-4 text-white space-y-1.5 pointer-events-none">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#DFCAAB] block">
                    {card.altitudeOrSource}
                  </span>
                  <h3 className="font-serif text-lg sm:text-xl font-normal text-white leading-tight">
                    {card.title}
                  </h3>
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
