"use client";

import Link from "next/link";
import logo from "@/assets/logo_hd.png";


interface LogoProps {
  variant?: "light" | "dark";
  className?: string;
  imgClassName?: string;
  showBg?: boolean;
}

export const Logo = ({
  variant = "light",
  className = "",
  imgClassName = "h-24 md:h-32",
  showBg = true
}: LogoProps) => (
  <div className={`relative ${className}`}>
    <Link href="/" className="flex items-center">
      <img
        src={logo.src}
        alt="Twelve Lords Logo"
        className={`w-auto object-contain ${imgClassName}`}
      />
    </Link>
  </div>
);
