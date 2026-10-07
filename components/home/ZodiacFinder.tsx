"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Compass, CheckCircle2, ShoppingBag, ArrowRight } from "lucide-react";
import { useCart } from "@/context/CartContext";

interface ZodiacData {
  sign: string;
  symbol: string;
  element: string;
  planet: string;
  dates: string;
  recommendedStone: string;
  productName: string;
  price: number;
  originalPrice: number;
  image: string;
  benefits: string[];
  description: string;
}

const zodiacs: ZodiacData[] = [
  {
    sign: "Aries",
    symbol: "♈",
    element: "Fire",
    planet: "Mars",
    dates: "Mar 21 - Apr 19",
    recommendedStone: "Red Jasper & Carnelian",
    productName: "Aries Pranic Fire & Vitality Bracelet",
    price: 1899,
    originalPrice: 2499,
    image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=600&q=80",
    benefits: ["Ignites courageous action", "Grounds hyperactive energy", "Protects physical vitality"],
    description: "Channels Martian drive while keeping your root chakra deeply anchored and shielded.",
  },
  {
    sign: "Taurus",
    symbol: "♉",
    element: "Earth",
    planet: "Venus",
    dates: "Apr 20 - May 20",
    recommendedStone: "Emerald & Green Jade",
    productName: "Taurus Abundance & Heart Serenity Mala",
    price: 2199,
    originalPrice: 2899,
    image: "https://images.unsplash.com/photo-1611591475102-4f107c164a27?auto=format&fit=crop&w=600&q=80",
    benefits: ["Attracts organic prosperity", "Soothes heart stress", "Deepens sensory mindfulness"],
    description: "Honors Venusian beauty and invites continuous material and spiritual abundance.",
  },
  {
    sign: "Gemini",
    symbol: "♊",
    element: "Air",
    planet: "Mercury",
    dates: "May 21 - Jun 20",
    recommendedStone: "Blue Lace Agate & Aquamarine",
    productName: "Gemini Throat Chakra Clarity Bracelet",
    price: 1799,
    originalPrice: 2399,
    image: "https://images.unsplash.com/photo-1600003014755-ba31aa59c4b6?auto=format&fit=crop&w=600&q=80",
    benefits: ["Clears communicative blocks", "Calms restless thoughts", "Enhances articulate expression"],
    description: "Stabilizes mental whirlwind into crystal-clear articulation and purposeful focus.",
  },
  {
    sign: "Cancer",
    symbol: "♋",
    element: "Water",
    planet: "Moon",
    dates: "Jun 21 - Jul 22",
    recommendedStone: "Rainbow Moonstone & Selenite",
    productName: "Cancer Lunar Aura Protection Talisman",
    price: 1999,
    originalPrice: 2699,
    image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=600&q=80",
    benefits: ["Shields empathic sensitivity", "Balances mood rhythms", "Deepens sacred intuition"],
    description: "Infused with cooling lunar energy to protect sensitive empaths and home sanctuaries.",
  },
  {
    sign: "Leo",
    symbol: "♌",
    element: "Fire",
    planet: "Sun",
    dates: "Jul 23 - Aug 22",
    recommendedStone: "Golden Tiger Eye & Sunstone",
    productName: "Leo Sovereign Radiance & Solar Bracelet",
    price: 1999,
    originalPrice: 2599,
    image: "https://images.unsplash.com/photo-1596944924616-7b38e7cfac36?auto=format&fit=crop&w=600&q=80",
    benefits: ["Amplifies magnetic confidence", "Draws respect and leadership", "Protects heart energy"],
    description: "Direct resonance with solar power, infusing dignity, generosity, and authentic charisma.",
  },
  {
    sign: "Virgo",
    symbol: "♍",
    element: "Earth",
    planet: "Mercury",
    dates: "Aug 23 - Sep 22",
    recommendedStone: "Amazonite & Moss Agate",
    productName: "Virgo Sacred Order & Calm Mala",
    price: 1899,
    originalPrice: 2499,
    image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=600&q=80",
    benefits: ["Releases perfectionist tension", "Supports nervous system", "Connects with plant wisdom"],
    description: "Brings serenity to analytical minds, grounding spiritual insights into practical harmony.",
  },
  {
    sign: "Libra",
    symbol: "♎",
    element: "Air",
    planet: "Venus",
    dates: "Sep 23 - Oct 22",
    recommendedStone: "Rose Quartz & Lepidolite",
    productName: "Libra Divine Harmony & Grace Bracelet",
    price: 1899,
    originalPrice: 2499,
    image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=600&q=80",
    benefits: ["Restores inner equilibrium", "Attracts loving partnerships", "Resolves decision fatigue"],
    description: "Aligns aesthetic elegance with peaceful interpersonal connection and grace.",
  },
  {
    sign: "Scorpio",
    symbol: "♏",
    element: "Water",
    planet: "Mars & Pluto",
    dates: "Oct 23 - Nov 21",
    recommendedStone: "Black Obsidian & Garnet",
    productName: "Scorpio Alchemy & Auric Shield Bracelet",
    price: 2099,
    originalPrice: 2799,
    image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=600&q=80",
    benefits: ["Transmutes dark energies", "Unlocks psychic perception", "Unwavering protection"],
    description: "Deep occult protection and transformative strength for the profound spiritual seeker.",
  },
  {
    sign: "Sagittarius",
    symbol: "♐",
    element: "Fire",
    planet: "Jupiter",
    dates: "Nov 22 - Dec 21",
    recommendedStone: "Lapis Lazuli & Sodalite",
    productName: "Sagittarius Cosmic Truth & Expansion Mala",
    price: 2299,
    originalPrice: 2999,
    image: "https://images.unsplash.com/photo-1600003014755-ba31aa59c4b6?auto=format&fit=crop&w=600&q=80",
    benefits: ["Expands philosophical wisdom", "Guides world travelers", "Attracts auspicious fortune"],
    description: "Jupiterian talisman inspiring noble truth, higher education, and expansive voyages.",
  },
  {
    sign: "Capricorn",
    symbol: "♑",
    element: "Earth",
    planet: "Saturn",
    dates: "Dec 22 - Jan 19",
    recommendedStone: "Black Tourmaline & Onyx",
    productName: "Capricorn Saturnian Mastery Bracelet",
    price: 1999,
    originalPrice: 2699,
    image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=600&q=80",
    benefits: ["Rewards persistent effort", "Heavy psychic protection", "Anchor for long-term legacy"],
    description: "Honors Saturnian discipline, warding off obstacles while building enduring legacy.",
  },
  {
    sign: "Aquarius",
    symbol: "♒",
    element: "Air",
    planet: "Saturn & Uranus",
    dates: "Jan 20 - Feb 18",
    recommendedStone: "Amethyst & Labradorite",
    productName: "Aquarius Visionary Intuition Bracelet",
    price: 1899,
    originalPrice: 2499,
    image: "https://images.unsplash.com/photo-1600003014755-ba31aa59c4b6?auto=format&fit=crop&w=600&q=80",
    benefits: ["Sparks visionary innovation", "Shields aura from tech fatigue", "Awakens crown chakra"],
    description: "Empowers progressive free-thinkers with high frequency clarity and spiritual illumination.",
  },
  {
    sign: "Pisces",
    symbol: "♓",
    element: "Water",
    planet: "Jupiter & Neptune",
    dates: "Feb 19 - Mar 20",
    recommendedStone: "Aquamarine & Fluorite",
    productName: "Pisces Mystical Ocean Serenity Mala",
    price: 2199,
    originalPrice: 2899,
    image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=600&q=80",
    benefits: ["Deepens dream connection", "Purifies emotional sponge effect", "Spiritual tranquility"],
    description: "Flowing with celestial tides to soothe the empathic soul and awaken artistic genius.",
  },
];

