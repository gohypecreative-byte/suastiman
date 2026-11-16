"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { Compass, CheckCircle2, ChevronLeft, ChevronRight } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { getProductById } from "@/lib/products";

interface NaturalStage {
  step: string;
  badge: string;
  tagline: string;
  title: string;
  caption: string;
  image: string;
  elevation: string;
  provenance: string;
  product?: {
    id: string;
    name: string;
    subtitle: string;
    price: number;
    originalPrice: number;
    image: string;
    badge: string;
  };
}

// Exactly 9 Authentic Sequential Stages of Suatiman:
// Mountain (01) -> River (02) -> Forest (03) -> Tree (04) -> Flower (05) -> Fruit (06) -> Rudraksha Seed (07) -> Hand Cleansing (08) -> Svastiman Archive (09)
const NINE_STAGES: NaturalStage[] = [
  {
    step: "01",
    badge: "STAGE 01 • MOUNTAIN SOURCE",
    tagline: "ROOTED IN SACRED GEOGRAPHY",
    title: "Where altitude meets sanctity.",
    caption: "High in the Himalayan heights (2,000m+), glacial winds and mineral-rich soils create the sole habitat where sacred life begins.",
    image: "/images/origin/stage1_mountain.jpg",
    elevation: "2,400m Himalayas",
    provenance: "Sacred Upper Valleys",
    product: {
      id: "prod-rudraksha-108",
      name: "Himalayan Rudraksha 108 Mala",
      subtitle: "NATURAL 5-MUKHI, UNBLEACHED COTTON",
      price: 2899,
      originalPrice: 3499,
      image: "/images/products/prod1.webp",
      badge: "100% WILD",
    },
  },
  {
    step: "02",
    badge: "STAGE 02 • GLACIAL RIVER",
    tagline: "PURE MELTWATER CURRENTS",
    title: "Carried by glacial springs.",
    caption: "Perennial mountain streams carry pure glacial minerals into deep valley slopes, feeding the roots of undisturbed alpine groves.",
    image: "/images/origin/stage2_river.jpg",
    elevation: "2,100m Valley",
    provenance: "Glacial Spring Network",
    product: {
      id: "prod-rudraksha-wrist",
      name: "Tactile Himalayan Wrist Rudraksha",
      subtitle: "SELECTED 5-MUKHI SEEDS, RESILIENT CORE",
      price: 1299,
      originalPrice: 1599,
      image: "/images/products/prod4.webp",
      badge: "AUTHENTIC",
    },
  },
  {
    step: "03",
    badge: "STAGE 03 • UNTOUCHED FOREST",
    tagline: "DENSE CLOUD RAINFORESTS",
    title: "Sheltered by mountain mist.",
    caption: "Untouched Himalayan rainforests where diverse flora thrives under dense monsoon cloud cover, isolated from human pollution.",
    image: "/images/origin/stage3_forest.jpg",
    elevation: "1,950m Cloud Belt",
    provenance: "Temperate Alpine Forest",
    product: {
      id: "prod-tulsi-japa",
      name: "Vrindavan Krishna Tulsi 108 Mala",
      subtitle: "HAND-TURNED BEADS, NATURAL EUGENOL",
      price: 1899,
      originalPrice: 2299,
      image: "/images/products/prod2.webp",
      badge: "TEMPLE SOIL",
    },
  },
  {
    step: "04",
    badge: "STAGE 04 • ANCIENT TREE",
    tagline: "ELAEOCARPUS GANITRUS ROXB.",
    title: "Decades in sacred soil.",
    caption: "Towering Elaeocarpus evergreen trees growing undisturbed for centuries, gathering the energy of alpine soil and mountain rains.",
    image: "/images/origin/hero_journey_tree.jpg",
    elevation: "1,800m Altitude",
    provenance: "Living Botanical Heritage",
    product: {
      id: "prod-rudraksha-108",
      name: "Himalayan Rudraksha 108 Mala",
      subtitle: "NATURAL 5-MUKHI, UNBLEACHED COTTON",
      price: 2899,
      originalPrice: 3499,
      image: "/images/products/prod1.webp",
      badge: "100% WILD",
    },
  },
  {
    step: "05",
    badge: "STAGE 05 • SACRED BLOSSOM",
    tagline: "DELICATE MONSOON BLOOM",
    title: "Ethereal white dawn petals.",
    caption: "Fringed white bell blossoms bloom quietly with the mountain rains, pollinated by high-altitude bees before setting fruit.",
    image: "/images/origin/hero_journey_flower.jpg",
    elevation: "1,700m Canopy",
    provenance: "Seasonal Monsoon Bloom",
    product: {
      id: "prod-tulsi-japa",
      name: "Vrindavan Krishna Tulsi 108 Mala",
      subtitle: "HAND-TURNED BEADS, NATURAL EUGENOL",
      price: 1899,
      originalPrice: 2299,
      image: "/images/products/prod2.webp",
      badge: "TEMPLE SOIL",
    },
  },
  {
    step: "06",
    badge: "STAGE 06 • THE BOTANICAL FRUIT",
    tagline: "BEFORE IT WAS A MALA, IT WAS A FRUIT.",
    title: "Nature precedes ritual.",
    caption: "High in the cloud forests, the sacred Rudraksha ripens as a vibrant electric-blue botanical fruit before human hands ever touch it.",
    image: "/images/origin/hero_journey_fruit.jpg",
    elevation: "1,600m Sacred Grove",
    provenance: "100% Wild Organic Fruit",
    product: {
      id: "prod-rudraksha-108",
      name: "Himalayan Rudraksha 108 Mala",
      subtitle: "NATURAL 5-MUKHI, UNBLEACHED COTTON",
      price: 2899,
      originalPrice: 3499,
      image: "/images/products/prod1.webp",
      badge: "100% WILD",
    },
  },
  {
    step: "07",
    badge: "STAGE 07 • RAW STONE SEED",
    tagline: "SACRED CELLULAR GEOMETRY",
    title: "The natural mukhi seed.",
    caption: "Beneath the blue fruit pulp lies the hard stone endocarp—furrowed with authentic mukhi facets formed entirely by nature's geometry.",
    image: "/images/origin/hero_journey_seed.jpg",
    elevation: "1,500m River Stone",
    provenance: "Raw Uncarved Endocarp",
    product: {
      id: "prod-lapis-bracelet",
      name: "Raw Earth Lapis Lazuli Bracelet",
      subtitle: "METAMORPHIC LAPIS, NATURAL PYRITE",
      price: 1999,
      originalPrice: 2499,
      image: "/images/products/prod3.webp",
      badge: "CERTIFIED",
    },
  },
  {
    step: "08",
    badge: "STAGE 08 • HAND CLEANSING",
    tagline: "HONORED BY HUMAN HANDS",
    title: "River water, patience and care.",
    caption: "Generational artisans in mountain riverbeds gently peel away the fruit pulp with spring water, revealing pristine grooves without acid or chemicals.",
    image: "/images/origin/hero_journey_wash.jpg",
    elevation: "1,400m Spring Bed",
    provenance: "Traditional Spring Washing",
    product: {
      id: "prod-rudraksha-wrist",
      name: "Tactile Himalayan Wrist Rudraksha",
      subtitle: "SELECTED 5-MUKHI SEEDS, RESILIENT CORE",
      price: 1299,
      originalPrice: 1599,
      image: "/images/products/prod4.webp",
      badge: "AUTHENTIC",
    },
  },
  {
    step: "09",
    badge: "STAGE 09 • SVASTIMĀN ARCHIVE",
    tagline: "SACRED FORM AND LAB PROVENANCE",
    title: "From origin to your hands.",
    caption: "Preserving raw integrity, verifying every mukhi with lab standards, and honoring the sacred object with traditional context, not fear.",
    image: "/images/origin/stage9_svastiman.jpg",
    elevation: "Sanctified Form",
    provenance: "Lab-Tested and Verified",
    product: {
      id: "prod-rudraksha-108",
      name: "Himalayan Rudraksha 108 Mala",
      subtitle: "NATURAL 5-MUKHI, UNBLEACHED COTTON",
      price: 2899,
      originalPrice: 3499,
      image: "/images/products/prod1.webp",
      badge: "100% WILD",
    },
  },
];

