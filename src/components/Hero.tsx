"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Sparkles, ChevronDown, ShieldCheck } from "lucide-react";

export const Hero = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-[90vh] flex items-center overflow-hidden pt-36 md:pt-48"
    >
      {/* Clean Background with Subtle Texture */}
      <div className="absolute inset-0 bg-background -z-10" />
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.03] pointer-events-none -z-10" />
      
      {/* Dynamic Orbit Lines */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[60%] aspect-square -z-5 opacity-20 pointer-events-none">
        <svg viewBox="0 0 800 800" className="w-full h-full animate-pulse-slow">
          <circle cx="400" cy="400" r="150" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="4 4" />
          <circle cx="400" cy="400" r="250" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 6" />
          <circle cx="400" cy="400" r="350" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="1 8" />
        </svg>
      </div>

      <div className="relative z-10 w-full px-4 sm:px-12">
        <div className="flex flex-col items-center justify-center text-center">
          {/* Content */}
          <div className="relative z-20 w-full flex flex-col items-center">
            {/* Main Title */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-black leading-[1.1] text-black mb-6 md:mb-10 tracking-tight text-[32px] sm:text-6xl lg:text-[80px] max-w-[90vw]"
            >
              Master Your Digital Frontier With Timeless Truths
            </motion.h1>

            {/* Paragraph */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-black leading-relaxed w-full mb-10 md:mb-12 text-base sm:text-lg font-medium max-w-2xl mx-auto"
            >
              Twelve Lords explores the architecture of the modern world. From hardware-level security to philosophical deep-dives, we provide the clarity needed to navigate a complex future.
            </motion.p>
            
            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 w-full px-4"
            >
              <Link
                href="/tech"
                className="btn-primary flex items-center justify-center gap-3 px-10 py-4 text-base font-bold rounded-full w-full sm:w-auto"
              >
                Learn about Tech
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                href="/articles"
                className="px-10 py-4 text-base border-2 border-foreground rounded-full font-bold hover:bg-foreground hover:text-background transition-all w-full sm:w-auto flex items-center justify-center"
              >
                Read Insights
              </Link>
            </motion.div>

            {/* Subheader with Icon (Moved) */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col items-center justify-center gap-3 mt-10 mb-2"
            >
              <div className="flex items-center gap-3">
                <ShieldCheck className="h-5 w-5 text-black" />
                <span className="text-[10px] sm:text-[12px] font-bold tracking-[0.4em] uppercase text-foreground/60">
                  Data Sovereignty & Wisdom
                </span>
              </div>
              <motion.span 
                animate={{ opacity: scrolled ? 0 : 1, y: scrolled ? 10 : 0 }}
                transition={{ duration: 0.4 }}
                className="text-[10px] sm:text-[11px] font-black tracking-[0.3em] uppercase text-foreground/40 mt-1"
              >
                SCROLL TO DISCOVER
              </motion.span>
            </motion.div>


          </div>
        </div>
      </div>

    </section>
  );
};