export function ZodiacFinder() {
  const [selectedSign, setSelectedSign] = useState<ZodiacData>(zodiacs[4]); // default Leo
  const { addToCart } = useCart();

  const handleAdd = () => {
    addToCart({
      id: `zodiac-${selectedSign.sign.toLowerCase()}`,
      name: selectedSign.productName,
      price: selectedSign.price,
      originalPrice: selectedSign.originalPrice,
      image: selectedSign.image,
      intention: `${selectedSign.sign} Zodiac Alignment`,
      crystal: selectedSign.recommendedStone,
    });
  };

  return (
    <section id="energy-finder" className="py-20 bg-[#132F47] text-[#ECEADE] relative overflow-hidden">
      <div className="absolute inset-0 bg-celestial-pattern opacity-20 pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#ECEADE]/10 border border-[#C5A880]/30 text-xs uppercase tracking-widest text-[#C5A880]">
            <Compass className="w-3.5 h-3.5" />
            <span>Astrological Energy Mapping</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#ECEADE]">
            Reveal Your Zodiac Energy Match
          </h2>
          <p className="text-sm sm:text-base text-[#ECEADE]/75 font-light">
            Select your sun or rising sign to discover the Vedic consecrated stones aligned with
            your planetary blueprint.
          </p>
        </div>

        {/* Zodiac Selector Horizontal Pill Scroll */}
        <div className="flex items-center justify-start lg:justify-center gap-2 overflow-x-auto pb-4 pt-1 scrollbar-none no-scrollbar">
          {zodiacs.map((item) => {
            const isSelected = selectedSign.sign === item.sign;
            return (
              <button
                key={item.sign}
                onClick={() => setSelectedSign(item)}
                className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 shrink-0 flex items-center gap-2 border ${
                  isSelected
                    ? "bg-[#C5A880] text-[#111111] border-[#C5A880] shadow-lg scale-105 font-bold"
                    : "bg-[#1D4263]/50 text-[#ECEADE] border-[#ECEADE]/20 hover:border-[#C5A880]/50 hover:bg-[#1D4263]"
                }`}
              >
                <span className="text-base">{item.symbol}</span>
                <span>{item.sign}</span>
              </button>
            );
          })}
        </div>

        {/* Selected Zodiac Feature Card */}
        <div className="mt-10 max-w-5xl mx-auto bg-[#0A1B2A]/90 border border-[#C5A880]/40 rounded-3xl p-6 sm:p-10 backdrop-blur-md shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Image */}
            <div className="lg:col-span-5 relative">
              <div className="relative aspect-square w-full rounded-2xl overflow-hidden border border-[#C5A880]/30 bg-[#132F47]">
                <Image
                  src={selectedSign.image}
                  alt={selectedSign.productName}
                  fill
                  className="object-cover"
                />
                <div className="absolute top-3 left-3 bg-[#0A1B2A]/80 backdrop-blur-xs px-3 py-1 rounded-full text-xs font-serif text-[#C5A880] border border-[#C5A880]/40">
                  {selectedSign.symbol} {selectedSign.sign} &bull; {selectedSign.dates}
                </div>
              </div>
            </div>

            {/* Right Astrological Breakdown */}
            <div className="lg:col-span-7 space-y-5">
              <div className="flex flex-wrap gap-2 text-xs">
                <span className="px-3 py-1 rounded-md bg-[#132F47] border border-[#C5A880]/30 text-[#C5A880]">
                  Element: <strong>{selectedSign.element}</strong>
                </span>
                <span className="px-3 py-1 rounded-md bg-[#132F47] border border-[#C5A880]/30 text-[#C5A880]">
                  Ruling Planet: <strong>{selectedSign.planet}</strong>
                </span>
                <span className="px-3 py-1 rounded-md bg-[#132F47] border border-[#C5A880]/30 text-[#ECEADE]">
                  Sacred Stone: <strong>{selectedSign.recommendedStone}</strong>
                </span>
              </div>

              <div>
                <h3 className="font-serif text-2xl sm:text-3xl text-white font-medium">
                  {selectedSign.productName}
                </h3>
                <p className="text-sm text-[#ECEADE]/80 mt-2 font-light leading-relaxed">
                  {selectedSign.description}
                </p>
              </div>

              {/* Benefits list */}
              <div className="space-y-2 pt-2 border-t border-[#ECEADE]/10">
                <p className="text-xs uppercase tracking-wider text-[#C5A880] font-semibold">
                  Spiritual &amp; Energetic Benefits:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {selectedSign.benefits.map((b, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-[#ECEADE]/90">
                      <CheckCircle2 className="w-4 h-4 text-[#C5A880] shrink-0" />
                      <span>{b}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Price & Add to Cart */}
              <div className="pt-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-t border-[#ECEADE]/10">
                <div>
                  <div className="flex items-baseline gap-2">
                    <span className="font-serif text-3xl font-bold text-[#ECEADE]">
                      ₹{selectedSign.price}
                    </span>
                    <span className="text-sm text-[#ECEADE]/50 line-through">
                      ₹{selectedSign.originalPrice}
                    </span>
                  </div>
                  <span className="text-[11px] text-[#C5A880]">
                    Includes Authenticity Certificate &amp; Energization Ritual
                  </span>
                </div>

                <button
                  onClick={handleAdd}
                  className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-[#C5A880] hover:bg-[#D4AF37] text-[#111111] font-semibold text-sm transition-all shadow-lg flex items-center justify-center gap-2 active:scale-95"
                >
                  <ShoppingBag className="w-4 h-4 text-[#111111]" />
                  <span>Claim {selectedSign.sign} Talisman</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