export function HeroBanner() {
  const [activeIndex, setActiveIndex] = useState(0); // Start on iconic Stage 01: Mountain Source
  const [prevIndex, setPrevIndex] = useState<number | null>(null);
  const [direction, setDirection] = useState<"next" | "prev">("next");
  const animTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const { addToCart, openCart } = useCart();

  const triggerSlideChange = useCallback(
    (nextIdx: number, customDir?: "next" | "prev") => {
      if (nextIdx === activeIndex) return;

      let dir: "next" | "prev" = customDir || "next";
      if (!customDir) {
        if (activeIndex === NINE_STAGES.length - 1 && nextIdx === 0) {
          dir = "next";
        } else if (activeIndex === 0 && nextIdx === NINE_STAGES.length - 1) {
          dir = "prev";
        } else {
          dir = nextIdx > activeIndex ? "next" : "prev";
        }
      }

      setDirection(dir);
      setPrevIndex(activeIndex);
      setActiveIndex(nextIdx);

      if (animTimeoutRef.current) {
        clearTimeout(animTimeoutRef.current);
      }
      animTimeoutRef.current = setTimeout(() => {
        setPrevIndex(null);
      }, 1100);
    },
    [activeIndex]
  );

  // Automatically cycle through background images every 4.5 seconds (within 4–5s range)
  useEffect(() => {
    const timer = setInterval(() => {
      triggerSlideChange((activeIndex + 1) % NINE_STAGES.length, "next");
    }, 4500);
    return () => clearInterval(timer);
  }, [activeIndex, triggerSlideChange]);

  useEffect(() => {
    return () => {
      if (animTimeoutRef.current) {
        clearTimeout(animTimeoutRef.current);
      }
    };
  }, []);

  const current = NINE_STAGES[activeIndex];

  const handleQuickAdd = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (current.product) {
      addToCart({
        id: current.product.id,
        name: current.product.name,
        price: current.product.price,
        originalPrice: current.product.originalPrice,
        image: current.product.image,
      });
      openCart();
    }
  };

  return (
    <section
      id="hero"
      className="relative w-full h-[calc(100dvh-82px)] sm:h-[calc(100vh-76px)] min-h-[480px] sm:min-h-[540px] lg:min-h-[600px] bg-black text-[#ECEADE] overflow-hidden border-b border-[#C5A880]/20 select-none"
    >
      {/* 1. Original Suatiman Background Photography with Smooth Cinematic Horizontal Slider & Subtle Fade */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {NINE_STAGES.map((stage, idx) => {
          const isIncoming = idx === activeIndex && prevIndex !== null;
          const isOutgoing = idx === prevIndex;
          const isStationaryActive = idx === activeIndex && prevIndex === null;

          let animClass = "";
          let visibilityClass = "opacity-0 pointer-events-none -z-10";

          if (isIncoming) {
            animClass = direction === "next" ? "hero-slide-in-right" : "hero-slide-in-left";
            visibilityClass = "z-10";
          } else if (isOutgoing) {
            animClass = direction === "next" ? "hero-slide-out-left" : "hero-slide-out-right";
            visibilityClass = "z-10";
          } else if (isStationaryActive) {
            visibilityClass = "z-10 opacity-100";
          }

          return (
            <div
              key={stage.step}
              className={`absolute inset-0 ${visibilityClass} ${animClass}`}
            >
              <Image
                src={stage.image}
                alt={stage.title}
                fill
                priority
                className="object-cover object-center brightness-100 contrast-100 transition-transform duration-[10000ms] ease-out scale-105"
                sizes="100vw"
              />
            </div>
          );
        })}

        {/* Neutral legibility gradient with zero navy blue color overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/15 to-transparent pointer-events-none z-10" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-black/20 to-transparent pointer-events-none z-10" />
      </div>


      {/* Main Content Area: Left-aligned, positioned in the lower portion */}
      <div className="absolute left-6 sm:left-10 lg:left-16 xl:left-20 bottom-20 sm:bottom-24 lg:bottom-28 z-20 max-w-4xl xl:max-w-5xl pr-4 text-left">
        <h1 className="font-serif text-3xl sm:text-5xl lg:text-7xl xl:text-[76px] font-normal text-white leading-[1.08] tracking-tight drop-shadow-md">
          {current.title}
        </h1>
      </div>

      {/* Bottom Center: Slide Pagination Line & Dots for the 9 Stages */}
      <div className="absolute bottom-12 sm:bottom-14 lg:bottom-16 left-1/2 -translate-x-1/2 z-20 flex items-center gap-1.5 sm:gap-2">
        {NINE_STAGES.map((stage, idx) => {
          const isActive = idx === activeIndex;
          return (
            <button
              key={stage.step}
              onClick={() => triggerSlideChange(idx)}
              className="p-1 focus:outline-none cursor-pointer"
              aria-label={`Go to stage ${stage.step}: ${stage.title}`}
            >
              {isActive ? (
                <span className="block w-7 sm:w-10 h-1 bg-white rounded-full transition-all duration-300 shadow-md" />
              ) : (
                <span className="block w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white/40 hover:bg-white/70 rounded-full transition-all duration-200" />
              )}
            </button>
          );
        })}
      </div>

      {/* Bottom Right: Quick-Buy Floating Product Card Lifted Above Bottom Edge */}
      {current.product && (
        <div className="hidden md:flex absolute bottom-16 sm:bottom-20 lg:bottom-24 right-4 sm:right-8 lg:right-12 xl:right-16 z-30 items-center gap-2">
          <div className="bg-[#122E46]/85 backdrop-blur-md rounded-2xl p-2.5 sm:p-3 shadow-2xl border border-[#C5A880]/30 flex items-center gap-3 sm:gap-4 max-w-[340px] transition-all duration-300 hover:border-[#C5A880]">
            {/* Product Link wrapper */}
            <Link
              href={getProductById(current.product.id)?.href || "/products"}
              className="flex items-center gap-3 sm:gap-4 flex-1 min-w-0 group/card"
            >
              {/* Thumbnail */}
              <div className="relative w-14 h-14 rounded-xl overflow-hidden bg-stone-900 shrink-0 border border-white/20 group-hover/card:scale-105 transition-transform duration-300">
                <Image
                  src={current.product.image}
                  alt={current.product.name}
                  fill
                  className="object-cover"
                  sizes="56px"
                />
                <span className="absolute top-1 right-1 bg-[#C5A880] text-[#122E46] text-[7.5px] font-bold px-1 py-0.5 rounded-full leading-none">
                  {current.product.badge}
                </span>
              </div>

              {/* Info */}
              <div className="flex-1 min-w-0 pr-1">
                <span className="block text-xs font-serif font-medium text-white truncate group-hover/card:text-[#DFCAAB] transition-colors">
                  {current.product.name}
                </span>
                <p className="text-[9px] tracking-wider uppercase text-[#DFCAAB] truncate mt-0.5 font-sans">
                  {current.product.subtitle}
                </p>
                <div className="flex items-center gap-2 mt-1">
                  <span className="text-xs font-bold text-white">
                    ₹{current.product.price.toLocaleString("en-IN")}
                  </span>
                  <span className="text-[10px] text-white/50 line-through">
                    ₹{current.product.originalPrice.toLocaleString("en-IN")}
                  </span>
                </div>
              </div>
            </Link>

            {/* Add to Cart */}
            <button
              onClick={handleQuickAdd}
              className="bg-[#C5A880] hover:bg-[#b0936b] text-[#122E46] px-3 py-2 rounded-lg text-[10px] font-bold tracking-wider uppercase transition-colors shrink-0 shadow-sm cursor-pointer active:scale-95"
            >
              Add
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
