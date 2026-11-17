"use client";

import React, { useState, useEffect, useMemo, Suspense } from "react";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams, useRouter } from "next/navigation";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CartDrawer } from "@/components/cart/CartDrawer";
import { BottomNav } from "@/components/layout/BottomNav";
import { CartProvider, useCart } from "@/context/CartContext";
import {
  ShoppingBag,
  Check,
  ArrowRight,
  Filter,
  Bookmark,
  Plus,
  Sparkles,
  Layers,
  MapPin,
} from "lucide-react";
import {
  Product,
  ProductCategory,
  PRODUCT_CATEGORIES,
  PRODUCTS,
} from "@/lib/products";
import { TulsiCategoryView } from "@/components/products/TulsiCategoryView";

interface ProductCardProps {
  prod: Product;
  isSaved: boolean;
  onToggleWishlist: () => void;
  onAddToCart: (e: React.MouseEvent) => void;
  isAdded: boolean;
  priority?: boolean;
}

function ProductCardItem({
  prod,
  isSaved,
  onToggleWishlist,
  onAddToCart,
  isAdded,
  priority = false,
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
      {/* Rounded Image Container */}
      <div className="relative aspect-square w-full rounded-[10px] overflow-hidden bg-[#FAF8F5] border border-[#E8E2D5]/80 group-hover:border-[#C5A880]/80 transition-all duration-300 shadow-xs">
        <Link href={prod.href} className="absolute inset-0 block">
          <Image
            src={images[currentIdx]}
            alt={prod.name}
            fill
            priority={priority}
            loading={priority ? "eager" : "lazy"}
            className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
          />
        </Link>

        {/* Top Badges: Product Code & Provenance Badge */}
        <div className="absolute top-2.5 left-2.5 z-10 flex flex-wrap items-center gap-1.5 pointer-events-none">
          <span className="bg-[#1A1815] text-[#FAF8F5] text-[9.5px] font-mono uppercase tracking-widest font-bold px-2 py-0.5 rounded shadow-sm">
            {prod.code.toUpperCase()}
          </span>
          {prod.badge && (
            <span className="bg-[#C5A880] text-[#122E46] text-[9px] font-semibold uppercase tracking-wider px-1.5 py-0.5 rounded shadow-xs hidden sm:inline-block">
              {prod.badge}
            </span>
          )}
        </div>

        {/* Previous Image Button */}
        {images.length > 1 && (
          <button
            onClick={handlePrev}
            className="absolute left-2 top-1/2 -translate-y-1/2 z-10 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white/60 backdrop-blur-md text-[#111111] border border-white/20 shadow-xs flex items-center justify-center cursor-pointer transition-all duration-200 active:scale-95 max-sm:opacity-90 sm:opacity-0 sm:group-hover:opacity-100"
            aria-label="Previous image"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-4 h-4"
            >
              <line x1="19" y1="12" x2="5" y2="12" />
              <polyline points="10 7 5 12 10 17" />
            </svg>
          </button>
        )}

        {/* Next Image Button */}
        {images.length > 1 && (
          <button
            onClick={handleNext}
            className="absolute right-2 top-1/2 -translate-y-1/2 z-10 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white/60 backdrop-blur-md text-[#111111] border border-white/20 shadow-xs flex items-center justify-center cursor-pointer transition-all duration-200 active:scale-95 max-sm:opacity-90 sm:opacity-0 sm:group-hover:opacity-100"
            aria-label="Next image"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-4 h-4"
            >
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="14 7 19 12 14 17" />
            </svg>
          </button>
        )}

        {/* Pagination Dots */}
        {images.length > 1 && (
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 z-10 flex items-center gap-1.5 pointer-events-none">
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

        {/* Bookmark Button */}
        <button
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            onToggleWishlist();
          }}
          className="absolute top-2.5 right-2.5 z-20 cursor-pointer p-1 transition-transform duration-200 hover:scale-110 active:scale-90"
          aria-label={isSaved ? "Remove from Wishlist" : "Save to Wishlist"}
        >
          <Bookmark
            className={`w-5 h-5 sm:w-5.5 sm:h-5.5 drop-shadow-[0_2px_4px_rgba(0,0,0,0.4)] transition-all duration-300 ${
              isSaved
                ? "fill-[#1A1815] text-[#1A1815] stroke-white stroke-1"
                : "text-stone-700/80 hover:text-stone-900 fill-stone-700/25 stroke-[1.8]"
            }`}
          />
        </button>
      </div>

      {/* Below-Image Product Info */}
      <div className="mt-2.5 flex items-start justify-between gap-2 px-1">
        <div className="min-w-0 flex-1">
          <span className="text-[10px] font-mono uppercase tracking-wider text-[#7A6242] font-semibold block">
            {prod.categoryName} • {prod.code.toUpperCase()}
          </span>
          <Link href={prod.href} className="block mt-0.5">
            <h3 className="font-sans text-xs sm:text-sm font-medium text-[#1A1815] group-hover:text-[#7A6242] transition-colors line-clamp-1 leading-snug">
              {prod.name}
            </h3>
          </Link>
          <div className="mt-1 flex items-baseline gap-2">
            <span className="text-xs sm:text-sm font-bold text-[#1A1815]">
              ₹{prod.price.toLocaleString("en-IN")}
            </span>
            {prod.originalPrice && (
              <span className="text-[10px] sm:text-xs text-stone-400 line-through">
                ₹{prod.originalPrice.toLocaleString("en-IN")}
              </span>
            )}
          </div>
        </div>

        {/* Plus Action Button */}
        <button
          onClick={onAddToCart}
          className="p-1.5 mt-1 rounded-full bg-[#1A1815]/5 hover:bg-[#1A1815] text-[#1A1815] hover:text-white transition-all cursor-pointer shrink-0 active:scale-90"
          aria-label="Add to cart"
        >
          {isAdded ? (
            <Check className="w-4 h-4 text-emerald-600 stroke-[2.5]" />
          ) : (
            <Plus className="w-4 h-4 stroke-[2]" />
          )}
        </button>
      </div>
    </div>
  );
}

