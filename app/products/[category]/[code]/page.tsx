import React from "react";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CartDrawer } from "@/components/cart/CartDrawer";
import { BottomNav } from "@/components/layout/BottomNav";
import { CartProvider } from "@/context/CartContext";
import { getProductByCode, getAllProducts } from "@/lib/products";
import { ProductDetailView } from "./ProductDetailView";

interface PageProps {
  params: Promise<{
    category: string;
    code: string;
  }>;
}

export async function generateMetadata({ params }: PageProps) {
  const { category, code } = await params;
  const product = getProductByCode(category, code);

  if (!product) {
    return {
      title: "Product Not Found | Svastimān",
    };
  }

  return {
    title: `${product.name} (${product.code.toUpperCase()}) | Svastimān`,
    description: product.description,
  };
}

export default async function ProductDetailPage({ params }: PageProps) {
  const { category, code } = await params;
  const product = getProductByCode(category, code);

  if (!product) {
    return (
      <CartProvider>
        <div className="min-h-screen flex flex-col bg-[#F9F8F5] text-[#111111]">
          <Navbar />
          <main className="flex-1 max-w-4xl mx-auto px-4 py-28 text-center flex flex-col items-center justify-center">
            <span className="text-xs font-mono uppercase tracking-widest text-[#7A6242] mb-3">
              Sacred Provenance
            </span>
            <h1 className="font-serif text-3xl sm:text-4xl text-[#1A1815] mb-4">
              Sacred Artifact Not Found
            </h1>
            <p className="text-stone-600 text-sm max-w-md mb-8">
              The product code <span className="font-mono text-[#7A6242] font-semibold">{code.toUpperCase()}</span> in collection <span className="capitalize">{category}</span> is not listed in our verified archive.
            </p>
            <Link
              href="/products"
              className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-[#1A1815] text-[#FAF8F5] text-xs font-semibold uppercase tracking-wider hover:bg-[#7A6242] transition-colors"
            >
              Browse All Collections
            </Link>
          </main>
          <Footer />
          <CartDrawer />
          <BottomNav />
        </div>
      </CartProvider>
    );
  }

  return (
    <CartProvider>
      <div className="min-h-screen flex flex-col bg-[#F9F8F5] text-[#111111]">
        <Navbar />
        <main className="flex-1 pt-6 pb-20 sm:pb-28">
          <ProductDetailView product={product} />
        </main>
        <Footer />
        <CartDrawer />
        <BottomNav />
      </div>
    </CartProvider>
  );
}
