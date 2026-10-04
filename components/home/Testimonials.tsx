"use client";

import React from "react";
import { Star, Quote, ShieldCheck, Compass } from "lucide-react";

interface Testimonial {
  name: string;
  role: string;
  location: string;
  material: string;
  comment: string;
  verifiedOrigin: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Dr. Radhika Joshi",
    role: "Classical Indologist & Researcher",
    location: "Pune",
    material: "108-Seed 5-Mukhi Nepali Rudraksha Mala",
    comment:
      "When I received the mala, the first thing I examined was the natural woody density and complete absence of chemical lacquer. The internal locules match the X-ray certificate, and the traditional references are accurate. SVASTIMAN is restoring authentic dignity to sacred Indian materials.",
    verifiedOrigin: "Nepal Foothills Origin",
  },
  {
    name: "Arvind Nair",
    role: "Architect & Meditation Practitioner",
    location: "Kochi",
    material: "Aged Vrindavan Krishna Tulsi Mala",
    comment:
      "You can truly feel the raw material. The aged Tulsi wood has an organic, velvety texture and warms immediately against the skin, releasing faint herbal notes. It feels like an ancient monastic companion, not an astrology market trinket.",
    verifiedOrigin: "Vrindavan Temple Grove Harvest",
  },
  {
    name: "Meera Sen",
    role: "Conservationist & Mineralogist",
    location: "Dehradun",
    material: "Raw Lapis Lazuli & Brass Bracelet",
    comment:
      "The untreated Lapis Lazuli with genuine golden pyrite inclusions is rare to find in an industry flooded with dyed blue glass. SVASTIMAN's insistence on raw geological integrity and Jaipur artisan craft is remarkable.",
    verifiedOrigin: "Jaipur Water-Lapidary Craft",
  },
];

export function Testimonials() {
  return (
    <section className="py-24 bg-[#F7F5F0] text-[#132532] border-b border-[#E2DEC9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 text-[#9E7D4E] text-xs font-semibold uppercase tracking-[0.2em]">
            <Compass className="w-3.5 h-3.5" />
            <span>Reflections &amp; Provenance</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#0C161D] font-normal">
            Voices of Tradition &amp; Material Integrity
          </h2>
          <p className="text-stone-600 text-sm font-light">
            Read perspectives from scholars, practitioners, and custodians of Indian heritage.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl p-8 border border-[#E2DEC9] hover:border-[#9E7D4E] transition-all duration-300 shadow-md flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex gap-1 text-[#9E7D4E]">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-[#9E7D4E]" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-stone-300" />
                </div>

                <p className="text-xs text-stone-700 leading-relaxed font-light italic mb-6">
                  &ldquo;{t.comment}&rdquo;
                </p>
              </div>

              <div className="pt-4 border-t border-[#E2DEC9]">
                <p className="font-serif font-medium text-base text-[#0C161D]">{t.name}</p>
                <p className="text-[11px] text-stone-500 font-light">
                  {t.role} &bull; {t.location}
                </p>
                <div className="mt-3 inline-flex items-center gap-1.5 text-[10px] font-mono text-[#0C161D] bg-[#F7F5F0] border border-[#E2DEC9] px-2.5 py-1 rounded">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                  <span>{t.verifiedOrigin}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
