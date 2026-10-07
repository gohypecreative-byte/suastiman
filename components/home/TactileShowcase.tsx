"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ZoomIn, ShieldCheck, Fingerprint, Eye } from "lucide-react";

interface TactileMaterial {
  id: string;
  name: string;
  subtitle: string;
  image: string;
  feel: string;
  texture: string;
  touchNotes: string;
  naturalTest: string;
  macroDetails: { label: string; val: string }[];
}

const tactileMaterials: TactileMaterial[] = [
  {
    id: "rudraksha",
    name: "5-Mukhi Nepali Rudraksha",
    subtitle: "Botanical Lignified Endocarp",
    image: "/images/origin/rudraksha_macro_seed.jpg",
    feel: "Raw, furrowed, warm to the palm, naturally grippy",
    texture: "Deep organic grooves carved by seed chamber cell walls",
    touchNotes: "Notice the absence of machine symmetry. Each bead possesses a unique botanical fingerprint with natural porous micro-channels that absorb sandalwood oil over time.",
    naturalTest: "Sinks in water due to natural high density (specific gravity > 1.2); internal radiography reveals 5 distinct seed compartments.",
    macroDetails: [
      { label: "SURFACE FEEL", val: "Unglazed Natural Woodstone" },
      { label: "DENSITY", val: "High Hardness Endocarp" },
      { label: "ORIGIN", val: "Taplejung, East Nepal" },
      { label: "FINISH", val: "Raw Brushed with Mustard Oil" },
    ],
  },
  {
    id: "tulsi",
    name: "Aged Krishna Tulsi Wood",
    subtitle: "Naturally Cured Heartwood",
    image: "/images/origin/tulsi_heritage_plant.jpg",
    feel: "Velvety, lightweight, warm, faintly aromatic",
    texture: "Organic longitudinal fiber grain turned on manual lathes",
    touchNotes: "Unlike synthetic imitation plastic, real Tulsi warms immediately to skin temperature. Rubbing the bead gently releases faint, soothing notes of holy basil herbal oils.",
    naturalTest: "Floats lightly on water surface; exhibits subtle uneven concentric rings characteristic of slow-growth temple garden wood.",
    macroDetails: [
      { label: "SURFACE FEEL", val: "Silky Hand-Buffed Matte" },
      { label: "SCENT", val: "Subtle Natural Eugenol Aroma" },
      { label: "ORIGIN", val: "Vrindavan Groves, UP" },
      { label: "FINISH", val: "Beeswax Hand Burnished" },
    ],
  },
  {
    id: "lapis",
    name: "Raw Earth Lapis & Pyrite",
    subtitle: "Unheated Metamorphic Rock",
    image: "/images/origin/raw_gemstone_craft.jpg",
    feel: "Substantial cold mineral heft, dense, crisp edges",
    texture: "Natural crystalline calcite matrix with golden metallic pyrite flecks",
    touchNotes: "Touch the screen: real untreated Lapis Lazuli does not look like uniform cobalt plastic. It contains microscopic veins of golden iron pyrite and white calcite, proving geological authenticity.",
    naturalTest: "Cold to first skin contact; high thermal conductivity; shows natural microscopic fissures under 10x magnification.",
    macroDetails: [
      { label: "SURFACE FEEL", val: "Vitreous Cool Mineral" },
      { label: "MINERALOGY", val: "Lazurite + Pyrite + Calcite" },
      { label: "LAPIDARY", val: "Jaipur Hand Faceting" },
      { label: "TREATMENT", val: "100% Unheated & Undyed" },
    ],
  },
];

