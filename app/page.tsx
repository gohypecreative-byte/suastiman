"use client";

import React from "react";
import { CartProvider } from "@/context/CartContext";
import { Navbar } from "@/components/layout/Navbar";
import { HeroBanner } from "@/components/home/HeroBanner";
import { BrandIntro } from "@/components/home/BrandIntro";
import { CategoryShowcase } from "@/components/home/CategoryShowcase";
import { MaterialJourneys } from "@/components/home/MaterialJourneys";

import { FeaturedProducts } from "@/components/home/FeaturedProducts";
import { Craftsmanship } from "@/components/home/Craftsmanship";
import { KnowYourTradition } from "@/components/home/KnowYourTradition";
import { TrustProvenance } from "@/components/home/TrustProvenance";
import { FinalBrandCTA } from "@/components/home/FinalBrandCTA";
import { Footer } from "@/components/layout/Footer";
import { CartDrawer } from "@/components/cart/CartDrawer";

export default function Home() {
  return (
    <CartProvider>
      <div className="min-h-screen flex flex-col bg-[#F7F5F0] text-[#0C161D]">
        {/* Navigation Bar */}
        <Navbar />

        {/* Main Content Sections Structured Exactly as Defined */}
        <main className="flex-1 space-y-0">
          {/* 1. HERO — “Before It Was a Mala” */}
          <HeroBanner />

          {/* 11. CATEGORIES — Minimal Category Showcase (Rudraksha, Tulsi, Gemstones, Malas, Bracelets) */}
          <CategoryShowcase />

          {/* 3. MATERIAL JOURNEY — Nature -> Raw Material -> Human Craft -> Finished Form */}
          <MaterialJourneys />



          {/* 7. PRODUCT SHOWCASE — Premium Macro Tactile Products */}
          <FeaturedProducts />

          {/* 8. CRAFTSMANSHIP — “Made by Human Hands” */}
          <Craftsmanship />

          {/* 9. KNOW YOUR TRADITION — Knowledge Archive */}
          <KnowYourTradition />

          {/* 10. AUTHENTICITY & TRUST — Testing, Origin, Craft & Care */}
          <TrustProvenance />

          {/* 12. FINAL BRAND CTA — From Nature. Through Human Hands. Rooted in Tradition. */}
          <FinalBrandCTA />
        </main>

        {/* Heritage Footer */}
        <Footer />

        {/* Global Cart Slideout Drawer */}
        <CartDrawer />
      </div>
    </CartProvider>
  );
}
