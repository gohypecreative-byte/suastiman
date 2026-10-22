import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Authenticity Charter | Svastimān — House of Sacred Indian Materials",
  description:
    "Explore the Svastimān Authenticity Charter. Our absolute commitment to wild Himalayan Rudraksha provenance, naturally fallen Vrindavan Tulsi wood, untreated earth gemstones, digital radiography testing, and zero fear-based claims.",
  keywords: [
    "Svastiman Authenticity Charter",
    "Rudraksha authenticity laboratory",
    "Vrindavan Tulsi genuine",
    "Untreated earth gemstones",
    "Zero fear-based claims",
    "Sacred materials provenance",
  ],
};

export default function AuthenticityCharterLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
