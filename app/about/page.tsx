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

        {/* Top Header / Breadcrumb */}
        <section className="pt-28 sm:pt-32 pb-8 px-4 sm:px-8 lg:px-12 max-w-7xl mx-auto w-full">
          <div className="flex items-center gap-2 text-xs text-stone-500 mb-6">
            <Link href="/" className="hover:text-black transition-colors flex items-center gap-1">
              <ArrowLeft className="w-3.5 h-3.5" /> Home
            </Link>
            <span>/</span>
            <span className="text-[#1A1815] font-semibold">About The House of Svastimān</span>
          </div>

          <div className="border-b border-[#E8E2D5] pb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EFECE6] border border-[#DCD6C7] text-xs font-mono uppercase tracking-[0.2em] text-[#7A6242] mb-3">
              <Compass className="w-3.5 h-3.5 text-[#C5A880]" />
              <span>THE HOUSE OF SVASTIMĀN</span>
            </div>
            <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal text-[#1A1815] tracking-tight mb-4">
              Sacred Heritage, <br className="hidden sm:inline" />
              <span className="italic text-[#7A6242] font-light">Rooted in Honest Origin.</span>
            </h1>
            <p className="text-stone-600 text-sm sm:text-base max-w-2xl leading-relaxed">
              We exist to build a sanctuary of authentic Indian spiritual objects. Preserving honest mountain harvests, traditional temple wood carving, and ancient Vedic knowledge through a refined modern sensibility.
            </p>
          </div>
        </section>

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
