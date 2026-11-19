"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { Check } from "lucide-react";

interface SupportingPoint {
  title: string;
  desc: string;
}

interface SlideData {
  id: string;
  category: string;
  title: string;
  description: string;
  supportingPoints: SupportingPoint[];
  image: string;
}

const SLIDES: SlideData[] = [
  {
    id: "rudraksha-endocarp",
    category: "Botanical Tradition",
    title: "Why Rudraksha is an Endocarp, Not Wood",
    description:
      "Rudraksha (Elaeocarpus ganitrus) is not simply a piece of wood. It is the dried inner fruit layer known as the endocarp, which protects the seed within.",
    supportingPoints: [
      {
        title: "Botanical Identity",
        desc: "Understand the natural structure of Rudraksha.",
      },
      {
        title: "Natural Formation",
        desc: "Explore the fruit and seed structure.",
      },
      {
        title: "Sacred Significance",
        desc: "Discover its traditional importance in Vedic culture.",
      },
    ],
    image: "/images/origin/know_rudraksha_anatomy.jpg",
  },
  {
    id: "tulsi-sanctity",
    category: "Sacred Herbal Heritage",
    title: "The Living Sanctity of Vrindavan Tulsi Wood",
    description:
      "Tulsi holds a special place in Vedic tradition. Its sacred association, botanical identity and traditional use make it an important part of India's spiritual heritage.",
    supportingPoints: [
      {
        title: "Sacred Heritage",
        desc: "Tulsi's significance in Vedic traditions.",
      },
      {
        title: "Botanical Identity",
        desc: "Understanding the Tulsi plant.",
      },
      {
        title: "Traditional Wisdom",
        desc: "Its historical and cultural importance.",
      },
    ],
    image: "/images/origin/know_tulsi_wood.jpg",
  },
  {
    id: "108-mathematics",
    category: "Astronomical Sacred Ratio",
    title: "The Cosmic Mathematics of the 108 Count",
    description:
      "The number 108 holds deep significance in Indian spiritual traditions. From prayer beads to traditional practices, it represents a meaningful connection between mathematics, symbolism and spirituality.",
    supportingPoints: [
      {
        title: "Sacred Mathematics",
        desc: "Explore the significance of 108.",
      },
      {
        title: "Mala Tradition",
        desc: "Understand the 108-bead counting system.",
      },
      {
        title: "Cosmic Symbolism",
        desc: "Its place in traditional Indian philosophy.",
      },
    ],
    image: "/images/origin/stage9_svastiman.jpg",
  },
  {
    id: "gemological-integrity",
    category: "Gemological Integrity",
    title: "Natural Inclusions: Earth's Geological Fingerprint",
    description:
      "Natural gemstones and sacred beads can carry unique internal patterns and inclusions formed through natural processes. These characteristics help reveal their individual geological history.",
    supportingPoints: [
      {
        title: "Natural Formation",
        desc: "Understand how natural inclusions develop.",
      },
      {
        title: "Geological Identity",
        desc: "Explore internal patterns and structures.",
      },
      {
        title: "Authenticity",
        desc: "Appreciate the uniqueness of natural materials.",
      },
    ],
    image: "/images/origin/brand_macro_detail.jpg",
  },
];

