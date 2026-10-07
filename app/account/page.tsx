"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CartDrawer } from "@/components/cart/CartDrawer";
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
} from "lucide-react";

type AccountTab = "orders" | "spiritual" | "addresses" | "certificates" | "settings";

export default function AccountPage() {
  const [isSignedIn, setIsSignedIn] = useState(true);
  const [activeTab, setActiveTab] = useState<AccountTab>("orders");

  // Login/Signup Form States (for demo mode)
  const [isRegisterMode, setIsRegisterMode] = useState(false);
  const [authEmail, setAuthEmail] = useState("");
  const [authPassword, setAuthPassword] = useState("");
  const [authName, setAuthName] = useState("");

  // Edit Profile States
  const [userName, setUserName] = useState("Ayush Sharma");
  const [userEmail, setUserEmail] = useState("ayush.sharma@example.com");
  const [userPhone, setUserPhone] = useState("+91 98765 43210");
  const [saveSuccess, setSaveSuccess] = useState(false);

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
      title: "Work / Studio",
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
    setSaveSuccess(true);
    setTimeout(() => setSaveSuccess(false), 2500);
  };

  const handleDemoSignIn = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSignedIn(true);
  };

  return (
    <CartProvider>
      <div className="min-h-screen flex flex-col bg-[#F9F8F5] text-[#111111]">
        <Navbar />

        <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          {!isSignedIn ? (
            /* =========================================================================
               LOGGED OUT / SIGN IN & REGISTER VIEW
               ========================================================================= */
            <div className="max-w-md mx-auto my-8 sm:my-14 p-6 sm:p-10 bg-white rounded-3xl border border-[#E2DEC9] shadow-xl">
              <div className="text-center space-y-2 mb-8">
                <h1 className="font-serif text-3xl font-normal text-[#1A1815]">
                  {isRegisterMode ? "Create Your Sanctuary" : "Welcome to Your Sanctuary"}
                </h1>
                <p className="text-xs sm:text-sm text-stone-500 font-light">
                  {isRegisterMode
                    ? "Register to track sacred orders, provenance lab certificates, and custom energy alignment."
                    : "Enter your registered credentials to access your orders and certified objects."}
                </p>
              </div>

              <form onSubmit={handleDemoSignIn} className="space-y-4">
                {isRegisterMode && (
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-stone-600 mb-1.5">
                      Full Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Radhika Sharma"
                      value={authName}
                      onChange={(e) => setAuthName(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-[#E2DEC9] bg-[#FAF8F5] text-sm text-[#1A1815] focus:outline-none focus:border-[#C5A880] focus:ring-1 focus:ring-[#C5A880] transition-all"
                    />
                  </div>
                )}

                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-stone-600 mb-1.5">
                    Email or Mobile Number
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      required
                      placeholder="e.g. seeker@svastiman.com or +91 98..."
                      value={authEmail}
                      onChange={(e) => setAuthEmail(e.target.value)}
                      className="w-full pl-11 pr-4 py-3 rounded-xl border border-[#E2DEC9] bg-[#FAF8F5] text-sm text-[#1A1815] focus:outline-none focus:border-[#C5A880] focus:ring-1 focus:ring-[#C5A880] transition-all"
                    />
                    <Mail className="w-4 h-4 text-stone-400 absolute left-4 top-1/2 -translate-y-1/2" />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between items-center mb-1.5">
                    <label className="block text-xs font-mono uppercase tracking-wider text-stone-600">
                      Password / Sacred Key
                    </label>
                    {!isRegisterMode && (
                      <button
                        type="button"
                        onClick={() => alert("A reset code has been sent to your registered phone or email.")}
                        className="text-[11px] text-[#7A6242] hover:underline"
                      >
                        Forgot key?
                      </button>
                    )}
                  </div>
                  <div className="relative">
                    <input
                      type="password"
                      required
                      placeholder="••••••••••••"
                      value={authPassword}
                      onChange={(e) => setAuthPassword(e.target.value)}
                      className="w-full pl-11 pr-4 py-3 rounded-xl border border-[#E2DEC9] bg-[#FAF8F5] text-sm text-[#1A1815] focus:outline-none focus:border-[#C5A880] focus:ring-1 focus:ring-[#C5A880] transition-all"
                    />
                    <Lock className="w-4 h-4 text-stone-400 absolute left-4 top-1/2 -translate-y-1/2" />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full mt-4 py-3.5 px-6 rounded-full bg-[#1A1815] hover:bg-[#C5A880] text-white text-xs font-semibold tracking-widest uppercase transition-all duration-300 shadow-xl cursor-pointer"
                >
                  {isRegisterMode ? "Create Sanctuary Account" : "Access Sanctuary"}
                </button>
              </form>

              {/* Quick Demo One-Click Access Button */}
              <div className="mt-6 pt-6 border-t border-[#E8E2D5] text-center space-y-3">
                <p className="text-xs text-stone-400">
                  Quick demo preview without credentials:
                </p>
                <button
                  type="button"
                  onClick={() => setIsSignedIn(true)}
                  className="w-full py-2.5 px-4 rounded-xl border border-[#C5A880]/60 text-xs font-medium text-[#7A6242] hover:bg-[#FAF8F5] transition-colors cursor-pointer"
                >
                  Instant Demo Login as &ldquo;Ayush Sharma&rdquo; &rarr;
                </button>

                <div className="pt-2">
                  <button
                    type="button"
                    onClick={() => setIsRegisterMode(!isRegisterMode)}
                    className="text-xs text-stone-600 hover:text-[#1A1815] underline cursor-pointer"
                  >
                    {isRegisterMode
                      ? "Already have an account? Sign In"
                      : "New to Svastimān? Register here"}
                  </button>
                </div>
              </div>
            </div>
          ) : (
            /* =========================================================================
               AUTHENTICATED ACCOUNT DASHBOARD VIEW
               ========================================================================= */
            <div className="space-y-8">
              {/* Profile Top Banner Card */}
              <div className="bg-gradient-to-r from-[#122E46] to-[#0A1B2A] rounded-3xl p-6 sm:p-8 lg:p-10 text-white shadow-xl relative overflow-hidden">
                <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-[radial-gradient(#C5A880_1px,transparent_1px)] [background-size:20px_20px] opacity-10 pointer-events-none" />

                <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
                  {/* Avatar & User Details */}
                  <div className="flex items-center gap-4 sm:gap-6">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-br from-[#DFCAAB] to-[#C5A880] p-0.5 shadow-lg shrink-0">
                      <div className="w-full h-full rounded-full bg-[#122E46] flex items-center justify-center text-xl sm:text-2xl font-serif text-[#DFCAAB] font-semibold">
                        AS
                      </div>
                    </div>

                    <div className="space-y-1">
                      <div className="flex items-center gap-2.5 flex-wrap">
                        <h1 className="font-serif text-2xl sm:text-3xl text-[#FAF8F5] font-normal">
                          {userName}
                        </h1>
                        <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono tracking-wider uppercase bg-[#C5A880]/20 text-[#DFCAAB] border border-[#C5A880]/40">
                          Sacred Patron
                        </span>
                      </div>
                      <p className="text-xs sm:text-sm text-stone-300 font-light">
                        {userEmail} &bull; {userPhone}
                      </p>
                      <p className="text-[11px] font-mono text-[#C5A880]/80">
                        Sanctuary Member Since October 2024
                      </p>
                    </div>
                  </div>

                  {/* Quick Action Badges */}
                  <div className="flex items-center gap-3 self-start md:self-auto">
                    <Link
                      href="/products"
                      className="px-5 py-2.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-white hover:bg-[#C5A880] text-[#122E46] hover:text-white transition-all shadow-md"
                    >
                      Explore Sacred Catalog
                    </Link>
                    <button
                      onClick={() => setIsSignedIn(false)}
                      title="Sign Out"
                      className="p-2.5 rounded-full border border-white/20 hover:border-white/50 text-white/80 hover:text-white transition-colors cursor-pointer"
                    >
                      <LogOut className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Dashboard Quick Stats Bar */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8 pt-6 border-t border-white/10 text-center">
                  <div className="p-3 rounded-2xl bg-white/5">
                    <span className="block text-2xl font-serif font-medium text-[#DFCAAB]">3</span>
                    <span className="text-[11px] font-mono uppercase tracking-wider text-stone-300">
                      Sacred Orders
                    </span>
                  </div>
                  <div className="p-3 rounded-2xl bg-white/5">
                    <span className="block text-2xl font-serif font-medium text-[#DFCAAB]">Leo ♌</span>
                    <span className="text-[11px] font-mono uppercase tracking-wider text-stone-300">
                      Solar Resonance
                    </span>
                  </div>
                  <div className="p-3 rounded-2xl bg-white/5">
                    <span className="block text-2xl font-serif font-medium text-[#DFCAAB]">2</span>
                    <span className="text-[11px] font-mono uppercase tracking-wider text-stone-300">
                      Lab Certificates
                    </span>
                  </div>
                  <div className="p-3 rounded-2xl bg-white/5">
                    <span className="block text-2xl font-serif font-medium text-[#DFCAAB]">Active</span>
                    <span className="text-[11px] font-mono uppercase tracking-wider text-stone-300">
                      In-Transit Mala
                    </span>
                  </div>
                </div>
              </div>

              {/* Main Tabbed Layout */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                {/* Left Column: Navigation Sidebar */}
                <div className="lg:col-span-3 bg-white rounded-2xl border border-[#E2DEC9] p-2 sm:p-3 shadow-md space-y-1">
                  {[
                    { id: "orders", label: "My Orders", icon: Package, badge: "1 Active" },
                    { id: "spiritual", label: "Spiritual Profile", icon: Compass },
                    { id: "addresses", label: "Saved Addresses", icon: MapPin },
                    { id: "certificates", label: "Provenance Vault", icon: ShieldCheck, badge: "Lab Verified" },
                    { id: "settings", label: "Account Settings", icon: Settings },
                  ].map((tab) => {
                    const Icon = tab.icon;
                    const isActive = activeTab === tab.id;
                    return (
                      <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id as AccountTab)}
                        className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-xs font-medium tracking-wide transition-all cursor-pointer ${
                          isActive
                            ? "bg-[#122E46] text-[#FAF8F5] shadow-sm font-semibold"
                            : "text-stone-700 hover:bg-[#FAF8F5] hover:text-[#122E46]"
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <Icon className={`w-4 h-4 ${isActive ? "text-[#C5A880]" : "text-stone-400"}`} />
                          <span>{tab.label}</span>
                        </div>
                        {tab.badge && (
                          <span
                            className={`text-[9px] font-mono px-2 py-0.5 rounded-full ${
                              isActive
                                ? "bg-[#C5A880] text-black font-bold"
                                : "bg-stone-100 text-stone-600"
                            }`}
                          >
                            {tab.badge}
                          </span>
                        )}
                      </button>
                    );
                  })}

                  <div className="pt-3 mt-3 border-t border-[#E8E2D5]">
                    <button
                      onClick={() => setIsSignedIn(false)}
                      className="w-full flex items-center gap-3 px-4 py-2.5 rounded-xl text-xs text-red-700 hover:bg-red-50 transition-colors cursor-pointer"
                    >
                      <LogOut className="w-4 h-4 text-red-500" />
                      <span>Sign Out</span>
                    </button>
                  </div>
                </div>

                {/* Right Column: Tab Content */}
                <div className="lg:col-span-9 bg-white rounded-3xl border border-[#E2DEC9] p-6 sm:p-8 lg:p-10 shadow-lg min-h-[500px]">
                  {/* =================================================================
                      TAB 1: ORDERS
                      ================================================================= */}
                  {activeTab === "orders" && (
                    <div className="space-y-6">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-5 border-b border-[#E8E2D5]">
                        <div>
                          <h2 className="font-serif text-2xl text-[#1A1815]">Sacred Orders &amp; Parcels</h2>
                          <p className="text-xs text-stone-500 font-light">
                            Direct dispatch from Himalayan collection centers and Jaipur lapidary studios.
                          </p>
                        </div>
                        <span className="text-xs font-mono text-[#7A6242] uppercase tracking-wider">
                          Total Orders: 3
                        </span>
                      </div>

                      {/* Order 1: Active In-Transit */}
                      <div className="rounded-2xl border border-[#C5A880]/50 bg-[#FBF9F5] p-5 sm:p-6 space-y-4 shadow-sm relative overflow-hidden">
                        <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-[#E8E2D5]">
                          <div className="space-y-0.5">
                            <span className="text-[11px] font-mono uppercase text-stone-500">
                              Order ID: <span className="font-semibold text-[#1A1815]">#SVM-90214</span>
                            </span>
                            <span className="block text-xs text-stone-400">Placed on Oct 4, 2026</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-100 text-emerald-800 border border-emerald-300">
                              <Truck className="w-3.5 h-3.5" />
                              Out for Delivery Today
                            </span>
                            <span className="font-serif text-base font-medium text-[#1A1815]">₹4,798</span>
                          </div>
                        </div>

                        {/* Items in Order */}
                        <div className="space-y-3">
                          <div className="flex items-center gap-4">
                            <div className="w-14 h-14 rounded-xl bg-white border border-[#E0D9CA] relative overflow-hidden shrink-0">
                              <Image
                                src="/images/products/prod2.webp"
                                alt="Vrindavan Krishna Tulsi 108 Mala"
                                fill
                                className="object-cover"
                              />
                            </div>
                            <div className="flex-1 min-w-0">
                              <h4 className="font-serif text-sm sm:text-base text-[#1A1815] truncate">
                                Vrindavan Krishna Tulsi 108 Japa Mala
                              </h4>
                              <p className="text-[11px] font-mono text-stone-500">
                                Naturally seasoned Vrindavan wood &bull; Qty: 1 &bull; ₹1,899
                              </p>
                            </div>
                          </div>

                          <div className="flex items-center gap-4">
                            <div className="w-14 h-14 rounded-xl bg-white border border-[#E0D9CA] relative overflow-hidden shrink-0">
                              <Image
                                src="/images/products/prod3.webp"
                                alt="Raw Earth Lapis Lazuli Bracelet"
                                fill
                                className="object-cover"
                              />
                            </div>
                            <div className="flex-1 min-w-0">
                              <h4 className="font-serif text-sm sm:text-base text-[#1A1815] truncate">
                                Raw Earth Lapis Lazuli Energy Bracelet
                              </h4>
                              <p className="text-[11px] font-mono text-stone-500">
                                Untreated metamorphic matrix &bull; Qty: 1 &bull; ₹1,999
                              </p>
                            </div>
                          </div>
                        </div>

                        {/* Order Actions */}
                        <div className="pt-3 border-t border-[#E8E2D5] flex flex-wrap items-center justify-between gap-3">
                          <span className="text-xs text-stone-500">
                            Courier: Bluedart Express &bull; AWB: <span className="font-mono">BLU9812903</span>
                          </span>
                          <div className="flex items-center gap-3">
                            <button
                              onClick={() => alert("Tracking updates: Courier is out for delivery in your locality.")}
                              className="px-4 py-2 rounded-full border border-[#1A1815] text-xs font-medium text-[#1A1815] hover:bg-[#1A1815] hover:text-white transition-all cursor-pointer"
                            >
                              Live Courier Track
                            </button>
                            <Link
                              href="/products"
                              className="px-4 py-2 rounded-full bg-[#122E46] text-xs font-medium text-white hover:bg-[#C5A880] transition-colors"
                            >
                              Order Details
                            </Link>
                          </div>
                        </div>
                      </div>

                      {/* Order 2: Past Delivered */}
                      <div className="rounded-2xl border border-[#E2DEC9] p-5 sm:p-6 space-y-4 bg-white">
                        <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-[#E8E2D5]">
                          <div className="space-y-0.5">
                            <span className="text-[11px] font-mono uppercase text-stone-500">
                              Order ID: <span className="font-semibold text-[#1A1815]">#SVM-82190</span>
                            </span>
                            <span className="block text-xs text-stone-400">Placed on Sep 18, 2026</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-stone-100 text-stone-700">
                              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                              Delivered on Sep 22
                            </span>
                            <span className="font-serif text-base font-medium text-[#1A1815]">₹2,899</span>
                          </div>
                        </div>

                        <div className="flex items-center gap-4">
                          <div className="w-14 h-14 rounded-xl bg-white border border-[#E0D9CA] relative overflow-hidden shrink-0">
                            <Image
                              src="/images/products/prod1.webp"
                              alt="Himalayan Rudraksha 108 Japa Mala"
                              fill
                              className="object-cover"
                            />
                          </div>
                          <div className="flex-1 min-w-0">
                            <h4 className="font-serif text-sm sm:text-base text-[#1A1815]">
                              Himalayan Rudraksha 108 Japa Mala (5-Mukhi Taplejung)
                            </h4>
                            <p className="text-[11px] font-mono text-stone-500">
                              Lab X-Ray Tested &bull; Unbleached Sacred Cotton Cord &bull; ₹2,899
                            </p>
                          </div>
                        </div>

                        <div className="pt-3 border-t border-[#E8E2D5] flex flex-wrap items-center justify-between gap-3">
                          <span className="text-xs text-emerald-700 font-medium flex items-center gap-1.5">
                            <ShieldCheck className="w-4 h-4 text-emerald-600" />
                            Digital Lab Provenance Certificate Attached
                          </span>
                          <button
                            onClick={() => setActiveTab("certificates")}
                            className="text-xs font-medium text-[#7A6242] hover:underline cursor-pointer"
                          >
                            View X-Ray Lab Certificate &rarr;
                          </button>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* =================================================================
                      TAB 2: SPIRITUAL PROFILE & ENERGY RESONANCE
                      ================================================================= */}
                  {activeTab === "spiritual" && (
                    <div className="space-y-6">
                      <div className="pb-5 border-b border-[#E8E2D5]">
                        <h2 className="font-serif text-2xl text-[#1A1815]">Spiritual Alignment Profile</h2>
                        <p className="text-xs text-stone-500 font-light">
                          Your Vedic astrological traits, cosmic resonance, and recommended botanicals.
                        </p>
                      </div>

                      {/* Zodiac & Graha Card */}
                      <div className="p-6 rounded-2xl bg-[#F6F4EE] border border-[#E0D9CA] space-y-4">
                        <div className="flex items-start justify-between">
                          <div>
                            <span className="text-[10px] font-mono uppercase tracking-widest text-[#7A6242]">
                              Zodiac Energy Archetype
                            </span>
                            <h3 className="font-serif text-2xl text-[#1A1815] mt-1">
                              Leo (Simha Rashi) &bull; Solar Agni
                            </h3>
                          </div>
                          <span className="text-3xl">♌</span>
                        </div>

                        <p className="text-xs sm:text-sm text-stone-600 font-light leading-relaxed">
                          Your solar chart carries an intense heat and leadership current. Traditional texts recommend
                          combining grounding Rudraksha seeds with cooling natural metals or genuine solar crystals to
                          prevent agitation and preserve deep emotional composure.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                          <div className="p-3 bg-white rounded-xl border border-[#E0D9CA]">
                            <span className="block text-[10px] font-mono text-stone-400 uppercase">Ruling Planet</span>
                            <span className="text-xs font-semibold text-[#1A1815]">Surya (Sun)</span>
                          </div>
                          <div className="p-3 bg-white rounded-xl border border-[#E0D9CA]">
                            <span className="block text-[10px] font-mono text-stone-400 uppercase">Primary Material</span>
                            <span className="text-xs font-semibold text-[#1A1815]">Tiger Eye &amp; Rudraksha</span>
                          </div>
                          <div className="p-3 bg-white rounded-xl border border-[#E0D9CA]">
                            <span className="block text-[10px] font-mono text-stone-400 uppercase">Mala Count</span>
                            <span className="text-xs font-semibold text-[#1A1815]">108 Hand-Knotted</span>
                          </div>
                        </div>
                      </div>

                      {/* Personal Daily Intentions */}
                      <div className="space-y-3">
                        <h4 className="font-serif text-base text-[#1A1815]">Active Contemplative Intentions</h4>
                        <div className="flex flex-wrap gap-2">
                          {[
                            "Daily Japa Breathwork",
                            "EMF & Negative Frequency Shielding",
                            "Heart Chakra (Anahata) Calmness",
                            "Authentic Unheated Crystals",
                            "Ethical Forest Provenance",
                          ].map((tag) => (
                            <span
                              key={tag}
                              className="px-3.5 py-1.5 rounded-full text-xs font-medium bg-[#122E46]/10 text-[#122E46] border border-[#122E46]/20 flex items-center gap-1.5"
                            >
                              <Check className="w-3.5 h-3.5 text-[#C5A880]" />
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Zodiac Finder Quick CTA */}
                      <div className="p-5 rounded-2xl bg-gradient-to-r from-[#FAF8F5] to-[#F4EFE6] border border-[#C5A880]/40 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                        <div>
                          <h4 className="font-serif text-sm sm:text-base text-[#1A1815]">Want a personalized recommendation?</h4>
                          <p className="text-xs text-stone-500 font-light">
                            Use our Energy &amp; Astrological Finder tool to recalibrate your sacred pieces.
                          </p>
                        </div>
                        <Link
                          href="/tools/energy-finder"
                          className="px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#1A1815] text-white hover:bg-[#C5A880] transition-colors whitespace-nowrap"
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
                          <h2 className="font-serif text-2xl text-[#1A1815]">Saved Sanctuaries &amp; Addresses</h2>
                          <p className="text-xs text-stone-500 font-light">
                            Manage delivery addresses for hassle-free insured shipping.
                          </p>
                        </div>
                        <button
                          onClick={() => setShowAddressModal(true)}
                          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#122E46] text-white text-xs font-medium hover:bg-[#C5A880] transition-colors cursor-pointer self-start sm:self-auto"
                        >
                          <Plus className="w-3.5 h-3.5" />
                          Add Address
                        </button>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {addresses.map((addr) => (
                          <div
                            key={addr.id}
                            className={`p-5 rounded-2xl border transition-all ${
                              addr.isDefault
                                ? "bg-[#FBF9F5] border-[#C5A880] shadow-sm"
                                : "bg-white border-[#E2DEC9]"
                            }`}
                          >
                            <div className="flex items-center justify-between mb-3">
                              <span className="text-xs font-semibold text-[#1A1815]">{addr.title}</span>
                              {addr.isDefault && (
                                <span className="text-[10px] font-mono tracking-wider uppercase px-2 py-0.5 rounded-full bg-[#C5A880]/20 text-[#7A6242] border border-[#C5A880]/40">
                                  Default
                                </span>
                              )}
                            </div>
                            <p className="text-xs text-stone-600 font-medium mb-1">{addr.recipient}</p>
                            <p className="text-xs text-stone-500 font-light leading-relaxed">
                              {addr.street}, {addr.city}, {addr.state} - {addr.pincode}
                            </p>
                            <p className="text-xs text-stone-500 font-mono mt-2">{addr.phone}</p>
                          </div>
                        ))}
                      </div>

                      {/* Modal for adding address */}
                      {showAddressModal && (
                        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4">
                          <div className="bg-white rounded-3xl p-6 sm:p-8 max-w-lg w-full border border-[#E2DEC9] shadow-2xl space-y-5 animate-in fade-in zoom-in-95 duration-200">
                            <div className="flex items-center justify-between border-b border-[#E8E2D5] pb-3">
                              <h3 className="font-serif text-xl text-[#1A1815]">Add Delivery Address</h3>
                              <button
                                onClick={() => setShowAddressModal(false)}
                                className="text-stone-400 hover:text-stone-700 text-sm cursor-pointer"
                              >
                                &times; Close
                              </button>
                            </div>

                            <form onSubmit={handleAddAddress} className="space-y-3">
                              <div>
                                <label className="block text-[11px] font-mono uppercase text-stone-500 mb-1">
                                  Recipient Full Name
                                </label>
                                <input
                                  type="text"
                                  required
                                  value={newAddress.recipient}
                                  onChange={(e) => setNewAddress({ ...newAddress, recipient: e.target.value })}
                                  placeholder="e.g. Ayush Sharma"
                                  className="w-full px-3.5 py-2.5 rounded-xl border border-[#E2DEC9] text-xs focus:outline-none focus:border-[#C5A880]"
                                />
                              </div>

                              <div>
                                <label className="block text-[11px] font-mono uppercase text-stone-500 mb-1">
                                  Street Address &amp; House Number
                                </label>
                                <input
                                  type="text"
                                  required
                                  value={newAddress.street}
                                  onChange={(e) => setNewAddress({ ...newAddress, street: e.target.value })}
                                  placeholder="e.g. Flat 301, Palm Court, Sector 14"
                                  className="w-full px-3.5 py-2.5 rounded-xl border border-[#E2DEC9] text-xs focus:outline-none focus:border-[#C5A880]"
                                />
                              </div>

                              <div className="grid grid-cols-2 gap-3">
                                <div>
                                  <label className="block text-[11px] font-mono uppercase text-stone-500 mb-1">
                                    City
                                  </label>
                                  <input
                                    type="text"
                                    required
                                    value={newAddress.city}
                                    onChange={(e) => setNewAddress({ ...newAddress, city: e.target.value })}
                                    placeholder="e.g. Gurugram"
                                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#E2DEC9] text-xs focus:outline-none focus:border-[#C5A880]"
                                  />
                                </div>
                                <div>
                                  <label className="block text-[11px] font-mono uppercase text-stone-500 mb-1">
                                    State
                                  </label>
                                  <input
                                    type="text"
                                    required
                                    value={newAddress.state}
                                    onChange={(e) => setNewAddress({ ...newAddress, state: e.target.value })}
                                    placeholder="e.g. Haryana"
                                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#E2DEC9] text-xs focus:outline-none focus:border-[#C5A880]"
                                  />
                                </div>
                              </div>

                              <div className="grid grid-cols-2 gap-3">
                                <div>
                                  <label className="block text-[11px] font-mono uppercase text-stone-500 mb-1">
                                    PIN Code
                                  </label>
                                  <input
                                    type="text"
                                    required
                                    value={newAddress.pincode}
                                    onChange={(e) => setNewAddress({ ...newAddress, pincode: e.target.value })}
                                    placeholder="e.g. 122001"
                                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#E2DEC9] text-xs focus:outline-none focus:border-[#C5A880]"
                                  />
                                </div>
                                <div>
                                  <label className="block text-[11px] font-mono uppercase text-stone-500 mb-1">
                                    Phone Number
                                  </label>
                                  <input
                                    type="text"
                                    required
                                    value={newAddress.phone}
                                    onChange={(e) => setNewAddress({ ...newAddress, phone: e.target.value })}
                                    placeholder="e.g. +91 9876543210"
                                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#E2DEC9] text-xs focus:outline-none focus:border-[#C5A880]"
                                  />
                                </div>
                              </div>

                              <div className="pt-3 flex justify-end gap-3">
                                <button
                                  type="button"
                                  onClick={() => setShowAddressModal(false)}
                                  className="px-4 py-2 rounded-full border border-stone-300 text-xs text-stone-600 hover:bg-stone-50 cursor-pointer"
                                >
                                  Cancel
                                </button>
                                <button
                                  type="submit"
                                  className="px-5 py-2 rounded-full bg-[#122E46] hover:bg-[#C5A880] text-white text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer"
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
                        <h2 className="font-serif text-2xl text-[#1A1815]">Sacred Provenance Vault</h2>
                        <p className="text-xs text-stone-500 font-light">
                          Verified laboratory X-Ray analysis, density tests, and botanical origin deeds.
                        </p>
                      </div>

                      <div className="space-y-4">
                        {/* Certificate 1 */}
                        <div className="p-5 sm:p-6 rounded-2xl border border-[#C5A880]/50 bg-[#FBF9F5] flex flex-col md:flex-row md:items-center justify-between gap-5">
                          <div className="space-y-1.5">
                            <div className="flex items-center gap-2">
                              <ShieldCheck className="w-5 h-5 text-emerald-600" />
                              <span className="font-mono text-xs uppercase tracking-wider text-[#7A6242] font-semibold">
                                Certificate #RUD-2026-X89
                              </span>
                            </div>
                            <h3 className="font-serif text-lg text-[#1A1815]">
                              Wild Himalayan Rudraksha (Taplejung, Nepal &bull; 2,200m)
                            </h3>
                            <p className="text-xs text-stone-500 font-light max-w-xl">
                              Tested via Non-Destructive High-Frequency Radiography. 5 authentic natural internal locules
                              confirmed. Zero synthetic glue, zero chemical glaze. Sandalwood oil cured.
                            </p>
                            <span className="inline-block text-[11px] font-mono text-stone-400">
                              Issued: 22 September 2026 &bull; Certified by: National Gem &amp; Botanical Testing Lab
                            </span>
                          </div>

                          <button
                            onClick={() => alert("Downloading verified provenance report (PDF)...")}
                            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full border border-[#1A1815] hover:bg-[#1A1815] hover:text-white text-xs font-medium text-[#1A1815] transition-all cursor-pointer self-start md:self-center shrink-0"
                          >
                            <Download className="w-3.5 h-3.5" />
                            Download PDF Certificate
                          </button>
                        </div>

                        {/* Certificate 2 */}
                        <div className="p-5 sm:p-6 rounded-2xl border border-[#E2DEC9] bg-white flex flex-col md:flex-row md:items-center justify-between gap-5">
                          <div className="space-y-1.5">
                            <div className="flex items-center gap-2">
                              <ShieldCheck className="w-5 h-5 text-emerald-600" />
                              <span className="font-mono text-xs uppercase tracking-wider text-[#7A6242] font-semibold">
                                Certificate #GEM-2026-L40
                              </span>
                            </div>
                            <h3 className="font-serif text-lg text-[#1A1815]">
                              Untreated Metamorphic Lapis Lazuli with Natural Pyrite
                            </h3>
                            <p className="text-xs text-stone-500 font-light max-w-xl">
                              Refractive Index (RI): 1.50 &bull; Specific Gravity (SG): 2.75. 100% Earth-Mined specimen.
                              No chemical resin impregnation or artificial dye detected.
                            </p>
                            <span className="inline-block text-[11px] font-mono text-stone-400">
                              Issued: 04 October 2026 &bull; Jaipur Lapidary Verification Council
                            </span>
                          </div>

                          <button
                            onClick={() => alert("Downloading verified provenance report (PDF)...")}
                            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full border border-[#1A1815] hover:bg-[#1A1815] hover:text-white text-xs font-medium text-[#1A1815] transition-all cursor-pointer self-start md:self-center shrink-0"
                          >
                            <Download className="w-3.5 h-3.5" />
                            Download PDF Certificate
                          </button>
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
                        <h2 className="font-serif text-2xl text-[#1A1815]">Account &amp; Security Settings</h2>
                        <p className="text-xs text-stone-500 font-light">
                          Update your contact preferences, password, and dispatch alerts.
                        </p>
                      </div>

                      {saveSuccess && (
                        <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                          Profile changes saved successfully!
                        </div>
                      )}

                      <form onSubmit={handleSaveProfile} className="space-y-4 max-w-xl">
                        <div>
                          <label className="block text-xs font-mono uppercase text-stone-600 mb-1.5">
                            Full Name
                          </label>
                          <input
                            type="text"
                            value={userName}
                            onChange={(e) => setUserName(e.target.value)}
                            className="w-full px-4 py-2.5 rounded-xl border border-[#E2DEC9] text-xs text-[#1A1815] focus:outline-none focus:border-[#C5A880]"
                          />
                        </div>

                        <div>
                          <label className="block text-xs font-mono uppercase text-stone-600 mb-1.5">
                            Primary Email
                          </label>
                          <input
                            type="email"
                            value={userEmail}
                            onChange={(e) => setUserEmail(e.target.value)}
                            className="w-full px-4 py-2.5 rounded-xl border border-[#E2DEC9] text-xs text-[#1A1815] focus:outline-none focus:border-[#C5A880]"
                          />
                        </div>

                        <div>
                          <label className="block text-xs font-mono uppercase text-stone-600 mb-1.5">
                            Mobile Number (For Courier OTP &amp; Dispatch Updates)
                          </label>
                          <input
                            type="tel"
                            value={userPhone}
                            onChange={(e) => setUserPhone(e.target.value)}
                            className="w-full px-4 py-2.5 rounded-xl border border-[#E2DEC9] text-xs text-[#1A1815] focus:outline-none focus:border-[#C5A880]"
                          />
                        </div>

                        <div className="pt-2">
                          <button
                            type="submit"
                            className="px-6 py-3 rounded-full bg-[#1A1815] hover:bg-[#C5A880] text-white text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer shadow-md"
                          >
                            Save Profile Updates
                          </button>
                        </div>
                      </form>

                      <div className="pt-6 border-t border-[#E8E2D5] space-y-3">
                        <h4 className="font-serif text-base text-[#1A1815]">Communication Preferences</h4>
                        <label className="flex items-center gap-3 text-xs text-stone-600 cursor-pointer">
                          <input type="checkbox" defaultChecked className="rounded border-stone-300 text-[#122E46]" />
                          Receive WhatsApp updates for real-time parcel dispatch &amp; delivery
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
      </div>
    </CartProvider>
  );
}
