import Link from "next/link";
import Image from "next/image";
import React from "react";

interface LogoProps {
  variant?: "full" | "icon";
  className?: string;
  theme?: "dark" | "light" | "auto";
}

export function Logo({ variant = "full", className = "", theme = "auto" }: LogoProps) {
  const textColor =
    theme === "light"
      ? "text-[#ECEADE]"
      : theme === "dark"
      ? "text-[#132F47]"
      : "text-[#132F47] dark:text-[#ECEADE]";

  return (
    <Link href="/" className={`inline-flex items-center group ${className}`}>
      <span className={`font-serif text-3xl font-medium tracking-wide ${textColor}`}>
        Svastimān
      </span>
    </Link>
  );
}
