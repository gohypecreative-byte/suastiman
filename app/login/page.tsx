"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Navbar } from "@/components/layout/Navbar";
import { CartDrawer } from "@/components/cart/CartDrawer";
import { BottomNav } from "@/components/layout/BottomNav";
import { CartProvider } from "@/context/CartContext";
import { CountryCodeDropdown } from "@/components/common/CountryCodeDropdown";
import { ChevronDown, ShieldCheck } from "lucide-react";

export default function LoginPage() {
  const router = useRouter();

  // Login Method: Phone (OTP) matching reference image layout OR Email & Password
  const [loginMethod, setLoginMethod] = useState<"phone" | "email">("phone");

  // Phone / OTP states
  const [countryCode, setCountryCode] = useState("+ 91");
  const [phone, setPhone] = useState("");
  const [step, setStep] = useState<"form" | "otp">("form");
  const [otp, setOtp] = useState(["", "", "", ""]);
  const [timer, setTimer] = useState(30);

  // Email / Password states
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Optional Birth details link toggle
  const [showBirthDetails, setShowBirthDetails] = useState(false);
  const [dob, setDob] = useState("");
  const [tob, setTob] = useState("");
  const [pob, setPob] = useState("");

  // Common UI states
  const [errorMsg, setErrorMsg] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // OTP Timer countdown
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (step === "otp" && timer > 0) {
      interval = setInterval(() => setTimer((prev) => prev - 1), 1000);
    }
    return () => clearInterval(interval);
  }, [step, timer]);

  // Handle Send OTP / Login
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg("");

    if (loginMethod === "phone") {
      if (!phone.trim() || phone.replace(/\D/g, "").length < 10) {
        setErrorMsg("Please enter a valid 10-digit phone number.");
        return;
      }

      setIsLoading(true);
      setTimeout(() => {
        setIsLoading(false);
        setStep("otp");
        setTimer(30);
      }, 500);
    } else {
      if (!email.trim()) {
        setErrorMsg("Please enter your registered email address.");
        return;
      }
      if (!password.trim()) {
        setErrorMsg("Please enter your password / sacred key.");
        return;
      }

      setIsLoading(true);
      setTimeout(() => {
        setIsLoading(false);
        if (typeof window !== "undefined") {
          localStorage.setItem("svastiman_logged_in", "true");
          const displayName = email.includes("@") ? email.split("@")[0] : "Seeker";
          localStorage.setItem("svastiman_user_name", displayName);
        }
        router.push("/account");
      }, 600);
    }
  };

  const handleOtpChange = (index: number, val: string) => {
    if (val.length > 1) val = val.slice(-1);
    const newOtp = [...otp];
    newOtp[index] = val;
    setOtp(newOtp);

    if (val && index < 3) {
      const nextInput = document.getElementById(`login-otp-${index + 1}`);
      nextInput?.focus();
    }
  };

  const handleVerifyOtp = (e: React.FormEvent) => {
    e.preventDefault();
    if (otp.join("").length < 4) {
      setErrorMsg("Please enter the complete 4-digit verification code.");
      return;
    }
    setIsLoading(true);
    setTimeout(() => {
      if (typeof window !== "undefined") {
        localStorage.setItem("svastiman_logged_in", "true");
        localStorage.setItem("svastiman_user_name", `${countryCode} ${phone}`);
      }
      router.push("/account");
    }, 500);
  };

  const handleDemoLogin = () => {
    setIsLoading(true);
    setTimeout(() => {
      if (typeof window !== "undefined") {
        localStorage.setItem("svastiman_logged_in", "true");
        localStorage.setItem("svastiman_user_name", "Ayush Sharma");
      }
      router.push("/account");
    }, 400);
  };


  return (
    <CartProvider>
      <div className="min-h-screen flex flex-col bg-white text-[#111111]">
        <Navbar />

        {/* 2-Column Split Screen Matching Reference Image */}
        <main className="flex-1 w-full bg-white border-t border-[#E2DEC9] flex flex-col">
          <div className="w-full flex-1 grid grid-cols-1 lg:grid-cols-12 min-h-[calc(100vh-80px)]">
            
            {/* Left Column: Authentic Svastimān Flagship Sacred Photography */}
            <div className="lg:col-span-6 relative w-full h-[360px] sm:h-[460px] lg:h-full min-h-[360px] bg-[#0A1B2A] overflow-hidden">
              <Image
                src="/images/origin/stage9_svastiman.jpg"
                alt="Authentic Svastimān Handcrafted Sacred Rudraksha and Vrindavan Tulsi"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
                className="object-cover object-center brightness-[0.88] contrast-[1.05]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A1B2A]/85 via-transparent to-black/20 pointer-events-none" />

              {/* Svastimān Sacred Content Overlay */}
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-[#0A1B2A]/80 backdrop-blur-md border border-[#C5A880]/30 text-white hidden sm:block max-w-sm shadow-xl">
                <span className="text-[9px] font-sans text-[#DFCAAB] tracking-[0.22em] uppercase font-semibold block mb-1">
                  House of Sacred Indian Materials
                </span>
                <p className="font-serif italic text-xs leading-relaxed text-[#ECEADE] mb-2">
                  &ldquo;Before it was a mala, it was a fruit — nature precedes ritual.&rdquo;
                </p>
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-[10px] text-[#DFCAAB]/80 font-sans border-t border-white/10 pt-2">
                  <span className="flex items-center gap-1">
                    <ShieldCheck className="w-3 h-3 text-[#C5A880]" /> 100% Nepali and Indonesian Rudraksha
                  </span>
                  <span>•</span>
                  <span>Kashi Temple Energized</span>
                  <span>•</span>
                  <span>X-Ray Tested</span>
                </div>
              </div>
            </div>

            {/* Right Column: Clean Form Layout Matching Reference Image Exactly */}
            <div className="lg:col-span-6 p-6 sm:p-10 md:p-14 lg:p-12 xl:p-16 flex flex-col justify-center bg-white lg:overflow-y-auto">
              <div className="w-full max-w-lg mx-auto space-y-7">

                {/* Title & Subtitle Matching Reference Image */}
                <div className="flex flex-col items-center justify-center pt-1 text-center">
                  <h1 className="font-serif text-3xl sm:text-4xl font-normal text-[#1A1A1A] tracking-tight">
                    Welcome to Your Sanctuary
                  </h1>
                  <p className="font-sans text-xs sm:text-sm text-stone-500 max-w-sm mx-auto mt-2 leading-relaxed">
                    Enter your registered credentials to access your orders and certified objects.
                  </p>
                </div>

                {/* Method Tabs: Phone Number (OTP) vs Email Address */}
                <div className="flex border-b border-[#E2DEC9] text-xs font-sans">
                  <button
                    type="button"
                    onClick={() => {
                      setLoginMethod("phone");
                      setErrorMsg("");
                      setStep("form");
                    }}
                    className={`pb-2.5 pr-4 font-semibold tracking-wider uppercase transition-colors cursor-pointer ${
                      loginMethod === "phone"
                        ? "text-[#122E46] border-b-2 border-[#122E46] -mb-[1px]"
                        : "text-[#5C6773] hover:text-[#122E46]"
                    }`}
                  >
                    Phone Number (OTP)
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setLoginMethod("email");
                      setErrorMsg("");
                      setStep("form");
                    }}
                    className={`pb-2.5 px-4 font-semibold tracking-wider uppercase transition-colors cursor-pointer ${
                      loginMethod === "email"
                        ? "text-[#122E46] border-b-2 border-[#122E46] -mb-[1px]"
                        : "text-[#5C6773] hover:text-[#122E46]"
                    }`}
                  >
                    Email and Password
                  </button>
                </div>

                {errorMsg && (
                  <div className="p-3 rounded-lg bg-red-50 border border-red-200 text-red-700 text-xs text-center font-sans">
                    {errorMsg}
                  </div>
                )}

                {step === "form" ? (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {loginMethod === "phone" ? (
                      /* Phone Number Input Matching Reference Image Underline Style */
                      <div className="space-y-5">
                        <div>
                          <label className="block text-sm font-normal text-[#2D2D2D] mb-1">
                            Phone Number
                          </label>
                          <div className="flex items-center gap-2 border-b border-[#D6D0C4] focus-within:border-[#122E46] transition-colors py-1.5">
                            <CountryCodeDropdown
                              value={countryCode}
                              onChange={(code) => setCountryCode(code)}
                            />
                            <input
                              type="tel"
                              required
                              maxLength={10}
                              value={phone}
                              onChange={(e) => setPhone(e.target.value.replace(/\D/g, ""))}
                              placeholder="Enter your phone number"
                              className="min-w-0 flex-1 py-1 text-sm font-sans text-[#1A1815] bg-transparent outline-none placeholder:text-stone-400 placeholder:text-xs"
                            />
                          </div>
                        </div>

                        {/* Optional Vedic Birth Details link matching reference */}
                        <div>
                          <button
                            type="button"
                            onClick={() => setShowBirthDetails(!showBirthDetails)}
                            className="text-xs font-medium text-[#122E46] hover:text-[#C5A880] underline underline-offset-4 cursor-pointer inline-flex items-center gap-1 transition-colors"
                          >
                            <span>Enter Birth Details (Optional)</span>
                            <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${showBirthDetails ? "rotate-180" : ""}`} />
                          </button>

                          {showBirthDetails && (
                            <div className="mt-3 p-4 rounded-xl bg-[#FAF8F5] border border-[#EAE3D5] space-y-3 animate-in fade-in duration-200">
                              <p className="text-[11px] text-[#7A6242] font-sans leading-relaxed">
                                🕉️ <em>Our Vedic Jyotishacharya will calculate your Lagna and Janam Nakshatra to prescribe your personalized Rudraksha Mukhi synergy.</em>
                              </p>
                              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                                <div>
                                  <label className="block text-[10px] uppercase tracking-wider text-stone-600 mb-1">
                                    Date of Birth
                                  </label>
                                  <input
                                    type="date"
                                    value={dob}
                                    onChange={(e) => setDob(e.target.value)}
                                    className="w-full border-b border-[#D8D2C2] focus:border-[#122E46] py-1 text-xs text-[#1A1815] bg-transparent outline-none"
                                  />
                                </div>
                                <div>
                                  <label className="block text-[10px] uppercase tracking-wider text-stone-600 mb-1">
                                    Time of Birth
                                  </label>
                                  <input
                                    type="time"
                                    value={tob}
                                    onChange={(e) => setTob(e.target.value)}
                                    className="w-full border-b border-[#D8D2C2] focus:border-[#122E46] py-1 text-xs text-[#1A1815] bg-transparent outline-none"
                                  />
                                </div>
                                <div>
                                  <label className="block text-[10px] uppercase tracking-wider text-stone-600 mb-1">
                                    Birth Place
                                  </label>
                                  <input
                                    type="text"
                                    value={pob}
                                    onChange={(e) => setPob(e.target.value)}
                                    placeholder="e.g. Varanasi"
                                    className="w-full border-b border-[#D8D2C2] focus:border-[#122E46] py-1 text-xs text-[#1A1815] bg-transparent outline-none placeholder:text-stone-400"
                                  />
                                </div>
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    ) : (
                      /* Email & Password Input Matching Reference Underline Style */
                      <div className="space-y-5">
                        <div>
                          <label className="block text-sm font-normal text-[#2D2D2D] mb-1">
                            Email Address
                          </label>
                          <input
                            type="email"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter your email"
                            className="w-full border-b border-[#D6D0C4] focus:border-[#122E46] py-2 text-sm text-[#1A1815] bg-transparent outline-none placeholder:text-stone-400 placeholder:text-xs transition-colors"
                          />
                        </div>

                        <div>
                          <div className="flex justify-between items-center mb-1">
                            <label className="block text-sm font-normal text-[#2D2D2D]">
                              Password / Sacred Key
                            </label>
                            <button
                              type="button"
                              onClick={() => alert("A password reset link has been dispatched to your email address.")}
                              className="text-xs text-[#7A6242] hover:text-[#122E46] hover:underline cursor-pointer"
                            >
                              Forgot key?
                            </button>
                          </div>
                          <input
                            type="password"
                            required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="••••••••••••"
                            className="w-full border-b border-[#D6D0C4] focus:border-[#122E46] py-2 text-sm text-[#1A1815] bg-transparent outline-none placeholder:text-stone-400 placeholder:text-xs transition-colors"
                          />
                        </div>
                      </div>
                    )}

                    {/* Action Button: SEND OTP / LOGIN matching Reference Image */}
                    <div className="pt-2">
                      <button
                        type="submit"
                        disabled={isLoading}
                        className="px-10 py-3 rounded-md bg-[#122E46] hover:bg-[#1D4263] text-white font-sans text-xs font-semibold tracking-wider uppercase transition-all duration-300 shadow-sm hover:shadow-md cursor-pointer disabled:opacity-50"
                      >
                        {isLoading
                          ? "PROCESSING..."
                          : loginMethod === "phone"
                          ? "SEND OTP"
                          : "LOGIN"}
                      </button>
                    </div>

                    {/* Sign Up Option for New Users Matching Reference Layout */}
                    <div className="pt-2 text-xs font-sans text-stone-600">
                      Don&rsquo;t have an account?{" "}
                      <Link
                        href="/signup"
                        className="font-bold text-[#122E46] hover:text-[#C5A880] underline underline-offset-4 tracking-wider uppercase transition-colors"
                      >
                        SIGN UP
                      </Link>
                    </div>

                    {/* Simple Button for Demo */}
                    <div className="pt-2">
                      <button
                        type="button"
                        onClick={handleDemoLogin}
                        disabled={isLoading}
                        className="w-full py-2.5 rounded-md border border-[#D6D0C4] hover:border-[#122E46] bg-[#FAF8F5] hover:bg-white text-[#122E46] font-sans text-xs font-semibold tracking-wider uppercase transition-colors cursor-pointer disabled:opacity-50"
                      >
                        Demo Account
                      </button>
                    </div>

                  </form>
                ) : (
                  /* OTP Verification Screen */
                  <div className="space-y-6 animate-in fade-in duration-300">
                    <div className="space-y-1">
                      <h2 className="font-serif text-2xl font-normal text-[#122E46]">
                        Enter Verification Code
                      </h2>
                      <p className="text-xs text-stone-500">
                        We sent a 4-digit sacred code to{" "}
                        <span className="font-semibold text-[#122E46]">
                          {countryCode} {phone}
                        </span>
                      </p>
                    </div>

                    <form onSubmit={handleVerifyOtp} className="space-y-6">
                      <div className="flex justify-start gap-3 max-w-xs">
                        {otp.map((digit, idx) => (
                          <input
                            key={idx}
                            id={`login-otp-${idx}`}
                            type="text"
                            inputMode="numeric"
                            maxLength={1}
                            value={digit}
                            onChange={(e) => handleOtpChange(idx, e.target.value)}
                            className="w-12 h-14 text-center text-xl font-mono font-bold rounded-lg border border-[#D8D2C2] bg-[#FAF8F5] text-[#122E46] focus:border-[#122E46] focus:ring-1 focus:ring-[#122E46] outline-none transition-all"
                          />
                        ))}
                      </div>

                      <div className="text-xs text-stone-500 flex items-center justify-between max-w-xs">
                        <span>Resend code in {timer}s</span>
                        {timer === 0 && (
                          <button
                            type="button"
                            onClick={() => {
                              setTimer(30);
                              setErrorMsg("");
                            }}
                            className="text-[#7A6242] hover:text-[#122E46] font-semibold hover:underline cursor-pointer"
                          >
                            Resend OTP
                          </button>
                        )}
                      </div>

                      <div className="flex items-center gap-4 pt-2">
                        <button
                          type="submit"
                          disabled={isLoading}
                          className="px-8 py-3.5 rounded-lg bg-[#122E46] hover:bg-[#1D4263] text-white font-sans text-xs font-semibold tracking-[0.14em] uppercase transition-all duration-300 shadow-sm hover:shadow-md cursor-pointer disabled:opacity-50"
                        >
                          {isLoading ? "VERIFYING..." : "VERIFY AND ENTER"}
                        </button>
                        <button
                          type="button"
                          onClick={() => setStep("form")}
                          className="text-xs text-stone-600 hover:text-[#122E46] underline cursor-pointer"
                        >
                          Change Number
                        </button>
                      </div>
                    </form>
                  </div>
                )}
              </div>
            </div>
          </div>
        </main>

        <CartDrawer />
        <BottomNav />
      </div>
    </CartProvider>
  );
}
