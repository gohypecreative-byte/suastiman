"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ShoppingBag, ArrowRight, CheckCircle2, Sparkles, Compass } from "lucide-react";
import { useCart } from "@/context/CartContext";

export interface ProductItem {
  id: string;
  name: string;
  category: "all" | "rudraksha" | "tulsi" | "gemstones";
  material: string;
  origin: string;
  price: number;
  originalPrice: number;
  image: string;
  badge: string;
  specs: string[];
}

const PRODUCTS: ProductItem[] = [
  {
    id: "prod-rudraksha-108",
    name: "108-Seed Himalayan 5-Mukhi Rudraksha Mala",
    category: "rudraksha",
    material: "Wild Nepal Elaeocarpus & Unbleached Cotton",
    origin: "Taplejung, East Nepal (2,200m)",
    price: 2899,
    originalPrice: 3499,
    image: "/images/origin/stage9_svastiman.jpg",
    badge: "100% Wild Sourced",
    specs: ["Lab X-Ray Tested", "Traditional Brahmagranthi Knots", "Sandalwood Oil Cured"],
  },
  {
    id: "prod-tulsi-japa",
    name: "Aged Krishna Tulsi Wood 108 Japa Mala",
    category: "tulsi",
    material: "Naturally Cured Holy Basil Heartwood",
    origin: "Vrindavan Temple Groves, UP",
    price: 1899,
    originalPrice: 2299,
    image: "/images/origin/tulsi_heritage_plant.jpg",
    badge: "Temple Soil Harvest",
    specs: ["Hand-Turned Micro Lathe", "Raw Beeswax Buffed", "Natural Eugenol Scent"],
  },
  {
    id: "prod-lapis-bracelet",
    name: "Raw Earth Lapis Lazuli & Brass Bracelet",
    category: "gemstones",
    material: "Untreated Metamorphic Lapis with Pyrite",
    origin: "Jaipur Water Lapidary Craft",
    price: 1999,
    originalPrice: 2499,
    image: "/images/origin/brand_macro_detail.jpg",
    badge: "Zero Chemical Dye",
    specs: ["Certified Mineralogy", "Natural Pyrite Veins", "High-Tensile Resilient Cord"],
  },
  {
    id: "prod-rudraksha-wrist",
    name: "Raw 5-Mukhi Rudraksha Tactile Wrist Mala",
    category: "rudraksha",
    material: "Direct Himalayan Endocarp Beads",
    origin: "Himalayan Spring Wash Guild",
    price: 1499,
    originalPrice: 1899,
    image: "/images/origin/hero_journey_seed.jpg",
    badge: "Raw Woodstone",
    specs: ["Natural Furrowed Mukhis", "Specific Gravity > 1.2", "Daily Mindful Wear"],
  },
];

