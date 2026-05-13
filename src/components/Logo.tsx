"use client";

import Link from "next/link";
import logo from "@/assets/logo.png";
import { motion } from "framer-motion";

interface LogoProps {
  variant?: "light" | "dark";
}

export const Logo = ({ variant = "light" }: LogoProps) => (
  <div className="relative">
    <svg width="0" height="0" className="absolute">
      <filter id="remove-bg" colorInterpolationFilters="sRGB">
        <feColorMatrix 
          type="matrix" 
          values="1 0 0 0 0
                  0 1 0 0 0
                  0 0 1 0 0
                  -1.1 -1.1 -1.1 3.3 0" 
        />
      </filter>
    </svg>
    <Link href="/" className="flex items-center group transition-transform hover:scale-105 active:scale-95 duration-300">
      <motion.img 
        src={logo.src} 
        alt="Twelve Lords Logo" 
        className="h-[74px] md:h-[90px] w-auto object-contain"
        style={{ filter: "url(#remove-bg)" }}
        animate={{
          y: [0, -2, 0]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </Link>
  </div>
);
