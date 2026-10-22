"use client";

import React from "react";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CartDrawer } from "@/components/cart/CartDrawer";
import { BottomNav } from "@/components/layout/BottomNav";
import { CartProvider } from "@/context/CartContext";

export default function AuthenticityCharterPage() {
  return (
    <CartProvider>
      <div className="min-h-screen flex flex-col bg-[#FAF8F5] text-[#1A1815]">
        {/* Navigation Bar */}
        <Navbar />

        <main className="flex-1">
          {/* Top Banner - Warm Sand/Beige Header without any logo */}
          <section className="w-full bg-[#F2E6D4] border-b border-[#E3D6C1] py-14 sm:py-20 md:py-24 px-4 text-center">
            <div className="max-w-4xl mx-auto">
              <h1 className="font-serif text-3xl sm:text-4xl md:text-[44px] text-[#1A1815] font-normal tracking-tight">
                Authenticity Charter
              </h1>
            </div>
          </section>

          {/* Main Content Area - Clean, focused reading column */}
          <article className="max-w-3xl mx-auto px-6 sm:px-8 lg:px-10 py-14 sm:py-20 md:py-24 space-y-10 sm:space-y-12">
            {/* Opening Manifesto */}
            <p className="text-sm sm:text-base text-stone-700 leading-relaxed font-light">
              At Svastimān, authenticity is not a marketing term — it is our primary
              duty to Indian heritage. Before it was a mala, it was a fruit: nature
              precedes ritual. We stand as a dedicated house of unadulterated sacred
              materials, unheated earth gemstones, wild Himalayan Rudraksha, and
              Vrindavan Tulsi wood. Rooted in source and honored by hand, we guarantee
              uncompromising purity, traditional craftsmanship, and verifiable origin.
            </p>

            {/* Our Philosophy and What We Stand Against */}
            <section className="space-y-3">
              <h2 className="font-serif text-xl sm:text-2xl text-[#1A1815] font-normal tracking-normal">
                What we honor and what we stand against
              </h2>
              <div className="text-sm sm:text-base text-stone-700 leading-relaxed font-light space-y-2">
                <p>
                  Too much of today&apos;s spiritual marketplace relies on fear,
                  fabricated astrological guarantees of &ldquo;instant luck&rdquo;, and
                  synthetic plastics masquerading as sacred gemstones. Svastimān begins
                  at the origin: the mountain, the sacred river, the ancient forest tree,
                  and the quiet hands of generational artisans.
                </p>
                <p>
                  <strong className="font-medium text-[#1A1815]">What we honor:</strong> Transparent
                  origin provenance, scientific non-destructive testing, traditional
                  Brahmagranthi hand-knotting, and respectful cultural education.
                </p>
                <p>
                  <strong className="font-medium text-[#1A1815]">What we stand firmly against:</strong> Fear-based
                  selling, commercial exploitation of faith, synthetic glass crystals,
                  plastic imitation beads, chemical dyes, toxic varnishes, and artificial
                  heat treatments.
                </p>
              </div>
            </section>

            {/* Wild Himalayan Rudraksha */}
            <section className="space-y-3">
              <h2 className="font-serif text-xl sm:text-2xl text-[#1A1815] font-normal tracking-normal">
                Wild Himalayan Rudraksha provenance
              </h2>
              <div className="text-sm sm:text-base text-stone-700 leading-relaxed font-light space-y-2">
                <p>
                  Botanically, the sacred Rudraksha bead is not wood — it is the stone-like
                  endocarp of the fruit of the <span className="italic">Elaeocarpus ganitrus</span> tree,
                  wild-harvested at 2,000 to 3,000 meters in eastern Nepal (Taplejung valleys).
                </p>
                <ul className="list-disc pl-5 space-y-1.5 text-stone-700">
                  <li>
                    <strong className="font-medium text-[#1A1815]">Natural Spring Cleaning:</strong> Washed
                    solely in running Himalayan spring water, removing the blue botanical peel
                    with gentle hand brushes. Zero chemical acids or bleaching agents.
                  </li>
                  <li>
                    <strong className="font-medium text-[#1A1815]">Flotation Density Sorting:</strong> Hand-tested
                    in cold water for natural sinking density, filtering out underdeveloped or hollow seeds.
                  </li>
                  <li>
                    <strong className="font-medium text-[#1A1815]">100% Digital Radiography Testing:</strong> Every
                    single Rudraksha undergoes non-destructive X-ray radiography to verify the internal
                    mukhi locules and cellular seed chambers. We strictly reject artificially glued,
                    carved, or synthetically manufactured beads.
                  </li>
                </ul>
              </div>
            </section>

            {/* Sacred Vrindavan Tulsi Wood */}
            <section className="space-y-3">
              <h2 className="font-serif text-xl sm:text-2xl text-[#1A1815] font-normal tracking-normal">
                Sacred Vrindavan Tulsi wood
              </h2>
              <div className="text-sm sm:text-base text-stone-700 leading-relaxed font-light space-y-2">
                <p>
                  Our sacred Tulsi (<span className="italic">Ocimum sanctum</span>) beads are turned
                  solely from seasoned, naturally fallen holy basil heartwood sourced ethically from
                  consecrated groves rooted in sacred Braj soil.
                </p>
                <ul className="list-disc pl-5 space-y-1.5 text-stone-700">
                  <li>
                    <strong className="font-medium text-[#1A1815]">Foot-Powered Lathe Turning:</strong> Seasoned
                    branches are shaped bead-by-bead on manual foot-powered artisan lathes, preserving
                    the natural fibrous grain and spiritual vibration of the sacred plant.
                  </li>
                  <li>
                    <strong className="font-medium text-[#1A1815]">Zero Toxic Varnish:</strong> We reject
                    polyurethane gloss and synthetic sealants. Every bead is buffed naturally with raw
                    unbleached beeswax and cured in pure cold-pressed sesame and sandalwood oils,
                    allowing the sacred wood to breathe.
                  </li>
                </ul>
              </div>
            </section>

            {/* Untreated Earth Gemstones */}
            <section className="space-y-3">
              <h2 className="font-serif text-xl sm:text-2xl text-[#1A1815] font-normal tracking-normal">
                Untreated earth gemstones
              </h2>
              <div className="text-sm sm:text-base text-stone-700 leading-relaxed font-light space-y-2">
                <p>
                  In ancient lapidary tradition, gemstones are crystallographic records of the earth.
                  We work exclusively with unheated, untreated natural earth stones cut by generational
                  Jaipur heritage craftsmen.
                </p>
                <ul className="list-disc pl-5 space-y-1.5 text-stone-700">
                  <li>
                    <strong className="font-medium text-[#1A1815]">Water-Wheel Lapidary:</strong> Raw earth
                    stones are sliced and shaped on continuous water-cooled wheels, preventing thermal
                    shock and preserving their natural crystalline lattice.
                  </li>
                  <li>
                    <strong className="font-medium text-[#1A1815]">Mineralogical Lab Verification:</strong> Every
                    gemstone batch is verified through refractometry, thermal conductivity, specific gravity,
                    and microscopic natural inclusion testing. Strictly zero glass-filling, zero cobalt irradiation,
                    and zero chemical surface dyeing.
                  </li>
                </ul>
              </div>
            </section>

            {/* Traditional Brahmagranthi Knotting and Sacred Consecration */}
            <section className="space-y-3">
              <h2 className="font-serif text-xl sm:text-2xl text-[#1A1815] font-normal tracking-normal">
                Brahmagranthi knotting and ritual consecration
              </h2>
              <div className="text-sm sm:text-base text-stone-700 leading-relaxed font-light space-y-2">
                <p>
                  True sacred malas require time-honored artisanal precision. Every Japa Mala and
                  sacred bracelet is hand-strung and individually knotted with traditional
                  Brahmagranthi knots on pure unbleached cotton or raw silk cord.
                </p>
                <p>
                  This intentional knotting prevents bead-to-bead friction, protects the seeds from
                  chipping during mindful japa, and maintains traditional Guru bead (Sumeru) alignment.
                  Before dispatch, each piece is sanctified with pure cold-pressed Himalayan sesame and
                  Mysore sandalwood oils, and ritually energized through traditional Vedic mantras
                  (<span className="italic">prana pratishtha</span>) by our resident priests.
                </p>
              </div>
            </section>

            {/* Individual Laboratory Documentation */}
            <section className="space-y-3">
              <h2 className="font-serif text-xl sm:text-2xl text-[#1A1815] font-normal tracking-normal">
                Visible provenance and laboratory certificates
              </h2>
              <p className="text-sm sm:text-base text-stone-700 leading-relaxed font-light">
                Trust should be visible, not assumed. Every sacred piece you receive is accompanied
                by physical laboratory documentation and an individual provenance certificate card
                detailing its botanical or mineralogical origin, radiographic chamber verification,
                and artisan batch records.
              </p>
            </section>

            {/* Living Care and Lifetime Guidance */}
            <section className="space-y-3">
              <h2 className="font-serif text-xl sm:text-2xl text-[#1A1815] font-normal tracking-normal">
                Living care commitment
              </h2>
              <p className="text-sm sm:text-base text-stone-700 leading-relaxed font-light">
                Our covenant does not end at delivery. Natural sacred materials breathe and evolve
                with touch and time. We provide lifetime care monographs, sandalwood oil replenishment
                guidance, and traditional re-knotting counsel to ensure your piece remains an unbroken
                heirloom of mindful reverence.
              </p>
            </section>

            {/* Concierge and Inquiries */}
            <section className="space-y-3 pt-4 border-t border-[#EAE3D5]">
              <h2 className="font-serif text-xl sm:text-2xl text-[#1A1815] font-normal tracking-normal">
                Provenance inquiries and contact
              </h2>
              <div className="text-sm sm:text-base text-stone-700 leading-relaxed font-light space-y-1.5">
                <p className="font-medium text-[#1A1815]">
                  Svastimān Heritage Private Limited
                </p>
                <p>Himalayan Cloud Belts and Vrindavan Groves, India</p>
                <p>
                  Concierge Inquiries:{" "}
                  <a
                    href="mailto:concierge@svastiman.com"
                    className="text-[#122E46] underline underline-offset-2 hover:text-[#8C6D46] transition-colors font-medium"
                  >
                    concierge@svastiman.com
                  </a>{" "}
                  or{" "}
                  <a
                    href="mailto:namaste@svastiman.com"
                    className="text-[#122E46] underline underline-offset-2 hover:text-[#8C6D46] transition-colors font-medium"
                  >
                    namaste@svastiman.com
                  </a>
                </p>
                <p className="text-xs text-stone-500 pt-2">
                  Last updated: October 2026
                </p>
              </div>
            </section>
          </article>
        </main>

        {/* Global Footer */}
        <Footer />

        {/* Global Cart Slideout Drawer */}
        <CartDrawer />

        {/* Mobile Sticky Bottom Navigation */}
        <BottomNav />
      </div>
    </CartProvider>
  );
}
