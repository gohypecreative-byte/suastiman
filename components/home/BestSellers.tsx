"use client";

import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight, ArrowRight, ShoppingBag, Star } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { getProductById } from "@/lib/products";

interface Product {
  id: string;
  name: string;
  subtitle: string;
  price: number;
  originalPrice?: number;
  image: string;
  badge?: string;
  rating: number;
  reviews: number;
}

const bestSellers: Product[] = [
  {
    id: "prod-rudraksha-108",
    name: "Himalayan Rudraksha 108 Japa Mala",
    subtitle: "Natural 5-Mukhi, Unbleached Cotton",
    price: 2899,
    originalPrice: 3499,
    image: "/images/products/prod1.webp",
    badge: "Most Loved",
    rating: 4.9,
    reviews: 128,
  },
  {
    id: "prod-tulsi-japa",
    name: "Vrindavan Krishna Tulsi 108 Mala",
    subtitle: "Aged Holy Basil Wood, Raw Beeswax",
    price: 1899,
    originalPrice: 2299,
    image: "/images/products/prod2.webp",
    badge: "Temple Soil",
    rating: 4.9,
    reviews: 94,
  },
  {
    id: "prod-lapis-bracelet",
    name: "Raw Earth Lapis Lazuli Bracelet",
    subtitle: "Metamorphic Lapis with Natural Pyrite",
    price: 1999,
    originalPrice: 2499,
    image: "/images/products/prod3.webp",
    badge: "Certified Mineral",
    rating: 4.8,
    reviews: 76,
  },
  {
    id: "prod-rudraksha-wrist",
    name: "Tactile Himalayan Wrist Rudraksha",
    subtitle: "Selected Mukhi Seeds, Resilient Core",
    price: 1299,
    originalPrice: 1599,
    image: "/images/products/prod4.webp",
    badge: "Daily Wear",
    rating: 5.0,
    reviews: 112,
  },
  {
    id: "prod-zodiac-collection",
    name: "Zodiac Energy Alignment Bracelet",
    subtitle: "Custom Astrological Birth Chart Gemstones",
    price: 2499,
    originalPrice: 2999,
    image: "/images/products/zodiac_bracelets_collection.jpg",
    badge: "Birthstone",
    rating: 4.9,
    reviews: 83,
  },
];

export function BestSellers() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const { addToCart, openCart } = useCart();

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const itemWidth = scrollRef.current.children[0]?.clientWidth || 320;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -itemWidth * 1.5 : itemWidth * 1.5,
        behavior: "smooth",
      });
    }
  };

  const handleAddToCart = (e: React.MouseEvent, prod: Product) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart({
      id: prod.id,
      name: prod.name,
      price: prod.price,
      originalPrice: prod.originalPrice,
      image: prod.image,
    });
    openCart();
  };

  return (
    <section id="bestsellers" className="py-20 sm:py-24 bg-[#F9F8F5] border-b border-[#E2DEC9] relative">
      <div className="max-w-[1520px] mx-auto px-4 sm:px-8 lg:px-12">
        {/* Header matching Hira's Collection Carousel style with Svastiman Brand Tokens */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div className="space-y-3.5 sm:space-y-4">
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#122E46] font-normal tracking-[-0.015em] leading-[1.18]">
              Most Revered Creations
            </h2>
            <p className="text-stone-600 text-sm sm:text-[15px] font-light leading-relaxed max-w-xl">
              The consecrated malas and healing gemstones most chosen by practitioners and seekers.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="/products"
              className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.14em] uppercase text-[#122E46] hover:text-[#C5A880] transition-colors group mr-2"
            >
              <span>View All Pieces</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </Link>

            <button
              onClick={() => scroll("left")}
              className="w-10 h-10 rounded-full border border-[#E2DEC9] bg-white text-[#122E46] hover:bg-[#122E46] hover:text-[#FAF8F5] flex items-center justify-center transition-colors shadow-xs cursor-pointer"
              aria-label="Previous"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll("right")}
              className="w-10 h-10 rounded-full border border-[#E2DEC9] bg-white text-[#122E46] hover:bg-[#122E46] hover:text-[#FAF8F5] flex items-center justify-center transition-colors shadow-xs cursor-pointer"
              aria-label="Next"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Carousel Container */}
        <div className="relative w-full">
          <div
            ref={scrollRef}
            className="flex items-stretch overflow-x-auto scrollbar-none snap-x snap-mandatory pb-4 gap-5 sm:gap-6"
          >
            {bestSellers.map((product) => {
              const productHref = getProductById(product.id)?.href || "/products";
              return (
                <div
                  key={product.id}
                  className="w-[280px] sm:w-[320px] shrink-0 snap-start bg-white rounded-2xl border border-[#E2DEC9] overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    {/* Image container */}
                    <Link href={productHref} className="block relative aspect-square w-full overflow-hidden bg-stone-100">
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                        sizes="(max-width: 640px) 280px, 320px"
                      />

                      {/* Badge */}
                      {product.badge && (
                        <span className="absolute top-3 left-3 bg-[#122E46] text-[#FAF8F5] text-[10px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-sm shadow-xs">
                          {product.badge}
                        </span>
                      )}

                      {/* Star Rating Badge */}
                      <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-xs px-2 py-0.5 rounded-md flex items-center gap-1 border border-stone-200/60 shadow-xs">
                        <Star className="w-3 h-3 fill-[#C5A880] text-[#C5A880]" />
                        <span className="text-[11px] font-bold text-[#111111]">{product.rating}</span>
                        <span className="text-[10px] text-stone-500">({product.reviews})</span>
                      </div>
                    </Link>

                    {/* Info */}
                    <div className="p-4 sm:p-5">
                      <Link href={productHref} className="block">
                        <h3 className="font-serif text-base sm:text-lg font-normal text-[#122E46] leading-snug hover:text-[#C5A880] transition-colors line-clamp-1">
                          {product.name}
                        </h3>
                        <p className="text-[11px] text-stone-500 font-sans tracking-wide mt-1 line-clamp-1">
                          {product.subtitle}
                        </p>
                      </Link>

                    <div className="flex items-center gap-2.5 mt-3">
                      <span className="text-base font-bold text-[#111111]">
                        ₹{product.price.toLocaleString("en-IN")}
                      </span>
                      {product.originalPrice && (
                        <span className="text-xs text-stone-400 line-through">
                          ₹{product.originalPrice.toLocaleString("en-IN")}
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Direct Add to Cart Button in Svastiman's button style */}
                <div className="px-4 pb-4 sm:px-5 sm:pb-5">
                  <button
                    onClick={(e) => handleAddToCart(e, product)}
                    className="w-full bg-[#122E46] hover:bg-[#C5A880] text-[#FAF8F5] py-2.5 rounded-lg text-xs font-semibold tracking-[0.14em] uppercase transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-xs active:scale-[0.99]"
                  >
                    <ShoppingBag className="w-3.5 h-3.5" />
                    <span>Add to Cart</span>
                  </button>
                </div>
              </div>
            );
          })}
          </div>
        </div>
      </div>
    </section>
  );
}
