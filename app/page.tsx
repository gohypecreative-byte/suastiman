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
import { TraditionTrustRibbon } from "@/components/home/TraditionTrustRibbon";
import { TrustProvenance } from "@/components/home/TrustProvenance";
import { FinalBrandCTA } from "@/components/home/FinalBrandCTA";
import { Footer } from "@/components/layout/Footer";
import { CartDrawer } from "@/components/cart/CartDrawer";
import { BottomNav } from "@/components/layout/BottomNav";

export default function Home() {
  const [footerHeight, setFooterHeight] = React.useState(0);
  const [isDesktop, setIsDesktop] = React.useState(false);
  const footerContainerRef = React.useRef<HTMLDivElement>(null);
  const footerInnerRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const updateHeight = () => {
      const desktop = window.innerWidth >= 1024;
      setIsDesktop(desktop);
      if (desktop && footerContainerRef.current) {
        const h = footerContainerRef.current.offsetHeight;
        setFooterHeight(h);
      } else {
        setFooterHeight(0);
        if (footerInnerRef.current) {
          footerInnerRef.current.style.transform = "none";
        }
      }
    };

    updateHeight();
    const timer = setTimeout(updateHeight, 400);
    window.addEventListener("resize", updateHeight);

    let ticking = false;
    const handleScroll = () => {
      if (window.innerWidth < 1024) return;
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (footerInnerRef.current) {
            const totalHeight = document.documentElement.scrollHeight;
            const viewportHeight = window.innerHeight;
            const scrollY = window.scrollY;
            const currentFooterHeight = footerContainerRef.current?.offsetHeight || 450;

            const distFromBottom = Math.max(0, totalHeight - (scrollY + viewportHeight));

            if (distFromBottom <= currentFooterHeight) {
              const p = Math.min(1, Math.max(0, 1 - distFromBottom / currentFooterHeight));
              const translateY = (1 - p) * 30;
              footerInnerRef.current.style.transform = `translate3d(0, ${translateY}%, 0)`;
            } else {
              footerInnerRef.current.style.transform = `translate3d(0, 30%, 0)`;
            }
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      clearTimeout(timer);
      window.removeEventListener("resize", updateHeight);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <CartProvider>
      <div className="relative min-h-screen bg-[#F7F5F0] text-[#0C161D]">
        {/* Main Content Wrapper (Slides UP with rounded bottom corners on desktop to reveal footer underneath) */}
        <div 
          style={{ marginBottom: isDesktop && footerHeight ? `${footerHeight}px` : undefined }}
          className="relative z-10 bg-[#F7F5F0] rounded-b-[24px] lg:rounded-b-[56px] shadow-[0_25px_60px_-15px_rgba(0,0,0,0.35)] overflow-clip"
        >
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

            {/* Horizontal Separation Ribbon — Tradition & Authenticity Marquee */}
            <TraditionTrustRibbon />

            {/* 10. AUTHENTICITY & TRUST — Testing, Origin, Craft & Care */}
            <TrustProvenance />

            {/* 12. FINAL BRAND CTA — From Nature. Through Human Hands. Rooted in Tradition. */}
            <FinalBrandCTA />
          </main>
        </div>

        {/* Footer: Normal in-flow on Mobile (<1024px) so it fully scrolls; Parallax Reveal on Desktop (>=1024px) */}
        <div 
          ref={footerContainerRef}
          className="relative z-10 w-full lg:fixed lg:bottom-0 lg:left-0 lg:right-0 lg:z-0 lg:pointer-events-auto"
        >
          <div 
            ref={footerInnerRef}
            style={{
              transform: isDesktop ? "translate3d(0, 30%, 0)" : "none",
              willChange: isDesktop ? "transform" : "auto",
            }}
            className="w-full"
          >
            <Footer />
          </div>
        </div>

        {/* Global Cart Slideout Drawer */}
        <CartDrawer />

        {/* Mobile Sticky Bottom Navigation */}
        <BottomNav />
      </div>
    </CartProvider>
  );
}
