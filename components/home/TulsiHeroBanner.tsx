"use client";

import React from "react";
import Image from "next/image";

export function TulsiHeroBanner() {
  const scrollToProduct = () => {
    const el = document.getElementById("best-sellers") || document.getElementById("discover-product");
    if (el) {
      const top = el.getBoundingClientRect().top + window.pageYOffset - 85;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <section className="relative w-full min-h-[580px] sm:min-h-[640px] md:min-h-[700px] lg:min-h-[760px] xl:min-h-[820px] flex items-center justify-center overflow-hidden bg-[#FAF8F5] select-none">
      {/* Background Hero Image - User Uploaded Banner (2.5K Ultra-Sharp, Adjusted Framing) */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/tulsi_hero_banner.jpg"
          alt="Tulsi Kanthi Mala 1 Round Sacred Photography"
          fill
          priority
          unoptimized
          sizes="100vw"
          className="object-cover object-[center_36%] sm:object-[center_34%]"
        />
        {/* Soft edge vignettes: Subtle top shadow for transparent navbar legibility, clear center, grounded bottom */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/10 to-black/50 z-10 pointer-events-none" />
      </div>

      {/* Centered Editorial Content matching AXELS Hierarchy */}
      <div className="relative z-20 w-full max-w-4xl mx-auto px-5 sm:px-8 text-center flex flex-col items-center justify-center pt-28 sm:pt-36 md:pt-40 lg:pt-44 pb-16 sm:pb-24">

        {/* Massive Centered Serif Headline */}
        <h1
          className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-[68px] xl:text-[74px] font-normal tracking-[0.06em] sm:tracking-[0.08em] text-white uppercase text-center leading-[1.12] sm:leading-[1.08] drop-shadow-[0_4px_24px_rgba(0,0,0,0.85)] mb-3 sm:mb-4 max-w-3xl"
          style={{ fontFamily: "var(--font-serif), 'Playfair Display', Georgia, serif" }}
        >
          Tulsi Kanthi Mala
        </h1>

        {/* Subtitle Paragraph */}
        <p className="text-xs sm:text-sm md:text-base text-white/95 font-sans font-normal tracking-wide leading-relaxed max-w-xl mx-auto mb-7 sm:mb-8 drop-shadow-[0_2px_12px_rgba(0,0,0,0.9)]">
          Rooted in Tradition. Connected Through Devotion.
        </p>

        {/* Solid White Button with Navy Text matching uploaded reference */}
        <div>
          <button
            onClick={scrollToProduct}
            className="inline-flex items-center justify-center bg-white hover:bg-[#F7F5F0] text-[#122E46] text-[11px] sm:text-xs font-sans font-medium tracking-[0.25em] uppercase px-8 sm:px-10 py-3 sm:py-3.5 rounded-none shadow-[0_4px_20px_rgba(0,0,0,0.25)] transition-all duration-300 cursor-pointer active:scale-[0.98]"
            aria-label="Shop Tulsi Mala T01 Now"
          >
            SHOP NOW
          </button>
        </div>

      </div>
    </section>
  );
}
