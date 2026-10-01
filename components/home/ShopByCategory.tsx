"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const categories = {
  MEN: [
    { name: "Nav Grah Mala", image: "/images/category_box.jpg" },
    { name: "Pyrite Band", image: "/images/category_bag.jpg" },
    { name: "Rudraksha", image: "/images/category_box.jpg" },
    { name: "Tiger Eye", image: "/images/category_bag.jpg" },
    { name: "Obsidian", image: "/images/category_box.jpg" },
  ],
  WOMEN: [
    { name: "Rose Quartz", image: "/images/category_bag.jpg" },
    { name: "Amethyst Mala", image: "/images/category_box.jpg" },
    { name: "Clear Quartz", image: "/images/category_bag.jpg" },
    { name: "Jade Bracelet", image: "/images/category_box.jpg" },
    { name: "Pearl Thread", image: "/images/category_bag.jpg" },
  ],
  GIFTS: [
    { name: "Gift Box Sets", image: "/images/category_box.jpg" },
    { name: "Couple Bands", image: "/images/category_box.jpg" },
    { name: "Festive Malas", image: "/images/category_bag.jpg" },
    { name: "Energy Kit", image: "/images/category_bag.jpg" },
    { name: "Customized", image: "/images/category_box.jpg" },
  ],
  SIGNATURE: [
    { name: "The Aligned", image: "/images/category_bag.jpg" },
    { name: "Heritage Gold", image: "/images/category_bag.jpg" },
    { name: "Zen Masters", image: "/images/category_box.jpg" },
    { name: "Aura Cleanse", image: "/images/category_box.jpg" },
    { name: "Royal Edition", image: "/images/category_bag.jpg" },
  ],
};

type TabKeys = keyof typeof categories;

export function ShopByCategory() {
  const [activeTab, setActiveTab] = useState<TabKeys>("MEN");
  const tabs: TabKeys[] = ["MEN", "WOMEN", "GIFTS", "SIGNATURE"];

  return (
    <section className="bg-[#F9F8F5] py-20 border-b border-[#E2DEC9]">
      {/* Header and Tabs container (centered) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="font-serif text-4xl text-[#132F47] font-normal mb-3">
            Shop by Category
          </h2>
          <p className="text-stone-600 text-sm font-light">
            Explore jewellery by who it's for and what speaks to you.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center gap-8 mb-12 border-b border-[#E2DEC9]">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`pb-4 text-xs font-semibold tracking-[0.15em] transition-all relative ${
                activeTab === tab
                  ? "text-[#132F47]"
                  : "text-stone-400 hover:text-stone-600"
              }`}
            >
              {tab}
              {activeTab === tab && (
                <span className="absolute bottom-[-1px] left-0 w-full h-[2px] bg-[#132F47]" />
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Image Grid */}
      <div className="w-full mt-4">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-[3px] px-[3px]">
          {categories[activeTab].map((item, index) => (
            <Link
              key={index}
              href={`/collections/${activeTab.toLowerCase()}`}
              className="group relative aspect-square overflow-hidden bg-stone-100 block rounded-[7px]"
            >
              <Image
                src={item.image}
                alt={item.name}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 16vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-black/0 group-hover:bg-black/20 transition-colors duration-300" />
              
              {/* Overlay Name */}
              <div className="absolute bottom-4 left-4 right-4">
                <span className="font-serif text-white text-lg font-medium drop-shadow-md">
                  {item.name}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
