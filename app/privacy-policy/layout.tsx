import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Svastimān — House of Sacred Indian Materials",
  description:
    "Learn how Svastimān collects, uses, and protects your personal information with complete sanctity, transparency, and compliance with Indian data privacy standards.",
  keywords: [
    "Svastiman Privacy Policy",
    "Privacy Policy Svastiman Heritage",
    "Data protection",
    "Customer privacy",
  ],
};

export default function PrivacyPolicyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
