"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ArrowRight, ChevronLeft, ChevronRight, Compass, Layers, CheckCircle2 } from "lucide-react";

interface JourneyStageItem {
  stageNumber: string;
  stageName: string; // Nature | Raw Material | Human Craft | Finished Product
  headline: string;
  image: string;
  badge: string;
  caption: string;
  specs: string[];
}

interface MaterialStory {
  id: "rudraksha" | "tulsi" | "gemstones";
  name: string;
  botanical: string;
  origin: string;
  summary: string;
  heading: React.ReactNode;
  subheading: string;
  fourStages: JourneyStageItem[];
}

const MATERIAL_STORIES: Record<string, MaterialStory> = {
  rudraksha: {
    id: "rudraksha",
    name: "Sacred Rudraksha",
    botanical: "Elaeocarpus ganitrus Roxb.",
    origin: "Upper Himalayan Cloud Forests (2,200m)",
    summary: "From high altitude wild flowers to lab-certified sacred malas.",
    heading: (
      <>
        Before it was a mala, <br />
        <span className="italic text-[#DFCAAB] font-light">it was a fruit.</span>
      </>
    ),
    subheading: "Witness the authentic 4-step transformation. Minimal text, maximum documentary visual proof.",
    fourStages: [
      {
        stageNumber: "01",
        stageName: "NATURE",
        headline: "Wild Cloud Forest & Fruit",
        image: "/images/origin/hero_journey_fruit.jpg",
        badge: "Untouched High Altitude",
        caption: "Ripens as an electric-blue botanical fruit in the dense Himalayan canopy before human hands ever touch it.",
        specs: ["2,200m Elevation", "Monsoon Nurtured", "100% Wild Sourced"],
      },
      {
        stageNumber: "02",
        stageName: "RAW MATERIAL",
        headline: "Organic Lignified Seed",
        image: "/images/origin/hero_journey_seed.jpg",
        badge: "Untreated Stone Endocarp",
        caption: "Deep furrowed mukhi facets formed strictly through natural cellular growth — hard, fibrous, and energetically intact.",
        specs: ["Authentic Mukhi Facets", "Zero Synthetic Resin", "Natural Geometry"],
      },
      {
        stageNumber: "03",
        stageName: "HUMAN CRAFT",
        headline: "Riverbed Spring Cleansing",
        image: "/images/origin/brand_artisan_wash.jpg",
        badge: "Hand-Honored Artisan Craft",
        caption: "Generational artisans gently brush away botanical skin with pure running mountain spring water without harsh acids.",
        specs: ["100% Spring Water", "Zero Chemical Acid", "Hand-Sorted Density"],
      },
      {
        stageNumber: "04",
        stageName: "FINISHED PIECE",
        headline: "Svastimān Sanctified Mala",
        image: "/images/origin/stage9_svastiman.jpg",
        badge: "Lab-Certified Provenance",
        caption: "Individually hand-knotted on unbleached natural cord, verified with laboratory X-ray provenance.",
        specs: ["Lab X-Ray Verified", "Traditional Hand Knots", "No Astrological Fear"],
      },
    ],
  },
  tulsi: {
    id: "tulsi",
    name: "Sacred Tulsi Wood",
    botanical: "Ocimum sanctum L.",
    origin: "Vrindavan & Sacred Braj Groves",
    summary: "Aromatic holy basil aged naturally into serene tactile beads.",
    heading: (
      <>
        From holy Vrindavan groves, <br />
        <span className="italic text-[#DFCAAB] font-light">to quiet beads of devotion.</span>
      </>
    ),
    subheading: "From temple courtyards in Vrindavan to warm, soothing beads of daily quietude. Authentic Indian holy basil heritage.",
    fourStages: [
      {
        stageNumber: "01",
        stageName: "NATURE",
        headline: "Vrindavan Temple Groves",
        image: "/images/origin/tulsi_heritage_plant.jpg",
        badge: "Sacred Soil & Sunlight",
        caption: "Revered sacred herb cultivated in historic temple courtyards under organic traditional care.",
        specs: ["Temple Courtyard Grown", "Pure Morning Prana", "Sacred Braj Soil"],
      },
      {
        stageNumber: "02",
        stageName: "RAW MATERIAL",
        headline: "Naturally Seasoned Wood",
        image: "/images/origin/brand_intro_craft.jpg",
        badge: "Naturally Fallen Branches",
        caption: "Collected only after mature branches have naturally hardened, carrying therapeutic natural eugenol essences.",
        specs: ["Ethically Harvested", "Shade-Cured Wood", "Aromatic Core Grain"],
      },
      {
        stageNumber: "03",
        stageName: "HUMAN CRAFT",
        headline: "Micro-Lathe Hand Turning",
        image: "/images/origin/rudraksha_hand_clean.jpg",
        badge: "Traditional Artisan Woodcraft",
        caption: "Shaped bead-by-bead on manual foot-lathes by generational craftsmen without chemical sealants or synthetic gloss.",
        specs: ["Hand-Turned Grain", "Raw Beeswax Buffing", "Zero Toxic Varnish"],
      },
      {
        stageNumber: "04",
        stageName: "FINISHED PIECE",
        headline: "108 Japa & Daily Mala",
        image: "/images/origin/stage9_svastiman.jpg",
        badge: "Mindful Sacred Touch",
        caption: "Lightweight, calming, and naturally fragrant for daily meditation, japa chanting, and mindful presence.",
        specs: ["Natural Eugenol Fragrance", "Smooth Tactile Feel", "Traditional Guru Bead"],
      },
    ],
  },
  gemstones: {
    id: "gemstones",
    name: "Earth Gemstones",
    botanical: "Natural Mineral Geology",
    origin: "Himalayan Strata & Jaipur Lapidary",
    summary: "Untreated raw minerals cut without glass or synthetic fillers.",
    heading: (
      <>
        Born in deep tectonic earth, <br />
        <span className="italic text-[#DFCAAB] font-light">cut by water, never heat.</span>
      </>
    ),
    subheading: "Untreated raw minerals shaped by human hands and water wheels.",
    fourStages: [
      {
        stageNumber: "01",
        stageName: "NATURE",
        headline: "Subterranean Veins",
        image: "/images/origin/stage1_mountain.jpg",
        badge: "Geological Formation",
        caption: "Formed deep beneath tectonic pressure over millions of years, carrying authentic natural crystal lattices.",
        specs: ["Millennia Earth Pressure", "Unheated Mineral Veins", "Raw Natural Matrix"],
      },
      {
        stageNumber: "02",
        stageName: "RAW MATERIAL",
        headline: "Rough Crystal Matrix",
        image: "/images/origin/brand_macro_detail.jpg",
        badge: "Authentic Rough Specimen",
        caption: "Unheated, non-irradiated boulder specimens with real internal inclusions and geological fingerprints.",
        specs: ["Zero Heat Treatment", "Natural Mineral Inclusions", "Cold Heavy Feel"],
      },
      {
        stageNumber: "03",
        stageName: "HUMAN CRAFT",
        headline: "Water-Cooled Lapidary",
        image: "/images/origin/raw_gemstone_craft.jpg",
        badge: "Jaipur Lapidary Tradition",
        caption: "Cut and diamond-shaped by heritage stone artisans using water wheels, preserving natural crystalline vibration.",
        specs: ["Water-Wheel Shaping", "Diamond Hand Polish", "Zero Dye Infusion"],
      },
      {
        stageNumber: "04",
        stageName: "FINISHED PIECE",
        headline: "Raw Earth Stone Bracelet",
        image: "/images/origin/stage9_svastiman.jpg",
        badge: "Lab-Certified Authenticity",
        caption: "Custom-fitted with high-durability elastic cord and verified with certified mineralogical test reports.",
        specs: ["Certified Natural Stone", "No Plastic Beads", "Honest Indian Pricing"],
      },
    ],
  },
};

