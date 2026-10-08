import type { Metadata } from "next";
import { Playfair_Display, Montserrat } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const serifFont = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-serif",
});

const sansFont = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Svastimān | House of Sacred Indian Materials & Traditional Knowledge",
  description:
    "Svastimān is a house of authentic Indian sacred materials, unheated earth gemstones, wild Himalayan Rudraksha, and Vrindavan Tulsi wood. Rooted in source, honored by hand.",
  keywords: [
    "Svastiman",
    "House of Sacred Materials",
    "Nepali Rudraksha",
    "Vrindavan Tulsi Wood",
    "Untreated Gemstones",
    "Before it was a mala it was a fruit",
    "Authentic Indian Heritage",
    "Sacred Malas",
  ],
};

import { CartProvider } from "@/context/CartContext";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn("h-full antialiased bg-[#F9F8F5]", serifFont.variable, sansFont.variable)}>
      <body suppressHydrationWarning className="min-h-full flex flex-col font-sans selection:bg-[#132F47] selection:text-[#ECEADE]">
        <CartProvider>
          {children}
        </CartProvider>
      </body>
    </html>
  );
}
