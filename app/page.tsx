"use client";

import React from "react";
import { CartProvider } from "@/context/CartContext";
import { Navbar } from "@/components/layout/Navbar";
import { HeroBanner } from "@/components/home/HeroBanner";
import { BrandIntro } from "@/components/home/BrandIntro";
import { CategoryShowcase } from "@/components/home/CategoryShowcase";
import { BestSellers } from "@/components/home/BestSellers";
import { MaterialJourneys } from "@/components/home/MaterialJourneys";
import { FeaturedProducts } from "@/components/home/FeaturedProducts";
import { Craftsmanship } from "@/components/home/Craftsmanship";
import { KnowYourTradition } from "@/components/home/KnowYourTradition";
import { TrustProvenance } from "@/components/home/TrustProvenance";
import { Testimonials } from "@/components/home/Testimonials";
import { TraditionTrustRibbon } from "@/components/home/TraditionTrustRibbon";
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
      clearTimeout(timer);
      window.removeEventListener("resize", updateHeight);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("hashchange", scrollToHash);
    };
  }, []);

  return (
    <CartProvider>
      <div className="relative min-h-screen bg-[#F7F5F0] text-[#0C161D]">
        {/* Main Content Wrapper */}
        <div className="relative z-10 bg-[#F7F5F0] overflow-clip">
          {/* 1. Navigation Bar (Reference Layout with Svastiman Brand Tokens) */}
          <Navbar />

          {/* Main Content Sections: Structured following Hira Fragrances' section layout */}
          <main className="flex-1 space-y-0">
            {/* 2. Hero Section: Dynamic Image Carousel & Floating Quick-Add Product Card */}
            <HeroBanner />

            {/* 3. Brand Statement / Rich Text Narrative (matching Hira section_rich_text) */}
            <BrandIntro />

            {/* 4. Curated Category Showcase (matching Hira section_tab_collections / People's Choice) */}
            <CategoryShowcase />

            {/* 5. Bestsellers Product Slider with Instant Add-to-Cart (matching Hira Bestsellers) */}
            <BestSellers />

            {/* 6. Material Origin Journeys (Interactive Botanical & Gemstone exploration) */}
            <MaterialJourneys />

            {/* 7. Tactile Featured Products */}
            <FeaturedProducts />

            {/* 8. Trust & Provenance Pillars (matching Hira Why Choose Us / 4 Pillars) */}
            <TrustProvenance />

            {/* 9. Voices of Svastiman / Customer Testimonials (matching Hira Voices of Hira) */}
            <Testimonials />

            {/* 10. Craftsmanship & Vedic Tradition Archive */}
            <Craftsmanship />
            <KnowYourTradition />

            {/* 11. Tradition & Authenticity Ribbon (matching Hira scrolling banner) */}
            <TraditionTrustRibbon />

            {/* 12. Final Brand CTA & Newsletter */}
            <FinalBrandCTA />
          </main>
        </div>

        {/* Footer (Full in-flow visibility for both distinct sections) */}
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
