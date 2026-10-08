"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";

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

  useEffect(() => {
    const interval = setInterval(() => {
      if (scrollRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
        
        // Check if we reached the end (with a small buffer for precision)
        if (scrollLeft + clientWidth >= scrollWidth - 20) {
          scrollRef.current.scrollTo({ left: 0, behavior: "smooth" });
        } else {
          // Scroll right by the width of one card + gap
          const firstChild = scrollRef.current.firstElementChild as HTMLElement;
          const scrollAmount = firstChild ? firstChild.offsetWidth + 24 : clientWidth / 3;
          scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
        }
      }
    }, 3000); // Increased to 3 seconds for less aggressive auto-scroll

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="craftsmanship" className="py-20 sm:py-28 bg-[#122E46] text-[#ECEADE] relative overflow-hidden border-b border-[#C5A880]/20">
      {/* Background Subtle Texture */}
      <div className="absolute inset-0 bg-[radial-gradient(#C5A880_1px,transparent_1px)] [background-size:32px_32px] opacity-[0.08] pointer-events-none" />

      <div className="w-full mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
        {/* Header */}
        <div className="max-w-5xl mb-12 sm:mb-16 space-y-3">
          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal text-white leading-[1.12] tracking-tight">
            Made by Human Hands. <br />
            <span className="italic text-[#DFCAAB] font-light">Shaped by generational patience.</span>
          </h2>
        </div>

        {/* Mobile View: 2-Column Portrait Card Grid matching reference format */}
        <div className="grid grid-cols-2 gap-3.5 sm:gap-4 lg:hidden">
          {CRAFT_STEPS.map((craft) => (
            <div
              key={craft.step}
              className="group block text-center"
            >
              {/* Tall Portrait Rounded Image Container */}
              <div className="relative w-full aspect-[3/4] rounded-2xl overflow-hidden bg-[#0D2335] border border-white/10 shadow-xs group-hover:border-[#C5A880]/50 transition-all duration-300">
                <Image
                  src={craft.image}
                  alt={craft.name}
                  fill
                  priority
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 640px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent pointer-events-none" />

                <div className="absolute bottom-2 left-2 right-2 pointer-events-none">
                  <span className="text-[9px] font-mono uppercase tracking-wider text-[#C5A880] font-medium block drop-shadow-sm">
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

        {/* Desktop View: Preserved Exact Carousel (Web Unchanged) */}
        <div className="hidden lg:block relative">
          <div 
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto no-scrollbar pb-6 snap-x snap-mandatory scroll-smooth"
          >
            {CRAFT_STEPS.map((craft) => (
              <div
                key={craft.step}
                className="group relative rounded-2xl overflow-hidden bg-[#0D2335] border border-white/10 hover:border-[#C5A880]/50 shadow-xl transition-all duration-500 flex flex-col justify-between shrink-0 w-[85vw] sm:w-[45vw] lg:w-[calc(33.333vw-2rem)] snap-start"
              >
                {/* Image */}
                <div className="relative w-full aspect-[4/3] overflow-hidden bg-black">
                  <Image
                    src={craft.image}
                    alt={craft.name}
                    fill
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0D2335] via-transparent to-transparent pointer-events-none" />

                  <div className="absolute bottom-2.5 left-3.5 right-3.5 pointer-events-none">
                    <span className="text-xs font-mono uppercase tracking-wider text-[#C5A880] font-medium block drop-shadow-sm">
                      {craft.action}
                    </span>
                  </div>
                </div>

                {/* Minimal Text Context */}
                <div className="p-4 bg-[#0D2335] flex items-center justify-center gap-2 border-t border-white/10">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#C5A880] shrink-0" />
                  <span className="text-[#DFCAAB] text-[10px] sm:text-[11px] font-mono tracking-wide text-center">
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
