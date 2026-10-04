"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ArrowRight, ChevronLeft, ChevronRight, Feather } from "lucide-react";

interface TulsiStage {
  step: string;
  name: string;
  tagline: string;
  image: string;
  desc: string;
  specs: { label: string; value: string }[];
}

const TULSI_STAGES: TulsiStage[] = [
  {
    step: "01",
    name: "Seed",
    tagline: "Temple Courtyard Germination",
    image: "/images/origin/brand_macro_detail.jpg",
    desc: "Sacred Manjari seeds ethically collected from historic Vrindavan temple courtyards, carrying generational botanical purity.",
    specs: [
      { label: "Botany", value: "Ocimum sanctum L." },
      { label: "Seed Source", value: "Vrindavan Temple Sanctums" },
      { label: "Aroma Profile", value: "High Natural Eugenol" },
    ],
  },
  {
    step: "02",
    name: "Soil",
    tagline: "Mineral-Rich Yamuna Soil",
    image: "/images/origin/stage2_river.jpg",
    desc: "Nurtured in fertile, mineral-rich riverbed alluvium with pure well water and organic compost, free from synthetic pesticides.",
    specs: [
      { label: "Geography", value: "Braj Soil & Yamuna Floodplain" },
      { label: "Soil Quality", value: "Organic Alluvial Loam" },
      { label: "Cultivation", value: "Zero Chemical Fertilizer" },
    ],
  },
  {
    step: "03",
    name: "Plant",
    tagline: "Revered Heritage Shrub",
    image: "/images/origin/tulsi_heritage_plant.jpg",
    desc: "Living holy basil shrubs revered for purifying atmospheric prana and uplifting consciousness through essential herbal oils.",
    specs: [
      { label: "Maturity", value: "2–3 Years Seasoned Shrub" },
      { label: "Pranic Quality", value: "High Vibrational Purity" },
      { label: "Habitat", value: "Traditional Terracotta Pots" },
    ],
  },
  {
    step: "04",
    name: "Leaves",
    tagline: "Therapeutic Herbal Essence",
    image: "/images/origin/brand_intro_forest.jpg",
    desc: "Fragrant purple-green serrated leaves carrying therapeutic botanical essences, harvested only with traditional respect.",
    specs: [
      { label: "Active Compounds", value: "Natural Eugenol & Rosmarinic" },
      { label: "Tradition", value: "Morning Prayer Offering" },
      { label: "Color Tone", value: "Deep Krishna Green" },
    ],
  },
  {
    step: "05",
    name: "Harvest",
    tagline: "Naturally Fallen Branches",
    image: "/images/origin/brand_intro_craft.jpg",
    desc: "Living plants are never harmed; only aged, naturally seasoned woody branches are collected after the plant has completed its natural cycle.",
    specs: [
      { label: "Ethics", value: "100% Naturally Seasoned Wood" },
      { label: "Wood Density", value: "Solid Fibrous Heartwood" },
      { label: "Harvest Timing", value: "Post-Monsoon Season" },
    ],
  },
  {
    step: "06",
    name: "Drying",
    tagline: "Zero Artificial Kiln Heat",
    image: "/images/origin/hero_journey_seed.jpg",
    desc: "Months of patient shade-curing allow the aromatic wood grain to naturally harden without cracking or losing volatile oils.",
    specs: [
      { label: "Curing Duration", value: "60–90 Days Shade Air" },
      { label: "Integrity", value: "Zero Artificial Heat Kiln" },
      { label: "Wood Grain", value: "Natural Longitudinal Fiber" },
    ],
  },
  {
    step: "07",
    name: "Mala",
    tagline: "108 Japa & Daily Meditation",
    image: "/images/origin/stage9_svastiman.jpg",
    desc: "Turned on manual micro-lathes by generational craftsmen in Vrindavan and strung on unbleached thread for sacred japa meditation.",
    specs: [
      { label: "Finish", value: "Raw Beeswax Hand Buffed" },
      { label: "Bead Sizing", value: "6mm – 8mm Uniform" },
      { label: "Tradition", value: "108 Beads with Guru Knot" },
    ],
  },
];

