"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { LucideIcon, Cpu, Zap, Code2, Box } from "lucide-react";
import type { TechItem } from "@/lib/data";

const iconMap: Record<string, LucideIcon> = {
  cpu: Cpu,
  zap: Zap,
  "code-2": Code2,
  box: Box,
};

interface TechCardProps {
  item: TechItem;
  index?: number;
}

export const TechCard = ({ item, index = 0 }: TechCardProps) => {
  const Icon = item.icon ? iconMap[item.icon] : Code2;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="p-8 rounded-[2rem] bg-card border border-border transition-all duration-500"
    >
      <Link href="/tech" className="block">
        <div className="h-16 w-16 rounded-2xl bg-gradient-accent flex items-center justify-center shadow-accent-glow transition-transform duration-500">
          <Icon className="h-8 w-8 text-accent-foreground" />
        </div>
        
        <h3 className="mt-8 font-display font-bold text-2xl transition-colors duration-300 text-foreground">
          {item.title.split(' ').slice(0, -1).join(' ')} <span className="text-gradient-accent">{item.title.split(' ').pop()}</span>
        </h3>
      </Link>
      
      <p className="mt-4 text-muted-foreground leading-relaxed">
        {item.description}
      </p>
      
      <div className="mt-8 pt-8 border-t border-border">
        <Link 
          href="/tech"
          className="text-xs font-bold uppercase tracking-widest text-accent transition-transform inline-flex items-center gap-2"
        >
          Explore documentation &rarr;
        </Link>
      </div>
    </motion.div>
  );
};
