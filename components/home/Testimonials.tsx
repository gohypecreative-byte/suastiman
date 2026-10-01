"use client";

import React from "react";
import { Star, Sparkles, Quote, ShieldCheck } from "lucide-react";

interface Testimonial {
  name: string;
  role: string;
  location: string;
  product: string;
  comment: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    name: "Ananya Sharma",
    role: "Architect & Yoga Practitioner",
    location: "Mumbai",
    product: "Leo Sovereign Tiger Eye Band",
    comment:
      "The authenticity is immediately tangible. Unlike mass-market stones, the weight and energy feel deeply consecrated. It has become a steady reminder of my focus and calm during demanding project pitches.",
    rating: 5,
  },
  {
    name: "Vikramaditya Rao",
    role: "Tech Entrepreneur",
    location: "Bengaluru",
    product: "Divine 108 Rudraksha & Lapis Mala",
    comment:
      "I was skeptical about buying spiritual malas online until I read Svastimān's philosophy. Zero superstition, pure traditional reverence. The silver accents and natural seeds are flawless.",
    rating: 5,
  },
  {
    name: "Pooja Hegde",
    role: "Creative Director",
    location: "New Delhi",
    product: "Moonstone & Rose Quartz Anahata Talisman",
    comment:
      "Beautiful packaging, comes with a genuine consecration card and guidance notes on how to cleanse the crystal. Wearing it brings a tangible sense of emotional balance and grace.",
    rating: 5,
  },
];

export function Testimonials() {
  return (
    <section className="py-20 bg-[#F9F8F5] border-b border-[#E2DEC9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-2">
          <div className="inline-flex items-center gap-2 text-[#C5A880] text-xs font-semibold uppercase tracking-widest">
            <span>Sacred Community</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#132F47] font-normal">
            Voices of Aligned Energy
          </h2>
          <p className="text-[#132F47]/70 text-sm font-light">
            Read how authentic gemstones and mindful intentions have touched lives across India.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-8 border border-[#E2DEC9] hover:border-[#C5A880] transition-all duration-300 shadow-xs hover:shadow-lg flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex gap-1 text-[#C5A880]">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#C5A880]" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-[#132F47]/10" />
                </div>

                <p className="text-xs text-[#132F47]/80 leading-relaxed font-light italic mb-6">
                  &ldquo;{t.comment}&rdquo;
                </p>
              </div>

              <div className="pt-4 border-t border-[#E2DEC9]/60">
                <p className="font-serif font-semibold text-sm text-[#132F47]">{t.name}</p>
                <p className="text-[11px] text-[#132F47]/60">
                  {t.role} &bull; {t.location}
                </p>
                <div className="mt-2 inline-flex items-center gap-1 text-[10px] text-[#C5A880] bg-[#132F47] px-2 py-0.5 rounded">
                  <ShieldCheck className="w-3 h-3" />
                  <span>Verified Purchase: {t.product}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
