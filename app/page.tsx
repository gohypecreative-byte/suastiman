"use client";

import React from "react";
import { CartProvider } from "@/context/CartContext";
import { Navbar } from "@/components/layout/Navbar";
import { HeroBanner } from "@/components/home/HeroBanner";
import { BrandIntro } from "@/components/home/BrandIntro";
import { CategoryShowcase } from "@/components/home/CategoryShowcase";
import { MaterialJourneys } from "@/components/home/MaterialJourneys";
import { RudrakshaJourney } from "@/components/home/RudrakshaJourney";
import { TulsiJourney } from "@/components/home/TulsiJourney";
import { GemstoneJourney } from "@/components/home/GemstoneJourney";
import { FeaturedProducts } from "@/components/home/FeaturedProducts";
import { Craftsmanship } from "@/components/home/Craftsmanship";
import { TactileShowcase } from "@/components/home/TactileShowcase";
import { KnowYourTradition } from "@/components/home/KnowYourTradition";
import { TrustProvenance } from "@/components/home/TrustProvenance";
import { BrandPhilosophy } from "@/components/home/BrandPhilosophy";
import { Testimonials } from "@/components/home/Testimonials";
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

          {/* 2. BRAND INTRO — “Rooted in Nature” */}
          <BrandIntro />

          {/* 11. CATEGORIES — Minimal Category Showcase (Rudraksha, Tulsi, Gemstones, Malas, Bracelets) */}
          <CategoryShowcase />

          {/* 3. MATERIAL JOURNEY — Nature -> Raw Material -> Human Craft -> Finished Form */}
          <MaterialJourneys />

          {/* 4. RUDRAKSHA JOURNEY — Flower -> Fruit -> Pulp -> Seed -> Bead -> Mala */}
          <RudrakshaJourney />

          {/* 5. TULSI JOURNEY — Seed -> Soil -> Plant -> Leaves -> Harvest -> Drying -> Mala */}
          <TulsiJourney />

          {/* 6. GEMSTONE JOURNEY — Earth/Rock -> Rough Stone -> Cutting -> Polishing -> Natural Stone -> Bracelet */}
          <GemstoneJourney />

          {/* 7. PRODUCT SHOWCASE — Premium Macro Tactile Products */}
          <FeaturedProducts />

          {/* 8. CRAFTSMANSHIP — “Made by Human Hands” */}
          <Craftsmanship />

          {/* Macro Feel The Material Showcase */}
          <TactileShowcase />

          {/* 9. KNOW YOUR TRADITION — Knowledge Archive */}
          <KnowYourTradition />

          {/* 10. AUTHENTICITY & TRUST — Testing, Origin, Craft & Care */}
          <TrustProvenance />

          {/* Brand Philosophy — No Astrology Fear */}
          <BrandPhilosophy />

          {/* Practitioners Reflections */}
          <Testimonials />

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
