"use client";

import React, { useState } from "react";
import Image from "next/image";
import { BookOpen, Sparkles, Compass, ShieldCheck, ArrowRight, ChevronRight, CheckCircle2 } from "lucide-react";

interface TraditionCard {
  id: string;
  category: string;
  title: string;
  subtitle: string;
  image: string;
  reference: string;
  desc: string;
  keyInsight: string;
}

const TRADITION_KNOWLEDGE: TraditionCard[] = [
  {
    id: "rudraksha-science",
    category: "BOTANICAL TRADITION",
    title: "Why Rudraksha is an Endocarp, Not Wood",
    subtitle: "The bio-electric resonance of Elaeocarpus ganitrus",
    image: "/images/origin/hero_journey_seed.jpg",
    reference: "Shiva Purana (Vidyeshvara Samhita)",
    desc: "Formed with internal cellular locules, natural Rudraksha seeds exhibit stabilizing dielectric capacitance when worn against pulse points. Never softening with age, it naturally petrifies.",
    keyInsight: "Zero chemical varnish: pure sandalwood oil allows natural seed pores to breathe.",
  },
  {
    id: "tulsi-heritage",
    category: "SACRED HERBAL HERITAGE",
    title: "The Living Sanctity of Vrindavan Tulsi Wood",
    subtitle: "Why Holy Basil wood carries lasting therapeutic coolness",
    image: "/images/origin/tulsi_heritage_plant.jpg",
    reference: "Padma Purana & Charaka Samhita",
    desc: "Aged Tulsi heartwood is dense in natural phenolic eugenol compounds. Friction against skin warmth gently releases micro-aromatic herbal volatiles that calm sensory restlessness.",
    keyInsight: "Naturally fallen mature branches harvested without harming living green plants.",
  },
  {
    id: "108-ratio",
    category: "ASTRONOMICAL SACRED RATIO",
    title: "The Cosmic Mathematics of the 108 Count",
    subtitle: "Why Vedic malas are structured in exact 108 beads",
    image: "/images/origin/stage9_svastiman.jpg",
    reference: "Surya Siddhanta & Vedic Astronomy",
    desc: "The solar distance is exactly 108 times the Sun's diameter. In subtle human physiology, 108 energetic nadis converge at the heart center (Anahata) during rhythmic japa breathwork.",
    keyInsight: "108 is astronomical geometry linking universal distance with individual breath.",
  },
  {
    id: "earth-crystals",
    category: "GEMOLOGICAL INTEGRITY",
    title: "Natural Inclusions: Earth's Geological Fingerprint",
    subtitle: "Distinguishing untreated minerals from dyed commercial glass",
    image: "/images/origin/brand_macro_detail.jpg",
    reference: "Ratnapariksha by Buddhabhatta",
    desc: "Real earth stones contain microscopic pyrite veins and crystal growth planes formed over millennia under tectonic compression. Real stones are instantly cold to skin contact.",
    keyInsight: "Real minerals never look like flat colored plastic; internal inclusions prove authenticity.",
  },
];

export function KnowYourTradition() {
  const [activeId, setActiveId] = useState(TRADITION_KNOWLEDGE[0].id);

  const active = TRADITION_KNOWLEDGE.find((item) => item.id === activeId) || TRADITION_KNOWLEDGE[0];

  return (
    <section id="know-your-tradition" className="py-20 sm:py-28 bg-[#F6F4EE] text-[#0C161D] relative overflow-hidden border-b border-[#E2DDD0]">
      {/* Subtle Texture */}
      <div className="absolute inset-0 bg-[radial-gradient(#C5A880_1px,transparent_1px)] [background-size:28px_28px] opacity-[0.08] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
        {/* Header */}
        <div className="max-w-3xl mb-12 sm:mb-16 space-y-3">
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#EAE5D8] border border-[#C5A880]/30 text-[10px] sm:text-[11px] font-mono tracking-[0.25em] uppercase text-[#7A6242]">
            <BookOpen className="w-3.5 h-3.5" />
            <span>9. Know Your Tradition</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal text-[#1A1815] leading-[1.12] tracking-tight">
            Vedic Wisdom &amp; Botanical Science, <br className="hidden sm:inline" />
            <span className="italic text-[#7A6242] font-light">grounded in scriptural truth.</span>
          </h2>

          <p className="text-stone-600 font-light text-sm sm:text-base leading-relaxed pt-1 max-w-2xl">
            Not a generic blog. An authentic knowledge archive explaining the bio-physics, origins, and sacred context of Indian materials.
          </p>
        </div>

        {/* 4 Knowledge Modules with 70% Visual Documentary Display */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          {/* Left Column: Interactive Knowledge Topic Selector */}
          <div className="lg:col-span-5 space-y-3">
            {TRADITION_KNOWLEDGE.map((item) => {
              const isSelected = item.id === active.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveId(item.id)}
                  className={`w-full p-4 sm:p-5 rounded-2xl border text-left transition-all duration-300 flex items-start justify-between gap-4 ${
                    isSelected
                      ? "bg-[#0C161D] text-[#ECEADE] border-[#0C161D] shadow-xl"
                      : "bg-white text-stone-800 border-[#E0D9CA] hover:border-stone-400"
                  }`}
                >
                  <div className="space-y-1">
                    <span className={`text-[10px] font-mono tracking-widest uppercase block ${isSelected ? "text-[#C5A880]" : "text-stone-500"}`}>
                      {item.category}
                    </span>
                    <h3 className="font-serif text-base sm:text-lg font-normal leading-snug">
                      {item.title}
                    </h3>
                  </div>
                  <ChevronRight className={`w-4 h-4 shrink-0 mt-1 transition-transform ${isSelected ? "text-[#C5A880] translate-x-1" : "text-stone-400"}`} />
                </button>
              );
            })}
          </div>

          {/* Right Column: 70% Visual Proof Display with Context Card */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 border border-[#E0D9CA] shadow-xl space-y-6">
            <div className="relative aspect-[16/10] rounded-2xl overflow-hidden bg-stone-900 border border-stone-200">
              <Image
                src={active.image}
                alt={active.title}
                fill
                className="object-cover brightness-[0.95] contrast-[1.03]"
                sizes="(max-width: 1024px) 100vw, 55vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent pointer-events-none" />

              <div className="absolute top-4 left-4 pointer-events-none">
                <span className="px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-[10px] font-mono tracking-widest uppercase text-[#DFCAAB]">
                  {active.reference}
                </span>
              </div>

              <div className="absolute bottom-4 left-4 right-4 text-white pointer-events-none">
                <p className="text-xs font-serif italic text-stone-200 line-clamp-2">
                  &ldquo;{active.subtitle}&rdquo;
                </p>
              </div>
            </div>

            <div className="space-y-3">
              <p className="text-sm text-stone-700 font-light leading-relaxed">
                {active.desc}
              </p>

              <div className="p-3.5 rounded-xl bg-[#F8F6F0] border border-[#E2DDD0] flex items-center gap-2.5 text-xs text-stone-800">
                <CheckCircle2 className="w-4 h-4 text-[#7A6242] shrink-0" />
                <span className="font-light">{active.keyInsight}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
