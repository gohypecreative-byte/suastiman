"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CartDrawer } from "@/components/cart/CartDrawer";
import { CartProvider } from "@/context/CartContext";
import {
  BookOpen,
  Calendar,
  Clock,
  ArrowRight,
  ArrowLeft,
  Search,
  Share2,
  CheckCircle2,
  X,
  Compass,
} from "lucide-react";

export interface Article {
  id: string;
  title: string;
  category: "rudraksha" | "tulsi" | "gemstones" | "rituals";
  categoryLabel: string;
  subtitle: string;
  readTime: string;
  date: string;
  author: string;
  image: string;
  reference: string;
  excerpt: string;
  fullContent: string[];
}

const ARTICLES: Article[] = [
  {
    id: "rudraksha-dielectric-capacitance",
    title: "Why Rudraksha is an Endocarp, Not Wood: The Bio-Electric Capacitance of Elaeocarpus",
    category: "rudraksha",
    categoryLabel: "Rudraksha Science",
    subtitle: "High-altitude Himalayan seeds exhibit natural dielectric stabilization",
    readTime: "6 min read",
    date: "October 02, 2026",
    author: "Botanical Research Circle, Svastimān",
    image: "/images/origin/know_rudraksha_anatomy.jpg",
    reference: "Shiva Purana (Vidyeshvara Samhita 25.14)",
    excerpt:
      "Formed with internal cellular locules, genuine Elaeocarpus ganitrus seeds possess stabilizing dielectric capacitance when held against pulse points. Learn why ancient seers forbade boiling or chemical varnishing.",
    fullContent: [
      "Botanically, the sacred Rudraksha bead is not tree wood or a synthetic bead—it is the stone-like endocarp (pit) of the fruit of the Elaeocarpus ganitrus tree, predominantly wild-harvested at 2,000 to 3,000 meters in eastern Nepal.",
      "Under high-resolution micro-CT radiography, the internal anatomy of an authentic Rudraksha reveals discrete chambers called locules. These chambers hold microscopic air pockets and mineralized cellulose walls that confer natural dielectric capacitance—the capacity to store and modulate minute electromagnetic charges.",
      "When worn resting on the human skin near the carotid pulse or sternum, this natural electrical impedance exerts a stabilizing resonance. The Shiva Purana strictly forbids chemical lacquering or boiling with synthetic dyes, as artificial sealants clog the microscopic pores through which the seed exchanges natural body heat and natural oils.",
      "At Svastimān, every wild seed is consecrated only with pure cold-pressed Himalayan sesame and sandalwood oils, preserving the living cellular respiration of the seed untouched.",
    ],
  },
  {
    id: "vrindavan-tulsi-heartwood-curing",
    title: "From Temple Grove to Consecrated Mala: The Natural Curing of Vrindavan Tulsi",
    category: "tulsi",
    categoryLabel: "Tulsi & Vrindavan",
    subtitle: "Why green branches must never be cut and how holy basil wood naturally petrifies",
    readTime: "5 min read",
    date: "September 24, 2026",
    author: "Vrindavan Parikrama Heritage Guild",
    image: "/images/origin/know_tulsi_wood.jpg",
    reference: "Padma Purana (Uttara Khanda 24.3)",
    excerpt:
      "Aged Tulsi heartwood is dense in natural phenolic eugenol compounds. Friction against skin warmth gently releases micro-aromatic herbal volatiles that cool sensory restlessness without perfumes.",
    fullContent: [
      "In the sacred forests and traditional temple groves of Vrindavan, the Tulsi plant (Ocimum sanctum) is worshipped as the living manifestation of spiritual devotion. Traditional scriptures strictly prohibit cutting living green Tulsi branches for commercial craft.",
      "Svastimān malas are crafted exclusively from naturally fallen mature heartwood (Shushkha Tulsi Kathha). Once collected by generational ashram caretakers, the fallen branches are preserved in traditional terracotta grain urns for six to twelve months.",
      "This natural slow-curing allows natural moisture to evaporate without inducing brittle thermal fractures. As moisture leaves, the natural therapeutic eugenol and phenolic compounds concentrate in the core of the wood.",
      "When turned by hand on low-RPM water-lubricated lathes, each bead retains its subtle, comforting herbal warmth that deepens with regular skin contact over decades of daily practice.",
    ],
  },
  {
    id: "cosmic-mathematics-108",
    title: "The Cosmic Geometry of 108: Astronomy, Heart Nadis & The Science of Japa",
    category: "rituals",
    categoryLabel: "Vedic Rituals & Japa",
    subtitle: "Why Vedic malas are counted in exact multiples of 108 beads",
    readTime: "7 min read",
    date: "September 15, 2026",
    author: "Vedic Astronomical Society",
    image: "/images/origin/stage9_svastiman.jpg",
    reference: "Surya Siddhanta & Hatha Yoga Pradipika",
    excerpt:
      "The solar distance from Earth equals approximately 108 times the Sun's diameter. In human subtle physiology, 108 energetic nadis converge at the heart chakra during rhythmic tactile japa.",
    fullContent: [
      "Have you ever wondered why ancient yogis and rishis established 108 as the foundational metric of a sacred mala? It is neither an arbitrary superstition nor a lucky coincidence—it is profound cosmic geometry.",
      "In Vedic astronomy (documented in the Surya Siddhanta), the average distance between the Earth and the Sun is precisely 108 times the Sun’s diameter. Similarly, the distance between the Earth and the Moon is approximately 108 times the Moon’s diameter.",
      "Internally, subtle human yogic physiology mirrors this cosmic arrangement. There are 108 primary energetic nadis (pranic energy pathways) that converge at the Anahata (Heart) chakra. During japa meditation, moving from bead to bead aligns breath, pulse, and mental focus with these internal nadis.",
      "The 109th bead—the Guru or Meru bead—anchors the cycle, reminding the practitioner never to cross over the Meru, but to reverse direction, turning inward in humble contemplation.",
    ],
  },
  {
    id: "untreated-gemstone-matrix",
    title: "Inclusions are Not Flaws: Identifying Unheated Tectonic Minerals vs Dyed Glass",
    category: "gemstones",
    categoryLabel: "Gemstone Lapidary",
    subtitle: "Distinguishing millions of years of earth pressure from commercial synthetic paste",
    readTime: "8 min read",
    date: "August 28, 2026",
    author: "Jaipur Lapidary Master Craftsmen",
    image: "/images/origin/brand_macro_detail.jpg",
    reference: "Ratnapariksha by Sage Buddhabhatta",
    excerpt:
      "Real earth stones contain microscopic pyrite veins, mineral rutile needles, and crystal growth planes formed over millennia under tectonic compression. Real minerals are immediately cold to the touch.",
    fullContent: [
      "The modern gemstone market is flooded with leaded crystal glass, acid-bleached calcite, and chemically dyed plastics masquerading as Lapis Lazuli, Red Jasper, and Black Tourmaline.",
      "In genuine gemological tradition (as laid down in the classical Ratnapariksha), natural inclusions are the fingerprint of nature. A real mineral took between 10 million and 2 billion years of heat, volcanic pressure, and mineral migration to crystallize.",
      "When inspecting authentic Lapis Lazuli from metamorphic veins, one will always observe irregular, glittering brass-gold specks of natural pyrite (fool's gold) and soft white streaks of calcite matrix. These irregularities are proof that the stone came from the deep earth.",
      "At Svastimān, we completely reject glass filling, irradiation, thermal diffusion, and chemical color enhancement. What touches your wrist or chest is the honest, unadulterated mineral energy of the planet.",
    ],
  },
  {
    id: "glacier-water-consecration",
    title: "The Taplejung River Cleansing: The Nine-Fold Purification of Sacred Malas",
    category: "rituals",
    categoryLabel: "Vedic Rituals & Japa",
    subtitle: "Why pure spring water and cold-pressed oils supersede chemical polishes",
    readTime: "5 min read",
    date: "August 10, 2026",
    author: "Taplejung Highland Artisan Collective",
    image: "/images/origin/rudraksha_hand_clean.jpg",
    reference: "Vedic Samhitas & Traditional Shaucha Vidhi",
    excerpt:
      "Craftsmen in Taplejung never wash sacred seeds with modern synthetic detergents. Discover the traditional riverbed wash using wild brushwood and Himalayan spring water.",
    fullContent: [
      "Immediately following harvest in late autumn, the raw Rudraksha fruit must be de-pulped. In industrial setups, toxic chemical bleaching agents are frequently dumped on the seeds to dissolve fruit flesh in hours, permanently destroying seed viability.",
      "In traditional communities, the freshly gathered fruit is soaked in clay vats with gentle mountain river runoff. Generational craftsmen then manually brush each seed using natural coconut coir bristles under running stream water.",
      "This process requires days of patient human labor. It leaves the natural woody ribs (mukhis) intact, clean, and strong without weakening the core bridge that holds the sacred cord.",
      "The final conditioning involves warm cold-pressed sesame oil infused with raw camphor and sandalwood paste, sealing the seed against humidity while allowing its natural tactile fragrance to flourish.",
    ],
  },
];

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [readingArticle, setReadingArticle] = useState<Article | null>(null);

  const filteredArticles = ARTICLES.filter((art) => {
    const matchesCat = selectedCategory === "all" || art.category === selectedCategory;
    const matchesQuery =
      art.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      art.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      art.categoryLabel.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesQuery;
  });

  const featuredArticle = ARTICLES[0];

  return (
    <CartProvider>
      <div className="min-h-screen flex flex-col bg-[#F9F8F5] text-[#111111]">
        <Navbar />

        <main className="flex-1 pt-6 sm:pt-8 pb-24 px-4 sm:px-8 lg:px-12 max-w-7xl mx-auto w-full">
          {/* Category Filter Pills & Search */}
          <div className="border-b border-[#E8E2D5] pb-6 mb-10">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
                {[
                  { id: "all", label: "All Chronicles" },
                  { id: "rudraksha", label: "Rudraksha Science" },
                  { id: "tulsi", label: "Tulsi & Vrindavan" },
                  { id: "gemstones", label: "Gemstone Lapidary" },
                  { id: "rituals", label: "Vedic Rituals & Japa" },
                ].map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`px-4 py-2 rounded-full text-xs font-medium uppercase tracking-wider transition-all duration-300 cursor-pointer whitespace-nowrap ${
                      selectedCategory === cat.id
                        ? "bg-[#1A1815] text-[#FAF8F5] shadow-md border border-[#1A1815]"
                        : "bg-[#EFECE6]/80 text-stone-700 hover:text-black hover:bg-white border border-[#E0D8CB]"
                    }`}
                  >
                    {cat.label}
                  </button>
                ))}
              </div>

              {/* Search Box */}
              <div className="relative min-w-[260px] self-start md:self-auto">
                <Search className="w-4 h-4 text-stone-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-9 pr-4 py-2 rounded-full bg-white border border-[#DCD6C7] text-xs text-[#111] placeholder:text-stone-400 focus:outline-none focus:border-[#1A1815]"
                />
              </div>
            </div>
          </div>

          {/* Featured Hero Article Spotlight (shown when not searching) */}
          {searchQuery === "" && selectedCategory === "all" && (
            <div className="mb-14 bg-white rounded-3xl overflow-hidden border border-[#E8E2D5] shadow-lg hover:shadow-xl transition-all duration-500 grid grid-cols-1 lg:grid-cols-12">
              <div className="relative lg:col-span-7 aspect-[16/10] lg:aspect-auto min-h-[300px] lg:min-h-[440px] bg-stone-100 overflow-hidden">
                <Image
                  src={featuredArticle.image}
                  alt={featuredArticle.title}
                  fill
                  priority
                  className="object-cover object-center hover:scale-105 transition-transform duration-700"
                />
                <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-black/70 backdrop-blur-md text-[10px] font-mono text-[#DFCAAB] uppercase tracking-widest border border-white/10">
                  Featured Chronicle
                </span>
              </div>

              <div className="lg:col-span-5 p-6 sm:p-9 md:p-10 flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-xs text-[#7A6242] font-mono">
                    <span className="uppercase tracking-widest">{featuredArticle.categoryLabel}</span>
                    <span>&bull;</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" /> {featuredArticle.readTime}
                    </span>
                  </div>

                  <h2 className="font-serif text-2xl sm:text-3xl text-[#1A1815] leading-snug">
                    {featuredArticle.title}
                  </h2>

                  <p className="text-stone-600 text-xs sm:text-sm font-light leading-relaxed line-clamp-3">
                    {featuredArticle.excerpt}
                  </p>

                  <div className="pt-2 text-[11px] font-serif italic text-stone-500 border-l-2 border-[#C5A880] pl-3">
                    Ref: {featuredArticle.reference}
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-stone-100 flex items-center justify-between">
                  <span className="text-xs text-stone-400 font-mono">{featuredArticle.date}</span>
                  <button
                    onClick={() => setReadingArticle(featuredArticle)}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#1A1815] hover:bg-[#C5A880] text-white transition-colors duration-300 group cursor-pointer"
                  >
                    <span>Read Chronicle</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Articles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArticles.map((art) => (
              <article
                key={art.id}
                className="bg-white rounded-2xl overflow-hidden border border-[#E8E2D5] shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col group"
              >
                {/* Article Card Image */}
                <div
                  onClick={() => setReadingArticle(art)}
                  className="relative aspect-[16/10] bg-stone-100 overflow-hidden cursor-pointer"
                >
                  <Image
                    src={art.image}
                    alt={art.title}
                    fill
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md text-[10px] font-mono text-[#DFCAAB] uppercase tracking-wider border border-white/10">
                    {art.categoryLabel}
                  </div>
                </div>

                {/* Article Info */}
                <div className="p-6 flex flex-col flex-1 justify-between">
                  <div className="space-y-2.5">
                    <div className="flex items-center gap-2 text-[11px] text-stone-400 font-mono">
                      <span>{art.date}</span>
                      <span>&bull;</span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" /> {art.readTime}
                      </span>
                    </div>

                    <h3
                      onClick={() => setReadingArticle(art)}
                      className="font-serif text-xl text-[#1A1815] group-hover:text-[#7A6242] transition-colors leading-snug line-clamp-2 cursor-pointer"
                    >
                      {art.title}
                    </h3>

                    <p className="text-xs text-stone-600 font-light leading-relaxed line-clamp-3">
                      {art.excerpt}
                    </p>
                  </div>

                  <div className="pt-4 mt-4 border-t border-stone-100 flex items-center justify-between">
                    <span className="text-[11px] text-stone-400 font-mono italic truncate max-w-[170px]">
                      {art.author}
                    </span>
                    <button
                      onClick={() => setReadingArticle(art)}
                      className="text-xs font-semibold text-[#1A1815] hover:text-[#C5A880] inline-flex items-center gap-1 group-hover:translate-x-1 transition-all cursor-pointer"
                    >
                      <span>Read More</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Empty State */}
          {filteredArticles.length === 0 && (
            <div className="text-center py-16 bg-white rounded-2xl border border-[#E8E2D5]">
              <BookOpen className="w-10 h-10 text-stone-300 mx-auto mb-3" />
              <h3 className="font-serif text-xl text-stone-800 mb-1">No Chronicles Found</h3>
              <p className="text-xs text-stone-500 mb-4">
                We could not find any article matching &ldquo;{searchQuery}&rdquo;.
              </p>
              <button
                onClick={() => {
                  setSearchQuery("");
                  setSelectedCategory("all");
                }}
                className="px-5 py-2 rounded-full text-xs font-medium uppercase tracking-wider bg-[#1A1815] text-white hover:bg-[#C5A880] transition-colors"
              >
                Reset Filters
              </button>
            </div>
          )}

          {/* Knowledge Archive Newsletter Dispatch */}
          <section className="mt-20 p-8 sm:p-12 rounded-3xl bg-[#1A1815] text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(#C5A880_1px,transparent_1px)] [background-size:24px_24px] opacity-15 pointer-events-none" />
            <div className="relative z-10 max-w-2xl mx-auto text-center space-y-4">
              <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#C5A880]">
                MONTHLY BOTANICAL &amp; VEDIC DISPATCH
              </span>
              <h2 className="font-serif text-2xl sm:text-4xl font-normal leading-snug">
                Receive the Chronicles of <br />
                <span className="italic text-[#DFCAAB]">Sacred Indian Knowledge.</span>
              </h2>
              <p className="text-xs sm:text-sm text-stone-300 font-light leading-relaxed">
                Direct harvest reports from Eastern Nepal, Vrindavan temple grove updates, and scriptural translations delivered directly to your inbox. No spam. Only authentic origin stories.
              </p>

              <div className="pt-2 flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email address..."
                  className="flex-1 px-4 py-3 rounded-full bg-white/10 border border-white/20 text-xs text-white placeholder:text-stone-400 focus:outline-none focus:border-[#C5A880]"
                />
                <button
                  type="button"
                  className="px-6 py-3 rounded-full bg-[#C5A880] hover:bg-[#dfcaab] text-[#1A1815] text-xs font-semibold uppercase tracking-wider transition-colors shadow-lg cursor-pointer"
                >
                  Subscribe
                </button>
              </div>
            </div>
          </section>
        </main>

        {/* Modal: Full Article Reading Drawer */}
        {readingArticle && (
          <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 overflow-y-auto animate-in fade-in duration-200">
            <div className="bg-[#FAF8F5] text-[#111111] max-w-3xl w-full rounded-3xl overflow-hidden shadow-2xl border border-[#E8E2D5] my-8 relative flex flex-col max-h-[90vh]">
              {/* Modal Header Bar */}
              <div className="p-4 sm:p-6 border-b border-[#E8E2D5] flex items-center justify-between bg-white sticky top-0 z-10">
                <div className="flex items-center gap-2 text-xs font-mono text-[#7A6242]">
                  <span className="uppercase tracking-widest">{readingArticle.categoryLabel}</span>
                  <span>&bull;</span>
                  <span>{readingArticle.readTime}</span>
                </div>
                <button
                  onClick={() => setReadingArticle(null)}
                  className="p-2 rounded-full hover:bg-stone-100 text-stone-600 hover:text-black transition-colors cursor-pointer"
                  aria-label="Close article"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Modal Content Scroll Area */}
              <div className="p-6 sm:p-10 overflow-y-auto space-y-6">
                <div className="space-y-2">
                  <h2 className="font-serif text-2xl sm:text-4xl text-[#1A1815] leading-snug">
                    {readingArticle.title}
                  </h2>
                  <p className="text-sm sm:text-base text-[#7A6242] font-serif italic">
                    {readingArticle.subtitle}
                  </p>
                </div>

                <div className="flex items-center gap-4 text-xs text-stone-400 font-mono border-y border-stone-200 py-3">
                  <span>Author: {readingArticle.author}</span>
                  <span>&bull;</span>
                  <span>{readingArticle.date}</span>
                </div>

                <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden bg-stone-100">
                  <Image
                    src={readingArticle.image}
                    alt={readingArticle.title}
                    fill
                    className="object-cover"
                  />
                </div>

                {readingArticle.reference && (
                  <div className="p-4 rounded-xl bg-[#EFECE6] border-l-4 border-[#C5A880] text-xs sm:text-sm text-[#1A1815]">
                    <span className="font-semibold block font-mono text-[11px] text-[#7A6242] uppercase tracking-wider mb-0.5">
                      Scriptural / Scientific Reference
                    </span>
                    {readingArticle.reference}
                  </div>
                )}

                <div className="space-y-4 text-sm sm:text-base text-stone-700 leading-relaxed font-light">
                  {readingArticle.fullContent.map((para, i) => (
                    <p key={i}>{para}</p>
                  ))}
                </div>

                <div className="pt-6 border-t border-stone-200 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="text-xs text-stone-500 font-serif italic">
                    &ldquo;Honored by nature, verified by modern science.&rdquo;
                  </div>
                  <Link
                    href={`/products?category=${readingArticle.category === "rituals" ? "rudraksha" : readingArticle.category}`}
                    className="px-6 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#1A1815] hover:bg-[#C5A880] text-white transition-colors"
                  >
                    Explore Related Pieces
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}

        <Footer />
        <CartDrawer />
      </div>
    </CartProvider>
  );
}
