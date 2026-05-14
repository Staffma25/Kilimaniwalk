import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kilimani Walk | Shop, Dine, Work and Play",
  description:
    "Kilimani Walk is a world-class mixed-use development on Ring Road Kilimani, Nairobi featuring retail, dining, entertainment, offices, and conference facilities.",
  keywords: [
    "retail space for rent Kilimani",
    "office space Nairobi",
    "commercial property Ring Road",
    "mixed use development Nairobi",
    "Kilimani Walk",
  ],
  openGraph: {
    title: "Kilimani Walk",
    description:
      "Shop, Dine, Work and Play at this mixed-use destination in Ring Road Kilimani, Nairobi.",
    type: "website",
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
      className={`${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
