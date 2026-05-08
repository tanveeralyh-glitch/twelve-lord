"use client";

import { motion } from "framer-motion";
import { BookOpen, PenTool, Terminal } from "lucide-react";

interface PageHeroProps {
  title: string;
  subtitle?: string;
  type: "books" | "articles" | "tech";
}

const ReadingAnimation = () => (
  <div className="relative w-32 h-32 md:w-48 md:h-48 flex items-center justify-center">
    <motion.div
      animate={{ 
        rotateY: [0, -10, 0],
        scale: [1, 1.05, 1],
      }}
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      className="relative z-10"
    >
      <BookOpen className="h-24 w-24 md:h-32 md:w-32 text-accent" strokeWidth={1} />
    </motion.div>
    <motion.div 
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: [1, 1.5, 2], opacity: [0, 0.2, 0] }}
      transition={{ duration: 3, repeat: Infinity }}
      className="absolute inset-0 bg-accent rounded-full filter blur-3xl"
    />
  </div>
);

const WritingAnimation = () => (
  <div className="relative w-32 h-32 md:w-48 md:h-48 flex items-center justify-center">
    <motion.div
      animate={{ 
        x: [-10, 10, -10],
        y: [-5, 5, -5],
        rotate: [-5, 5, -5],
      }}
      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      className="relative z-10"
    >
      <PenTool className="h-24 w-24 md:h-32 md:w-32 text-accent" strokeWidth={1} />
    </motion.div>
    <motion.div 
      initial={{ height: 0 }}
      animate={{ height: [0, 20, 0] }}
      transition={{ duration: 1.5, repeat: Infinity }}
      className="absolute bottom-4 left-1/2 w-32 h-1 bg-accent/20 -translate-x-1/2 rounded-full"
    />
  </div>
);

const CodingAnimation = () => (
  <div className="relative w-32 h-32 md:w-48 md:h-48 flex items-center justify-center">
    <motion.div
      animate={{ 
        scale: [1, 1.1, 1],
      }}
      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      className="relative z-10"
    >
      <Terminal className="h-24 w-24 md:h-32 md:w-32 text-accent" strokeWidth={1} />
    </motion.div>
    <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 overflow-hidden px-4 opacity-20">
      <motion.div
        animate={{ x: [-100, 100] }}
        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
        className="whitespace-nowrap font-mono text-xs text-accent"
      >
        {"const app = () => { return <Lumina /> }"}
      </motion.div>
    </div>
  </div>
);

export const PageHero = ({ title, subtitle, type }: PageHeroProps) => {
  return (
    <section className="relative pt-24 pb-20 overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-accent/5 via-transparent to-transparent" />
      <div className="container-tight relative">
        <div className="flex flex-col items-center text-center space-y-8">
          <div className="max-w-3xl space-y-4">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-6xl md:text-8xl font-playfair font-bold tracking-tight text-[#1a1a1a] leading-[1.1]"
            >
              {title}
            </motion.h1>
            {subtitle && (
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-xl text-muted-foreground"
              >
                {subtitle}
              </motion.p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
