"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { ShieldCheck, Award, Eye, FileText, CheckCircle2, Microscope, Compass, Sparkles, ChevronLeft, ChevronRight } from "lucide-react";

interface TrustPillar {
  title: string;
  category: string;
  image: string;
  desc: string;
  badge: string;
  specs: string[];
}

const TRUST_PILLARS: TrustPillar[] = [
  {
    title: "Digital Radiography Testing",
    category: "TESTING & CERTIFICATION",
    image: "/images/origin/trust_xray_rudraksha.jpg",
    desc: "Digital X-ray inspection of every Rudraksha batch to verify natural internal seed compartments and eliminate fake carved beads.",
    badge: "100% X-Ray Verified",
    specs: ["Non-Destructive Testing", "Authentic Mukhi Chambers", "Individual Lab Reports"],
  },
  {
    title: "Mineralogical Lab Analysis",
    category: "GEMOLOGICAL PURITY",
    image: "/images/origin/trust_gem_testing.jpg",
    desc: "Refractive index and specific gravity testing on untreated gemstones to eliminate synthetic resins and dyed glass imitations.",
    badge: "Zero Dyed Glass",
    specs: ["Thermal Conductivity Test", "Microscopic Inclusions Verified", "Zero Heat Treatment"],
  },
  {
    title: "Direct Sacred Geography",
    category: "ETHICAL ORIGIN",
    image: "/images/origin/trust_mountain_source.jpg",
    desc: "Sourced directly from verified Himalayan cloud belts (2,200m+) and Vrindavan temple soil without middleman commercialization.",
    badge: "Direct Sourced",
    specs: ["Himalayan Upper Valleys", "Braj Soil Sacred Groves", "Traceable Origin Batches"],
  },
  {
    title: "Living Care Commitment",
    category: "LIFETIME REVERENCE",
    image: "/images/origin/trust_living_care.jpg",
    desc: "Every sacred mala arrives with an origin monograph and pure natural sandalwood oil to keep your beads naturally nourished.",
    badge: "Lifetime Guidance",
    specs: ["Pure Sandalwood Oil Included", "Tradition Monograph", "Zero Fear-Based Claims"],
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
    <section id="trust-provenance" className="py-20 sm:py-28 bg-[#0C161D] text-[#ECEADE] relative overflow-hidden border-b border-[#C5A880]/20">
      {/* Subtle Texture */}
      <div className="absolute inset-0 bg-[radial-gradient(#C5A880_1px,transparent_1px)] [background-size:32px_32px] opacity-[0.06] pointer-events-none" />

      <div className="w-full mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
        {/* Header */}
        <div className="max-w-3xl mb-12 sm:mb-16 space-y-3">

          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal text-white leading-[1.12] tracking-tight">
            Trust Should Be Visible. <br />
            <span className="italic text-[#DFCAAB] font-light">Laboratory-tested &amp; verified.</span>
          </h2>

        </div>

        {/* 4 Trust Pillars Carousel */}
        <div className="relative group/carousel">
          <div 
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto snap-x snap-mandatory no-scrollbar -mx-5 px-5 sm:mx-0 sm:px-0 pb-4 sm:pb-0"
          >
            {TRUST_PILLARS.map((pillar, i) => (
              <div
                key={i}
                className="group rounded-2xl overflow-hidden bg-[#141E26] border border-white/10 hover:border-[#C5A880]/50 shadow-xl transition-all duration-500 flex flex-col justify-between shrink-0 snap-center w-[85vw] sm:w-[45vw] lg:w-[calc(25vw-2.75rem)]"
              >
                {/* Image (Dominant) */}
                <div className="relative w-full aspect-square sm:aspect-[5/6] overflow-hidden bg-black">
                  <Image
                    src={pillar.image}
                    alt={pillar.title}
                    fill
                    className="object-cover brightness-[0.92] contrast-[1.04] group-hover:scale-105 transition-transform duration-700 ease-out"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#141E26] via-transparent to-transparent pointer-events-none" />
                </div>

                {/* Text Info (Minimal) */}
                <div className="p-5 sm:p-6 bg-[#141E26] flex-1 flex flex-col justify-start">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#C5A880] block mb-2">
                    {pillar.category}
                  </span>
                  <h3 className="font-serif text-lg sm:text-xl font-normal text-white leading-snug mb-2">
                    {pillar.title}
                  </h3>
                  <p className="text-xs text-stone-300 font-light leading-relaxed line-clamp-3">
                    {pillar.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Right Scroll Button */}
          <div className="absolute top-1/2 -translate-y-1/2 right-2 sm:-right-4 z-20 opacity-0 group-hover/carousel:opacity-100 transition-opacity hidden lg:block">
            <button 
              onClick={() => scroll('right')} 
              className="p-3 rounded-full bg-white/10 shadow-2xl border border-white/20 hover:bg-[#C5A880] hover:text-[#0C161D] transition-all text-white backdrop-blur-md"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
          
          {/* Left Scroll Button */}
          <div className="absolute top-1/2 -translate-y-1/2 left-2 sm:-left-4 z-20 opacity-0 group-hover/carousel:opacity-100 transition-opacity hidden lg:block">
            <button 
              onClick={() => scroll('left')} 
              className="p-3 rounded-full bg-white/10 shadow-2xl border border-white/20 hover:bg-[#C5A880] hover:text-[#0C161D] transition-all text-white backdrop-blur-md"
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
