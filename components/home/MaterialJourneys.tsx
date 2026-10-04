"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ArrowRight, ChevronLeft, ChevronRight, Compass, Layers, Sparkles, CheckCircle2 } from "lucide-react";

interface JourneyStageItem {
  stageNumber: string;
  stageName: string; // Nature | Raw Material | Human Craft | Finished Product
  headline: string;
  image: string;
  badge: string;
  caption: string;
  specs: string[];
}

interface MaterialStory {
  id: "rudraksha" | "tulsi" | "gemstones";
  name: string;
  botanical: string;
  origin: string;
  summary: string;
  fourStages: JourneyStageItem[];
}

const MATERIAL_STORIES: Record<string, MaterialStory> = {
  rudraksha: {
    id: "rudraksha",
    name: "Sacred Rudraksha",
    botanical: "Elaeocarpus ganitrus Roxb.",
    origin: "Upper Himalayan Cloud Forests (2,200m)",
    summary: "From high altitude wild flowers to lab-certified sacred malas.",
    fourStages: [
      {
        stageNumber: "01",
        stageName: "NATURE",
        headline: "Wild Cloud Forest & Fruit",
        image: "/images/origin/hero_journey_fruit.jpg",
        badge: "Untouched High Altitude",
        caption: "Ripens as an electric-blue botanical fruit in the dense Himalayan canopy before human hands ever touch it.",
        specs: ["2,200m Elevation", "Monsoon Nurtured", "100% Wild Sourced"],
      },
      {
        stageNumber: "02",
        stageName: "RAW MATERIAL",
        headline: "Organic Lignified Seed",
        image: "/images/origin/hero_journey_seed.jpg",
        badge: "Untreated Stone Endocarp",
        caption: "Deep furrowed mukhi facets formed strictly through natural cellular growth — hard, fibrous, and energetically intact.",
        specs: ["Authentic Mukhi Facets", "Zero Synthetic Resin", "Natural Geometry"],
      },
      {
        stageNumber: "03",
        stageName: "HUMAN CRAFT",
        headline: "Riverbed Spring Cleansing",
        image: "/images/origin/brand_artisan_wash.jpg",
        badge: "Hand-Honored Artisan Craft",
        caption: "Generational artisans gently brush away botanical skin with pure running mountain spring water without harsh acids.",
        specs: ["100% Spring Water", "Zero Chemical Acid", "Hand-Sorted Density"],
      },
      {
        stageNumber: "04",
        stageName: "FINISHED PIECE",
        headline: "Svastimān Sanctified Mala",
        image: "/images/origin/stage9_svastiman.jpg",
        badge: "Lab-Certified Provenance",
        caption: "Individually hand-knotted on unbleached natural cord, verified with laboratory X-ray provenance.",
        specs: ["Lab X-Ray Verified", "Traditional Hand Knots", "No Astrological Fear"],
      },
    ],
  },
  tulsi: {
    id: "tulsi",
    name: "Sacred Tulsi Wood",
    botanical: "Ocimum sanctum L.",
    origin: "Vrindavan & Sacred Braj Groves",
    summary: "Aromatic holy basil aged naturally into serene tactile beads.",
    fourStages: [
      {
        stageNumber: "01",
        stageName: "NATURE",
        headline: "Vrindavan Temple Groves",
        image: "/images/origin/tulsi_heritage_plant.jpg",
        badge: "Sacred Soil & Sunlight",
        caption: "Revered sacred herb cultivated in historic temple courtyards under organic traditional care.",
        specs: ["Temple Courtyard Grown", "Pure Morning Prana", "Sacred Braj Soil"],
      },
      {
        stageNumber: "02",
        stageName: "RAW MATERIAL",
        headline: "Naturally Seasoned Wood",
        image: "/images/origin/brand_intro_craft.jpg",
        badge: "Naturally Fallen Branches",
        caption: "Collected only after mature branches have naturally hardened, carrying therapeutic natural eugenol essences.",
        specs: ["Ethically Harvested", "Shade-Cured Wood", "Aromatic Core Grain"],
      },
      {
        stageNumber: "03",
        stageName: "HUMAN CRAFT",
        headline: "Micro-Lathe Hand Turning",
        image: "/images/origin/rudraksha_hand_clean.jpg",
        badge: "Traditional Artisan Woodcraft",
        caption: "Shaped bead-by-bead on manual foot-lathes by generational craftsmen without chemical sealants or synthetic gloss.",
        specs: ["Hand-Turned Grain", "Raw Beeswax Buffing", "Zero Toxic Varnish"],
      },
      {
        stageNumber: "04",
        stageName: "FINISHED PIECE",
        headline: "108 Japa & Daily Mala",
        image: "/images/origin/stage9_svastiman.jpg",
        badge: "Mindful Sacred Touch",
        caption: "Lightweight, calming, and naturally fragrant for daily meditation, japa chanting, and mindful presence.",
        specs: ["Natural Eugenol Fragrance", "Smooth Tactile Feel", "Traditional Guru Bead"],
      },
    ],
  },
  gemstones: {
    id: "gemstones",
    name: "Earth Gemstones",
    botanical: "Natural Mineral Geology",
    origin: "Himalayan Strata & Jaipur Lapidary",
    summary: "Untreated raw minerals cut without glass or synthetic fillers.",
    fourStages: [
      {
        stageNumber: "01",
        stageName: "NATURE",
        headline: "Subterranean Veins",
        image: "/images/origin/stage1_mountain.jpg",
        badge: "Geological Formation",
        caption: "Formed deep beneath tectonic pressure over millions of years, carrying authentic natural crystal lattices.",
        specs: ["Millennia Earth Pressure", "Unheated Mineral Veins", "Raw Natural Matrix"],
      },
      {
        stageNumber: "02",
        stageName: "RAW MATERIAL",
        headline: "Rough Crystal Matrix",
        image: "/images/origin/brand_macro_detail.jpg",
        badge: "Authentic Rough Specimen",
        caption: "Unheated, non-irradiated boulder specimens with real internal inclusions and geological fingerprints.",
        specs: ["Zero Heat Treatment", "Natural Mineral Inclusions", "Cold Heavy Feel"],
      },
      {
        stageNumber: "03",
        stageName: "HUMAN CRAFT",
        headline: "Water-Cooled Lapidary",
        image: "/images/origin/raw_gemstone_craft.jpg",
        badge: "Jaipur Lapidary Tradition",
        caption: "Cut and diamond-shaped by heritage stone artisans using water wheels, preserving natural crystalline vibration.",
        specs: ["Water-Wheel Shaping", "Diamond Hand Polish", "Zero Dye Infusion"],
      },
      {
        stageNumber: "04",
        stageName: "FINISHED PIECE",
        headline: "Raw Earth Stone Bracelet",
        image: "/images/origin/stage9_svastiman.jpg",
        badge: "Lab-Certified Authenticity",
        caption: "Custom-fitted with high-durability elastic cord and verified with certified mineralogical test reports.",
        specs: ["Certified Natural Stone", "No Plastic Beads", "Honest Indian Pricing"],
      },
    ],
  },
};

