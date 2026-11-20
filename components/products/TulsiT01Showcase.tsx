"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Heart,
  ChevronDown,
  X,
} from "lucide-react";
import { useCart } from "@/context/CartContext";

// Product Catalog Data for Best Seller items
interface ProductCatalogItem {
  sku: string;
  name: string;
  price: number;
  image: string;
  gallery: { id: string; label: string; src: string; alt: string }[];
  details: {
    ref: string;
    structure: string;
    beadSize: string;
    material: string;
    pendant: string;
    madeIn: string;
  };
  description: string;
}

const PRODUCT_CATALOG: Record<string, ProductCatalogItem> = {
  T01: {
    sku: "T01",
    name: "Tulsi Radha Krishan Kanthi Mala",
    price: 399,
    image: "/images/products/tulsi/tulsi_01.jpg",
    gallery: [
      {
        id: "main",
        label: "Overview",
        src: "/images/products/tulsi/tulsi_01.jpg",
        alt: "Tulsi Radha Krishan Kanthi Mala Main View",
      },
      {
        id: "pendant",
        label: "Pendant Detail",
        src: "/images/products/tulsi/t01_pendant_detail.jpg",
        alt: "Radha Krishna antique medallion and 2.5mm bead detail",
      },
      {
        id: "lock",
        label: "Lock Craft",
        src: "/images/products/tulsi/t01_lock_knot_detail.jpg",
        alt: "Traditional barrel screw clasp and cotton knot detail",
      },
      {
        id: "model",
        label: "Model Wear",
        src: "/images/products/tulsi/t01_model_wear.jpg",
        alt: "Devotee model wearing genuine Vrindavan Tulsi Kanthi Mala",
      },
    ],
    details: {
      ref: "T01",
      structure: "Single Round",
      beadSize: "2.5mm Round",
      material: "100% Tulsi Wood",
      pendant: "Radha Krishna",
      madeIn: "Vrindavan, Braj",
    },
    description:
      "Revered as Vrinda Devi, Tulsi Ji holds a special place in Vaishnava tradition, deeply cherished by devotees of Lord Krishna. Handcrafted from ethically sourced Vrindavan holy basil heartwood, this sacred Kanthi Mala embodies devotion, purity, and spiritual surrender. Each bead is turned by hand with reverence, strung on unbleached natural cotton cord, and consecrated with a traditional brass barrel clasp and an intricately cast Radha Krishna medallion: sacred daily elegance preserving perpetual connection with the divine.",
  },
  T02: {
    sku: "T02",
    name: "Shri Ram Naam Patta Tulsi Mala",
    price: 449,
    image: "/images/products/tulsi/tulsi_02.jpg",
    gallery: [
      {
        id: "main",
        label: "Overview",
        src: "/images/products/tulsi/tulsi_02.jpg",
        alt: "Shri Ram Naam Patta Tulsi Mala Main View",
      },
      {
        id: "detail",
        label: "Carved Leaf Detail",
        src: "/images/origin/know_tulsi_wood.jpg",
        alt: "Detailed texture of hand-carved sacred holy basil leaf beads",
      },
      {
        id: "lock",
        label: "Lock Craft",
        src: "/images/products/tulsi/t01_lock_knot_detail.jpg",
        alt: "Traditional barrel screw clasp and sacred knot detail",
      },
      {
        id: "model",
        label: "Model Wear",
        src: "/images/products/tulsi/t01_model_wear.jpg",
        alt: "Devotee model wearing Vrindavan Tulsi Kanthi Mala",
      },
    ],
    details: {
      ref: "T02",
      structure: "Single Round (46 CM)",
      beadSize: "2.5mm Carved Leaf",
      material: "100% Tulsi Wood",
      pendant: "Shri Ram Inscribed Leaf",
      madeIn: "Vrindavan, Braj",
    },
    description:
      "Hand-carved holy basil leaves inscribed with the sacred divine vibrations of Shri Ram Naam, sanctified for spiritual protection, inner composure, and peaceful contemplation. Turned from aged fallen Vrindavan heartwood with revered Vaishnava craftsmanship.",
  },
  T03: {
    sku: "T03",
    name: "Radha Krishna Pendant Tulsi Mala",
    price: 399,
    image: "/images/products/tulsi/tulsi_03.jpg",
    gallery: [
      {
        id: "main",
        label: "Overview",
        src: "/images/products/tulsi/tulsi_03.jpg",
        alt: "Radha Krishna Pendant Tulsi Mala Main View",
      },
      {
        id: "pendant",
        label: "Medallion Detail",
        src: "/images/products/tulsi/t01_pendant_detail.jpg",
        alt: "Close-up of Shri Radha Krishna devotional medallion",
      },
      {
        id: "lock",
        label: "Lock Craft",
        src: "/images/products/tulsi/t01_lock_knot_detail.jpg",
        alt: "Traditional barrel screw clasp detail",
      },
      {
        id: "model",
        label: "Model Wear",
        src: "/images/products/tulsi/t01_model_wear.jpg",
        alt: "Devotee wearing sanctified Tulsi mala",
      },
    ],
    details: {
      ref: "T03",
      structure: "Single Round",
      beadSize: "4.2mm Oval",
      material: "100% Tulsi Wood",
      pendant: "Radha Krishna",
      madeIn: "Vrindavan, Braj",
    },
    description:
      "Smooth oval-cut natural Vrindavan Tulsi beads adorned with an antique medallion depicting Shri Radha Krishna, sanctified for daily devotion, spiritual grace, and deep connection with Braj Dham.",
  },
  T04: {
    sku: "T04",
    name: "Vrindavan Cylindrical Tulsi Mala",
    price: 449,
    image: "/images/products/tulsi/tulsi_04.jpg",
    gallery: [
      {
        id: "main",
        label: "Overview",
        src: "/images/products/tulsi/tulsi_04.jpg",
        alt: "Vrindavan Cylindrical Tulsi Mala Main View",
      },
      {
        id: "beads",
        label: "Cylindrical Beads",
        src: "/images/products/tulsi/t01_beads_macro.jpg",
        alt: "Macro cylindrical wood grain detail",
      },
      {
        id: "lock",
        label: "Lock Craft",
        src: "/images/products/tulsi/t01_lock_knot_detail.jpg",
        alt: "Traditional barrel screw clasp detail",
      },
      {
        id: "model",
        label: "Model Wear",
        src: "/images/products/tulsi/t01_model_wear.jpg",
        alt: "Devotee wearing cylindrical Tulsi mala",
      },
    ],
    details: {
      ref: "T04",
      structure: "Single Round",
      beadSize: "3mm Cylindrical",
      material: "100% Tulsi Wood",
      pendant: "Barrel Lock",
      madeIn: "Vrindavan, Braj",
    },
    description:
      "Artisan-turned cylindrical heartwood beads offering smooth tactile contemplation and enduring daily sacred wear. Pure, unlacquered Vrindavan holy basil retaining its natural aroma.",
  },
  T05: {
    sku: "T05",
    name: "Natural Round Beads Tulsi Mala",
    price: 499,
    image: "/images/products/tulsi/tulsi_05.jpg",
    gallery: [
      {
        id: "main",
        label: "Overview",
        src: "/images/products/tulsi/tulsi_05.jpg",
        alt: "Natural Round Beads Tulsi Mala Main View",
      },
      {
        id: "detail",
        label: "Round Beads Detail",
        src: "/images/origin/know_tulsi_wood.jpg",
        alt: "Prominent 7.5mm round natural beads detail",
      },
      {
        id: "lock",
        label: "Lock Craft",
        src: "/images/products/tulsi/t01_lock_knot_detail.jpg",
        alt: "Traditional lock and knot detail",
      },
      {
        id: "model",
        label: "Model Wear",
        src: "/images/products/tulsi/t01_model_wear.jpg",
        alt: "Model wear view of round beads Tulsi mala",
      },
    ],
    details: {
      ref: "T05",
      structure: "Single Round",
      beadSize: "7.5mm Round",
      material: "100% Tulsi Wood",
      pendant: "Pendants",
      madeIn: "Vrindavan, Braj",
    },
    description:
      "Prominent 7.5mm polished round holy basil beads, unlacquered and naturally fragrant with spiritual serenity. Handcrafted from mature sacred branches in Vrindavan Dham.",
  },
  T06: {
    sku: "T06",
    name: "Traditional Braj Kanthi Mala",
    price: 399,
    image: "/images/products/tulsi/tulsi_06.jpg",
    gallery: [
      {
        id: "main",
        label: "Overview",
        src: "/images/products/tulsi/tulsi_06.jpg",
        alt: "Traditional Braj Kanthi Mala Main View",
      },
      {
        id: "detail",
        label: "Beads Detail",
        src: "/images/products/tulsi/t01_beads_macro.jpg",
        alt: "4.5mm round natural wood beads",
      },
      {
        id: "lock",
        label: "Lock Craft",
        src: "/images/products/tulsi/t01_lock_knot_detail.jpg",
        alt: "Traditional barrel clasp detail",
      },
      {
        id: "model",
        label: "Model Wear",
        src: "/images/products/tulsi/t01_model_wear.jpg",
        alt: "Model wear view of Braj Kanthi Mala",
      },
    ],
    details: {
      ref: "T06",
      structure: "Single Round",
      beadSize: "4.5mm Round",
      material: "100% Tulsi Wood",
      pendant: "Barrel Clasp",
      madeIn: "Vrindavan, Braj",
    },
    description:
      "Traditional Vaishnava neckwear crafted from sacred fallen Braj wood with a precision brass screw barrel lock. Ideal for daily personal wear and spiritual alignment.",
  },
  T07: {
    sku: "T07",
    name: "Radha Krishna Barrel Lock Tulsi Mala",
    price: 429,
    image: "/images/products/tulsi/tulsi_07.jpg",
    gallery: [
      {
        id: "main",
        label: "Overview",
        src: "/images/products/tulsi/tulsi_07.jpg",
        alt: "Radha Krishna Barrel Lock Tulsi Mala Main View",
      },
      {
        id: "detail",
        label: "Lock Craft",
        src: "/images/products/tulsi/t01_lock_knot_detail.jpg",
        alt: "Traditional brass barrel screw clasp and sacred knot detail",
      },
      {
        id: "model",
        label: "Model Wear",
        src: "/images/products/tulsi/t01_model_wear.jpg",
        alt: "Devotee model wearing Vrindavan Tulsi Kanthi Mala",
      },
    ],
    details: {
      ref: "T07",
      structure: "Single Round",
      beadSize: "3mm Round",
      material: "100% Tulsi Wood",
      pendant: "Barrel Lock",
      madeIn: "Vrindavan, Braj",
    },
    description:
      "Handcrafted with fine 3mm sacred Vrindavan Tulsi beads and a traditional solid brass screw barrel lock, designed for enduring daily devotion and skin contact.",
  },
  T08: {
    sku: "T08",
    name: "Shyam Kund Dark Wood Radha Krishna Mala",
    price: 469,
    image: "/images/products/tulsi/tulsi_08.jpg",
    gallery: [
      {
        id: "main",
        label: "Overview",
        src: "/images/products/tulsi/tulsi_08.jpg",
        alt: "Shyam Kund Dark Wood Radha Krishna Mala Main View",
      },
      {
        id: "detail",
        label: "Wood Texture",
        src: "/images/origin/know_tulsi_wood.jpg",
        alt: "Aged dark Vrindavan holy basil heartwood texture",
      },
      {
        id: "model",
        label: "Model Wear",
        src: "/images/products/tulsi/t01_model_wear.jpg",
        alt: "Model wear view of sacred dark wood Tulsi Mala",
      },
    ],
    details: {
      ref: "T08",
      structure: "Single Round",
      beadSize: "3.5mm Round",
      material: "100% Mature Tulsi Heartwood",
      pendant: "Radha Krishna Locket",
      madeIn: "Vrindavan, Braj",
    },
    description:
      "Distinctive aged dark heartwood harvested from sanctified Vrindavan groves near Radha Kund and Shyam Kund, naturally seasoned and unlacquered.",
  },
  T09: {
    sku: "T09",
    name: "108 Beads Vrindavan Tulsi Japa Mala",
    price: 699,
    image: "/images/products/tulsi/tulsi_09_japa_beads.jpg",
    gallery: [
      {
        id: "main",
        label: "Overview",
        src: "/images/products/tulsi/tulsi_09_japa_beads.jpg",
        alt: "108 Beads Vrindavan Tulsi Japa Mala Main View",
      },
      {
        id: "detail",
        label: "Brahmagranthi Knots",
        src: "/images/editorial/editorial_5_japa_mala.jpg",
        alt: "Handcrafted 108 beads Vrindavan Tulsi Japa Mala with golden tassel",
      },
      {
        id: "model",
        label: "Model Wear",
        src: "/images/products/tulsi/t01_model_wear.jpg",
        alt: "Devotee holding sacred Japa contemplation mala",
      },
    ],
    details: {
      ref: "T09",
      structure: "108 Beads + Guru Bead",
      beadSize: "7mm Round",
      material: "100% Natural Tulsi Wood",
      pendant: "Golden Sacred Tassel",
      madeIn: "Vrindavan, Braj",
    },
    description:
      "Consecrated 108+1 counting mala hand-tied with traditional Vedic Brahmagranthi knots between every bead. Designed for daily chanting of the Hare Krishna Maha-Mantra.",
  },
};

