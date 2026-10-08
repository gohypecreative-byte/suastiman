"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CartDrawer } from "@/components/cart/CartDrawer";
import { BottomNav } from "@/components/layout/BottomNav";
import { CartProvider, useCart, WishlistItem } from "@/context/CartContext";
import {
  Heart,
  Trash2,
  ShoppingBag,
  ArrowRight,
  ShieldCheck,
  Truck,
  Check,
  Compass,
  ArrowLeft,
  CheckCircle2,
} from "lucide-react";

function WishlistContent() {
  const { wishlist, removeFromWishlist, addToCart, openCart } = useCart();
  const [movedId, setMovedId] = useState<string | null>(null);

  const handleMoveToCart = (item: WishlistItem) => {
    addToCart({
      id: item.id,
      name: item.name,
      price: item.price,
      originalPrice: item.originalPrice,
      image: item.image,
    });
    setMovedId(item.id);
    setTimeout(() => {
      setMovedId(null);
      removeFromWishlist(item.id);
    }, 600);
  };

  const handleMoveAllToCart = () => {
    wishlist.forEach((item) => {
      addToCart({
        id: item.id,
        name: item.name,
        price: item.price,
        originalPrice: item.originalPrice,
        image: item.image,
      });
    });
    openCart();
  };

  return (
    <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      {/* Page Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-8 mb-8 border-b border-[#E8E2D5]">
        <div>
          <h1 className="font-serif text-3xl sm:text-5xl font-normal text-[#1A1815] tracking-tight">
            Sacred Wishlist
          </h1>
          <p className="text-xs sm:text-sm text-stone-500 font-light mt-2 max-w-xl">
            Contemplated sacred objects, unheated gemstones, and wild Himalayan botanicals saved for your daily ritual.
          </p>
        </div>

        {wishlist.length > 0 && (
          <div className="flex items-center gap-3">
            <button
              onClick={handleMoveAllToCart}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#122E46] hover:bg-[#C5A880] text-white text-xs font-semibold uppercase tracking-wider transition-all duration-300 shadow-md cursor-pointer"
            >
              <ShoppingBag className="w-3.5 h-3.5" />
              <span>Move All to Bag</span>
            </button>
            <Link
              href="/products"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-stone-300 hover:border-[#1A1815] text-stone-700 hover:text-black text-xs font-medium uppercase tracking-wider transition-colors"
            >
              <span>Explore More</span>
            </Link>
          </div>
        )}
      </div>

      {wishlist.length === 0 ? (
        /* =========================================================================
           EMPTY WISHLIST STATE
           ========================================================================= */
        <div className="max-w-md mx-auto my-12 sm:my-20 p-8 sm:p-12 text-center bg-white rounded-3xl border border-[#E2DEC9] shadow-lg space-y-5">
          <div className="w-20 h-20 mx-auto rounded-full bg-[#F6F4EE] border border-[#E0D9CA] flex items-center justify-center text-[#C5A880]">
            <Heart className="w-8 h-8 stroke-[1.4]" />
          </div>

          <div className="space-y-2">
            <h2 className="font-serif text-2xl font-normal text-[#1A1815]">
              Your Sanctuary List is Empty
            </h2>
            <p className="text-xs sm:text-sm text-stone-500 font-light leading-relaxed">
              You haven&apos;t saved any sacred materials or contemplating malas yet. Explore our verified wild
              collections to start curating your spiritual altar.
            </p>
          </div>

          <div className="pt-2">
            <Link
              href="/products"
              className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full bg-[#1A1815] hover:bg-[#C5A880] text-white text-xs font-semibold uppercase tracking-widest transition-all duration-300 shadow-xl"
            >
              <span>Discover Collections</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      ) : (
        /* =========================================================================
           WISHLIST GRID VIEW
           ========================================================================= */
        <div className="space-y-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {wishlist.map((item) => (
              <div
                key={item.id}
                className="group relative bg-white rounded-3xl overflow-hidden border border-[#E2DEC9] hover:border-[#C5A880] transition-all duration-300 shadow-md hover:shadow-xl flex flex-col justify-between"
              >
                {/* Top Image Container */}
                <div className="relative aspect-square w-full bg-[#FAF8F5] overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 pointer-events-none" />

                  {/* Top Badges */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none">
                    {item.badge ? (
                      <span className="px-2.5 py-1 rounded-full text-[10px] font-mono tracking-wider uppercase bg-white/90 backdrop-blur-sm text-[#1A1815] font-semibold border border-white/40 shadow-xs pointer-events-auto">
                        {item.badge}
                      </span>
                    ) : (
                      <span />
                    )}

                    {/* Remove Button */}
                    <button
                      onClick={() => removeFromWishlist(item.id)}
                      title="Remove from Sanctuary"
                      className="w-8 h-8 rounded-full bg-white/85 hover:bg-red-50 text-stone-600 hover:text-red-600 border border-white/50 backdrop-blur-sm flex items-center justify-center transition-colors shadow-sm pointer-events-auto cursor-pointer"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Bottom Category Subtitle on Image */}
                  <div className="absolute bottom-4 left-4 right-4 text-white pointer-events-none">
                    <span className="text-[10px] font-mono tracking-widest uppercase text-[#DFCAAB] block drop-shadow">
                      {item.category ? `Category • ${item.category}` : "Authentic Sacred Form"}
                    </span>
                  </div>
                </div>

                {/* Card Details & Actions */}
                <div className="p-5 sm:p-6 flex flex-col flex-1 justify-between space-y-4">
                  <div className="space-y-2">
                    <h3 className="font-serif text-lg sm:text-xl font-normal text-[#1A1815] leading-snug group-hover:text-[#7A6242] transition-colors">
                      {item.name}
                    </h3>
                  </div>

                  {/* Pricing and Move to Cart */}
                  <div className="pt-3 border-t border-[#EAE5D8] space-y-3">
                    <div className="flex items-baseline gap-2.5">
                      <span className="font-serif text-xl sm:text-2xl font-normal text-[#1A1815]">
                        ₹{item.price.toLocaleString("en-IN")}
                      </span>
                      {item.originalPrice && item.originalPrice > item.price && (
                        <>
                          <span className="text-xs text-stone-400 line-through">
                            ₹{item.originalPrice.toLocaleString("en-IN")}
                          </span>
                          <span className="text-[10px] font-mono font-bold text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded">
                            SAVE ₹{(item.originalPrice - item.price).toLocaleString("en-IN")}
                          </span>
                        </>
                      )}
                    </div>

                    <button
                      onClick={() => handleMoveToCart(item)}
                      disabled={movedId === item.id}
                      className={`w-full py-3 px-4 rounded-full text-xs font-semibold tracking-widest uppercase transition-all duration-300 flex items-center justify-center gap-2 shadow-md cursor-pointer ${
                        movedId === item.id
                          ? "bg-emerald-700 text-white"
                          : "bg-[#122E46] hover:bg-[#C5A880] text-white"
                      }`}
                    >
                      {movedId === item.id ? (
                        <>
                          <CheckCircle2 className="w-4 h-4" />
                          <span>Moved to Sacred Bag!</span>
                        </>
                      ) : (
                        <>
                          <ShoppingBag className="w-4 h-4" />
                          <span>Move to Sacred Bag</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Trust Guarantees Ribbon */}
          <div className="p-6 rounded-3xl bg-[#F6F4EE] border border-[#E0D9CA] grid grid-cols-1 md:grid-cols-3 gap-4 text-stone-700">
            <div className="flex items-center gap-3">
              <ShieldCheck className="w-5 h-5 text-[#7A6242] shrink-0" />
              <div>
                <span className="block text-xs font-semibold text-[#1A1815]">Lab Tested Integrity</span>
                <span className="text-[11px] text-stone-500 font-light">Every bead verified with non-destructive X-Ray.</span>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Truck className="w-5 h-5 text-[#7A6242] shrink-0" />
              <div>
                <span className="block text-xs font-semibold text-[#1A1815]">Complimentary Insured Shipping</span>
                <span className="text-[11px] text-stone-500 font-light">Free delivery on orders above ₹1,999 across India.</span>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Compass className="w-5 h-5 text-[#7A6242] shrink-0" />
              <div>
                <span className="block text-xs font-semibold text-[#1A1815]">Ethical Himalayan Provenance</span>
                <span className="text-[11px] text-stone-500 font-light">Wild harvested seeds cured in sandalwood oil.</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}

export default function WishlistPage() {
  return (
    <CartProvider>
      <div className="min-h-screen flex flex-col bg-[#F9F8F5] text-[#111111]">
        <Navbar />
        <WishlistContent />
        <Footer />
        <CartDrawer />
        <BottomNav />
      </div>
    </CartProvider>
  );
}
