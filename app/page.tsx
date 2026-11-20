"use client";

import React from "react";
import { CartProvider } from "@/context/CartContext";
import { Navbar } from "@/components/layout/Navbar";
import { TulsiHeroBanner } from "@/components/home/TulsiHeroBanner";
import { TulsiBestSellersSection } from "@/components/home/TulsiBestSellersSection";
import { DiscoverOurProductsSection } from "@/components/home/DiscoverOurProductsSection";
import { TulsiFaqAndProvenance } from "@/components/home/TulsiFaqAndProvenance";
import { Footer } from "@/components/layout/Footer";
import { CartDrawer } from "@/components/cart/CartDrawer";
import { BottomNav } from "@/components/layout/BottomNav";

export default function Home() {
  React.useEffect(() => {
    // Smooth scroll to target hash on load or on hashchange
    const scrollToHash = () => {
      if (typeof window !== "undefined" && window.location.hash) {
        const id = window.location.hash.replace("#", "");
        const el = document.getElementById(id);
        if (el) {
          const y = el.getBoundingClientRect().top + window.pageYOffset - 80;
          window.scrollTo({ top: Math.max(0, y), behavior: "smooth" });
        }
      }
    };

    if (typeof window !== "undefined" && window.location.hash) {
      setTimeout(scrollToHash, 200);
      setTimeout(scrollToHash, 600);
    }
    window.addEventListener("hashchange", scrollToHash);

    return () => {
      window.removeEventListener("hashchange", scrollToHash);
    };
  }, []);

  return (
    <CartProvider>
      <div className="relative min-h-screen bg-[#F7F5F0] text-[#0C161D]">
        {/* Main Content Wrapper */}
        <div className="relative z-10 bg-[#F7F5F0] overflow-x-clip">
          {/* SECTION A: Header Navbar */}
          <Navbar />

          {/* Main Content: Hero Banner + Best Sellers Grid */}
          <main className="flex-1 space-y-0">
            {/* SECTION B: Hero Banner */}
            <TulsiHeroBanner />

            {/* SECTION C & D: Lookbook Cards + Best Seller Products Grid */}
            <TulsiBestSellersSection />

            {/* SECTION: Discover Our Products Grid (Matching Reference Image 1 & 2) */}
            <DiscoverOurProductsSection />

            {/* SECTION: FAQ, Sacred Origin Pillars & Heritage Banner (Matching img1) */}
            <TulsiFaqAndProvenance />
          </main>
        </div>

        {/* SECTION E: Footer */}
        <div className="relative z-10 w-full">
          <Footer />
        </div>

        {/* Global Cart Slideout Drawer */}
        <CartDrawer />

        {/* Mobile Sticky Bottom Navigation */}
        <BottomNav />
      </div>
    </CartProvider>
  );
}
