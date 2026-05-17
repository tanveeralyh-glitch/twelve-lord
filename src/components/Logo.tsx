"use client";

import Link from "next/link";
import logoHeader from "@/assets/logo_hd.png";
import logoFooter from "@/assets/logo_black.jpg";

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
}: LogoProps) => {
  const logoSrc = variant === "dark" ? logoFooter.src : logoHeader.src;

  return (
    <div className={`relative ${className}`}>
      <Link href="/" className="flex items-center">
        <img
          src={logoSrc}
          alt="Twelve Lords Logo"
          className={`w-auto object-contain ${imgClassName}`}
        />
      </Link>
    </div>
  );
};
