import type { Metadata } from "next";
import { Cormorant_Garamond, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const serifFont = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-serif",
});

const sansFont = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Svastimān | Modern Spiritual Guidance & Wearable Energy",
  description:
    "Discover authentic spiritual accessories, zodiac bracelets, healing malas, and astrological guidance handcrafted to align with your inner energy.",
  keywords: [
    "Svastiman",
    "Spiritual Jewellery",
    "Crystal Bracelets",
    "Zodiac Jewellery",
    "Healing Malas",
    "Astrology Guidance",
    "Wear Your Energy",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn("h-full antialiased", serifFont.variable, sansFont.variable)}>
      <body suppressHydrationWarning className="min-h-full flex flex-col font-sans selection:bg-[#132F47] selection:text-[#ECEADE] px-[4px]">
        {children}
      </body>
    </html>
  );
}
