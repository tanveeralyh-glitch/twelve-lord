"use client";

import { motion } from "framer-motion";
import { books } from "@/lib/data";
import Link from "next/link";
import Image from "next/image";
import { ShoppingCart, Download } from "lucide-react";

export const BookSection = () => {
  const mainBook = books.find(book => book.id === "self-as-witness");

  if (!mainBook) return null;

  return (
    <section className="relative overflow-hidden bg-[#2B4A4A] py-12 lg:py-20" id="books">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none">
        <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-white/20 rounded-full animate-spin-slow opacity-20" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-white/10 rounded-full animate-spin-slow opacity-10" style={{ animationDirection: 'reverse' }} />
      </div>

      <div className="container-tight relative z-10 px-6 sm:px-10 lg:px-16">
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          
          {/* TEXT (Details) - Order 1 on mobile, 2 on desktop */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-white order-1 lg:order-2 max-w-[420px]"
          >
            <h2 className="text-4xl sm:text-5xl lg:text-[56px] font-black font-sans mb-6 leading-[1.1] tracking-tighter uppercase text-white">
              <span className="block">THE SELF</span>
              <span className="block">AS WITNESS</span>
            </h2>
            
            <p className="text-base sm:text-lg text-white/80 leading-relaxed mb-10 lg:mb-0 max-w-xl font-medium">
              {mainBook.description}
            </p>

            {/* DESKTOP BUTTONS */}
            <div className="hidden lg:flex flex-row items-center gap-4 mt-10">
              <Link 
                href={`/books/${mainBook.id}`}
                className="bg-[#FF6B00] hover:bg-[#E65100] text-white px-8 py-4 text-base font-black uppercase tracking-wider rounded-md transition-all shadow-lg hover:shadow-[#FF6B00]/40 hover:-translate-y-1 active:scale-95 flex items-center justify-center gap-3"
              >
                Learn More
              </Link>
              <Link 
                href={`/books/${mainBook.id}`}
                className="border-2 border-white/80 hover:border-white text-white px-8 py-4 text-base font-black uppercase tracking-wider rounded-md transition-all hover:bg-white/10 hover:-translate-y-1 active:scale-95 flex items-center justify-center gap-3"
              >
                The Book Archive
              </Link>
            </div>
          </motion.div>

          {/* IMAGE - Order 2 on mobile, 1 on desktop */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="relative flex justify-center order-2 lg:order-1 w-full"
          >
            <div className="relative group w-full flex justify-center">
              <motion.div 
                className="relative w-full max-w-[260px] sm:max-w-[340px] lg:max-w-[420px] aspect-[3/4.5] rounded-r-sm overflow-hidden transform-gpu"
              >
                <Image
                  src={mainBook.image}
                  alt={mainBook.title}
                  fill
                  priority
                  className="object-cover"
                />
              </motion.div>
            </div>
          </motion.div>

          {/* MOBILE BUTTONS - Order 3 on mobile */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 order-3 lg:hidden w-full"
          >
            <Link 
              href={`/books/${mainBook.id}`}
              className="w-full sm:w-auto bg-[#FF6B00] hover:bg-[#E65100] text-white px-8 py-4 text-base font-black uppercase tracking-wider rounded-md transition-all shadow-lg hover:shadow-[#FF6B00]/40 hover:-translate-y-1 active:scale-95 flex items-center justify-center gap-3"
            >
              Learn More
            </Link>
            <Link 
              href={`/books/${mainBook.id}`}
              className="w-full sm:w-auto border-2 border-white/80 hover:border-white text-white px-8 py-4 text-base font-black uppercase tracking-wider rounded-md transition-all hover:bg-white/10 hover:-translate-y-1 active:scale-95 flex items-center justify-center gap-3"
            >
              The Book Archive
            </Link>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
