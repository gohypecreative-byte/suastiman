"use client";

import React, { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { ReactLenis, useLenis, LenisRef } from "lenis/react";
import type { LenisOptions } from "lenis";

/**
 * Handles smooth route navigation and anchor scroll offsets
 */
function RouteAndAnchorHandler() {
  const pathname = usePathname();
  const lenis = useLenis();

  // 1. Reset scroll to top on route change, preserving standard SPA behavior
  useEffect(() => {
    if (!lenis) return;

    // Check if an anchor hash exists on initial/current load
    if (typeof window !== "undefined" && window.location.hash) {
      const hash = window.location.hash;
      const target = document.querySelector(hash);
      if (target) {
        // Wait for DOM layout to settle, then smoothly scroll to hash target with offset
        const timer = setTimeout(() => {
          lenis.scrollTo(target as HTMLElement, {
            offset: -88,
            duration: 1.2,
          });
        }, 100);
        return () => clearTimeout(timer);
      }
    }

    // Default: Reset to top immediately on new page navigation
    lenis.scrollTo(0, { immediate: true });
  }, [pathname, lenis]);

  // 2. Smooth scrolling for internal anchor links (#hash or /#hash on homepage)
  useEffect(() => {
    if (!lenis) return;

    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const anchor = target.closest("a");
      if (!anchor) return;

      const href = anchor.getAttribute("href");
      if (!href) return;

      // Handle in-page hash anchors (e.g. #know-your-tradition or /#know-your-tradition when on /)
      if (href.startsWith("#") || (href.startsWith("/#") && pathname === "/")) {
        const hash = href.startsWith("/#") ? href.slice(1) : href;
        if (hash === "#" || hash.length <= 1) return;

        try {
          const element = document.querySelector(hash);
          if (element) {
            e.preventDefault();
            lenis.scrollTo(element as HTMLElement, {
              offset: -88, // Offset for top announcement bar + navbar height
              duration: 1.2,
            });
          }
        } catch {
          // If selector is invalid, fallback to native behavior
        }
      }
    };

    document.addEventListener("click", handleAnchorClick, { capture: true });
    return () => {
      document.removeEventListener("click", handleAnchorClick, { capture: true });
    };
  }, [lenis, pathname]);

  // 3. Keep GSAP / ScrollTrigger in sync if loaded
  useEffect(() => {
    if (!lenis) return;
    const globalWindow = window as unknown as {
      ScrollTrigger?: { update: () => void; refresh: () => void };
    };

    if (globalWindow.ScrollTrigger) {
      const updateScrollTrigger = () => {
        globalWindow.ScrollTrigger?.update();
      };
      lenis.on("scroll", updateScrollTrigger);
      globalWindow.ScrollTrigger.refresh();
      return () => {
        lenis.off("scroll", updateScrollTrigger);
      };
    }
  }, [lenis]);

  return null;
}

/**
 * Root SmoothScrollProvider initializing Lenis once globally
 */
export function SmoothScrollProvider({ children }: { children: React.ReactNode }) {
  const lenisRef = useRef<LenisRef>(null);

  // Optimized configuration for luxury, cinematic fluid smooth scrolling
  const lenisOptions: LenisOptions = {
    duration: 1.2,
    easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Luxurious exponential ease
    orientation: "vertical",
    gestureOrientation: "vertical",
    smoothWheel: true,
    wheelMultiplier: 1,
    touchMultiplier: 1.5,
    infinite: false,
    autoRaf: true,
    autoResize: true,
    anchors: false, // Handled precisely in RouteAndAnchorHandler with -88px navbar offset
    respectReducedMotion: true, // Respects prefers-reduced-motion accessibility
    overscroll: true,
    prevent: (node: HTMLElement) => {
      // Preserve native scrolling inside modals, dropdowns, cart drawer, dialogs, etc.
      return (
        node.hasAttribute?.("data-lenis-prevent") ||
        Boolean(node.closest?.("[data-lenis-prevent]")) ||
        Boolean(node.closest?.('[role="dialog"]')) ||
        Boolean(node.closest?.('[data-radix-portal]'))
      );
    },
  };

  return (
    <ReactLenis root ref={lenisRef} options={lenisOptions}>
      <RouteAndAnchorHandler />
      {children}
    </ReactLenis>
  );
}
