"use client";

import React from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CartDrawer } from "@/components/cart/CartDrawer";
import { CartProvider } from "@/context/CartContext";
import { BrandPhilosophy } from "@/components/home/BrandPhilosophy";

export default function AboutPage() {
  return (
    <CartProvider>
      <div className="min-h-screen flex flex-col bg-[#F9F8F5] text-[#111111]">
        <Navbar />
        <main className="flex-1 pt-10">
          <BrandPhilosophy />
        </main>
        <Footer />
        <CartDrawer />
      </div>
    </CartProvider>
  );
}
