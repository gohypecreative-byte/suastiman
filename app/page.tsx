"use client";

import React from "react";
import { CartProvider } from "@/context/CartContext";
import { Navbar } from "@/components/layout/Navbar";
import { HeroBanner } from "@/components/home/HeroBanner";
import { OurPromise } from "@/components/home/OurPromise";
import { ShopByCategory } from "@/components/home/ShopByCategory";
import { FeaturedProducts } from "@/components/home/FeaturedProducts";
import { BestSellers } from "@/components/home/BestSellers";
import { NewArrivals } from "@/components/home/NewArrivals";
import { Testimonials } from "@/components/home/Testimonials";
import { Footer } from "@/components/layout/Footer";
import { CartDrawer } from "@/components/cart/CartDrawer";

export default function Home() {
  return (
    <CartProvider>
      <div className="min-h-screen flex flex-col bg-[#F9F8F5] text-[#111111]">
        {/* Navigation Bar */}
        <Navbar />

        {/* Main Content Sections */}
        <main className="flex-1">
          {/* Hero Banner with Tagline & Energy Focus */}
          <HeroBanner />

          {/* Our Promise Section */}
          <OurPromise />

          {/* Shop by Category with Tabs */}
          <ShopByCategory />

          {/* Curated Spiritual Products & Malas */}
          <FeaturedProducts />

          {/* New Arrivals */}
          <NewArrivals />

          {/* Best Sellers */}
          <BestSellers />

          {/* Customer Reviews & Transformations */}
          <Testimonials />
        </main>

        {/* Footer */}
        <Footer />

        {/* Global Cart Slideout Drawer */}
        <CartDrawer />
      </div>
    </CartProvider>
  );
}
