"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export const CinematicBackground = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <div className="absolute inset-0 bg-background" />;

  return (
    <div className="absolute inset-0 z-0 overflow-hidden bg-[#F5F2ED] dark:bg-[#080808]">
      {/* Paper Grain / Noise Texture (SVG Filter) */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.15] dark:opacity-[0.2] pointer-events-none mix-blend-overlay">
        <filter id="paperNoise">
          <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="3" stitchTiles="stitch" />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#paperNoise)" />
      </svg>

      {/* Realistic Paper Document Layer */}
      <div className="absolute inset-0 flex items-center justify-center p-6 md:p-20 overflow-hidden">
        <div 
          className="relative w-full max-w-4xl aspect-[1/1.4] bg-[#FFFDF9] dark:bg-[#121212] shadow-[0_80px_150px_-30px_rgba(0,0,0,0.2)] dark:shadow-[0_80px_150px_-30px_rgba(0,0,0,0.6)] rounded-[4px] border border-orange-100/40 dark:border-white/5"
          style={{
            transform: "rotate(-1.5deg) translateY(40px)",
            filter: "blur(6px)",
          }}
        >
          {/* Paper Fold / Lighting Effects */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-black/5 dark:from-white/5 dark:to-black/20 pointer-events-none" />
          <div className="absolute inset-0 bg-[linear-gradient(135deg,transparent_45%,rgba(0,0,0,0.02)_50%,transparent_55%)] dark:bg-[linear-gradient(135deg,transparent_45%,rgba(255,255,255,0.02)_50%,transparent_55%)]" />

          {/* Faux Text Content (Heavily Blurred) */}
          <div className="p-12 md:p-20 space-y-10 opacity-[0.25] dark:opacity-[0.15]">
            {/* Logo/Header area */}
            <div className="flex justify-between items-center mb-16">
              <div className="h-6 w-24 bg-orange-200 dark:bg-orange-800 rounded-sm" />
              <div className="h-4 w-16 bg-orange-100 dark:bg-orange-900 rounded-sm" />
            </div>

            {/* Main Heading */}
            <div className="space-y-4 mb-12">
              <div className="h-10 w-4/5 bg-orange-200/80 dark:bg-orange-800/50 rounded-sm" />
              <div className="h-10 w-3/5 bg-orange-200/80 dark:bg-orange-800/50 rounded-sm" />
            </div>
            
            {/* Content Blocks */}
            <div className="space-y-8">
              {[1, 2, 3, 4].map((p) => (
                <div key={p} className="space-y-3">
                  {[1, 2, 3].map((l) => (
                    <div 
                      key={l} 
                      className="h-2.5 bg-orange-100 dark:bg-orange-900/40 rounded-sm"
                      style={{ width: `${Math.random() * 15 + 85}%` }}
                    />
                  ))}
                  <div className="h-2.5 bg-orange-100 dark:bg-orange-900/40 rounded-sm w-3/4" />
                </div>
              ))}
            </div>

            {/* List items */}
            <div className="space-y-4 pt-8">
              {[1, 2, 3].map((i) => (
                <div key={i} className="flex gap-4 items-center">
                  <div className="h-2 w-2 bg-primary/40 rounded-full shrink-0" />
                  <div className="h-2.5 w-1/2 bg-orange-100 dark:bg-orange-900/40 rounded-sm" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Depth of Field / Cinematic Overlays */}
      <div className="absolute inset-0 backdrop-blur-[60px] md:backdrop-blur-[120px]" />
      <div className="absolute inset-0 bg-background/20 dark:bg-black/40" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/40 to-background" />
      
      {/* Warm Glow highlights */}
      <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-[#f26822]/10 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] bg-[#f26822]/5 blur-[120px] rounded-full pointer-events-none" />
    </div>
  );
};