export function TactileShowcase() {
  const [activeMaterialId, setActiveMaterialId] = useState("rudraksha");
  const [isZoomed, setIsZoomed] = useState(false);

  const active = tactileMaterials.find((m) => m.id === activeMaterialId) || tactileMaterials[0];

  return (
    <section id="tactile-showcase" className="py-24 bg-[#0C161D] text-[#ECEADE] relative overflow-hidden border-b border-[#C5A880]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#182C3D] border border-[#C5A880]/30 text-xs tracking-[0.2em] uppercase text-[#C5A880]">
            <Fingerprint className="w-3.5 h-3.5" />
            <span>Tactile Material Showcase</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl font-normal text-white leading-tight">
            Feel the Material <br />
            <span className="italic text-[#DFCAAB] font-light">Through the Screen.</span>
          </h2>

          <p className="text-stone-300 text-sm sm:text-base font-light leading-relaxed">
            Authenticity has weight, texture, and natural imperfection. Our photography captures the deep organic grooves and crystalline inclusions that separate true sacred heritage from artificial copies.
          </p>
        </div>

        {/* Material Switcher Tabs */}
        <div className="flex flex-wrap gap-3 mb-10">
          {tactileMaterials.map((mat) => (
            <button
              key={mat.id}
              onClick={() => {
                setActiveMaterialId(mat.id);
                setIsZoomed(false);
              }}
              className={`px-5 py-3 rounded-xl border text-xs font-semibold tracking-wider uppercase transition-all ${
                activeMaterialId === mat.id
                  ? "bg-[#C5A880] text-[#0C161D] border-[#C5A880] shadow-lg shadow-[#C5A880]/15"
                  : "bg-[#101D27] text-stone-300 border-white/10 hover:border-white/30 hover:text-white"
              }`}
            >
              {mat.name}
            </button>
          ))}
        </div>

        {/* Macro Tactile Stage */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center bg-[#101D27] rounded-3xl p-6 sm:p-10 border border-white/10 shadow-2xl">
          {/* Left: Macro Zoomable Photography */}
          <div className="lg:col-span-7 space-y-4">
            <div 
              className="relative aspect-square w-full rounded-2xl overflow-hidden bg-[#070D12] border border-white/10 cursor-pointer group"
              onClick={() => setIsZoomed(!isZoomed)}
            >
              <Image
                src={active.image}
                alt={active.name}
                fill
                className={`object-cover transition-transform duration-700 ease-out ${
                  isZoomed ? "scale-150" : "scale-100 group-hover:scale-105"
                }`}
                sizes="(max-width: 1024px) 100vw, 55vw"
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />

              {/* Click to Zoom Hint */}
              <div className="absolute top-4 right-4 bg-black/70 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/20 text-[10px] font-mono tracking-widest text-[#DFCAAB] flex items-center gap-1.5 uppercase">
                <ZoomIn className="w-3 h-3" />
                <span>{isZoomed ? "Click to Reset" : "Click for 200% Macro"}</span>
              </div>

              {/* Bottom Surface Tag */}
              <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between text-white">
                <div>
                  <span className="text-[10px] font-mono tracking-widest text-[#C5A880] uppercase block">
                    TACTILE SURFACE PROFILE
                  </span>
                  <h4 className="font-serif text-2xl font-normal">
                    {active.name}
                  </h4>
                </div>
                <div className="bg-[#0C161D]/80 backdrop-blur-md px-3 py-1.5 rounded border border-[#C5A880]/30 text-[10px] font-mono text-[#DFCAAB]">
                  RAW SPECIMEN
                </div>
              </div>
            </div>

            <p className="text-center text-xs text-stone-400 font-light flex items-center justify-center gap-2">
              <Eye className="w-3.5 h-3.5 text-[#C5A880]" />
              Interactive macro view: Click image to inspect natural cellular grooves and inclusions
            </p>
          </div>

          {/* Right: Tactile & Authenticity Analysis */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <span className="text-[11px] font-mono text-[#C5A880] tracking-widest uppercase block mb-1">
                TOUCH &amp; MATERIAL SENSORY NOTES
              </span>
              <h3 className="font-serif text-3xl text-white font-normal leading-tight">
                {active.feel}
              </h3>
              <p className="text-xs text-stone-400 font-light mt-1">
                {active.texture}
              </p>
            </div>

            <p className="text-sm text-stone-300 font-light leading-relaxed">
              {active.touchNotes}
            </p>

            {/* Natural Test Card */}
            <div className="p-4 rounded-xl bg-[#182C3D]/60 border border-[#C5A880]/20 space-y-2">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#DFCAAB]">
                <ShieldCheck className="w-4 h-4 text-[#C5A880]" />
                How to Authenticate by Touch
              </div>
              <p className="text-xs text-stone-300 font-light leading-relaxed">
                {active.naturalTest}
              </p>
            </div>

            {/* Micro Spec Grid */}
            <div className="grid grid-cols-2 gap-3 pt-2">
              {active.macroDetails.map((detail, idx) => (
                <div key={idx} className="p-3 rounded-lg bg-[#0C161D] border border-white/5">
                  <span className="block text-[9px] font-mono tracking-widest text-[#C5A880] uppercase">
                    {detail.label}
                  </span>
                  <span className="text-xs font-medium text-stone-200 mt-0.5 block truncate">
                    {detail.val}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
