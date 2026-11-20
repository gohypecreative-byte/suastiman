import React from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CartDrawer } from "@/components/cart/CartDrawer";
import { BottomNav } from "@/components/layout/BottomNav";
import { CartProvider } from "@/context/CartContext";
import { TulsiT01Showcase } from "@/components/products/TulsiT01Showcase";

interface PageProps {
  params: Promise<{
    category: string;
    code: string;
  }>;
}

export async function generateMetadata({ params }: PageProps) {
  const { code } = await params;
  const sku = code.toUpperCase().replace("-", "");
  return {
    title: `${sku} Sacred Vrindavan Tulsi Kanthi Mala | Svastimān`,
    description:
      "Handcrafted genuine Vrindavan Tulsi Kanthi Mala sanctified for daily wear and devotional alignment.",
  };
}

export default async function ProductDetailPage({ params }: PageProps) {
  const { code } = await params;
  const normalized = code.toLowerCase().replace("-", "");
  const sku = normalized.toUpperCase();

  return (
    <CartProvider>
      <div className="min-h-screen flex flex-col bg-[#FAF8F5] text-[#111111]">
        <Navbar />
        <main className="flex-1">
          <TulsiT01Showcase productSku={sku} />
        </main>
        <Footer />
        <CartDrawer />
        <BottomNav />
      </div>
    </CartProvider>
  );
}
