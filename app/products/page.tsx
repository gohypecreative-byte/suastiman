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
import { ShoppingBag, Check, ArrowLeft, ArrowRight, Filter, Heart, Plus, Bookmark } from "lucide-react";

export interface CatalogProduct {
  id: string;
  name: string;
  category: "rudraksha" | "tulsi" | "gemstones";
  material: string;
  origin: string;
  price: number;
  originalPrice?: number;
  image: string;
  images: string[];
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
    images: [
      "/images/products/prod1.webp",
      "/images/origin/rudraksha_macro_seed.jpg",
      "/images/origin/stage9_svastiman.jpg",
    ],
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
    images: [
      "/images/products/prod2.webp",
      "/images/origin/know_tulsi_wood.jpg",
      "/images/origin/tulsi_heritage_plant.jpg",
    ],
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
    images: [
      "/images/products/prod3.webp",
      "/images/origin/raw_gemstone_craft.jpg",
      "/images/origin/trust_gem_bright.jpg",
    ],
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
    images: [
      "/images/products/prod4.webp",
      "/images/origin/hero_journey_seed.jpg",
      "/images/origin/rudraksha_hand_clean.jpg",
    ],
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
    images: [
      "/images/origin/brand_macro_detail.jpg",
      "/images/products/prod3.webp",
      "/images/origin/raw_gemstone_craft.jpg",
    ],
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
    images: [
      "/images/origin/know_tulsi_wood.jpg",
      "/images/origin/tulsi_heritage_plant.jpg",
      "/images/products/prod2.webp",
    ],
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
    images: [
      "/images/origin/rudraksha_macro_seed.jpg",
      "/images/origin/zodiac_pendant_centered.jpg",
      "/images/products/prod1.webp",
    ],
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
    images: [
      "/images/origin/raw_gemstone_craft.jpg",
      "/images/products/zodiac_bracelets_collection.jpg",
      "/images/origin/trust_gem_bright.jpg",
    ],
    badge: "100% Earth Mined",
    specs: ["Natural Optical Banding", "Polished with River Quartz", "Elastic Heavy Duty"],
  },
];

type CategoryFilter = "all" | "bracelets" | "malas" | "rudraksha" | "tulsi" | "gemstones";

interface ProductCardProps {
  prod: CatalogProduct;
  isSaved: boolean;
  onToggleWishlist: () => void;
  onAddToCart: (e: React.MouseEvent) => void;
  isAdded: boolean;
}

