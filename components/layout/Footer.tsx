"use client";

import React from "react";
import Link from "next/link";
import { Logo } from "@/components/common/Logo";
import { Sparkles, ArrowRight, ShieldCheck, Mail, Camera, Compass } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#0A1B2A] text-[#ECEADE] border-t border-[#C5A880]/20 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-[#ECEADE]/10">
          {/* Col 1: Brand & Tagline */}
          <div className="lg:col-span-4 space-y-4">
            <Logo theme="light" />
            <p className="text-xs text-[#ECEADE]/70 leading-relaxed font-light max-w-sm">
              Svastimān is a modern spiritual guidance and lifestyle brand rooted in authenticity,
              respect for ancient scriptures, and timeless design.
            </p>
            <div className="pt-2 flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-[#132F47] border border-[#C5A880]/30 flex items-center justify-center text-[#C5A880] hover:border-[#C5A880] transition-colors cursor-pointer">
                <Camera className="w-4 h-4" />
              </div>
              <div className="w-8 h-8 rounded-full bg-[#132F47] border border-[#C5A880]/30 flex items-center justify-center text-[#C5A880] hover:border-[#C5A880] transition-colors cursor-pointer">
                <Compass className="w-4 h-4" />
              </div>
            </div>
          </div>

          {/* Col 2: Shop by Intention */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-serif text-sm font-semibold tracking-wider text-[#C5A880] uppercase">
              Intentions
            </h4>
            <ul className="space-y-2 text-xs text-[#ECEADE]/75 font-light">
              <li>
                <a href="#intentions-section" className="hover:text-white transition-colors">
                  Protection &amp; Shield
                </a>
              </li>
              <li>
                <a href="#intentions-section" className="hover:text-white transition-colors">
                  Wealth &amp; Abundance
                </a>
              </li>
              <li>
                <a href="#intentions-section" className="hover:text-white transition-colors">
                  Love &amp; Compassion
                </a>
              </li>
              <li>
                <a href="#intentions-section" className="hover:text-white transition-colors">
                  Mental Clarity &amp; Focus
                </a>
              </li>
              <li>
                <a href="#energy-finder" className="hover:text-white transition-colors">
                  Zodiac Alignment
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Sacred Collections */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-serif text-sm font-semibold tracking-wider text-[#C5A880] uppercase">
              Collections
            </h4>
            <ul className="space-y-2 text-xs text-[#ECEADE]/75 font-light">
              <li>
                <a href="#products-section" className="hover:text-white transition-colors">
                  108 Seed Sacred Malas
                </a>
              </li>
              <li>
                <a href="#products-section" className="hover:text-white transition-colors">
                  Zodiac Astrological Bands
                </a>
              </li>
              <li>
                <a href="#products-section" className="hover:text-white transition-colors">
                  Chakra Harmonizers
                </a>
              </li>
              <li>
                <a href="#brand-story" className="hover:text-white transition-colors">
                  Our Origin Story
                </a>
              </li>
              <li>
                <a href="#brand-story" className="hover:text-white transition-colors">
                  Authentic Sourcing
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Cosmic Newsletter */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="font-serif text-sm font-semibold tracking-wider text-[#C5A880] uppercase">
              Cosmic &amp; Energy Updates
            </h4>
            <p className="text-xs text-[#ECEADE]/70 font-light leading-relaxed">
              Subscribe to receive planetary transit insights, auspicious tithi dates, and sacred
              crystal care guides. No spam, only intention.
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Your sacred email address..."
                className="w-full px-4 py-2.5 rounded-xl bg-[#132F47]/80 border border-[#ECEADE]/20 text-xs text-[#ECEADE] placeholder:text-[#ECEADE]/40 focus:outline-none focus:border-[#C5A880]"
              />
              <button className="px-4 py-2.5 rounded-xl bg-[#C5A880] hover:bg-[#D4AF37] text-[#111111] font-semibold text-xs transition-colors shrink-0 flex items-center justify-center">
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
            <div className="flex items-center gap-2 text-[11px] text-[#ECEADE]/60">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>100% Certified Consecrated Jewellery &bull; Made in India</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#ECEADE]/50 font-light">
          <p>&copy; {new Date().getFullYear()} Svastimān. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-[#ECEADE] transition-colors">
              Authenticity Promise
            </a>
            <a href="#" className="hover:text-[#ECEADE] transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-[#ECEADE] transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
