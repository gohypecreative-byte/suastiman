"use client";

import React, { useState, useEffect, Suspense } from "react";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CartDrawer } from "@/components/cart/CartDrawer";
import { CartProvider, useCart } from "@/context/CartContext";
import { ShoppingBag, Check, ArrowLeft, Filter } from "lucide-react";

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

function ProductsCatalog() {
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get("category");
  
  const [activeCategory, setActiveCategory] = useState<"all" | "rudraksha" | "tulsi" | "gemstones">("all");
  const [addedId, setAddedId] = useState<string | null>(null);
  const { addToCart } = useCart();

  useEffect(() => {
    if (initialCategory && ["rudraksha", "tulsi", "gemstones"].includes(initialCategory)) {
      setActiveCategory(initialCategory as "rudraksha" | "tulsi" | "gemstones");
    }
  }, [initialCategory]);

  const filteredProducts = activeCategory === "all"
    ? CATALOG_PRODUCTS
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

      <main className="flex-1 pt-28 sm:pt-32 pb-20 px-4 sm:px-8 lg:px-12 max-w-7xl mx-auto w-full">
        {/* Breadcrumb & Navigation */}
        <div className="flex items-center gap-2 text-xs text-stone-500 mb-6">
          <Link href="/" className="hover:text-black transition-colors flex items-center gap-1">
            <ArrowLeft className="w-3.5 h-3.5" /> Back to Home
          </Link>
          <span>/</span>
          <span>Collections</span>
          <span>/</span>
          <span className="text-[#1A1815] font-semibold capitalize">{activeCategory}</span>
        </div>

        {/* Page Header */}
        <div className="border-b border-[#E8E2D5] pb-8 mb-10">
          <h1 className="font-serif text-3xl sm:text-5xl font-normal text-[#1A1815] tracking-tight mb-3">
            {headerInfo.title}
          </h1>
          <p className="text-stone-600 text-sm sm:text-base max-w-2xl leading-relaxed">
            {headerInfo.subtitle}
          </p>

          {/* Category Filter Pills */}
          <div className="flex items-center gap-2 mt-8 overflow-x-auto pb-2 scrollbar-none">
            {[
              { id: "all", label: "All Collections" },
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

        {/* Products Count Indicator */}
        <div className="flex items-center justify-between text-xs text-stone-500 mb-8">
          <span>Showing {filteredProducts.length} authentic pieces</span>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
          {filteredProducts.map((prod) => (
            <div
              key={prod.id}
              className="group bg-white rounded-2xl overflow-hidden border border-[#E8E2D5] shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col"
            >
              {/* Image Container */}
              <Link href={`/products/${prod.id}`} className="relative aspect-[4/3] bg-stone-100 overflow-hidden block">
                <Image
                  src={prod.image}
                  alt={prod.name}
                  fill
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
              </Link>

              {/* Product Info */}
              <div className="p-5 flex flex-col flex-1 justify-between">
                <div>
                  <Link href={`/products/${prod.id}`}>
                    <h3 className="font-serif text-lg text-[#1A1815] group-hover:text-[#7A6242] transition-colors leading-snug line-clamp-2">
                      {prod.name}
                    </h3>
                  </Link>
                </div>

                {/* Price and Cart Button */}
                <div className="pt-4 mt-4 border-t border-stone-100 flex items-center justify-between">
                  <div>
                    <span className="text-base font-semibold text-[#1A1815]">
                      ₹{prod.price.toLocaleString("en-IN")}
                    </span>
                    {prod.originalPrice && (
                      <span className="text-xs text-stone-400 line-through ml-2">
                        ₹{prod.originalPrice.toLocaleString("en-IN")}
                      </span>
                    )}
                  </div>

                  <button
                    onClick={(e) => handleAddToCart(e, prod)}
                    className={`p-2.5 rounded-full transition-all duration-300 shadow cursor-pointer ${
                      addedId === prod.id
                        ? "bg-emerald-700 text-white scale-95"
                        : "bg-[#1A1815] hover:bg-[#C5A880] text-white"
                    }`}
                    aria-label="Add to bag"
                  >
                    {addedId === prod.id ? (
                      <Check className="w-4 h-4 stroke-[2.5]" />
                    ) : (
                      <ShoppingBag className="w-4 h-4" />
                    )}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      <Footer />
      <CartDrawer />
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
