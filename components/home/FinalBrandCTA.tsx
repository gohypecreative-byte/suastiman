"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";

export function FinalBrandCTA() {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeProgress, setActiveProgress] = useState(0.5);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (sectionRef.current) {
            const rect = sectionRef.current.getBoundingClientRect();
            const windowHeight = window.innerHeight || 800;
            const totalDistance = windowHeight + rect.height;
            const currentDistance = windowHeight - rect.top;
            const rawProgress = currentDistance / totalDistance;
            
            // Normalize active window when section is visible in viewport
            const active = Math.max(0, Math.min(1, (rawProgress - 0.2) / 0.6));
            setActiveProgress(active);
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  // Calculate sequential wave progress for each line
  // Line 1: From Nature. (sweeps 0.05 -> 0.45)
  const p1 = Math.max(0, Math.min(1, (activeProgress - 0.05) / 0.40));
  const bgPos1 = `${(92 - p1 * 84).toFixed(1)}% 0%`;

  // Line 2: Through Human Hands. (sweeps 0.28 -> 0.68)
  const p2 = Math.max(0, Math.min(1, (activeProgress - 0.28) / 0.40));
  const bgPos2 = `${(92 - p2 * 84).toFixed(1)}% 0%`;

  // Line 3: Rooted in Tradition. (sweeps 0.52 -> 0.92)
  const p3 = Math.max(0, Math.min(1, (activeProgress - 0.52) / 0.40));
  const bgPos3 = `${(92 - p3 * 84).toFixed(1)}% 0%`;

  // Boost baseline readability as section reaches center
  const revealBoost = Math.max(0, Math.min(1, (activeProgress - 0.3) / 0.4));
  const baseWhite = 0.38 + revealBoost * 0.58;
  const baseGold = 0.40 + revealBoost * 0.55;

  return (
    <section
      ref={sectionRef}
      className="relative w-full min-h-[500px] lg:min-h-[600px] bg-[#0C161D] text-[#ECEADE] overflow-hidden flex flex-col justify-center items-center text-center select-none py-20"
    >
      <style>{`
        .wave-text-white {
          ${
            mounted
              ? `
          background: linear-gradient(
            90deg,
            rgba(255, 255, 255, ${baseWhite.toFixed(2)}) 0%,
            rgba(255, 255, 255, ${baseWhite.toFixed(2)}) 36%,
            #FFFFFF 47%,
            #FFFBF2 50%,
            #FFFFFF 53%,
            rgba(255, 255, 255, ${baseWhite.toFixed(2)}) 64%,
            rgba(255, 255, 255, ${baseWhite.toFixed(2)}) 100%
          );
          background-size: 300% 100%;
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          color: transparent;
          transition: background-position 0.25s cubic-bezier(0.2, 0.8, 0.2, 1);
          display: inline-block;
          will-change: background-position;
          `
              : `color: #FFFFFF;`
          }
        }

        .wave-text-gold {
          ${
            mounted
              ? `
          background: linear-gradient(
            90deg,
            rgba(223, 202, 171, ${baseGold.toFixed(2)}) 0%,
            rgba(223, 202, 171, ${baseGold.toFixed(2)}) 36%,
            #FFFFFF 46%,
            #FFF4DE 50%,
            #DFCAAB 54%,
            rgba(223, 202, 171, ${baseGold.toFixed(2)}) 64%,
            rgba(223, 202, 171, ${baseGold.toFixed(2)}) 100%
          );
          background-size: 300% 100%;
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          color: transparent;
          transition: background-position 0.25s cubic-bezier(0.2, 0.8, 0.2, 1);
          display: inline-block;
          will-change: background-position;
          `
              : `color: #DFCAAB;`
          }
        }
      `}</style>

      {/* Background Photography with Scroll Parallax & Scale */}
      <div
        className="absolute inset-0 z-0 transition-transform duration-300 ease-out will-change-transform"
        style={{
          transform: `scale(${1.08 - activeProgress * 0.08}) translateY(${(activeProgress - 0.5) * 40}px)`,
        }}
      >
        <Image
          src="/images/origin/stage9_svastiman.jpg"
          alt="SVASTIMAN Finished Sacred Mala"
          fill
          priority
          className="object-cover object-center brightness-[0.85] contrast-[1.05]"
          sizes="100vw"
        />
        {/* Simple elegant overlay for text readability without being too dim */}
        <div className="absolute inset-0 bg-black/40 pointer-events-none" />
      </div>

      {/* Centered Minimal Content */}
      <div className="relative z-10 w-full px-5 sm:px-10 max-w-3xl flex flex-col items-center space-y-6 sm:space-y-8">
        <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-light leading-[1.12] tracking-tight">
          <span
            className="wave-text-white drop-shadow-[0_2px_12px_rgba(255,255,255,0.22)]"
            style={{ backgroundPosition: bgPos1 }}
          >
            From Nature.
          </span>
          <br />
          <span
            className="wave-text-white drop-shadow-[0_2px_12px_rgba(255,255,255,0.22)]"
            style={{ backgroundPosition: bgPos2 }}
          >
            Through Human Hands.
          </span>
          <br />
          <span
            className="wave-text-gold italic font-normal drop-shadow-[0_2px_14px_rgba(223,202,171,0.3)]"
            style={{ backgroundPosition: bgPos3 }}
          >
            Rooted in Tradition.
          </span>
        </h2>

        <p
          className="text-sm sm:text-base text-stone-200 font-light max-w-lg leading-relaxed transition-all duration-300 ease-out will-change-transform"
          style={{
            opacity: Math.max(0.35, Math.min(1, 0.35 + activeProgress * 0.7)),
            transform: `translateY(${Math.max(0, (1 - activeProgress) * 14)}px)`,
          }}
        >
          Nature, sacred materials, and honest craftsmanship coming together for daily mindful presence.
        </p>

        <div
          className="pt-4 flex flex-col sm:flex-row items-center gap-4 transition-all duration-300 ease-out will-change-transform"
          style={{
            opacity: Math.max(0.4, Math.min(1, 0.4 + activeProgress * 0.7)),
            transform: `translateY(${Math.max(0, (1 - activeProgress) * 18)}px)`,
          }}
        >
          <a
            href="#featured-products"
            className="inline-flex items-center justify-center px-8 py-3.5 bg-[#F7F5F0] hover:bg-[#C5A880] text-[#0C161D] text-xs font-semibold tracking-[0.2em] uppercase rounded-full transition-all duration-300 w-full sm:w-auto"
          >
            Explore Svastimān
          </a>

          <a
            href="#material-journeys"
            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-black/40 hover:bg-black/60 text-[#ECEADE] text-xs font-medium tracking-[0.15em] uppercase rounded-full backdrop-blur-md border border-white/20 transition-all w-full sm:w-auto"
          >
            <span>The Botanical Journey</span>
          </a>
        </div>
      </div>
    </section>
  );
}
