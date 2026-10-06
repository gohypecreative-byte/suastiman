"use client";

import React from "react";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CartDrawer } from "@/components/cart/CartDrawer";
import { CartProvider } from "@/context/CartContext";
import { BrandPhilosophy } from "@/components/home/BrandPhilosophy";
import { Craftsmanship } from "@/components/home/Craftsmanship";
import { TrustProvenance } from "@/components/home/TrustProvenance";
import { ArrowLeft, ArrowRight, Compass, ShieldCheck } from "lucide-react";

export default function AboutPage() {
  return (
    <CartProvider>
      <div className="min-h-screen flex flex-col bg-[#F9F8F5] text-[#111111]">
        <Navbar />

        {/* Main Content Sections */}
        <main className="flex-1 space-y-0">
          {/* 1. Brand Philosophy: What We Honor vs What We Stand Against */}
          <BrandPhilosophy />

          {/* 2. Craftsmanship: Made by Human Hands */}
          <Craftsmanship />

          {/* 3. Trust & Provenance: Laboratory Verification & Direct Origin */}
          <TrustProvenance />

          {/* 4. Final CTA */}
          <section className="py-20 px-4 sm:px-8 bg-[#FAF8F5] border-t border-[#E8E2D5] text-center">
            <div className="max-w-2xl mx-auto space-y-5">
              <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#7A6242]">
                BEGIN YOUR SACRED JOURNEY
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#1A1815]">
                Experience the tactile presence of <br />
                <span className="italic text-[#7A6242]">unadulterated sacred materials.</span>
              </h2>
              <div className="pt-2">
                <Link
                  href="/products"
                  className="inline-flex items-center gap-3 px-8 py-3.5 rounded-full text-xs font-semibold uppercase tracking-widest bg-[#1A1815] hover:bg-[#C5A880] text-white shadow-xl transition-all duration-300"
                >
                  <span>Explore The Full Collection</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </section>
        </main>

        <Footer />
        <CartDrawer />
      </div>
    </CartProvider>
  );
}
