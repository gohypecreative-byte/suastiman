"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUp,
  ShieldCheck,
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

  const scrollToTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("/#")) {
      const hash = href.replace("/#", "");
      if (typeof window !== "undefined" && window.location.pathname === "/") {
        e.preventDefault();
        const el = document.getElementById(hash);
        if (el) {
          const yOffset = -80;
          const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
          window.scrollTo({ top: Math.max(0, y), behavior: "smooth" });
          window.history.pushState(null, "", href);
        }
      }
    }
  };

  return (
    <footer className="w-full select-none">
      {/* ========================================================================= */}
      {/* FIRST SECTION: Content Footer (Logo, Fine Print, Learn More, Subscribe)  */}
      {/* ========================================================================= */}
      <section className="w-full bg-[#F9F8F5] text-[#122E46] relative overflow-hidden border-t border-[#E8E2D5] pt-14 sm:pt-20 pb-16 sm:pb-20">
        {/* Subtle luxury grain texture */}
        <div className="absolute inset-0 bg-[radial-gradient(#C5A880_1px,transparent_1px)] [background-size:28px_28px] opacity-[0.08] pointer-events-none" />

        {/* Top Centered Envelope with Golden Wax Seal */}
        <div className="flex justify-center pb-12 sm:pb-16 relative z-10">
          <div className="relative w-32 sm:w-40 md:w-44 aspect-[4/3] rounded-xl overflow-hidden shadow-[0_8px_30px_rgba(18,46,70,0.08)] border border-[#E8E2D5] bg-white transition-transform duration-500 hover:scale-105 group cursor-default">
            <Image
              src="/images/footer_wax_envelope.jpg"
              alt="Svastimān Sacred Wax Sealed Monograph"
              fill
              className="object-cover object-center"
              sizes="(max-width: 640px) 128px, (max-width: 768px) 160px, 176px"
            />
          </div>
        </div>

        {/* 3-Column Content Layout with Vertical Dividers */}
        <div className="w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 relative z-10">
          <div className="flex flex-col lg:flex-row items-stretch justify-between gap-10 lg:gap-0">
            
            {/* COLUMN 1: FINE PRINT */}
            <div className="lg:w-[28%] lg:pr-8 xl:pr-12 space-y-4 sm:space-y-5">
              <h4 className="font-serif text-sm sm:text-[15px] font-semibold tracking-[0.16em] uppercase text-[#122E46]">
                FINE PRINT
              </h4>
              <ul className="space-y-3 text-xs sm:text-[13px] text-stone-700 font-normal">
                <li>
                  <Link
                    href="/privacy-policy"
                    className="hover:text-[#122E46] hover:translate-x-1 transition-all duration-200 inline-block"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    href="/shipping-policy"
                    className="hover:text-[#122E46] hover:translate-x-1 transition-all duration-200 inline-block"
                  >
                    Shipping Policy
                  </Link>
                </li>
                <li>
                  <Link
                    href="/terms-of-reverence"
                    className="hover:text-[#122E46] hover:translate-x-1 transition-all duration-200 inline-block"
                  >
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link
                    href="/authenticity-charter"
                    className="hover:text-[#122E46] hover:translate-x-1 transition-all duration-200 inline-block"
                  >
                    Refund Policy
                  </Link>
                </li>
                <li className="pt-2">
                  <div className="flex items-center gap-2 text-[11px] sm:text-xs text-[#7A6242] font-medium">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#8C6D46] shrink-0" />
                    <span>100% Traceable Indian Heritage</span>
                  </div>
                </li>
              </ul>
            </div>

            {/* VERTICAL DIVIDER 1 */}
            <div className="hidden lg:block w-[1px] bg-[#E0D8CB] self-stretch my-2 shrink-0" />

            {/* COLUMN 2: LEARN MORE */}
            <div className="lg:w-[32%] lg:px-8 xl:px-12 space-y-4 sm:space-y-5 border-t border-[#E8E2D5] pt-8 lg:border-t-0 lg:pt-0">
              <h4 className="font-serif text-sm sm:text-[15px] font-semibold tracking-[0.16em] uppercase text-[#122E46]">
                LEARN MORE
              </h4>
              <ul className="space-y-3 text-xs sm:text-[13px] text-stone-700 font-normal">
                <li>
                  <Link
                    href="/#hero"
                    onClick={(e) => handleNavClick(e, "/#hero")}
                    className="hover:text-[#122E46] hover:translate-x-1 transition-all duration-200 inline-block"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/products"
                    className="hover:text-[#122E46] hover:translate-x-1 transition-all duration-200 inline-block"
                  >
                    Sacred Materials
                  </Link>
                </li>
                <li>
                  <Link
                    href="/#know-your-tradition"
                    onClick={(e) => handleNavClick(e, "/#know-your-tradition")}
                    className="hover:text-[#122E46] hover:translate-x-1 transition-all duration-200 inline-block"
                  >
                    Vedic Botanical Wisdom
                  </Link>
                </li>
                <li>
                  <Link
                    href="/#trust-provenance"
                    onClick={(e) => handleNavClick(e, "/#trust-provenance")}
                    className="hover:text-[#122E46] hover:translate-x-1 transition-all duration-200 inline-block"
                  >
                    Laboratory &amp; Provenance
                  </Link>
                </li>
                <li>
                  <Link
                    href="/blog"
                    className="hover:text-[#122E46] hover:translate-x-1 transition-all duration-200 inline-block"
                  >
                    Sacred Knowledge Chronicles
                  </Link>
                </li>
                <li>
                  <Link
                    href="/pages/profession-crystal-mapping-calculator"
                    className="hover:text-[#122E46] hover:translate-x-1 transition-all duration-200 inline-block"
                  >
                    Crystal Mapping Report
                  </Link>
                </li>
                <li className="pt-1">
                  <a
                    href="mailto:concierge@svastiman.com"
                    className="text-xs sm:text-[13px] text-[#7A6242] hover:text-[#122E46] transition-colors underline underline-offset-4 font-medium"
                  >
                    concierge@svastiman.com
                  </a>
                </li>
              </ul>
            </div>

            {/* VERTICAL DIVIDER 2 */}
            <div className="hidden lg:block w-[1px] bg-[#E0D8CB] self-stretch my-2 shrink-0" />

            {/* COLUMN 3: SUBSCRIBE FOR OFFERS */}
            <div className="lg:w-[40%] lg:pl-8 xl:pl-12 space-y-4 sm:space-y-5 border-t border-[#E8E2D5] pt-8 lg:border-t-0 lg:pt-0">
              <h4 className="font-serif text-sm sm:text-[15px] font-semibold tracking-[0.16em] uppercase text-[#122E46]">
                SUBSCRIBE FOR OFFERS
              </h4>
              
              <p className="text-xs sm:text-[13px] text-stone-600 font-light leading-relaxed max-w-md">
                Be the first to know about new drops, samples &amp; exclusive sacred dispatches.
              </p>

              {subscribed ? (
                <div className="p-3 rounded-full bg-emerald-50 border border-emerald-300 text-emerald-800 text-xs flex items-center gap-2 max-w-md">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>You are subscribed to the Svastimān archive.</span>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="space-y-3 max-w-md">
                  <div className="relative rounded-full border border-[#D5CDBF] bg-white shadow-xs flex items-center pl-5 pr-1.5 py-1 focus-within:border-[#122E46] focus-within:ring-1 focus-within:ring-[#122E46]/15 transition-all duration-300">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      placeholder="Email"
                      className="w-full bg-transparent text-[#122E46] placeholder:text-stone-400 text-xs sm:text-sm focus:outline-none py-1.5 font-normal"
                    />
                    <button
                      type="submit"
                      className="text-[#122E46] hover:text-[#8C6D46] text-[11px] sm:text-xs font-semibold tracking-wider uppercase flex items-center gap-1.5 px-3 py-1.5 transition-colors cursor-pointer shrink-0 group/btn"
                    >
                      <span>JOIN</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 transition-transform" />
                    </button>
                  </div>
                </form>
              )}

              {/* Social Icons matching reference circular outline buttons */}
              <div className="flex items-center gap-3 pt-2">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer"
                  className="w-8 h-8 rounded-full border border-[#D5CDBF] bg-white hover:border-[#122E46] hover:bg-[#122E46] hover:text-white text-[#122E46] shadow-xs flex items-center justify-center transition-all duration-300 cursor-pointer"
                  aria-label="Instagram"
                >
                  <svg className="w-3.5 h-3.5 fill-none stroke-current stroke-[1.8]" viewBox="0 0 24 24">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                  </svg>
                </a>

                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noreferrer"
                  className="w-8 h-8 rounded-full border border-[#D5CDBF] bg-white hover:border-[#122E46] hover:bg-[#122E46] hover:text-white text-[#122E46] shadow-xs flex items-center justify-center transition-all duration-300 cursor-pointer"
                  aria-label="Facebook"
                >
                  <svg className="w-3.5 h-3.5 fill-none stroke-current stroke-[1.8]" viewBox="0 0 24 24">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                  </svg>
                </a>

                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noreferrer"
                  className="w-8 h-8 rounded-full border border-[#D5CDBF] bg-white hover:border-[#122E46] hover:bg-[#122E46] hover:text-white text-[#122E46] shadow-xs flex items-center justify-center transition-all duration-300 cursor-pointer"
                  aria-label="YouTube"
                >
                  <svg className="w-3.5 h-3.5 fill-none stroke-current stroke-[1.8]" viewBox="0 0 24 24">
                    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19.1c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.43z" />
                    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" fill="currentColor" />
                  </svg>
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECOND SECTION: Full-Width Oversized Faded Watermark & Copyright Bar       */}
      {/* ========================================================================= */}
      <section className="w-full bg-[#F4F1EA] text-[#122E46] relative overflow-hidden border-t border-[#E0D8CB]">
        {/* Subtle texture */}
        <div className="absolute inset-0 bg-[radial-gradient(#C5A880_1px,transparent_1px)] [background-size:28px_28px] opacity-[0.05] pointer-events-none" />

        {/* Oversized Faded Watermark Canvas - Scaled to fit website width without overflow */}
        <div className="w-full min-h-[160px] sm:min-h-[220px] md:min-h-[280px] lg:min-h-[340px] flex items-center justify-center overflow-hidden select-none pointer-events-none relative px-4 sm:px-8 lg:px-12 py-8 sm:py-12">
          <svg
            viewBox="0 0 1100 180"
            className="w-full max-w-[92vw] sm:max-w-[88vw] h-auto select-none pointer-events-none"
            aria-hidden="true"
          >
            <text
              x="50%"
              y="55%"
              textAnchor="middle"
              dominantBaseline="middle"
              className="font-serif text-[120px] font-normal tracking-[0.06em] fill-[#122E46]/[0.07] uppercase"
              style={{ fontFamily: "var(--font-serif), Playfair Display, Georgia, serif" }}
            >
              SVASTIMĀN
            </text>
          </svg>
        </div>

        {/* Bottom Copyright Bar with Back-to-Top Button */}
        <div className="w-full bg-[#ECE7DC] border-t border-[#DCD5C5] relative py-4 px-4 sm:px-8 md:px-16 pb-20 lg:pb-4 flex items-center justify-center z-10">
          <p className="text-[10px] sm:text-[11px] md:text-xs tracking-[0.2em] sm:tracking-[0.25em] uppercase font-sans text-[#122E46] font-medium text-center">
            &copy; {new Date().getFullYear()} SVASTIMĀN . ALL RIGHTS RESERVED.
          </p>

          {/* Back to Top Square Button on Right End */}
          <button
            onClick={scrollToTop}
            className="absolute right-4 sm:right-8 md:right-12 lg:right-16 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-9 sm:h-9 bg-[#122E46] hover:bg-[#8C6D46] text-white flex items-center justify-center transition-all duration-300 shadow-sm hover:shadow-md cursor-pointer active:scale-95"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-3.5 h-3.5 sm:w-4 sm:h-4 stroke-[2.2]" />
          </button>
        </div>
      </section>
    </footer>
  );
}
