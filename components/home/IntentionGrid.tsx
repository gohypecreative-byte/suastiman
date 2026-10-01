"use client";

import React from "react";
import Image from "next/image";
import { Sparkles, ArrowUpRight, Shield, Zap, Heart, Eye, Orbit } from "lucide-react";

interface IntentionItem {
  id: string;
  title: string;
  tagline: string;
  crystals: string;
  icon: React.ElementType;
  image: string;
}

const intentions: IntentionItem[] = [
  {
    id: "protection",
    title: "Protection & Grounding",
    tagline: "Shield against negative vibrations & cultivate inner strength",
    crystals: "Black Tourmaline, Obsidian & Smoky Quartz",
    icon: Shield,
    image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "abundance",
    title: "Manifestation & Wealth",
    tagline: "Attract prosperity, new opportunities & creative flow",
    crystals: "Natural Citrine, Pyrite & Green Aventurine",
    icon: Zap,
    image: "https://images.unsplash.com/photo-1596944924616-7b38e7cfac36?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "love",
    title: "Love & Emotional Healing",
    tagline: "Open the heart chakra and invite harmony and compassion",
    crystals: "Rose Quartz, Rhodonite & Moonstone",
    icon: Heart,
    image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "clarity",
    title: "Clarity & Spiritual Vision",
    tagline: "Enhance intuition, meditative depth and mental focus",
    crystals: "Lapis Lazuli, Amethyst & Clear Quartz",
    icon: Eye,
    image: "https://images.unsplash.com/photo-1600003014755-ba31aa59c4b6?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "zodiac",
    title: "Zodiac & Cosmic Alignment",
    tagline: "Custom crafted stones resonant with your ruling astrological planet",
    crystals: "Birthstone & Astrological Talismans",
    icon: Orbit,
    image: "https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=600&q=80",
  },
];

export function IntentionGrid() {
  return (
    <section id="intentions-section" className="py-20 bg-[#132F47] border-b border-[#111111]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 text-[#C5A880] text-xs font-semibold uppercase tracking-widest">
            <span>Energy Curations</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#ECEADE] font-normal">
            Shop by Spiritual Intention
          </h2>
          <p className="text-[#ECEADE]/70 text-sm sm:text-base font-light">
            Every soul has a distinct vibration. Select the energy you wish to cultivate, protect,
            or manifest in your daily life.
          </p>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {intentions.map((item, index) => {
            const Icon = item.icon;
            const isLarge = index === 0 || index === 4;
            return (
              <div
                key={item.id}
                className={`group relative rounded-2xl overflow-hidden bg-[#111111] border border-[#ECEADE]/10 hover:border-[#ECEADE]/40 transition-all duration-300 shadow-xs hover:shadow-2xl flex flex-col justify-between ${
                  isLarge ? "md:col-span-1 lg:col-span-1" : ""
                }`}
              >
                {/* Image & Overlay */}
                <div className="relative h-60 w-full overflow-hidden bg-[#ECEADE]">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-[#111111]/40 to-transparent" />
                  
                  {/* Floating Icon */}
                  <div className="absolute top-4 left-4 w-10 h-10 rounded-full bg-[#132F47]/80 backdrop-blur-xs border border-[#C5A880]/50 flex items-center justify-center text-[#ECEADE]">
                    <Icon className="w-5 h-5 text-[#C5A880]" />
                  </div>

                  {/* Crystals Badge */}
                  <div className="absolute bottom-3 left-4 right-4">
                    <p className="text-[11px] text-[#C5A880] font-medium tracking-wide uppercase">
                      Crystals: {item.crystals}
                    </p>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 bg-[#111111] flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-serif text-xl text-[#ECEADE] group-hover:text-white transition-colors mb-2">
                      {item.title}
                    </h3>
                    <p className="text-xs text-[#ECEADE]/60 line-clamp-2 leading-relaxed font-light">
                      {item.tagline}
                    </p>
                  </div>

                  <div className="mt-4 pt-4 border-t border-[#ECEADE]/10 flex items-center justify-between">
                    <span className="text-xs font-semibold text-[#ECEADE] uppercase tracking-wider group-hover:underline">
                      Explore Talismans
                    </span>
                    <div className="w-8 h-8 rounded-full bg-[#132F47] flex items-center justify-center text-[#ECEADE] group-hover:bg-[#ECEADE] group-hover:text-[#111111] transition-colors border border-[#ECEADE]/20">
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
