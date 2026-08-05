import type { Metadata } from "next";
import { Bricolage_Grotesque, Outfit } from "next/font/google";
import "./globals.css";
import SmoothScrollProvider from "@/components/providers/SmoothScrollProvider";

/* Loaded here rather than via `@import` in globals.css: Turbopack strips external
   `@import url(...)` from CSS, so the @font-face rules never reached the browser and
   every heading silently fell back to system sans-serif. next/font self-hosts them. */
const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-bricolage",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Fayalwan Gym - Turn Physical Limits Into Strength That Endures",
  description:
    "Fayalwan Gym is a premier fitness sanctuary in Kazhakoottam, Trivandrum. Elite strength training, athletic conditioning, and personalized coaching for ₹120/day.",
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${bricolage.variable} ${outfit.variable}`}
      suppressHydrationWarning
    >
      <body suppressHydrationWarning>
        <SmoothScrollProvider>{children}</SmoothScrollProvider>
      </body>
    </html>
  );
}
