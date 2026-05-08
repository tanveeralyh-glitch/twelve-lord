"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, ShieldCheck, Lock, Activity, Cpu } from "lucide-react";

interface ArticleHighlightProps {
  heading: string;
  articleTitle: string;
  description: string;
  imagePath: string;
  link: string;
  showMoreLink?: boolean;
}

/**
 * CybersecurityAnimation Component
 * A high-tech digital network visualization with scanning lines and glowing nodes.
 */
const CybersecurityAnimation = () => {
  return (
    <div className="w-full h-full relative pointer-events-none bg-secondary/20 dark:bg-slate-950 overflow-hidden flex items-center justify-center">
      {/* HUD Image Background */}
      <div className="absolute inset-0 opacity-40 mix-blend-screen">
        <Image 
          src="/images/cyber-hud.png" 
          alt="Cyber HUD" 
          fill 
          loading="lazy"
          className="object-cover"
        />
      </div>

      {/* Dynamic Grid Background */}
      <motion.div 
        animate={{ 
          backgroundPosition: ['0px 0px', '40px 40px'] 
        }}
        transition={{ 
          duration: 12, 
          repeat: Infinity, 
          ease: "linear" 
        }}
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `linear-gradient(to right, hsl(var(--accent)) 1px, transparent 1px), linear-gradient(to bottom, hsl(var(--accent)) 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}
      />

      {/* Pulsing Core Glow */}
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{ duration: 5, repeat: Infinity }}
          className="w-[400px] h-[400px] bg-accent rounded-full blur-[100px]"
        />
      </div>

      {/* Floating UI Elements */}
      <div className="relative z-10">
        {/* Main Shield Icon */}
        <motion.div
          animate={{ 
            y: [0, -10, 0],
            filter: ["drop-shadow(0 0 5px hsl(var(--accent)/0.2))", "drop-shadow(0 0 15px hsl(var(--accent)/0.4))", "drop-shadow(0 0 5px hsl(var(--accent)/0.2))"]
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="text-accent"
        >
          <ShieldCheck className="w-32 h-32 md:w-48 md:h-48 opacity-60" strokeWidth={0.5} />
        </motion.div>

        {/* Rotating Orbital Rings */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] h-[280px] border border-accent/10 rounded-full border-dashed"
        />
      </div>

      {/* Binary Matrix Effect */}
      <div className="absolute inset-0 flex justify-between px-4 opacity-5 pointer-events-none">
        {[...Array(6)].map((_, col) => (
          <div key={col} className="flex flex-col gap-2 py-2">
             {[...Array(15)].map((_, i) => (
              <motion.span
                key={i}
                className="font-mono text-[7px]"
                animate={{ opacity: [0, 1, 0] }}
                transition={{ duration: 2, repeat: Infinity, delay: Math.random() * 3 }}
              >
                {Math.random() > 0.5 ? "1" : "0"}
              </motion.span>
            ))}
          </div>
        ))}
      </div>

      {/* Horizontal Scanning Laser */}
      <motion.div
        animate={{ top: ['-5%', '105%'] }}
        transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
        className="absolute left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-accent/40 to-transparent shadow-[0_0_15px_hsl(var(--accent)/0.4)] z-20"
      />
    </div>
  );
};

export const ArticleHighlight = ({
  heading,
  articleTitle,
  description,
  imagePath,
  link,
  showMoreLink = true
}: ArticleHighlightProps) => {
  return (
    <section className="section-padding bg-background relative overflow-hidden" id="article-highlight">
      <div className="container-tight relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="max-w-2xl"
          >
            <span className="text-primary font-bold tracking-[0.2em] uppercase text-xs mb-4 block">
              Featured Case Study
            </span>
            <h2 className="mb-0 text-black">{heading}</h2>
          </motion.div>
          
          {showMoreLink && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <Link href="/articles" className="btn-outline flex items-center gap-2 text-sm">
                More Articles 
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          )}
        </div>

        {/* Premium Content Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="card-premium overflow-hidden border-none bg-secondary/30 dark:bg-secondary/10 !p-0"
        >
          <div className="flex flex-col lg:flex-row min-h-[500px]">
            {/* LEFT: Content */}
            <div className="w-full lg:w-[60%] p-6 sm:p-10 md:p-12 lg:p-16 flex flex-col justify-center">
              <div className="space-y-6 sm:space-y-8">
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] sm:text-[11px] font-bold uppercase tracking-wider w-fit"
                >
                  <Lock className="w-3.5 h-3.5" />
                  <span>Security Protocol Verified</span>
                </motion.div>

                <h3 className="font-extrabold leading-tight tracking-tight text-black">
                  {articleTitle}
                </h3>

                <p className="text-foreground/70 leading-relaxed max-w-2xl">
                  {description}
                </p>

                <div className="pt-4 sm:pt-8">
                  <Link href={link}>
                    <button className="btn-primary px-10 py-4 flex items-center justify-center gap-3 text-base">
                      Read Article <ArrowRight className="w-5 h-5" />
                    </button>
                  </Link>
                </div>
              </div>
            </div>

            {/* RIGHT: Image/Visual */}
            <div className="w-full lg:w-[40%] min-h-[300px] sm:min-h-[400px] lg:min-h-[500px] relative order-first lg:order-last">
              <div className="absolute inset-0 bg-secondary/50 dark:bg-slate-900/50" />
              <motion.div 
                initial={{ opacity: 0, scale: 1.05 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
                className="absolute inset-0"
              >
                <Image
                  src={imagePath}
                  alt={articleTitle}
                  fill
                  loading="lazy"
                  className="object-cover"
                />
                {/* Clean gradient overlay for depth */}
                <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-background/80 lg:from-secondary/30 dark:from-black/80 lg:dark:from-black/40 to-transparent" />
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
