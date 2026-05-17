"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export const ArticleHero = () => {
  const [search, setSearch] = useState("");

  return (
    <section className="pt-36 md:pt-48 bg-[#DCE2E2]">
      <div className="container-tight px-6 pb-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto"
        >
          <h1 className="text-[32px] sm:text-5xl md:text-6xl font-display font-black text-black tracking-tight mb-4 md:mb-8 uppercase">
            Articles
          </h1>
          
          <div className="max-w-2xl mx-auto">
            <p className="text-sm sm:text-base text-black font-medium leading-relaxed">
              I’ve written hundreds of articles on everything from psychology and philosophy, to productivity and life purpose. Below is a collection of my best work, categorized by topic.
            </p>
          </div>
        </motion.div>
      </div>

      {/* New Orange Search Bar */}
      <div className="bg-[#FF6B00] py-8 md:py-12">
        <div className="container-tight px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <h2 className="text-xl sm:text-2xl font-black text-white uppercase tracking-tight">
            Looking for something specific?
          </h2>
          
          <div className="relative w-full max-w-md">
            <form onSubmit={(e) => e.preventDefault()} className="relative flex items-center">
              <input
                type="text"
                placeholder="Type to search..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full bg-white rounded-full py-4 px-8 pr-32 text-sm font-medium text-black focus:outline-none shadow-inner"
              />
              <button
                type="submit"
                className="absolute right-1.5 top-1.5 bottom-1.5 bg-[#1A1A1A] text-white px-6 md:px-8 rounded-full text-xs md:text-sm font-bold uppercase tracking-widest hover:bg-black transition-colors"
              >
                SEARCH
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};


