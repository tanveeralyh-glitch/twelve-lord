"use client";

import { motion } from "framer-motion";

interface MidArticleImageProps {
  imagePath: string;
  caption?: string;
}

export const MidArticleImage = ({ imagePath, caption }: MidArticleImageProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="my-16 md:my-24 relative"
    >
      <div className="relative rounded-2xl overflow-hidden group">
        {/* Red glow effect */}
        <div className="absolute -inset-4 bg-red-500/20 blur-3xl group-hover:bg-red-500/30 transition-all duration-500" />
        
        <div className="relative rounded-2xl overflow-hidden border border-red-500/20 group-hover:border-red-500/40 transition-colors duration-300">
          <img
            src={imagePath}
            alt="Article content"
            className="w-full h-auto object-cover"
          />
          
          {/* Pulsing animation overlay */}
          <motion.div
            animate={{ opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="absolute inset-0 bg-red-500/10 pointer-events-none"
          />
          
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent" />
        </div>
      </div>

      {caption && (
        <p className="text-center text-sm text-muted-foreground mt-4">
          {caption}
        </p>
      )}
    </motion.div>
  );
};
