"use client";

import Link from "next/link";
import logo from "@/assets/logo.jpeg";


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
    {!showBg && (
      <svg width="0" height="0" className="absolute">
        <filter id="remove-black" colorInterpolationFilters="sRGB">
          <feColorMatrix
            type="matrix"
            values="1 0 0 0 0
                    0 1 0 0 0
                    0 0 1 0 0
                    10 10 10 0 -0.1"
          />
        </filter>
      </svg>
    )}
    <Link href="/" className="flex items-center">
      <img
        src={logo.src}
        alt="Twelve Lords Logo"
        className={`w-auto object-contain ${imgClassName}`}
        style={!showBg ? { filter: "url(#remove-black)" } : {}}
      />
    </Link>
  </div>
);
