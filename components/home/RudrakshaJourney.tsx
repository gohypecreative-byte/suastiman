"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ArrowRight, ChevronLeft, ChevronRight, Fingerprint } from "lucide-react";

interface RudrakshaStage {
  step: string;
  name: string;
  tagline: string;
  image: string;
  tactileDesc: string;
  specs: { label: string; value: string }[];
}

const RUDRAKSHA_STAGES: RudrakshaStage[] = [
  {
    step: "01",
    name: "Flower",
    tagline: "High-Altitude Himalayan Bloom",
    image: "/images/origin/hero_journey_flower.jpg",
    tactileDesc: "Delicate white bell-shaped blossoms with fringed petals open quietly in cloud forest mist during early monsoon showers.",
    specs: [
      { label: "Season", value: "Early Monsoon (July–Aug)" },
      { label: "Canopy Elevation", value: "1,800m – 2,400m" },
      { label: "Pollination", value: "Wild Alpine Bees" },
    ],
  },
  {
    step: "02",
    name: "Fruit",
    tagline: "Vibrant Cobalt Botanical Drupe",
    image: "/images/origin/hero_journey_fruit.jpg",
    tactileDesc: "Before it was a mala, it was a fruit. Ripe wild berries shimmer in electric-blue hue high on mossy Elaeocarpus branches.",
    specs: [
      { label: "Botanical Skin", value: "Natural Cyan Cellulose" },
      { label: "Organic State", value: "100% Wild, Untouched" },
      { label: "Drupe Diameter", value: "20mm – 32mm" },
    ],
  },
  {
    step: "03",
    name: "Pulp",
    tagline: "Natural Spring Cleansing",
    image: "/images/origin/brand_artisan_wash.jpg",
    tactileDesc: "Generational artisan hands in mountain riverbeds wash and gently peel away the fruit pulp with running spring water without harsh acids.",
    specs: [
      { label: "Cleansing Method", value: "Pure Glacial Water" },
      { label: "Chemicals", value: "Zero Acid / Zero Bleach" },
      { label: "Sorting", value: "Manual Water Flotation" },
    ],
  },
  {
    step: "04",
    name: "Seed / Endocarp",
    tagline: "Deep Cellular Mukhi Facets",
    image: "/images/origin/hero_journey_seed.jpg",
    tactileDesc: "Beneath the blue fruit pulp lies the rock-hard stone endocarp with natural furrowed ridges formed purely by cellular biology.",
    specs: [
      { label: "Specific Gravity", value: "> 1.25 (Natural Sinking)" },
      { label: "Seed Geometry", value: "Authentic Internal Chambers" },
      { label: "Surface Feel", value: "Warm Organic Woodstone" },
    ],
  },
  {
    step: "05",
    name: "Bead",
    tagline: "Sandalwood Oil Nourishment",
    image: "/images/origin/brand_macro_detail.jpg",
    tactileDesc: "Naturally shade-cured and nourished with pure cold-pressed sandalwood oil to preserve its porous internal micro-channels.",
    specs: [
      { label: "Conditioning", value: "Natural Sandalwood Oil" },
      { label: "Coating", value: "Zero Plastic Lacquer" },
      { label: "Tactile Grip", value: "Warm & Firm Hand Feel" },
    ],
  },
  {
    step: "06",
    name: "Mala",
    tagline: "108 Sacred Beads & Guru Knot",
    image: "/images/origin/stage9_svastiman.jpg",
    tactileDesc: "Strung on unbleached raw cotton cord with traditional knots between each bead, blessed with Vedic provenance without fear selling.",
    specs: [
      { label: "Cord Material", value: "Unbleached Cotton Thread" },
      { label: "Knotting", value: "Hand-Knotted with Guru Bead" },
      { label: "Lab Verification", value: "Certified X-Ray Report" },
    ],
  },
];

