"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Logo } from "@/components/common/Logo";
import { useCart } from "@/context/CartContext";
import {
  ShoppingBag,
  Search,
  Menu,
  X,
  Compass,
  Heart,
  ChevronDown,
  User,
  Truck,
  CreditCard,
  Percent,
  ShieldCheck,
  Leaf,
} from "lucide-react";

export function Navbar() {
  const { openCart, totalCount, wishlistCount, isHydrated } = useCart();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [isVisible, setIsVisible] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Track whether page is scrolled for subtle bottom shadow
      setIsScrolled(currentScrollY > 15);

      // When at or near the top (within 30px), always keep navbar visible
      if (currentScrollY <= 30) {
        setIsVisible(true);
        lastScrollY.current = currentScrollY;
        return;
      }

      // If mobile menu or search drawer is open, don't hide
      if (mobileMenuOpen || searchOpen) {
        setIsVisible(true);
        lastScrollY.current = currentScrollY;
        return;
      }

      const diff = currentScrollY - lastScrollY.current;

      // Ignore micro-jitters
      if (Math.abs(diff) < 6) return;

      if (diff > 0) {
        // Scrolling DOWN -> Hide smoothly
        setIsVisible(false);
      } else {
        // Scrolling UP -> Reveal smoothly
        setIsVisible(true);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [mobileMenuOpen, searchOpen]);

  type NavLink = {
    name: string;
    href: string;
    badge?: string;
    children?: { name: string; href: string; desc: string }[];
  };

  const navLinks: NavLink[] = [
    {
      name: "Shop",
      href: "/products",
      children: [
        { name: "All Collections", href: "/products", desc: "Browse full collection" },
        { name: "Spiritual Bracelets", href: "/products?category=bracelets", desc: "Energy & chakra wristwear" },
        { name: "108 Japa Malas", href: "/products?category=malas", desc: "Traditional prayer & meditation" },
        { name: "Zodiac Jewellery", href: "/tools/energy-finder", desc: "Astrological chart & birthstones" },
        { name: "Sacred Botanicals", href: "/products?category=rudraksha", desc: "Wild Rudraksha & Vrindavan Tulsi" },
        { name: "Healing Gemstones", href: "/products?category=gemstones", desc: "Earth-mined crystal energy" },
      ],
    },
    {
      name: "Sacred Materials",
      href: "/#material-journeys",
      children: [
        { name: "Rudraksha Seeds", href: "/#material-journeys-rudraksha", desc: "Wild Himalayan Elaeocarpus" },
        { name: "Tulsi Sacred Wood", href: "/#material-journeys-tulsi", desc: "Naturally seasoned Vrindavan wood" },
        { name: "Earth Gemstones", href: "/#material-journeys-gemstones", desc: "Raw unheated natural minerals" },
      ],
    },
    { name: "Know Your Tradition", href: "/#know-your-tradition" },
    { name: "The Origin", href: "/#trust-provenance" },
    { name: "About", href: "/about" },
    { name: "Blog", href: "/blog" },
  ];


  return (
    <>
      {/* Layout Spacer to match navbar height and prevent any layout jump */}
      <div className="w-full h-[96px] sm:h-[116px] pointer-events-none" aria-hidden="true" />

      {/* Floating Smart Header Wrapper (fixed to browser viewport) */}
      <div
        className={`fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ease-in-out ${
          isVisible ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        {/* Top Announcement Marquee Bar */}
        <div className="bg-[#1A1815] text-[#FAF8F5] py-2 sm:py-2.5 overflow-hidden border-b border-[#C5A880]/20 select-none">
          <div className="animate-marquee flex items-center whitespace-nowrap">
            {[...Array(4)].map((_, groupIdx) => (
              <div
                key={groupIdx}
                className="flex items-center gap-8 md:gap-14 mx-4 md:mx-7 text-[10px] sm:text-[11px] font-medium tracking-[0.14em] uppercase"
              >
                <div className="flex items-center gap-2">
                  <Leaf className="w-3.5 h-3.5 text-[#C5A880] stroke-[1.8]" />
                  <span>HONORED BY NATURE, BLESSED BY HAND</span>
                </div>
                <span className="text-[#C5A880]/40 text-[10px]">&bull;</span>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#C5A880] stroke-[1.8]" />
                  <span>CERTIFIED SACRED BOTANICALS &amp; GEMS</span>
                </div>
                <span className="text-[#C5A880]/40 text-[10px]">&bull;</span>
                <div className="flex items-center gap-2">
                  <Truck className="w-3.5 h-3.5 text-[#C5A880] stroke-[1.8]" />
                  <span>COMPLIMENTARY SHIPPING OVER ₹1999</span>
                </div>
                <span className="text-[#C5A880]/40 text-[10px]">&bull;</span>
              </div>
            ))}
          </div>
        </div>

        {/* Main Sticky Navigation */}
        <header
          className={`w-full bg-[#F9F8F5] border-b border-[#E2DEC9] transition-shadow duration-300 ${
            isScrolled ? "shadow-[0_4px_20px_-4px_rgba(0,0,0,0.1)]" : ""
          }`}
        >
        <div className="w-full px-4 sm:px-8 lg:px-12 h-16 sm:h-20 flex items-center justify-between">
          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-[#122E46] hover:text-[#C5A880] transition-colors -ml-2"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

          {/* Logo */}
          <div className="flex items-center">
            <Logo />
          </div>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center space-x-2 xl:space-x-3">
            {navLinks.map((link) => (
              <div key={link.name} className="relative group">
                {link.badge && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-red-600 text-white text-[9px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded-sm">
                    {link.badge}
                  </span>
                )}

                {link.children ? (
                  <div className="flex items-center gap-1.5 cursor-pointer px-3 py-1.5 rounded-[4px] border border-transparent hover:border-[#122E46]/30 group-hover:border-[#122E46]/30 text-[13px] font-sans font-medium uppercase tracking-[0.14em] text-[#122E46] hover:text-[#C5A880] group-hover:text-[#C5A880] transition-all duration-200">
                    <span>{link.name}</span>
                    <ChevronDown className="w-3.5 h-3.5 stroke-[2] transition-transform duration-200 group-hover:rotate-180 text-[#122E46] group-hover:text-[#C5A880]" />

                    {/* Dropdown Menu */}
                    <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-64 bg-white shadow-xl rounded-xl border border-[#E2DEC9] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top translate-y-2 group-hover:translate-y-0 overflow-hidden">
                      <div className="py-2.5">
                        {link.children.map((child) => (
                          <a
                            key={child.name}
                            href={child.href}
                            className="block px-4 py-2.5 hover:bg-[#F9F8F5] transition-colors text-stone-700 hover:text-[#122E46]"
                          >
                            <div className="flex flex-col">
                              <span className="font-sans uppercase text-[11.5px] font-semibold tracking-[0.12em] text-[#122E46]">{child.name}</span>
                              {child.desc && <span className="text-[11px] text-stone-400 font-light normal-case tracking-normal mt-0.5">{child.desc}</span>}
                            </div>
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <Link
                    href={link.href}
                    className="px-3 py-1.5 rounded-[4px] border border-transparent hover:border-[#122E46]/30 text-[13px] font-sans font-medium uppercase tracking-[0.14em] text-[#122E46] hover:text-[#C5A880] transition-all duration-200 block"
                  >
                    {link.name}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* Right Action Icons */}
          <div className="flex items-center space-x-3 sm:space-x-5 text-[#122E46]">
            <button
              onClick={() => setSearchOpen(!searchOpen)}
              className="hover:text-[#C5A880] transition-colors p-1"
              title="Search"
            >
              <Search className="w-5 h-5 stroke-[1.6]" />
            </button>
            
            <Link
              href="/account"
              className="hover:text-[#C5A880] transition-colors p-1"
              title="My Account & Sanctuary"
            >
              <User className="w-5 h-5 stroke-[1.6]" />
            </Link>
            
            <Link
              href="/wishlist"
              className="relative hover:text-[#C5A880] transition-colors p-1"
              title="Sacred Wishlist"
            >
              <Heart className="w-5 h-5 stroke-[1.6]" />
              {isHydrated && wishlistCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-[#122E46] text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                  {wishlistCount}
                </span>
              )}
            </Link>

            <button
              onClick={openCart}
              className="relative hover:text-[#C5A880] transition-colors p-1"
              title="Bag"
            >
              <ShoppingBag className="w-5 h-5 stroke-[1.6]" />
              {isHydrated && totalCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-[#122E46] text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                  {totalCount}
                </span>
              )}
            </button>
          </div>
        </div>

        {/* Expandable Search Drawer */}
        {searchOpen && (
          <div className="border-t border-[#E2DEC9] bg-[#ECEADE] px-3 sm:px-4 py-3 sm:py-4 animate-in slide-in-from-top duration-200">
            <div className="max-w-3xl mx-auto flex items-center gap-3 bg-white px-3 sm:px-4 py-2 rounded-xl border border-[#C5A880]/50 shadow-inner">
              <Search className="w-4 h-4 sm:w-5 sm:h-5 text-stone-400 shrink-0" />
              <input
                type="text"
                placeholder="Search sacred materials, origin, or tradition..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-transparent border-none text-xs sm:text-sm text-[#111111] focus:outline-none placeholder:text-stone-400"
                autoFocus
              />
              <button
                onClick={() => setSearchOpen(false)}
                className="text-stone-400 hover:text-stone-700 p-1 shrink-0"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {/* Mobile Slide-down Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-[#E2DEC9] bg-[#F9F8F5] px-5 sm:px-6 py-5 sm:py-6 space-y-4 shadow-xl max-h-[80vh] overflow-y-auto">
            {navLinks.map((link) => (
              <div key={link.name} className="border-b border-[#E2DEC9]/40">
                {link.children ? (
                  <div className="py-2.5">
                    <span className="block text-[13px] font-sans uppercase tracking-[0.14em] font-semibold text-[#122E46] mb-2">{link.name}</span>
                    <div className="pl-4 space-y-2 border-l-2 border-[#122E46]/30">
                      {link.children.map((child) => (
                        <a
                          key={child.name}
                          href={child.href}
                          onClick={() => setMobileMenuOpen(false)}
                          className="block text-xs uppercase tracking-[0.12em] py-1 text-stone-600 hover:text-[#122E46]"
                        >
                          {child.name}
                        </a>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block text-[13px] font-sans uppercase tracking-[0.14em] font-semibold text-[#122E46] hover:text-[#C5A880] py-2 relative"
                  >
                    {link.name}
                    {link.badge && (
                      <span className="ml-2 bg-red-600 text-white text-[9px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded-sm">
                        {link.badge}
                      </span>
                    )}
                  </Link>
                )}
              </div>
            ))}
            <div className="pt-3 border-t border-[#E2DEC9]/60 flex flex-col gap-2">
              <Link
                href="/account"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-2.5 text-[13px] font-medium text-[#122E46] hover:text-[#C5A880] py-1"
              >
                <User className="w-4 h-4 text-[#122E46]" />
                <span>My Account &amp; Sanctuary</span>
              </Link>
              <Link
                href="/wishlist"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between text-[13px] font-medium text-[#122E46] hover:text-[#C5A880] py-1"
              >
                <div className="flex items-center gap-2.5">
                  <Heart className="w-4 h-4 text-[#122E46]" />
                  <span>Sacred Wishlist</span>
                </div>
                {isHydrated && wishlistCount > 0 && (
                  <span className="bg-[#122E46] text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
                    {wishlistCount}
                  </span>
                )}
              </Link>
            </div>
            <div className="pt-1">
              <p className="text-xs text-stone-500 font-serif italic mb-2">
                &ldquo;Wear what aligns with your soul.&rdquo;
              </p>
            </div>
          </div>
        )}
      </header>
      </div>
    </>
  );
}
