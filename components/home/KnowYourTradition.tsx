"use client";

import React, { useState } from "react";
import Image from "next/image";
import { BookOpen, Compass, ShieldCheck, ArrowRight, ChevronRight, CheckCircle2 } from "lucide-react";

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
    image: "/images/origin/know_rudraksha_anatomy.jpg",
    reference: "Shiva Purana (Vidyeshvara Samhita)",
    desc: "Formed with internal cellular locules, natural Rudraksha seeds exhibit stabilizing dielectric capacitance when worn against pulse points. Never softening with age, it naturally petrifies.",
    keyInsight: "Zero chemical varnish: pure sandalwood oil allows natural seed pores to breathe.",
  },
  {
    id: "tulsi-heritage",
    category: "SACRED HERBAL HERITAGE",
    title: "The Living Sanctity of Vrindavan Tulsi Wood",
    subtitle: "Why Holy Basil wood carries lasting therapeutic coolness",
    image: "/images/origin/know_tulsi_wood.jpg",
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
    <section id="know-your-tradition" className="py-12 sm:py-20 lg:py-28 bg-[#F6F4EE] text-[#0C161D] relative overflow-hidden">
      {/* Subtle Texture */}
      <div className="absolute inset-0 bg-[radial-gradient(#C5A880_1px,transparent_1px)] [background-size:28px_28px] opacity-[0.08] pointer-events-none" />

      <div className="w-full mx-auto px-4 sm:px-8 lg:px-12 relative z-10">
        {/* Header */}
        <div className="max-w-3xl mb-8 sm:mb-12 lg:mb-16 space-y-2 sm:space-y-3">
          <h2 className="font-serif text-2xl sm:text-4xl lg:text-6xl font-normal text-[#1A1815] leading-[1.15] sm:leading-[1.12] tracking-tight">
            Vedic Wisdom &amp; Botanical Science, <br className="hidden sm:inline" />
            <span className="italic text-[#7A6242] font-light">grounded in scriptural truth.</span>
          </h2>
        </div>

        {/* 4 Knowledge Modules: Interactive Accordion on Mobile, Side-by-Side on Desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6 lg:gap-10 items-center">
          {/* Left Column: Topics Selector (Accordion on Mobile, List on Desktop) */}
          <div className="lg:col-span-5 space-y-3">
            {TRADITION_KNOWLEDGE.map((item) => {
              const isSelected = item.id === active.id;
              return (
                <div
                  key={item.id}
                  className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                    isSelected
                      ? "bg-[#122E46] text-[#ECEADE] border-[#122E46] shadow-xl shadow-[#122E46]/20"
                      : "bg-white text-stone-800 border-[#E0D9CA] hover:border-stone-400 hover:shadow-md"
                  }`}
                >
                  <button
                    onClick={() => setActiveId(item.id)}
                    className="w-full p-4 sm:p-5 text-left flex items-start justify-between gap-3 sm:gap-4 cursor-pointer"
                  >
                    <div className="space-y-1">
                      <span className={`text-[9px] sm:text-[10px] font-mono tracking-widest uppercase block ${isSelected ? "text-[#C5A880]" : "text-stone-500"}`}>
                        {item.category}
                      </span>
                      <h3 className="font-serif text-sm sm:text-base lg:text-lg font-normal leading-snug">
                        {item.title}
                      </h3>
                    </div>
                    <ChevronRight
                      className={`w-4 h-4 shrink-0 mt-1 transition-transform duration-300 ${
                        isSelected
                          ? "text-[#C5A880] rotate-90 lg:rotate-0 lg:translate-x-1"
                          : "text-stone-400"
                      }`}
                    />
                  </button>

                  {/* Mobile-Only Expanded Visual Proof (Attached directly to active card on mobile) */}
                  {isSelected && (
                    <div className="lg:hidden px-4 pb-4 pt-1 space-y-3 border-t border-white/10">
                      <div className="relative w-full aspect-[16/10] rounded-xl overflow-hidden bg-stone-900 border border-white/10 shadow-md">
                        <Image
                          src={item.image}
                          alt={item.title}
                          fill
                          className="object-cover brightness-[0.95] contrast-[1.03]"
                          sizes="(max-width: 1024px) 100vw, 55vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent pointer-events-none" />
                        <div className="absolute bottom-3 left-3 right-3 text-white pointer-events-none">
                          <p className="text-xs sm:text-sm font-serif italic text-stone-100 leading-snug drop-shadow-md">
                            &ldquo;{item.subtitle}&rdquo;
                          </p>
                        </div>
                      </div>

                      <p className="text-xs text-[#ECEADE]/85 leading-relaxed font-sans">
                        {item.desc}
                      </p>

                      <div className="flex items-start gap-2 pt-1 text-[11px] font-mono text-[#DFCAAB] border-t border-white/10">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#C5A880] shrink-0 mt-0.5" />
                        <span>{item.keyInsight}</span>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Desktop-Only Right Column: 100% Visual Proof Display (EXACTLY preserved for Web) */}
          <div className="hidden lg:block lg:col-span-7 bg-white rounded-3xl overflow-hidden border border-[#E0D9CA] shadow-xl h-full min-h-[550px] relative">
            <div className="absolute inset-0 w-full h-full bg-stone-900">
              <Image
                src={active.image}
                alt={active.title}
                fill
                className="object-cover brightness-[0.95] contrast-[1.03]"
                sizes="(max-width: 1024px) 100vw, 55vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent pointer-events-none" />

              <div className="absolute bottom-6 left-6 right-6 text-white pointer-events-none">
                <p className="text-base sm:text-xl font-serif italic text-stone-100 leading-relaxed drop-shadow-lg">
                  &ldquo;{active.subtitle}&rdquo;
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
