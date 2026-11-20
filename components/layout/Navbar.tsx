"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { useCart } from "@/context/CartContext";
import { PRODUCTS, DEMO_PRODUCT_T01 } from "@/lib/products";
import {
  ShoppingBag,
  Search,
  Menu,
  X,
  User,
  ChevronDown,
  Heart,
  ArrowRight,
} from "lucide-react";

const POPULAR_SUGGESTIONS = [
  "TULSI KANTHI MALA 1 ROUND",
  "TULSI RADHA KRISHAN KANTHI MALA (T01)",
  "100% NATURAL TULSI WOOD",
  "VRINDAVAN BRAJ ORIGIN",
  "AUTHENTICITY LAB CERTIFIED",
];

const ANNOUNCEMENTS = [
  "🌿 Tulsi Kanthi Mala 1 Round (SKU: T01) • 100% Natural Vrindavan Tulsi Wood 🌿",
  "✨ Authenticity Lab Certificate Included With Every Acquisition ✨",
  "🪔 Associated Deities: Shri Krishna • Single Round 2.5mm Beige Beads 🪔",
  "🕊️ Free Sacred Insured Delivery Across India • Vrindavan Sourced 🕊️",
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
  const searchInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 40);

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

  // Handle body overflow lock and Escape key when search modal is open
  useEffect(() => {
    if (searchOpen) {
      document.body.style.overflow = "hidden";
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape") {
          setSearchOpen(false);
        }
      };
      window.addEventListener("keydown", handleKeyDown);
      return () => {
        document.body.style.overflow = "";
        window.removeEventListener("keydown", handleKeyDown);
      };
    } else {
      document.body.style.overflow = "";
    }
  }, [searchOpen]);

  // Focus input smoothly after modal starts sliding down
  useEffect(() => {
    if (searchOpen) {
      const timer = setTimeout(() => {
        searchInputRef.current?.focus();
      }, 180);
      return () => clearTimeout(timer);
    } else {
      searchInputRef.current?.blur();
    }
  }, [searchOpen]);

  // Demo restriction: Surface only Tulsi Mala T01 in search overlay
  const demoProductList = [DEMO_PRODUCT_T01];
  const filteredProducts = demoProductList;

  // Dynamic suggestions matching T01 sacred terms
  const suggestions = searchQuery.trim()
    ? POPULAR_SUGGESTIONS.filter((s) =>
        s.toLowerCase().includes(searchQuery.toLowerCase().trim())
      ).slice(0, 4)
    : POPULAR_SUGGESTIONS.slice(0, 4);

  // Client Presentation Demo: Navigation focused exclusively on Tulsi Mala T01
  const shopCategories = [
    { name: "Tulsi Kanthi Mala 1 Round (T01)", href: "/products/tulsi/t-01" },
    { name: "Discover Product (T01)", href: "/#discover-product" },
    { name: "Principles to wear Tulsi", href: "/principles-to-wear-tulsi" },
    { name: "Authenticity & Certificate", href: "/#authenticity" },
  ];

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/products?search=${encodeURIComponent(searchQuery.trim())}`);
      setSearchOpen(false);
    }
  };

  const isHomePage = pathname === "/";
  const isTransparent = isHomePage && !isScrolled && !mobileMenuOpen;

  return (
    <>
      {/* Spacer to preserve document layout height on non-home pages */}
      {!isHomePage && (
        <div className="w-full h-[106px] sm:h-[108px] pointer-events-none" aria-hidden="true" />
      )}

      {/* Main Fixed Header */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isVisible ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        {/* Top Announcement Bar (Shown on non-home pages, or hidden on home hero to match AXELS reference) */}
        {!isHomePage && (
          <div className="w-full bg-[#FFEDE2] border-b border-[#E8DEC8]/60 text-[#122E46] h-7 sm:h-[28px] flex items-center overflow-hidden select-none">
            <div className="animate-marquee flex items-center gap-12 text-[11px] sm:text-xs font-medium tracking-wide">
              {[...ANNOUNCEMENTS, ...ANNOUNCEMENTS].map((item, idx) => (
                <span key={idx} className="flex items-center gap-2 whitespace-nowrap">
                  <span>{item}</span>
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Main Navbar: Transparent overlay on home hero, solid white when scrolled or on other pages */}
        <div
          className={`w-full transition-all duration-300 ${
            isTransparent
              ? "bg-transparent text-white border-b border-transparent shadow-none"
              : "bg-white/95 backdrop-blur-md text-[#122E46] border-b border-[#EBE7DE] shadow-[0_4px_25px_-5px_rgba(0,0,0,0.08)]"
          }`}
        >
          <div className="w-full px-5 sm:px-8 lg:px-12 xl:px-16 h-[78px] sm:h-[80px] flex items-center justify-between">
            {/* Left: Navigation Links matching AXELS reference layout */}
            <div className="flex-1 flex items-center justify-start gap-4 sm:gap-6">
              {/* Mobile Menu Hamburger Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className={`lg:hidden p-1.5 -ml-1 transition-colors focus:outline-none ${
                  isTransparent
                    ? "text-white hover:text-white/80"
                    : "text-[#122E46] hover:text-[#C5A880]"
                }`}
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>

              {/* Desktop Navigation */}
              <nav className="hidden lg:flex items-center gap-8 xl:gap-10">
                <Link
                  href="/"
                  className={`text-[14px] font-sans font-medium tracking-wide transition-colors ${
                    isTransparent
                      ? "text-white hover:text-white/80"
                      : "text-[#122E46] hover:text-[#C5A880]"
                  }`}
                >
                  Home
                </Link>

                {/* Shop Dropdown */}
                <div className="relative group">
                  <Link
                    href="/products"
                    className={`flex items-center gap-1.5 text-[14px] font-sans font-medium tracking-wide transition-colors py-2 ${
                      isTransparent
                        ? "text-white hover:text-white/80"
                        : "text-[#122E46] hover:text-[#C5A880]"
                    }`}
                  >
                    <span>Shop</span>
                    <ChevronDown className="w-3.5 h-3.5 transition-transform duration-200 group-hover:rotate-180 opacity-80" />
                  </Link>

                  {/* Dropdown Menu */}
                  <div className="absolute top-full left-0 mt-0.5 w-64 bg-white text-[#122E46] shadow-xl rounded-xl border border-[#E2DEC9] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform origin-top translate-y-1 group-hover:translate-y-0 overflow-hidden z-50">
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
                  className={`text-[14px] font-sans font-medium tracking-wide transition-colors ${
                    isTransparent
                      ? "text-white hover:text-white/80"
                      : "text-[#122E46] hover:text-[#C5A880]"
                  }`}
                >
                  About Us
                </Link>
              </nav>
            </div>

            {/* Center: Brand Logo in Svastiman's signature Playfair Display font */}
            <div className="shrink-0 flex items-center justify-center px-4">
              <Link
                href="/"
                className="group flex items-center justify-center select-none"
                aria-label="Svastimān Home"
              >
                <span
                  className={`font-serif text-2xl lg:text-[28px] font-normal tracking-[0.22em] uppercase transition-colors ${
                    isTransparent ? "text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)]" : "text-[#122E46]"
                  }`}
                >
                  Svastimān
                </span>
              </Link>
            </div>

            {/* Right: Actions (Search, Account, Cart) matching AXELS reference typography & icons */}
            <div
              className={`flex-1 flex items-center justify-end gap-5 sm:gap-7 lg:gap-8 xl:gap-9 transition-colors ${
                isTransparent ? "text-white" : "text-[#122E46]"
              }`}
            >
              {/* Search */}
              <button
                onClick={() => setSearchOpen(!searchOpen)}
                className={`flex items-center gap-1.5 p-1 transition-colors focus:outline-none cursor-pointer group ${
                  isTransparent
                    ? "text-white hover:text-white/80"
                    : "text-[#122E46] hover:text-[#C5A880]"
                }`}
                title="Search sacred collections"
                aria-label="Search"
              >
                <Search className="w-[18px] h-[18px] stroke-[1.8] group-hover:scale-105 transition-transform" />
                <span className="hidden sm:inline text-[14px] font-sans font-medium tracking-wide">
                  Search
                </span>
              </button>

              {/* Account */}
              <Link
                href="/account"
                className={`flex items-center gap-1.5 p-1 transition-colors group ${
                  isTransparent
                    ? "text-white hover:text-white/80"
                    : "text-[#122E46] hover:text-[#C5A880]"
                }`}
                title="My Account"
                aria-label="My Account"
              >
                <User className="w-[18px] h-[18px] stroke-[1.8] group-hover:scale-105 transition-transform" />
                <span className="hidden sm:inline text-[14px] font-sans font-medium tracking-wide">
                  Account
                </span>
              </Link>

              {/* Cart */}
              <button
                onClick={openCart}
                className={`flex items-center gap-1.5 p-1 transition-colors focus:outline-none cursor-pointer group ${
                  isTransparent
                    ? "text-white hover:text-white/80"
                    : "text-[#122E46] hover:text-[#C5A880]"
                }`}
                title="Shopping Bag"
                aria-label="Shopping Bag"
              >
                <div className="relative flex items-center">
                  <ShoppingBag className="w-[18px] h-[18px] stroke-[1.8] group-hover:scale-105 transition-transform" />
                  {mounted && totalCount > 0 && (
                    <span
                      className={`sm:hidden absolute -top-1.5 -right-2 text-[10px] font-bold leading-none w-3.5 h-3.5 rounded-full flex items-center justify-center ${
                        isTransparent ? "bg-white text-[#122E46]" : "bg-[#122E46] text-white"
                      }`}
                    >
                      {totalCount}
                    </span>
                  )}
                </div>
                <span className="hidden sm:inline text-[14px] font-sans font-medium tracking-wide">
                  Cart
                  {mounted && totalCount > 0 && (
                    <span
                      className={`ml-1 text-[12px] font-semibold ${
                        isTransparent ? "text-white" : "text-[#122E46]"
                      }`}
                    >
                      ({totalCount})
                    </span>
                  )}
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Slide-down Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-[#E2DEC9] bg-[#F9F8F5] px-6 py-6 space-y-4 shadow-xl max-h-[80vh] overflow-y-auto animate-in slide-in-from-top duration-200" data-lenis-prevent>
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
                href="/authenticity-charter"
                onClick={() => setMobileMenuOpen(false)}
                className="block text-base font-medium py-2.5 text-[#122E46] hover:text-[#C5A880] border-b border-[#E2DEC9]/40"
              >
                Authenticity Charter
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

      {/* Full-Page Overlay Search Modal matching reference image layout */}
      <div
        className={`fixed inset-0 z-[100] flex flex-col justify-start transition-opacity duration-500 ease-out ${
          searchOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        aria-hidden={!searchOpen}
      >
        {/* Main Search White Panel (Smooth Slide-Down from Top) */}
        <div
          className={`w-full bg-white border-b border-[#E8E2D5] shadow-2xl relative z-10 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] transform ${
            searchOpen ? "translate-y-0" : "-translate-y-full"
          }`}
        >
          <div className="max-w-6xl mx-auto px-5 sm:px-10 lg:px-12 pt-7 pb-10 sm:pb-12">
            {/* Header: Title and Close button */}
            <div className="flex items-center justify-between pb-3">
              <h2 className="font-sans text-xl sm:text-2xl font-bold tracking-tight text-[#1A1815] uppercase">
                Search
              </h2>
              <button
                type="button"
                onClick={() => setSearchOpen(false)}
                className="text-xs font-sans font-semibold uppercase tracking-[0.18em] text-stone-500 hover:text-[#1A1815] transition-colors cursor-pointer py-1 px-2"
              >
                Close
              </button>
            </div>

            {/* Search Form Input */}
            <form onSubmit={handleSearchSubmit} className="mt-3 mb-8 relative">
              <input
                ref={searchInputRef}
                type="text"
                placeholder="SEARCH FOR PRODUCTS..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-transparent border-b border-[#1A1815] pb-3 text-sm sm:text-base md:text-lg font-sans uppercase tracking-wider text-[#1A1815] placeholder:text-stone-400 focus:outline-none"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery("")}
                  className="absolute right-0 top-1/2 -translate-y-1/2 p-1 text-stone-400 hover:text-stone-700 cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </form>

            {/* Two Column Layout: Suggestions & Products */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12">
              {/* Suggestions Column */}
              <div className="md:col-span-5 lg:col-span-5">
                <span className="block text-[11px] font-sans font-bold uppercase tracking-[0.18em] text-stone-400 mb-4">
                  Suggestions
                </span>
                <div className="flex flex-col space-y-3.5">
                  {suggestions.map((item, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => {
                        setSearchQuery(item);
                        router.push(`/products?search=${encodeURIComponent(item)}`);
                        setSearchOpen(false);
                      }}
                      className="text-left text-xs sm:text-[13px] font-sans font-medium uppercase tracking-wide text-stone-700 hover:text-[#C5A880] transition-colors cursor-pointer truncate"
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </div>

              {/* Products Column */}
              <div className="md:col-span-7 lg:col-span-7">
                <span className="block text-[11px] font-sans font-bold uppercase tracking-[0.18em] text-stone-400 mb-4">
                  Products
                </span>
                <div className="flex flex-col space-y-3 max-h-[360px] overflow-y-auto pr-1" data-lenis-prevent>
                  {filteredProducts.map((prod) => (
                    <Link
                      key={prod.id}
                      href={prod.href}
                      onClick={() => setSearchOpen(false)}
                      className="flex items-center gap-3.5 p-1.5 rounded-lg hover:bg-[#F9F8F5] transition-colors group"
                    >
                      <div className="relative w-12 h-14 sm:w-14 sm:h-16 rounded-md overflow-hidden bg-[#FAF8F5] border border-stone-200 shrink-0">
                        <Image
                          src={prod.image}
                          alt={prod.name}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                          sizes="64px"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="text-xs sm:text-[13px] font-sans font-medium uppercase tracking-wide text-stone-800 group-hover:text-[#C5A880] transition-colors truncate">
                          {prod.name}
                        </h4>
                        <p className="text-xs font-sans text-stone-500 mt-0.5 font-semibold">
                          ₹{prod.price.toLocaleString("en-IN")}
                        </p>
                      </div>
                    </Link>
                  ))}
                  {filteredProducts.length === 0 && (
                    <div className="py-6 text-center text-stone-500">
                      <p className="text-sm">No sacred creations match &ldquo;{searchQuery}&rdquo;</p>
                      <Link
                        href="/products"
                        onClick={() => setSearchOpen(false)}
                        className="mt-2 inline-block text-xs uppercase font-semibold text-[#7A6242] underline"
                      >
                        Browse all collections
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Bottom Search Form Submit Link */}
            {searchQuery.trim() && (
              <div className="mt-6 pt-4 border-t border-stone-100 flex justify-end">
                <button
                  type="button"
                  onClick={handleSearchSubmit}
                  className="inline-flex items-center gap-2 text-xs font-sans font-semibold uppercase tracking-wider text-[#122E46] hover:text-[#C5A880] transition-colors cursor-pointer"
                >
                  <span>View all results for &ldquo;{searchQuery}&rdquo;</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Dimmed Blurred Backdrop (Click to Close) */}
        <div
          onClick={() => setSearchOpen(false)}
          className={`flex-1 bg-black/45 backdrop-blur-sm cursor-pointer transition-opacity duration-500 ease-out ${
            searchOpen ? "opacity-100" : "opacity-0"
          }`}
          aria-label="Close search"
        />
      </div>
    </>
  );
}
