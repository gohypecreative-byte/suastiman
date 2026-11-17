"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useCart } from "@/context/CartContext";
import {
  ShoppingBag,
  Search,
  Menu,
  X,
  User,
  Zap,
  ChevronDown,
  Heart,
} from "lucide-react";

const ANNOUNCEMENTS = [
  "🔥 Buy 1 Get 1 Free on all sacred malas & botanicals 🔥",
  "✨ 100% Certified Wild Himalayan Botanicals & Lab-Tested Mukhis ✨",
  "🪔 Complimentary Gangajal & Sanctified Pouch on Orders Above ₹999 🪔",
  "🌿 Hand-Rolled Vrindavan Krishna Tulsi & Ancient 5-Mukhi Malas 🌿",
  "🕊️ Free All-India Sacred Insured Delivery On All Pre-Paid Orders 🕊️",
];

export function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const { openCart, totalCount, wishlistCount } = useCart();
  const [mounted, setMounted] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [isVisible, setIsVisible] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 15);

      // On homepage, keep navbar visible throughout the Hero section scroll
      // preventing the navbar from hiding and exposing a blank whitish spacer gap
      const isHeroActive =
        pathname === "/"
          ? currentScrollY <= (typeof window !== "undefined" ? window.innerHeight - 60 : 700)
          : currentScrollY <= 30;

      if (isHeroActive) {
        setIsVisible(true);
        lastScrollY.current = currentScrollY;
        return;
      }

      // If mobile menu or search drawer is open, keep navbar visible
      if (mobileMenuOpen || searchOpen) {
        setIsVisible(true);
        lastScrollY.current = currentScrollY;
        return;
      }

      const diff = currentScrollY - lastScrollY.current;
      if (Math.abs(diff) < 6) return;

      if (diff > 0) {
        setIsVisible(false); // scrolling down
      } else {
        setIsVisible(true); // scrolling up
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [mobileMenuOpen, searchOpen, pathname]);

  // Close menus on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setSearchOpen(false);
  }, [pathname]);

  const shopCategories = [
    { name: "All Collections", href: "/products" },
    { name: "Vrindavan Tulsi", href: "/products?category=tulsi" },
    { name: "Himalayan Rudraksha", href: "/products?category=rudraksha" },
    { name: "Spiritual Bracelets", href: "/products?category=bracelets" },
    { name: "108 Japa Malas", href: "/products?category=malas" },
    { name: "Earth Gemstones", href: "/products?category=gemstones" },
    { name: "Zodiac Jewellery", href: "/tools/energy-finder" },
    { name: "Find Your Crystal Calculator", href: "/pages/profession-crystal-mapping-calculator" },
  ];

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/products?search=${encodeURIComponent(searchQuery.trim())}`);
      setSearchOpen(false);
    }
  };

  return (
    <>
      {/* Spacer to preserve document layout height (28px Announcement Bar + 80px Navbar = 108px) */}
      <div className="w-full h-[106px] sm:h-[108px] pointer-events-none" aria-hidden="true" />

      {/* Main Fixed Header (Top Announcement Bar + Main Navbar) */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isVisible ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        {/* Top Announcement Bar matching reference layout with sacred website offerings */}
        <div className="w-full bg-[#FFEDE2] border-b border-[#E8DEC8]/60 text-[#122E46] h-7 sm:h-[28px] flex items-center overflow-hidden select-none">
          <div className="animate-marquee flex items-center gap-12 text-[11px] sm:text-xs font-medium tracking-wide">
            {[...ANNOUNCEMENTS, ...ANNOUNCEMENTS].map((item, idx) => (
              <span key={idx} className="flex items-center gap-2 whitespace-nowrap">
                <span>{item}</span>
              </span>
            ))}
          </div>
        </div>

        {/* Main Navbar */}
        <div
          className={`w-full bg-[#FFFFFF]/98 backdrop-blur-md text-[#122E46] border-b border-[#EBE7DE] transition-all duration-300 ${
            isScrolled ? "shadow-[0_4px_25px_-5px_rgba(0,0,0,0.08)] bg-white" : ""
          }`}
        >
          <div className="w-full px-5 sm:px-8 h-[78px] sm:h-[80px] flex items-center justify-between">
          {/* Left: Navigation Links matching reference layout */}
          <div className="flex items-center gap-4 sm:gap-6">
            {/* Mobile Menu Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-1.5 -ml-1 text-[#122E46] hover:text-[#C5A880] transition-colors focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-5 xl:gap-6">
              <Link
                href="/"
                className="text-[14px] font-sans font-medium tracking-wide transition-colors text-[#122E46] hover:text-[#C5A880]"
              >
                Home
              </Link>

              {/* Shop Dropdown */}
              <div className="relative group">
                <Link
                  href="/products"
                  className="flex items-center gap-1.5 text-[14px] font-sans font-medium tracking-wide transition-colors py-2 text-[#122E46] hover:text-[#C5A880]"
                >
                  <span>Shop</span>
                  <ChevronDown className="w-3.5 h-3.5 transition-transform duration-200 group-hover:rotate-180 opacity-80" />
                </Link>

                {/* Dropdown Menu */}
                <div className="absolute top-full left-0 mt-0.5 w-64 bg-white shadow-xl rounded-xl border border-[#E2DEC9] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform origin-top translate-y-1 group-hover:translate-y-0 overflow-hidden z-50">
                  <div className="py-2">
                    {shopCategories.map((cat) => (
                      <Link
                        key={cat.name}
                        href={cat.href}
                        className="block px-4 py-2.5 text-[13px] font-medium text-stone-700 hover:text-[#122E46] hover:bg-[#F9F8F5] transition-colors"
                      >
                        {cat.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              <Link
                href="/about"
                className="text-[14px] font-sans font-medium tracking-wide transition-colors text-[#122E46] hover:text-[#C5A880]"
              >
                About Us
              </Link>
            </nav>
          </div>

          {/* Center: Brand Logo in Svastiman's signature Playfair Display font */}
          <div className="flex items-center justify-center">
            <Link
              href="/"
              className="group flex items-center justify-center select-none"
              aria-label="Svastimān Home"
            >
              <span className="font-serif text-2xl lg:text-[28px] font-normal tracking-[0.22em] uppercase text-[#122E46] transition-opacity group-hover:opacity-90">
                Svastimān
              </span>
            </Link>
          </div>

          {/* Right: Actions Icons matching original colors */}
          <div className="flex items-center gap-5 text-[#122E46]">
            {/* User Account with original gold accent */}
            <Link
              href="/account"
              className="relative p-1 text-[#122E46] hover:text-[#C5A880] transition-colors flex items-center group"
              title="My Account"
              aria-label="My Account"
            >
              <User className="w-[21px] h-[21px] stroke-[1.8]" />
              <span className="absolute -top-1 -right-1 text-[#C5A880] group-hover:scale-110 transition-transform">
                <Zap className="w-3.5 h-3.5 fill-[#C5A880] stroke-[#C5A880]" />
              </span>
            </Link>

            {/* Search Icon */}
            <button
              onClick={() => setSearchOpen(!searchOpen)}
              className="p-1 text-[#122E46] hover:text-[#C5A880] transition-colors focus:outline-none cursor-pointer"
              title="Search sacred collections"
              aria-label="Search"
            >
              <Search className="w-[21px] h-[21px] stroke-[1.8]" />
            </button>

            {/* Cart Bag with '0' / total count badge */}
            <button
              onClick={openCart}
              className="relative p-1 text-[#122E46] hover:text-[#C5A880] transition-colors focus:outline-none cursor-pointer flex items-center"
              title="Shopping Bag"
              aria-label="Shopping Bag"
            >
              <ShoppingBag className="w-[21px] h-[21px] stroke-[1.8]" />
              <span className="absolute -top-1.5 -right-2 text-[11px] font-semibold leading-none text-[#122E46] tracking-tight">
                {mounted ? totalCount : 0}
              </span>
            </button>
          </div>
        </div>
      </div>

        {/* Expandable Search Drawer */}
        {searchOpen && (
          <div className="border-t border-[#E2DEC9] bg-[#ECEADE] px-4 py-3 sm:py-4 animate-in slide-in-from-top-2 duration-200">
            <form onSubmit={handleSearchSubmit} className="max-w-2xl mx-auto flex items-center gap-3 bg-white px-4 py-2.5 rounded-xl border border-[#C5A880]/50 shadow-inner">
              <Search className="w-5 h-5 text-stone-500 shrink-0" />
              <input
                type="text"
                placeholder="Search sacred malas, gemstones, tulsi, rudraksha..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-transparent border-none text-sm text-[#111111] focus:outline-none placeholder:text-stone-400 font-sans"
                autoFocus
              />
              <button
                type="button"
                onClick={() => setSearchOpen(false)}
                className="text-stone-400 hover:text-stone-700 p-1 shrink-0"
              >
                <X className="w-4 h-4" />
              </button>
            </form>
          </div>
        )}

        {/* Mobile Slide-down Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-[#E2DEC9] bg-[#F9F8F5] px-6 py-6 space-y-4 shadow-xl max-h-[80vh] overflow-y-auto animate-in slide-in-from-top duration-200">
            <div className="space-y-1">
              <Link
                href="/"
                onClick={() => setMobileMenuOpen(false)}
                className="block text-base font-medium py-2.5 text-[#122E46] hover:text-[#C5A880] border-b border-[#E2DEC9]/40"
              >
                Home
              </Link>
              <div className="py-2.5 border-b border-[#E2DEC9]/40">
                <span className="block text-xs uppercase tracking-widest text-[#122E46] font-semibold mb-2">
                  Shop Collections
                </span>
                <div className="pl-3 space-y-2 border-l-2 border-[#122E46]/30">
                  {shopCategories.map((cat) => (
                    <Link
                      key={cat.name}
                      href={cat.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="block text-sm py-1 text-stone-600 hover:text-[#122E46]"
                    >
                      {cat.name}
                    </Link>
                  ))}
                </div>
              </div>
              <Link
                href="/about"
                onClick={() => setMobileMenuOpen(false)}
                className="block text-base font-medium py-2.5 text-[#122E46] hover:text-[#C5A880] border-b border-[#E2DEC9]/40"
              >
                About Us
              </Link>
              <Link
                href="/pages/profession-crystal-mapping-calculator"
                onClick={() => setMobileMenuOpen(false)}
                className="block text-base font-medium py-2.5 text-[#122E46] hover:text-[#C5A880] border-b border-[#E2DEC9]/40"
              >
                Crystal Calculator
              </Link>
              <Link
                href="/blog"
                onClick={() => setMobileMenuOpen(false)}
                className="block text-base font-medium py-2.5 text-[#122E46] hover:text-[#C5A880] border-b border-[#E2DEC9]/40"
              >
                Journal & Traditions
              </Link>
            </div>

            <div className="pt-2 flex flex-col gap-2.5 border-t border-[#E2DEC9]/60">
              <Link
                href="/account"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-2.5 text-sm font-medium text-[#122E46] hover:text-[#C5A880] py-1"
              >
                <User className="w-4 h-4 text-[#122E46]" />
                <span>My Account</span>
              </Link>
              <Link
                href="/wishlist"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between text-sm font-medium text-[#122E46] hover:text-[#C5A880] py-1"
              >
                <div className="flex items-center gap-2.5">
                  <Heart className="w-4 h-4 text-[#122E46]" />
                  <span>Sacred Wishlist</span>
                </div>
                {mounted && wishlistCount > 0 && (
                  <span className="bg-[#122E46] text-white text-[11px] font-bold px-2 py-0.5 rounded-full">
                    {wishlistCount}
                  </span>
                )}
              </Link>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
