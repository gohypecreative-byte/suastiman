"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { ShieldCheck, Award, Eye, FileText, CheckCircle2, Microscope, Compass, ChevronLeft, ChevronRight } from "lucide-react";

interface TrustPillar {
  title: string;
  category: string;
  image: string;
  desc?: string;
  badge: string;
  specs: string[];
}

const TRUST_PILLARS: TrustPillar[] = [
  {
    title: "Living Care Commitment",
    category: "LIFETIME REVERENCE",
    image: "/images/origin/trust_care_bright.jpg",
    badge: "Lifetime Guidance",
    specs: ["Pure Sandalwood Oil Included", "Tradition Monograph", "Zero Fear-Based Claims"],
  },
  {
    title: "Direct Sacred Geography",
    category: "ETHICAL ORIGIN",
    image: "/images/origin/trust_sacred_temple.jpg",
    badge: "Direct Sourced",
    specs: ["Himalayan Upper Valleys", "Braj Soil Sacred Groves", "Traceable Origin Batches"],
  },
  {
    title: "Digital Radiography Testing",
    category: "TESTING & CERTIFICATION",
    image: "/images/origin/trust_xray_bright.jpg",
    badge: "100% X-Ray Verified",
    specs: ["Non-Destructive Testing", "Authentic Mukhi Chambers", "Individual Lab Reports"],
  },
  {
    title: "Mineralogical Lab Analysis",
    category: "GEMOLOGICAL PURITY",
    image: "/images/origin/trust_gem_bright.jpg",
    badge: "Zero Dyed Glass",
    specs: ["Thermal Conductivity Test", "Microscopic Inclusions Verified", "Zero Heat Treatment"],
  },
];

export function TrustProvenance() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = window.innerWidth * 0.75;
      scrollRef.current.scrollBy({ left: direction === "left" ? -scrollAmount : scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <section id="trust-provenance" className="py-20 sm:py-28 bg-[#F7F5F0] text-[#1A1815] relative overflow-hidden border-b border-[#E2DEC9]">
      {/* Subtle Texture */}
      <div className="absolute inset-0 bg-[radial-gradient(#C5A880_1px,transparent_1px)] [background-size:32px_32px] opacity-[0.10] pointer-events-none" />

      <div className="w-full mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
        {/* Header */}
        <div className="max-w-3xl mb-12 sm:mb-16 space-y-3">
          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal text-[#1A1815] leading-[1.12] tracking-tight">
            Trust Should Be Visible. <br />
            <span className="italic text-[#7A6242] font-light">Laboratory-tested &amp; verified.</span>
          </h2>
        </div>

        {/* Mobile View: 2-Column Portrait Card Grid matching reference format */}
        <div className="grid grid-cols-2 gap-3.5 sm:gap-4 lg:hidden">
          {TRUST_PILLARS.map((pillar, i) => (
            <div
              key={i}
              className="group block text-center"
            >
              {/* Tall Portrait Rounded Image Container */}
              <div className="relative w-full aspect-[3/4] rounded-2xl overflow-hidden bg-[#FAF8F5] border border-[#E0D8CB]/60 shadow-xs group-hover:border-[#C5A880] transition-all duration-300">
                <Image
                  src={pillar.image}
                  alt={pillar.title}
                  fill
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 640px) 50vw, 25vw"
                />
              </div>

              {/* Text Below Image */}
              <div className="mt-2 space-y-0.5 px-0.5">
                <span className="text-[9px] sm:text-[10px] font-mono uppercase tracking-widest text-[#9B7D52] block font-medium">
                  {pillar.category}
                </span>
                <h3 className="font-serif text-xs sm:text-sm font-normal text-[#1A1815] leading-snug line-clamp-2">
                  {pillar.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop View: Preserved Exact Carousel (Web Unchanged) */}
        <div className="hidden lg:block relative group/carousel">
          <div 
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto snap-x snap-mandatory no-scrollbar -mx-5 px-5 sm:mx-0 sm:px-0 pb-4 sm:pb-0"
          >
            {TRUST_PILLARS.map((pillar, i) => (
              <div
                key={i}
                className="group rounded-2xl overflow-hidden bg-white hover:bg-[#FAF8F5] border border-[#E0D8CB] hover:border-[#C5A880] shadow-md hover:shadow-2xl transition-all duration-500 flex flex-col justify-between shrink-0 snap-center w-[85vw] sm:w-[45vw] lg:w-[calc(25vw-2.75rem)]"
              >
                {/* Image (Bright Daylight Lab & Mountain Photo) */}
                <div className="relative w-full aspect-[4/3] sm:aspect-[16/11] overflow-hidden bg-[#FAF8F5]">
                  <Image
                    src={pillar.image}
                    alt={pillar.title}
                    fill
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                </div>

                {/* Text Info - Clean High Contrast on Warm White */}
                <div className="p-5 sm:p-6 bg-white flex-1 flex flex-col justify-start border-t border-[#EAE5D8]">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#9B7D52] block mb-1.5 font-medium">
                    {pillar.category}
                  </span>
                  <h3 className="font-serif text-lg sm:text-xl font-normal text-[#1A1815] leading-snug group-hover:text-[#7A6242] transition-colors">
                    {pillar.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>

          {/* Right Scroll Button */}
          <div className="absolute top-1/2 -translate-y-1/2 right-2 sm:-right-4 z-20 opacity-0 group-hover/carousel:opacity-100 transition-opacity hidden lg:block">
            <button 
              onClick={() => scroll('right')} 
              className="p-3 sm:p-4 rounded-full bg-white/95 shadow-2xl border border-[#E0D8CB] hover:bg-[#C5A880] hover:text-white transition-all text-[#1A1815] backdrop-blur-md cursor-pointer"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
          
          {/* Left Scroll Button */}
          <div className="absolute top-1/2 -translate-y-1/2 left-2 sm:-left-4 z-20 opacity-0 group-hover/carousel:opacity-100 transition-opacity hidden lg:block">
            <button 
              onClick={() => scroll('left')} 
              className="p-3 sm:p-4 rounded-full bg-white/95 shadow-2xl border border-[#E0D8CB] hover:bg-[#C5A880] hover:text-white transition-all text-[#1A1815] backdrop-blur-md cursor-pointer"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
