import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/Providers";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FloatingCart } from "@/components/FloatingCart";
import { CartDrawer } from "@/components/CartDrawer";
import { FavoritesDrawer } from "@/components/FavoritesDrawer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Twelve Lords | Modern Publishing & Knowledge Sharing",
  description: "Redefining modern publishing through knowledge sharing and deep tech insights.",
  icons: {
    icon: [
      { url: "/favicon.png", type: "image/png" },
      { url: "/favicon.ico", type: "image/x-icon" },
    ],
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${poppins.variable} antialiased overflow-x-hidden`}>
        {/* SVG Defs for Gradients */}
        <svg width="0" height="0" className="absolute">
          <defs>
            <linearGradient id="ig-grad" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop stopColor="#405de6" offset="0%" />
              <stop stopColor="#5851db" offset="20%" />
              <stop stopColor="#833ab4" offset="40%" />
              <stop stopColor="#c13584" offset="60%" />
              <stop stopColor="#e1306c" offset="80%" />
              <stop stopColor="#fd1d1d" offset="100%" />
            </linearGradient>
          </defs>
        </svg>
        <Providers>
          <Navbar />
          {children}
          <CartDrawer />
          <FavoritesDrawer />
          <FloatingCart />
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
