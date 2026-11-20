"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Plus, Minus } from "lucide-react";

const FAQ_ITEMS = [
  {
    id: "faq-1",
    question: "Do you offer international shipping?",
    answer:
      "Yes, we ship our authentic Vrindavan Tulsi malas and sacred artifacts worldwide with fully insured express international shipping and complete customs clearance documentation.",
  },
  {
    id: "faq-2",
    question: "Do you offer personalized messages for special times?",
    answer:
      "Yes, we offer complimentary hand-inscribed sacred gift notes and sanctified gift packaging for auspicious occasions, festivals, initiation ceremonies (Diksha), and personal milestones.",
  },
  {
    id: "faq-3",
    question: "Do you offer customization options for jewelry?",
    answer:
      "Yes, we provide custom sizing, bead counts (such as 27, 54, or 108 beads), choice of antique silver or brass devotional pendants, and specific sacred knotting upon request.",
  },
  {
    id: "faq-4",
    question: "What payment methods do you accept?",
    answer:
      "We accept all major domestic and international Credit/Debit cards (Visa, MasterCard, American Express), UPI (Google Pay, PhonePe, Paytm), Net Banking, and secure Cash on Delivery (COD) across India.",
  },
];

interface TulsiFaqAndProvenanceProps {
  productPrice?: number;
  productSku?: string;
  onAcquireClick?: () => void;
}

