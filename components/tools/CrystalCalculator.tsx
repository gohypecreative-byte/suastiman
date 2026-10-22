"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import {
  RotateCcw,
  Compass,
  CheckCircle2,
  HelpCircle,
  ChevronDown,
  ChevronUp,
  Share2,
  ShieldCheck,
  Flame,
  Droplets,
  Trees,
  Mountain,
  Disc3,
  ArrowRight,
  ExternalLink,
  Check,
  Search,
  X,
} from "lucide-react";

interface CalculationResult {
  lifePath: number;
  kua: number;
  primaryElement: string;
  bestDirection: string;
  loShuCounts: Record<number, number>;
  missingNumbers: number[];
  elementScores: Record<string, { count: number; status: "Missing" | "Light" | "Balanced" | "Strong" }>;
  primaryCrystal: {
    name: string;
    purpose: string;
    description: string;
    image: string;
    color: string;
  };
  secondaryCrystal: {
    name: string;
    purpose: string;
    description: string;
    image: string;
    color: string;
  };
  rudraksha: {
    name: string;
    desc: string;
  };
  wearGuidance: {
    wrist: string;
    day: string;
    mantra: string;
    placement: string;
  };
  summary: string;
}

const ELEMENT_INFO: Record<
  string,
  {
    purpose: string;
    color: string;
    crystals: { primary: string; secondary: string; desc: string; altDesc: string };
    rudraksha: { name: string; desc: string };
    direction: string;
    day: string;
    mantra: string;
    placement: string;
    icon: any;
  }
> = {
  Wood: {
    purpose: "Growth and Creativity",
    color: "#2E7D48",
    crystals: {
      primary: "Green Aventurine",
      secondary: "Malachite and Jade",
      desc: "Invites organic expansion, opportunity, breakthrough momentum, and emotional heart alignment.",
      altDesc: "Adds grounded wisdom and shields against stagnation or hesitation in your next chapter.",
    },
    rudraksha: {
      name: "4 and 6 Mukhi Sacred Rudraksha",
      desc: "Awakens intellect, articulate communication, and sustained creative drive.",
    },
    direction: "East and South-East",
    day: "Wednesday",
    mantra: "Om Braam Breem Braum Sah Budhaya Namah",
    placement: "Place on the East corner of your study or workspace to activate continuous growth.",
    icon: Trees,
  },
  Fire: {
    purpose: "Confidence and Visibility",
    color: "#C4483A",
    crystals: {
      primary: "Carnelian and Sunstone",
      secondary: "Red Jasper",
      desc: "Ignites personal radiance, courage, decisive action, and magnetic public presence.",
      altDesc: "Grounds physical vitality, preventing burnout while sustaining internal motivation.",
    },
    rudraksha: {
      name: "3 and 12 Mukhi Rudraksha",
      desc: "Dissolves self-doubt, activates solar energy, and commands respect in leadership.",
    },
    direction: "South",
    day: "Sunday",
    mantra: "Om Hraam Hreem Hroum Sah Suryaya Namah",
    placement: "Place on the South quadrant of your desk for visibility, respect, and clear reputation.",
    icon: Flame,
  },
  Earth: {
    purpose: "Stability and Wealth Retention",
    color: "#B28236",
    crystals: {
      primary: "Citrine and Natural Pyrite",
      secondary: "Golden Tiger Eye",
      desc: "Anchors material prosperity, prevents financial leakage, and reinforces emotional resilience.",
      altDesc: "Sharpens willpower, builds unshakeable confidence, and brings disciplined focus.",
    },
    rudraksha: {
      name: "7 and 8 Mukhi Rudraksha",
      desc: "Governed by Goddess Mahalaxmi and Lord Ganesha; removes obstacles in career and investments.",
    },
    direction: "Center, North-East and South-West",
    day: "Thursday",
    mantra: "Om Graam Greem Groum Sah Gurave Namah",
    placement: "Place near the South-West master direction or wealth locker for grounding and retention.",
    icon: Mountain,
  },
  Metal: {
    purpose: "Mental Clarity and Precision",
    color: "#7E8287",
    crystals: {
      primary: "Natural Pyrite and Clear Quartz",
      secondary: "Hematite",
      desc: "Filters out mental clutter, amplifies intuitive logic, and shields your personal aura.",
      altDesc: "Absorbs toxic negativity, calms overactive overthinking, and grounds emotional storms.",
    },
    rudraksha: {
      name: "7 Mukhi Himalayan Rudraksha",
      desc: "Fortifies inner peace, structural clarity, and protective energy boundary.",
    },
    direction: "West and North-West",
    day: "Friday / Saturday",
    mantra: "Om Shram Shreem Shroum Sah Chandraya Namah",
    placement: "Keep on the West or North-West zone to enhance structural precision and support from mentors.",
    icon: Disc3,
  },
  Water: {
    purpose: "Intuition and Career Flow",
    color: "#2C5E8A",
    crystals: {
      primary: "Amethyst and Blue Lace Agate",
      secondary: "Lapis Lazuli and Black Obsidian",
      desc: "Fosters peaceful serenity, throat chakra expression, intuition, and effortless career transitions.",
      altDesc: "Repels psychic drain, absorbs negative intent, and provides an impenetrable psychic shield.",
    },
    rudraksha: {
      name: "1 Mukhi and 5 Mukhi Vrindavan Botanicals",
      desc: "Connects you to pure universal awareness, deep calm meditation, and absolute truth.",
    },
    direction: "North",
    day: "Monday / Saturday",
    mantra: "Om Namah Shivaya",
    placement: "Place facing North near your computer screen or meditation altar to invite smooth flowing opportunities.",
    icon: Droplets,
  },
};

