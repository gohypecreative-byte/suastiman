"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    id: 1,
    image: "/images/hero_banner_full_v4.jpg",
    subtitle: "ZODIAC COLLECTION",
    title: "Find Your Sign.",
    buttonText: "SHOP ZODIAC",
    buttonLink: "/collections/zodiac-bracelets",
    buttonTheme: "light", // White button, dark text
  },
  {
    id: 2,
    image: "/images/hero_slider_2.jpg",
    subtitle: "SITEWIDE OFFER",
    title: "Up to 15% OFF",
    buttons: [
      { text: "SHOP NEW", link: "/collections/new-arrivals", theme: "dark" },
      { text: "SHOP ALL", link: "/collections/all", theme: "outline" },
    ],
  },
];

export function HeroBanner() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  return (
    <section className="relative w-full h-[600px] sm:h-[700px] lg:h-[800px] overflow-hidden flex items-end group rounded-[15px]">
      
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 z-0 transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          }`}
        >
          <Image
            src={slide.image}
            alt={slide.title}
            fill
            className="object-cover object-center"
            priority={index === 0}
            sizes="100vw"
          />
          {/* Removed dark gradient overlay as requested */}
          
          {/* Text Content Overlay (Bottom Left) */}
          <div className="absolute bottom-0 left-0 z-10 w-full max-w-7xl mx-auto px-12 sm:px-16 lg:px-20 pb-12 sm:pb-16 lg:pb-24">
            <div className="max-w-xl">
              <p className="text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase text-stone-200 mb-3 drop-shadow-md">
                {slide.subtitle}
              </p>
              <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-normal text-white mb-8 leading-tight drop-shadow-lg">
                {slide.title}
              </h1>
              
              <div className="flex flex-wrap gap-4">
                {slide.buttons ? (
                  slide.buttons.map((btn, i) => (
                    <Link
                      key={i}
                      href={btn.link}
                      className={`inline-flex items-center gap-4 px-8 py-4 font-medium text-sm transition-colors duration-300 group/btn ${
                        btn.theme === "dark" 
                          ? "bg-[#111111] hover:bg-black text-white" 
                          : "bg-white/10 backdrop-blur-md border border-white hover:bg-white hover:text-black text-white"
                      }`}
                    >
                      <span>{btn.text}</span>
                      <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Link>
                  ))
                ) : (
                  <Link
                    href={slide.buttonLink!}
                    className="inline-flex items-center gap-4 px-8 py-4 bg-white hover:bg-stone-100 text-[#111111] font-medium text-sm transition-colors duration-300 group/btn"
                  >
                    <span>{slide.buttonText}</span>
                    <ArrowRight className="w-4 h-4 text-[#111111] group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows (visible on hover) */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-2 bg-white/80 hover:bg-white text-[#111111] rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 focus:outline-none"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-2 bg-white/80 hover:bg-white text-[#111111] rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 focus:outline-none"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Pagination Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentSlide ? "bg-white w-6" : "bg-white/50 hover:bg-white/80"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

    </section>
  );
}
