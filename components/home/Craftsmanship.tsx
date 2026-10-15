"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { CheckCircle2, ChevronLeft, ChevronRight } from "lucide-react";

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
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      if (scrollRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
        
        // Check if reached the end
        if (scrollLeft + clientWidth >= scrollWidth - 20) {
          scrollRef.current.scrollTo({ left: 0, behavior: "smooth" });
        } else {
          // Scroll right by width of 1 card + 16px gap
          const firstChild = scrollRef.current.firstElementChild as HTMLElement;
          const scrollAmount = firstChild ? firstChild.offsetWidth + 16 : clientWidth / 4;
          scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
        }
      }
    }, 3200);

    return () => clearInterval(interval);
  }, [isPaused]);

  const scrollPrev = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth } = scrollRef.current;
      if (scrollLeft <= 10) {
        scrollRef.current.scrollTo({ left: scrollWidth, behavior: "smooth" });
      } else {
        const firstChild = scrollRef.current.firstElementChild as HTMLElement;
        const scrollAmount = firstChild ? firstChild.offsetWidth + 16 : 280;
        scrollRef.current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
      }
    }
  };

  const scrollNext = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      if (scrollLeft + clientWidth >= scrollWidth - 20) {
        scrollRef.current.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        const firstChild = scrollRef.current.firstElementChild as HTMLElement;
        const scrollAmount = firstChild ? firstChild.offsetWidth + 16 : 280;
        scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
      }
    }
  };

  return (
    <section id="craftsmanship" className="py-20 sm:py-28 bg-[#122E46] text-[#ECEADE] relative overflow-hidden border-b border-[#C5A880]/20">
      {/* Background Subtle Texture */}
      <div className="absolute inset-0 bg-[radial-gradient(#C5A880_1px,transparent_1px)] [background-size:32px_32px] opacity-[0.08] pointer-events-none" />

      <div className="w-full mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
        {/* Header with Navigation Controls */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-8 sm:mb-12">
          <div className="max-w-4xl space-y-2">
            <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal text-white leading-[1.12] tracking-tight">
              Made by Human Hands. <br />
              <span className="italic text-[#DFCAAB] font-light">Shaped by generational patience.</span>
            </h2>
          </div>

          {/* Desktop Navigation Arrows */}
          <div className="hidden lg:flex items-center gap-2 shrink-0 mb-1">
            <button
              onClick={scrollPrev}
              type="button"
              aria-label="Previous craftsmanship step"
              className="w-9 h-9 rounded-full border border-white/20 hover:border-[#C5A880] bg-white/5 hover:bg-[#C5A880]/15 text-[#DFCAAB] hover:text-white flex items-center justify-center transition-all duration-200 cursor-pointer active:scale-95"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={scrollNext}
              type="button"
              aria-label="Next craftsmanship step"
              className="w-9 h-9 rounded-full border border-white/20 hover:border-[#C5A880] bg-white/5 hover:bg-[#C5A880]/15 text-[#DFCAAB] hover:text-white flex items-center justify-center transition-all duration-200 cursor-pointer active:scale-95"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Mobile / Tablet View: Grid with small cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:hidden gap-3.5 sm:gap-4">
          {CRAFT_STEPS.map((craft) => (
            <div
              key={craft.step}
              className="group block text-center"
            >
              {/* Portrait Rounded Image Container */}
              <div className="relative w-full aspect-[3/4] rounded-xl overflow-hidden bg-[#0D2335] border border-white/10 shadow-xs group-hover:border-[#C5A880]/50 transition-all duration-300">
                <Image
                  src={craft.image}
                  alt={craft.name}
                  fill
                  priority
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 640px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent pointer-events-none" />

                <div className="absolute bottom-2 left-2 right-2 pointer-events-none">
                  <span className="text-[9px] font-mono uppercase tracking-wider text-[#C5A880] font-medium block drop-shadow-sm truncate">
                    {craft.action}
                  </span>
                </div>
              </div>

              {/* Text Below Image */}
              <div className="mt-2 space-y-0.5 px-0.5">
                <h3 className="font-serif text-xs font-normal text-white leading-snug line-clamp-1">
                  {craft.name}
                </h3>
                <div className="flex items-center justify-center gap-1 text-[9px] font-mono text-[#DFCAAB]/80">
                  <CheckCircle2 className="w-2.5 h-2.5 text-[#C5A880] shrink-0" />
                  <span className="truncate">{craft.provenance}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop View: 4 Small Cards in One Frame */}
        <div className="hidden lg:block relative">
          <div 
            ref={scrollRef}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            className="flex gap-4 overflow-x-auto no-scrollbar pb-6 snap-x snap-mandatory scroll-smooth"
          >
            {CRAFT_STEPS.map((craft) => (
              <div
                key={craft.step}
                style={{
                  width: "calc((100% - 48px) / 4)",
                  minWidth: "calc((100% - 48px) / 4)",
                }}
                className="group relative rounded-xl overflow-hidden bg-[#0D2335] border border-white/10 hover:border-[#C5A880]/60 shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col justify-between shrink-0 snap-start"
              >
                {/* Image */}
                <div className="relative w-full aspect-[4/3] overflow-hidden bg-black">
                  <Image
                    src={craft.image}
                    alt={craft.name}
                    fill
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                    sizes="(max-width: 1280px) 25vw, 320px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0D2335] via-transparent to-transparent pointer-events-none" />

                  <div className="absolute bottom-2 left-3 right-3 pointer-events-none">
                    <span className="text-[10.5px] font-mono uppercase tracking-wider text-[#C5A880] font-medium block drop-shadow-sm truncate">
                      {craft.action}
                    </span>
                  </div>
                </div>

                {/* Compact Provenance Bar */}
                <div className="py-2.5 px-3 bg-[#0D2335] flex items-center justify-center gap-1.5 border-t border-white/10 group-hover:bg-[#0F283D] transition-colors">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#C5A880] shrink-0" />
                  <span className="text-[#DFCAAB] text-[10px] sm:text-[10.5px] font-mono tracking-wide text-center truncate">
                    {craft.provenance}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