const FAQS = [
  {
    q: "Is my crystal result random?",
    a: "No. Your report is calculated using authentic Vedic Numerology and the classic Lo Shu Grid methodology. We map every single digit in your birth date and optional mobile number to its elemental frequency (Wood, Fire, Earth, Metal, Water) to identify which energy centers are dominant, deficient, or completely absent.",
  },
  {
    q: "How is my Life Path and KUA calculated?",
    a: "Your Life Path is derived by reducing all numbers of your full birth date to a single vibrational root (or master number). Your KUA number is computed from your birth year and gender, revealing your personal energetic quadrant and most favorable spatial directions.",
  },
  {
    q: "How does mobile number analysis work with my birth date?",
    a: "Your birth date represents your foundational karmic blueprint (fixed at birth), while your everyday mobile number represents your active communicative frequency. If your birth date is missing the Metal or Earth element, having those numbers present in your phone number acts as an energetic bridge that compensates for the missing vibration.",
  },
  {
    q: "Which wrist should I wear my recommended bracelet on?",
    a: "In authentic sacred traditions, the left wrist is your receiving side—wear your crystal bracelet here to absorb healing, calm, emotional peace, and inward transformation. Wear on the right wrist when you need to project confidence, authority, charisma, and outward business success.",
  },
  {
    q: "Are the crystals natural, unheated, and energised?",
    a: "Every Svastimān gemstone and botanical bead is 100% natural, unheated, certified earth-mined, and energized in accordance with ancient Vedic rites using sacred Vrindavan waters and Vedic mantras before dispatch.",
  },
];

const PROFESSION_CATEGORIES = [
  {
    category: "Business, Commerce and Strategy",
    options: [
      "Entrepreneur / Business Owner",
      "Finance / Banking / Investment",
      "Consulting / Analyst / Strategy",
      "Legal / Compliance / Audit",
      "IT / Software / Engineering / Data",
      "Trading / Procurement / Supply Chain",
    ],
  },
  {
    category: "Creative, Education and Communication",
    options: [
      "Artist / Designer / Writer / Media",
      "Marketing / Brand / Content / Social Media",
      "Teacher / Educator / Trainer / Coach",
      "HR / Community / People-facing roles",
    ],
  },
  {
    category: "Public, Sales and Visibility Roles",
    options: [
      "Sales / Business Development",
      "Performer / Speaker / Influencer",
      "Leadership / Politics / Public Relations",
      "Hospitality / Events / Front Office",
    ],
  },
  {
    category: "Healing, Care and Research",
    options: [
      "Doctor / Therapist / Healer / Researcher",
      "Psychology / Counselling / Wellness",
      "Spiritual Guide / Astrologer",
      "NGO / Social Impact / Care Work",
    ],
  },
  {
    category: "Grounded, Operational and Support Roles",
    options: [
      "Real Estate / Operations / Administration",
      "Manufacturing / Construction / Logistics",
      "Agriculture / Food / Wellness Operations",
      "Homemaker",
      "Student",
      "Other / Mixed / Not Listed",
    ],
  },
];

const GOAL_OPTIONS = [
  { value: "career", label: "Career, Money and Growth" },
  { value: "confidence", label: "Confidence and Personal Power" },
  { value: "focus", label: "Focus, Clarity and Decisions" },
  { value: "protection", label: "Protection, Stability and Grounding" },
  { value: "love", label: "Love, Harmony and Self-Worth" },
  { value: "calm", label: "Calm, Peace and Emotional Balance" },
  { value: "spiritual", label: "Spiritual Growth and Inner Guidance" },
  { value: "expression", label: "Communication and Expression" },
];

