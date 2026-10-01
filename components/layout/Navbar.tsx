"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Logo } from "@/components/common/Logo";
import { useCart } from "@/context/CartContext";
import {
  ShoppingBag,
  Search,
  Sparkles,
  Menu,
  X,
  Compass,
  Heart,
  ChevronDown,
  SunMedium,
} from "lucide-react";

export function Navbar() {
  const { openCart, totalCount } = useCart();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const navLinks = [
    { name: "Handcrafted", href: "/collections/handcrafted", badge: "Exclusive" },
    { name: "Best Sellers", href: "/collections/best-sellers" },
    { name: "New Arrivals", href: "/collections/new-arrivals" },
    { name: "Gifts", href: "/collections/gifts" },
    {
      name: "Shop",
      href: "/collections/all",
      children: [
        { name: "Zodiac Bracelets", href: "/collections/zodiac-bracelets" },
        { name: "Sacred Malas", href: "/collections/sacred-malas" },
        { name: "Healing Crystals", href: "/collections/healing-crystals" },
      ],
    },
    {
      name: "Find Your Crystals",
      href: "/collections/all",
      children: [
        { name: "Energy Finder Tool", href: "/tools/energy-finder", highlight: true },
        { name: "Shop by Intention", href: "/collections/intentions" },
      ],
    },
    { name: "Brand Story", href: "/about" },
  ];

  return (
    <>
      {/* Top Auspicious Announcement Bar */}
      <div className="bg-[#0A1B2A] text-[#ECEADE] py-2 px-4 text-center text-xs tracking-wider border-b border-[#C5A880]/20 flex items-center justify-center gap-3">
        <span className="font-light">
          Vedic Consecrated &amp; Energized Natural Stones | Free Delivery above ₹1,999
        </span>
      </div>

      {/* Main Sticky Navigation */}
      <header className="sticky top-0 z-40 bg-[#F9F8F5]/95 backdrop-blur-md border-b border-[#E2DEC9] transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-[#132F47] hover:bg-[#ECEADE] rounded-lg transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

          {/* Logo */}
          <div className="flex items-center">
            <Logo />
          </div>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center space-x-6">
            {navLinks.map((link) => (
              <div key={link.name} className="relative group">
                {link.badge && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-red-600 text-white text-[9px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded-sm">
                    {link.badge}
                  </span>
                )}
                
                {link.children ? (
                  <div className="flex items-center gap-1 cursor-pointer py-2 text-sm font-medium text-[#132F47] hover:text-[#C5A880] transition-colors">
                    {link.name}
                    <ChevronDown className="w-3.5 h-3.5" />
                    
                    {/* Dropdown Menu */}
                    <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-48 bg-white shadow-xl rounded-xl border border-[#E2DEC9] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top translate-y-2 group-hover:translate-y-0 overflow-hidden">
                      <div className="py-2">
                        {link.children.map((child) => (
                          <Link
                            key={child.name}
                            href={child.href}
                            className={`block px-4 py-2.5 text-sm hover:bg-[#F9F8F5] transition-colors ${
                              child.highlight 
                                ? "text-[#C5A880] font-semibold bg-[#132F47]/5 hover:bg-[#132F47]/10" 
                                : "text-stone-700 hover:text-[#132F47]"
                            }`}
                          >
                            <div className="flex items-center gap-2">
                              {child.highlight && <SunMedium className="w-3.5 h-3.5 text-[#C5A880]" />}
                              {child.name}
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <Link
                    href={link.href}
                    className="text-sm font-medium text-[#132F47] hover:text-[#C5A880] transition-colors duration-200 py-2 relative block"
                  >
                    {link.name}
                    <span className="absolute bottom-1 left-0 w-0 h-0.5 bg-[#C5A880] transition-all duration-300 group-hover:w-full" />
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* Right Action Icons */}
          <div className="flex items-center space-x-2 sm:space-x-4">
            {/* Search Button */}
            <button
              onClick={() => setSearchOpen(!searchOpen)}
              className="p-2 text-[#132F47] hover:text-[#C5A880] hover:bg-[#ECEADE] rounded-full transition-colors"
              title="Search gemstones & intentions"
            >
              <Search className="w-5 h-5" />
            </button>

            {/* Cart Icon */}
            <button
              onClick={openCart}
              className="relative p-2.5 bg-[#132F47] text-[#ECEADE] rounded-full hover:bg-[#1A3F5E] shadow-sm transition-all active:scale-95 flex items-center gap-2"
              title="Sacred Bag"
            >
              <ShoppingBag className="w-4 h-4 text-[#C5A880]" />
              <span className="hidden sm:inline text-xs font-semibold pr-1">Bag</span>
              {totalCount > 0 && (
                <span className="absolute -top-1.5 -right-1.5 bg-[#C5A880] text-[#111111] text-[11px] font-bold w-5 h-5 rounded-full flex items-center justify-center border-2 border-white shadow-xs">
                  {totalCount}
                </span>
              )}
            </button>
          </div>
        </div>

        {/* Expandable Search Drawer */}
        {searchOpen && (
          <div className="border-t border-[#E2DEC9] bg-[#ECEADE] px-4 py-4 animate-in slide-in-from-top duration-200">
            <div className="max-w-3xl mx-auto flex items-center gap-3 bg-white px-4 py-2 rounded-xl border border-[#C5A880]/50 shadow-inner">
              <Search className="w-5 h-5 text-stone-400" />
              <input
                type="text"
                placeholder="Search by crystal, zodiac sign, or intention (e.g. Tiger Eye, Aries, Protection)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-transparent border-none text-sm text-[#111111] focus:outline-none placeholder:text-stone-400"
                autoFocus
              />
              <button
                onClick={() => setSearchOpen(false)}
                className="text-stone-400 hover:text-stone-700"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {/* Mobile Slide-down Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-[#E2DEC9] bg-[#F9F8F5] px-6 py-6 space-y-4 shadow-xl">
            {navLinks.map((link) => (
              <div key={link.name} className="border-b border-[#E2DEC9]/40">
                {link.children ? (
                  <div className="py-2">
                    <span className="block text-base font-medium text-[#132F47] mb-2">{link.name}</span>
                    <div className="pl-4 space-y-2 border-l-2 border-[#C5A880]/30">
                      {link.children.map((child) => (
                        <Link
                          key={child.name}
                          href={child.href}
                          onClick={() => setMobileMenuOpen(false)}
                          className={`block text-sm py-1 ${child.highlight ? "text-[#C5A880] font-semibold" : "text-stone-600 hover:text-[#132F47]"}`}
                        >
                          {child.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block text-base font-medium text-[#132F47] hover:text-[#C5A880] py-2 relative"
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
            <div className="pt-2">
              <p className="text-xs text-stone-500 font-serif italic mb-2">
                &ldquo;Wear what aligns with your soul.&rdquo;
              </p>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
