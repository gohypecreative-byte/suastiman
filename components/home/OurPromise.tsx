"use client";

import React from "react";
import { Gem, Compass, Heart, Flame } from "lucide-react";

export function OurPromise() {
  const promises = [
    {
      icon: Gem,
      title: "100% Natural Gemstones",
      description: "Authentic, untreated earth crystals.",
    },
    {
      icon: Compass,
      title: "Vedic Consecration",
      description: "Energized with ancient prana rituals.",
    },
    {
      icon: Heart,
      title: "Handcrafted Intention",
      description: "Made by artisans with spiritual focus.",
    },
    {
      icon: Flame,
      title: "Ethical Sourcing",
      description: "Consciously and sustainably gathered.",
    },
  ];

  return (
    <section className="bg-[#132F47] text-[#ECEADE] py-12 border-y border-[#111111]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="font-serif text-3xl font-normal mb-2">Our Promise</h2>
          <p className="text-[#ECEADE]/70 text-sm font-light">
            Thoughtful jewellery, genuine crystals and support that stays.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4 border-t border-[#ECEADE]/10 pt-10">
          {promises.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="flex items-start gap-4 px-4 sm:px-2 md:px-6"
              >
                <div className="flex-shrink-0 mt-1">
                  <Icon className="w-5 h-5 text-[#C5A880]" strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="text-sm font-medium text-white mb-1">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#ECEADE]/70 font-light leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
