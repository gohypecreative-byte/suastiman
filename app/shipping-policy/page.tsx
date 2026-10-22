"use client";

import React from "react";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CartDrawer } from "@/components/cart/CartDrawer";
import { BottomNav } from "@/components/layout/BottomNav";
import { CartProvider } from "@/context/CartContext";

export default function ShippingPolicyPage() {
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
                Shipping Policy
              </h1>
            </div>
          </section>

          {/* Main Content Area - Clean, focused reading column */}
          <article className="max-w-3xl mx-auto px-6 sm:px-8 lg:px-10 py-14 sm:py-20 md:py-24 space-y-10 sm:space-y-12">
            {/* Opening Statement */}
            <p className="text-sm sm:text-base text-stone-700 leading-relaxed font-light">
              Every sacred acquisition from Svastimān — wild Himalayan Rudraksha,
              sacred Vrindavan Tulsi wood, unheated earth gemstones, and consecrated
              malas — is treated with deep reverence from our sanctuary to your
              doorstep. We use insured, tamper-evident packaging to safeguard both
              the physical purity and sacred energy of your piece during transit.
            </p>

            {/* Order Processing and Ritual Consecration */}
            <section className="space-y-3">
              <h2 className="font-serif text-xl sm:text-2xl text-[#1A1815] font-normal tracking-normal">
                Order processing and ritual consecration
              </h2>
              <div className="text-sm sm:text-base text-stone-700 leading-relaxed font-light space-y-2">
                <p>
                  Orders are typically processed and dispatched within 2 to 3
                  business days following order confirmation.
                </p>
                <p>
                  Unlike mass-produced jewelry, each Svastimān piece is individually
                  inspected, paired with its laboratory provenance documentation,
                  and ritually cleansed and energized by our Vedic priests before
                  shipping. Custom knotting with Brahmagranthi knots or tailored
                  Sumeru alignment may require an additional day to ensure perfect
                  craftsmanship.
                </p>
              </div>
            </section>

            {/* Delivery Timelines Across India */}
            <section className="space-y-3">
              <h2 className="font-serif text-xl sm:text-2xl text-[#1A1815] font-normal tracking-normal">
                Delivery timelines across India
              </h2>
              <div className="text-sm sm:text-base text-stone-700 leading-relaxed font-light space-y-2">
                <p>
                  Once dispatched from our sanctuary, standard delivery across India
                  generally takes 4 to 7 business days, depending on your geographic
                  location:
                </p>
                <ul className="list-disc pl-5 space-y-1.5 text-stone-700">
                  <li>
                    <strong className="font-medium text-[#1A1815]">Metro Cities</strong> (Delhi NCR, Mumbai, Bengaluru, Hyderabad, Chennai, Kolkata, Pune): 3 to 5 business days.
                  </li>
                  <li>
                    <strong className="font-medium text-[#1A1815]">Tier 2 and Tier 3 Cities:</strong> 4 to 6 business days.
                  </li>
                  <li>
                    <strong className="font-medium text-[#1A1815]">Regional and Rural Locations:</strong> 5 to 7 business days.
                  </li>
                  <li>
                    <strong className="font-medium text-[#1A1815]">Remote and High-Altitude Zones</strong> (such as parts of Jammu and Kashmir, Himachal Pradesh, Uttarakhand, Northeast states, and island territories): 7 to 10 business days.
                  </li>
                </ul>
              </div>
            </section>

            {/* Shipping Charges and Free Delivery */}
            <section className="space-y-3">
              <h2 className="font-serif text-xl sm:text-2xl text-[#1A1815] font-normal tracking-normal">
                Shipping charges
              </h2>
              <div className="text-sm sm:text-base text-stone-700 leading-relaxed font-light space-y-2">
                <p>
                  We offer <strong className="font-medium text-[#1A1815]">complimentary insured shipping</strong> on all orders of ₹1999 and above across India.
                </p>
                <p>
                  For orders below ₹1999, a nominal standard shipping fee is calculated
                  and displayed transparently during checkout before you make payment.
                  There are no hidden handling surcharges or surprise fees upon delivery.
                </p>
              </div>
            </section>

            {/* Shipping Methods and Insured Packaging */}
            <section className="space-y-3">
              <h2 className="font-serif text-xl sm:text-2xl text-[#1A1815] font-normal tracking-normal">
                Shipping methods and insured packaging
              </h2>
              <div className="text-sm sm:text-base text-stone-700 leading-relaxed font-light space-y-2">
                <p>
                  We partner with India&apos;s most reliable, high-security courier
                  services, including BlueDart, Delhivery, and India Post Speed Post,
                  to ensure your sacred parcel receives prioritized and secure handling.
                </p>
                <p>
                  Every consignment is protected by full transit insurance against
                  accidental damage or loss, and enclosed in tamper-evident sealed
                  boxes with consecrated inner linings and laboratory provenance certificates.
                </p>
              </div>
            </section>

            {/* Tracking Your Order */}
            <section className="space-y-3">
              <h2 className="font-serif text-xl sm:text-2xl text-[#1A1815] font-normal tracking-normal">
                Order tracking
              </h2>
              <div className="text-sm sm:text-base text-stone-700 leading-relaxed font-light space-y-2">
                <p>
                  As soon as your order has been consecrated and handed over to our
                  logistics partner, you will receive an automated dispatch confirmation
                  via email and SMS containing your Air Waybill (AWB) number and a direct
                  tracking link.
                </p>
                <p>
                  You can track the transit progress of your parcel at any time from
                  our courier partner&apos;s portal or by logging into your{" "}
                  <Link
                    href="/account"
                    className="text-[#122E46] underline underline-offset-2 hover:text-[#8C6D46] transition-colors font-medium"
                  >
                    Svastimān Account
                  </Link>
                  .
                </p>
              </div>
            </section>

            {/* Delays and Force Majeure */}
            <section className="space-y-3">
              <h2 className="font-serif text-xl sm:text-2xl text-[#1A1815] font-normal tracking-normal">
                Transit delays
              </h2>
              <p className="text-sm sm:text-base text-stone-700 leading-relaxed font-light">
                While over 95% of our shipments arrive on or ahead of schedule, occasional
                delays may occur due to severe weather disruptions, regional transport
                strikes, national holidays, or peak festive logistics surges. Should your
                order face an unexpected delay beyond 7 business days, our concierge
                team proactively monitors the consignment with the courier hub to expedite
                delivery and keeps you updated.
              </p>
            </section>

            {/* Damaged, Tampered, or Missing Products */}
            <section className="space-y-3">
              <h2 className="font-serif text-xl sm:text-2xl text-[#1A1815] font-normal tracking-normal">
                Damaged, tampered, or missing products
              </h2>
              <div className="text-sm sm:text-base text-stone-700 leading-relaxed font-light space-y-2">
                <p>
                  Due to the sacred and energized nature of our spiritual materials,
                  we accept returns or replacement requests solely for items damaged in
                  transit or physically defective, reported within 48 hours of delivery.
                </p>
                <p>
                  <strong className="font-medium text-[#1A1815]">Inspect before accepting:</strong> If the outer package shows clear signs of tampering, unsealing, or deep tears upon delivery, please decline the delivery or record an unboxing video before opening.
                </p>
                <p>
                  <strong className="font-medium text-[#1A1815]">How to file a claim:</strong> Within 48 hours of delivery, write to our concierge at{" "}
                  <a
                    href="mailto:concierge@svastiman.com"
                    className="text-[#122E46] underline underline-offset-2 hover:text-[#8C6D46] transition-colors font-medium"
                  >
                    concierge@svastiman.com
                  </a>{" "}
                  with your order number, clear photographs of the outer shipping box, the courier label, and the damaged item.
                </p>
                <p>
                  Upon prompt verification by our team, we will immediately arrange an
                  insured priority replacement of the damaged material or process a
                  full refund to your original payment method.
                </p>
              </div>
            </section>

            {/* Address Accuracy and Delivery Attempts */}
            <section className="space-y-3">
              <h2 className="font-serif text-xl sm:text-2xl text-[#1A1815] font-normal tracking-normal">
                Delivery attempts and address accuracy
              </h2>
              <div className="text-sm sm:text-base text-stone-700 leading-relaxed font-light space-y-2">
                <p>
                  Please ensure that your complete physical shipping address, postal
                  PIN code, and active telephone number are entered accurately during
                  checkout. Courier drivers typically attempt delivery up to 3 times
                  before returning the consignment to our origin sanctuary.
                </p>
                <p>
                  If an order is returned to us due to an incomplete or incorrect
                  address provided at checkout or recipient unavailability after 3
                  notified attempts, re-shipping charges may apply to re-dispatch the
                  sacred package.
                </p>
              </div>
            </section>

            {/* Concierge Inquiries and Contact */}
            <section className="space-y-3 pt-4 border-t border-[#EAE3D5]">
              <h2 className="font-serif text-xl sm:text-2xl text-[#1A1815] font-normal tracking-normal">
                Shipping concierge and support
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