export function MaterialJourneys() {
  const [activeTab, setActiveTab] = useState<"rudraksha" | "tulsi" | "gemstones">("rudraksha");

  const story = MATERIAL_STORIES[activeTab];

  return (
    <section id="material-journeys" className="py-20 sm:py-28 lg:py-32 bg-[#0C161D] text-[#ECEADE] relative overflow-hidden border-y border-[#C5A880]/20">
      {/* Background Subtle Organic Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(#C5A880_1px,transparent_1px)] [background-size:32px_32px] opacity-[0.08] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
        {/* Header Block: Minimal Luxury Editorial */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#18232C] border border-[#C5A880]/30 text-[10px] sm:text-[11px] font-mono tracking-[0.25em] uppercase text-[#DFCAAB]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#38BDF8] animate-pulse" />
              <span>3. Journey of Sacred Materials</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal text-white leading-[1.12] tracking-tight">
              Nature &rarr; Raw Material &rarr; <br className="hidden sm:inline" />
              <span className="italic text-[#DFCAAB] font-light">Human Craft &rarr; Finished Form</span>
            </h2>

            <p className="text-stone-300 font-light text-sm sm:text-base max-w-xl">
              Witness the authentic 4-step transformation. Minimal text, maximum documentary visual proof.
            </p>
          </div>

          {/* Material Category Switcher Tabs */}
          <div className="flex items-center gap-2 bg-[#162028] p-1.5 rounded-full border border-white/10 self-start lg:self-end shadow-xl">
            {(["rudraksha", "tulsi", "gemstones"] as const).map((mat) => (
              <button
                key={mat}
                onClick={() => setActiveTab(mat)}
                className={`px-4 sm:px-5 py-2 rounded-full text-xs font-medium tracking-wider uppercase transition-all duration-300 ${
                  activeTab === mat
                    ? "bg-[#C5A880] text-[#0C161D] font-bold shadow-lg"
                    : "text-stone-300 hover:text-white hover:bg-white/5"
                }`}
              >
                {mat === "rudraksha" ? "Rudraksha" : mat === "tulsi" ? "Tulsi Wood" : "Earth Gemstones"}
              </button>
            ))}
          </div>
        </div>

        {/* 4-Step Linear Progression Cards (Mobile Horizontal Swipe / Desktop 4-col Grid) */}
        <div className="flex sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 overflow-x-auto sm:overflow-x-visible snap-x snap-mandatory no-scrollbar -mx-5 px-5 sm:mx-0 sm:px-0 pb-4 sm:pb-0">
          {story.fourStages.map((stage) => (
            <div
              key={stage.stageNumber}
              className="group relative rounded-2xl overflow-hidden bg-[#141E26] border border-[#C5A880]/20 hover:border-[#C5A880]/60 shadow-xl hover:shadow-2xl transition-all duration-500 flex flex-col justify-between shrink-0 w-[78vw] xs:w-[68vw] sm:w-auto snap-center"
            >
              {/* Clean Image Container */}
              <div className="relative w-full aspect-[4/5] overflow-hidden bg-black">
                <Image
                  src={stage.image}
                  alt={stage.headline}
                  fill
                  className="object-cover brightness-[0.92] contrast-[1.04] group-hover:scale-105 transition-transform duration-700 ease-out"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
              </div>

              {/* Minimal Clean Headline Below Image */}
              <div className="p-4 bg-[#141E26] flex items-center justify-between border-t border-white/5">
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#C5A880] block">
                    STAGE {stage.stageNumber} &bull; {stage.stageName}
                  </span>
                  <h3 className="font-serif text-base font-normal text-white leading-snug">
                    {stage.headline}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Provenance & Next Action Bar */}
        <div className="mt-12 pt-6 border-t border-white/15 flex flex-wrap items-center justify-between gap-4 text-xs text-stone-400 font-mono">
          <div className="flex items-center gap-2 text-[#DFCAAB]">
            <span className="w-2 h-2 rounded-full bg-[#C5A880] animate-ping" />
            <span className="uppercase tracking-widest">
              {story.name} &bull; {story.origin}
            </span>
          </div>

          <a
            href="#featured-products"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#F7F5F0] hover:bg-[#C5A880] text-[#0C161D] text-xs font-semibold tracking-wider uppercase transition-all duration-300 shadow-md group"
          >
            <span>View Finished Collection</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
}
