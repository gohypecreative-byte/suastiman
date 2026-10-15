"use client";

import React from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CartDrawer } from "@/components/cart/CartDrawer";
import { BottomNav } from "@/components/layout/BottomNav";
import { CrystalCalculator } from "@/components/tools/CrystalCalculator";

export default function ProfessionCrystalCalculatorPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#F9F8F5]">
      <Navbar />
      <main className="flex-1">
        <CrystalCalculator />
      </main>
      <Footer />
      <CartDrawer />
      <BottomNav />
    </div>
  );
}
