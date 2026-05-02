import type { Metadata } from "next";
import { Inter, Source_Serif_4 } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
  variable: "--font-inter",
});

const serif = Source_Serif_4({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-serif",
});

export const metadata: Metadata = {
  title: "Whenevr — World-class design whenevr you need it.",
  description:
    "A monthly design subscription for startups, creators, and teams who need work done without the wait.",
  metadataBase: new URL("https://whenevr.example"),
  openGraph: {
    title: "Whenevr — World-class design whenevr you need it.",
    description:
      "Monthly design subscription. Unlimited requests, fast turnaround, senior-only.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${serif.variable}`}>
      <body className="font-sans antialiased text-ink bg-bg">{children}</body>
    </html>
  );
}