export function TulsiJourney() {
  const [activeStep, setActiveStep] = useState(2); // Default to Plant stage

  const current = TULSI_STAGES[activeStep];

  return (
    <section id="tulsi-journey" className="py-20 sm:py-28 bg-[#FBF9F5] text-[#0C161D] relative overflow-hidden border-b border-[#E8E2D5]">
      {/* Background Subtle Organic Texture */}
      <div className="absolute inset-0 bg-[radial-gradient(#C5A880_1px,transparent_1px)] [background-size:32px_32px] opacity-[0.08] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div className="max-w-3xl space-y-3">
            <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal text-[#1A1815] leading-[1.12] tracking-tight">
              Seed &rarr; Soil &rarr; Plant &rarr; <br className="hidden sm:inline" />
              <span className="italic text-[#7A6242] font-light">Leaves &rarr; Harvest &rarr; Drying &rarr; Mala</span>
            </h2>

            <p className="text-stone-600 font-light text-sm sm:text-base leading-relaxed pt-1 max-w-2xl">
              From temple courtyards in Vrindavan to warm, soothing beads of daily quietude. Authentic Indian holy basil heritage.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-[#F0ECE1] border border-[#C5A880]/40 max-w-xs self-start lg:self-end">
            <div className="text-[10px] font-mono uppercase tracking-widest text-[#7A6242] block mb-1">
              SACRED BOTANICAL TAXON
            </div>
            <div className="font-serif text-base text-[#1A1815]">
              Ocimum sanctum L. (Tulsi)
            </div>
          </div>
        </div>

        {/* 7-Step Horizontal Stepper */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2 sm:gap-2.5 mb-10">
          {TULSI_STAGES.map((stage, idx) => (
            <button
              key={stage.step}
              onClick={() => setActiveStep(idx)}
              className={`p-3 rounded-xl border text-left transition-all duration-300 flex flex-col justify-between ${
                idx === activeStep
                  ? "bg-[#0C161D] text-[#ECEADE] border-[#0C161D] shadow-xl scale-[1.02]"
                  : "bg-[#EFECE6] text-stone-700 border-[#DCD6C7] hover:border-stone-400 hover:bg-white"
              }`}
            >
              <span className={`text-[10px] font-mono tracking-widest uppercase block mb-1 ${idx === activeStep ? "text-[#C5A880]" : "text-stone-500"}`}>
                STAGE {stage.step}
              </span>
              <span className="font-serif text-sm font-medium truncate w-full">
                {stage.name}
              </span>
            </button>
          ))}
        </div>

        {/* Fixed-Height Showcase Card (NO TOP OVERLAY ON IMAGE) */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 lg:p-10 border border-[#E0D9CA] shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            {/* 70% Large Visual (Clean of top badges) */}
            <div className="lg:col-span-8 relative aspect-[16/10] rounded-2xl overflow-hidden bg-stone-900 border border-stone-200 group">
              <Image
                src={current.image}
                alt={current.name}
                fill
                priority
                className="object-cover brightness-[0.95] contrast-[1.03] transition-all duration-700 group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 66vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent pointer-events-none" />

              <div className="absolute bottom-4 left-4 right-4 text-white pointer-events-none space-y-1">
                <span className="text-xs font-mono uppercase tracking-widest text-[#DFCAAB] block">
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
                <div className="inline-flex items-center gap-2 text-[10px] font-mono tracking-widest uppercase text-[#7A6242]">
                  <Feather className="w-3.5 h-3.5" />
                  <span>Sacred Botanical Lineage</span>
                </div>

                <h4 className="font-serif text-2xl sm:text-3xl text-[#1A1815] font-normal leading-snug">
                  {current.tagline}
                </h4>

                <p className="text-sm text-stone-600 font-light leading-relaxed min-h-[64px]">
                  {current.desc}
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

              {/* Action Buttons */}
              <div className="pt-4 border-t border-[#EAE5D8] flex items-center justify-between mt-auto">
                <button
                  onClick={() => setActiveStep((prev) => (prev > 0 ? prev - 1 : TULSI_STAGES.length - 1))}
                  className="inline-flex items-center gap-1.5 text-xs text-stone-600 hover:text-stone-900 transition-colors uppercase tracking-wider font-mono py-2 px-3 rounded-lg hover:bg-stone-100"
                >
                  <ChevronLeft className="w-4 h-4" />
                  <span>Previous</span>
                </button>

                <button
                  onClick={() => setActiveStep((prev) => (prev < TULSI_STAGES.length - 1 ? prev + 1 : 0))}
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
