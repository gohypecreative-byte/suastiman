"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Star, ShoppingBag, ShieldCheck, Truck, ChevronDown, Heart, Info, ArrowLeft } from "lucide-react";
import { useCart } from "@/context/CartContext";

// In a real app, this would be fetched from a database
const mockProducts = [
  {
    id: "p1",
    name: "Divine 108 Rudraksha & Lapis Lazuli Meditation Mala",
    category: "malas",
    crystal: "Natural 5-Mukhi Rudraksha & Grade-A Lapis",
    intention: "Deep Dhyana & Intuitive Awakening",
    price: 2499,
    originalPrice: 3299,
    rating: 4.9,
    reviewCount: 142,
    image: "https://images.unsplash.com/photo-1600003014755-ba31aa59c4b6?auto=format&fit=crop&w=600&q=80",
    badge: "Most Auspicious",
    description: "Experience profound tranquility and spiritual awakening with this mastercrafted 108-bead meditation mala. Each bead is hand-knotted by artisans in Rishikesh, stringing authentic 5-Mukhi Himalayan Rudraksha with premium Grade-A Lapis Lazuli from Afghanistan. This sacred combination balances the Third Eye chakra, enhancing intuition while keeping you deeply grounded.",
    details: [
      "Bead Size: 8mm",
      "Length: Approximately 38 inches (hangs down to solar plexus)",
      "Material: 108 Beads + 1 Guru Bead",
      "Authenticity: Lab Certified Natural Stones & Rudraksha"
    ]
  },
  {
    id: "p2",
    name: "Golden Pyrite & Citrine Abundance Magnet Bracelet",
    category: "bracelets",
    crystal: "Raw Peruvian Pyrite & Natural Sun Citrine",
    intention: "Wealth, Success & Solar Radiance",
    price: 1999,
    originalPrice: 2599,
    rating: 4.8,
    reviewCount: 98,
    image: "https://images.unsplash.com/photo-1596944924616-7b38e7cfac36?auto=format&fit=crop&w=600&q=80",
    badge: "Bestseller",
    description: "Unleash your manifestation power. This vibrant abundance bracelet combines the raw, unyielding magnetism of Peruvian Pyrite with the sunny, wealth-attracting energy of natural Citrine. Consecrated on Thursday (Brihaspati Var) to amplify Jupiter's blessings of expansion and prosperity.",
    details: [
      "Bead Size: 8mm & 10mm mixed",
      "Size: Stretchable (Fits 6.5 to 7.5 inch wrists)",
      "Chakra Focus: Solar Plexus",
      "Energization: Vedic Lakshmi-Kubera Mantra Infused"
    ]
  }
];

