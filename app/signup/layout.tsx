import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign Up | Svastimān — House of Sacred Indian Materials",
  description:
    "Register your Svastimān sanctuary account to access laboratory provenance records, track consecrated orders, and receive traditional harvest monographs.",
};

export default function SignUpLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
