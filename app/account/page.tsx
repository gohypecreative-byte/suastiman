"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CartDrawer } from "@/components/cart/CartDrawer";
import { BottomNav } from "@/components/layout/BottomNav";
import { CartProvider } from "@/context/CartContext";
import {
  User,
  Package,
  MapPin,
  ShieldCheck,
  Settings,
  LogOut,
  ChevronRight,
  Download,
  Truck,
  CheckCircle2,
  ArrowRight,
  Lock,
  Mail,
  Phone,
  Plus,
  Compass,
  Heart,
  Eye,
  Check,
  AlertCircle,
  Sparkles,
  ExternalLink,
  Flame,
  Sun,
  FileCheck2,
  QrCode,
  Calendar,
  Clock,
  Search,
  ChevronDown,
  RotateCcw,
} from "lucide-react";

type AccountTab = "orders" | "spiritual" | "addresses" | "certificates" | "settings";

export default function AccountPage() {
  const router = useRouter();
  const [isSignedIn, setIsSignedIn] = useState(true);
  const [activeTab, setActiveTab] = useState<AccountTab>("orders");

  // User Profile States
  const [userName, setUserName] = useState("Ayush Sharma");
  const [userEmail, setUserEmail] = useState("ayush.sharma@svastiman.com");
  const [userPhone, setUserPhone] = useState("+91 98765 43210");
  const [saveSuccess, setSaveSuccess] = useState(false);

  // Amazon-Style Your Orders States
  const [orderSubTab, setOrderSubTab] = useState<"orders" | "buy_again" | "not_dispatched" | "cancelled">("orders");
  const [orderSearchQuery, setOrderSearchQuery] = useState("");
  const [orderTimeframe, setOrderTimeframe] = useState("past three months");
  const [trackingModalOrder, setTrackingModalOrder] = useState<any | null>(null);

  const amazonOrdersData = [
    {
      id: "SVM-90214-88",
      date: "23 October 2026",
      total: "₹4,798",
      recipient: userName,
      statusTitle: "Delivered 24 Oct 2026",
      statusSubtitle: "Parcel was handed to resident.",
      isDelivered: true,
      isCancelled: false,
      items: [
        {
          title: "Vrindavan Krishna Tulsi 108 Japa Mala",
          details: "Naturally seasoned sacred Vrindavan wood • Certified Origin • Qty: 1",
          price: "₹1,899",
          image: "/images/products/prod2.webp",
        },
        {
          title: "Raw Earth Lapis Lazuli Energy Bracelet",
          details: "Untreated metamorphic gemstone matrix • Stretch Fit • Qty: 1",
          price: "₹1,999",
          image: "/images/products/prod3.webp",
        },
      ],
    },
    {
      id: "SVM-82190-41",
      date: "18 September 2026",
      total: "₹2,899",
      recipient: userName,
      statusTitle: "Delivered 22 Sep 2026",
      statusSubtitle: "Parcel was handed to resident.",
      isDelivered: true,
      isCancelled: false,
      items: [
        {
          title: "Himalayan Rudraksha 108 Japa Mala (5-Mukhi Taplejung)",
          details: "Lab X-Ray Tested • Handcrafted Sacred Nepal Cotton • Qty: 1",
          price: "₹2,899",
          image: "/images/products/prod1.webp",
        },
      ],
    },
    {
      id: "SVM-71043-12",
      date: "14 August 2026",
      total: "₹3,450",
      recipient: userName,
      statusTitle: "Delivered 18 Aug 2026",
      statusSubtitle: "Package was handed to resident.",
      isDelivered: true,
      isCancelled: false,
      items: [
        {
          title: "Natural Untreated Yellow Sapphire Energy Talisman",
          details: "Vedic Grade Gemstone • Certified Geological Provenance • Qty: 1",
          price: "₹3,450",
          image: "/images/products/prod4.webp",
        },
      ],
    },
  ];

  // Provenance Certificate Preview Modal
  const [selectedCert, setSelectedCert] = useState<string | null>(null);

  // Address Modal State
  const [showAddressModal, setShowAddressModal] = useState(false);
  const [addresses, setAddresses] = useState([
    {
      id: "addr-1",
      title: "Home Sanctuary (Default)",
      recipient: "Ayush Sharma",
      street: "Flat 402, Vrindavan Heights, Greater Kailash II",
      city: "New Delhi",
      state: "Delhi",
      pincode: "110048",
      phone: "+91 98765 43210",
      isDefault: true,
    },
    {
      id: "addr-2",
      title: "Work / Atelier Studio",
      recipient: "Ayush Sharma",
      street: "Studio 14, DLF Cyber City, Phase II",
      city: "Gurugram",
      state: "Haryana",
      pincode: "122002",
      phone: "+91 98765 43210",
      isDefault: false,
    },
  ]);

  const [newAddress, setNewAddress] = useState({
    title: "Secondary Residence",
    recipient: "",
    street: "",
    city: "",
    state: "",
    pincode: "",
    phone: "",
  });

  // Sync with localStorage on load
  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedName = localStorage.getItem("svastiman_user_name");
      const loggedInStatus = localStorage.getItem("svastiman_logged_in");
      if (storedName) {
        setUserName(storedName);
        if (!userEmail.includes("@")) {
          setUserEmail(`${storedName.toLowerCase().replace(/\s+/g, ".")}@svastiman.com`);
        }
      }
      if (loggedInStatus === "false") {
        setIsSignedIn(false);
        router.replace("/login");
      }
    }
  }, [router]);

  const handleAddAddress = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newAddress.recipient || !newAddress.street) return;
    setAddresses([
      ...addresses,
      {
        id: `addr-${Date.now()}`,
        ...newAddress,
        isDefault: false,
      },
    ]);
    setShowAddressModal(false);
    setNewAddress({
      title: "Secondary Residence",
      recipient: "",
      street: "",
      city: "",
      state: "",
      pincode: "",
      phone: "",
    });
  };

  const handleSaveProfile = (e: React.FormEvent) => {
    e.preventDefault();
    if (typeof window !== "undefined") {
      localStorage.setItem("svastiman_user_name", userName);
    }
    setSaveSuccess(true);
    setTimeout(() => setSaveSuccess(false), 2500);
  };

  const handleSignOut = () => {
    if (typeof window !== "undefined") {
      localStorage.setItem("svastiman_logged_in", "false");
    }
    setIsSignedIn(false);
    router.push("/login");
  };

  const handleDemoSignIn = () => {
    if (typeof window !== "undefined") {
      localStorage.setItem("svastiman_logged_in", "true");
      localStorage.setItem("svastiman_user_name", "Ayush Sharma");
    }
    setUserName("Ayush Sharma");
    setIsSignedIn(true);
  };

  return (
    <CartProvider>
      <div className="min-h-screen flex flex-col bg-[#F9F8F5] text-[#111111]">
        <Navbar />

        <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          {!isSignedIn ? (
            /* Direct redirect to Login page */
            <div className="py-20 text-center space-y-4">
              <div className="w-10 h-10 border-2 border-[#122E46] border-t-transparent rounded-full animate-spin mx-auto" />
              <p className="text-xs font-sans uppercase tracking-wider text-stone-500">
                Redirecting to Sanctuary Login...
              </p>
            </div>
          ) : (
            /* =========================================================================
               AUTHENTICATED ACCOUNT DASHBOARD VIEW
               ========================================================================= */
            <div className="space-y-8 animate-in fade-in duration-300">
              
              {/* Profile Top Banner Card (Regal Obsidian Navy & Gold Finish) */}
              <div className="relative rounded-3xl p-6 sm:p-8 lg:p-10 text-white shadow-[0_20px_50px_rgba(10,27,42,0.35)] overflow-hidden bg-gradient-to-br from-[#0A1B2A] via-[#122E46] to-[#0D2437] border border-[#C5A880]/25">
                {/* Ambient Celestial Gold Pattern */}
                <div className="absolute right-0 top-0 bottom-0 w-2/5 bg-[radial-gradient(#C5A880_1px,transparent_1px)] [background-size:24px_24px] opacity-15 pointer-events-none" />
                <div className="absolute -left-20 -bottom-20 w-80 h-80 rounded-full bg-[#C5A880]/10 blur-3xl pointer-events-none" />

                <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
                  {/* Avatar & User Details */}
                  <div className="flex items-center gap-4 sm:gap-6">
                    <div className="relative shrink-0">
                      <div className="w-18 h-18 sm:w-22 sm:h-22 rounded-full p-1 bg-gradient-to-br from-[#DFCAAB] via-[#C5A880] to-[#7A6242] shadow-xl">
                        <div className="w-full h-full rounded-full bg-[#0A1B2A] flex items-center justify-center text-xl sm:text-2xl font-serif text-[#DFCAAB] font-medium border border-[#C5A880]/40">
                          {userName
                            .split(" ")
                            .map((n) => n[0])
                            .slice(0, 2)
                            .join("")
                            .toUpperCase() || "AS"}
                        </div>
                      </div>
                      <span className="absolute bottom-0 right-0 w-6 h-6 rounded-full bg-[#C5A880] text-[#0A1B2A] flex items-center justify-center border-2 border-[#0A1B2A] shadow-sm" title="Vedic Verified Seeker">
                        <Check className="w-3.5 h-3.5 stroke-[3]" />
                      </span>
                    </div>

                    <div className="space-y-1.5">
                      <div className="flex items-center gap-3 flex-wrap">
                        <h1 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-[#FAF8F5] font-normal tracking-wide">
                          {userName}
                        </h1>
                      </div>
                      <p className="text-xs sm:text-sm text-[#ECEADE]/75 font-light flex flex-wrap items-center gap-2">
                        <span>{userEmail}</span>
                        <span>•</span>
                        <span>{userPhone}</span>
                      </p>
                      <p className="text-[11px] font-sans text-[#C5A880] flex items-center gap-1.5 pt-0.5">
                        <span>Member Since October 2024</span>
                      </p>
                    </div>
                  </div>

                  {/* Header Actions */}
                  <div className="flex items-center gap-3 self-start md:self-auto shrink-0">
                    <Link
                      href="/products"
                      className="px-5 py-2.5 rounded-lg text-xs font-semibold tracking-wider uppercase bg-[#FAF8F5] hover:bg-[#C5A880] text-[#122E46] hover:text-white transition-all duration-300 shadow-md inline-flex items-center gap-1.5"
                    >
                      <span>Explore Catalog</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                    <button
                      onClick={handleSignOut}
                      title="Sign Out of Sanctuary"
                      className="p-2.5 rounded-lg border border-white/20 hover:border-white/50 text-white/80 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
                    >
                      <LogOut className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Dashboard Quick Stats Bar (Clean Frosted Metric Cards) */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mt-8 pt-6 border-t border-white/15">
                  <div className="p-3.5 rounded-2xl bg-white/[0.07] backdrop-blur-sm border border-white/10 hover:border-[#C5A880]/40 transition-colors">
                    <div className="flex items-center justify-between text-[#DFCAAB] mb-1">
                      <Package className="w-4 h-4" />
                      <span className="text-[10px] font-sans font-semibold tracking-wider text-emerald-300 uppercase">1 Active</span>
                    </div>
                    <span className="block text-2xl font-serif font-normal text-white">3</span>
                    <span className="text-[11px] font-sans uppercase tracking-wider text-[#ECEADE]/80">
                      My Orders and Parcels
                    </span>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-white/[0.07] backdrop-blur-sm border border-white/10 hover:border-[#C5A880]/40 transition-colors">
                    <div className="flex items-center justify-between text-[#DFCAAB] mb-1">
                      <Sun className="w-4 h-4 text-[#DFCAAB]" />
                      <span className="text-[10px] font-sans font-semibold tracking-wider text-[#DFCAAB] uppercase">Sun Sign</span>
                    </div>
                    <span className="block text-2xl font-serif font-normal text-white">Leo ♌</span>
                    <span className="text-[11px] font-sans uppercase tracking-wider text-[#ECEADE]/80">
                      Zodiac Profile
                    </span>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-white/[0.07] backdrop-blur-sm border border-white/10 hover:border-[#C5A880]/40 transition-colors">
                    <div className="flex items-center justify-between text-[#DFCAAB] mb-1">
                      <FileCheck2 className="w-4 h-4 text-emerald-400" />
                      <span className="text-[10px] font-sans font-semibold tracking-wider text-emerald-300 uppercase">Verified</span>
                    </div>
                    <span className="block text-2xl font-serif font-normal text-white">2</span>
                    <span className="text-[11px] font-sans uppercase tracking-wider text-[#ECEADE]/80">
                      Lab Certificates
                    </span>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-white/[0.07] backdrop-blur-sm border border-white/10 hover:border-[#C5A880]/40 transition-colors">
                    <div className="flex items-center justify-between text-[#DFCAAB] mb-1">
                      <Truck className="w-4 h-4 text-[#DFCAAB]" />
                      <span className="text-[10px] font-sans font-semibold tracking-wider text-emerald-300 uppercase animate-pulse">Out for Delivery</span>
                    </div>
                    <span className="block text-2xl font-serif font-normal text-white">Today</span>
                    <span className="text-[11px] font-sans uppercase tracking-wider text-[#ECEADE]/80">
                      Order Tracking
                    </span>
                  </div>
                </div>
              </div>

              {/* Main Tabbed Layout */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
                
                {/* Left Column: Navigation Sidebar */}
                <div className="lg:col-span-4 xl:col-span-4 bg-white rounded-2xl border border-[#E2DEC9] p-2.5 sm:p-3 shadow-sm flex lg:flex-col overflow-x-auto lg:overflow-visible gap-1.5 lg:gap-1 scrollbar-none max-w-full">
                  {[
                    { id: "orders", label: "My Orders and Parcels", icon: Package, badge: "1 Active" },
                    { id: "spiritual", label: "Spiritual Profile", icon: Compass },
                    { id: "addresses", label: "Saved Addresses", icon: MapPin },
                    { id: "certificates", label: "Lab Certificates", icon: ShieldCheck, badge: "Lab Verified" },
                    { id: "settings", label: "Account Settings", icon: Settings },
                  ].map((tab) => {
                    const Icon = tab.icon;
                    const isActive = activeTab === tab.id;
                    return (
                      <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id as AccountTab)}
                        className={`shrink-0 lg:shrink lg:w-full flex items-center justify-between gap-2 px-3 py-2.5 sm:px-3.5 sm:py-3 rounded-xl text-xs tracking-wide uppercase transition-all duration-200 cursor-pointer ${
                          isActive
                            ? "bg-[#122E46] text-[#FAF8F5] shadow-sm font-semibold border-l-4 border-[#C5A880]"
                            : "text-stone-700 hover:bg-[#FAF8F5] hover:text-[#122E46] font-medium"
                        }`}
                      >
                        <div className="flex items-center gap-2.5 min-w-0">
                          <Icon className={`w-4 h-4 shrink-0 ${isActive ? "text-[#C5A880]" : "text-stone-400"}`} />
                          <span className="truncate">{tab.label}</span>
                        </div>
                        {tab.badge && (
                          <span
                            className={`shrink-0 text-[9px] font-sans px-2 py-0.5 rounded-full uppercase tracking-wider font-semibold whitespace-nowrap ml-1 ${
                              isActive
                                ? "bg-[#C5A880] text-[#0A1B2A]"
                                : "bg-[#FAF8F5] text-[#7A6242] border border-[#E2DEC9]"
                            }`}
                          >
                            {tab.badge}
                          </span>
                        )}
                      </button>
                    );
                  })}

                  <div className="pt-3 mt-3 border-t border-[#E8E2D5] hidden lg:block">
                    <button
                      onClick={handleSignOut}
                      className="w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-xs font-sans uppercase tracking-wider text-red-700 hover:bg-red-50 transition-colors cursor-pointer"
                    >
                      <LogOut className="w-4 h-4 text-red-500" />
                      <span>Sign Out</span>
                    </button>
                  </div>
                </div>

                {/* Right Column: Tab Content */}
                <div className="lg:col-span-8 xl:col-span-8 bg-white rounded-3xl border border-[#E2DEC9] p-6 sm:p-8 lg:p-10 shadow-sm min-h-[520px]">
                  
                  {/* =================================================================
                      TAB 1: ORDERS
                      ================================================================= */}
                  {/* =================================================================
                      TAB 1: ORDERS (AMAZON REFERENCE LAYOUT - SVASTIMĀN THEME)
                      ================================================================= */}
                  {activeTab === "orders" && (
                    <div className="space-y-5 font-sans text-[#122E46]">
                      {/* Breadcrumbs */}
                      <div className="flex items-center gap-1.5 text-xs text-[#7A6242]">
                        <button
                          type="button"
                          onClick={() => setActiveTab("settings")}
                          className="hover:text-[#122E46] hover:underline cursor-pointer transition-colors"
                        >
                          Sanctuary Account
                        </button>
                        <ChevronRight className="w-3 h-3 text-[#C5A880]" />
                        <span className="text-[#122E46] font-semibold">My Orders and Parcels</span>
                      </div>

                      {/* Top Header & Search Bar Styled as per Website */}
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-1">
                        <div>
                          <h1 className="font-serif text-2xl sm:text-3xl text-[#122E46] font-normal tracking-wide">
                            My Orders and Parcels
                          </h1>
                          <p className="text-xs text-[#7A6242] mt-0.5">
                            Track consecrated dispatches and laboratory provenance records.
                          </p>
                        </div>

                        <div className="flex items-center gap-2 w-full sm:w-auto">
                          <div className="relative flex-1 sm:w-72">
                            <Search className="w-3.5 h-3.5 text-stone-400 absolute left-3 top-1/2 -translate-y-1/2" />
                            <input
                              type="text"
                              value={orderSearchQuery}
                              onChange={(e) => setOrderSearchQuery(e.target.value)}
                              placeholder="Search all orders and items..."
                              className="w-full pl-8 pr-3 py-2 text-xs sm:text-sm border border-[#D8D2C2] rounded-lg focus:border-[#122E46] focus:ring-1 focus:ring-[#122E46] outline-none bg-[#FAF8F5]/60 text-[#122E46] placeholder:text-stone-400 transition-colors"
                            />
                          </div>
                          <button
                            type="button"
                            onClick={() => {}}
                            className="px-4 py-2 text-xs font-sans font-semibold tracking-wider uppercase rounded-lg bg-[#122E46] hover:bg-[#1D4263] text-white transition-all duration-200 cursor-pointer shadow-xs whitespace-nowrap"
                          >
                            Search Orders
                          </button>
                        </div>
                      </div>

                      {/* Filter Sub-Tabs Matching Website Elegance */}
                      <div className="flex items-center gap-6 sm:gap-8 border-b border-[#E2DEC9] text-xs sm:text-sm overflow-x-auto scrollbar-none pt-2">
                        {[
                          { id: "orders", label: "All Orders" },
                          { id: "buy_again", label: "Buy Again" },
                          { id: "not_dispatched", label: "In Transit" },
                          { id: "cancelled", label: "Cancelled" },
                        ].map((subTab) => {
                          const isSelected = orderSubTab === subTab.id;
                          return (
                            <button
                              key={subTab.id}
                              type="button"
                              onClick={() => setOrderSubTab(subTab.id as any)}
                              className={`pb-2.5 font-sans uppercase tracking-wider text-xs whitespace-nowrap cursor-pointer transition-colors ${
                                isSelected
                                  ? "text-[#122E46] border-b-2 border-[#122E46] font-bold -mb-[1px]"
                                  : "text-[#5C6773] hover:text-[#122E46]"
                              }`}
                            >
                              {subTab.label}
                            </button>
                          );
                        })}
                      </div>

                      {/* Timeframe Filter Dropdown */}
                      <div className="flex items-center gap-2 text-xs text-[#122E46] pt-1">
                        <span className="font-semibold text-[#122E46]">
                          {amazonOrdersData.filter((o) => {
                            if (orderSubTab === "buy_again") return o.isDelivered;
                            if (orderSubTab === "not_dispatched") return !o.isDelivered;
                            if (orderSubTab === "cancelled") return o.isCancelled;
                            if (orderSearchQuery.trim()) {
                              const q = orderSearchQuery.toLowerCase();
                              return o.id.toLowerCase().includes(q) || o.items.some(i => i.title.toLowerCase().includes(q));
                            }
                            return true;
                          }).length} orders
                        </span>
                        <span className="text-[#7A6242]">placed in</span>
                        <div className="relative inline-block">
                          <select
                            value={orderTimeframe}
                            onChange={(e) => setOrderTimeframe(e.target.value)}
                            className="appearance-none bg-[#FAF8F5] hover:bg-[#F2ECE1] border border-[#D8D2C2] hover:border-[#122E46] rounded-md py-1.5 pl-3 pr-7 text-xs font-medium text-[#122E46] outline-none cursor-pointer shadow-xs transition-colors"
                          >
                            <option value="past three months">Past 3 Months</option>
                            <option value="2026">Year 2026</option>
                            <option value="2025">Year 2025</option>
                            <option value="archived">Archived Orders</option>
                          </select>
                          <ChevronDown className="w-3.5 h-3.5 text-[#7A6242] absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none" />
                        </div>
                      </div>

                      {/* Order Cards List Matching Website Aesthetics */}
                      <div className="space-y-5 pt-1">
                        {amazonOrdersData
                          .filter((order) => {
                            if (orderSubTab === "buy_again") return order.isDelivered;
                            if (orderSubTab === "not_dispatched") return !order.isDelivered;
                            if (orderSubTab === "cancelled") return order.isCancelled;
                            if (orderSearchQuery.trim()) {
                              const q = orderSearchQuery.toLowerCase();
                              return order.id.toLowerCase().includes(q) || order.items.some(i => i.title.toLowerCase().includes(q));
                            }
                            return true;
                          })
                          .map((order) => (
                            <div
                              key={order.id}
                              className="rounded-2xl border border-[#E2DEC9] overflow-hidden bg-white shadow-xs hover:border-[#C5A880]/60 transition-colors"
                            >
                              {/* Card Header Strip (Warm Sacred Linen Style) */}
                              <div className="bg-[#FAF8F5] border-b border-[#E2DEC9] px-4 sm:px-6 py-3.5 flex flex-wrap items-center justify-between gap-y-2 text-xs">
                                <div className="flex flex-wrap items-center gap-x-6 sm:gap-x-10 gap-y-1">
                                  <div>
                                    <span className="block uppercase text-[10px] font-sans font-semibold tracking-wider text-[#7A6242]">
                                      ORDER PLACED
                                    </span>
                                    <span className="text-xs text-[#122E46] font-medium">
                                      {order.date}
                                    </span>
                                  </div>
                                  <div>
                                    <span className="block uppercase text-[10px] font-sans font-semibold tracking-wider text-[#7A6242]">
                                      TOTAL
                                    </span>
                                    <span className="text-xs text-[#122E46] font-semibold">
                                      {order.total}
                                    </span>
                                  </div>
                                  <div>
                                    <span className="block uppercase text-[10px] font-sans font-semibold tracking-wider text-[#7A6242]">
                                      DISPATCH TO
                                    </span>
                                    <span className="text-xs text-[#122E46] hover:text-[#C5A880] underline underline-offset-2 cursor-pointer font-medium inline-flex items-center gap-1 transition-colors">
                                      {order.recipient} <ChevronDown className="w-3 h-3 text-[#7A6242]" />
                                    </span>
                                  </div>
                                </div>

                                <div className="flex flex-col sm:items-end text-xs">
                                  <span className="text-[10px] text-[#7A6242] uppercase font-semibold tracking-wider">
                                    ORDER # <span className="font-mono text-[#122E46] font-bold">{order.id}</span>
                                  </span>
                                  <div className="flex items-center gap-2 text-xs pt-0.5">
                                    <button
                                      type="button"
                                      onClick={() => alert(`Order details for #${order.id}:\nStatus: ${order.statusTitle}\nTotal: ${order.total}\nItems: ${order.items.length}`)}
                                      className="text-[#122E46] hover:text-[#C5A880] underline underline-offset-2 cursor-pointer transition-colors"
                                    >
                                      View order details
                                    </button>
                                    <span className="text-[#D8D2C2]">|</span>
                                    <button
                                      type="button"
                                      onClick={() => alert(`Tax invoice generated for Order #${order.id}. Downloading PDF...`)}
                                      className="text-[#122E46] hover:text-[#C5A880] underline underline-offset-2 cursor-pointer inline-flex items-center gap-0.5 transition-colors"
                                    >
                                      Invoice <ChevronDown className="w-2.5 h-2.5" />
                                    </button>
                                  </div>
                                </div>
                              </div>

                              {/* Card Content Body */}
                              <div className="p-5 sm:p-6 space-y-4">
                                <div className="flex items-center justify-between flex-wrap gap-2">
                                  <div>
                                    <h3 className="font-serif text-base sm:text-lg font-medium text-[#122E46]">
                                      {order.statusTitle}
                                    </h3>
                                    <p className="text-xs text-[#7A6242] mt-0.5">
                                      {order.statusSubtitle}
                                    </p>
                                  </div>
                                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-800 border border-emerald-300">
                                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                                    <span>Verified Dispatch</span>
                                  </span>
                                </div>

                                {/* Items & Action Columns */}
                                <div className="space-y-4">
                                  {order.items.map((item, itemIdx) => (
                                    <div
                                      key={itemIdx}
                                      className="flex flex-col md:flex-row md:items-start justify-between gap-6 pt-3 border-t border-[#F2ECE1] first:border-0 first:pt-0"
                                    >
                                      {/* Left: Product Thumbnail & Title */}
                                      <div className="flex items-start gap-4 flex-1">
                                        <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-xl border border-[#E0D9CA] bg-[#FAF8F5] relative overflow-hidden shrink-0 shadow-xs">
                                          <Image
                                            src={item.image}
                                            alt={item.title}
                                            fill
                                            className="object-cover"
                                          />
                                        </div>
                                        <div className="space-y-1.5 flex-1 min-w-0">
                                          <Link
                                            href="/products"
                                            className="font-serif text-sm sm:text-base font-normal text-[#122E46] hover:text-[#C5A880] line-clamp-2 leading-snug transition-colors"
                                          >
                                            {item.title}
                                          </Link>
                                          <p className="text-xs text-[#7A6242] font-sans">
                                            {item.details}
                                          </p>
                                          <div className="flex items-center gap-2.5 pt-2 flex-wrap">
                                            <button
                                              type="button"
                                              onClick={() => alert(`Added ${item.title} to your sacred collection cart!`)}
                                              className="px-4 py-2 rounded-lg bg-[#C5A880] hover:bg-[#122E46] text-white text-xs font-sans font-semibold tracking-wider uppercase shadow-xs cursor-pointer inline-flex items-center gap-1.5 transition-all duration-200"
                                            >
                                              <RotateCcw className="w-3 h-3" />
                                              <span>Buy it again</span>
                                            </button>
                                            <Link
                                              href="/products"
                                              className="px-4 py-2 rounded-lg border border-[#D8D2C2] hover:border-[#122E46] hover:bg-[#FAF8F5] text-xs font-sans font-semibold tracking-wider uppercase text-[#122E46] shadow-xs cursor-pointer transition-colors"
                                            >
                                              View your item
                                            </Link>
                                          </div>
                                        </div>
                                      </div>

                                      {/* Right: Svastiman Themed Action Buttons Column */}
                                      {itemIdx === 0 && (
                                        <div className="w-full md:w-56 shrink-0 flex flex-col gap-2 pt-1 md:pt-0">
                                          <button
                                            type="button"
                                            onClick={() => setTrackingModalOrder(order)}
                                            className="w-full py-2 px-3 rounded-lg bg-[#122E46] hover:bg-[#1D4263] text-white text-xs font-sans font-semibold tracking-wider uppercase shadow-xs transition-colors cursor-pointer text-center"
                                          >
                                            Track Package
                                          </button>
                                          <button
                                            type="button"
                                            onClick={() => alert(`Return window for #${order.id} closed on ${order.date}. Contact our sacred concierge.`)}
                                            className="w-full py-2 px-3 rounded-lg border border-[#D8D2C2] hover:border-[#122E46] bg-white hover:bg-[#FAF8F5] text-xs font-sans font-semibold tracking-wider uppercase text-[#122E46] shadow-xs transition-colors cursor-pointer text-center"
                                          >
                                            Return or Replace
                                          </button>
                                          <button
                                            type="button"
                                            onClick={() => alert(`Shareable gift receipt link for #${order.id} generated and copied to clipboard!`)}
                                            className="w-full py-2 px-3 rounded-lg border border-[#D8D2C2] hover:border-[#122E46] bg-white hover:bg-[#FAF8F5] text-xs font-sans font-semibold tracking-wider uppercase text-[#122E46] shadow-xs transition-colors cursor-pointer text-center"
                                          >
                                            Share Gift Receipt
                                          </button>
                                          <button
                                            type="button"
                                            onClick={() => alert(`Write a verified review for ${item.title}`)}
                                            className="w-full py-2 px-3 rounded-lg border border-[#D8D2C2] hover:border-[#122E46] bg-white hover:bg-[#FAF8F5] text-xs font-sans font-semibold tracking-wider uppercase text-[#122E46] shadow-xs transition-colors cursor-pointer text-center"
                                          >
                                            Write Product Review
                                          </button>
                                        </div>
                                      )}
                                    </div>
                                  ))}
                                </div>
                              </div>
                            </div>
                          ))}
                      </div>

                      {/* Interactive Tracking Modal in Website Colors */}
                      {trackingModalOrder && (
                        <div className="fixed inset-0 z-50 bg-[#0A1B2A]/70 backdrop-blur-xs flex items-center justify-center p-4">
                          <div className="bg-white rounded-2xl shadow-2xl border border-[#E2DEC9] max-w-lg w-full p-6 sm:p-7 space-y-5 animate-in fade-in zoom-in-95 duration-200">
                            <div className="flex items-center justify-between pb-3 border-b border-[#E8E2D5]">
                              <div>
                                <h3 className="font-serif font-normal text-lg sm:text-xl text-[#122E46]">
                                  Dispatch and Delivery Tracking
                                </h3>
                                <span className="text-xs text-[#7A6242] font-sans">
                                  Order #{trackingModalOrder.id} • Bluedart Air Courier
                                </span>
                              </div>
                              <button
                                type="button"
                                onClick={() => setTrackingModalOrder(null)}
                                className="w-8 h-8 rounded-full bg-[#FAF8F5] hover:bg-[#EAE3D5] text-[#122E46] flex items-center justify-center cursor-pointer transition-colors"
                              >
                                ✕
                              </button>
                            </div>

                            <div className="space-y-4 py-2">
                              <div className="p-4 rounded-xl bg-[#FAF8F5] border border-[#C5A880]/50 flex items-center gap-3">
                                <Truck className="w-5 h-5 text-[#C5A880] shrink-0" />
                                <div>
                                  <span className="block text-sm font-serif font-medium text-[#122E46]">
                                    {trackingModalOrder.statusTitle}
                                  </span>
                                  <span className="text-xs text-[#7A6242]">
                                    {trackingModalOrder.statusSubtitle}
                                  </span>
                                </div>
                              </div>

                              <div className="space-y-3.5 pt-2 text-xs text-stone-600 border-l-2 border-[#C5A880] pl-4 ml-2">
                                <div className="space-y-0.5">
                                  <strong className="block text-[#122E46] font-semibold">Delivered / Handed to Resident</strong>
                                  <span className="text-[#7A6242]">Destination Residence Address</span>
                                </div>
                                <div className="space-y-0.5">
                                  <strong className="block text-[#122E46] font-semibold">In Transit with Courier Driver</strong>
                                  <span className="text-[#7A6242]">Regional Sorting Center</span>
                                </div>
                                <div className="space-y-0.5">
                                  <strong className="block text-[#122E46] font-semibold">Sacred Consecration and Lab X-Ray Verified</strong>
                                  <span className="text-[#7A6242]">Kashi Vishwanath Atelier</span>
                                </div>
                              </div>
                            </div>

                            <div className="pt-2 flex justify-end">
                              <button
                                type="button"
                                onClick={() => setTrackingModalOrder(null)}
                                className="px-6 py-2.5 rounded-lg bg-[#122E46] hover:bg-[#1D4263] text-white text-xs font-sans font-semibold tracking-wider uppercase transition-colors cursor-pointer"
                              >
                                Close
                              </button>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  )}

                  {/* =================================================================
                      TAB 2: SPIRITUAL PROFILE & ENERGY RESONANCE
                      ================================================================= */}
                  {activeTab === "spiritual" && (
                    <div className="space-y-6">
                      <div className="pb-5 border-b border-[#E8E2D5]">
                        <span className="text-[10px] font-sans font-semibold tracking-[0.2em] uppercase text-[#7A6242]">
                          Cosmic Archetype and Vedic Synergy
                        </span>
                        <h2 className="font-serif text-2xl sm:text-3xl text-[#122E46]">
                          Spiritual Alignment Profile
                        </h2>
                        <p className="text-xs text-stone-500 font-light mt-0.5">
                          Your Vedic astrological traits, cosmic resonance, and recommended botanicals.
                        </p>
                      </div>

                      {/* Zodiac & Graha Card */}
                      <div className="p-6 sm:p-7 rounded-2xl bg-gradient-to-br from-[#FAF8F5] to-[#F5EFE4] border border-[#C5A880]/40 space-y-4 shadow-sm relative overflow-hidden">
                        <div className="flex items-start justify-between">
                          <div className="space-y-1">
                            <span className="text-[10px] font-sans font-semibold uppercase tracking-widest text-[#7A6242]">
                              Zodiac Energy Archetype
                            </span>
                            <h3 className="font-serif text-2xl sm:text-3xl text-[#122E46]">
                              Leo (Simha Rashi) &bull; Solar Agni
                            </h3>
                          </div>
                          <span className="text-4xl text-[#C5A880] select-none">♌</span>
                        </div>

                        <p className="text-xs sm:text-sm text-stone-600 font-light leading-relaxed">
                          Your solar chart carries an intense warmth, leadership current, and vibrant vitality. Vedic scriptures recommend
                          combining grounding 5-Mukhi Himalayan Rudraksha seeds with cooling natural metals or genuine solar crystals to
                          maintain equilibrium and deep spiritual serenity.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                          <div className="p-3.5 bg-white rounded-xl border border-[#E0D9CA]">
                            <span className="block text-[10px] font-sans uppercase tracking-wider text-stone-400">Ruling Planet</span>
                            <span className="text-sm font-semibold text-[#122E46]">Surya (Sun ☀️)</span>
                          </div>
                          <div className="p-3.5 bg-white rounded-xl border border-[#E0D9CA]">
                            <span className="block text-[10px] font-sans uppercase tracking-wider text-stone-400">Primary Material</span>
                            <span className="text-sm font-semibold text-[#122E46]">Tiger Eye and 5-Mukhi Rudraksha</span>
                          </div>
                          <div className="p-3.5 bg-white rounded-xl border border-[#E0D9CA]">
                            <span className="block text-[10px] font-sans uppercase tracking-wider text-stone-400">Sacred Mala Count</span>
                            <span className="text-sm font-semibold text-[#122E46]">108 Hand-Knotted Beads</span>
                          </div>
                        </div>
                      </div>

                      {/* Personal Daily Intentions */}
                      <div className="space-y-3 pt-2">
                        <h4 className="font-serif text-base text-[#122E46]">Active Contemplative Intentions</h4>
                        <div className="flex flex-wrap gap-2">
                          {[
                            "Daily Japa Breathwork (108 Mantras)",
                            "EMF and Negative Frequency Shielding",
                            "Heart Chakra (Anahata) Calmness",
                            "Authentic Unheated Earth Crystals",
                            "Ethical Himalayan Forest Provenance",
                          ].map((tag) => (
                            <span
                              key={tag}
                              className="px-3.5 py-1.5 rounded-full text-xs font-medium bg-[#122E46]/8 text-[#122E46] border border-[#122E46]/15 flex items-center gap-1.5"
                            >
                              <Check className="w-3.5 h-3.5 text-[#C5A880]" />
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Zodiac Finder Quick CTA */}
                      <div className="p-6 rounded-2xl bg-[#0A1B2A] text-white border border-[#C5A880]/30 flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-md">
                        <div className="space-y-1">
                          <h4 className="font-serif text-base sm:text-lg text-[#FAF8F5]">Recalibrate Your Energy Finder?</h4>
                          <p className="text-xs text-[#ECEADE]/70 font-light">
                            Calculate your Lagna and Janam Nakshatra to discover your custom Mukhi Rudraksha synergy.
                          </p>
                        </div>
                        <Link
                          href="/tools/energy-finder"
                          className="px-6 py-3 rounded-lg text-xs font-semibold uppercase tracking-wider bg-[#C5A880] text-[#0A1B2A] hover:bg-[#FAF8F5] transition-colors whitespace-nowrap text-center"
                        >
                          Run Energy Finder &rarr;
                        </Link>
                      </div>
                    </div>
                  )}

                  {/* =================================================================
                      TAB 3: SAVED ADDRESSES
                      ================================================================= */}
                  {activeTab === "addresses" && (
                    <div className="space-y-6">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-5 border-b border-[#E8E2D5]">
                        <div>
                          <span className="text-[10px] font-sans font-semibold tracking-[0.2em] uppercase text-[#7A6242]">
                            Delivery Sanctuaries
                          </span>
                          <h2 className="font-serif text-2xl sm:text-3xl text-[#122E46]">
                            Saved Sanctuaries and Addresses
                          </h2>
                          <p className="text-xs text-stone-500 font-light mt-0.5">
                            Manage delivery addresses for insured dispatch and discreet gift parcels.
                          </p>
                        </div>
                        <button
                          onClick={() => setShowAddressModal(true)}
                          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#122E46] text-white text-xs font-semibold uppercase tracking-wider hover:bg-[#C5A880] transition-colors cursor-pointer self-start sm:self-auto shadow-sm"
                        >
                          <Plus className="w-4 h-4" />
                          Add Address
                        </button>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {addresses.map((addr) => (
                          <div
                            key={addr.id}
                            className={`p-5 rounded-2xl border transition-all ${
                              addr.isDefault
                                ? "bg-[#FAF8F5] border-[#C5A880] shadow-sm"
                                : "bg-white border-[#E2DEC9] hover:border-stone-400"
                            }`}
                          >
                            <div className="flex items-center justify-between mb-3">
                              <span className="text-sm font-semibold text-[#122E46]">{addr.title}</span>
                              {addr.isDefault && (
                                <span className="text-[10px] font-sans tracking-wider uppercase px-2.5 py-0.5 rounded-full bg-[#C5A880]/20 text-[#7A6242] border border-[#C5A880]/40 font-semibold">
                                  Default
                                </span>
                              )}
                            </div>
                            <p className="text-xs text-stone-700 font-medium mb-1">{addr.recipient}</p>
                            <p className="text-xs text-stone-500 font-light leading-relaxed">
                              {addr.street}, {addr.city}, {addr.state} - {addr.pincode}
                            </p>
                            <p className="text-xs text-stone-600 font-mono mt-2.5 flex items-center gap-1.5">
                              <Phone className="w-3 h-3 text-stone-400" />
                              {addr.phone}
                            </p>
                          </div>
                        ))}
                      </div>

                      {/* Modal for adding address */}
                      {showAddressModal && (
                        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4">
                          <div className="bg-white rounded-3xl p-6 sm:p-8 max-w-lg w-full border border-[#E2DEC9] shadow-2xl space-y-5 animate-in fade-in zoom-in-95 duration-200">
                            <div className="flex items-center justify-between border-b border-[#E8E2D5] pb-3">
                              <h3 className="font-serif text-xl text-[#122E46]">Add Delivery Address</h3>
                              <button
                                onClick={() => setShowAddressModal(false)}
                                className="text-stone-400 hover:text-stone-700 text-sm cursor-pointer"
                              >
                                &times; Close
                              </button>
                            </div>

                            <form onSubmit={handleAddAddress} className="space-y-4">
                              <div>
                                <label className="block text-[11px] font-sans font-medium uppercase text-stone-600 mb-1">
                                  Recipient Full Name
                                </label>
                                <input
                                  type="text"
                                  required
                                  value={newAddress.recipient}
                                  onChange={(e) => setNewAddress({ ...newAddress, recipient: e.target.value })}
                                  placeholder="e.g. Ayush Sharma"
                                  className="w-full px-3.5 py-2 rounded-lg border border-[#D8D2C2] text-xs focus:outline-none focus:border-[#122E46]"
                                />
                              </div>

                              <div>
                                <label className="block text-[11px] font-sans font-medium uppercase text-stone-600 mb-1">
                                  Street Address and House Number
                                </label>
                                <input
                                  type="text"
                                  required
                                  value={newAddress.street}
                                  onChange={(e) => setNewAddress({ ...newAddress, street: e.target.value })}
                                  placeholder="e.g. Flat 301, Palm Court, Sector 14"
                                  className="w-full px-3.5 py-2 rounded-lg border border-[#D8D2C2] text-xs focus:outline-none focus:border-[#122E46]"
                                />
                              </div>

                              <div className="grid grid-cols-2 gap-3">
                                <div>
                                  <label className="block text-[11px] font-sans font-medium uppercase text-stone-600 mb-1">
                                    City
                                  </label>
                                  <input
                                    type="text"
                                    required
                                    value={newAddress.city}
                                    onChange={(e) => setNewAddress({ ...newAddress, city: e.target.value })}
                                    placeholder="e.g. Gurugram"
                                    className="w-full px-3.5 py-2 rounded-lg border border-[#D8D2C2] text-xs focus:outline-none focus:border-[#122E46]"
                                  />
                                </div>
                                <div>
                                  <label className="block text-[11px] font-sans font-medium uppercase text-stone-600 mb-1">
                                    State
                                  </label>
                                  <input
                                    type="text"
                                    required
                                    value={newAddress.state}
                                    onChange={(e) => setNewAddress({ ...newAddress, state: e.target.value })}
                                    placeholder="e.g. Haryana"
                                    className="w-full px-3.5 py-2 rounded-lg border border-[#D8D2C2] text-xs focus:outline-none focus:border-[#122E46]"
                                  />
                                </div>
                              </div>

                              <div className="grid grid-cols-2 gap-3">
                                <div>
                                  <label className="block text-[11px] font-sans font-medium uppercase text-stone-600 mb-1">
                                    PIN Code
                                  </label>
                                  <input
                                    type="text"
                                    required
                                    value={newAddress.pincode}
                                    onChange={(e) => setNewAddress({ ...newAddress, pincode: e.target.value })}
                                    placeholder="e.g. 122001"
                                    className="w-full px-3.5 py-2 rounded-lg border border-[#D8D2C2] text-xs focus:outline-none focus:border-[#122E46]"
                                  />
                                </div>
                                <div>
                                  <label className="block text-[11px] font-sans font-medium uppercase text-stone-600 mb-1">
                                    Phone Number
                                  </label>
                                  <input
                                    type="text"
                                    required
                                    value={newAddress.phone}
                                    onChange={(e) => setNewAddress({ ...newAddress, phone: e.target.value })}
                                    placeholder="e.g. +91 9876543210"
                                    className="w-full px-3.5 py-2 rounded-lg border border-[#D8D2C2] text-xs focus:outline-none focus:border-[#122E46]"
                                  />
                                </div>
                              </div>

                              <div className="pt-3 flex justify-end gap-3">
                                <button
                                  type="button"
                                  onClick={() => setShowAddressModal(false)}
                                  className="px-4 py-2 rounded-lg border border-stone-300 text-xs text-stone-600 hover:bg-stone-50 cursor-pointer"
                                >
                                  Cancel
                                </button>
                                <button
                                  type="submit"
                                  className="px-5 py-2 rounded-lg bg-[#122E46] hover:bg-[#C5A880] text-white text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer"
                                >
                                  Save Address
                                </button>
                              </div>
                            </form>
                          </div>
                        </div>
                      )}
                    </div>
                  )}

                  {/* =================================================================
                      TAB 4: PROVENANCE CERTIFICATE VAULT
                      ================================================================= */}
                  {activeTab === "certificates" && (
                    <div className="space-y-6">
                      <div className="pb-5 border-b border-[#E8E2D5]">
                        <span className="text-[10px] font-sans font-semibold tracking-[0.2em] uppercase text-[#7A6242]">
                          Cryptographic Lab Authenticity
                        </span>
                        <h2 className="font-serif text-2xl sm:text-3xl text-[#122E46]">
                          Sacred Provenance Vault
                        </h2>
                        <p className="text-xs text-stone-500 font-light mt-0.5">
                          Verified laboratory X-Ray analysis, density tests, and botanical origin deeds.
                        </p>
                      </div>

                      <div className="space-y-4">
                        {/* Certificate 1: Rudraksha X-Ray */}
                        <div className="p-6 rounded-2xl border border-[#C5A880]/60 bg-gradient-to-br from-[#FAF8F5] to-[#F5EFE4] flex flex-col md:flex-row md:items-center justify-between gap-5 shadow-sm">
                          <div className="space-y-1.5">
                            <div className="flex items-center gap-2">
                              <ShieldCheck className="w-5 h-5 text-emerald-600" />
                              <span className="font-mono text-xs uppercase tracking-wider text-[#7A6242] font-semibold">
                                Certificate #RUD-2026-X89
                              </span>
                            </div>
                            <h3 className="font-serif text-xl text-[#122E46]">
                              Wild Himalayan Rudraksha (Taplejung, Nepal &bull; 2,200m)
                            </h3>
                            <p className="text-xs text-stone-600 font-light max-w-xl leading-relaxed">
                              Tested via Non-Destructive High-Frequency Radiography. 5 authentic natural internal locules
                              confirmed with intact central seed channel. Zero synthetic glue, zero chemical glaze. Sandalwood oil cured.
                            </p>
                            <span className="inline-block text-[11px] font-sans text-stone-500">
                              Issued: 22 September 2026 &bull; Certified by: National Gem and Botanical Testing Lab
                            </span>
                          </div>

                          <div className="flex flex-col gap-2 shrink-0">
                            <button
                              onClick={() => alert("Downloading verified provenance report (PDF)...")}
                              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-[#122E46] hover:bg-[#1D4263] text-white text-xs font-semibold tracking-wider uppercase transition-all cursor-pointer shadow-sm"
                            >
                              <Download className="w-3.5 h-3.5 text-[#DFCAAB]" />
                              Download Deed (PDF)
                            </button>
                            <button
                              onClick={() => alert("Digital X-Ray Radiograph: 5 clear internal natural seeds verified without cracking.")}
                              className="inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-lg border border-[#D8D2C2] hover:border-[#122E46] text-xs font-medium text-[#122E46] transition-colors"
                            >
                              <Eye className="w-3.5 h-3.5" />
                              View Radiograph
                            </button>
                          </div>
                        </div>

                        {/* Certificate 2: Gemstone */}
                        <div className="p-6 rounded-2xl border border-[#E2DEC9] bg-white flex flex-col md:flex-row md:items-center justify-between gap-5 hover:border-[#C5A880]/50 transition-colors shadow-xs">
                          <div className="space-y-1.5">
                            <div className="flex items-center gap-2">
                              <ShieldCheck className="w-5 h-5 text-emerald-600" />
                              <span className="font-mono text-xs uppercase tracking-wider text-[#7A6242] font-semibold">
                                Certificate #GEM-2026-L40
                              </span>
                            </div>
                            <h3 className="font-serif text-xl text-[#122E46]">
                              Untreated Metamorphic Lapis Lazuli with Natural Pyrite
                            </h3>
                            <p className="text-xs text-stone-600 font-light max-w-xl leading-relaxed">
                              Refractive Index (RI): 1.50 &bull; Specific Gravity (SG): 2.75. 100% Earth-Mined specimen.
                              No chemical resin impregnation or artificial dye detected.
                            </p>
                            <span className="inline-block text-[11px] font-sans text-stone-500">
                              Issued: 04 October 2026 &bull; Jaipur Lapidary Verification Council
                            </span>
                          </div>

                          <div className="flex flex-col gap-2 shrink-0">
                            <button
                              onClick={() => alert("Downloading verified provenance report (PDF)...")}
                              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-[#122E46] hover:bg-[#1D4263] text-white text-xs font-semibold tracking-wider uppercase transition-all cursor-pointer shadow-sm"
                            >
                              <Download className="w-3.5 h-3.5 text-[#DFCAAB]" />
                              Download Deed (PDF)
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* =================================================================
                      TAB 5: SETTINGS
                      ================================================================= */}
                  {activeTab === "settings" && (
                    <div className="space-y-6">
                      <div className="pb-5 border-b border-[#E8E2D5]">
                        <span className="text-[10px] font-sans font-semibold tracking-[0.2em] uppercase text-[#7A6242]">
                          Preferences and Security
                        </span>
                        <h2 className="font-serif text-2xl sm:text-3xl text-[#122E46]">
                          Account and Security Settings
                        </h2>
                        <p className="text-xs text-stone-500 font-light mt-0.5">
                          Update your contact preferences, password, and dispatch alerts.
                        </p>
                      </div>

                      {saveSuccess && (
                        <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs flex items-center gap-2 animate-in fade-in duration-200">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                          Profile changes saved successfully!
                        </div>
                      )}

                      <form onSubmit={handleSaveProfile} className="space-y-4 max-w-xl">
                        <div>
                          <label className="block text-xs font-sans font-medium uppercase text-stone-600 mb-1.5">
                            Full Name
                          </label>
                          <input
                            type="text"
                            value={userName}
                            onChange={(e) => setUserName(e.target.value)}
                            className="w-full px-4 py-2.5 rounded-lg border border-[#D8D2C2] text-xs text-[#122E46] focus:outline-none focus:border-[#122E46] transition-colors"
                          />
                        </div>

                        <div>
                          <label className="block text-xs font-sans font-medium uppercase text-stone-600 mb-1.5">
                            Primary Email
                          </label>
                          <input
                            type="email"
                            value={userEmail}
                            onChange={(e) => setUserEmail(e.target.value)}
                            className="w-full px-4 py-2.5 rounded-lg border border-[#D8D2C2] text-xs text-[#122E46] focus:outline-none focus:border-[#122E46] transition-colors"
                          />
                        </div>

                        <div>
                          <label className="block text-xs font-sans font-medium uppercase text-stone-600 mb-1.5">
                            Mobile Number (For Courier OTP and Dispatch Updates)
                          </label>
                          <input
                            type="tel"
                            value={userPhone}
                            onChange={(e) => setUserPhone(e.target.value)}
                            className="w-full px-4 py-2.5 rounded-lg border border-[#D8D2C2] text-xs text-[#122E46] focus:outline-none focus:border-[#122E46] transition-colors"
                          />
                        </div>

                        <div className="pt-2">
                          <button
                            type="submit"
                            className="px-8 py-3 rounded-lg bg-[#122E46] hover:bg-[#1D4263] text-white text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer shadow-sm"
                          >
                            Save Profile Updates
                          </button>
                        </div>
                      </form>

                      <div className="pt-6 border-t border-[#E8E2D5] space-y-3">
                        <h4 className="font-serif text-base text-[#122E46]">Communication Preferences</h4>
                        <label className="flex items-center gap-3 text-xs text-stone-600 cursor-pointer">
                          <input type="checkbox" defaultChecked className="rounded border-stone-300 text-[#122E46]" />
                          Receive WhatsApp updates for real-time parcel dispatch and delivery
                        </label>
                        <label className="flex items-center gap-3 text-xs text-stone-600 cursor-pointer">
                          <input type="checkbox" defaultChecked className="rounded border-stone-300 text-[#122E46]" />
                          Receive Vedic astrological transition insights (Amavasya, Purnima, Solstices)
                        </label>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}
        </main>

        <Footer />
        <CartDrawer />
        <BottomNav />
      </div>
    </CartProvider>
  );
}