export function RudrakshaJourney() {
  const [activeStep, setActiveStep] = useState(1); // Default on Fruit stage

  const current = RUDRAKSHA_STAGES[activeStep];

  return (
    <section id="rudraksha-journey" className="py-20 sm:py-28 bg-[#F6F4EE] text-[#0C161D] relative overflow-hidden border-b border-[#E2DDD0]">
      {/* Background Micro Texture */}
      <div className="absolute inset-0 bg-[radial-gradient(#C5A880_1px,transparent_1px)] [background-size:28px_28px] opacity-[0.08] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="mb-12 sm:mb-16">
          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal text-[#1A1815] leading-[1.12] tracking-tight max-w-4xl">
            Before it was a mala, <br />
            <span className="italic text-[#7A6242] font-light">it was a fruit.</span>
          </h2>
        </div>

        {/* Interactive 6-Step Horizontal Progress Tabs */}
        <div className="grid grid-cols-3 sm:grid-cols-6 gap-2 sm:gap-3 mb-10">
          {RUDRAKSHA_STAGES.map((stage, idx) => (
            <button
              key={stage.step}
              onClick={() => setActiveStep(idx)}
              className={`p-3 sm:p-4 rounded-xl border text-left transition-all duration-300 flex flex-col justify-between ${
                idx === activeStep
                  ? "bg-[#0C161D] text-[#ECEADE] border-[#0C161D] shadow-xl scale-[1.02]"
                  : "bg-[#EDE8DC] text-stone-700 border-[#DCD6C7] hover:border-stone-400 hover:bg-white/80"
              }`}
            >
              <span className={`text-[10px] font-mono tracking-widest uppercase block mb-1 ${idx === activeStep ? "text-[#C5A880]" : "text-stone-500"}`}>
                STAGE {stage.step}
              </span>
              <span className="font-serif text-sm sm:text-base font-medium truncate w-full">
                {stage.name}
              </span>
            </button>
          ))}
        </div>

        {/* Fixed-Height Showcase Card (NO TOP OVERLAY ON IMAGE) */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 lg:p-10 border border-[#E0D9CA] shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            {/* Left: 70% Macro Photography (Completely clean of top badges) */}
            <div className="lg:col-span-8 relative aspect-[16/10] rounded-2xl overflow-hidden bg-stone-900 border border-stone-200 group">
              <Image
                src={current.image}
                alt={current.name}
                fill
                priority
                className="object-cover brightness-[0.96] contrast-[1.04] transition-all duration-700 group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 66vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent pointer-events-none" />

              {/* Bottom Title on Image Only */}
              <div className="absolute bottom-4 left-4 right-4 text-white pointer-events-none space-y-1">
                <span className="text-xs font-mono uppercase tracking-widest text-[#DFCAAB] block">
                  {current.tagline}
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-normal text-white">
                  {current.name} Stage
                </h3>
              </div>
            </div>

            {/* Right: 30% Minimal Details */}
            <div className="lg:col-span-4 flex flex-col justify-between min-h-[340px] lg:min-h-[400px] lg:pl-2">
              <div className="space-y-3.5">
                <div className="inline-flex items-center gap-2 text-[10px] font-mono tracking-widest uppercase text-[#7A6242]">
                  <Fingerprint className="w-3.5 h-3.5" />
                  <span>Tactile &amp; Botanical Profile</span>
                </div>

                <h4 className="font-serif text-2xl sm:text-3xl text-[#1A1815] font-normal leading-snug">
                  {current.tagline}
                </h4>

                <p className="text-sm text-stone-600 font-light leading-relaxed min-h-[64px]">
                  {current.tactileDesc}
                </p>

                <div className="p-3.5 sm:p-4 rounded-xl bg-[#F8F6F0] border border-[#E2DDD0] space-y-2">
                  {current.specs.map((item, i) => (
                    <div key={i} className="flex items-center justify-between text-xs py-0.5 border-b border-[#EAE5D8] last:border-0">
                      <span className="text-stone-500 font-light">{item.label}</span>
                      <span className="font-mono text-[#1A1815] font-medium">{item.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Fixed Bottom Next/Prev Buttons */}
              <div className="pt-4 border-t border-[#EAE5D8] flex items-center justify-between mt-auto">
                <button
                  onClick={() => setActiveStep((prev) => (prev > 0 ? prev - 1 : RUDRAKSHA_STAGES.length - 1))}
                  className="inline-flex items-center gap-1.5 text-xs text-stone-600 hover:text-stone-900 transition-colors uppercase tracking-wider font-mono py-2 px-3 rounded-lg hover:bg-stone-100"
                >
                  <ChevronLeft className="w-4 h-4" />
                  <span>Previous</span>
                </button>

                <button
                  onClick={() => setActiveStep((prev) => (prev < RUDRAKSHA_STAGES.length - 1 ? prev + 1 : 0))}
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#0C161D] text-[#ECEADE] rounded-full text-xs font-semibold uppercase tracking-wider hover:bg-[#7A6242] transition-colors shadow-md"
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
