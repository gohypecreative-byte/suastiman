"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Compass, CheckCircle2 } from "lucide-react";

interface NaturalStage {
  step: string;
  badge: string;
  tagline: string;
  title: string;
  caption: string;
  image: string;
  elevation: string;
  provenance: string;
}

// Exactly 9 Authentic Sequential Stages:
// Mountain (01) -> River (02) -> Forest (03) -> Tree (04) -> Flower (05) -> Fruit (06) -> Rudraksha Seed (07) -> Hand Cleansing (08) -> Svastiman (09)
const NINE_STAGES: NaturalStage[] = [
  {
    step: "01",
    badge: "STAGE 01 • MOUNTAIN SOURCE",
    tagline: "ROOTED IN SACRED GEOGRAPHY",
    title: "Where altitude meets sanctity.",
    caption: "High in the Himalayan heights (2,000m+), glacial winds and mineral-rich soils create the sole habitat where sacred life begins.",
    image: "/images/origin/stage1_mountain.jpg",
    elevation: "2,400m Himalayas",
    provenance: "Sacred Upper Valleys",
  },
  {
    step: "02",
    badge: "STAGE 02 • GLACIAL RIVER",
    tagline: "PURE MELTWATER CURRENTS",
    title: "Carried by glacial springs.",
    caption: "Perennial mountain streams carry pure glacial minerals into deep valley slopes, feeding the roots of undisturbed alpine groves.",
    image: "/images/origin/stage2_river.jpg",
    elevation: "2,100m Valley",
    provenance: "Glacial Spring Network",
  },
  {
    step: "03",
    badge: "STAGE 03 • UNTOUCHED FOREST",
    tagline: "DENSE CLOUD RAINFORESTS",
    title: "Sheltered by mountain mist.",
    caption: "Untouched Himalayan rainforests where diverse flora thrives under dense monsoon cloud cover, isolated from human pollution.",
    image: "/images/origin/stage3_forest.jpg",
    elevation: "1,950m Cloud Belt",
    provenance: "Temperate Alpine Forest",
  },
  {
    step: "04",
    badge: "STAGE 04 • ANCIENT TREE",
    tagline: "ELAEOCARPUS GANITRUS ROXB.",
    title: "Decades in sacred soil.",
    caption: "Towering Elaeocarpus evergreen trees growing undisturbed for centuries, gathering the energy of alpine soil and mountain rains.",
    image: "/images/origin/hero_journey_tree.jpg",
    elevation: "1,800m Altitude",
    provenance: "Living Botanical Heritage",
  },
  {
    step: "05",
    badge: "STAGE 05 • SACRED BLOSSOM",
    tagline: "DELICATE MONSOON BLOOM",
    title: "Ethereal white dawn petals.",
    caption: "Fringed white bell blossoms bloom quietly with the mountain rains, pollinated by high-altitude bees before setting fruit.",
    image: "/images/origin/hero_journey_flower.jpg",
    elevation: "1,700m Canopy",
    provenance: "Seasonal Monsoon Bloom",
  },
  {
    step: "06",
    badge: "STAGE 06 • THE BOTANICAL FRUIT",
    tagline: "BEFORE IT WAS A MALA, IT WAS A FRUIT.",
    title: "Nature precedes ritual.",
    caption: "High in the cloud forests, the sacred Rudraksha ripens as a vibrant electric-blue botanical fruit before human hands ever touch it.",
    image: "/images/origin/hero_journey_fruit.jpg",
    elevation: "1,600m Sacred Grove",
    provenance: "100% Wild Organic Fruit",
  },
  {
    step: "07",
    badge: "STAGE 07 • RAW STONE SEED",
    tagline: "SACRED CELLULAR GEOMETRY",
    title: "The natural mukhi seed.",
    caption: "Beneath the blue fruit pulp lies the hard stone endocarp—furrowed with authentic mukhi facets formed entirely by nature's geometry.",
    image: "/images/origin/hero_journey_seed.jpg",
    elevation: "1,500m River Stone",
    provenance: "Raw Uncarved Endocarp",
  },
  {
    step: "08",
    badge: "STAGE 08 • HAND CLEANSING",
    tagline: "HONORED BY HUMAN HANDS",
    title: "River water, patience & care.",
    caption: "Generational artisans in mountain riverbeds gently peel away the fruit pulp with spring water, revealing pristine grooves without acid or chemicals.",
    image: "/images/origin/hero_journey_wash.jpg",
    elevation: "1,400m Spring Bed",
    provenance: "Traditional Spring Washing",
  },
  {
    step: "09",
    badge: "STAGE 09 • SVASTIMĀN ARCHIVE",
    tagline: "SACRED FORM & LAB PROVENANCE",
    title: "From origin to your hands.",
    caption: "Preserving raw integrity, verifying every mukhi with lab standards, and honoring the sacred object with traditional context, not fear.",
    image: "/images/origin/stage9_svastiman.jpg",
    elevation: "Sanctified Form",
    provenance: "Lab-Tested & Verified",
  },
];

