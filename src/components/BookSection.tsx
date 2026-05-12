"use client";

import { motion } from "framer-motion";
import { books } from "@/lib/data";
import Link from "next/link";
import { ShoppingCart, Download } from "lucide-react";

export const BookSection = () => {
  const mainBook = books.find(book => book.id === "self-as-witness");

  if (!mainBook) return null;

  return (
    <section className="relative overflow-hidden bg-[#2B4A4A] py-20 lg:py-32" id="books">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none">
        <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-white/20 rounded-full animate-spin-slow opacity-20" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-white/10 rounded-full animate-spin-slow opacity-10" style={{ animationDirection: 'reverse' }} />
      </div>

      <div className="container-tight relative z-10 px-6 sm:px-10 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          
          {/* LEFT: 3D Book Image */}
          <motion.div
            initial={{ opacity: 0, x: -50, rotateY: 30 }}
            whileInView={{ opacity: 1, x: 0, rotateY: -15 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="relative flex justify-center perspective-[1000px]"
          >
            <div className="relative group">
              {/* Shadow behind book */}
              <div className="absolute -bottom-10 -right-10 w-full h-full bg-black/40 blur-3xl rounded-lg -z-10 group-hover:bg-black/50 transition-all duration-500" />
              {/* Subtle glowing aura */}
              <div className="absolute inset-0 bg-[#FF6B00]/20 blur-2xl rounded-lg -z-20 pointer-events-none" />
              <motion.div 
                whileHover={{ rotateY: -5, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="relative w-full max-w-[320px] sm:max-w-[400px] aspect-[3/4.5] shadow-[20px_20px_60px_-15px_rgba(0,0,0,0.7)] rounded-r-sm overflow-hidden transform-gpu"
              >
                <img
                  src={mainBook.image}
                  alt={mainBook.title}
                  className="w-full h-full object-cover"
                />
                {/* Book Spine Edge effect */}
                <div className="absolute inset-y-0 left-0 w-2 bg-gradient-to-r from-black/40 to-transparent" />
                {/* Surface Shine */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/10 pointer-events-none" />
              </motion.div>
            </div>
          </motion.div>

          {/* RIGHT: Content side */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-white"
          >
            <h2 className="text-5xl sm:text-7xl lg:text-8xl font-black font-display mb-8 leading-[1.0] tracking-[0.1em] uppercase text-white">
              <span className="block">THE SELF +</span>
              <span className="block">AS WITNESS</span>
            </h2>
            
            <p className="text-lg sm:text-xl text-white/80 leading-relaxed mb-12 max-w-xl font-medium">
              {mainBook.description}
            </p>
            
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <Link 
                href={`/books/${mainBook.id}`}
                className="w-full sm:w-auto bg-[#FF6B00] hover:bg-[#E65100] text-white px-10 py-5 text-lg font-black uppercase tracking-wider rounded-md transition-all shadow-lg hover:shadow-[#FF6B00]/40 hover:-translate-y-1 active:scale-95 flex items-center justify-center gap-3"
              >
                Learn More
              </Link>
              <Link 
                href={`/books/${mainBook.id}`}
                className="w-full sm:w-auto border-2 border-white/80 hover:border-white text-white px-10 py-5 text-lg font-black uppercase tracking-wider rounded-md transition-all hover:bg-white/10 hover:-translate-y-1 active:scale-95 flex items-center justify-center gap-3"
              >
                The Book Archive
              </Link>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
