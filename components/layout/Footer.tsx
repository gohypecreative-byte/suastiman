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
  const [agreed, setAgreed] = useState(true);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim() && agreed) {
      setSubscribed(true);
      setEmail("");
    }
  };

  return (
    <footer className="w-full bg-[#F7F5F0] text-[#122E46] border-t border-[#E0D8CB] overflow-hidden select-none relative">
      {/* Subtle brand texture */}
      <div className="absolute inset-0 bg-[radial-gradient(#C5A880_1px,transparent_1px)] [background-size:32px_32px] opacity-[0.06] pointer-events-none" />

      {/* Inject Traveling Blue Animation Styles */}
      <style>{`
        @keyframes blueTravel {
          0% {
            background-position: 93% 0;
          }
          100% {
            background-position: 7% 0;
          }
        }
        .animate-blue-travel {
          background: linear-gradient(
            90deg,
            #FFFFFF 0%,
            #FFFFFF 40%,
            #122E46 50%,
            #FFFFFF 60%,
            #FFFFFF 100%
          );
          background-size: 300% 100%;
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          color: transparent;
          animation: blueTravel 3.8s ease-in-out infinite;
        }
      `}</style>

      {/* TOP BRAND & STATEMENT HERO SECTION - Full Width End-to-End */}
      <div className="w-full px-6 sm:px-10 md:px-14 lg:px-16 xl:px-20 2xl:px-24 pt-14 sm:pt-20 pb-10 sm:pb-14 text-center relative z-10">
        {/* Centered Brand Title */}
        <div className="inline-flex flex-col items-center group cursor-pointer transition-transform duration-500 hover:scale-[1.02]">
          <Link href="/" className="inline-block text-center">
            <span className="font-serif text-3xl sm:text-4xl md:text-5xl font-medium tracking-[0.14em] text-[#122E46] uppercase block">
              SVASTIMĀN
            </span>
            <span className="block text-[10px] sm:text-[11px] uppercase font-mono tracking-[0.32em] text-[#8C6D46] mt-2 font-semibold">
              HOUSE OF SACRED MATERIALS &bull; ROOTED IN SOURCE
            </span>
          </Link>
        </div>

        {/* Big Slogan / Statement Banner (Simple White with Traveling Blue Wave Animation) */}
        <div className="mt-6 sm:mt-12 overflow-hidden py-2">
          <h2 className="font-serif text-2xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-[5.5rem] font-normal tracking-tight select-none leading-none">
            <span className="inline-block animate-blue-travel filter drop-shadow-[0_2px_6px_rgba(18,46,70,0.18)] drop-shadow-[0_1px_2px_rgba(18,46,70,0.22)]">
              From Nature <span className="italic font-light">#RootedInTradition</span>
            </span>
          </h2>
        </div>
      </div>

      {/* 4-COLUMN CONTENT SECTION - Full Width End-to-End */}
      <div className="w-full px-5 sm:px-10 md:px-14 lg:px-16 xl:px-20 2xl:px-24 pb-20 lg:pb-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-10 xl:gap-14 2xl:gap-20 pt-8 sm:pt-10 border-t border-[#E0D8CB]/80">
          
          {/* Col 1: Customer Service / Sacred Materials */}
          <div className="space-y-4">
            <h4 className="font-serif text-sm font-semibold tracking-wider text-[#122E46] uppercase">
              Sacred Materials
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-[13px] text-stone-700 font-normal">
              <li>
                <a href="#category-showcase" className="hover:text-[#8C6D46] hover:translate-x-1.5 transition-all duration-300 inline-block">
                  Himalayan Rudraksha
                </a>
              </li>
              <li>
                <a href="#category-showcase" className="hover:text-[#8C6D46] hover:translate-x-1.5 transition-all duration-300 inline-block">
                  Vrindavan Tulsi Wood
                </a>
              </li>
              <li>
                <a href="#category-showcase" className="hover:text-[#8C6D46] hover:translate-x-1.5 transition-all duration-300 inline-block">
                  Untreated Gemstones
                </a>
              </li>
              <li>
                <a href="#featured-products" className="hover:text-[#8C6D46] hover:translate-x-1.5 transition-all duration-300 inline-block">
                  108 Japa Malas
                </a>
              </li>
              <li>
                <a href="#featured-products" className="hover:text-[#8C6D46] hover:translate-x-1.5 transition-all duration-300 inline-block">
                  Sacred Kanthas &amp; Bracelets
                </a>
              </li>
              <li>
                <a href="#featured-products" className="hover:text-[#8C6D46] hover:translate-x-1.5 transition-all duration-300 inline-block">
                  Pure Sandalwood Oil
                </a>
              </li>
            </ul>
          </div>

          {/* Col 2: Tradition & Science */}
          <div className="space-y-4">
            <h4 className="font-serif text-sm font-semibold tracking-wider text-[#122E46] uppercase">
              Tradition &amp; Science
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-[13px] text-stone-700 font-normal">
              <li>
                <a href="#know-your-tradition" className="hover:text-[#8C6D46] hover:translate-x-1.5 transition-all duration-300 inline-block">
                  The Nine Stages
                </a>
              </li>
              <li>
                <a href="#know-your-tradition" className="hover:text-[#8C6D46] hover:translate-x-1.5 transition-all duration-300 inline-block">
                  Vedic Botanical Anatomy
                </a>
              </li>
              <li>
                <a href="#trust-provenance" className="hover:text-[#8C6D46] hover:translate-x-1.5 transition-all duration-300 inline-block">
                  Digital X-Ray Lab
                </a>
              </li>
              <li>
                <a href="#trust-provenance" className="hover:text-[#8C6D46] hover:translate-x-1.5 transition-all duration-300 inline-block">
                  Mineral Lab Analysis
                </a>
              </li>
              <li>
                <a href="#material-journeys" className="hover:text-[#8C6D46] hover:translate-x-1.5 transition-all duration-300 inline-block">
                  Brahmagranthi Knots
                </a>
              </li>
              <li>
                <a href="#trust-provenance" className="hover:text-[#8C6D46] hover:translate-x-1.5 transition-all duration-300 inline-block">
                  Authenticity Charter
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Follow Us & Office Address */}
          <div className="space-y-5">
            <div>
              <h4 className="font-serif text-sm font-semibold tracking-wider text-[#122E46] uppercase">
                Follow Us
              </h4>
              <div className="pt-2.5 flex items-center gap-2.5">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer"
                  className="w-9 h-9 rounded-full bg-white border border-[#D5CDBF] shadow-xs flex items-center justify-center text-[#122E46] hover:bg-[#122E46] hover:text-[#FAF8F5] hover:border-[#122E46] hover:scale-110 transition-all duration-300 cursor-pointer"
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
                  className="w-9 h-9 rounded-full bg-white border border-[#D5CDBF] shadow-xs flex items-center justify-center text-[#122E46] hover:bg-[#122E46] hover:text-[#FAF8F5] hover:border-[#122E46] hover:scale-110 transition-all duration-300 cursor-pointer"
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
                  className="w-9 h-9 rounded-full bg-white border border-[#D5CDBF] shadow-xs flex items-center justify-center text-[#122E46] hover:bg-[#122E46] hover:text-[#FAF8F5] hover:border-[#122E46] hover:scale-110 transition-all duration-300 cursor-pointer"
                  aria-label="YouTube"
                >
                  <svg className="w-3.5 h-3.5 fill-none stroke-current stroke-[1.8]" viewBox="0 0 24 24">
                    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19.1c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.43z"></path>
                    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" fill="currentColor"></polygon>
                  </svg>
                </a>
              </div>
            </div>

            <div>
              <h4 className="font-serif text-sm font-semibold tracking-wider text-[#122E46] uppercase">
                Office &amp; Sacred Origin
              </h4>
              <p className="pt-1.5 text-xs sm:text-[13px] text-stone-600 font-light leading-relaxed">
                Himalayan Cloud Belts &amp; Vrindavan Groves, India
              </p>
              <a
                href="mailto:concierge@svastiman.com"
                className="text-xs sm:text-[13px] text-[#122E46] hover:text-[#8C6D46] transition-colors underline underline-offset-2 font-medium"
              >
                concierge@svastiman.com
              </a>
            </div>

            <div className="pt-1 flex items-center gap-2 text-xs text-stone-600 font-light">
              <ShieldCheck className="w-4 h-4 text-[#8C6D46] shrink-0" />
              <span>100% Traceable Indian Heritage &bull; Zero Fear-Based Claims</span>
            </div>
          </div>

          {/* Col 4: Join Our Newsletter */}
          <div className="space-y-4">
            <h4 className="font-serif text-sm font-semibold tracking-wider text-[#122E46] uppercase">
              Join Our Newsletter
            </h4>
            <p className="text-xs sm:text-[13px] text-stone-600 font-light leading-relaxed">
              Subscribe to receive rare botanical harvest monographs, laboratory testing reports, and sacred archive dispatches. No spam.
            </p>

            {subscribed ? (
              <div className="p-3.5 rounded-xl bg-emerald-50 border border-emerald-300 text-emerald-800 text-xs flex items-center gap-2 transition-all">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>You are subscribed to the Svastimān Monograph archive.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-2.5">
                <div className="flex gap-2">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    placeholder="e.g. name@example.com"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#D0C8B8] text-xs sm:text-[13px] text-[#122E46] placeholder:text-[#122E46]/45 focus:outline-none focus:border-[#7A5832] focus:ring-1 focus:ring-[#7A5832]/30 shadow-xs transition-all font-normal"
                  />
                  <button
                    type="submit"
                    className="px-4 py-2.5 rounded-xl bg-[#122E46] hover:bg-[#7A5832] text-[#FAF8F5] font-semibold text-xs tracking-wider uppercase transition-all duration-300 shrink-0 flex items-center justify-center gap-1 shadow-xs hover:shadow-md hover:scale-[1.02] active:scale-95 cursor-pointer"
                  >
                    <span>Subscribe</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

                <label className="flex items-start gap-2 pt-1 text-[11px] sm:text-xs text-stone-500 cursor-pointer select-none">
                  <input
                    type="checkbox"
                    checked={agreed}
                    onChange={(e) => setAgreed(e.target.checked)}
                    className="mt-0.5 rounded border-[#D0C8B8] text-[#122E46] focus:ring-[#7A5832] cursor-pointer"
                  />
                  <span>
                    I agree to receive monographs from Svastimān. Read our{" "}
                    <a href="#trust-provenance" className="underline hover:text-[#8C6D46] transition-colors">Privacy Policy</a>.
                  </span>
                </label>
              </form>
            )}
          </div>
        </div>

        {/* BOTTOM COPYRIGHT & LEGAL BAR */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-stone-600 font-normal pt-8 mt-8 border-t border-[#E0D8CB]/80 pb-16 lg:pb-0">
          <p className="order-2 md:order-1 text-center md:text-left">
            &copy; {new Date().getFullYear()} Svastimān Heritage Private Limited. All rights reserved.
          </p>

          <div className="order-1 md:order-3 flex flex-wrap items-center justify-center gap-3 sm:gap-4 text-xs">
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
            <span className="text-stone-300">&bull;</span>
            <a href="#" className="hover:text-[#8C6D46] transition-colors">
              Terms of Reverence
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
