"use client";

import React, { useState } from "react";
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
  const { openCart, totalCount } = useCart();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

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
        { name: "Zodiac Jewellery", href: "/#zodiac-finder", desc: "Astrological chart & birthstones" },
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
      {/* Top Announcement Marquee Bar */}
      <div className="bg-[#1A1815] text-[#FAF8F5] py-2.5 overflow-hidden border-b border-[#C5A880]/20 select-none">
        <div className="animate-marquee flex items-center whitespace-nowrap">
          {[...Array(4)].map((_, groupIdx) => (
            <div
              key={groupIdx}
              className="flex items-center gap-8 md:gap-14 mx-4 md:mx-7 text-[11px] font-medium tracking-[0.14em] uppercase"
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
      <header className="sticky top-0 z-40 bg-[#F9F8F5]/95 backdrop-blur-md border-b border-[#E2DEC9] transition-all">
        <div className="w-full px-5 sm:px-8 lg:px-12 h-20 flex items-center justify-between">
          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-[#1A1815] hover:text-[#C5A880] transition-colors -ml-2"
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
                  <div className="flex items-center gap-1 cursor-pointer py-2 text-sm font-medium text-[#1A1815] hover:text-[#C5A880] transition-colors">
                    {link.name}
                    <ChevronDown className="w-3.5 h-3.5" />

                    {/* Dropdown Menu */}
                    <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-56 bg-white shadow-xl rounded-xl border border-[#E2DEC9] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top translate-y-2 group-hover:translate-y-0 overflow-hidden">
                      <div className="py-2">
                        {link.children.map((child) => (
                          <a
                            key={child.name}
                            href={child.href}
                            className="block px-4 py-2.5 hover:bg-[#F9F8F5] transition-colors text-stone-700 hover:text-[#0C161D]"
                          >
                            <div className="flex flex-col">
                              <span className="font-medium text-xs text-[#0C161D]">{child.name}</span>
                              {child.desc && <span className="text-[10px] text-stone-400 font-light">{child.desc}</span>}
                            </div>
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <Link
                    href={link.href}
                    className="text-sm font-medium text-[#1A1815] hover:text-[#C5A880] transition-colors duration-200 py-2 relative block"
                  >
                    {link.name}
                    <span className="absolute bottom-1 left-0 w-0 h-0.5 bg-[#C5A880] transition-all duration-300 group-hover:w-full" />
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* Right Action Icons */}
          <div className="flex items-center space-x-4 sm:space-x-5 text-[#1A1815]">
            <button
              onClick={() => setSearchOpen(!searchOpen)}
              className="hover:text-[#C5A880] transition-colors"
              title="Search"
            >
              <Search className="w-5 h-5 stroke-[1.5]" />
            </button>
            
            <button
              className="hover:text-[#C5A880] transition-colors"
              title="Account"
            >
              <User className="w-5 h-5 stroke-[1.5]" />
            </button>
            
            <button
              className="hover:text-[#C5A880] transition-colors"
              title="Wishlist"
            >
              <Heart className="w-5 h-5 stroke-[1.5]" />
            </button>

            <button
              onClick={openCart}
              className="relative hover:text-[#C5A880] transition-colors"
              title="Bag"
            >
              <ShoppingBag className="w-5 h-5 stroke-[1.5]" />
              {totalCount > 0 && (
                <span className="absolute -top-1.5 -right-2 bg-[#C5A880] text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
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
                placeholder="Search sacred materials, origin, or tradition (e.g. 5-Mukhi Rudraksha, Vrindavan Tulsi, Lapis Lazuli)..."
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
                    <span className="block text-base font-medium text-[#1A1815] mb-2">{link.name}</span>
                    <div className="pl-4 space-y-2 border-l-2 border-[#C5A880]/30">
                      {link.children.map((child) => (
                        <a
                          key={child.name}
                          href={child.href}
                          onClick={() => setMobileMenuOpen(false)}
                          className="block text-sm py-1 text-stone-600 hover:text-[#0C161D]"
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
                    className="block text-base font-medium text-[#1A1815] hover:text-[#C5A880] py-2 relative"
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
