"use client";

import React, { useState, useEffect, Suspense } from "react";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CartDrawer } from "@/components/cart/CartDrawer";
import { BottomNav } from "@/components/layout/BottomNav";
import { CartProvider, useCart } from "@/context/CartContext";
import { ShoppingBag, Check, ArrowLeft, Filter, Heart, Plus, Bookmark } from "lucide-react";

export interface CatalogProduct {
  id: string;
  name: string;
  category: "rudraksha" | "tulsi" | "gemstones";
  material: string;
  origin: string;
  price: number;
  originalPrice?: number;
  image: string;
  badge: string;
  specs: string[];
}

const CATALOG_PRODUCTS: CatalogProduct[] = [
  {
    id: "prod-rudraksha-108",
    name: "Himalayan Rudraksha 108 Japa Mala",
    category: "rudraksha",
    material: "Wild Nepal Elaeocarpus & Unbleached Cotton",
    origin: "Taplejung, East Nepal (2,200m)",
    price: 2899,
    originalPrice: 3499,
    image: "/images/products/prod1.webp",
    badge: "100% Wild Sourced",
    specs: ["Lab X-Ray Tested", "Traditional Brahmagranthi Knots", "Sandalwood Oil Cured"],
  },
  {
    id: "prod-tulsi-japa",
    name: "Vrindavan Krishna Tulsi 108 Mala",
    category: "tulsi",
    material: "Naturally Cured Holy Basil Heartwood",
    origin: "Vrindavan Temple Groves, UP",
    price: 1899,
    originalPrice: 2299,
    image: "/images/products/prod2.webp",
    badge: "Temple Soil Harvest",
    specs: ["Hand-Turned Micro Lathe", "Raw Beeswax Buffed", "Natural Eugenol Scent"],
  },
  {
    id: "prod-lapis-bracelet",
    name: "Raw Earth Lapis Lazuli Bracelet",
    category: "gemstones",
    material: "Untreated Metamorphic Lapis with Pyrite",
    origin: "Jaipur Water Lapidary Craft",
    price: 1999,
    originalPrice: 2499,
    image: "/images/products/prod3.webp",
    badge: "Zero Chemical Dye",
    specs: ["Certified Mineralogy", "Natural Pyrite Veins", "High-Tensile Resilient Cord"],
  },
  {
    id: "prod-rudraksha-wrist",
    name: "Tactile Himalayan Wrist Rudraksha",
    category: "rudraksha",
    material: "Selected 5-Mukhi Symmetrical Seeds",
    origin: "Bhojpur Highlands, Nepal",
    price: 1299,
    originalPrice: 1599,
    image: "/images/products/prod4.webp",
    badge: "Selected Locules",
    specs: ["Water Density Cleared", "Natural Vegetal Wax", "Stretch Resistant Core"],
  },
  {
    id: "prod-multi-mala",
    name: "Multi-Gemstone & Tulsi Alignment Mala",
    category: "gemstones",
    material: "Tiger Eye, Hematite, Emerald Quartz & Tulsi",
    origin: "Jaipur Lapidary & Vrindavan",
    price: 2499,
    originalPrice: 2999,
    image: "/images/origin/brand_macro_detail.jpg",
    badge: "Seven Chakra Matrix",
    specs: ["Natural Untreated Stones", "Hand Knotted", "Silver Guru Bead"],
  },
  {
    id: "prod-tulsi-kanthi",
    name: "Vrindavan Tulsi Double-Strand Kanthi",
    category: "tulsi",
    material: "Aged Fallen Vrindavan Holy Basil",
    origin: "Radha Kund Vicinity, Vrindavan",
    price: 999,
    originalPrice: 1299,
    image: "/images/origin/know_tulsi_wood.jpg",
    badge: "Traditional Kanthi",
    specs: ["Temple Sanctified", "Pure Cotton Cord", "Skin-Safe Herbal Oil"],
  },
  {
    id: "prod-rudraksha-silver",
    name: "Single Mukhi Himalayan Seed Pendant",
    category: "rudraksha",
    material: "Rare Natural Half-Moon 1-Mukhi Rudraksha",
    origin: "Rameshwaram / Nepal Foothills",
    price: 4499,
    originalPrice: 5299,
    image: "/images/origin/rudraksha_macro_seed.jpg",
    badge: "Certified Rare Locule",
    specs: ["Complete X-Ray Certification", "925 Hallmarked Silver Cap", "Custom Silk Cord"],
  },
  {
    id: "prod-tiger-eye-bracelet",
    name: "Raw Tiger Eye Energy Bracelet",
    category: "gemstones",
    material: "Chatoyant Natural Tiger Eye Specimen",
    origin: "Rajasthan Natural Mines",
    price: 1499,
    originalPrice: 1899,
    image: "/images/origin/raw_gemstone_craft.jpg",
    badge: "100% Earth Mined",
    specs: ["Natural Optical Banding", "Polished with River Quartz", "Elastic Heavy Duty"],
  },
];

