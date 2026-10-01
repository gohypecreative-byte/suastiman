"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Star, ShoppingBag, Sparkles, ChevronLeft, ChevronRight } from "lucide-react";
import { useCart } from "@/context/CartContext";

interface Product {
  id: string;
  name: string;
  category: "zodiac" | "malas" | "bracelets" | "chakra";
  crystal: string;
  intention: string;
  price: number;
  originalPrice: number;
  rating: number;
  reviewCount: number;
  image: string;
  badge?: string;
}

const products: Product[] = [
  {
    id: "p1",
    name: "Divine 108 Rudraksha & Lapis Lazuli Meditation Mala",
    category: "malas",
    crystal: "Natural 5-Mukhi Rudraksha & Grade-A Lapis",
    intention: "Deep Dhyana & Intuitive Awakening",
    price: 2499,
    originalPrice: 3299,
    rating: 4.9,
    reviewCount: 142,
    image: "https://images.unsplash.com/photo-1600003014755-ba31aa59c4b6?auto=format&fit=crop&w=600&q=80",
    badge: "Most Auspicious",
  },
  {
    id: "p2",
    name: "Golden Pyrite & Citrine Abundance Magnet Bracelet",
    category: "bracelets",
    crystal: "Raw Peruvian Pyrite & Natural Sun Citrine",
    intention: "Wealth, Success & Solar Radiance",
    price: 1999,
    originalPrice: 2599,
    rating: 4.8,
    reviewCount: 98,
    image: "https://images.unsplash.com/photo-1596944924616-7b38e7cfac36?auto=format&fit=crop&w=600&q=80",
    badge: "Bestseller",
  },
  {
    id: "p3",
    name: "Sacred 7-Chakra Alignment Prana Harmonizer",
    category: "chakra",
    crystal: "Amethyst, Sodalite, Turquoise, Jade, Citrine, Carnelian, Red Jasper",
    intention: "Complete Energetic Balance",
    price: 1899,
    originalPrice: 2499,
    rating: 5.0,
    reviewCount: 215,
    image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=600&q=80",
    badge: "Top Rated",
  },
  {
    id: "p4",
    name: "Moonstone & Rose Quartz Anahata Love Talisman",
    category: "bracelets",
    crystal: "Madagascar Rose Quartz & Sri Lankan Moonstone",
    intention: "Heart Harmony & Soul Connection",
    price: 1799,
    originalPrice: 2299,
    rating: 4.9,
    reviewCount: 86,
    image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "p5",
    name: "Black Obsidian & Raw Tourmaline Auric Shield",
    category: "bracelets",
    crystal: "Natural Black Tourmaline & Volcanic Obsidian",
    intention: "Evil Eye & Psychic Protection",
    price: 1899,
    originalPrice: 2399,
    rating: 4.8,
    reviewCount: 164,
    image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&w=600&q=80",
    badge: "Protective Shield",
  },
  {
    id: "p6",
    name: "Zodiac Celestial Sun Leo & Aries Strength Band",
    category: "zodiac",
    crystal: "Golden Tiger Eye & Lava Rock",
    intention: "Willpower, Courage & Leadership",
    price: 1999,
    originalPrice: 2599,
    rating: 4.9,
    reviewCount: 112,
    image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=600&q=80",
  },
];

