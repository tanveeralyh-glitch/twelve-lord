"use client";

import { motion } from "framer-motion";
import { Calendar, User, Clock } from "lucide-react";

interface ArticleHeroProps {
  title: string;
  author: string;
  date: string;
  description: string;
  imagePath: string;
}

export const ArticleHero = ({
  title,
  author,
  date,
  description,
  imagePath,
}: ArticleHeroProps) => {
  return (
    <section className="relative py-12 sm:py-16 md:py-24 px-4 overflow-hidden pt-32 sm:pt-40">
      <div className="container-tight">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-10 md:gap-12 items-center min-h-[500px]">
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-6 text-center lg:text-left"
          >
            <div>
              <h1 className="font-bold leading-tight text-black">
                {title.split(' ').slice(0, -1).join(' ')} 
                <span className=""> {title.split(' ').pop()}</span>
              </h1>
            </div>

            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 sm:gap-6">
              <div className="flex items-center gap-2 text-[12px] sm:text-sm font-medium text-foreground/80">
                <User className="h-4 w-4 text-primary" />
                <span>{author}</span>
              </div>
              <div className="flex items-center gap-2 text-[12px] sm:text-sm font-medium text-foreground/80">
                <Calendar className="h-4 w-4 text-primary" />
                <span>{date}</span>
              </div>
              <div className="flex items-center gap-2 text-[12px] sm:text-sm font-medium text-foreground/80">
                <Clock className="h-4 w-4 text-primary" />
                <span>8 min read</span>
              </div>
            </div>

            <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto lg:mx-0">
              {description}
            </p>
          </motion.div>

          {/* Right: Image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="relative h-[300px] sm:h-[400px] md:h-[500px] group order-first lg:order-last"
          >
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="relative w-full h-full rounded-2xl overflow-hidden shadow-premium"
            >
              <img
                src={imagePath}
                alt={title}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/20 via-transparent to-background/10" />
              {/* Glow overlay */}
              <div className="absolute inset-0 bg-primary/5 mix-blend-overlay" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
