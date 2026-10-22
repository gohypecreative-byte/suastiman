"use client";

import React from "react";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CartDrawer } from "@/components/cart/CartDrawer";
import { BottomNav } from "@/components/layout/BottomNav";
import { CartProvider } from "@/context/CartContext";

export default function TermsOfReverencePage() {
  return (
    <CartProvider>
      <div className="min-h-screen flex flex-col bg-[#FAF8F5] text-[#1A1815]">
        {/* Navigation Bar */}
        <Navbar />

        <main className="flex-1">
          {/* Top Banner - Warm Sand/Beige Header without any logo, writing simple and clear title */}
          <section className="w-full bg-[#F2E6D4] border-b border-[#E3D6C1] py-14 sm:py-20 md:py-24 px-4 text-center">
            <div className="max-w-4xl mx-auto">
              <h1 className="font-serif text-3xl sm:text-4xl md:text-[44px] text-[#1A1815] font-normal tracking-tight">
                Terms of Reverence
              </h1>
            </div>
          </section>

          {/* Main Content Area - Clean, focused reading column */}
          <article className="max-w-3xl mx-auto px-6 sm:px-8 lg:px-10 py-14 sm:py-20 md:py-24 space-y-10 sm:space-y-12">
            {/* Opening Statement */}
            <p className="text-sm sm:text-base text-stone-700 leading-relaxed font-light">
              By accessing svastiman.com, you agree to these Terms of Reverence.
              Svastimān is a house of authentic Indian sacred materials, unheated
              earth gemstones, wild Himalayan Rudraksha, and Vrindavan Tulsi wood.
              Rooted in source and honored by hand, our creations and knowledge archives
              are shared for personal grounding, meditation, and devotional reverence —
              we make zero medical, magical, or fear-based claims.
            </p>

            {/* Brand Philosophy and Zero Fear-Based Claims */}
            <section className="space-y-3">
              <h2 className="font-serif text-xl sm:text-2xl text-[#1A1815] font-normal tracking-normal">
                Our philosophy and zero fear-based claims
              </h2>
              <div className="text-sm sm:text-base text-stone-700 leading-relaxed font-light space-y-2">
                <p>
                  Before it was a mala, it was a fruit — nature precedes ritual. Svastimān
                  stands firmly against fear-based marketing, commercial exploitation of faith,
                  and misleading astrological promises of &ldquo;instant luck&rdquo; or supernatural
                  cures.
                </p>
                <p>
                  We believe ancient Indian traditions should be expressed through modern,
                  refined design and transparent knowledge. Our pieces are crafted to inspire
                  tactile mindfulness and authentic cultural connection, not superstition.
                </p>
              </div>
            </section>

            {/* Sacred Materials and Authenticity Charter */}
            <section className="space-y-3">
              <h2 className="font-serif text-xl sm:text-2xl text-[#1A1815] font-normal tracking-normal">
                Authenticity charter and sacred provenance
              </h2>
              <div className="text-sm sm:text-base text-stone-700 leading-relaxed font-light space-y-2">
                <p>
                  We guarantee the absolute physical, botanical, and mineral authenticity of
                  every creation. We source directly from traceable sacred geographies:
                </p>
                <ul className="list-disc pl-5 space-y-1.5 text-stone-700">
                  <li>
                    <strong className="font-medium text-[#1A1815]">Wild Himalayan Rudraksha:</strong> Harvested
                    at high altitudes in eastern Nepal (2,000m+). Washed in running spring water with gentle brushes,
                    density-tested in cold water, and 100% verified for intact internal mukhi chambers via
                    digital radiography (X-ray). Zero acid wash, zero synthetic glue, and zero artificial locule carving.
                  </li>
                  <li>
                    <strong className="font-medium text-[#1A1815]">Vrindavan Sacred Tulsi Wood:</strong> Turned
                    solely from seasoned, naturally fallen holy basil branches from sacred groves in Braj soil.
                    Shaped bead-by-bead on foot-powered lathes and buffed with unbleached beeswax. Zero toxic chemical varnishes.
                  </li>
                  <li>
                    <strong className="font-medium text-[#1A1815]">Untreated Earth Gemstones:</strong> Cut on
                    water-cooled wheels by Jaipur heritage lapidaries. 100% natural and unheated, verified through
                    mineralogical analysis (thermal conductivity, specific gravity, and natural inclusions). Zero synthetic glass or irradiated dyes.
                  </li>
                  <li>
                    <strong className="font-medium text-[#1A1815]">Traditional Craftsmanship:</strong> Hand-strung
                    and individually knotted with authentic Brahmagranthi knots on pure unbleached cotton or raw silk,
                    consecrated with pure cold-pressed sesame and sandalwood oils.
                  </li>
                </ul>
              </div>
            </section>

            {/* Orders and Seasonal Harvest Allocation */}
            <section className="space-y-3">
              <h2 className="font-serif text-xl sm:text-2xl text-[#1A1815] font-normal tracking-normal">
                Orders and seasonal harvest allocation
              </h2>
              <div className="text-sm sm:text-base text-stone-700 leading-relaxed font-light space-y-2">
                <p>
                  Because our sacred materials depend on natural botanical harvest cycles and artisan
                  hand-turning capacity rather than industrial assembly lines, seasonal availability
                  and yield-based pricing are subject to natural variation without notice.
                </p>
                <p>
                  We reserve the right to decline or cancel orders suspected of commercial scalping,
                  unauthorized bulk resale, or fraudulent transaction attempts, in order to preserve
                  equitable access for individual practitioners.
                </p>
              </div>
            </section>

            {/* Natural Variations and Craft */}
            <section className="space-y-3">
              <h2 className="font-serif text-xl sm:text-2xl text-[#1A1815] font-normal tracking-normal">
                Natural variations and craft
              </h2>
              <p className="text-sm sm:text-base text-stone-700 leading-relaxed font-light">
                Because no two seeds, heartwood burls, or earth crystals formed by nature are
                identical, subtle variations in seed contours, locule ridges, wood grain depth,
                color tonality, and microscopic internal mineral inclusions are natural hallmarks
                of authenticity, not defects. We celebrate these organic signatures of the living earth.
              </p>
            </section>

            {/* Educational Calculators and Traditional Tools */}
            <section className="space-y-3">
              <h2 className="font-serif text-xl sm:text-2xl text-[#1A1815] font-normal tracking-normal">
                Educational calculators and knowledge tools
              </h2>
              <p className="text-sm sm:text-base text-stone-700 leading-relaxed font-light">
                Interactive features on our website — including the Profession Crystal Mapping Calculator,
                Energy Finder, and botanical research monographs — are offered exclusively for cultural
                education, contemplative inquiry, and personal alignment. They are not intended as, and
                must never replace, qualified medical, psychological, psychiatric, or financial counsel.
              </p>
            </section>

            {/* Intellectual Property and Archival Content */}
            <section className="space-y-3">
              <h2 className="font-serif text-xl sm:text-2xl text-[#1A1815] font-normal tracking-normal">
                Intellectual property
              </h2>
              <p className="text-sm sm:text-base text-stone-700 leading-relaxed font-light">
                All intellectual property on svastiman.com — including botanical research monographs,
                radiographic locule imagery, macro photography, artisan film documentation, proprietary
                calculator logic, typography, and brand marks — is the exclusive property of Svastimān
                Heritage Private Limited. Reproduction, extraction, or commercial utilization without prior
                written permission is strictly prohibited.
              </p>
            </section>

            {/* User Responsibilities and Website Usage */}
            <section className="space-y-3">
              <h2 className="font-serif text-xl sm:text-2xl text-[#1A1815] font-normal tracking-normal">
                User responsibilities and website usage
              </h2>
              <div className="text-sm sm:text-base text-stone-700 leading-relaxed font-light space-y-2">
                <p>
                  You agree to use svastiman.com only for lawful, personal, and respectful purposes.
                  Automated crawling, unauthorized API access, scraping of pricing or provenance registries,
                  and transmission of malicious software are strictly prohibited.
                </p>
                <p>
                  When entering information for custom consecration, birth-chart calculation tools, or order
                  dispatch, you warrant that all submitted details are accurate, lawful, and complete.
                </p>
              </div>
            </section>

            {/* Pricing and Secure Payment Terms */}
            <section className="space-y-3">
              <h2 className="font-serif text-xl sm:text-2xl text-[#1A1815] font-normal tracking-normal">
                Payment and pricing
              </h2>
              <p className="text-sm sm:text-base text-stone-700 leading-relaxed font-light">
                All prices are denominated in Indian Rupees (INR) and are inclusive of applicable statutory
                taxes (GST). Transactions are processed through encrypted, RBI-compliant payment gateways.
                Svastimān never stores or accesses your complete card credentials, CVVs, or banking credentials.
                In the rare instance of an obvious typographical or technical pricing error, Svastimān reserves
                the right to cancel the order and provide an immediate full refund.
              </p>
            </section>

            {/* Insured Transit and Doorstep Deliveries */}
            <section className="space-y-3">
              <h2 className="font-serif text-xl sm:text-2xl text-[#1A1815] font-normal tracking-normal">
                Insured transit and deliveries
              </h2>
              <p className="text-sm sm:text-base text-stone-700 leading-relaxed font-light">
                Every sacred acquisition is dispatched via insured, premier courier partners in sealed,
                tamper-evident packaging accompanied by its authenticity credentials. Responsibility for
                transit passes to the recipient upon delivery verification. If a parcel appears damaged
                or tampered with upon receipt, please document the unboxing and alert our concierge within
                48 hours for immediate assistance.
              </p>
            </section>

            {/* Living Care Commitment */}
            <section className="space-y-3">
              <h2 className="font-serif text-xl sm:text-2xl text-[#1A1815] font-normal tracking-normal">
                Living care commitment
              </h2>
              <p className="text-sm sm:text-base text-stone-700 leading-relaxed font-light">
                Sacred botanical endocarps and natural woods are living materials that breathe. We provide
                each patron with traditional care monographs and pure sandalwood oil guidance. To preserve
                your piece, avoid boiling in water, chemical detergents, petroleum sprays, or synthetic dyes.
                Our concierge remains available throughout the lifetime of your piece to advise on re-knotting
                and traditional maintenance.
              </p>
            </section>

            {/* Governing Law and Limitation of Liability */}
            <section className="space-y-3">
              <h2 className="font-serif text-xl sm:text-2xl text-[#1A1815] font-normal tracking-normal">
                Governing law and limitation of liability
              </h2>
              <p className="text-sm sm:text-base text-stone-700 leading-relaxed font-light">
                Svastimān Heritage Private Limited shall not be liable for any indirect, incidental, or
                consequential damages arising from the use or handling of our materials. These Terms of
                Reverence are governed by the laws of India, and any legal disputes shall be subject to the
                exclusive jurisdiction of the courts in India.
              </p>
            </section>

            {/* Reverence and Inquiries */}
            <section className="space-y-3 pt-4 border-t border-[#EAE3D5]">
              <h2 className="font-serif text-xl sm:text-2xl text-[#1A1815] font-normal tracking-normal">
                Reverence and inquiries
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
