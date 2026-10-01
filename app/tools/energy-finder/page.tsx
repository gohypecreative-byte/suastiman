"use client";

import React from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CartDrawer } from "@/components/cart/CartDrawer";
import { CartProvider } from "@/context/CartContext";
import { ZodiacFinder } from "@/components/home/ZodiacFinder";

export default function EnergyFinderPage() {
  return (
    <CartProvider>
      <div className="min-h-screen flex flex-col bg-[#F9F8F5] text-[#111111]">
        <Navbar />
        <main className="flex-1 pt-10 pb-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
            <h1 className="text-4xl font-serif text-[#132F47] mb-4">Energy Finder Tool</h1>
            <p className="text-stone-600 font-light">Find the perfect crystal tailored to your astrological sign.</p>
          </div>
          <ZodiacFinder />
        </main>
        <Footer />
        <CartDrawer />
      </div>
    </CartProvider>
  );
}
