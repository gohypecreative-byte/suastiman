"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ArrowRight, ChevronLeft, ChevronRight, Gem } from "lucide-react";

interface GemstoneStage {
  step: string;
  name: string;
  tagline: string;
  image: string;
  desc: string;
  specs: { label: string; value: string }[];
}

const GEMSTONE_STAGES: GemstoneStage[] = [
  {
    step: "01",
    name: "Earth / Rock",
    tagline: "Millions of Years Tectonic Pressure",
    image: "/images/origin/stage1_mountain.jpg",
    desc: "Crystallized naturally deep within the Himalayan and Rajasthan subterranean strata under extreme geological heat and pressure.",
    specs: [
      { label: "Formation", value: "Natural Metamorphic Veins" },
      { label: "Origin", value: "Himalayan & Jaipur Strata" },
      { label: "Geology", value: "Untreated Mineral Matrix" },
    ],
  },
  {
    step: "02",
    name: "Rough Stone",
    tagline: "Raw Crystalline Boulder Specimens",
    image: "/images/origin/brand_macro_detail.jpg",
    desc: "Raw, unheated rough rocks extracted without dynamite, displaying natural mineral inclusions and pyrite flecks without glass filling.",
    specs: [
      { label: "Treatment", value: "Zero Heat / Non-Irradiated" },
      { label: "Authenticity", value: "Real Inclusions & Feathers" },
      { label: "Texture", value: "Raw Crust & Heavy Cold Heft" },
    ],
  },
  {
    step: "03",
    name: "Cutting",
    tagline: "Jaipur Heritage Diamond Wheel",
    image: "/images/origin/raw_gemstone_craft.jpg",
    desc: "Precision hand-cut by generational stone artisans in Jaipur using water-cooled wheels to preserve the mineral's natural crystalline vibration.",
    specs: [
      { label: "Craft Guild", value: "Jaipur Heritage Lapidary" },
      { label: "Cooling", value: "100% Water-Lubricated" },
      { label: "Tolerance", value: "Natural Organic Calibration" },
    ],
  },
  {
    step: "04",
    name: "Polishing",
    tagline: "Cloth & Wood-Dust Finishing",
    image: "/images/origin/brand_artisan_wash.jpg",
    desc: "Tumbled in natural walnut shells and buffed on cotton cloth wheels without toxic chemical resins, synthetic glazes, or dye coatings.",
    specs: [
      { label: "Buffing Medium", value: "Natural Walnut & Linen" },
      { label: "Resins", value: "Zero Synthetic Epoxies" },
      { label: "Surface Luster", value: "Natural Crystalline Glow" },
    ],
  },
  {
    step: "05",
    name: "Natural Stone",
    tagline: "Certified Mineralogical Fingerprint",
    image: "/images/origin/hero_journey_seed.jpg",
    desc: "Every bead is tested for refractive index and specific gravity to guarantee 100% genuine earth mineralogy with zero dyed glass.",
    specs: [
      { label: "Testing Standard", value: "Certified Gemological Lab" },
      { label: "Thermal Feel", value: "Instantly Cold to Skin" },
      { label: "Dyes / Plastics", value: "Zero Synthetic Imitations" },
    ],
  },
  {
    step: "06",
    name: "Bracelet",
    tagline: "Pure Tactile Resonance & Wear",
    image: "/images/origin/stage9_svastiman.jpg",
    desc: "Individually hand-threaded with high-tensile resilient cord for mindful daily wear, paired with certified authenticity documentation.",
    specs: [
      { label: "Cord", value: "Multi-Core Resilient Thread" },
      { label: "Energy Alignment", value: "Vedic Provenance Context" },
      { label: "Pricing", value: "Direct Honest Indian Sourcing" },
    ],
  },
];

