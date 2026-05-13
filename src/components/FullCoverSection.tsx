"use client";

import { motion } from "framer-motion";

export const FullCoverSection = () => {
  return (
    <section className="py-20 bg-background overflow-hidden">
      <div className="container-tight">
        <div className="flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative w-full max-w-4xl rounded-3xl overflow-hidden shadow-2xl border border-border"
          >
            <img 
              src="/images/books/self-as-witness-full.png" 
              alt="The Self As Witness - Full Cover" 
              className="w-full h-auto"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
