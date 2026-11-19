"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ExternalLink,
  BookOpen,
  ShieldCheck,
  Check,
  Plus,
  Bookmark,
  ChevronDown,
  ChevronUp,
  Sparkles,
  Info,
  Layers,
  MapPin,
  Heart,
  SlidersHorizontal,
} from "lucide-react";
import { Product } from "@/lib/products";

interface TulsiCategoryViewProps {
  products: Product[];
  isInWishlist: (id: string) => boolean;
  onToggleWishlist: (prod: Product) => void;
  onAddToCart: (e: React.MouseEvent, prod: Product) => void;
  addedId: string | null;
}

const TULSI_GUIDES = [
  {
    id: "which-round",
    title: "Which Round To Choose ?",
    subtitle: "Understanding 1-Round, 2-Round, 3-Round & Jaap Malas",
    icon: Layers,
    url: "https://docs.google.com/document/d/1Q9RPQw4m63QnWYxXm1RDCxyqJFOJvaPCf4ScgrAsR2k/edit?usp=sharing",
    points: [
      {
        heading: "1-Round (Single Kanthi Mala)",
        desc: "Fitted comfortably at the base of the throat. Ideal for general daily spiritual connection, beginners, and continuous remembrance of Shri Krishna in everyday life.",
      },
      {
        heading: "2-Round (Double Kanthi Mala)",
        desc: "Signifies two-fold devotion and surrender (Sharanagati) to Shri Radha & Shri Krishna. Worn by practicing devotees deepening their daily Vaishnava sadhana.",
      },
      {
        heading: "3-Round (Triple Kanthi Mala)",
        desc: "Represents complete tripartite surrender to Guru, Tulsi Maharani, and Radha-Krishna. Traditionally embraced by initiated devotees following dedicated vows.",
      },
      {
        heading: "Thread Lock Jaap Mala (108 Beads)",
        desc: "Specifically structured for contemplative mantra repetition (Japa) rather than neckwear. Kept in a sacred cotton gomukhi bag.",
      },
    ],
  },
  {
    id: "principles",
    title: "Principles to Wear Tulsi",
    subtitle: "Sacred scriptural tenets of humility, purity and Bhakti",
    icon: BookOpen,
    url: "https://docs.google.com/document/d/1C-u4xIRCxIEIxbs_FaH60AHXXhx60Kuq9cI10PbWvlo/edit?usp=sharing",
    points: [
      {
        heading: "Bhakti & Surrender",
        desc: "Wearing a Tulsi Mala is a sacred badge of surrender to Shri Krishna. It is not decorative jewelry; it represents walking the humble path of devotion.",
      },
      {
        heading: "Bodily & Mental Purity",
        desc: "A devotee wearing Tulsi commits to a Satvik, clean way of life, maintaining gentle thoughts, truthful speech, and compassionate conduct.",
      },
      {
        heading: "Reverence for Vrinda Devi",
        desc: "Tulsi is the personified pure devotee Vrinda Devi. The mala should be worn with genuine love, touched with clean hands, and treated with respect.",
      },
    ],
  },
  {
    id: "benefits",
    title: "Benefits of Wearing Tulsi Mala",
    subtitle: "Spiritual protection, dielectric resonance & mental peace",
    icon: Sparkles,
    url: "https://docs.google.com/document/d/1dxuju6WoOQDKZ7ton2okqOKMFGlwyA2LbmmetLYVCDE/edit?usp=sharing",
    points: [
      {
        heading: "Aura Protection & Spiritual Shield",
        desc: "Sacred texts describe Tulsi wood as an impenetrable energetic guard that dispels negative influences and anchors the wearer in divine grace.",
      },
      {
        heading: "Dielectric Throat Chakra Harmonization",
        desc: "Resting against the Vishuddha (throat) pulse center, natural holy basil stabilizes sensory restlessness and calms erratic heartbeat frequencies.",
      },
      {
        heading: "Therapeutic Natural Eugenol",
        desc: "Aged holy basil heartwood slowly releases micro-volatile herbal eugenols upon contact with skin temperature, inducing calm and mental focus.",
      },
    ],
  },
  {
    id: "care",
    title: "Tulsi Wood Care Guide",
    subtitle: "Nourishment of unvarnished botanical heartwood",
    icon: ShieldCheck,
    url: "https://docs.google.com/document/d/1XZ9xEuez8eS7wRaZt3q7qxKoCPyBYqo-gnNI98Xb-tI/edit?usp=sharing",
    points: [
      {
        heading: "100% Raw Botanical Wood",
        desc: "Our beads have zero toxic synthetic gloss or polyurethane sealants. The natural wood pores remain open and alive.",
      },
      {
        heading: "Periodic Herbal Oiling",
        desc: "Gently buff beads with a few drops of pure sandalwood oil or virgin sesame oil every few months to nourish the wood and enhance its fragrance.",
      },
      {
        heading: "Bathing Precautions",
        desc: "Avoid exposing the mala to harsh chemical shampoos, synthetic soaps, or chlorinated swimming pool water.",
      },
    ],
  },
];