export function FeaturedProducts() {
  const [filter, setFilter] = useState<"all" | "rudraksha" | "tulsi" | "gemstones">("all");
  const { addToCart } = useCart();

  const filtered = filter === "all" ? PRODUCTS : PRODUCTS.filter((p) => p.category === filter);

  return (
    <section id="featured-products" className="py-20 sm:py-28 bg-[#FBF9F5] text-[#0C161D] relative overflow-hidden border-b border-[#E8E2D5]">
      {/* Background Subtle Organic Texture */}
      <div className="absolute inset-0 bg-[radial-gradient(#C5A880_1px,transparent_1px)] [background-size:28px_28px] opacity-[0.08] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
        {/* Section Header: Minimal & Tactile Focus */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EFECE5] border border-[#C5A880]/30 text-[10px] sm:text-[11px] font-mono tracking-[0.25em] uppercase text-[#7A6242]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#8E704F]" />
              <span>7. Product Showcase</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal text-[#1A1815] leading-[1.12] tracking-tight">
              Tactile Sacred Objects, <br className="hidden sm:inline" />
              <span className="italic text-[#7A6242] font-light">rooted in honest origin.</span>
            </h2>

            <p className="text-stone-600 font-light text-sm sm:text-base max-w-xl">
              Extreme detailed macro photography showcasing raw natural textures. Zero plastic coatings or artificial dyes.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-2 bg-[#EFECE6] p-1.5 rounded-full border border-[#DCD6C7] self-start lg:self-end">
            {(["all", "rudraksha", "tulsi", "gemstones"] as const).map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-1.5 rounded-full text-xs font-medium tracking-wider uppercase transition-all duration-300 ${
                  filter === cat
                    ? "bg-[#0C161D] text-white font-semibold shadow-md"
                    : "text-stone-600 hover:text-black hover:bg-white/50"
                }`}
              >
                {cat === "all" ? "All Pieces" : cat === "rudraksha" ? "Rudraksha" : cat === "tulsi" ? "Tulsi" : "Gemstones"}
              </button>
            ))}
          </div>
        </div>

        {/* 4-Product (Mobile Horizontal Swipe Carousel / Desktop 4-col Grid) */}
        <div className="flex sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 overflow-x-auto sm:overflow-x-visible snap-x snap-mandatory no-scrollbar -mx-5 px-5 sm:mx-0 sm:px-0 pb-4 sm:pb-0">
          {filtered.map((prod) => (
            <div
              key={prod.id}
              className="group relative rounded-2xl overflow-hidden bg-white border border-[#E0D9CA] hover:border-[#C5A880] shadow-md hover:shadow-2xl transition-all duration-500 flex flex-col justify-between shrink-0 w-[78vw] xs:w-[68vw] sm:w-auto snap-center"
            >
              {/* Product Macro Image (70% Visual) */}
              <div className="relative w-full aspect-[4/5] overflow-hidden bg-stone-900">
                <Image
                  src={prod.image}
                  alt={prod.name}
                  fill
                  className="object-cover brightness-[0.96] contrast-[1.04] group-hover:scale-105 transition-transform duration-700 ease-out"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

                {/* Bottom Origin On Image */}
                <div className="absolute bottom-3 left-3.5 right-3.5 pointer-events-none">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-stone-200 block truncate">
                    {prod.origin}
                  </span>
                </div>
              </div>

              {/* Product Info (30% Minimal Text) */}
              <div className="p-4 sm:p-5 space-y-3 bg-white flex flex-col justify-between flex-1">
                <div className="space-y-1.5">
                  <h3 className="font-serif text-base sm:text-lg font-normal text-[#1A1815] leading-snug group-hover:text-[#7A6242] transition-colors line-clamp-2">
                    {prod.name}
                  </h3>
                  <p className="text-xs text-stone-500 font-light truncate">
                    {prod.material}
                  </p>
                </div>

                {/* Spec Pills */}
                <div className="flex flex-wrap gap-1">
                  {prod.specs.slice(0, 2).map((s, i) => (
                    <span key={i} className="px-2 py-0.5 rounded bg-[#F4F1EA] text-[10px] font-mono text-stone-600">
                      {s}
                    </span>
                  ))}
                </div>

                {/* Price and Add to Bag */}
                <div className="pt-3 border-t border-[#EAE5D8] flex items-center justify-between">
                  <div>
                    <span className="text-base font-semibold text-[#1A1815]">₹{prod.price}</span>
                    <span className="text-xs text-stone-400 line-through ml-2">₹{prod.originalPrice}</span>
                  </div>

                  <button
                    onClick={() =>
                      addToCart({
                        id: prod.id,
                        name: prod.name,
                        price: prod.price,
                        image: prod.image,
                        originalPrice: prod.originalPrice,
                      })
                    }
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#0C161D] hover:bg-[#7A6242] text-[#ECEADE] text-[11px] font-mono uppercase tracking-wider transition-colors shadow-sm"
                  >
                    <ShoppingBag className="w-3 h-3" />
                    <span>Acquire</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
