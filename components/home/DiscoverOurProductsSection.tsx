"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Bookmark, Check, Plus } from "lucide-react";
import { useCart } from "@/context/CartContext";

export interface DiscoverProduct {
  id: string;
  sku: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: "all" | "1-round" | "2-rounds" | "3-rounds" | "carved-leaf" | "japa-mala";
}

// 9 Sacred Tulsi Radha Krishan Kanthi Mala Products (3x3 grid)
const DISCOVER_PRODUCTS: DiscoverProduct[] = [
  {
    id: "disc-tulsi-01",
    sku: "T01",
    name: "Tulsi Radha Krishan Kanthi Mala 1 Round",
    price: 399,
    originalPrice: 549,
    image: "/images/products/tulsi/tulsi_01.jpg",
    category: "1-round",
  },
  {
    id: "disc-tulsi-02",
    sku: "T02",
    name: "Shri Ram Naam Patta Tulsi Mala",
    price: 449,
    originalPrice: 599,
    image: "/images/products/tulsi/tulsi_02.jpg",
    category: "carved-leaf",
  },
  {
    id: "disc-tulsi-03",
    sku: "T03",
    name: "Radha Krishna Oval Pendant Tulsi Mala",
    price: 399,
    originalPrice: 549,
    image: "/images/products/tulsi/tulsi_03.jpg",
    category: "1-round",
  },
  {
    id: "disc-tulsi-04",
    sku: "T04",
    name: "Vrindavan Cylindrical Tulsi Kanthi Mala",
    price: 449,
    originalPrice: 599,
    image: "/images/products/tulsi/tulsi_04.jpg",
    category: "1-round",
  },
  {
    id: "disc-tulsi-05",
    sku: "T05",
    name: "Tulsi Radha Krishan Kanthi Mala 2 Rounds",
    price: 499,
    originalPrice: 649,
    image: "/images/products/tulsi/tulsi_05.jpg",
    category: "2-rounds",
  },
  {
    id: "disc-tulsi-06",
    sku: "T06",
    name: "Tulsi Radha Krishan Kanthi Mala 3 Rounds",
    price: 599,
    originalPrice: 799,
    image: "/images/products/tulsi/tulsi_06.jpg",
    category: "3-rounds",
  },
  {
    id: "disc-tulsi-07",
    sku: "T07",
    name: "Radha Krishna Barrel Lock Tulsi Mala",
    price: 429,
    originalPrice: 579,
    image: "/images/products/tulsi/tulsi_07.jpg",
    category: "1-round",
  },
  {
    id: "disc-tulsi-08",
    sku: "T08",
    name: "Shyam Kund Dark Wood Radha Krishna Mala",
    price: 469,
    originalPrice: 619,
    image: "/images/products/tulsi/tulsi_08.jpg",
    category: "1-round",
  },
  {
    id: "disc-tulsi-09",
    sku: "T09",
    name: "108 Beads Vrindavan Tulsi Japa Mala",
    price: 699,
    originalPrice: 899,
    image: "/images/products/tulsi/tulsi_09_japa_beads.jpg",
    category: "japa-mala",
  },
];

export function DiscoverOurProductsSection() {
  const { isInWishlist, toggleWishlist, addToCart, openCart } = useCart();
  const [addedSku, setAddedSku] = useState<string | null>(null);

  const handleToggleSave = (prod: DiscoverProduct, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    toggleWishlist({
      id: prod.id,
      name: prod.name,
      price: prod.price,
      originalPrice: prod.originalPrice,
      image: prod.image,
      category: prod.category,
    });
  };

  const handleQuickAdd = (prod: DiscoverProduct, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart({
      id: prod.id,
      name: prod.name,
      price: prod.price,
      originalPrice: prod.originalPrice,
      image: prod.image,
    });
    setAddedSku(prod.sku);
    openCart();
    setTimeout(() => setAddedSku(null), 2000);
  };

  return (
    <section id="discover-our-products" className="w-full py-16 sm:py-20 lg:py-24 bg-[#FAF8F5]">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">

        {/* ========================================================================= */}
        {/* HEADER: Title Matching Image 1 Reference                                  */}
        {/* ========================================================================= */}
        <div className="text-center mb-10 sm:mb-14">
          <h2
            className="text-3xl sm:text-4xl lg:text-[42px] font-normal text-[#122E46] tracking-tight leading-none"
            style={{ fontFamily: "var(--font-serif), 'Playfair Display', Georgia, serif" }}
          >
            Discover Our Products
          </h2>
        </div>

        {/* ========================================================================= */}
        {/* PRODUCT GRID: 3 Columns x 3 Rows (Matching Image 1 & Image 2)             */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 lg:gap-12">
          {DISCOVER_PRODUCTS.map((prod) => (
            <Link
              key={prod.id}
              href={`/products/tulsi/${prod.sku.toLowerCase()}`}
              className="group flex flex-col cursor-pointer select-none"
            >
              {/* Product Image Box Matching Image 2 */}
              <div className="relative aspect-square w-full bg-white border border-[#E8E2D5]/80 overflow-hidden flex items-center justify-center transition-all duration-300 group-hover:border-[#C5A880] group-hover:shadow-sm">
                <Image
                  src={prod.image}
                  alt={prod.name}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                />

                {/* Bookmark Wishlist Button (Discreet in Top Right) */}
                <button
                  type="button"
                  onClick={(e) => handleToggleSave(prod, e)}
                  className="absolute top-3.5 right-3.5 z-10 w-8 h-8 rounded-full bg-white/95 backdrop-blur-xs border border-stone-200/80 flex items-center justify-center text-stone-700 hover:text-black transition-all shadow-xs hover:scale-105 active:scale-95 cursor-pointer"
                  aria-label="Save to Wishlist"
                  title="Save to Wishlist"
                >
                  <Bookmark
                    className={`w-3.5 h-3.5 transition-colors ${isInWishlist(prod.id)
                      ? "fill-[#122E46] text-[#122E46]"
                      : "stroke-[1.8]"
                      }`}
                  />
                </button>

                {/* Quick Add Button in Bottom Right */}
                <button
                  type="button"
                  onClick={(e) => handleQuickAdd(prod, e)}
                  className="absolute bottom-3.5 right-3.5 z-10 w-8 h-8 rounded-full bg-[#122E46] hover:bg-black text-white flex items-center justify-center transition-all shadow-md hover:scale-105 active:scale-95 cursor-pointer opacity-90 group-hover:opacity-100"
                  aria-label="Add to cart"
                  title="Add to cart"
                >
                  {addedSku === prod.sku ? (
                    <Check className="w-3.5 h-3.5 text-emerald-400 stroke-[2.5]" />
                  ) : (
                    <Plus className="w-3.5 h-3.5 stroke-[2.2]" />
                  )}
                </button>
              </div>

              {/* Minimalist Centered Typography Matching Image 1 & 2 */}
              <div className="pt-4 text-center flex flex-col items-center space-y-1">
                <h3
                  className="text-xs sm:text-sm font-sans font-medium text-[#122E46] tracking-wide text-center group-hover:text-[#7A6242] transition-colors line-clamp-1"
                >
                  {prod.name}
                </h3>
                <p className="text-xs sm:text-[13px] font-sans text-stone-500 font-normal tracking-wider">
                  ₹ {prod.price}.00 INR
                </p>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}