export function FeaturedProducts() {
  const [activeTab, setActiveTab] = useState<string>("all");
  const { addToCart } = useCart();
  const scrollRef = useRef<HTMLDivElement>(null);

  const filtered =
    activeTab === "all" ? products : products.filter((p) => p.category === activeTab);

  // Auto-scroll logic
  useEffect(() => {
    const timer = setInterval(() => {
      if (scrollRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
        // If reached the end, scroll back to start, else scroll right by one item width
        if (scrollLeft + clientWidth >= scrollWidth - 10) {
          scrollRef.current.scrollTo({ left: 0, behavior: "smooth" });
        } else {
          // Calculate item width based on first child
          const itemWidth = scrollRef.current.children[0]?.clientWidth || 300;
          scrollRef.current.scrollBy({ left: itemWidth, behavior: "smooth" });
        }
      }
    }, 4000); // 4 seconds

    return () => clearInterval(timer);
  }, [filtered.length]); // Reset interval when tab changes

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const itemWidth = scrollRef.current.children[0]?.clientWidth || 300;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -itemWidth : itemWidth,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="products-section" className="py-20 bg-[#132F47] overflow-hidden">
      {/* Header and Tabs container */}
      <div className="w-full">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 px-4 sm:px-6 lg:px-12">
          <div>
            <div className="inline-flex items-center gap-2 text-[#C5A880] text-xs font-semibold uppercase tracking-widest mb-2">
              <span>Sacred Creations</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#ECEADE] font-normal">
              Curated Spiritual Accessories
            </h2>
            <p className="text-[#ECEADE]/70 text-sm mt-1 max-w-xl font-light">
              Crafted in reverence with natural gemstones, consecrated with Vedic mantras, and
              designed for modern elegance.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto bg-[#111111]/50 p-1.5 rounded-xl border border-[#ECEADE]/10 scrollbar-none">
            {[
              { id: "all", label: "All Sacred" },
              { id: "bracelets", label: "Bracelets" },
              { id: "malas", label: "Meditation Malas" },
              { id: "zodiac", label: "Zodiac" },
              { id: "chakra", label: "Chakra" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all shrink-0 ${
                  activeTab === tab.id
                    ? "bg-[#C5A880] text-[#111111] shadow-xs"
                    : "text-[#ECEADE] hover:text-[#C5A880] hover:bg-[#ECEADE]/5"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Product Carousel (Full Bleed) */}
        <div className="relative group w-full">
          {/* Left Arrow */}
          <button
            onClick={() => scroll("left")}
            className="absolute left-0 top-[35%] -translate-y-1/2 -translate-x-4 z-10 p-2 bg-[#111111]/80 hover:bg-[#111111] text-[#ECEADE] rounded-md opacity-0 group-hover:opacity-100 transition-opacity hidden md:block border border-[#ECEADE]/20"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <div
            ref={scrollRef}
            className="flex items-start overflow-x-auto scrollbar-none snap-x snap-mandatory pb-8"
          >
            {filtered.map((product) => (
              <div
                key={product.id}
                className="group/card flex-none w-full sm:w-1/2 md:w-1/3 lg:w-1/5 px-3 sm:px-4 snap-start flex flex-col justify-between"
              >
                {/* Image Container */}
                <Link href={`/products/${product.id}`} className="relative aspect-square w-full bg-[#111111] overflow-hidden block mb-4 border border-[#ECEADE]/10 rounded-[7px]">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover group-hover/card:scale-105 transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, 25vw"
                  />

                  {/* Badge */}
                  {product.badge && (
                    <div className="absolute top-3 left-3 bg-[#C5A880] text-[#111111] text-[10px] font-semibold tracking-wider uppercase px-2.5 py-1 rounded-sm shadow-xs">
                      {product.badge}
                    </div>
                  )}

                </Link>

                {/* Product Info */}
                <div className="flex flex-col space-y-2">
                  <div className="flex items-center gap-1 text-[#C5A880] mb-1">
                    <Star className="w-3.5 h-3.5 fill-[#C5A880] text-[#C5A880]" />
                    <span className="font-semibold text-xs text-[#ECEADE]">{product.rating}</span>
                    <span className="text-[10px] text-[#ECEADE]/50">({product.reviewCount})</span>
                  </div>

                  <Link href={`/products/${product.id}`} className="font-serif text-base text-[#ECEADE] font-medium leading-snug group-hover/card:text-[#C5A880] transition-colors line-clamp-2">
                    {product.name}
                  </Link>

                  <p className="text-xs text-[#ECEADE]/60 font-light line-clamp-1">
                    Intention: {product.intention}
                  </p>

                  {/* Price & Cart Icon */}
                  <div className="pt-2 flex items-center justify-between">
                    <div className="flex items-baseline gap-2">
                      <span className="font-serif text-lg font-normal text-[#ECEADE]">
                        ₹{product.price}
                      </span>
                      <span className="text-xs text-[#ECEADE]/40 line-through">
                        ₹{product.originalPrice}
                      </span>
                    </div>

                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        addToCart({
                          id: product.id,
                          name: product.name,
                          price: product.price,
                          originalPrice: product.originalPrice,
                          image: product.image,
                          intention: product.intention,
                          crystal: product.crystal,
                        });
                      }}
                      className="p-1.5 text-[#C5A880] hover:bg-[#111111] hover:text-[#ECEADE] rounded-full transition-colors active:scale-95"
                      title="Add to Bag"
                    >
                      <ShoppingBag className="w-4 h-4 sm:w-5 sm:h-5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Arrow */}
          <button
            onClick={() => scroll("right")}
            className="absolute right-0 top-[35%] -translate-y-1/2 translate-x-4 z-10 p-2 bg-[#111111]/80 hover:bg-[#111111] text-[#ECEADE] rounded-md opacity-0 group-hover:opacity-100 transition-opacity hidden md:block border border-[#ECEADE]/20"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
