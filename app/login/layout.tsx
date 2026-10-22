import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Login | Svastimān — House of Sacred Indian Materials",
  description:
    "Log in to your Svastimān sanctuary account to access laboratory provenance records, track consecrated orders, and review certified objects.",
};

export default function LoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