export function MaterialJourneys() {
  const [activeTab, setActiveTab] = useState<"rudraksha" | "tulsi" | "gemstones">("rudraksha");
  const scrollRef = React.useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = window.innerWidth * 0.75;
      scrollRef.current.scrollBy({ left: direction === "left" ? -scrollAmount : scrollAmount, behavior: "smooth" });
    }
  };

  React.useEffect(() => {
    const onHashChange = () => {
      const hash = window.location.hash;
      if (hash === "#material-journeys-tulsi") setActiveTab("tulsi");
      else if (hash === "#material-journeys-gemstones") setActiveTab("gemstones");
      else if (hash === "#material-journeys-rudraksha") setActiveTab("rudraksha");
    };
    
    window.addEventListener("hashchange", onHashChange);
    onHashChange();
    
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  const story = MATERIAL_STORIES[activeTab];

  return (
    <section id="material-journeys" className="py-10 sm:py-16 lg:py-20 bg-[#122E46] text-[#ECEADE] relative overflow-hidden border-y border-[#C5A880]/20">
      <div id="material-journeys-rudraksha" className="absolute -top-32" />
      <div id="material-journeys-tulsi" className="absolute -top-32" />
      <div id="material-journeys-gemstones" className="absolute -top-32" />
      
      {/* Background Subtle Organic Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(#C5A880_1px,transparent_1px)] [background-size:32px_32px] opacity-[0.08] pointer-events-none" />

      <div className="w-full mx-auto px-4 sm:px-8 lg:px-12 relative z-10">
        {/* Header Block: Minimal Luxury Editorial */}
        <div className="flex flex-col xl:flex-row xl:items-end justify-between gap-5 sm:gap-6 mb-8 sm:mb-16">
          <div className="max-w-full xl:max-w-4xl space-y-2 sm:space-y-3">
            <h2 className="font-serif text-2xl sm:text-4xl lg:text-5xl font-normal text-white leading-[1.2] tracking-tight">
              {story.heading}
            </h2>
          </div>

          {/* Material Category Switcher Tabs - Wrapped so rounded border never clips content */}
          <div className="w-full xl:w-auto overflow-x-auto no-scrollbar -mx-4 px-4 sm:mx-0 sm:px-0 pb-1">
            <div className="inline-flex items-center gap-1 sm:gap-2 bg-[#0D2335] p-1 sm:p-1.5 rounded-full border border-white/15 shrink-0 shadow-xl">
              {(["rudraksha", "tulsi", "gemstones"] as const).map((mat) => (
                <button
                  key={mat}
                  onClick={() => setActiveTab(mat)}
                  className={`px-3 sm:px-5 py-1.5 sm:py-2 rounded-full text-[10px] sm:text-xs font-medium whitespace-nowrap tracking-wider uppercase transition-all duration-300 cursor-pointer ${
                    activeTab === mat
                      ? "bg-[#C5A880] text-[#122E46] font-bold shadow-lg"
                      : "text-stone-300 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {mat === "rudraksha" ? "Rudraksha" : mat === "tulsi" ? "Tulsi Wood" : "Earth Gemstones"}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile View: 2-Column Portrait Card Grid matching reference format */}
        <div className="grid grid-cols-2 gap-3.5 sm:gap-4 lg:hidden">
          {story.fourStages.map((stage) => (
            <div
              key={stage.stageNumber}
              className="group block text-center"
            >
              {/* Tall Portrait Rounded Image Container */}
              <div className="relative w-full aspect-[3/4] rounded-2xl overflow-hidden bg-black border border-[#C5A880]/20 shadow-xs group-hover:border-[#C5A880]/60 transition-all duration-300">
                <Image
                  src={stage.image}
                  alt={stage.headline}
                  fill
                  className="object-cover object-center brightness-[0.92] contrast-[1.04] group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 640px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />

                <div className="absolute bottom-2 left-2 right-2 pointer-events-none">
                  <span className="text-[9px] font-mono uppercase tracking-wider text-[#C5A880] font-medium block drop-shadow-sm truncate">
                    STAGE {stage.stageNumber} • {stage.stageName}
                  </span>
                </div>
              </div>

              {/* Text Below Image */}
              <div className="mt-2 space-y-0.5 px-0.5">
                <h3 className="font-serif text-xs sm:text-sm font-normal text-white leading-snug line-clamp-2">
                  {stage.headline}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop View: Preserved Exact 4-Step Progression Carousel (Web Unchanged) */}
        <div className="hidden lg:block relative group/carousel">
          <div 
            ref={scrollRef}
            className="flex gap-3.5 sm:gap-6 overflow-x-auto snap-x snap-mandatory no-scrollbar -mx-4 px-4 sm:mx-0 sm:px-0 pb-4 sm:pb-0"
          >
            {story.fourStages.map((stage) => (
              <div
                key={stage.stageNumber}
                className="group relative rounded-2xl overflow-hidden bg-[#0D2335] border border-[#C5A880]/20 hover:border-[#C5A880]/60 shadow-xl hover:shadow-2xl transition-all duration-500 flex flex-col justify-between shrink-0 snap-center w-[76vw] sm:w-[45vw] lg:w-[calc(25vw-2.75rem)]"
              >
                {/* Clean Image Container - 100% visible, no horizontal clipping */}
                <div className="relative w-full aspect-[4/3] sm:aspect-[16/11] overflow-hidden bg-black">
                  <Image
                    src={stage.image}
                    alt={stage.headline}
                    fill
                    className="object-cover object-center brightness-[0.92] contrast-[1.04] group-hover:scale-105 transition-transform duration-700 ease-out"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                </div>

                {/* Minimal Clean Headline Below Image */}
                <div className="p-4 sm:p-5 bg-[#0D2335] flex items-center justify-between border-t border-white/10">
                  <h3 className="font-serif text-base sm:text-lg font-normal text-white leading-snug">
                    {stage.headline}
                  </h3>
                </div>
              </div>
            ))}
          </div>
          
          {/* Right Scroll Button */}
          <div className="absolute top-1/2 -translate-y-1/2 right-2 sm:-right-4 z-20 opacity-0 group-hover/carousel:opacity-100 transition-opacity hidden lg:block">
            <button 
              onClick={() => scroll('right')} 
              className="p-3 sm:p-4 rounded-full bg-[#0D2335]/90 shadow-2xl border border-white/20 hover:bg-[#C5A880] hover:text-[#122E46] transition-all text-white backdrop-blur-md cursor-pointer"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
          
          {/* Left Scroll Button */}
          <div className="absolute top-1/2 -translate-y-1/2 left-2 sm:-left-4 z-20 opacity-0 group-hover/carousel:opacity-100 transition-opacity hidden lg:block">
            <button 
              onClick={() => scroll('left')} 
              className="p-3 sm:p-4 rounded-full bg-[#0D2335]/90 shadow-2xl border border-white/20 hover:bg-[#C5A880] hover:text-[#122E46] transition-all text-white backdrop-blur-md cursor-pointer"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Bottom Provenance & Next Action Bar */}
        <div className="mt-8 sm:mt-12 pt-6 border-t border-white/15 flex flex-col sm:flex-row items-stretch sm:items-center justify-end gap-4 text-xs text-stone-400 font-mono">
          <a
            href="#featured-products"
            className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-[#F7F5F0] hover:bg-[#C5A880] text-[#122E46] hover:text-white text-xs font-semibold tracking-wider uppercase transition-all duration-300 shadow-md group w-full sm:w-auto"
          >
            <span>View Finished Collection</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
}
