"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Compass, Sparkles, CheckCircle2 } from "lucide-react";

export function FinalBrandCTA() {
  return (
    <section className="relative w-full min-h-[580px] lg:min-h-[680px] bg-[#070D11] text-[#ECEADE] overflow-hidden flex flex-col justify-between select-none">
      {/* 70% Cinematic Background Photography */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/origin/hero_journey_mountain.jpg"
          alt="Himalayan Mountain Source SVASTIMAN"
          fill
          priority
          className="object-cover object-center brightness-[0.78] contrast-[1.05]"
          sizes="100vw"
        />
        {/* Cinematic Organic Vignettes */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#070D11] via-black/40 to-black/60 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#070D11]/90 via-[#070D11]/40 to-transparent pointer-events-none" />
      </div>

      {/* Top Floating Badge */}
      <div className="relative z-10 w-full px-5 sm:px-10 lg:px-14 pt-8 sm:pt-10 flex items-center justify-between">
        <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-black/50 backdrop-blur-md border border-white/15 text-[11px] font-mono uppercase tracking-[0.2em] text-[#DFCAAB]">
          <span className="w-1.5 h-1.5 rounded-full bg-[#38BDF8] animate-ping" />
          <span>SVASTIMĀN &bull; SACRED ARCHIVE</span>
        </div>
      </div>

      {/* Centered Emotional Narrative (30% Minimal Text) */}
      <div className="relative z-10 w-full px-5 sm:px-10 lg:px-14 py-16 sm:py-20 max-w-4xl">
        <div className="space-y-4 sm:space-y-6">
          <div className="inline-flex items-center gap-2.5 text-xs font-mono uppercase tracking-[0.3em] text-[#DFCAAB]">
            <span className="w-8 h-[1px] bg-[#DFCAAB]" />
            <span>SACRED TRADITION &bull; NO ASTROLOGY FEAR</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-light text-white leading-[1.12] tracking-tight drop-shadow-md">
            From Nature. <br />
            Through Human Hands. <br />
            <span className="italic text-[#DFCAAB] font-normal">Rooted in Tradition.</span>
          </h2>

          <p className="text-sm sm:text-base lg:text-lg text-stone-200/90 font-light max-w-xl leading-relaxed drop-shadow-sm">
            Nature, sacred materials, and honest craftsmanship coming together for daily mindful presence.
          </p>

          <div className="pt-4 flex flex-wrap items-center gap-4">
            <a
              href="#featured-products"
              className="inline-flex items-center gap-3 px-8 py-3.5 bg-[#F7F5F0] hover:bg-[#C5A880] text-[#070D11] text-xs font-semibold tracking-[0.2em] uppercase rounded-full transition-all duration-300 shadow-xl group"
            >
              <span>Explore SVASTIMAN</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </a>

            <a
              href="#rudraksha-journey"
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-black/50 hover:bg-black/70 text-[#ECEADE] text-xs font-medium tracking-[0.15em] uppercase rounded-full backdrop-blur-md border border-white/20 transition-colors"
            >
              <span>The Botanical Journey</span>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Minimal Provenance Line */}
      <div className="relative z-10 w-full px-5 sm:px-10 lg:px-14 pb-6 sm:pb-8 flex flex-wrap items-center justify-between gap-4 text-[10px] sm:text-[11px] font-mono text-stone-300 uppercase tracking-widest border-t border-white/10 pt-4">
        <span>Himalayas &bull; Vrindavan &bull; Jaipur</span>
        <span>100% Laboratory Verified Sacred Materials</span>
      </div>
    </section>
  );
}
