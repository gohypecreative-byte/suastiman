import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shipping Policy | Svastimān — House of Sacred Indian Materials",
  description:
    "Learn about Svastimān's insured shipping methods, ritual order processing, delivery timelines across India, tracking, shipping charges, and damage claim policies.",
  keywords: [
    "Svastiman Shipping Policy",
    "Insured shipping sacred materials",
    "Delivery timelines India",
    "Rudraksha shipping",
    "Free shipping over 1999",
  ],
};

export default function ShippingPolicyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