export function KnowYourTradition() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const activeIndexRef = useRef(0);

  useEffect(() => {
    activeIndexRef.current = activeIndex;
  }, [activeIndex]);

  useEffect(() => {
    let lastTransitionTime = 0;
    let touchStartY = 0;

    // Passive Window Scroll Tracking (for scrollbar dragging and smooth travel)
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const totalScrollable = rect.height - windowHeight;

      if (totalScrollable <= 0) return;

      const currentScroll = -rect.top;
      const progress = Math.max(0, Math.min(1, currentScroll / totalScrollable));

      let nextIndex = 0;
      if (progress >= 0.75) {
        nextIndex = 3;
      } else if (progress >= 0.50) {
        nextIndex = 2;
      } else if (progress >= 0.25) {
        nextIndex = 1;
      } else {
        nextIndex = 0;
      }

      if (nextIndex !== activeIndexRef.current) {
        setActiveIndex(nextIndex);
        activeIndexRef.current = nextIndex;
      }
    };

    // Wheel Stepper: One clean slide step per scroll gesture
    const handleWheel = (e: WheelEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Only handle when sticky pinned in viewport
      const isPinned = rect.top <= 10 && rect.bottom >= windowHeight + 10;
      if (!isPinned) return;

      if (Math.abs(e.deltaY) < 22) return;

      const now = Date.now();
      if (now - lastTransitionTime < 650) {
        e.preventDefault();
        return;
      }

      const totalScrollable = rect.height - windowHeight;

      if (e.deltaY > 0) {
        // Scrolling Down
        if (activeIndexRef.current < SLIDES.length - 1) {
          e.preventDefault();
          lastTransitionTime = now;
          const targetIndex = activeIndexRef.current + 1;
          setActiveIndex(targetIndex);
          activeIndexRef.current = targetIndex;

          const targetY =
            window.scrollY +
            rect.top +
            (totalScrollable * targetIndex) / (SLIDES.length - 1);
          window.scrollTo({ top: targetY, behavior: "smooth" });
        }
      } else {
        // Scrolling Up
        if (activeIndexRef.current > 0) {
          e.preventDefault();
          lastTransitionTime = now;
          const targetIndex = activeIndexRef.current - 1;
          setActiveIndex(targetIndex);
          activeIndexRef.current = targetIndex;

          const targetY =
            window.scrollY +
            rect.top +
            (totalScrollable * targetIndex) / (SLIDES.length - 1);
          window.scrollTo({ top: targetY, behavior: "smooth" });
        }
      }
    };

    // Mobile Touch Gesture Support
    const handleTouchStart = (e: TouchEvent) => {
      touchStartY = e.touches[0].clientY;
    };

    const handleTouchEnd = (e: TouchEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      const isPinned = rect.top <= 10 && rect.bottom >= windowHeight + 10;
      if (!isPinned) return;

      const touchEndY = e.changedTouches[0].clientY;
      const deltaY = touchStartY - touchEndY;

      if (Math.abs(deltaY) < 35) return;

      const now = Date.now();
      if (now - lastTransitionTime < 600) return;

      const totalScrollable = rect.height - windowHeight;

      if (deltaY > 0 && activeIndexRef.current < SLIDES.length - 1) {
        lastTransitionTime = now;
        const targetIndex = activeIndexRef.current + 1;
        setActiveIndex(targetIndex);
        activeIndexRef.current = targetIndex;

        const targetY =
          window.scrollY +
          rect.top +
          (totalScrollable * targetIndex) / (SLIDES.length - 1);
        window.scrollTo({ top: targetY, behavior: "smooth" });
      } else if (deltaY < 0 && activeIndexRef.current > 0) {
        lastTransitionTime = now;
        const targetIndex = activeIndexRef.current - 1;
        setActiveIndex(targetIndex);
        activeIndexRef.current = targetIndex;

        const targetY =
          window.scrollY +
          rect.top +
          (totalScrollable * targetIndex) / (SLIDES.length - 1);
        window.scrollTo({ top: targetY, behavior: "smooth" });
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("wheel", handleWheel, { passive: false });
    window.addEventListener("touchstart", handleTouchStart, { passive: true });
    window.addEventListener("touchend", handleTouchEnd, { passive: true });

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, []);

  return (
    <section
      ref={containerRef}
      id="know-your-tradition"
      className="relative h-[320vh] sm:h-[350vh] lg:h-[380vh] bg-[#F6F4EE] text-[#0C161D]"
    >
      {/* Sticky Pinned Container */}
      <div className="sticky top-0 h-[100dvh] w-full flex flex-col justify-center lg:justify-start lg:pt-16 xl:pt-20 overflow-hidden z-10">
        {/* Subtle Background Texture */}
        <div className="absolute inset-0 bg-[radial-gradient(#C5A880_1px,transparent_1px)] [background-size:28px_28px] opacity-[0.08] pointer-events-none" />

        <div className="w-full max-w-6xl xl:max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 relative z-10 py-4 sm:py-6 lg:py-8 flex flex-col justify-center">
          {/* Main Heading – Centered and elevated */}
          <div className="mb-6 sm:mb-8 lg:mb-10 max-w-4xl mx-auto text-center">
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-[42px] xl:text-[46px] font-normal text-[#1A1815] leading-[1.2] tracking-tight">
              Vedic Wisdom and Botanical Science, <br className="hidden sm:inline" />
              <span className="italic text-[#7A6242] font-light">
                grounded in scriptural truth.
              </span>
            </h2>
          </div>

          {/* Clean Pinned Two-Column Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-10 xl:gap-14 items-center">
            {/* LEFT COLUMN: Enlarged Image */}
            <div className="lg:col-span-5 xl:col-span-5 w-full flex justify-center lg:justify-end">
              <div className="relative w-full max-w-[420px] sm:max-w-[460px] lg:max-w-[490px] xl:max-w-[530px] aspect-[4/3] rounded-2xl overflow-hidden bg-[#EAE5D9] border border-stone-200/90 shadow-xl shadow-stone-900/8">
                {SLIDES.map((slide, idx) => {
                  const isActive = idx === activeIndex;
                  const isPast = idx < activeIndex;
                  return (
                    <div
                      key={slide.id}
                      className={`absolute inset-0 transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] ${
                        isActive
                          ? "opacity-100 translate-x-0 z-10 scale-100"
                          : isPast
                          ? "opacity-0 -translate-x-12 pointer-events-none z-0 scale-[0.98]"
                          : "opacity-0 translate-x-12 pointer-events-none z-0 scale-[0.98]"
                      }`}
                    >
                      <Image
                        src={slide.image}
                        alt={slide.title}
                        fill
                        priority={idx === 0}
                        className="object-cover"
                        sizes="(max-width: 1024px) 100vw, 530px"
                      />
                    </div>
                  );
                })}
              </div>
            </div>

            {/* RIGHT COLUMN: Enlarged Content */}
            <div className="lg:col-span-7 xl:col-span-7 w-full flex flex-col justify-center pl-0 lg:pl-2 xl:pl-4">
              <div className="grid grid-cols-1 grid-rows-1 w-full min-h-[300px] sm:min-h-[330px] lg:min-h-[360px] items-center">
                {SLIDES.map((slide, idx) => {
                  const isActive = idx === activeIndex;
                  const isPast = idx < activeIndex;
                  return (
                    <div
                      key={slide.id}
                      className={`col-start-1 row-start-1 w-full flex flex-col justify-center transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] ${
                        isActive
                          ? "opacity-100 translate-y-0 pointer-events-auto z-10"
                          : isPast
                          ? "opacity-0 -translate-y-6 pointer-events-none z-0"
                          : "opacity-0 translate-y-6 pointer-events-none z-0"
                      }`}
                    >
                      {/* Subtle Category */}
                      <p className="font-serif text-xs sm:text-sm lg:text-[15px] text-[#7A6242] font-normal mb-1.5 sm:mb-2 tracking-wide">
                        {slide.category}
                      </p>

                      {/* Title: Larger & Refined */}
                      <h3 className="font-serif text-2xl sm:text-3xl lg:text-[30px] xl:text-[32px] font-normal text-[#1A1815] leading-[1.22] tracking-tight mb-2.5 sm:mb-3">
                        {slide.title}
                      </h3>

                      {/* Description: Clean, Comfortable Font */}
                      <p className="text-sm sm:text-base lg:text-[16px] text-stone-600 leading-relaxed font-sans mb-4 sm:mb-5 max-w-xl">
                        {slide.description}
                      </p>

                      {/* Supporting Points: Enhanced with clear checkmarks */}
                      <div className="space-y-2.5 sm:space-y-3">
                        {slide.supportingPoints.map((point, pIdx) => (
                          <div key={pIdx} className="flex items-start gap-3">
                            <div className="w-5 h-5 rounded-full bg-[#EBF5ED] text-[#2E7D32] border border-[#2E7D32]/30 flex items-center justify-center shrink-0 mt-0.5 shadow-2xs">
                              <Check className="w-3 h-3 stroke-[2.5]" />
                            </div>
                            <div className="text-sm sm:text-[14.5px] leading-relaxed">
                              <strong className="font-semibold text-[#1A1815]">
                                {point.title}:{" "}
                              </strong>
                              <span className="text-stone-600 font-normal">
                                {point.desc}
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