function ProductCardItem({
  prod,
  isSaved,
  onToggleWishlist,
  onAddToCart,
  isAdded,
}: ProductCardProps) {
  const [currentIdx, setCurrentIdx] = useState(0);
  const images = prod.images && prod.images.length > 0 ? prod.images : [prod.image];

  const handlePrev = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentIdx((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentIdx((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="group flex flex-col select-none">
      {/* Rounded Image Container (Compact height, edge-to-edge perfect fit) */}
      <div className="relative aspect-square w-full rounded-2xl overflow-hidden bg-[#FAF8F5] border border-[#E8E2D5]/70 group-hover:border-[#C5A880]/70 transition-all duration-300">
        <Link href={`/products/${prod.id}`} className="absolute inset-0 block">
          <Image
            src={images[currentIdx]}
            alt={prod.name}
            fill
            className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
          />
        </Link>

        {/* Previous Image Button (Translucent opaque frosted style matching reference image) */}
        {images.length > 1 && (
          <button
            onClick={handlePrev}
            className="absolute left-2.5 sm:left-3 top-1/2 -translate-y-1/2 z-10 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/45 backdrop-blur-md text-[#111111] border border-white/20 shadow-xs flex items-center justify-center cursor-pointer transition-all duration-300 ease-out active:scale-95 max-sm:opacity-95 max-sm:translate-x-0 sm:opacity-0 sm:-translate-x-[calc(100%+20px)] sm:pointer-events-none sm:group-hover:opacity-100 sm:group-hover:translate-x-0 sm:group-hover:pointer-events-auto"
            aria-label="Previous image"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-4 h-4 sm:w-5 sm:h-5"
            >
              <line x1="19" y1="12" x2="5" y2="12" />
              <polyline points="10 7 5 12 10 17" />
            </svg>
          </button>
        )}

        {/* Next Image Button (Translucent opaque frosted style matching reference image) */}
        {images.length > 1 && (
          <button
            onClick={handleNext}
            className="absolute right-2.5 sm:right-3 top-1/2 -translate-y-1/2 z-10 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/45 backdrop-blur-md text-[#111111] border border-white/20 shadow-xs flex items-center justify-center cursor-pointer transition-all duration-300 ease-out active:scale-95 max-sm:opacity-95 max-sm:translate-x-0 sm:opacity-0 sm:translate-x-[calc(100%+20px)] sm:pointer-events-none sm:group-hover:opacity-100 sm:group-hover:translate-x-0 sm:group-hover:pointer-events-auto"
            aria-label="Next image"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-4 h-4 sm:w-5 sm:h-5"
            >
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="14 7 19 12 14 17" />
            </svg>
          </button>
        )}

        {/* Pagination Dots (Matching reference card) */}
        {images.length > 1 && (
          <div className="absolute bottom-2.5 sm:bottom-3 left-1/2 -translate-x-1/2 z-10 flex items-center gap-1.5 pointer-events-none">
            {images.map((_, idx) => (
              <span
                key={idx}
                className={`rounded-full transition-all duration-300 ${
                  idx === currentIdx
                    ? "w-2 h-2 bg-white shadow-xs"
                    : "w-1.5 h-1.5 bg-white/50 backdrop-blur-xs"
                }`}
              />
            ))}
          </div>
        )}

        {/* Bookmark Button in top-right corner (No round background, direct clean icon with drop shadow) */}
        <button
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            onToggleWishlist();
          }}
          className="absolute top-2.5 right-2.5 sm:top-3 sm:right-3 z-20 cursor-pointer p-1 transition-transform duration-200 hover:scale-115 active:scale-90"
          aria-label={isSaved ? "Remove from Wishlist" : "Save to Wishlist"}
        >
          <Bookmark
            className={`w-5.5 h-5.5 sm:w-6.5 sm:h-6.5 drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)] transition-all duration-300 ${
              isSaved
                ? "fill-[#1A1815] text-[#1A1815] stroke-white stroke-1"
                : "text-stone-700/80 hover:text-stone-900 fill-stone-700/25 stroke-[1.8]"
            }`}
          />
        </button>
      </div>

      {/* Below-Image Product Info (Name & Price shifted right, + button shifted left) */}
      <div className="mt-2 sm:mt-2.5 flex items-start justify-between gap-1.5 px-0.5">
        <div className="min-w-0 flex-1 pl-2.5 sm:pl-3.5">
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

        {/* Plus Action Button (Shifted left from the right edge) */}
        <button
          onClick={onAddToCart}
          className="p-1.5 text-stone-800 hover:text-black hover:scale-110 active:scale-90 transition-transform cursor-pointer shrink-0 mr-2.5 sm:mr-3.5"
          aria-label="Add to cart"
        >
          {isAdded ? (
            <Check className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-600 stroke-[2.5]" />
          ) : (
            <Plus className="w-4 h-4 sm:w-5 sm:h-5 stroke-[1.8]" />
          )}
        </button>
      </div>
    </div>
  );
}

function ProductsCatalog() {
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get("category");
  
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>("all");
  const [addedId, setAddedId] = useState<string | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
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

  const handleToggleWishlist = (prod: CatalogProduct) => {
    const currentlySaved = isInWishlist(prod.id);
    toggleWishlist({
      id: prod.id,
      name: prod.name,
      price: prod.price,
      originalPrice: prod.originalPrice,
      image: prod.image,
      category: prod.category,
      badge: prod.badge,
      specs: prod.specs,
    });
    setToastMessage(
      currentlySaved ? `"${prod.name}" removed from Wishlist` : `"${prod.name}" saved to Wishlist`
    );
    setTimeout(() => setToastMessage(null), 2500);
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
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-3 lg:gap-3.5">
          {filteredProducts.map((prod) => (
            <ProductCardItem
              key={prod.id}
              prod={prod}
              isSaved={isInWishlist(prod.id)}
              onToggleWishlist={() => handleToggleWishlist(prod)}
              onAddToCart={(e) => handleAddToCart(e, prod)}
              isAdded={addedId === prod.id}
            />
          ))}
        </div>
      </main>

      {/* Floating Wishlist Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-20 sm:bottom-8 left-1/2 -translate-x-1/2 z-50 flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-[#1A1815] text-[#FAF8F5] text-xs font-medium shadow-2xl border border-[#3E3832] transition-all duration-300">
          <Bookmark className="w-4 h-4 fill-[#C5A880] text-[#C5A880]" />
          <span>{toastMessage}</span>
          <Link href="/wishlist" className="ml-1 underline font-semibold text-[#C5A880] hover:text-white">
            View
          </Link>
        </div>
      )}

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