export function TulsiCategoryView({
  products,
  isInWishlist,
  onToggleWishlist,
  onAddToCart,
  addedId,
}: TulsiCategoryViewProps) {
  // Filter States
  const [roundFilter, setRoundFilter] = useState<string>("ALL");
  const [shapeFilter, setShapeFilter] = useState<string>("ALL");
  const [knotFilter, setKnotFilter] = useState<string>("ALL");
  const [activeGuideId, setActiveGuideId] = useState<string | null>(null);

  // Filtered Products
  const filteredProducts = useMemo(() => {
    return products.filter((prod) => {
      // Round/Type Filter
      if (roundFilter === "PENDANTS" && prod.pendant !== "PENDANTS") return false;
      if (roundFilter === "SINGLE_PURE" && (prod.round !== "SINGLE" || prod.pendant === "PENDANTS" || prod.knot === "THREAD LOCK")) return false;
      if (roundFilter === "DOUBLE" && prod.round !== "DOUBLE") return false;
      if (roundFilter === "TRIPLE" && prod.round !== "TRIPLE") return false;
      if (roundFilter === "JAAP" && prod.knot !== "THREAD LOCK") return false;

      // Shape Filter
      if (shapeFilter !== "ALL" && prod.beadShape !== shapeFilter) return false;

      // Knot Filter
      if (knotFilter !== "ALL" && prod.knot !== knotFilter) return false;

      return true;
    });
  }, [products, roundFilter, shapeFilter, knotFilter]);

  return (
    <div className="space-y-10 sm:space-y-14 w-full">
      {/* 1. TULSI SUBCATEGORY & SHAPE FILTERS (Positioned above product grid) */}
      <div className="space-y-4 bg-white p-4 sm:p-5 rounded-2xl border border-[#E8E2D5] shadow-xs w-full">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <SlidersHorizontal className="w-4 h-4 text-[#7A6242]" />
            <span className="text-xs font-mono uppercase tracking-widest text-[#1A1815] font-bold">
              Filter Tulsi Malas ({filteredProducts.length} of {products.length})
            </span>
          </div>

          {(roundFilter !== "ALL" || shapeFilter !== "ALL" || knotFilter !== "ALL") && (
            <button
              onClick={() => {
                setRoundFilter("ALL");
                setShapeFilter("ALL");
                setKnotFilter("ALL");
              }}
              className="text-xs text-[#7A6242] hover:underline font-mono uppercase cursor-pointer self-start sm:self-auto"
            >
              Reset Filters
            </button>
          )}
        </div>

        {/* Primary Round / Type Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
          {[
            { id: "ALL", label: "All Tulsi (32)" },
            { id: "PENDANTS", label: "1-Round with Pendants (7)" },
            { id: "SINGLE_PURE", label: "1-Round Pure Kanthi (12)" },
            { id: "DOUBLE", label: "2-Round Double Kanthi (7)" },
            { id: "TRIPLE", label: "3-Round Triple Kanthi (2)" },
            { id: "JAAP", label: "108 Japa Malas (4)" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setRoundFilter(tab.id)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wider transition-all duration-200 cursor-pointer whitespace-nowrap ${
                roundFilter === tab.id
                  ? "bg-[#1A1815] text-[#FAF8F5] shadow-xs"
                  : "bg-stone-100 hover:bg-stone-200/80 text-stone-700"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Secondary Bead Shape Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pt-1 pb-1 scrollbar-none border-t border-stone-100 text-xs">
          <span className="text-[11px] font-mono uppercase text-stone-400 shrink-0 mr-1">
            Bead Shape:
          </span>
          {["ALL", "ROUND", "CYLINDRICAL", "BARREL", "OVAL", "CARVED LEAF"].map((shape) => (
            <button
              key={shape}
              onClick={() => setShapeFilter(shape)}
              className={`px-2.5 py-1 rounded-md text-[11px] font-mono tracking-wider transition-colors cursor-pointer whitespace-nowrap ${
                shapeFilter === shape
                  ? "bg-[#C5A880] text-[#122E46] font-bold"
                  : "bg-stone-50 text-stone-600 hover:bg-stone-100"
              }`}
            >
              {shape}
            </button>
          ))}

          <span className="text-[11px] font-mono uppercase text-stone-400 shrink-0 ml-3 mr-1">
            Lock Type:
          </span>
          {["ALL", "LOCK", "BEAD LOCK", "THREAD LOCK"].map((k) => (
            <button
              key={k}
              onClick={() => setKnotFilter(k)}
              className={`px-2.5 py-1 rounded-md text-[11px] font-mono tracking-wider transition-colors cursor-pointer whitespace-nowrap ${
                knotFilter === k
                  ? "bg-[#122E46] text-white font-bold"
                  : "bg-stone-50 text-stone-600 hover:bg-stone-100"
              }`}
            >
              {k}
            </button>
          ))}
        </div>
      </div>

      {/* 2. PRODUCT GRID (End-to-End Responsive Grid across the page) */}
      {filteredProducts.length === 0 ? (
        <div className="py-16 text-center bg-white rounded-2xl border border-[#E8E2D5] w-full">
          <p className="text-stone-600 font-sans text-sm">
            No Tulsi artifacts match the selected filters.
          </p>
          <button
            onClick={() => {
              setRoundFilter("ALL");
              setShapeFilter("ALL");
              setKnotFilter("ALL");
            }}
            className="mt-3 text-xs font-mono uppercase tracking-wider text-[#7A6242] font-semibold underline cursor-pointer"
          >
            Clear All Filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3.5 sm:gap-4 lg:gap-5 w-full">
          {filteredProducts.map((prod, idx) => {
            const isSaved = isInWishlist(prod.id);
            const isAdded = addedId === prod.id;

            return (
              <div
                key={prod.id}
                className="group flex flex-col bg-white rounded-xl border border-[#E8E2D5] overflow-hidden hover:border-[#C5A880] hover:shadow-lg transition-all duration-300 select-none"
              >
                {/* Image container */}
                <div className="relative aspect-square w-full overflow-hidden bg-[#FAF8F5]">
                  <Link href={prod.href} className="absolute inset-0 block">
                    <Image
                      src={prod.image}
                      alt={prod.name}
                      fill
                      priority={idx < 4}
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    />
                  </Link>

                  {/* Round & Knot pill on top right */}
                  <div className="absolute top-2.5 right-2.5 z-10 flex items-center gap-1">
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        onToggleWishlist(prod);
                      }}
                      className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white/80 backdrop-blur-md flex items-center justify-center text-stone-700 hover:text-[#1A1815] shadow-xs cursor-pointer transition-transform active:scale-95"
                      aria-label="Save to Wishlist"
                    >
                      <Bookmark
                        className={`w-4 h-4 ${
                          isSaved ? "fill-[#1A1815] text-[#1A1815]" : ""
                        }`}
                      />
                    </button>
                  </div>
                </div>

                {/* Product Info */}
                <div className="p-3 sm:p-4 flex-1 flex flex-col justify-between space-y-3">
                  <div className="space-y-1">
                    <div className="flex items-center justify-between text-[10px] font-mono text-[#7A6242]">
                      <span className="uppercase font-semibold truncate">
                        {prod.round} ROUND • {prod.knot}
                      </span>
                    </div>

                    <Link href={prod.href} className="block">
                      <h3 className="font-serif text-xs sm:text-sm font-normal text-[#1A1815] group-hover:text-[#7A6242] transition-colors line-clamp-1 leading-snug">
                        {prod.name}
                      </h3>
                    </Link>

                    {/* Associated Deities tag */}
                    {prod.associatedDeities && (
                      <p className="text-[10px] text-stone-500 font-sans truncate">
                        Deities: {prod.associatedDeities}
                      </p>
                    )}
                  </div>

                  {/* Price & Add to Cart button */}
                  <div className="pt-2 border-t border-stone-100 flex items-center justify-between gap-2">
                    <div className="flex items-baseline gap-1.5">
                      <span className="text-xs sm:text-sm font-bold text-[#1A1815]">
                        ₹{prod.price.toLocaleString("en-IN")}
                      </span>
                      {prod.originalPrice && (
                        <span className="text-[10px] text-stone-400 line-through">
                          ₹{prod.originalPrice.toLocaleString("en-IN")}
                        </span>
                      )}
                    </div>

                    <button
                      onClick={(e) => onAddToCart(e, prod)}
                      className="p-1.5 rounded-full bg-[#1A1815] hover:bg-[#7A6242] text-white transition-all cursor-pointer shrink-0 active:scale-90 shadow-xs"
                      aria-label="Add to cart"
                    >
                      {isAdded ? (
                        <Check className="w-3.5 h-3.5 text-emerald-300 stroke-[2.5]" />
                      ) : (
                        <Plus className="w-3.5 h-3.5 stroke-[2]" />
                      )}
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* 3. SACRED PROVENANCE HERO BANNER (Image 1 Box 1 - Positioned below products) */}
      <div className="relative rounded-2xl sm:rounded-3xl bg-[#FAF8F5] border border-[#E8E2D5] p-6 sm:p-10 lg:p-12 overflow-hidden shadow-xs mt-12 sm:mt-16 w-full">
        {/* Subtle Watermark Texture */}
        <div className="absolute inset-0 bg-[radial-gradient(#C5A880_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.07] pointer-events-none" />

        <div className="relative z-10 w-full space-y-6">
          {/* Eyebrow & Badges */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="bg-[#122E46] text-[#FAF8F5] text-[10px] font-mono uppercase tracking-widest px-3 py-1 rounded-sm font-bold shadow-xs">
              ORIGIN: VRINDAVAN, BRAJ
            </span>
            <span className="bg-[#C5A880]/20 text-[#7A6242] border border-[#C5A880]/40 text-[10px] font-mono uppercase tracking-widest px-3 py-1 rounded-sm font-semibold">
              100% NATURAL TULSI WOOD
            </span>
            <span className="bg-[#EAE5D9] text-[#1A1815] text-[10px] font-mono uppercase tracking-widest px-2.5 py-1 rounded-sm font-semibold">
              32 VERIFIED ARTIFACTS
            </span>
          </div>

          {/* Heading */}
          <div className="space-y-2">
            <h2 className="font-serif text-3xl sm:text-5xl font-normal text-[#1A1815] leading-[1.15] tracking-tight">
              Vrindavan Tulsi Collection
            </h2>
            <p className="text-xs sm:text-sm font-mono uppercase tracking-widest text-[#7A6242]">
              Revered as Vrinda Devi • Symbol of Devotion, Purity, Humility & Surrender
            </p>
          </div>

          {/* Exact Client Description from PDF */}
          <p className="text-sm sm:text-base leading-relaxed text-stone-700 font-sans max-w-4xl border-l-2 border-[#C5A880] pl-4 py-2 italic bg-[#F2EDE2]/40 rounded-r-lg">
            &ldquo;Revered as Vrinda Devi, Tulsi Ji holds a special place in Vaishnava tradition and is deeply cherished by devotees of Lord Krishna. Wearing a Tulsi Mala is a symbol of devotion, purity, humility and surrender. More than a sacred ornament, it serves as a gentle reminder to stay connected with Krishna and walk the path of Bhakti in everyday life.&rdquo;
          </p>

          {/* Provenance Key Attributes Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 pt-2 text-xs">
            <div className="p-4 rounded-xl bg-white border border-[#E8E2D5] space-y-1">
              <span className="text-[10px] font-mono uppercase tracking-wider text-stone-500 block">
                Source & Soil
              </span>
              <p className="font-medium text-[#1A1815] text-sm truncate">Vrindavan, Braj</p>
            </div>
            <div className="p-4 rounded-xl bg-white border border-[#E8E2D5] space-y-1">
              <span className="text-[10px] font-mono uppercase tracking-wider text-stone-500 block">
                Material Authenticity
              </span>
              <p className="font-medium text-[#1A1815] text-sm truncate">100% Natural Tulsi</p>
            </div>
            <div className="p-4 rounded-xl bg-white border border-[#E8E2D5] space-y-1">
              <span className="text-[10px] font-mono uppercase tracking-wider text-stone-500 block">
                Associated Deities
              </span>
              <p className="font-medium text-[#1A1815] text-sm truncate">Shri Krishna & Radha</p>
            </div>
            <div className="p-4 rounded-xl bg-white border border-[#E8E2D5] space-y-1">
              <span className="text-[10px] font-mono uppercase tracking-wider text-stone-500 block">
                Beads Hue
              </span>
              <p className="font-medium text-[#1A1815] text-sm truncate">Natural Beige Core</p>
            </div>
          </div>
        </div>
      </div>

      {/* 4. SACRED PRACTICE & GUIDES ACCORDION (Image 1 Box 2 - Positioned below products) */}
      <div className="rounded-2xl bg-white border border-[#E8E2D5] p-5 sm:p-8 shadow-xs space-y-6 w-full">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-[#E8E2D5]">
          <div>
            <span className="text-[10px] font-mono uppercase tracking-widest text-[#7A6242] font-semibold block">
              SACRED KNOWLEDGE & SCRIPTURAL TENETS
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-normal text-[#1A1815] mt-1">
              Which Round To Choose ? & Devotional Guides
            </h3>
          </div>
          <span className="text-xs text-stone-500 font-sans">
            Tap a guide to expand official instructions
          </span>
        </div>

        {/* 4 Guide Accordion Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {TULSI_GUIDES.map((guide) => {
            const isOpen = activeGuideId === guide.id;
            const Icon = guide.icon;

            return (
              <div
                key={guide.id}
                className={`rounded-xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? "bg-[#FAF8F5] border-[#C5A880] shadow-md"
                    : "bg-white border-[#E8E2D5] hover:border-stone-400"
                }`}
              >
                <button
                  onClick={() => setActiveGuideId(isOpen ? null : guide.id)}
                  className="w-full p-4 sm:p-4.5 text-left flex items-start justify-between gap-3 cursor-pointer"
                >
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-[#FAF8F5] border border-[#E8E2D5] flex items-center justify-center shrink-0 mt-0.5 text-[#7A6242]">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="font-serif text-base font-medium text-[#1A1815]">
                        {guide.title}
                      </h4>
                      <p className="text-xs text-stone-500 font-sans mt-0.5">
                        {guide.subtitle}
                      </p>
                    </div>
                  </div>

                  <div className="shrink-0 text-stone-400 mt-1">
                    {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-4 pb-4 pt-1 border-t border-[#E8E2D5]/70 space-y-3 animate-in fade-in-50 duration-200">
                    <div className="space-y-2 text-xs text-stone-700 font-sans">
                      {guide.points.map((pt, idx) => (
                        <div key={idx} className="p-2.5 rounded-lg bg-white border border-[#E8E2D5]/60 space-y-0.5">
                          <span className="font-semibold text-[#1A1815] block">
                            {pt.heading}
                          </span>
                          <p className="text-stone-600 leading-relaxed">{pt.desc}</p>
                        </div>
                      ))}
                    </div>

                    <a
                      href={guide.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-[11px] font-mono uppercase tracking-wider text-[#7A6242] hover:text-[#1A1815] font-semibold pt-1 transition-colors"
                    >
                      <span>Open Official Client Reference Doc</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
