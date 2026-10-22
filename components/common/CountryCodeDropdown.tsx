"use client";

import React, { useState, useRef, useEffect } from "react";

export const COUNTRY_CODES = [
  { code: "+ 91", label: "India (+91)" },
  { code: "+ 93", label: "Afghanistan (+93)" },
  { code: "+ 340", label: "US Virgin Islands (+340)" },
  { code: "+ 355", label: "Albania (+355)" },
  { code: "+ 213", label: "Algeria (+213)" },
  { code: "+ 1-684", label: "American Samoa (+1-684)" },
  { code: "+ 376", label: "Andorra (+376)" },
  { code: "+ 1", label: "USA / Canada (+1)" },
  { code: "+ 44", label: "United Kingdom (+44)" },
  { code: "+ 971", label: "United Arab Emirates (+971)" },
  { code: "+ 61", label: "Australia (+61)" },
  { code: "+ 65", label: "Singapore (+65)" },
  { code: "+ 977", label: "Nepal (+977)" },
  { code: "+ 880", label: "Bangladesh (+880)" },
  { code: "+ 94", label: "Sri Lanka (+94)" },
  { code: "+ 81", label: "Japan (+81)" },
  { code: "+ 49", label: "Germany (+49)" },
  { code: "+ 33", label: "France (+33)" },
  { code: "+ 39", label: "Italy (+39)" },
  { code: "+ 86", label: "China (+86)" },
  { code: "+ 966", label: "Saudi Arabia (+966)" },
  { code: "+ 62", label: "Indonesia (+62)" },
  { code: "+ 60", label: "Malaysia (+60)" },
  { code: "+ 27", label: "South Africa (+27)" },
];

interface CountryCodeDropdownProps {
  value: string;
  onChange: (code: string) => void;
}

export function CountryCodeDropdown({ value, onChange }: CountryCodeDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Standardize value formatting with non-breaking space after + (so it NEVER wraps to a second line)
  const rawCode = value ? value.replace("+", "").trim() : "91";
  const displayValue = `+\u00A0${rawCode}`;

  return (
    <div className="relative flex-shrink-0 inline-block text-left whitespace-nowrap" ref={containerRef}>
      {/* Trigger Button - strictly single line with flex-shrink-0 and whitespace-nowrap */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="flex-shrink-0 whitespace-nowrap inline-flex items-center gap-1.5 py-1 text-sm font-sans font-medium text-[#1A1815] bg-transparent outline-none cursor-pointer select-none hover:text-[#122E46] transition-colors"
        aria-haspopup="listbox"
        aria-expanded={isOpen}
      >
        <span className="whitespace-nowrap tracking-tight">{displayValue}</span>
        {/* Caret icon pointing downwards by default, rotating upwards when open */}
        <span
          className="text-[9px] text-stone-500 transition-transform duration-200 inline-block leading-none flex-shrink-0 select-none ml-0.5"
          style={{ transform: isOpen ? "rotate(180deg)" : "rotate(0deg)" }}
        >
          ▼
        </span>
      </button>

      {/* Dropdown Menu matching exact reference screenshot */}
      {isOpen && (
        <div className="absolute left-0 top-full mt-1.5 z-50 w-28 sm:w-32 bg-white border border-[#E2DEC9] rounded-sm shadow-xl max-h-56 overflow-y-auto py-1 animate-in fade-in zoom-in-95 duration-150">
          <ul role="listbox">
            {COUNTRY_CODES.map((item) => {
              const itemFormatted = item.code.replace("+", "").trim();
              const isSelected = itemFormatted === rawCode;
              return (
                <li
                  key={item.code}
                  role="option"
                  aria-selected={isSelected}
                  onClick={() => {
                    onChange(item.code);
                    setIsOpen(false);
                  }}
                  className={`px-3 py-2 text-xs font-sans whitespace-nowrap cursor-pointer transition-colors flex items-center justify-between ${
                    isSelected
                      ? "bg-[#F5F2F8] text-[#122E46] font-semibold"
                      : "text-[#1A1815] hover:bg-[#FAF8F5]"
                  }`}
                >
                  <span className="whitespace-nowrap">+{'\u00A0'}{itemFormatted}</span>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
}
