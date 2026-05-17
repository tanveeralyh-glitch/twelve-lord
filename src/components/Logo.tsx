"use client";

import Link from "next/link";
import logoMain from "@/assets/logo_main.jpg";

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
  const isLight = variant === "light";

  return (
    <div className={`relative ${className}`}>
      {isLight && (
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
          src={logoMain.src}
          alt="Twelve Lords Logo"
          className={`w-auto object-contain ${imgClassName}`}
          style={isLight ? { filter: "url(#remove-black)" } : {}}
        />
      </Link>
    </div>
  );
};