export function TulsiFaqAndProvenance({
  productPrice = 399,
  productSku = "T01",
  onAcquireClick,
}: TulsiFaqAndProvenanceProps) {
  const [openFaqId, setOpenFaqId] = useState<string | null>("faq-1");

  const toggleFaq = (id: string) => {
    setOpenFaqId((prev) => (prev === id ? null : id));
  };

  return (
    <div className="w-full bg-[#FAF8F5]">
      {/* ========================================================================= */}
      {/* SECTION 1: FREQUENTLY ASKED QUESTIONS (Matching Image 1 Reference)        */}
      {/* ========================================================================= */}
      <section id="faq-section" className="w-full py-16 sm:py-24 bg-[#FAF8F5]">
        <div className="max-w-[960px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white p-8 sm:p-12 lg:p-16 border border-[#E8E2D5] shadow-xs space-y-8">
            {/* Title */}
            <div className="text-center">
              <h2
                className="text-2xl sm:text-3xl lg:text-4xl font-normal text-[#122E46]"
                style={{ fontFamily: "var(--font-serif), 'Playfair Display', Georgia, serif" }}
              >
                Frequently Asked Questions
              </h2>
            </div>

            {/* 4 Boxed FAQ Accordions matching Image 1 */}
            <div className="space-y-3.5">
              {FAQ_ITEMS.map((item) => {
                const isOpen = openFaqId === item.id;
                return (
                  <div
                    key={item.id}
                    className="border border-[#E5DEC8] bg-white transition-colors"
                  >
                    <button
                      type="button"
                      onClick={() => toggleFaq(item.id)}
                      className="w-full px-5 py-4 flex items-center gap-4 text-left cursor-pointer hover:bg-[#FAF8F5]/80 transition-colors"
                      aria-expanded={isOpen}
                    >
                      <span className="text-[#C5A880] flex items-center justify-center w-4 h-4 shrink-0 font-light text-lg">
                        {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                      </span>
                      <span className="font-sans text-xs sm:text-sm font-medium text-[#122E46] leading-snug">
                        {item.question}
                      </span>
                    </button>

                    {isOpen && (
                      <div className="px-5 pb-5 pl-13 pt-1 text-xs sm:text-sm font-sans text-stone-600 leading-relaxed border-t border-[#E5DEC8]/50">
                        {item.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 2: THE FOUR PILLARS OF TULSI SACRED ORIGIN                        */}
      {/* ========================================================================= */}
      <section id="authenticity" className="w-full py-16 sm:py-24 bg-[#FAF8F5]">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto space-y-2 mb-10">
            <h2
              className="text-2xl sm:text-3xl font-normal text-[#122E46]"
              style={{ fontFamily: "var(--font-serif), 'Playfair Display', Georgia, serif" }}
            >
              The Four Pillars of Tulsi Sacred Origin
            </h2>
            <p className="text-xs sm:text-sm text-stone-600 font-sans">
              Commitment to botanical purity, sacred lineage, and certification.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Pillar 1 */}
            <div className="p-6 bg-white border border-[#E8E2D5] space-y-2.5 shadow-2xs hover:border-[#C5A880] transition-colors">
              <h3 className="font-serif text-base font-semibold text-[#122E46]">
                100% Natural Tulsi Wood
              </h3>
              <p className="text-xs text-stone-600 font-sans leading-relaxed">
                Carved from sacred holy basil heartwood. 100% pure and untreated.
              </p>
            </div>

            {/* Pillar 2 */}
            <div className="p-6 bg-white border border-[#E8E2D5] space-y-2.5 shadow-2xs hover:border-[#C5A880] transition-colors">
              <h3 className="font-serif text-base font-semibold text-[#122E46]">
                Origin: Vrindavan, Braj
              </h3>
              <p className="text-xs text-stone-600 font-sans leading-relaxed">
                Sourced from holy Braj Dham, hand-turned by generational artisans.
              </p>
            </div>

            {/* Pillar 3 */}
            <div className="p-6 bg-white border border-[#E8E2D5] space-y-2.5 shadow-2xs hover:border-[#C5A880] transition-colors">
              <h3 className="font-serif text-base font-semibold text-[#122E46]">
                Associated Deity: Shri Krishna
              </h3>
              <p className="text-xs text-stone-600 font-sans leading-relaxed">
                Consecrated with devotion to Shri Krishna for daily sadhana.
              </p>
            </div>

            {/* Pillar 4 */}
            <div className="p-6 bg-white border border-[#E8E2D5] space-y-2.5 shadow-2xs hover:border-[#C5A880] transition-colors">
              <h3 className="font-serif text-base font-semibold text-[#122E46]">
                Authenticity Lab Certificate
              </h3>
              <p className="text-xs text-stone-600 font-sans leading-relaxed">
                Includes physical lab certificate verifying wood density and purity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 3: EDITORIAL BANNER: ROOTED IN SOURCE (Matching Image 2 Reference)*/}
      {/* ========================================================================= */}
      <section className="w-full py-14 sm:py-20 bg-[#FAF8F5]">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
          {onAcquireClick ? (
            <div
              onClick={onAcquireClick}
              className="group relative overflow-hidden bg-stone-900 text-[#FAF8F5] min-h-[380px] sm:min-h-[440px] flex items-center justify-end border border-[#E8E2D5] cursor-pointer"
            >
              <Image
                src="/images/products/tulsi/t01_model_wear.jpg"
                alt="Devotee wearing genuine Vrindavan Tulsi Kanthi Mala"
                fill
                className="object-cover object-left sm:object-[22%_35%] group-hover:scale-105 transition-transform duration-700 ease-out"
                sizes="(max-width: 1024px) 100vw, 1240px"
              />
              {/* Directional vignette preserving collarbone wear on left, contrast on right */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/25 via-black/50 to-black/85 z-1 pointer-events-none" />

              {/* Bottom Left "COLLECTION" Tag (Matching Image 2) */}
              <div className="absolute bottom-6 sm:bottom-8 left-6 sm:left-10 z-10 text-[10px] sm:text-[11px] font-mono uppercase tracking-[0.28em] text-white/80 select-none">
                COLLECTION
              </div>

              {/* Right Aligned Editorial Content (Matching Image 2) */}
              <div className="relative z-10 p-6 sm:p-10 lg:p-14 max-w-md sm:max-w-lg lg:max-w-xl space-y-3 sm:space-y-4 text-left mr-0 sm:mr-4 lg:mr-8">
                <h3
                  className="text-2xl sm:text-3xl lg:text-4xl font-normal leading-tight text-white tracking-tight"
                  style={{ fontFamily: "var(--font-serif), 'Playfair Display', Georgia, serif" }}
                >
                  Rooted in Source.
                  <br />
                  Honored by Hand.
                </h3>
                <p className="text-xs sm:text-sm text-stone-200/90 font-sans leading-relaxed">
                  Handcrafted genuine Vrindavan Tulsi, preserving sacred purity and daily devotional grace.
                </p>
                <div className="pt-2 sm:pt-3">
                  <span className="inline-block border border-white text-white text-[11px] font-mono tracking-[0.24em] uppercase px-6 py-2.5 transition-all duration-300 group-hover:bg-white group-hover:text-black">
                    SHOP NOW
                  </span>
                </div>
              </div>
            </div>
          ) : (
            <Link
              href={`/products/tulsi/${productSku.toLowerCase()}`}
              className="group relative block overflow-hidden bg-stone-900 text-[#FAF8F5] min-h-[380px] sm:min-h-[440px] border border-[#E8E2D5] cursor-pointer"
            >
              <div className="w-full h-full min-h-[380px] sm:min-h-[440px] flex items-center justify-end">
                <Image
                  src="/images/products/tulsi/t01_model_wear.jpg"
                  alt="Devotee wearing genuine Vrindavan Tulsi Kanthi Mala"
                  fill
                  className="object-cover object-left sm:object-[22%_35%] group-hover:scale-105 transition-transform duration-700 ease-out"
                  sizes="(max-width: 1024px) 100vw, 1240px"
                />
                {/* Directional vignette preserving collarbone wear on left, contrast on right */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/25 via-black/50 to-black/85 z-1 pointer-events-none" />

                {/* Bottom Left "COLLECTION" Tag (Matching Image 2) */}
                <div className="absolute bottom-6 sm:bottom-8 left-6 sm:left-10 z-10 text-[10px] sm:text-[11px] font-mono uppercase tracking-[0.28em] text-white/80 select-none">
                  COLLECTION
                </div>

                {/* Right Aligned Editorial Content (Matching Image 2) */}
                <div className="relative z-10 p-6 sm:p-10 lg:p-14 max-w-md sm:max-w-lg lg:max-w-xl space-y-3 sm:space-y-4 text-left mr-0 sm:mr-4 lg:mr-8">
                  <h3
                    className="text-2xl sm:text-3xl lg:text-4xl font-normal leading-tight text-white tracking-tight"
                    style={{ fontFamily: "var(--font-serif), 'Playfair Display', Georgia, serif" }}
                  >
                    Rooted in Source.
                    <br />
                    Honored by Hand.
                  </h3>
                  <p className="text-xs sm:text-sm text-stone-200/90 font-sans leading-relaxed">
                    Handcrafted genuine Vrindavan Tulsi, preserving sacred purity and daily devotional grace.
                  </p>
                  <div className="pt-2 sm:pt-3">
                    <span className="inline-block border border-white text-white text-[11px] font-mono tracking-[0.24em] uppercase px-6 py-2.5 transition-all duration-300 group-hover:bg-white group-hover:text-black">
                      SHOP NOW
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          )}
        </div>
      </section>
    </div>
  );
}
