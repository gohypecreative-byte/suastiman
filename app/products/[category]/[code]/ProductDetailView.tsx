"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  ShoppingBag,
  Check,
  Bookmark,
  ShieldCheck,
  Truck,
  Sparkles,
  Layers,
  MapPin,
  Star,
  ChevronRight,
} from "lucide-react";
import { Product } from "@/lib/products";
import { useCart } from "@/context/CartContext";

interface ProductDetailViewProps {
  product: Product;
}

export function ProductDetailView({ product }: ProductDetailViewProps) {
  const [selectedImageIdx, setSelectedImageIdx] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);
  const { addToCart, openCart, toggleWishlist, isInWishlist } = useCart();

  const isSaved = isInWishlist(product.id);
  const images = product.images && product.images.length > 0 ? product.images : [product.image];

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart({
        id: product.id,
        name: product.name,
        price: product.price,
        originalPrice: product.originalPrice,
        image: product.image,
      });
    }
    setAdded(true);
    openCart();
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Top Breadcrumb & Navigation Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 mb-6 sm:mb-8 text-xs font-sans">
        <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-stone-500">
          <Link href="/" className="hover:text-[#7A6242] transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3 h-3 text-stone-400" />
          <Link href="/products" className="hover:text-[#7A6242] transition-colors">
            Collections
          </Link>
          <ChevronRight className="w-3 h-3 text-stone-400" />
          <Link
            href={`/products?category=${product.category}`}
            className="hover:text-[#7A6242] transition-colors capitalize"
          >
            {product.categoryName}
          </Link>
          <ChevronRight className="w-3 h-3 text-stone-400" />
          <span className="font-mono uppercase font-semibold text-[#1A1815]">
            {product.code.toUpperCase()}
          </span>
        </nav>

        <Link
          href={`/products?category=${product.category}`}
          className="inline-flex items-center gap-1.5 text-stone-600 hover:text-[#1A1815] font-medium transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to {product.categoryName}</span>
        </Link>
      </div>

      {/* Main Product Showcase Section */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start">
        {/* Left Column: Image Gallery (5 cols on lg) */}
        <div className="lg:col-span-6 space-y-4">
          <div className="relative aspect-square w-full rounded-2xl overflow-hidden bg-white border border-[#E8E2D5] shadow-sm">
            <Image
              src={images[selectedImageIdx]}
              alt={product.name}
              fill
              priority
              className="object-cover object-center transition-all duration-500"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />

            {/* Product Code Badge (Top Left) */}
            <div className="absolute top-3.5 left-3.5 z-10 flex items-center gap-1.5">
              <span className="bg-[#1A1815] text-[#FAF8F5] text-[10px] font-mono uppercase tracking-widest px-2.5 py-1 rounded-sm shadow-md font-bold">
                {product.code.toUpperCase()}
              </span>
              {product.badge && (
                <span className="bg-[#C5A880] text-[#122E46] text-[10px] font-semibold uppercase tracking-wider px-2 py-1 rounded-sm shadow-md">
                  {product.badge}
                </span>
              )}
            </div>

            {/* Bookmark button */}
            <button
              onClick={() =>
                toggleWishlist({
                  id: product.id,
                  name: product.name,
                  price: product.price,
                  originalPrice: product.originalPrice,
                  image: product.image,
                  category: product.category,
                  badge: product.badge,
                  specs: product.specs,
                })
              }
              className="absolute top-3.5 right-3.5 z-10 w-9 h-9 rounded-full bg-white/80 backdrop-blur-md flex items-center justify-center text-stone-700 hover:text-[#1A1815] shadow-sm cursor-pointer transition-transform active:scale-95"
              aria-label="Save to Wishlist"
            >
              <Bookmark
                className={`w-4 h-4 transition-colors ${
                  isSaved ? "fill-[#1A1815] text-[#1A1815]" : ""
                }`}
              />
            </button>
          </div>

          {/* Thumbnails */}
          {images.length > 1 && (
            <div className="grid grid-cols-4 sm:grid-cols-5 gap-2.5">
              {images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImageIdx(idx)}
                  className={`relative aspect-square rounded-xl overflow-hidden bg-white border-2 transition-all cursor-pointer ${
                    selectedImageIdx === idx
                      ? "border-[#1A1815] shadow-xs"
                      : "border-[#E8E2D5] opacity-70 hover:opacity-100"
                  }`}
                >
                  <Image src={img} alt="" fill className="object-cover" sizes="120px" />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Right Column: Product Narrative & Actions (6 cols on lg) */}
        <div className="lg:col-span-6 space-y-6">
          <div className="space-y-2 border-b border-[#E8E2D5] pb-6">
            <div className="flex items-center gap-2">
              <span className="text-[11px] font-mono uppercase tracking-widest text-[#7A6242] font-semibold">
                {product.categoryName} • REF {product.code.toUpperCase()}
              </span>
              <span className="text-stone-300">•</span>
              <div className="flex items-center gap-1 text-[11px] text-stone-600 font-sans">
                <Star className="w-3.5 h-3.5 fill-[#C5A880] text-[#C5A880]" />
                <span className="font-semibold text-stone-900">{product.rating}</span>
                <span>({product.reviews} reviews)</span>
              </div>
            </div>

            <h1 className="font-serif text-2xl sm:text-4xl font-normal text-[#1A1815] leading-tight">
              {product.name}
            </h1>

            {product.subtitle && (
              <p className="text-sm text-stone-600 font-sans tracking-wide">
                {product.subtitle}
              </p>
            )}

            <div className="pt-3 flex items-baseline gap-3">
              <span className="text-2xl sm:text-3xl font-bold text-[#1A1815]">
                ₹{product.price.toLocaleString("en-IN")}
              </span>
              {product.originalPrice && (
                <>
                  <span className="text-base text-stone-400 line-through">
                    ₹{product.originalPrice.toLocaleString("en-IN")}
                  </span>
                  <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-sm">
                    Save ₹{(product.originalPrice - product.price).toLocaleString("en-IN")}
                  </span>
                </>
              )}
            </div>
          </div>

          {/* Description */}
          <div className="space-y-3">
            <h2 className="text-xs font-mono uppercase tracking-widest text-[#7A6242] font-semibold">
              Sacred Provenance
            </h2>
            <p className="text-sm leading-relaxed text-stone-700 font-sans">
              {product.description}
            </p>
          </div>

          {/* Specifications Pills */}
          <div className="space-y-2.5">
            <h2 className="text-xs font-mono uppercase tracking-widest text-[#7A6242] font-semibold">
              Authenticity Specifications
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              <div className="flex items-center gap-2 p-2.5 rounded-lg bg-white border border-[#E8E2D5]">
                <MapPin className="w-4 h-4 text-[#7A6242] shrink-0" />
                <span className="text-stone-700 truncate">{product.origin}</span>
              </div>
              <div className="flex items-center gap-2 p-2.5 rounded-lg bg-white border border-[#E8E2D5]">
                <Layers className="w-4 h-4 text-[#7A6242] shrink-0" />
                <span className="text-stone-700 truncate">{product.material}</span>
              </div>
              {product.beadSize && (
                <div className="flex items-center gap-2 p-2.5 rounded-lg bg-white border border-[#E8E2D5]">
                  <span className="text-stone-500 font-mono text-[10px] uppercase">Bead:</span>
                  <span className="text-stone-700 font-medium truncate">{product.beadSize} ({product.beadShape})</span>
                </div>
              )}
              {product.length && (
                <div className="flex items-center gap-2 p-2.5 rounded-lg bg-white border border-[#E8E2D5]">
                  <span className="text-stone-500 font-mono text-[10px] uppercase">Metrics:</span>
                  <span className="text-stone-700 font-medium truncate">{product.length} • {product.weight}</span>
                </div>
              )}
              {product.round && (
                <div className="flex items-center gap-2 p-2.5 rounded-lg bg-white border border-[#E8E2D5]">
                  <span className="text-stone-500 font-mono text-[10px] uppercase">Format:</span>
                  <span className="text-stone-700 font-medium truncate">{product.round} Round • {product.knot}</span>
                </div>
              )}
              {product.associatedDeities && (
                <div className="flex items-center gap-2 p-2.5 rounded-lg bg-white border border-[#E8E2D5]">
                  <span className="text-stone-500 font-mono text-[10px] uppercase">Deities:</span>
                  <span className="text-stone-700 font-medium truncate">{product.associatedDeities}</span>
                </div>
              )}
            </div>
          </div>

          {/* Bullet Details */}
          {product.details && product.details.length > 0 && (
            <div className="p-4 rounded-xl bg-white border border-[#E8E2D5] space-y-2">
              <h3 className="text-xs font-mono uppercase tracking-widest text-[#1A1815] font-semibold">
                Archival Details
              </h3>
              <ul className="space-y-1.5 text-xs text-stone-600 font-sans">
                {product.details.map((detail, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-[#7A6242] mt-0.5">•</span>
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Quantity & Add to Cart Controls */}
          <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            <div className="inline-flex items-center justify-between border border-[#E8E2D5] bg-white rounded-lg px-3 py-2.5 w-full sm:w-32 shrink-0">
              <button
                onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                className="text-stone-600 hover:text-black font-bold text-base px-2 cursor-pointer"
                aria-label="Decrease quantity"
              >
                -
              </button>
              <span className="font-mono text-sm font-semibold">{quantity}</span>
              <button
                onClick={() => setQuantity((q) => q + 1)}
                className="text-stone-600 hover:text-black font-bold text-base px-2 cursor-pointer"
                aria-label="Increase quantity"
              >
                +
              </button>
            </div>

            <button
              onClick={handleAddToCart}
              className="flex-1 bg-[#1A1815] hover:bg-[#7A6242] text-[#FAF8F5] py-3.5 px-6 rounded-lg text-xs font-semibold tracking-widest uppercase transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer shadow-md active:scale-[0.99]"
            >
              {added ? (
                <>
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span>Added to Sacred Acquisition</span>
                </>
              ) : (
                <>
                  <ShoppingBag className="w-4 h-4" />
                  <span>Add to Cart • ₹{(product.price * quantity).toLocaleString("en-IN")}</span>
                </>
              )}
            </button>
          </div>

          {/* Trust Guarantees */}
          <div className="grid grid-cols-2 gap-3 pt-4 border-t border-[#E8E2D5] text-[11px] text-stone-600 font-sans">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#7A6242] shrink-0" />
              <span>100% Provenance Certified</span>
            </div>
            <div className="flex items-center gap-2">
              <Truck className="w-4 h-4 text-[#7A6242] shrink-0" />
              <span>Free Insured All-India Delivery</span>
            </div>
          </div>

          {/* Tulsi Sacred Guides Links (Client Table) */}
          {product.category === "tulsi" && (
            <div className="pt-4 border-t border-[#E8E2D5] space-y-2">
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#7A6242] font-semibold block">
                Client Sacred Guides & Documentation
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[11px] font-sans">
                <a
                  href="https://docs.google.com/document/d/1Q9RPQw4m63QnWYxXm1RDCxyqJFOJvaPCf4ScgrAsR2k/edit?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-white border border-[#E8E2D5] hover:border-[#C5A880] text-stone-700 hover:text-black flex items-center justify-between transition-colors"
                >
                  <span>Which Round To Choose ?</span>
                  <span className="text-[#7A6242]">↗</span>
                </a>
                <a
                  href="https://docs.google.com/document/d/1C-u4xIRCxIEIxbs_FaH60AHXXhx60Kuq9cI10PbWvlo/edit?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-white border border-[#E8E2D5] hover:border-[#C5A880] text-stone-700 hover:text-black flex items-center justify-between transition-colors"
                >
                  <span>Principles to Wear Tulsi</span>
                  <span className="text-[#7A6242]">↗</span>
                </a>
                <a
                  href="https://docs.google.com/document/d/1dxuju6WoOQDKZ7ton2okqOKMFGlwyA2LbmmetLYVCDE/edit?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-white border border-[#E8E2D5] hover:border-[#C5A880] text-stone-700 hover:text-black flex items-center justify-between transition-colors"
                >
                  <span>Benefits of Tulsi Mala</span>
                  <span className="text-[#7A6242]">↗</span>
                </a>
                <a
                  href="https://docs.google.com/document/d/1XZ9xEuez8eS7wRaZt3q7qxKoCPyBYqo-gnNI98Xb-tI/edit?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-white border border-[#E8E2D5] hover:border-[#C5A880] text-stone-700 hover:text-black flex items-center justify-between transition-colors"
                >
                  <span>Tulsi Care & Oiling</span>
                  <span className="text-[#7A6242]">↗</span>
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
