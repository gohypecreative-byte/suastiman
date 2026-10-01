"use client";

import React from "react";
import Image from "next/image";
import { Sparkles, Check, X, Shield, BookOpen, Sun, HeartHandshake } from "lucide-react";

export function BrandPhilosophy() {
  const whatWeBelieve = [
    "Spirituality is about awareness, not fear.",
    "Understanding is more valuable than blind belief.",
    "Every spiritual object carries a deeper purpose and meaning.",
    "Ancient wisdom remains deeply relevant for modern living.",
    "Faith deserves honesty, respect, and sacred responsibility.",
  ];

  const whatWeStandAgainst = [
    "Fear-based selling and superstitions.",
    "Misleading astrological guarantees.",
    "Commercialisation of sacred faith.",
    "Inauthentic, plastic or synthetic fake crystals.",
    "Selling sacred products without spiritual context.",
  ];

  return (
    <section id="brand-story" className="py-24 bg-[#132F47] text-[#ECEADE] relative overflow-hidden">
      <div className="absolute inset-0 bg-celestial-pattern opacity-15 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Origin Story Top Block */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#ECEADE]/10 border border-[#C5A880]/30 text-xs uppercase tracking-widest text-[#C5A880]">
              <span>Brand Origin Story</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#ECEADE] leading-tight">
              We Don&apos;t Sell Spirituality. <br />
              <span className="italic font-light text-gold-gradient">
                We Help You Connect With It.
              </span>
            </h2>

            <p className="text-base text-[#ECEADE]/80 font-light leading-relaxed">
              Svastimān began with a personal journey into spirituality, rooted in years of
              exploring ancient mythology, scriptures, traditions, and meditative practices.
            </p>

            <p className="text-sm text-[#ECEADE]/70 font-light leading-relaxed">
              Along the way, we noticed a growing gap between authentic spiritual knowledge and how
              spirituality was being commercialized today. Sacred products were sold blindly
              without explaining their true significance. Svastimān exists to educate, empower, and
              help you wear your spiritual intention with pride and understanding.
            </p>

            <div className="pt-2 flex items-center gap-6">
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-[#C5A880]" />
                <span className="text-xs text-[#ECEADE]/90 font-medium">Authentic Sourcing</span>
              </div>
              <div className="flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-[#C5A880]" />
                <span className="text-xs text-[#ECEADE]/90 font-medium">Ancient Wisdom</span>
              </div>
              <div className="flex items-center gap-2">
                <Sun className="w-5 h-5 text-[#C5A880]" />
                <span className="text-xs text-[#ECEADE]/90 font-medium">Mindful Living</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 flex justify-center">
            <div className="relative w-full max-w-lg aspect-4/3 rounded-3xl overflow-hidden border border-[#C5A880]/30 shadow-2xl bg-[#0A1B2A]">
              <Image
                src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=800&q=80"
                alt="Meditation & Ancient Wisdom"
                fill
                className="object-cover opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A1B2A] via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-[#0A1B2A]/85 backdrop-blur-md border border-[#C5A880]/30 text-center">
                <p className="font-serif italic text-sm text-[#ECEADE]">
                  &ldquo;Every spiritual piece carries emotional significance, spiritual symbolism,
                  and aesthetic elegance.&rdquo;
                </p>
                <span className="text-[10px] uppercase tracking-widest text-[#C5A880] mt-1 block">
                  — Svastimān Foundation
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* What We Believe vs What We Stand Against Comparison Box */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* What We Believe */}
          <div className="bg-[#0A1B2A]/80 border border-emerald-500/30 rounded-3xl p-8 backdrop-blur-xs">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-emerald-500/10 border border-emerald-500/40 flex items-center justify-center text-emerald-400">
                <Check className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-2xl text-emerald-300 font-medium">What We Believe</h3>
            </div>
            <ul className="space-y-4">
              {whatWeBelieve.map((text, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-[#ECEADE]/85">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C5A880] mt-2 shrink-0" />
                  <span>{text}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* What We Stand Against */}
          <div className="bg-[#0A1B2A]/80 border border-rose-500/30 rounded-3xl p-8 backdrop-blur-xs">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-rose-500/10 border border-rose-500/40 flex items-center justify-center text-rose-400">
                <X className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-2xl text-rose-300 font-medium">What We Stand Against</h3>
            </div>
            <ul className="space-y-4">
              {whatWeStandAgainst.map((text, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-[#ECEADE]/75">
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
