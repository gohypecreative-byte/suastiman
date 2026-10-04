"use client";

import React from "react";
import Image from "next/image";
import { ShieldCheck, Award, Eye, FileText, CheckCircle2, Microscope, Compass, Sparkles } from "lucide-react";

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
    image: "/images/origin/hero_journey_seed.jpg",
    desc: "Digital X-ray inspection of every Rudraksha batch to verify natural internal seed compartments and eliminate fake carved beads.",
    badge: "100% X-Ray Verified",
    specs: ["Non-Destructive Testing", "Authentic Mukhi Chambers", "Individual Lab Reports"],
  },
  {
    title: "Mineralogical Lab Analysis",
    category: "GEMOLOGICAL PURITY",
    image: "/images/origin/raw_gemstone_craft.jpg",
    desc: "Refractive index and specific gravity testing on untreated gemstones to eliminate synthetic resins and dyed glass imitations.",
    badge: "Zero Dyed Glass",
    specs: ["Thermal Conductivity Test", "Microscopic Inclusions Verified", "Zero Heat Treatment"],
  },
  {
    title: "Direct Sacred Geography",
    category: "ETHICAL ORIGIN",
    image: "/images/origin/stage1_mountain.jpg",
    desc: "Sourced directly from verified Himalayan cloud belts (2,200m+) and Vrindavan temple soil without middleman commercialization.",
    badge: "Direct Sourced",
    specs: ["Himalayan Upper Valleys", "Braj Soil Sacred Groves", "Traceable Origin Batches"],
  },
  {
    title: "Living Care Commitment",
    category: "LIFETIME REVERENCE",
    image: "/images/origin/stage9_svastiman.jpg",
    desc: "Every sacred mala arrives with an origin monograph and pure natural sandalwood oil to keep your beads naturally nourished.",
    badge: "Lifetime Guidance",
    specs: ["Pure Sandalwood Oil Included", "Tradition Monograph", "Zero Fear-Based Claims"],
  },
];

export function TrustProvenance() {
  return (
    <section id="trust-provenance" className="py-20 sm:py-28 bg-[#0C161D] text-[#ECEADE] relative overflow-hidden border-b border-[#C5A880]/20">
      {/* Subtle Texture */}
      <div className="absolute inset-0 bg-[radial-gradient(#C5A880_1px,transparent_1px)] [background-size:32px_32px] opacity-[0.06] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
        {/* Header */}
        <div className="max-w-3xl mb-12 sm:mb-16 space-y-3">
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#18232C] border border-[#C5A880]/30 text-[10px] sm:text-[11px] font-mono tracking-[0.25em] uppercase text-[#DFCAAB]">
            <ShieldCheck className="w-3.5 h-3.5 text-[#38BDF8]" />
            <span>10. Authenticity &amp; Trust</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal text-white leading-[1.12] tracking-tight">
            Trust Should Be Visible. <br />
            <span className="italic text-[#DFCAAB] font-light">Laboratory-tested &amp; verified.</span>
          </h2>

          <p className="text-stone-300 font-light text-sm sm:text-base leading-relaxed pt-1 max-w-2xl">
            Origin, Material, Testing, Craftsmanship, and Care. Transparent, understated documentation for mindful practitioners.
          </p>
        </div>

        {/* 4 Trust Pillars Cards with 70% Visual Documentary Dominance */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {TRUST_PILLARS.map((pillar, i) => (
            <div
              key={i}
              className="group rounded-2xl overflow-hidden bg-[#141E26] border border-white/10 hover:border-[#C5A880]/50 shadow-xl transition-all duration-500 flex flex-col justify-between"
            >
              {/* Image (75% Dominance) */}
              <div className="relative w-full aspect-[4/3] overflow-hidden bg-black">
                <Image
                  src={pillar.image}
                  alt={pillar.title}
                  fill
                  className="object-cover brightness-[0.92] contrast-[1.04] group-hover:scale-105 transition-transform duration-700 ease-out"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#141E26] via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Text Info */}
              <div className="p-4 sm:p-5 space-y-3 bg-[#141E26] flex-1 flex flex-col justify-between">
                <div className="space-y-1.5">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#C5A880] block">
                    {pillar.category}
                  </span>
                  <h3 className="font-serif text-lg font-normal text-white leading-snug">
                    {pillar.title}
                  </h3>
                  <p className="text-xs text-stone-300 font-light leading-relaxed pt-1">
                    {pillar.desc}
                  </p>
                </div>

                <div className="pt-2 border-t border-white/10 space-y-1">
                  {pillar.specs.map((s, idx) => (
                    <div key={idx} className="flex items-center gap-1.5 text-[10px] font-mono text-stone-400">
                      <CheckCircle2 className="w-3 h-3 text-[#C5A880] shrink-0" />
                      <span>{s}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
