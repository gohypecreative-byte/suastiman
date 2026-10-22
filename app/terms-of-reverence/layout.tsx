import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Reverence | Svastimān — House of Sacred Indian Materials",
  description:
    "Read the Svastimān Terms of Reverence. Understand our commitments to sacred provenance, zero fear-based claims, certified authenticity, order fulfillment, and website usage.",
  keywords: [
    "Svastiman Terms of Reverence",
    "Terms of Service Svastiman Heritage",
    "Sacred materials authenticity charter",
  ],
};

export default function TermsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
