"use client";

import React from "react";
import Image from "next/image";
import { Shield, BookOpen, Sun, Check, X, Compass, Feather } from "lucide-react";

export function BrandPhilosophy() {
  const whatWeBelieve = [
    "Before it was a mala, it was a fruit — nature precedes ritual.",
    "Ancient Indian traditions should be expressed through modern, refined design.",
    "Understanding and educational depth are more valuable than manufactured claims.",
    "Natural materials (Rudraksha, Tulsi, unheated earth stone) should remain unadulterated.",
    "Authenticity has weight, natural texture, and transparent origin.",
  ];

  const whatWeStandAgainst = [
    "Fear-based selling, superstition, and commercial exploitation of faith.",
    "Misleading astrological guarantees or 'instant luck' claims.",
    "Synthetic glass crystals and plastic imitation beads.",
    "Chemical dyes, toxic varnishes, or artificial heat treatments.",
    "Selling sacred products without honoring where they come from.",
  ];

  return (
    <section id="brand-story" className="py-24 bg-[#0C161D] text-[#ECEADE] relative overflow-hidden border-b border-[#C5A880]/20">
      <div className="absolute inset-0 bg-celestial-pattern opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Origin Story Top Block */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#182C3D] border border-[#C5A880]/30 text-xs uppercase tracking-[0.2em] text-[#C5A880]">
              <Compass className="w-3.5 h-3.5" />
              <span>Brand Philosophy</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-5xl font-normal text-white leading-tight">
              Svastimān is not trying <br />
              <span className="italic text-[#DFCAAB] font-light">
                to sell spirituality.
              </span>
            </h2>

            <p className="text-base text-stone-300 font-light leading-relaxed">
              We are building a house of sacred Indian materials that helps people understand and experience India&apos;s cultural heritage through authentic materials, traditional knowledge, and thoughtful modern design.
            </p>

            <p className="text-sm text-stone-400 font-light leading-relaxed">
              Too much of today&apos;s spiritual marketplace relies on fear, fabricated astrological claims, and synthetic plastics masquerading as gemstones. SVASTIMAN begins at the origin: the mountain, the river, the ancient forest tree, and the quiet hands of generational craftsmen who wash each seed in running river water.
            </p>

            <div className="pt-2 flex flex-wrap gap-6 text-xs text-stone-300">
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-[#C5A880]" />
                <span>Source Provenance</span>
              </div>
              <div className="flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-[#C5A880]" />
                <span>Scriptural Context</span>
              </div>
              <div className="flex items-center gap-2">
                <Feather className="w-4 h-4 text-[#C5A880]" />
                <span>Artisan Dignity</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 flex justify-center">
            <div className="relative w-full max-w-lg aspect-4/3 rounded-3xl overflow-hidden border border-[#C5A880]/30 shadow-2xl bg-[#070D12]">
              <Image
                src="/images/origin/rudraksha_hand_clean.jpg"
                alt="Artisan Hands Cleaning Seeds"
                fill
                className="object-cover brightness-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0C161D] via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-[#0C161D]/85 backdrop-blur-md border border-[#C5A880]/30 text-center">
                <p className="font-serif italic text-sm text-[#ECEADE]">
                  &ldquo;Ancient, but not old-fashioned. Presenting ancient Indian traditions through a modern, sophisticated visual language.&rdquo;
                </p>
                <span className="text-[10px] uppercase font-mono tracking-widest text-[#C5A880] mt-1.5 block">
                  — SVASTIMĀN FOUNDATION
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* What We Believe vs What We Stand Against Comparison Box */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* What We Believe */}
          <div className="bg-[#101D27] border border-[#C5A880]/30 rounded-3xl p-8 backdrop-blur-xs shadow-xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-[#182C3D] border border-[#C5A880]/50 flex items-center justify-center text-[#C5A880]">
                <Check className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-2xl text-white font-normal">What We Honor</h3>
            </div>
            <ul className="space-y-4">
              {whatWeBelieve.map((text, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-stone-300 font-light">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C5A880] mt-2 shrink-0" />
                  <span>{text}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* What We Stand Against */}
          <div className="bg-[#101D27] border border-stone-800 rounded-3xl p-8 backdrop-blur-xs shadow-xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-rose-950/40 border border-rose-500/30 flex items-center justify-center text-rose-400">
                <X className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-2xl text-stone-200 font-normal">What We Reject</h3>
            </div>
            <ul className="space-y-4">
              {whatWeStandAgainst.map((text, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-stone-400 font-light">
                  <span className="w-1.5 h-1.5 rounded-full bg-rose-400 mt-2 shrink-0" />
                  <span>{text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
