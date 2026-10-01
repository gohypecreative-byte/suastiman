"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function CuratedAccessories() {
  const categories = [
    {
      title: "Bracelets",
      image: "https://images.unsplash.com/photo-1611591475102-4f107c164a27?auto=format&fit=crop&w=600&q=80",
      link: "/collections/bracelets",
    },
    {
      title: "Mahadev",
      image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=600&q=80",
      link: "/collections/mahadev",
    },
    {
      title: "Pyrite",
      image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=600&q=80",
      link: "/collections/pyrite",
    },
    {
      title: "Malas",
      image: "https://images.unsplash.com/photo-1600003014755-ba31aa59c4b6?auto=format&fit=crop&w=600&q=80",
      link: "/collections/malas",
    },
  ];

  return (
    <section className="bg-[#F9F8F5] py-20 border-b border-[#E2DEC9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl text-[#132F47] font-normal mb-3">
            Curated Spiritual Accessories
          </h2>
          <p className="text-stone-600 text-sm font-light">
            Explore jewellery by who it's for and what speaks to you.
          </p>
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat, index) => (
            <Link
              key={index}
              href={cat.link}
              className="group flex flex-col"
            >
              <div className="relative aspect-square overflow-hidden bg-stone-100 mb-4">
                <Image
                  src={cat.image}
                  alt={cat.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300" />
              </div>
              <div className="flex items-center justify-between border-b border-[#E2DEC9] pb-2 group-hover:border-[#132F47] transition-colors duration-300">
                <span className="font-serif text-lg text-[#132F47]">{cat.title}</span>
                <ArrowRight className="w-4 h-4 text-[#C5A880] group-hover:text-[#132F47] transition-colors duration-300" />
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}
