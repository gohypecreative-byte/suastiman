"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Compass, Sparkles, CheckCircle2 } from "lucide-react";

export function FinalBrandCTA() {
  return (
    <section className="relative w-full min-h-[500px] lg:min-h-[600px] bg-[#0C161D] text-[#ECEADE] overflow-hidden flex flex-col justify-center items-center text-center select-none py-20">
      {/* Background Photography (Brighter, cleaner) */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/origin/stage9_svastiman.jpg"
          alt="SVASTIMAN Finished Sacred Mala"
          fill
          priority
          className="object-cover object-center brightness-[0.85] contrast-[1.05]"
          sizes="100vw"
        />
        {/* Simple elegant overlay for text readability without being too dim */}
        <div className="absolute inset-0 bg-black/40 pointer-events-none" />
      </div>

      {/* Centered Minimal Content */}
      <div className="relative z-10 w-full px-5 sm:px-10 max-w-3xl flex flex-col items-center space-y-6 sm:space-y-8">
        <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-light text-white leading-[1.12] tracking-tight">
          From Nature. <br />
          Through Human Hands. <br />
          <span className="italic text-[#DFCAAB] font-normal">Rooted in Tradition.</span>
        </h2>

        <p className="text-sm sm:text-base text-stone-200 font-light max-w-lg leading-relaxed">
          Nature, sacred materials, and honest craftsmanship coming together for daily mindful presence.
        </p>

        <div className="pt-4 flex flex-col sm:flex-row items-center gap-4">
          <a
            href="#featured-products"
            className="inline-flex items-center justify-center px-8 py-3.5 bg-[#F7F5F0] hover:bg-[#C5A880] text-[#0C161D] text-xs font-semibold tracking-[0.2em] uppercase rounded-full transition-all duration-300 w-full sm:w-auto"
          >
            Explore Svastimān
          </a>

          <a
            href="#material-journeys"
            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-black/40 hover:bg-black/60 text-[#ECEADE] text-xs font-medium tracking-[0.15em] uppercase rounded-full backdrop-blur-md border border-white/20 transition-all w-full sm:w-auto"
          >
            <span>The Botanical Journey</span>
          </a>
        </div>
      </div>
    </section>
  );
}
