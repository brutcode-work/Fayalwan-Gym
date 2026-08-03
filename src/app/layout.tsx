import type { Metadata } from "next";
import "./globals.css";
import SmoothScrollProvider from "@/components/providers/SmoothScrollProvider";

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
    <html lang="en">
      <body>
        <SmoothScrollProvider>{children}</SmoothScrollProvider>
      </body>
    </html>
  );
}
