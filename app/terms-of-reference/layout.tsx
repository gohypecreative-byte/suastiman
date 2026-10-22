import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Reverence | Svastimān — House of Sacred Indian Materials",
  description:
    "Read the Svastimān Terms of Reverence. Understand our commitments to sacred provenance, zero fear-based claims, certified authenticity, order fulfillment, and website usage.",
};

export default function TermsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
