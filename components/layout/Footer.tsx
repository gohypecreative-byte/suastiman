"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  ShieldCheck, 
  ArrowRight, 
  Mail, 
  MapPin, 
  CheckCircle2
} from "lucide-react";

export function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail("");
    }
  };

  return (
    <footer className="w-full bg-[#F7F5F0] text-[#122E46] border-t border-[#E0D8CB] overflow-hidden select-none">
      {/* Subtle brand texture */}
      <div className="absolute inset-0 bg-[radial-gradient(#C5A880_1px,transparent_1px)] [background-size:32px_32px] opacity-[0.06] pointer-events-none" />

      {/* END-TO-END MAIN FOOTER CONTENT */}
      <div className="w-full px-6 sm:px-12 lg:px-16 xl:px-20 pt-12 sm:pt-16 pb-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12 pb-12 border-b border-[#E0D8CB]">
          
          {/* Col 1: Brand Info (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div>
              <Link href="/" className="inline-block group">
                <span className="font-serif text-2xl sm:text-3xl font-medium text-[#122E46] tracking-wide group-hover:text-[#8C6D46] transition-colors">
                  Svastimān
                </span>
                <span className="block text-[10px] uppercase font-mono tracking-[0.25em] text-[#8C6D46] mt-0.5 font-semibold">
                  HOUSE OF SACRED MATERIALS
                </span>
              </Link>
            </div>

            <p className="text-xs sm:text-[13px] text-stone-600 leading-relaxed font-light max-w-sm">
              Authentic Himalayan botanicals, untreated earth minerals, and generational Indian craft. Consecrated with traditional reverence.
            </p>

            <div className="space-y-1.5 pt-1 text-xs sm:text-[13px] text-stone-700 font-normal">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#8C6D46] shrink-0" />
                <span>Himalayan Cloud Belts &amp; Vrindavan Groves, India</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#8C6D46] shrink-0" />
                <a 
                  href="mailto:concierge@svastiman.com" 
                  className="font-medium text-[#122E46] hover:text-[#8C6D46] transition-colors underline underline-offset-2"
                >
                  concierge@svastiman.com
                </a>
              </div>
            </div>

            {/* Social Icons */}
            <div className="pt-2 flex items-center gap-2.5">
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noreferrer"
                className="w-9 h-9 rounded-xl bg-white border border-[#D5CDBF] shadow-xs flex items-center justify-center text-[#122E46] hover:bg-[#8C6D46] hover:text-white hover:border-[#8C6D46] transition-all cursor-pointer"
                aria-label="Instagram"
              >
                <svg className="w-3.5 h-3.5 fill-none stroke-current stroke-[1.8]" viewBox="0 0 24 24">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>

              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noreferrer"
                className="w-9 h-9 rounded-xl bg-white border border-[#D5CDBF] shadow-xs flex items-center justify-center text-[#122E46] hover:bg-[#8C6D46] hover:text-white hover:border-[#8C6D46] transition-all cursor-pointer"
                aria-label="Facebook"
              >
                <svg className="w-3.5 h-3.5 fill-none stroke-current stroke-[1.8]" viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>

              <a 
                href="https://youtube.com" 
                target="_blank" 
                rel="noreferrer"
                className="w-9 h-9 rounded-xl bg-white border border-[#D5CDBF] shadow-xs flex items-center justify-center text-[#122E46] hover:bg-[#8C6D46] hover:text-white hover:border-[#8C6D46] transition-all cursor-pointer"
                aria-label="YouTube"
              >
                <svg className="w-3.5 h-3.5 fill-none stroke-current stroke-[1.8]" viewBox="0 0 24 24">
                  <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19.1c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.43z"></path>
                  <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" fill="currentColor"></polygon>
                </svg>
              </a>
            </div>
          </div>

          {/* Col 2: Sacred Materials (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-serif text-xs font-semibold tracking-[0.16em] text-[#7A5832] uppercase">
              Sacred Materials
            </h4>
            <ul className="space-y-2 text-xs sm:text-[13px] text-stone-700 font-normal">
              <li>
                <a href="#category-showcase" className="hover:text-[#8C6D46] transition-colors block">
                  Himalayan Rudraksha
                </a>
              </li>
              <li>
                <a href="#category-showcase" className="hover:text-[#8C6D46] transition-colors block">
                  Vrindavan Tulsi Wood
                </a>
              </li>
              <li>
                <a href="#category-showcase" className="hover:text-[#8C6D46] transition-colors block">
                  Untreated Gemstones
                </a>
              </li>
              <li>
                <a href="#featured-products" className="hover:text-[#8C6D46] transition-colors block">
                  108 Japa Malas
                </a>
              </li>
              <li>
                <a href="#featured-products" className="hover:text-[#8C6D46] transition-colors block">
                  Sacred Kanthas &amp; Bracelets
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Tradition & Science (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-serif text-xs font-semibold tracking-[0.16em] text-[#7A5832] uppercase">
              Tradition &amp; Science
            </h4>
            <ul className="space-y-2 text-xs sm:text-[13px] text-stone-700 font-normal">
              <li>
                <a href="#know-your-tradition" className="hover:text-[#8C6D46] transition-colors block">
                  The Nine Stages
                </a>
              </li>
              <li>
                <a href="#know-your-tradition" className="hover:text-[#8C6D46] transition-colors block">
                  Vedic Botanical Anatomy
                </a>
              </li>
              <li>
                <a href="#trust-provenance" className="hover:text-[#8C6D46] transition-colors block">
                  Digital X-Ray Lab
                </a>
              </li>
              <li>
                <a href="#trust-provenance" className="hover:text-[#8C6D46] transition-colors block">
                  Mineral Lab Analysis
                </a>
              </li>
              <li>
                <a href="#material-journeys" className="hover:text-[#8C6D46] transition-colors block">
                  Brahmagranthi Knots
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Newsletter / Monograph (4 cols) */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="font-serif text-xs font-semibold tracking-[0.16em] text-[#7A5832] uppercase">
              The Svastimān Monograph
            </h4>
            <p className="text-xs sm:text-[13px] text-stone-600 font-light leading-relaxed">
              Subscribe to receive rare botanical harvest monographs and laboratory testing reports.
            </p>

            {subscribed ? (
              <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-300 text-emerald-800 text-xs flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>You are subscribed to the Svastimān Monograph archive.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-2">
                <div className="flex gap-2">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    placeholder="Enter your email address..."
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#D0C8B8] text-xs sm:text-[13px] text-[#122E46] placeholder:text-[#122E46]/45 focus:outline-none focus:border-[#7A5832] shadow-xs font-normal"
                  />
                  <button 
                    type="submit"
                    className="px-4 py-2.5 rounded-xl bg-[#122E46] hover:bg-[#7A5832] text-[#FAF8F5] font-semibold text-xs tracking-wider uppercase transition-all shrink-0 flex items-center justify-center gap-1 shadow-xs cursor-pointer"
                  >
                    <span>Join</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </form>
            )}

            <div className="pt-1 flex items-center gap-2 text-xs text-stone-600 font-light">
              <ShieldCheck className="w-3.5 h-3.5 text-[#8C6D46] shrink-0" />
              <span>100% Traceable Indian Heritage &bull; Zero Fear-Based Claims</span>
            </div>
          </div>
        </div>

        {/* EDITORIAL WATERMARK BACKGROUND */}
        <div className="my-6 overflow-hidden flex justify-center opacity-[0.03] pointer-events-none select-none">
          <span className="font-serif text-6xl sm:text-8xl lg:text-9xl font-light tracking-[0.25em] text-[#122E46] whitespace-nowrap">
            SVASTIMĀN
          </span>
        </div>

        {/* BOTTOM COPYRIGHT & LEGAL BAR */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-stone-600 font-normal pt-4 border-t border-[#E0D8CB]">
          <p className="order-2 md:order-1 text-center md:text-left">
            &copy; {new Date().getFullYear()} Svastimān Heritage Private Limited. All rights reserved.
          </p>
          
          <p className="order-1 md:order-2 italic font-serif text-[12px] sm:text-[13px] text-[#7A5832] font-medium">
            &ldquo;From Nature. Through Human Hands. Rooted in Tradition.&rdquo;
          </p>

          <div className="order-3 flex items-center gap-4 text-xs">
            <a href="#trust-provenance" className="hover:text-[#8C6D46] transition-colors">
              Authenticity Charter
            </a>
            <span className="text-stone-300">&bull;</span>
            <a href="#trust-provenance" className="hover:text-[#8C6D46] transition-colors">
              Lab Provenance
            </a>
            <span className="text-stone-300">&bull;</span>
            <a href="#" className="hover:text-[#8C6D46] transition-colors">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