export function CrystalCalculator() {
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [gender, setGender] = useState("");
  const [mobile, setMobile] = useState("");
  const [profession, setProfession] = useState("");
  const [goal, setGoal] = useState("");
  const [error, setError] = useState("");
  const [results, setResults] = useState<CalculationResult | null>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  // Custom Dropdown States
  const [professionOpen, setProfessionOpen] = useState(false);
  const [professionSearch, setProfessionSearch] = useState("");
  const [goalOpen, setGoalOpen] = useState(false);

  const professionRef = useRef<HTMLDivElement>(null);
  const goalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (professionRef.current && !professionRef.current.contains(e.target as Node)) {
        setProfessionOpen(false);
        setProfessionSearch(profession);
      }
      if (goalRef.current && !goalRef.current.contains(e.target as Node)) {
        setGoalOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [profession]);

  const filteredProfessionCategories = PROFESSION_CATEGORIES.map((cat) => {
    const query = professionSearch.trim().toLowerCase();
    const isExactMatch = profession && query === profession.trim().toLowerCase();
    const filteredOptions = (!query || isExactMatch)
      ? cat.options
      : cat.options.filter((opt) => opt.toLowerCase().includes(query));
    return {
      category: cat.category,
      options: filteredOptions,
    };
  }).filter((cat) => cat.options.length > 0);

  const calculateReport = () => {
    setError("");

    const d = parseInt(day, 10);
    const m = parseInt(month, 10);
    const y = parseInt(year, 10);

    if (isNaN(d) || d < 1 || d > 31) {
      setError("Please enter a valid birth day (1 - 31).");
      return;
    }
    if (isNaN(m) || m < 1 || m > 12) {
      setError("Please enter a valid birth month (1 - 12).");
      return;
    }
    if (isNaN(y) || y < 1920 || y > 2030) {
      setError("Please enter a valid 4-digit birth year (e.g. 1995).");
      return;
    }

    // 1. Life Path Calculation
    const allDigits = `${d}${m}${y}`.split("").map(Number);
    let sum = allDigits.reduce((acc, curr) => acc + curr, 0);
    while (sum > 9 && sum !== 11 && sum !== 22 && sum !== 33) {
      sum = sum
        .toString()
        .split("")
        .reduce((a, b) => a + parseInt(b, 10), 0);
    }
    const lifePath = sum > 9 ? sum % 9 || 9 : sum;

    // 2. Kua Calculation
    const yearDigits = y.toString().slice(-2);
    const yearSum = (parseInt(yearDigits[0], 10) + parseInt(yearDigits[1], 10)) % 9 || 9;
    let kua = 5;
    if (gender === "male") {
      kua = 10 - yearSum;
      if (kua === 5) kua = 2;
    } else if (gender === "female") {
      kua = (yearSum + 5) % 9 || 9;
      if (kua === 5) kua = 8;
    } else {
      kua = (yearSum + 2) % 9 || 9;
    }

    // 3. Lo Shu Grid Counts (Day + Month + Year + optional Mobile)
    const loShuCounts: Record<number, number> = {
      1: 0, 2: 0, 3: 0,
      4: 0, 5: 0, 6: 0,
      7: 0, 8: 0, 9: 0,
    };

    allDigits.forEach((digit) => {
      if (digit >= 1 && digit <= 9) {
        loShuCounts[digit] = (loShuCounts[digit] || 0) + 1;
      }
    });

    // Add mobile numbers influence if provided
    if (mobile) {
      const cleanMobile = mobile.replace(/\D/g, "");
      cleanMobile.split("").forEach((ch) => {
        const dig = parseInt(ch, 10);
        if (dig >= 1 && dig <= 9) {
          loShuCounts[dig] = (loShuCounts[dig] || 0) + 0.35; // secondary weight
        }
      });
    }

    const missingNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9].filter(
      (n) => (loShuCounts[n] || 0) === 0
    );

    // 4. Element Balance Calculation
    const elementScores: Record<string, { count: number; status: "Missing" | "Light" | "Balanced" | "Strong" }> = {
      Wood: { count: (loShuCounts[3] || 0) + (loShuCounts[4] || 0), status: "Light" },
      Fire: { count: loShuCounts[9] || 0, status: "Light" },
      Earth: { count: (loShuCounts[2] || 0) + (loShuCounts[5] || 0) + (loShuCounts[8] || 0), status: "Light" },
      Metal: { count: (loShuCounts[6] || 0) + (loShuCounts[7] || 0), status: "Light" },
      Water: { count: loShuCounts[1] || 0, status: "Light" },
    };

    Object.keys(elementScores).forEach((el) => {
      const c = elementScores[el].count;
      if (c === 0) elementScores[el].status = "Missing";
      else if (c < 1.2) elementScores[el].status = "Light";
      else if (c <= 3) elementScores[el].status = "Balanced";
      else elementScores[el].status = "Strong";
    });

    // 5. Determine Primary Needed Element
    let neededElement = "Earth";
    const missingElements = Object.keys(elementScores).filter((el) => elementScores[el].status === "Missing");
    const lightElements = Object.keys(elementScores).filter((el) => elementScores[el].status === "Light");

    if (missingElements.length > 0) {
      neededElement = missingElements[0];
    } else if (lightElements.length > 0) {
      neededElement = lightElements[0];
    } else {
      neededElement = "Earth";
    }

    // Refine based on Goal
    if (goal === "career" && elementScores["Earth"].status !== "Strong") neededElement = "Earth";
    if (goal === "confidence" && elementScores["Fire"].status !== "Strong") neededElement = "Fire";
    if (goal === "focus" && elementScores["Metal"].status !== "Strong") neededElement = "Metal";
    if (goal === "calm" && elementScores["Water"].status !== "Strong") neededElement = "Water";
    if (goal === "growth" && elementScores["Wood"].status !== "Strong") neededElement = "Wood";

    const elData = ELEMENT_INFO[neededElement];

    const resultData: CalculationResult = {
      lifePath,
      kua,
      primaryElement: neededElement,
      bestDirection: elData.direction,
      loShuCounts,
      missingNumbers,
      elementScores,
      primaryCrystal: {
        name: elData.crystals.primary,
        purpose: elData.purpose,
        description: elData.crystals.desc,
        image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=600&q=80",
        color: elData.color,
      },
      secondaryCrystal: {
        name: elData.crystals.secondary,
        purpose: "Complementary Energetic Shield",
        description: elData.crystals.altDesc,
        image: "https://images.unsplash.com/photo-1611591475102-4f107c164a27?auto=format&fit=crop&w=600&q=80",
        color: elData.color,
      },
      rudraksha: elData.rudraksha,
      wearGuidance: {
        wrist: "Left wrist to receive alignment, or right wrist for assertive external action.",
        day: elData.day,
        mantra: elData.mantra,
        placement: elData.placement,
      },
      summary: `Your birth pattern reveals a profound affinity with the ${neededElement} element. By anchoring with ${elData.crystals.primary}, you balance your ${missingNumbers.length > 0 ? `missing vibration numbers [${missingNumbers.join(", ")}]` : "subtle energy flow"} while directing your focus towards ${goal ? goal.toUpperCase() : "overall prosperity and mental calm"}.`,
    };

    setResults(resultData);

    // Smooth scroll down to results
    setTimeout(() => {
      const resElem = document.getElementById("crystal-results-view");
      if (resElem) {
        resElem.scrollIntoView({ behavior: "smooth" });
      }
    }, 150);
  };

  const handleReset = () => {
    setDay("");
    setMonth("");
    setYear("");
    setGender("");
    setMobile("");
    setProfession("");
    setGoal("");
    setError("");
    setResults(null);
    setProfessionOpen(false);
    setProfessionSearch("");
    setGoalOpen(false);
  };

  return (
    <div className="w-full bg-[#F9F8F5] text-[#122E46] py-12 px-4 sm:px-6 lg:px-8 selection:bg-[#122E46] selection:text-[#FFF6E7]">
      <div className="max-w-6xl mx-auto space-y-10">
        {/* Hero Header */}
        <div className="text-center space-y-3.5">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif text-[#122E46] font-medium tracking-tight">
            Find Your <span className="italic text-[#8C6D3B] font-normal">Personal Power</span> Crystal
          </h1>

          <p className="max-w-2xl mx-auto text-xs sm:text-sm text-stone-600 font-light leading-relaxed">
            A refined birth pattern crystal guide for bracelet, mala, raw crystal placement,
            direction support, and personalised WhatsApp guidance.
          </p>
        </div>

        {/* Main Two-Column Card Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Form Card (Ivory Container) */}
          <div className="lg:col-span-5 space-y-3">
            <div className="bg-white text-[#1A1815] p-6 sm:p-8 rounded-2xl shadow-xl border border-[#E2DEC9] space-y-5">
              <div>
                <span className="text-[11px] font-sans font-bold uppercase tracking-[0.16em] text-[#8C6D3B]">
                  YOUR DETAILS
                </span>
                <h2 className="text-2xl sm:text-3xl font-serif font-medium text-[#122E46] mt-1">
                  Build Your Crystal Report
                </h2>
                <p className="text-xs text-stone-600 font-light mt-1.5 leading-normal">
                  Enter your birth details and intention to receive your crystal jewellery and raw crystal guidance.
                </p>
              </div>

              <div className="space-y-4 text-xs">
                {/* DOB Grid - 3 individual labeled boxes: DAY, MONTH, YEAR */}
                <div className="grid grid-cols-3 gap-2.5">
                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-wider text-stone-500 mb-1">
                      DAY
                    </label>
                    <input
                      id="jwf-day"
                      type="number"
                      placeholder="DD"
                      min="1"
                      max="31"
                      value={day}
                      onChange={(e) => setDay(e.target.value)}
                      className="w-full bg-[#FAF8F5] border border-[#D5CDBC] rounded-lg px-3 py-2 text-stone-900 focus:outline-none focus:border-[#C5A880] focus:ring-1 focus:ring-[#C5A880] text-center font-medium placeholder:text-stone-400"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-wider text-stone-500 mb-1">
                      MONTH
                    </label>
                    <input
                      id="jwf-month"
                      type="number"
                      placeholder="MM"
                      min="1"
                      max="12"
                      value={month}
                      onChange={(e) => setMonth(e.target.value)}
                      className="w-full bg-[#FAF8F5] border border-[#D5CDBC] rounded-lg px-3 py-2 text-stone-900 focus:outline-none focus:border-[#C5A880] focus:ring-1 focus:ring-[#C5A880] text-center font-medium placeholder:text-stone-400"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-wider text-stone-500 mb-1">
                      YEAR
                    </label>
                    <input
                      id="jwf-year"
                      type="number"
                      placeholder="YYYY"
                      min="1900"
                      max="2099"
                      value={year}
                      onChange={(e) => setYear(e.target.value)}
                      className="w-full bg-[#FAF8F5] border border-[#D5CDBC] rounded-lg px-3 py-2 text-stone-900 focus:outline-none focus:border-[#C5A880] focus:ring-1 focus:ring-[#C5A880] text-center font-medium placeholder:text-stone-400"
                    />
                  </div>
                </div>

                {/* Gender and Mobile Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-wider text-stone-500 mb-1">
                      GENDER
                    </label>
                    <select
                      id="jwf-gender"
                      value={gender}
                      onChange={(e) => setGender(e.target.value)}
                      className="w-full bg-[#FAF8F5] border border-[#D5CDBC] rounded-lg px-3 py-2 text-stone-900 focus:outline-none focus:border-[#C5A880] font-medium"
                    >
                      <option value="">Prefer not to say</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-wider text-stone-500 mb-1">
                      MOBILE NUMBER
                    </label>
                    <input
                      id="jwf-mobile"
                      type="tel"
                      placeholder="Optional"
                      value={mobile}
                      onChange={(e) => setMobile(e.target.value)}
                      className="w-full bg-[#FAF8F5] border border-[#D5CDBC] rounded-lg px-3 py-2 text-stone-900 focus:outline-none focus:border-[#C5A880] placeholder:text-stone-400 font-medium"
                    />
                  </div>
                </div>

                {/* Profession Searchable Combobox (Single unified search & select) */}
                <div className="relative" ref={professionRef}>
                  <label htmlFor="jwf-profession-input" className="block text-[10px] font-bold uppercase tracking-wider text-stone-500 mb-1">
                    PROFESSION
                  </label>
                  <input type="hidden" id="jwf-profession" name="profession" value={profession} />
                  
                  <div className="relative flex items-center">
                    <input
                      id="jwf-profession-input"
                      type="text"
                      placeholder="Select profession"
                      value={professionOpen ? professionSearch : (profession || "")}
                      onChange={(e) => {
                        setProfessionSearch(e.target.value);
                        if (!professionOpen) setProfessionOpen(true);
                        if (!e.target.value) {
                          setProfession("");
                        }
                      }}
                      onFocus={() => {
                        setProfessionOpen(true);
                        setGoalOpen(false);
                        if (!professionSearch && profession) {
                          setProfessionSearch(profession);
                        }
                      }}
                      onClick={() => {
                        if (!professionOpen) {
                          setProfessionOpen(true);
                          setGoalOpen(false);
                        }
                      }}
                      className={`w-full bg-[#FAF8F5] border ${
                        professionOpen ? "border-[#C5A880] ring-1 ring-[#C5A880]" : "border-[#D5CDBC]"
                      } hover:border-[#C5A880] rounded-lg pl-3 pr-14 py-2 text-stone-900 focus:outline-none font-medium text-xs transition-colors cursor-text shadow-xs placeholder:text-stone-400`}
                    />
                    <div className="absolute right-2.5 flex items-center gap-1">
                      {(profession || professionSearch) && (
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            setProfession("");
                            setProfessionSearch("");
                          }}
                          className="p-0.5 text-stone-400 hover:text-stone-700 cursor-pointer"
                          aria-label="Clear profession"
                        >
                          <X className="w-3.5 h-3.5" />
                        </button>
                      )}
                      <button
                        type="button"
                        onClick={() => {
                          setProfessionOpen((prev) => {
                            const next = !prev;
                            if (next && !professionSearch && profession) {
                              setProfessionSearch(profession);
                            }
                            return next;
                          });
                          setGoalOpen(false);
                        }}
                        className="p-0.5 text-stone-500 hover:text-stone-700 cursor-pointer"
                        tabIndex={-1}
                        aria-label="Toggle profession dropdown"
                      >
                        <ChevronDown
                          className={`w-4 h-4 transition-transform duration-200 ${
                            professionOpen ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                    </div>
                  </div>

                  {professionOpen && (
                    <div className="absolute top-full left-0 right-0 mt-1.5 bg-white border border-[#D5CDBC] rounded-xl shadow-2xl z-30 max-h-56 overflow-y-auto py-1 divide-y divide-stone-100 animate-in fade-in zoom-in-95 duration-150">
                      {filteredProfessionCategories.length > 0 ? (
                        filteredProfessionCategories.map((group) => (
                          <div key={group.category} className="py-1">
                            <div className="px-3 py-1 text-[9.5px] font-bold uppercase tracking-wider text-[#8C6D3B] bg-[#FAF7F0] select-none">
                              {group.category}
                            </div>
                            {group.options.map((opt) => {
                              const isSelected = profession === opt;
                              return (
                                <button
                                  key={opt}
                                  type="button"
                                  onClick={() => {
                                    setProfession(opt);
                                    setProfessionSearch(opt);
                                    setProfessionOpen(false);
                                  }}
                                  className={`w-full text-left px-3 py-1.5 text-xs flex items-center justify-between transition-colors cursor-pointer ${
                                    isSelected
                                      ? "bg-[#DFCAAB]/25 text-[#122E46] font-semibold"
                                      : "text-stone-700 hover:bg-[#FAF8F5] hover:text-[#122E46]"
                                  }`}
                                >
                                  <span className="truncate pr-2">{opt}</span>
                                  {isSelected && <Check className="w-3.5 h-3.5 text-[#8C6D3B] shrink-0" />}
                                </button>
                              );
                            })}
                          </div>
                        ))
                      ) : (
                        <div className="p-4 text-center text-xs text-stone-500">
                          No professions match &ldquo;{professionSearch}&rdquo;
                        </div>
                      )}
                    </div>
                  )}
                </div>

                {/* Primary Goal Custom Contained Dropdown */}
                <div className="relative" ref={goalRef}>
                  <label className="block text-[10px] font-bold uppercase tracking-wider text-stone-500 mb-1">
                    PRIMARY GOAL
                  </label>
                  <input type="hidden" id="jwf-goal" name="goal" value={goal} />

                  <button
                    type="button"
                    onClick={() => {
                      setGoalOpen((prev) => !prev);
                      setProfessionOpen(false);
                    }}
                    className={`w-full bg-[#FAF8F5] border ${
                      goalOpen ? "border-[#C5A880] ring-1 ring-[#C5A880]" : "border-[#D5CDBC]"
                    } hover:border-[#C5A880] rounded-lg px-3 py-2 text-stone-900 focus:outline-none font-medium flex items-center justify-between text-left text-xs transition-colors cursor-pointer shadow-xs`}
                    aria-haspopup="listbox"
                    aria-expanded={goalOpen}
                  >
                    <span className={goal ? "text-stone-900 font-medium truncate" : "text-stone-400"}>
                      {GOAL_OPTIONS.find((g) => g.value === goal)?.label || "Select primary goal"}
                    </span>
                    <ChevronDown
                      className={`w-4 h-4 text-stone-500 shrink-0 ml-2 transition-transform duration-200 ${
                        goalOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {goalOpen && (
                    <div className="absolute top-full left-0 right-0 mt-1.5 bg-white border border-[#D5CDBC] rounded-xl shadow-2xl z-30 max-h-56 overflow-y-auto py-1 divide-y divide-stone-100 animate-in fade-in zoom-in-95 duration-150">
                      {GOAL_OPTIONS.map((opt) => {
                        const isSelected = goal === opt.value;
                        return (
                          <button
                            key={opt.value}
                            type="button"
                            onClick={() => {
                              setGoal(opt.value);
                              setGoalOpen(false);
                            }}
                            className={`w-full text-left px-3 py-2 text-xs flex items-center justify-between transition-colors cursor-pointer ${
                              isSelected
                                ? "bg-[#DFCAAB]/25 text-[#122E46] font-semibold"
                                : "text-stone-700 hover:bg-[#FAF8F5] hover:text-[#122E46]"
                            }`}
                          >
                            <span>{opt.label}</span>
                            {isSelected && <Check className="w-3.5 h-3.5 text-[#8C6D3B] shrink-0" />}
                          </button>
                        );
                      })}
                    </div>
                  )}
                </div>

                {error && (
                  <div className="p-3 bg-red-50 border border-red-200 text-red-700 rounded-lg text-xs font-medium">
                    {error}
                  </div>
                )}

                {/* Buttons */}
                <div className="pt-2 space-y-2.5">
                  <button
                    id="jwf-generate"
                    type="button"
                    onClick={calculateReport}
                    className="w-full py-3.5 px-6 rounded-lg bg-gradient-to-r from-[#DFCAAB] via-[#D5BA93] to-[#C5A880] text-[#1A1815] font-sans font-bold uppercase tracking-[0.14em] text-xs hover:brightness-105 active:scale-[0.99] transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>Reveal My Crystal Report</span>
                  </button>

                  <button
                    id="jwf-reset"
                    type="button"
                    onClick={handleReset}
                    className="w-full py-2.5 px-4 rounded-lg bg-[#122E46] text-[#FFF6E7] font-sans font-medium uppercase tracking-[0.12em] text-xs hover:bg-[#0e2436] transition-colors cursor-pointer flex items-center justify-center gap-2"
                  >
                    <span>Reset</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Disclaimer text below left card */}
            <p className="text-[10.5px] text-stone-500 text-center font-light leading-relaxed px-2">
              This calculator is a symbolic guidance tool for crystal selection and self-reflection. It does not claim medical, financial, or guaranteed outcomes.
            </p>
          </div>

          {/* Right Guidance 4-Step Cards */}
          <div className="lg:col-span-7 space-y-5">
            <h2 className="text-xl sm:text-2xl font-serif text-[#122E46] font-normal tracking-wide">
              Purposeful guidance, not random crystal stacking
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-white border border-[#E2DEC9] shadow-sm hover:border-[#C5A880]/60 p-5 sm:p-6 rounded-xl space-y-2 transition-all">
                <span className="text-[10px] font-sans font-bold uppercase tracking-widest text-[#8C6D3B]">
                  STEP 1
                </span>
                <h3 className="text-lg font-serif font-medium text-[#122E46]">Birth Pattern</h3>
                <p className="text-xs text-stone-600 font-light leading-relaxed">
                  Your date of birth reveals which personal power areas feel strong, light, missing, or overactive.
                </p>
              </div>

              <div className="bg-white border border-[#E2DEC9] shadow-sm hover:border-[#C5A880]/60 p-5 sm:p-6 rounded-xl space-y-2 transition-all">
                <span className="text-[10px] font-sans font-bold uppercase tracking-widest text-[#8C6D3B]">
                  STEP 2
                </span>
                <h3 className="text-lg font-serif font-medium text-[#122E46]">Current Goal</h3>
                <p className="text-xs text-stone-600 font-light leading-relaxed">
                  Your selected intention refines how the result is explained, without disturbing the core balance logic.
                </p>
              </div>

              <div className="bg-white border border-[#E2DEC9] shadow-sm hover:border-[#C5A880]/60 p-5 sm:p-6 rounded-xl space-y-2 transition-all">
                <span className="text-[10px] font-sans font-bold uppercase tracking-widest text-[#8C6D3B]">
                  STEP 3
                </span>
                <h3 className="text-lg font-serif font-medium text-[#122E46]">Crystal Pairing</h3>
                <p className="text-xs text-stone-600 font-light leading-relaxed">
                  One crystal becomes the main support, while the second is added only when it improves the pairing.
                </p>
              </div>

              <div className="bg-white border border-[#E2DEC9] shadow-sm hover:border-[#C5A880]/60 p-5 sm:p-6 rounded-xl space-y-2 transition-all">
                <span className="text-[10px] font-sans font-bold uppercase tracking-widest text-[#8C6D3B]">
                  STEP 4
                </span>
                <h3 className="text-lg font-serif font-medium text-[#122E46]">Wear + Place</h3>
                <p className="text-xs text-stone-600 font-light leading-relaxed">
                  You receive jewellery guidance along with raw crystal placement for desk, room, or direction-based use.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Full-width Structured Guidance Pill (Below both columns) */}
        <div className="p-3.5 sm:p-4 rounded-xl bg-white border border-[#E2DEC9] shadow-sm flex items-center gap-3">
          <ShieldCheck className="w-5 h-5 text-[#8C6D3B] shrink-0" />
          <p className="text-xs sm:text-[13px] text-stone-700 font-light">
            <strong className="text-[#8C6D3B] font-medium">Structured guidance:</strong> Your recommendation is generated through a birth-date and symbolic balance method designed to make crystal selection feel more personal and meaningful.
          </p>
        </div>

        {/* RESULTS SECTION (Rendered upon calculation) */}
        {results && (
          <div id="crystal-results-view" className="space-y-8 pt-8 border-t border-[#E2DEC9] animate-in fade-in duration-500">
            {/* Core Summary Banner */}
            <div className="bg-white text-[#1A1815] p-6 sm:p-8 rounded-2xl border border-[#E2DEC9] shadow-xl space-y-6">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-stone-200 pb-4">
                <div>
                  <span className="text-[11px] font-sans font-bold uppercase tracking-[0.16em] text-[#8C6D3B]">
                    YOUR CRYSTAL GUIDANCE REPORT
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-serif font-medium text-[#122E46]">
                    Core Energetic Alignment
                  </h2>
                </div>

                <a
                  href={`https://wa.me/919220900591?text=${encodeURIComponent(
                    `Hello Svastimān, I completed my Crystal Numerology Report!\n\n` +
                      `• Life Path: ${results.lifePath}\n` +
                      `• Kua: ${results.kua}\n` +
                      `• Primary Element: ${results.primaryElement}\n` +
                      `• Recommended Crystal: ${results.primaryCrystal.name}\n\n` +
                      `Please guide me with the authentic energized bracelet!`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 rounded-full bg-[#25D366] text-white font-medium text-xs tracking-wider uppercase flex items-center gap-2 hover:bg-[#20ba59] transition-colors shadow-sm"
                >
                  <Share2 className="w-4 h-4" />
                  <span>Send Report on WhatsApp</span>
                </a>
              </div>

              <p className="text-sm sm:text-base text-stone-700 font-light leading-relaxed">
                {results.summary}
              </p>

              {/* 4 Mini Summary Metrics */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                <div className="bg-[#FAF7F0] p-4 rounded-xl border border-[#E2DEC9] text-center">
                  <span className="block text-[10px] font-bold uppercase tracking-wider text-stone-500">
                    LIFE PATH NUMBER
                  </span>
                  <strong className="text-2xl font-serif text-[#122E46] mt-0.5 block">
                    {results.lifePath}
                  </strong>
                </div>

                <div className="bg-[#FAF7F0] p-4 rounded-xl border border-[#E2DEC9] text-center">
                  <span className="block text-[10px] font-bold uppercase tracking-wider text-stone-500">
                    KUA NUMBER
                  </span>
                  <strong className="text-2xl font-serif text-[#122E46] mt-0.5 block">
                    {results.kua}
                  </strong>
                </div>

                <div className="bg-[#FAF7F0] p-4 rounded-xl border border-[#E2DEC9] text-center">
                  <span className="block text-[10px] font-bold uppercase tracking-wider text-stone-500">
                    PRIMARY ELEMENT
                  </span>
                  <strong className="text-xl font-serif text-[#8C6D3B] mt-0.5 block">
                    {results.primaryElement}
                  </strong>
                </div>

                <div className="bg-[#FAF7F0] p-4 rounded-xl border border-[#E2DEC9] text-center">
                  <span className="block text-[10px] font-bold uppercase tracking-wider text-stone-500">
                    BEST DIRECTION
                  </span>
                  <strong className="text-sm font-semibold text-[#122E46] mt-1.5 block">
                    {results.bestDirection}
                  </strong>
                </div>
              </div>
            </div>

            {/* Lo Shu Grid + Elemental Balance */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              {/* Lo Shu Grid */}
              <div className="lg:col-span-5 bg-white border border-[#E2DEC9] shadow-md p-6 rounded-2xl space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-[10px] uppercase font-bold tracking-widest text-[#8C6D3B]">
                      ANCIENT LO SHU MATRIX
                    </span>
                    <h3 className="text-xl font-serif text-[#122E46]">Your Number Pattern</h3>
                  </div>
                  <Compass className="w-5 h-5 text-[#8C6D3B]" />
                </div>

                {/* 3x3 Grid */}
                <div className="grid grid-cols-3 gap-2.5 max-w-[280px] mx-auto py-2">
                  {[4, 9, 2, 3, 5, 7, 8, 1, 6].map((num) => {
                    const count = Math.floor(results.loShuCounts[num] || 0);
                    const isPresent = count > 0;
                    return (
                      <div
                        key={num}
                        className={`h-20 rounded-xl flex flex-col items-center justify-center border transition-all ${
                          isPresent
                            ? "bg-[#DFCAAB]/25 border-[#C5A880] text-[#122E46] font-bold shadow-inner"
                            : "bg-[#FAF8F5] border-[#E2DEC9] text-stone-400"
                        }`}
                      >
                        <span className="text-2xl font-serif font-bold">{num}</span>
                        <span className="text-[10px] tracking-wide font-medium mt-0.5">
                          {isPresent ? `${count}x Active` : "Missing"}
                        </span>
                      </div>
                    );
                  })}
                </div>

                <div className="pt-2">
                  <span className="text-xs text-stone-600 block mb-1.5 font-medium">
                    Missing Vibrations in Chart:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {results.missingNumbers.length > 0 ? (
                      results.missingNumbers.map((num) => (
                        <span
                          key={num}
                          className="px-2.5 py-0.5 rounded-full bg-[#FAF8F5] border border-[#E2DEC9] text-xs text-[#8C6D3B] font-medium"
                        >
                          Number {num}
                        </span>
                      ))
                    ) : (
                      <span className="text-xs text-emerald-600">
                        All numbers are present in your chart!
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Elemental Balance Bars */}
              <div className="lg:col-span-7 bg-white border border-[#E2DEC9] shadow-md p-6 rounded-2xl space-y-4">
                <div>
                  <span className="text-[10px] uppercase font-bold tracking-widest text-[#8C6D3B]">
                    FIVE SACRED ELEMENTS
                  </span>
                  <h3 className="text-xl font-serif text-[#122E46]">Your Elemental Energy Breakdown</h3>
                </div>

                <div className="space-y-4 pt-2">
                  {Object.entries(results.elementScores).map(([elementName, val]) => {
                    const percentage = Math.min(100, Math.max(8, val.count * 30));
                    return (
                      <div key={elementName} className="space-y-1.5">
                        <div className="flex justify-between text-xs">
                          <span className="font-medium text-[#122E46] flex items-center gap-1.5">
                            <span>{elementName}</span>
                          </span>
                          <span
                            className={`px-2 py-0.5 rounded-sm text-[10px] font-bold uppercase tracking-wider ${
                              val.status === "Missing"
                                ? "bg-red-50 text-red-700 border border-red-200"
                                : val.status === "Light"
                                ? "bg-amber-50 text-amber-700 border border-amber-200"
                                : "bg-emerald-50 text-emerald-700 border border-emerald-200"
                            }`}
                          >
                            {val.status} ({val.count.toFixed(1)})
                          </span>
                        </div>
                        <div className="w-full bg-stone-100 rounded-full h-2.5 overflow-hidden border border-stone-200">
                          <div
                            className="h-full bg-gradient-to-r from-[#DFCAAB] to-[#C5A880] rounded-full transition-all duration-700"
                            style={{ width: `${percentage}%` }}
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Recommended Crystal Jewelry & Botanicals */}
            <div className="bg-white border border-[#E2DEC9] shadow-md p-6 sm:p-8 rounded-2xl space-y-6">
              <div>
                <span className="text-[11px] font-sans font-bold uppercase tracking-[0.16em] text-[#8C6D3B]">
                  YOUR SACRED RECOMMENDATION
                </span>
                <h2 className="text-2xl sm:text-3xl font-serif text-[#122E46] font-medium mt-1">
                  Primary Power Crystal and Botanical Companion
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Primary Stone */}
                <div className="bg-[#FAF8F5] text-[#1A1815] p-5 sm:p-6 rounded-xl border border-[#E2DEC9] space-y-3">
                  <span className="inline-block px-2.5 py-0.5 rounded-full bg-[#8C6D3B]/10 text-[#8C6D3B] text-[10px] font-bold uppercase tracking-wider">
                    PRIMARY FOUNDATIONAL GEMSTONE
                  </span>
                  <h3 className="text-xl font-serif font-bold text-[#122E46]">
                    {results.primaryCrystal.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-stone-600 font-light leading-relaxed">
                    {results.primaryCrystal.description}
                  </p>
                  <div className="pt-2">
                    <Link
                      href="/products"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#8C6D3B] hover:text-[#122E46] transition-colors"
                    >
                      <span>Explore {results.primaryCrystal.name} Pieces</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>

                {/* Secondary Pairing */}
                <div className="bg-[#FAF8F5] text-[#1A1815] p-5 sm:p-6 rounded-xl border border-[#E2DEC9] space-y-3">
                  <span className="inline-block px-2.5 py-0.5 rounded-full bg-[#122E46]/10 text-[#122E46] text-[10px] font-bold uppercase tracking-wider">
                    COMPLEMENTARY PAIRING
                  </span>
                  <h3 className="text-xl font-serif font-bold text-[#122E46]">
                    {results.secondaryCrystal.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-stone-600 font-light leading-relaxed">
                    {results.secondaryCrystal.description}
                  </p>
                  <div className="pt-2">
                    <Link
                      href="/products"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#122E46] hover:text-[#8C6D3B] transition-colors"
                    >
                      <span>Explore Pairing Collections</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </div>

              {/* Ritual & Placement Box */}
              <div className="bg-[#FAF8F5] border border-[#E2DEC9] p-5 rounded-xl space-y-3 text-xs sm:text-sm">
                <h4 className="font-serif text-[#122E46] text-base font-medium">
                  Wearing and Spatial Placement Guidance
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-light text-stone-700">
                  <div>
                    <strong className="text-[#8C6D3B] font-medium block mb-1">
                      Wrist Recommendation:
                    </strong>
                    {results.wearGuidance.wrist}
                  </div>
                  <div>
                    <strong className="text-[#8C6D3B] font-medium block mb-1">
                      Best Day and Sacred Mantra:
                    </strong>
                    Day: {results.wearGuidance.day} &bull; Mantra: &ldquo;{results.wearGuidance.mantra}&rdquo;
                  </div>
                  <div className="sm:col-span-2">
                    <strong className="text-[#8C6D3B] font-medium block mb-1">
                      Desk / Room Direction:
                    </strong>
                    {results.wearGuidance.placement}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Accordion FAQ Section */}
        <div className="space-y-4 pt-6">
          <div className="text-center space-y-1">
            <span className="text-[10px] font-sans font-bold uppercase tracking-[0.16em] text-[#8C6D3B]">
              CALCULATOR FAQ
            </span>
            <h2 className="text-2xl font-serif text-[#122E46]">
              Understand Your Recommendation
            </h2>
            <p className="text-xs text-stone-600 font-light">
              A simple guide to help you understand how your crystal result is suggested and how to use it meaningfully.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-3 pt-4">
            {FAQS.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div
                  key={index}
                  className="bg-white border border-[#E2DEC9] shadow-sm rounded-xl overflow-hidden transition-colors"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="w-full p-4 sm:p-5 flex items-center justify-between text-left text-xs sm:text-sm font-medium text-[#122E46] hover:text-[#8C6D3B] transition-colors cursor-pointer gap-4"
                  >
                    <span>{faq.q}</span>
                    <span className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-[#122E46] text-[#FFF6E7] flex items-center justify-center font-bold text-sm shrink-0 shadow-sm transition-transform duration-200">
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>
                  {isOpen && (
                    <div className="px-4 pb-4 text-xs font-light text-stone-600 leading-relaxed border-t border-stone-100 pt-2">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
