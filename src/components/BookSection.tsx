"use client";

import { motion } from "framer-motion";
import { BookCard } from "./BookCard";
import { books } from "@/lib/data";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const BookSection = () => {
  const mainBook = books.find(book => book.id === "self-as-witness");

  if (!mainBook) return null;

  return (
    <section className="relative overflow-hidden" id="books">
      {/* Split Background */}
      <div className="absolute inset-0 flex flex-row pointer-events-none">
        <div className="flex-1 bg-black" />
        <div className="flex-1 bg-white" />
      </div>

      <div className="container-tight relative z-10 py-12 md:py-20 lg:py-32">
        <div className="flex flex-row items-center gap-6 sm:gap-20">
          {/* Details Left (Black Side) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex-1 text-center lg:text-left"
          >
            <span className="text-primary font-bold tracking-[0.2em] uppercase text-xs mb-4 block">
              Featured Publication
            </span>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">
              {mainBook.title}
            </h2>
            <p className="text-lg text-white/70 leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0">
              {mainBook.description}
            </p>
            
            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
              <Link 
                href={`/books/${mainBook.id}`}
                className="btn-primary flex items-center justify-center gap-3 px-10 py-4 text-base font-bold rounded-full w-full sm:w-auto"
              >
                Learn More
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </motion.div>

          {/* Image Right */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex-1 w-full max-w-md lg:max-w-none"
          >
            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden group">
              <img
                src={mainBook.image}
                alt={mainBook.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 mix-blend-multiply"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
