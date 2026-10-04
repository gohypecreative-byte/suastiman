"use client";

import React from "react";
import Image from "next/image";
import { CheckCircle2, Feather, Compass, Sparkles } from "lucide-react";

interface CraftStep {
  step: string;
  name: string;
  action: string;
  image: string;
  desc: string;
  provenance: string;
}

const CRAFT_STEPS: CraftStep[] = [
  {
    step: "01",
    name: "Spring Cleaning",
    action: "Natural Pulp Peeling",
    image: "/images/origin/brand_artisan_wash.jpg",
    desc: "Washed solely in running Himalayan spring water, removing the blue botanical peel with gentle hand brushes.",
    provenance: "Zero Chemical Acids",
  },
  {
    step: "02",
    name: "Manual Sorting",
    action: "Flotation Density Grading",
    image: "/images/origin/hero_journey_seed.jpg",
    desc: "Hand-tested in cold water for natural sinking density and examined for intact internal mukhi locules.",
    provenance: "100% Intact Geometry",
  },
  {
    step: "03",
    name: "Water-Wheel Cutting",
    action: "Jaipur Heritage Lapidary",
    image: "/images/origin/raw_gemstone_craft.jpg",
    desc: "Raw earth stones sliced and shaped on continuous water-cooled wheels, preserving crystalline structure.",
    provenance: "Zero Heat Treatment",
  },
  {
    step: "04",
    name: "Lathe Wood Turning",
    action: "Vrindavan Tulsi Craft",
    image: "/images/origin/tulsi_heritage_plant.jpg",
    desc: "Seasoned branches shaped bead-by-bead on manual foot-powered lathes, buffed with raw unbleached beeswax.",
    provenance: "Zero Toxic Varnish",
  },
  {
    step: "05",
    name: "Cotton Threading",
    action: "Brahmagranthi Hand Knotting",
    image: "/images/origin/brand_macro_detail.jpg",
    desc: "Each sacred bead individually knotted on pure unbleached cotton cord with traditional Guru bead alignment.",
    provenance: "Traditional Hand Knotting",
  },
  {
    step: "06",
    name: "Final Sanctification",
    action: "Sandalwood Oil Curing",
    image: "/images/origin/stage9_svastiman.jpg",
    desc: "Conditioned with pure Mysore sandalwood oil to seal the natural porous micro-channels before handover.",
    provenance: "Living Sacred Heirloom",
  },
];

export function Craftsmanship() {
  return (
    <section id="craftsmanship" className="py-20 sm:py-28 bg-[#0C161D] text-[#ECEADE] relative overflow-hidden border-b border-[#C5A880]/20">
      {/* Background Subtle Texture */}
      <div className="absolute inset-0 bg-[radial-gradient(#C5A880_1px,transparent_1px)] [background-size:32px_32px] opacity-[0.06] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
        {/* Header */}
        <div className="max-w-3xl mb-12 sm:mb-16 space-y-3">
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#18232C] border border-[#C5A880]/30 text-[10px] sm:text-[11px] font-mono tracking-[0.25em] uppercase text-[#DFCAAB]">
            <Feather className="w-3.5 h-3.5" />
            <span>8. Authentic Craftsmanship</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal text-white leading-[1.12] tracking-tight">
            Made by Human Hands. <br />
            <span className="italic text-[#DFCAAB] font-light">Shaped by generational patience.</span>
          </h2>

          <p className="text-stone-300 font-light text-sm sm:text-base leading-relaxed pt-1 max-w-2xl">
            Cleaning, sorting, cutting, polishing, threading, and assembling. Real close-up photography of authentic Indian artisans at work.
          </p>
        </div>

        {/* 6-Craftsmanship Steps Grid (70% Visual Photography) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {CRAFT_STEPS.map((craft) => (
            <div
              key={craft.step}
              className="group relative rounded-2xl overflow-hidden bg-[#141E26] border border-white/10 hover:border-[#C5A880]/50 shadow-xl transition-all duration-500 flex flex-col justify-between"
            >
              {/* Image (75% Dominance) */}
              <div className="relative w-full aspect-[4/3] overflow-hidden bg-black">
                <Image
                  src={craft.image}
                  alt={craft.name}
                  fill
                  className="object-cover brightness-[0.92] contrast-[1.04] group-hover:scale-105 transition-transform duration-700 ease-out"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#141E26] via-transparent to-transparent pointer-events-none" />

                <div className="absolute bottom-2.5 left-3.5 right-3.5 pointer-events-none">
                  <span className="text-xs font-mono uppercase tracking-wider text-[#C5A880] block">
                    {craft.action}
                  </span>
                </div>
              </div>

              {/* Minimal Text Context (25% Clean Info) */}
              <div className="p-4 sm:p-5 space-y-2.5 bg-[#141E26]">
                <p className="text-xs text-stone-300 font-light leading-relaxed">
                  {craft.desc}
                </p>

                <div className="pt-2 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-stone-400">
                  <span className="text-[#DFCAAB]">{craft.provenance}</span>
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#C5A880]" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
