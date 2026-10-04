"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ChevronRight, ChevronLeft, ShieldCheck, Compass } from "lucide-react";

interface OriginStep {
  step: string;
  name: string;
  subhead: string;
  desc: string;
  image: string;
  alt: string;
  tag: string;
  elevation: string;
}

const originSteps: OriginStep[] = [
  {
    step: "01",
    name: "MOUNTAIN",
    subhead: "The Heights of the Himalayas",
    desc: "Glacial winds, sub-alpine altitude (1,500m+), and mineral-rich soils create the sole habitat where sacred Elaeocarpus trees flourish.",
    image: "/images/origin/stage1_mountain.jpg",
    alt: "Himalayan Mountain Range",
    tag: "GEOGRAPHY",
    elevation: "2,400m Himalayas",
  },
  {
    step: "02",
    name: "RIVER",
    subhead: "Glacial Meltwaters",
    desc: "Perennial mountain streams carry mineral nutrients into deep valley slopes, nourishing the root systems of ancient growth.",
    image: "/images/origin/stage2_river.jpg",
    alt: "Glacial River Stream",
    tag: "SOURCE",
    elevation: "2,100m Valley",
  },
  {
    step: "03",
    name: "FOREST",
    subhead: "Untouched Canopy",
    desc: "Dense, mist-shrouded temperate rainforests where trees grow undisturbed for centuries under monsoon cloud cover.",
    image: "/images/origin/hero_journey_mountain.jpg",
    alt: "Himalayan Forest Canopy",
    tag: "ECOLOGY",
    elevation: "1,950m Cloud Belt",
  },
  {
    step: "04",
    name: "TREE",
    subhead: "Elaeocarpus Ganitrus",
    desc: "Towering up to 60 feet tall, these broad-leaved evergreen trees produce sacred wood and medicinal botanical compounds.",
    image: "/images/origin/hero_journey_tree.jpg",
    alt: "Ancient Elaeocarpus Tree",
    tag: "BOTANY",
    elevation: "1,800m Altitude",
  },
  {
    step: "05",
    name: "FLOWER",
    subhead: "Dawn Blossoms",
    desc: "Fringed white blossoms open quietly with the monsoon rains, pollinated by high-altitude bees before setting fruit.",
    image: "/images/origin/hero_journey_flower.jpg",
    alt: "Delicate Blossoms",
    tag: "BLOOM",
    elevation: "1,700m Canopy",
  },
  {
    step: "06",
    name: "FRUIT",
    subhead: "Electric Blue Pearls",
    desc: "Before it was a mala, it was a fruit. Ripe Rudraksha fruits glow with a natural vivid cyan blue skin, unique in plant biology.",
    image: "/images/origin/hero_journey_fruit.jpg",
    alt: "Blue Rudraksha Fruit",
    tag: "ORGANIC",
    elevation: "1,600m Sacred Grove",
  },
  {
    step: "07",
    name: "RUDRAKSHA",
    subhead: "The Natural Endocarp",
    desc: "Beneath the blue fruit pulp lies the stone seed—hard, furrowed, featuring natural mukhi facets formed entirely by cellular geometry.",
    image: "/images/origin/hero_journey_seed.jpg",
    alt: "Raw Rudraksha Seed",
    tag: "SEED",
    elevation: "1,500m River Stone",
  },
  {
    step: "08",
    name: "HUMAN HAND CLEANING",
    subhead: "River Washing & Patient Sorting",
    desc: "No acid, no artificial dyes. Generational artisan hands wash the seeds in running water, brushing away pulp to reveal raw grooves.",
    image: "/images/origin/hero_journey_wash.jpg",
    alt: "Artisan Hands Cleaning Seeds",
    tag: "CRAFT",
    elevation: "1,400m Spring Bed",
  },
  {
    step: "09",
    name: "SVASTIMĀN",
    subhead: "Sacred Form & Knowledge",
    desc: "Preserving the source, verifying the authenticity, and handing over the sacred object with traditional context, not fear.",
    image: "/images/origin/stage9_svastiman.jpg",
    alt: "Svastiman Heritage Mala",
    tag: "HONOR",
    elevation: "Sanctified Mala",
  },
];

