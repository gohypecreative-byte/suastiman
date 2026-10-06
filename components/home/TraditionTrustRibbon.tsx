"use client";

import React from "react";
import { ShieldCheck, Microscope, Award, Gem, Compass } from "lucide-react";

const RIBBON_ITEMS = [
  {
    icon: Microscope,
    text: "100% RADIOGRAPHY X-RAY VERIFIED",
  },
  {
    icon: Compass,
    text: "DIRECT HIGH-ALTITUDE HIMALAYAN HARVEST",
  },
  {
    icon: Award,
    text: "SACRED BRAHMAGRANTHI KNOTTED BY MASTER ARTISANS",
  },
  {
    icon: ShieldCheck,
    text: "ZERO CHEMICAL DYES • 100% UNTREATED MINERALS",
  },
  {
    icon: Gem,
    text: "INDIVIDUAL LAB TESTED & CERTIFIED PROVENANCE",
  },
];

export function TraditionTrustRibbon() {
  return (
    <aside 
      aria-label="Svastimān Sacred Authenticity Highlights"
      className="relative z-20 w-full bg-[#122E46] text-[#EDE7DE] py-5 sm:py-6 lg:py-7 overflow-hidden border-y border-[#C5A880]/40 shadow-lg select-none"
    >
      {/* Subtle gold gradient accent glows on left and right for seamless luxury edge fading */}
      <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-20 sm:w-36 bg-gradient-to-r from-[#122E46] to-transparent z-10" />
      <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-20 sm:w-36 bg-gradient-to-l from-[#122E46] to-transparent z-10" />

      {/* Infinite scrolling marquee strip - Very slow & smooth glide */}
      <div 
        className="animate-marquee-slow flex items-center whitespace-nowrap"
        style={{ animationDuration: "85s" }}
      >
        {[...Array(4)].map((_, groupIdx) => (
          <div
            key={groupIdx}
            className="flex items-center gap-9 md:gap-14 mx-5 md:mx-8 text-xs sm:text-[13px] md:text-sm font-medium tracking-[0.20em] uppercase"
          >
            {RIBBON_ITEMS.map((item, itemIdx) => {
              const Icon = item.icon;
              return (
                <React.Fragment key={itemIdx}>
                  <div className="flex items-center gap-3 text-[#E8DFD0] hover:text-[#C5A880] transition-colors">
                    <Icon className="w-4 h-4 sm:w-[18px] sm:h-[18px] text-[#C5A880] shrink-0 stroke-[1.8]" />
                    <span>{item.text}</span>
                  </div>
                  <span className="text-[#C5A880]/40 text-xs sm:text-sm font-bold select-none">&bull;</span>
                </React.Fragment>
              );
            })}
          </div>
        ))}
      </div>
    </aside>
  );
}