const SIZE_OPTIONS = [
  { id: "1-round", label: "1 ROUND" },
  { id: "2-round", label: "2 ROUNDS" },
];

export function TulsiT01Showcase({ productSku = "T01" }: { productSku?: string }) {
  // Normalize SKU: handles "T01", "t01", "t-01", etc.
  const normalizedSku = productSku.toUpperCase().replace("-", "");
  const product = PRODUCT_CATALOG[normalizedSku] || PRODUCT_CATALOG["T01"];

  const [selectedIdx, setSelectedIdx] = useState(0);
  const [selectedSize, setSelectedSize] = useState("1-round");
  const [sizeDropdownOpen, setSizeDropdownOpen] = useState(false);
  const [sizeGuideOpen, setSizeGuideOpen] = useState(false);
  const [added, setAdded] = useState(false);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  // Accordion state: Description and Details open by default (BVLGARI style)
  const [descOpen, setDescOpen] = useState(true);
  const [detailsOpen, setDetailsOpen] = useState(true);

  const { addToCart, openCart, isInWishlist, toggleWishlist } = useCart();
  const isSaved = isInWishlist(product.sku);

  const currentSizeObj = SIZE_OPTIONS.find((s) => s.id === selectedSize) || SIZE_OPTIONS[0];

  const handleAddToCart = () => {
    addToCart({
      id: `prod-tulsi-${product.sku.toLowerCase()}`,
      name: `${product.name} (${currentSizeObj.label})`,
      price: product.price,
      originalPrice: product.price + 150,
      image: product.gallery[selectedIdx]?.src || product.image,
    });
    setAdded(true);
    openCart();
    setTimeout(() => setAdded(false), 2400);
  };

  return (
    <div className="w-full bg-[#FAF8F5]">
      {/* ========================================================================= */}
      {/* SECTION 1: LUXURY PRODUCT SHOWCASE (Matching Image 1)                     */}
      {/* ========================================================================= */}
      <section id="product-showcase" className="w-full pt-6 sm:pt-10 pb-16 sm:pb-24">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">

          {/* BVLGARI-STYLE 2-COLUMN LUXURY SHOWCASE (50/50 Balanced) */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 xl:gap-20 items-start">

            {/* LEFT COLUMN: PRODUCT MEDIA GALLERY */}
            <div className="flex flex-col gap-4">

              {/* Clean Square Main Image Container (Zero overlays, Zero AI watermarks) */}
              <div
                onClick={() => setLightboxOpen(true)}
                className="relative aspect-square w-full rounded-none overflow-hidden bg-white border border-[#E8E2D5] cursor-pointer group"
              >
                <Image
                  src={product.gallery[selectedIdx]?.src || product.image}
                  alt={product.gallery[selectedIdx]?.alt || product.name}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-center transition-all duration-500 group-hover:scale-[1.02]"
                />
              </div>

              {/* Exact 4 Square Thumbnails Row Directly Below */}
              <div className="grid grid-cols-4 gap-3">
                {product.gallery.map((view, idx) => {
                  const isActive = selectedIdx === idx;
                  return (
                    <button
                      key={view.id}
                      onClick={() => setSelectedIdx(idx)}
                      className={`relative aspect-square overflow-hidden bg-white transition-all cursor-pointer text-left focus:outline-none ${isActive
                        ? "border-2 border-[#122E46]"
                        : "border border-[#E8E2D5] opacity-75 hover:opacity-100"
                        }`}
                      title={view.label}
                      aria-label={`Select ${view.label}`}
                    >
                      <Image
                        src={view.src}
                        alt={view.alt}
                        fill
                        sizes="150px"
                        className="object-cover object-center"
                      />
                    </button>
                  );
                })}
              </div>
            </div>

            {/* RIGHT COLUMN: PRODUCT INFO & LUXURY HIERARCHY */}
            <div className="flex flex-col space-y-6 pt-1 lg:pt-2">

              {/* 1. TITLE & WISHLIST HEART */}
              <div className="flex items-start justify-between gap-4">
                <h1
                  className="text-2xl sm:text-3xl font-normal tracking-[0.06em] text-[#122E46] uppercase leading-snug"
                  style={{ fontFamily: "var(--font-serif), 'Playfair Display', Georgia, serif" }}
                >
                  {product.name}
                </h1>

                {/* Wishlist Heart Icon */}
                <button
                  onClick={() =>
                    toggleWishlist({
                      id: `prod-tulsi-${product.sku.toLowerCase()}`,
                      name: product.name,
                      price: product.price,
                      originalPrice: product.price + 150,
                      image: product.image,
                    })
                  }
                  className={`p-1.5 transition-colors cursor-pointer ${isSaved ? "text-rose-600" : "text-stone-400 hover:text-[#122E46]"
                    }`}
                  title={isSaved ? "Remove from Wishlist" : "Add to Wishlist"}
                  aria-label="Wishlist"
                >
                  <Heart className={`w-5 h-5 stroke-[1.2] ${isSaved ? "fill-rose-600" : ""}`} />
                </button>
              </div>

              {/* 2. SIZE SELECTOR & FIND YOUR SIZE LINK */}
              <div className="space-y-1.5 pt-1">
                <div className="text-[11px] font-mono uppercase tracking-widest text-stone-500 font-normal">
                  Size
                </div>

                {/* Compact Rectangular Dropdown matching Image 2 */}
                <div className="relative inline-block">
                  <button
                    type="button"
                    onClick={() => setSizeDropdownOpen((prev) => !prev)}
                    className="flex items-center gap-4 px-3.5 py-1.5 border border-[#122E46] bg-white text-xs font-mono uppercase tracking-wider text-[#122E46] cursor-pointer"
                    aria-haspopup="listbox"
                    aria-expanded={sizeDropdownOpen}
                  >
                    <span>{currentSizeObj.label}</span>
                    <ChevronDown className="w-3.5 h-3.5 text-stone-600" />
                  </button>

                  {sizeDropdownOpen && (
                    <div className="absolute top-full left-0 mt-1 bg-white border border-[#E8E2D5] shadow-md z-20 py-1 min-w-[140px]">
                      {SIZE_OPTIONS.map((opt) => (
                        <button
                          key={opt.id}
                          type="button"
                          onClick={() => {
                            setSelectedSize(opt.id);
                            setSizeDropdownOpen(false);
                          }}
                          className={`w-full px-3 py-2 text-left text-xs font-mono uppercase tracking-wider transition-colors cursor-pointer ${selectedSize === opt.id
                            ? "bg-[#F5F2EB] text-[#122E46] font-semibold"
                            : "text-stone-700 hover:bg-[#FAF8F5]"
                            }`}
                        >
                          {opt.label}
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                {/* Clean "Find your size" link */}
                <div className="pt-0.5">
                  <button
                    type="button"
                    onClick={() => setSizeGuideOpen(true)}
                    className="text-[11px] font-sans text-stone-500 hover:text-[#122E46] transition-colors cursor-pointer"
                  >
                    Find your size
                  </button>
                </div>
              </div>

              {/* 3. PRICE & TAXES */}
              <div className="pt-2 space-y-0.5">
                <div className="text-2xl sm:text-[28px] font-normal font-sans text-[#122E46] tracking-tight">
                  ₹{product.price.toLocaleString("en-IN")}.00
                </div>
                <div className="text-[11px] font-sans text-stone-500 font-normal">
                  Including Taxes
                </div>
              </div>

              {/* 4. ACTION BUTTONS (PRINCIPLES TO WEAR & ADD TO CART) */}
              <div className="pt-2 pb-5 border-b border-[#E8E2D5]">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <Link
                    href="/principles-to-wear-tulsi"
                    className="w-full py-3 px-4 border border-[#122E46] text-[#122E46] bg-transparent hover:bg-[#122E46] hover:text-[#FAF8F5] transition-all duration-200 text-xs font-mono uppercase tracking-[0.14em] text-center font-medium flex items-center justify-center cursor-pointer"
                  >
                    Principles to Wear
                  </Link>

                  <button
                    type="button"
                    onClick={handleAddToCart}
                    className="w-full py-3 px-4 bg-[#122E46] hover:bg-[#1B3C59] text-[#FAF8F5] border border-[#122E46] transition-all duration-200 text-xs font-mono uppercase tracking-[0.14em] text-center font-medium flex items-center justify-center cursor-pointer shadow-xs active:scale-[0.99]"
                  >
                    {added ? "Added To Cart" : "Add To Cart"}
                  </button>
                </div>
              </div>

              {/* 5. ACCORDION 1: DESCRIPTION ∨ */}
              <div className="border-b border-[#E8E2D5] pb-4">
                <button
                  type="button"
                  onClick={() => setDescOpen((prev) => !prev)}
                  className="w-full flex items-center justify-between text-left text-sm sm:text-base font-mono uppercase tracking-[0.16em] text-[#122E46] font-medium py-3 hover:text-[#7A6242] transition-colors cursor-pointer"
                  aria-expanded={descOpen}
                >
                  <span>Description</span>
                  <ChevronDown
                    className={`w-4 h-4 text-stone-500 transition-transform duration-200 ${descOpen ? "rotate-180" : ""
                      }`}
                  />
                </button>

                {descOpen && (
                  <div className="pt-2 text-xs font-sans text-stone-600 leading-relaxed space-y-2">
                    <p>{product.description}</p>
                  </div>
                )}
              </div>

              {/* 6. ACCORDION 2: DETAILS ∨ */}
              <div className="border-b border-[#E8E2D5] pb-4">
                <button
                  type="button"
                  onClick={() => setDetailsOpen((prev) => !prev)}
                  className="w-full flex items-center justify-between text-left text-sm sm:text-base font-mono uppercase tracking-[0.16em] text-[#122E46] font-medium py-3 hover:text-[#7A6242] transition-colors cursor-pointer"
                  aria-expanded={detailsOpen}
                >
                  <span>Details</span>
                  <ChevronDown
                    className={`w-4 h-4 text-stone-500 transition-transform duration-200 ${detailsOpen ? "rotate-180" : ""
                      }`}
                  />
                </button>

                {detailsOpen && (
                  <div className="pt-4 grid grid-cols-3 gap-y-5 gap-x-4 text-xs font-sans">
                    {/* Row 1 */}
                    <div>
                      <span className="text-[10px] font-mono uppercase tracking-wider text-stone-400 block mb-1 font-normal">
                        Ref.
                      </span>
                      <span className="text-[#122E46] font-normal">{product.details.ref}</span>
                    </div>

                    <div>
                      <span className="text-[10px] font-mono uppercase tracking-wider text-stone-400 block mb-1 font-normal">
                        Structure
                      </span>
                      <span className="text-[#122E46] font-normal">{product.details.structure}</span>
                    </div>

                    <div>
                      <span className="text-[10px] font-mono uppercase tracking-wider text-stone-400 block mb-1 font-normal">
                        Bead Size
                      </span>
                      <span className="text-[#122E46] font-normal">{product.details.beadSize}</span>
                    </div>

                    {/* Row 2 */}
                    <div>
                      <span className="text-[10px] font-mono uppercase tracking-wider text-stone-400 block mb-1 font-normal">
                        Material
                      </span>
                      <span className="text-[#122E46] font-normal">{product.details.material}</span>
                    </div>

                    <div>
                      <span className="text-[10px] font-mono uppercase tracking-wider text-stone-400 block mb-1 font-normal">
                        Pendant
                      </span>
                      <span className="text-[#122E46] font-normal">{product.details.pendant}</span>
                    </div>

                    <div>
                      <span className="text-[10px] font-mono uppercase tracking-wider text-stone-400 block mb-1 font-normal">
                        Made In
                      </span>
                      <span className="text-[#122E46] font-normal">{product.details.madeIn}</span>
                    </div>
                  </div>
                )}
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Sizing Modal */}
      {sizeGuideOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setSizeGuideOpen(false)}
        >
          <div
            className="relative max-w-md w-full bg-[#FAF8F5] rounded-none border border-[#E8E2D5] p-6 shadow-2xl space-y-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-[#E8E2D5] pb-3">
              <h3 className="font-serif text-lg font-normal text-[#122E46] uppercase tracking-wide">
                Tulsi Mala Sizing
              </h3>
              <button
                onClick={() => setSizeGuideOpen(false)}
                className="p-1 text-stone-600 hover:text-black cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="space-y-3 text-xs text-stone-600 font-sans leading-relaxed">
              <div>
                <strong className="text-[#122E46] block mb-0.5">1 Round (18–20 Inches)</strong>
                <p>Standard neck wear resting at the collarbone. Single sacred strand with secure brass barrel clasp.</p>
              </div>

              <div>
                <strong className="text-[#122E46] block mb-0.5">2 Rounds (36 Inches)</strong>
                <p>Extended length designed to loop twice in the traditional Braj temple style.</p>
              </div>
            </div>

            <button
              onClick={() => setSizeGuideOpen(false)}
              className="w-full py-2.5 bg-[#122E46] text-[#FAF8F5] text-xs font-mono uppercase tracking-wider cursor-pointer hover:bg-[#1B3C59] transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Lightbox / Zoom Modal */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setLightboxOpen(false)}
        >
          <div className="relative max-w-3xl max-h-[85vh] w-full aspect-square bg-black overflow-hidden">
            <Image
              src={product.gallery[selectedIdx]?.src || product.image}
              alt={product.gallery[selectedIdx]?.alt || product.name}
              fill
              className="object-contain"
            />
            <button
              onClick={() => setLightboxOpen(false)}
              className="absolute top-4 right-4 text-white bg-white/20 hover:bg-white/40 rounded-full w-9 h-9 flex items-center justify-center transition-colors cursor-pointer text-sm"
              aria-label="Close zoom view"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