type CategoryFilter = "all" | "bracelets" | "malas" | "rudraksha" | "tulsi" | "gemstones";

function ProductsCatalog() {
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get("category");
  
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>("all");
  const [addedId, setAddedId] = useState<string | null>(null);
  const { addToCart, toggleWishlist, isInWishlist } = useCart();

  useEffect(() => {
    if (initialCategory && ["bracelets", "malas", "rudraksha", "tulsi", "gemstones"].includes(initialCategory)) {
      setActiveCategory(initialCategory as CategoryFilter);
    }
  }, [initialCategory]);

  const filteredProducts = activeCategory === "all"
    ? CATALOG_PRODUCTS
    : activeCategory === "bracelets"
    ? CATALOG_PRODUCTS.filter((p) => p.name.toLowerCase().includes("bracelet") || p.name.toLowerCase().includes("wrist"))
    : activeCategory === "malas"
    ? CATALOG_PRODUCTS.filter((p) => p.name.toLowerCase().includes("mala") || p.name.toLowerCase().includes("kanthi"))
    : CATALOG_PRODUCTS.filter((p) => p.category === activeCategory);

  const handleAddToCart = (e: React.MouseEvent, prod: CatalogProduct) => {
    e.stopPropagation();
    addToCart({
      id: prod.id,
      name: prod.name,
      price: prod.price,
      image: prod.image,
      originalPrice: prod.originalPrice,
    });
    setAddedId(prod.id);
    setTimeout(() => setAddedId(null), 1800);
  };

  const getCategoryTitle = () => {
    switch (activeCategory) {
      case "bracelets":
        return {
          title: "Spiritual Bracelets",
          subtitle: "Tactile wristwear designed for chakra balance, vitality, and continuous mindfulness.",
        };
      case "malas":
        return {
          title: "Sacred 108 Japa Malas",
          subtitle: "Hand-knotted 108 contemplation beads structured with traditional Brahmagranthi ties.",
        };
      case "rudraksha":
        return {
          title: "Sacred Rudraksha Collection",
          subtitle: "Wild Himalayan seeds lab-tested with verified botanical provenance.",
        };
      case "tulsi":
        return {
          title: "Vrindavan Tulsi Wood Collection",
          subtitle: "Naturally cured fallen holy basil wood hand-carved in sacred temple groves.",
        };
      case "gemstones":
        return {
          title: "Earth Gemstones & Minerals",
          subtitle: "Untreated, unheated crystals cut and shaped with Jaipur water-lapidary mastery.",
        };
      default:
        return {
          title: "All Sacred Collections",
          subtitle: "Tactile spiritual objects crafted from authentic botanical and geological origins.",
        };
    }
  };

  const headerInfo = getCategoryTitle();

  return (
    <div className="min-h-screen flex flex-col bg-[#F9F8F5] text-[#111111]">
      <Navbar />

      <main className="flex-1 pt-6 sm:pt-8 pb-16 sm:pb-20 px-4 sm:px-6 lg:px-8 w-full">
        {/* Page Header */}
        <div className="border-b border-[#E8E2D5] pb-6 mb-8">
          <h1 className="font-serif text-3xl sm:text-5xl font-normal text-[#1A1815] tracking-tight mb-4">
            {headerInfo.title}
          </h1>

          {/* Category Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {[
              { id: "all", label: "All Collections" },
              { id: "bracelets", label: "Spiritual Bracelets" },
              { id: "malas", label: "108 Japa Malas" },
              { id: "rudraksha", label: "Sacred Rudraksha" },
              { id: "tulsi", label: "Vrindavan Tulsi" },
              { id: "gemstones", label: "Earth Gemstones" },
            ].map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id as any)}
                className={`px-5 py-2 rounded-full text-xs font-medium uppercase tracking-wider transition-all duration-300 cursor-pointer whitespace-nowrap ${
                  activeCategory === cat.id
                    ? "bg-[#1A1815] text-[#FAF8F5] shadow-md border border-[#1A1815]"
                    : "bg-[#EFECE6]/80 text-stone-700 hover:text-black hover:bg-white border border-[#E0D8CB]"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Products Grid - Minimal Luxury Reference Design */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-7">
          {filteredProducts.map((prod) => {
            const isSaved = isInWishlist(prod.id);

            return (
              <div
                key={prod.id}
                className="group flex flex-col select-none"
              >
                {/* Rounded Image Container (matching reference card) */}
                <div className="relative aspect-[3/4] w-full rounded-2xl overflow-hidden bg-[#FAF8F5] border border-[#E8E2D5]/70 group-hover:border-[#C5A880]/70 transition-all duration-300">
                  <Link href={`/products/${prod.id}`} className="absolute inset-0 block">
                    <Image
                      src={prod.image}
                      alt={prod.name}
                      fill
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    />
                  </Link>

                  {/* Bookmark Button in top-right corner (matching reference image) */}
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      toggleWishlist({
                        id: prod.id,
                        name: prod.name,
                        price: prod.price,
                        originalPrice: prod.originalPrice,
                        image: prod.image,
                        category: prod.category,
                      });
                    }}
                    className="absolute top-2.5 right-2.5 z-10 p-1.5 rounded-full bg-white/80 hover:bg-white text-stone-700 hover:text-black backdrop-blur-xs transition-colors shadow-xs cursor-pointer"
                    aria-label="Save to Wishlist"
                  >
                    <Bookmark
                      className={`w-3.5 h-3.5 sm:w-4 sm:h-4 transition-colors ${
                        isSaved ? "fill-[#1A1815] text-[#1A1815]" : "text-stone-700"
                      }`}
                    />
                  </button>
                </div>

                {/* Below-Image Product Info (No separator line, clean title/price on left, + button on right) */}
                <div className="mt-2.5 sm:mt-3 flex items-start justify-between gap-2 px-0.5">
                  <div className="min-w-0 flex-1">
                    <Link href={`/products/${prod.id}`}>
                      <h3 className="font-sans text-xs sm:text-sm font-medium text-[#1A1815] group-hover:text-[#7A6242] transition-colors line-clamp-1 leading-snug">
                        {prod.name}
                      </h3>
                    </Link>
                    <div className="mt-0.5 sm:mt-1 flex items-baseline gap-1.5">
                      <span className="text-xs sm:text-sm font-semibold text-[#1A1815]">
                        ₹{prod.price.toLocaleString("en-IN")}
                      </span>
                      {prod.originalPrice && (
                        <span className="text-[10px] sm:text-xs text-stone-400 line-through">
                          ₹{prod.originalPrice.toLocaleString("en-IN")}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Plus Action Button on right (matching reference image) */}
                  <button
                    onClick={(e) => handleAddToCart(e, prod)}
                    className="p-1 sm:p-1.5 text-stone-800 hover:text-black hover:scale-110 active:scale-90 transition-transform cursor-pointer shrink-0 -mr-1"
                    aria-label="Add to cart"
                  >
                    {addedId === prod.id ? (
                      <Check className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-600 stroke-[2.5]" />
                    ) : (
                      <Plus className="w-4 h-4 sm:w-5 sm:h-5 stroke-[1.8]" />
                    )}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </main>

      <Footer />
      <CartDrawer />
      <BottomNav />
    </div>
  );
}

export default function ProductsPage() {
  return (
    <CartProvider>
      <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading collections...</div>}>
        <ProductsCatalog />
      </Suspense>
    </CartProvider>
  );
}