export function ProductDetailsClient({ id }: { id: string }) {
  const { addToCart } = useCart();
  const [activeAccordion, setActiveAccordion] = useState<string | null>("description");
  const [quantity, setQuantity] = useState(1);

  // Find product or use fallback
  const product = mockProducts.find((p) => p.id === id) || mockProducts[0];

  const handleAddToCart = () => {
    // Add multiple quantities by calling addToCart in a loop or adjusting context
    // Our context currently adds 1 at a time if new, or increments. 
    // For simplicity, we'll just add it once, but ideally context handles bulk add.
    for (let i = 0; i < quantity; i++) {
      addToCart({
        id: product.id,
        name: product.name,
        price: product.price,
        originalPrice: product.originalPrice,
        image: product.image,
        intention: product.intention,
        crystal: product.crystal,
      });
    }
  };

  const toggleAccordion = (section: string) => {
    setActiveAccordion(activeAccordion === section ? null : section);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Breadcrumb */}
      <div className="mb-8">
        <Link href="/" className="inline-flex items-center text-xs font-medium text-stone-500 hover:text-[#C5A880] transition-colors">
          <ArrowLeft className="w-3.5 h-3.5 mr-1" /> Back to Home
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
        {/* Left: Image Gallery */}
        <div className="space-y-4">
          <div className="relative aspect-square w-full rounded-2xl overflow-hidden bg-[#ECEADE] border border-[#E2DEC9]">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover"
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            {product.badge && (
              <div className="absolute top-4 left-4 bg-[#132F47] text-[#ECEADE] text-[10px] font-semibold tracking-wider uppercase px-3 py-1.5 rounded border border-[#C5A880]/40 shadow-md">
                {product.badge}
              </div>
            )}
          </div>
          {/* Thumbnails (Mocked) */}
          <div className="grid grid-cols-4 gap-4">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className={`relative aspect-square rounded-xl overflow-hidden cursor-pointer border-2 transition-colors ${i === 1 ? 'border-[#C5A880]' : 'border-transparent hover:border-[#E2DEC9]'}`}>
                <Image
                  src={product.image}
                  alt={`${product.name} view ${i}`}
                  fill
                  className="object-cover opacity-80 hover:opacity-100 transition-opacity"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Right: Product Details */}
        <div className="flex flex-col pt-2 lg:pt-6">
          <div className="mb-2">
            <span className="text-[11px] font-semibold tracking-widest uppercase text-[#C5A880]">
              {product.category} &bull; {product.crystal}
            </span>
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#132F47] font-normal leading-tight mb-4">
            {product.name}
          </h1>

          <div className="flex items-center gap-4 mb-6">
            <div className="flex items-center gap-1 text-[#C5A880]">
              <Star className="w-4 h-4 fill-current" />
              <Star className="w-4 h-4 fill-current" />
              <Star className="w-4 h-4 fill-current" />
              <Star className="w-4 h-4 fill-current" />
              <Star className="w-4 h-4 fill-current" />
            </div>
            <span className="text-sm font-medium text-stone-600">{product.rating} ({product.reviewCount} Reviews)</span>
          </div>

          <div className="flex items-end gap-3 mb-8">
            <span className="font-serif text-3xl font-bold text-[#132F47]">
              ₹{product.price}
            </span>
            {product.originalPrice > product.price && (
              <span className="text-lg text-stone-400 line-through mb-0.5">
                ₹{product.originalPrice}
              </span>
            )}
            <span className="text-xs text-green-600 font-medium ml-2 mb-1 bg-green-50 px-2 py-0.5 rounded">
              Save ₹{product.originalPrice - product.price}
            </span>
          </div>

          <div className="mb-8 p-4 bg-[#132F47]/5 rounded-xl border border-[#132F47]/10 flex gap-3">
            <Info className="w-5 h-5 text-[#C5A880] shrink-0 mt-0.5" />
            <p className="text-sm text-stone-700 leading-relaxed font-light">
              <strong className="font-medium text-[#132F47]">Intention:</strong> {product.intention}. This piece has been ritually cleansed and energized by our Vedic priests before shipping.
            </p>
          </div>

          {/* Quantity & Add to Cart */}
          <div className="flex flex-col sm:flex-row gap-4 mb-10">
            <div className="flex items-center border border-[#E2DEC9] rounded-xl bg-white">
              <button 
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="px-4 py-3 text-stone-500 hover:text-[#132F47] transition-colors"
              >-</button>
              <span className="w-10 text-center font-medium text-[#132F47]">{quantity}</span>
              <button 
                onClick={() => setQuantity(quantity + 1)}
                className="px-4 py-3 text-stone-500 hover:text-[#132F47] transition-colors"
              >+</button>
            </div>
            
            <button
              onClick={handleAddToCart}
              className="flex-1 bg-[#132F47] hover:bg-[#0A1B2A] text-[#ECEADE] py-3.5 px-6 rounded-xl font-semibold shadow-lg shadow-[#132F47]/20 flex items-center justify-center gap-2 transition-all active:scale-[0.98]"
            >
              <ShoppingBag className="w-5 h-5 text-[#C5A880]" />
              Add to Sacred Bag
            </button>
            
            <button className="p-3.5 rounded-xl border border-[#E2DEC9] bg-white text-stone-400 hover:text-red-500 hover:border-red-200 hover:bg-red-50 transition-all flex items-center justify-center">
              <Heart className="w-5 h-5" />
            </button>
          </div>

          {/* Guarantees */}
          <div className="grid grid-cols-2 gap-4 mb-10">
            <div className="flex items-center gap-2 text-xs font-medium text-stone-600">
              <ShieldCheck className="w-4 h-4 text-[#C5A880]" />
              100% Authentic Crystals
            </div>
            <div className="flex items-center gap-2 text-xs font-medium text-stone-600">
              <Truck className="w-4 h-4 text-[#C5A880]" />
              Free Shipping Across India
            </div>
          </div>

          {/* Accordions */}
          <div className="border-t border-[#E2DEC9]">
            {/* Description */}
            <div className="border-b border-[#E2DEC9]">
              <button 
                onClick={() => toggleAccordion("description")}
                className="w-full py-5 flex items-center justify-between text-left focus:outline-none"
              >
                <span className="font-serif text-lg font-medium text-[#132F47]">Product Description</span>
                <ChevronDown className={`w-5 h-5 text-stone-400 transition-transform duration-300 ${activeAccordion === "description" ? "rotate-180" : ""}`} />
              </button>
              <div className={`overflow-hidden transition-all duration-300 ${activeAccordion === "description" ? "max-h-96 pb-5 opacity-100" : "max-h-0 opacity-0"}`}>
                <p className="text-sm text-stone-600 font-light leading-relaxed">
                  {product.description}
                </p>
                <ul className="mt-4 space-y-2">
                  {product.details.map((detail, idx) => (
                    <li key={idx} className="text-sm text-stone-600 font-light flex items-start gap-2">
                      <span className="text-[#C5A880]">•</span> {detail}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Ritual & Care */}
            <div className="border-b border-[#E2DEC9]">
              <button 
                onClick={() => toggleAccordion("care")}
                className="w-full py-5 flex items-center justify-between text-left focus:outline-none"
              >
                <span className="font-serif text-lg font-medium text-[#132F47]">Ritual & Care Guide</span>
                <ChevronDown className={`w-5 h-5 text-stone-400 transition-transform duration-300 ${activeAccordion === "care" ? "rotate-180" : ""}`} />
              </button>
              <div className={`overflow-hidden transition-all duration-300 ${activeAccordion === "care" ? "max-h-96 pb-5 opacity-100" : "max-h-0 opacity-0"}`}>
                <p className="text-sm text-stone-600 font-light leading-relaxed">
                  To maintain the energetic purity of your piece, cleanse it under moonlight during the Full Moon. Avoid exposing it to harsh chemicals, perfumes, or saltwater. When not in use, keep it in the provided sacred pouch. 
                </p>
              </div>
            </div>

            {/* Shipping & Returns */}
            <div className="border-b border-[#E2DEC9]">
              <button 
                onClick={() => toggleAccordion("shipping")}
                className="w-full py-5 flex items-center justify-between text-left focus:outline-none"
              >
                <span className="font-serif text-lg font-medium text-[#132F47]">Shipping & Returns</span>
                <ChevronDown className={`w-5 h-5 text-stone-400 transition-transform duration-300 ${activeAccordion === "shipping" ? "rotate-180" : ""}`} />
              </button>
              <div className={`overflow-hidden transition-all duration-300 ${activeAccordion === "shipping" ? "max-h-96 pb-5 opacity-100" : "max-h-0 opacity-0"}`}>
                <p className="text-sm text-stone-600 font-light leading-relaxed">
                  Orders are dispatched within 2-3 business days. Delivery across India usually takes 4-7 days. Due to the sacred nature of energized items, we accept returns only for damaged products reported within 48 hours of delivery.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
