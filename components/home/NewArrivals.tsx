"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function NewArrivals() {
  return (
    <section className="py-20 bg-[#F9F8F5] border-y border-[#E2DEC9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl sm:text-4xl text-[#132F47] font-semibold mb-3">
            New Arrivals
          </h2>
          <p className="text-[#132F47]/80 text-sm font-medium">
            Fresh designs, just added.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Women's New Arrivals */}
          <div className="group flex flex-col">
            <Link href="/collections/women-new" className="relative aspect-[4/3] overflow-hidden bg-stone-100 block mb-6 rounded-[15px]">
              <Image
                src="/images/womens_new_arrival_final.jpg" 
                alt="Women's New Arrivals"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </Link>
            <div className="flex flex-col">
              <span className="text-[#C5A880] text-[10px] font-semibold uppercase tracking-widest mb-2">
                JUST IN
              </span>
              <div className="flex items-center justify-between">
                <h3 className="font-serif text-2xl text-[#132F47] font-semibold">
                  Women's New Arrivals
                </h3>
                <Link
                  href="/collections/women-new"
                  className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-[#132F47] hover:text-[#C5A880] transition-colors"
                >
                  SHOP WOMEN
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>

          {/* Men's New Arrivals */}
          <div className="group flex flex-col">
            <Link href="/collections/men-new" className="relative aspect-[4/3] overflow-hidden bg-stone-100 block mb-6 rounded-[15px]">
              <Image
                src="/images/mens_new_arrival_v5.jpg"
                alt="Men's New Arrivals"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </Link>
            <div className="flex flex-col">
              <span className="text-[#C5A880] text-[10px] font-semibold uppercase tracking-widest mb-2">
                JUST IN
              </span>
              <div className="flex items-center justify-between">
                <h3 className="font-serif text-2xl text-[#132F47] font-semibold">
                  Men's New Arrivals
                </h3>
                <Link
                  href="/collections/men-new"
                  className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-[#132F47] hover:text-[#C5A880] transition-colors"
                >
                  SHOP MEN
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