function ProductsCatalog() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const categoryParam = searchParams.get("category");

  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [addedId, setAddedId] = useState<string | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const { addToCart, toggleWishlist, isInWishlist } = useCart();

  useEffect(() => {
    if (categoryParam) {
      const match = PRODUCT_CATEGORIES.find(
        (c) => c.id === categoryParam.toLowerCase()
      );
      if (match) {
        setActiveCategory(match.id);
        return;
      }
    }
    setActiveCategory("all");
  }, [categoryParam]);

  const handleCategorySelect = (catId: string) => {
    setActiveCategory(catId);
    if (catId === "all") {
      router.push("/products", { scroll: false });
    } else {
      router.push(`/products?category=${catId}`, { scroll: false });
    }
  };

  const handleAddToCart = (e: React.MouseEvent, prod: Product) => {
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

  const handleToggleWishlist = (prod: Product) => {
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
      currentlySaved
        ? `"${prod.name}" removed from Wishlist`
        : `"${prod.name}" saved to Wishlist`
    );
    setTimeout(() => setToastMessage(null), 2500);
  };

  // Group products by primary category for "all" view
  const categoryGroups = useMemo(() => {
    const groups: {
      meta: (typeof PRODUCT_CATEGORIES)[0];
      products: Product[];
    }[] = [];

    PRODUCT_CATEGORIES.forEach((cat) => {
      let prods: Product[] = [];
      if (cat.id === "malas") {
        prods = PRODUCTS.filter((p) => p.secondaryCategories?.includes("malas"));
      } else {
        prods = PRODUCTS.filter((p) => p.category === cat.id);
      }

      if (prods.length > 0) {
        groups.push({
          meta: cat,
          products: prods,
        });
      }
    });

    return groups;
  }, []);

  // Filtered products for single category view
  const singleCategoryProducts = useMemo(() => {
    if (activeCategory === "all") return PRODUCTS;
    if (activeCategory === "malas") {
      return PRODUCTS.filter((p) => p.secondaryCategories?.includes("malas"));
    }
    return PRODUCTS.filter((p) => p.category === activeCategory);
  }, [activeCategory]);

  const activeCategoryMeta = useMemo(() => {
    return PRODUCT_CATEGORIES.find((c) => c.id === activeCategory);
  }, [activeCategory]);

  return (
    <div className="min-h-screen flex flex-col bg-[#F9F8F5] text-[#111111]">
      <Navbar />

      <main className="flex-1 pt-6 sm:pt-8 pb-20 sm:pb-28 px-4 sm:px-6 lg:px-8 xl:px-10 2xl:px-12 w-full">
        {/* Page Header */}
        <div className="border-b border-[#E8E2D5] pb-6 mb-8 sm:mb-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-[#7A6242] font-semibold block mb-1">
                Svastimān Provenance Archive
              </span>
              <h1 className="font-serif text-3xl sm:text-5xl font-normal text-[#1A1815] tracking-tight">
                {activeCategory === "all"
                  ? "Sacred Botanical & Mineral Collections"
                  : activeCategoryMeta?.name}
              </h1>
            </div>

            <p className="text-xs sm:text-sm text-stone-600 max-w-md font-sans">
              {activeCategory === "all"
                ? "Each piece carries verified natural origin, unvarnished tactile integrity, and dedicated product archival codes."
                : activeCategoryMeta?.tagline}
            </p>
          </div>

          {/* Category Filter Pills (Modern luxury navigation) */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            <button
              onClick={() => handleCategorySelect("all")}
              className={`px-4 sm:px-5 py-2 rounded-full text-xs font-semibold tracking-wider uppercase transition-all duration-300 cursor-pointer whitespace-nowrap ${
                activeCategory === "all"
                  ? "bg-[#1A1815] text-[#FAF8F5] shadow-sm border border-[#1A1815]"
                  : "bg-white/80 hover:bg-white text-stone-700 hover:text-black border border-[#E0D8CB]"
              }`}
            >
              All Categories ({PRODUCTS.length})
            </button>

            {PRODUCT_CATEGORIES.map((cat) => {
              const count =
                cat.id === "malas"
                  ? PRODUCTS.filter((p) => p.secondaryCategories?.includes("malas")).length
                  : PRODUCTS.filter((p) => p.category === cat.id).length;

              return (
                <button
                  key={cat.id}
                  onClick={() => handleCategorySelect(cat.id)}
                  className={`px-4 sm:px-5 py-2 rounded-full text-xs font-semibold tracking-wider uppercase transition-all duration-300 cursor-pointer whitespace-nowrap flex items-center gap-1.5 ${
                    activeCategory === cat.id
                      ? "bg-[#1A1815] text-[#FAF8F5] shadow-sm border border-[#1A1815]"
                      : "bg-white/80 hover:bg-white text-stone-700 hover:text-black border border-[#E0D8CB]"
                  }`}
                >
                  <span>{cat.shortName}</span>
                  <span
                    className={`text-[10px] font-mono px-1.5 py-0.2 rounded-full ${
                      activeCategory === cat.id
                        ? "bg-white/20 text-white"
                        : "bg-stone-100 text-stone-500"
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* View Mode 1: Organized Category Sections (when "All" is active) */}
        {activeCategory === "all" ? (
          <div className="space-y-16 sm:space-y-20">
            {categoryGroups.map((group) => (
              <section key={group.meta.id} className="space-y-5">
                {/* Category Section Header */}
                <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 pb-3 border-b border-[#E8E2D5]">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-mono uppercase tracking-widest text-[#7A6242] font-semibold">
                        CATEGORY • {group.meta.id.toUpperCase()}
                      </span>
                      <span className="text-[10px] bg-[#EAE5D9] text-[#1A1815] font-mono px-2 py-0.5 rounded-full font-semibold">
                        {group.products.length} {group.products.length === 1 ? "Artifact" : "Artifacts"}
                      </span>
                    </div>
                    <h2 className="font-serif text-2xl sm:text-3xl font-normal text-[#1A1815] mt-1">
                      {group.meta.name}
                    </h2>
                    <p className="text-xs sm:text-sm text-stone-600 mt-0.5 font-sans">
                      {group.meta.tagline}
                    </p>
                  </div>

                  <button
                    onClick={() => handleCategorySelect(group.meta.id)}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-[#7A6242] hover:text-[#1A1815] uppercase tracking-wider transition-colors self-start sm:self-auto cursor-pointer"
                  >
                    <span>View All {group.meta.shortName}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

                {/* Category Product Grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-5">
                  {group.products.map((prod) => (
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
              </section>
            ))}
          </div>
        ) : activeCategory === "tulsi" ? (
          /* View Mode 2: Dedicated Client Tulsi Collection Experience (T01 - T32) */
          <TulsiCategoryView
            products={singleCategoryProducts}
            isInWishlist={isInWishlist}
            onToggleWishlist={handleToggleWishlist}
            onAddToCart={handleAddToCart}
            addedId={addedId}
          />
        ) : (
          /* View Mode 3: Focused Single Category View for Other Categories */
          <div className="space-y-8">
            {/* Curated Editorial Info Banner for Active Category */}
            {activeCategoryMeta && (
              <div className="p-6 sm:p-8 rounded-2xl bg-white border border-[#E8E2D5] shadow-xs space-y-2">
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#7A6242] font-semibold">
                    {activeCategoryMeta.badge}
                  </span>
                  <span className="text-stone-300">•</span>
                  <span className="text-xs text-stone-500 font-mono">
                    {singleCategoryProducts.length} Dedicated Items
                  </span>
                </div>
                <h2 className="font-serif text-xl sm:text-2xl font-normal text-[#1A1815]">
                  {activeCategoryMeta.name}
                </h2>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed max-w-3xl font-sans">
                  {activeCategoryMeta.description}
                </p>
              </div>
            )}

            {/* Product Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-5">
              {singleCategoryProducts.map((prod, idx) => (
                <ProductCardItem
                  key={prod.id}
                  prod={prod}
                  isSaved={isInWishlist(prod.id)}
                  onToggleWishlist={() => handleToggleWishlist(prod)}
                  onAddToCart={(e) => handleAddToCart(e, prod)}
                  isAdded={addedId === prod.id}
                  priority={idx < 4}
                />
              ))}
            </div>
          </div>
        )}
      </main>

      {/* Floating Wishlist Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-20 sm:bottom-8 left-1/2 -translate-x-1/2 z-50 flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-[#1A1815] text-[#FAF8F5] text-xs font-medium shadow-2xl border border-[#3E3832] transition-all duration-300">
          <Bookmark className="w-4 h-4 fill-[#C5A880] text-[#C5A880]" />
          <span>{toastMessage}</span>
          <Link
            href="/wishlist"
            className="ml-1 underline font-semibold text-[#C5A880] hover:text-white"
          >
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
      <Suspense
        fallback={
          <div className="min-h-screen flex items-center justify-center bg-[#F9F8F5] text-stone-600 font-serif">
            Loading Sacred Collections...
          </div>
        }
      >
        <ProductsCatalog />
      </Suspense>
    </CartProvider>
  );
}