export function HeroBanner() {
  const [activeIndex, setActiveIndex] = useState(0); // Default start on iconic Stage 01: mountain

  // Smooth continuous sequence autoplay (1 -> 2 -> 3 -> 4 -> 5 -> 6 -> 7 -> 8 -> 9 -> repeat)
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % NINE_STAGES.length);
    }, 5500);
    return () => clearInterval(timer);
  }, []);

  const current = NINE_STAGES[activeIndex];

  return (
    <section className="relative w-full h-[calc(100vh-116px)] min-h-[700px] bg-[#122E46] text-[#ECEADE] overflow-hidden flex flex-col justify-between border-b border-[#C5A880]/20 select-none">
      {/* Background Photography with Smooth Crossfade & High Natural Clarity (Light & Bright) */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {NINE_STAGES.map((stage, idx) => (
          <div
            key={stage.step}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${idx === activeIndex ? "opacity-100 scale-100" : "opacity-0 scale-105 pointer-events-none"
              }`}
            style={{ transitionDuration: "1200ms" }}
          >
            <Image
              src={stage.image}
              alt={stage.title}
              fill
              priority={idx === 5 || idx === 0}
              className="object-cover object-center brightness-[0.93] contrast-[1.03] transition-transform duration-[10000ms] ease-out scale-105"
              sizes="100vw"
            />
          </div>
        ))}

        {/* Soft, light organic gradient for clear text contrast without turning image dark */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#122E46]/90 via-[#122E46]/25 to-black/20 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#122E46]/85 via-[#122E46]/20 to-transparent pointer-events-none" />
      </div>

      {/* Top Header Area (Empty but keeping padding to maintain structure) */}
      <div className="relative z-10 p-6 sm:p-10 flex flex-wrap items-center justify-end gap-4">
      </div>

      {/* Main Content Area: The Original Exact Copy & Structure */}
      <div className="relative z-10 px-6 sm:px-12 lg:px-16 pb-14 sm:pb-16 lg:pb-20 max-w-4xl">
        <div className="space-y-4">
          <p className="text-xs sm:text-sm font-semibold tracking-[0.3em] uppercase text-[#DFCAAB] drop-shadow-sm flex items-center gap-2">
            <span className="w-8 h-[1px] bg-[#DFCAAB]" />
            {current.tagline}
          </p>

          <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-normal text-white leading-[1.08] tracking-tight drop-shadow-md">
            {current.title}
          </h1>

          <div className="pt-6 flex flex-wrap items-center gap-4">
            <a
              href="#origin-philosophy"
              className="inline-flex items-center gap-3 px-7 py-3.5 bg-[#F9F8F5] text-[#122E46] text-xs font-semibold tracking-[0.15em] uppercase rounded-sm hover:bg-[#C5A880] hover:text-white transition-colors duration-300 group/btn shadow-lg"
            >
              <span>Explore The Origin Journey</span>
              <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
            </a>

            <a
              href="#material-journeys"
              className="inline-flex items-center gap-2.5 px-6 py-3.5 bg-black/40 hover:bg-black/60 text-[#ECEADE] text-xs font-medium tracking-[0.15em] uppercase rounded-sm backdrop-blur-md border border-white/20 transition-colors"
            >
              <span>Material Archives</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
