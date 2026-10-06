"use client";

import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight, ArrowRight, ShoppingBag } from "lucide-react";
import { useCart } from "@/context/CartContext";

interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  badge?: string;
}

const bestSellers: Product[] = [
  {
    id: "bs1",
    name: "Planetary Alignment Nav Grah (9 planets) Mala",
    price: 2999,
    image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=600&q=80",
    badge: "Most Loved",
  },
  {
    id: "bs2",
    name: "Radiant Aura 108 Obsidian Protection Mala",
    price: 1999,
    image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&w=600&q=80",
    badge: "Trending",
  },
  {
    id: "bs3",
    name: "Classic Pyrite Bracelet | Wealth & Prosperity",
    price: 2299,
    image: "https://images.unsplash.com/photo-1596944924616-7b38e7cfac36?auto=format&fit=crop&w=600&q=80",
    badge: "Our Pick",
  },
  {
    id: "bs4",
    name: "The Magnificent Protector Evil Eye Tourmaline Bracelet",
    price: 2299,
    image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "bs5",
    name: "Strong Individual Kalawa Thread Inspired Bracelet",
    price: 2499,
    originalPrice: 2999,
    image: "https://images.unsplash.com/photo-1600003014755-ba31aa59c4b6?auto=format&fit=crop&w=600&q=80",
    badge: "-10%",
  },
];

export function BestSellers() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const { addToCart } = useCart();

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
    <section className="py-20 bg-[#132F47] border-y border-[#111111] relative">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl sm:text-4xl text-[#ECEADE] font-semibold mb-2">
            Best Sellers
          </h2>
          <p className="text-[#ECEADE]/70 text-sm font-medium">
            The pieces our customers choose most.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative group w-full">
          {/* Left Arrow */}
          <button
            onClick={() => scroll("left")}
            className="absolute left-0 top-[40%] -translate-y-1/2 -translate-x-4 z-10 w-8 h-8 flex items-center justify-center bg-[#ECEADE] text-[#132F47] opacity-0 group-hover:opacity-100 transition-opacity hidden md:flex"
            aria-label="Previous"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <div
            ref={scrollRef}
            className="flex items-start overflow-x-auto scrollbar-none snap-x snap-mandatory pb-4 gap-6"
          >
            {bestSellers.map((product) => (
              <div
                key={product.id}
                className="group/card flex-none w-[80vw] sm:w-[45vw] md:w-[30vw] lg:w-[280px] xl:w-[250px] snap-start flex flex-col"
              >
                {/* Image Container - 100% visible */}
                <Link href={`/products/${product.id}`} className="relative aspect-square w-full bg-[#FAF8F5] overflow-hidden block mb-4 border border-[#132F47]/10 rounded-[7px] p-2">
                  <div className="relative w-full h-full">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-contain object-center group-hover/card:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, 25vw"
                    />
                  </div>
                  
                  {/* Badge */}
                  {product.badge && (
                    <div className="absolute top-3 left-3 bg-[#C5A880] text-[#111111] text-[10px] font-semibold px-2 py-1 shadow-sm">
                      {product.badge}
                    </div>
                  )}
                </Link>

                {/* Product Info */}
                <div className="flex flex-col space-y-1">
                  <Link href={`/products/${product.id}`} className="font-serif text-sm text-[#ECEADE] font-medium leading-snug hover:text-[#C5A880] transition-colors line-clamp-2 min-h-[40px]">
                    {product.name}
                  </Link>

                  {/* Price & Cart Icon */}
                  <div className="flex items-center justify-between mt-1">
                    <div className="flex items-baseline gap-2">
                      {product.originalPrice && (
                        <span className="text-xs text-[#ECEADE]/50 line-through">
                          ₹{product.originalPrice.toLocaleString()}
                        </span>
                      )}
                      <span className="text-sm font-semibold text-[#ECEADE]">
                        ₹{product.price.toLocaleString()}
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
                          intention: "Best Seller",
                          crystal: "Assorted",
                        });
                      }}
                      className="p-1.5 text-[#C5A880] hover:bg-[#111111] hover:text-[#ECEADE] rounded-full transition-colors active:scale-95"
                      title="Add to Bag"
                    >
                      <ShoppingBag className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Arrow */}
          <button
            onClick={() => scroll("right")}
            className="absolute right-0 top-[40%] -translate-y-1/2 translate-x-4 z-10 w-8 h-8 flex items-center justify-center bg-[#ECEADE] text-[#132F47] opacity-0 group-hover:opacity-100 transition-opacity hidden md:flex"
            aria-label="Next"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* View All Button */}
        <div className="mt-12 flex justify-center">
          <Link
            href="/collections/best-sellers"
            className="inline-flex items-center gap-2 px-8 py-3 bg-[#F9EBCA] text-[#132F47] text-xs font-bold uppercase tracking-widest hover:bg-[#EBD5A6] transition-colors shadow-sm"
          >
            VIEW BEST SELLERS
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </section>
  );
}