export function OriginJourney() {
  const [activeStepIndex, setActiveStepIndex] = useState(5); // Default to Stage 06: Fruit

  const active = originSteps[activeStepIndex];

  return (
    <section id="origin-philosophy" className="py-20 sm:py-28 bg-[#0C161D] text-[#ECEADE] relative overflow-hidden border-b border-[#C5A880]/20">
      {/* Background Subtle Line Pattern */}
      <div className="absolute inset-0 bg-celestial-pattern opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
        {/* Section Header: Exact User Requested Text */}
        <div className="max-w-3xl mb-12 sm:mb-16 space-y-3">
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#132532] border border-[#C5A880]/30 text-[10px] sm:text-[11px] font-mono tracking-[0.25em] uppercase text-[#C5A880]">
            <span>The Natural-Origin Visual Language</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal text-white leading-[1.12] tracking-tight">
            Before it was a mala, <br />
            <span className="italic text-[#DFCAAB] font-light">it was a fruit.</span>
          </h2>

          <p className="text-stone-300 text-sm sm:text-base font-light leading-relaxed pt-1 max-w-2xl">
            Svastimān begins with the soil, the altitude, and the botanical lifecycle. We do not manufacture claims—we trace every sacred material to its natural origin.
          </p>
        </div>

        {/* 9-Step Horizontal Sequence Stepper */}
        <div className="mb-10">
          <div className="text-[10px] sm:text-[11px] font-mono tracking-widest text-[#C5A880] uppercase mb-3.5 flex items-center gap-2">
            <span>THE 9-STAGE ORIGIN SEQUENCE</span>
            <span className="h-[1px] flex-1 bg-[#C5A880]/20" />
          </div>

          <div className="grid grid-cols-3 sm:grid-cols-5 lg:grid-cols-9 gap-2">
            {originSteps.map((s, idx) => {
              const isSelected = idx === activeStepIndex;
              return (
                <button
                  key={s.step}
                  onClick={() => setActiveStepIndex(idx)}
                  className={`relative p-2.5 sm:p-3 rounded-lg border text-left transition-all duration-300 ${
                    isSelected
                      ? "bg-[#182C3D] border-[#C5A880] shadow-lg shadow-[#C5A880]/15 scale-[1.02]"
                      : "bg-[#101D27]/80 border-white/10 hover:border-white/20 hover:bg-[#132532]"
                  }`}
                >
                  <span className={`block font-mono text-[10px] tracking-wider mb-0.5 ${isSelected ? "text-[#C5A880]" : "text-stone-500"}`}>
                    {s.step}
                  </span>
                  <span className={`block text-[11px] font-semibold tracking-wider uppercase truncate ${isSelected ? "text-white" : "text-stone-300"}`}>
                    {s.name}
                  </span>

                  {isSelected && (
                    <span className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-2 h-2 bg-[#C5A880] rotate-45" />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Fixed-Height Showcase Card (NO JUMPING ON NEXT/PREV) */}
        <div className="bg-[#101D27] rounded-3xl p-6 sm:p-8 lg:p-10 border border-white/10 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            {/* Left: 70% Photography with Fixed Aspect Ratio */}
            <div className="lg:col-span-8 relative aspect-[16/10] sm:aspect-[16/9] rounded-2xl overflow-hidden bg-black border border-white/10 group">
              <Image
                src={active.image}
                alt={active.alt}
                fill
                priority
                className="object-cover brightness-[0.93] contrast-[1.04] transition-all duration-700 group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 66vw"
              />

              {/* Top Tag Overlay */}
              <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/20 text-[10px] font-mono tracking-widest text-[#DFCAAB] uppercase pointer-events-none">
                STAGE {active.step} &bull; {active.tag}
              </div>

              {/* Bottom Image Overlay */}
              <div className="absolute bottom-4 left-4 right-4 bg-black/70 backdrop-blur-md p-3.5 sm:p-4 rounded-xl border border-white/10 flex items-center justify-between pointer-events-none">
                <div>
                  <span className="text-white text-sm font-serif font-medium block">{active.name}</span>
                  <p className="text-stone-300 text-xs font-light">{active.subhead}</p>
                </div>
                <span className="text-[#C5A880] text-[10px] font-mono tracking-widest uppercase bg-[#182C3D] px-2.5 py-1 rounded">
                  {active.elevation}
                </span>
              </div>
            </div>

            {/* Right: Fixed-Height 30% Editorial Details (Smooth, No Layout Shift) */}
            <div className="lg:col-span-4 flex flex-col justify-between min-h-[320px] lg:min-h-[380px] lg:pl-2">
              <div className="space-y-4">
                <div className="space-y-1.5">
                  <span className="text-xs font-mono tracking-widest text-[#C5A880] uppercase block">
                    PHASE {active.step} OF 09
                  </span>
                  <h3 className="font-serif text-3xl sm:text-4xl text-white font-normal leading-tight">
                    {active.name}
                  </h3>
                  <p className="text-xs font-serif italic text-[#DFCAAB] tracking-wide">
                    &ldquo;{active.subhead}&rdquo;
                  </p>
                </div>

                {/* Fixed line height for consistent card height */}
                <p className="text-sm text-stone-300 font-light leading-relaxed min-h-[72px]">
                  {active.desc}
                </p>
              </div>

              {/* Static Fixed Action Bar */}
              <div className="pt-4 border-t border-white/10 flex items-center justify-between mt-auto">
                <button
                  onClick={() => setActiveStepIndex((prev) => (prev === 0 ? originSteps.length - 1 : prev - 1))}
                  className="inline-flex items-center gap-1.5 text-xs text-stone-400 hover:text-white uppercase tracking-wider transition-colors py-2 px-3 rounded-lg hover:bg-white/5"
                >
                  <ChevronLeft className="w-4 h-4" />
                  <span>Previous</span>
                </button>

                <button
                  onClick={() => setActiveStepIndex((prev) => (prev === originSteps.length - 1 ? 0 : prev + 1))}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#C5A880] text-[#0C161D] text-xs font-semibold uppercase tracking-wider hover:bg-white transition-colors shadow-lg"
                >
                  <span>Next Stage</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Minimal Quote Footer */}
        <div className="mt-10 text-center max-w-2xl mx-auto py-5 border-y border-white/10">
          <p className="font-serif italic text-sm sm:text-base text-stone-300">
            &ldquo;SVASTIMAN is not trying to sell spirituality. We help you understand and experience India&apos;s spiritual heritage through authentic materials, traditional knowledge, and thoughtful modern design.&rdquo;
          </p>
        </div>
      </div>
    </section>
  );
}