export function GemstoneJourney() {
  const [activeStep, setActiveStep] = useState(1); // Default to Rough Stone stage

  const current = GEMSTONE_STAGES[activeStep];

  return (
    <section id="gemstone-journey" className="py-20 sm:py-28 bg-[#0E151A] text-[#ECEADE] relative overflow-hidden border-b border-[#C5A880]/20">
      {/* Background Subtle Organic Dark Texture */}
      <div className="absolute inset-0 bg-[radial-gradient(#C5A880_1px,transparent_1px)] [background-size:32px_32px] opacity-[0.06] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div className="max-w-3xl space-y-3">
            <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal text-white leading-[1.12] tracking-tight">
              Earth/Rock &rarr; Rough Stone &rarr; Cutting &rarr; <br className="hidden sm:inline" />
              <span className="italic text-[#DFCAAB] font-light">Polishing &rarr; Natural Stone &rarr; Bracelet</span>
            </h2>

            <p className="text-stone-300 font-light text-sm sm:text-base leading-relaxed pt-1 max-w-2xl">
              From subterranean tectonic veins to heritage Jaipur lapidary. Raw earth textures with zero synthetic dyes or imitation plastics.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-[#152028] border border-white/10 max-w-xs self-start lg:self-end">
            <div className="text-[10px] font-mono uppercase tracking-widest text-[#C5A880] block mb-1">
              GEOLOGICAL STANDARD
            </div>
            <div className="font-serif text-base text-white">
              100% Unheated Earth Minerals
            </div>
          </div>
        </div>

        {/* 6-Step Horizontal Stepper */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 sm:gap-2.5 mb-10">
          {GEMSTONE_STAGES.map((stage, idx) => (
            <button
              key={stage.step}
              onClick={() => setActiveStep(idx)}
              className={`p-3 sm:p-3.5 rounded-xl border text-left transition-all duration-300 flex flex-col justify-between ${
                idx === activeStep
                  ? "bg-[#182C3D] text-white border-[#C5A880] shadow-xl scale-[1.02]"
                  : "bg-[#141E26] text-stone-400 border-white/10 hover:border-white/20 hover:bg-[#18232C]"
              }`}
            >
              <span className={`text-[10px] font-mono tracking-widest uppercase block mb-1 ${idx === activeStep ? "text-[#C5A880]" : "text-stone-500"}`}>
                STAGE {stage.step}
              </span>
              <span className="font-serif text-sm font-medium truncate w-full text-stone-200">
                {stage.name}
              </span>
            </button>
          ))}
        </div>

        {/* Fixed-Height Showcase Card (NO TOP OVERLAY ON IMAGE) */}
        <div className="bg-[#141E26] rounded-3xl p-6 sm:p-8 lg:p-10 border border-white/10 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            {/* 70% Large Visual (Clean of top badges) */}
            <div className="lg:col-span-8 relative aspect-[16/10] rounded-2xl overflow-hidden bg-black border border-white/10 group">
              <Image
                src={stageImageCheck(current.image)}
                alt={current.name}
                fill
                priority
                className="object-cover brightness-[0.92] contrast-[1.05] transition-all duration-700 group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 66vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />

              <div className="absolute bottom-4 left-4 right-4 text-white pointer-events-none space-y-1">
                <span className="text-xs font-mono uppercase tracking-widest text-[#C5A880] block">
                  {current.tagline}
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-normal text-white">
                  {current.name} Stage
                </h3>
              </div>
            </div>

            {/* 30% Context */}
            <div className="lg:col-span-4 flex flex-col justify-between min-h-[340px] lg:min-h-[400px] lg:pl-2">
              <div className="space-y-3.5">
                <div className="inline-flex items-center gap-2 text-[10px] font-mono tracking-widest uppercase text-[#C5A880]">
                  <Gem className="w-3.5 h-3.5" />
                  <span>Geological &amp; Lapidary Profile</span>
                </div>

                <h4 className="font-serif text-2xl sm:text-3xl text-white font-normal leading-snug">
                  {current.tagline}
                </h4>

                <p className="text-sm text-stone-300 font-light leading-relaxed min-h-[64px]">
                  {current.desc}
                </p>

                <div className="p-3.5 sm:p-4 rounded-xl bg-[#1A2630] border border-white/10 space-y-2">
                  {current.specs.map((item, i) => (
                    <div key={i} className="flex items-center justify-between text-xs py-0.5 border-b border-white/5 last:border-0">
                      <span className="text-stone-400 font-light">{item.label}</span>
                      <span className="font-mono text-[#DFCAAB] font-medium">{item.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-white/10 flex items-center justify-between mt-auto">
                <button
                  onClick={() => setActiveStep((prev) => (prev > 0 ? prev - 1 : GEMSTONE_STAGES.length - 1))}
                  className="inline-flex items-center gap-1.5 text-xs text-stone-400 hover:text-white transition-colors uppercase tracking-wider font-mono py-2 px-3 rounded-lg hover:bg-white/5"
                >
                  <ChevronLeft className="w-4 h-4" />
                  <span>Previous</span>
                </button>

                <button
                  onClick={() => setActiveStep((prev) => (prev < GEMSTONE_STAGES.length - 1 ? prev + 1 : 0))}
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#C5A880] text-[#0C161D] rounded-full text-xs font-semibold uppercase tracking-wider hover:bg-white transition-colors shadow-md"
                >
                  <span>Next Stage</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function stageImageCheck(img: string) {
  return img || "/images/origin/raw_gemstone_craft.jpg";
}
