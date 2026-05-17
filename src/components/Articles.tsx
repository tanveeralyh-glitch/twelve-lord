"use client";

import { motion } from "framer-motion";
import { articles } from "@/lib/data";
import Link from "next/link";
import { ArrowRight, Calendar, User } from "lucide-react";

export const Articles = () => {
  // Showcase the first 3 articles on the landing page
  const featuredArticles = articles.slice(0, 3);

  return (
    <section id="articles" className="section-padding bg-[#FDFBF7] relative overflow-hidden">
      <div className="container-tight relative z-10">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block text-red-600 text-sm font-bold tracking-[0.2em] uppercase mb-4"
          >
            Latest Insights
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-black mx-auto text-4xl md:text-5xl font-black uppercase tracking-tight"
          >
            Thought, Technology & the Modern World
          </motion.h2>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-2 border-[#1A1A1A] text-center">
          {featuredArticles.map((article, index) => (
            <motion.div
              key={article.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative group p-10 md:p-12 lg:p-16 ${
                index < featuredArticles.length - 1 ? "md:border-r-2 border-[#1A1A1A]" : ""
              }`}
            >
              <Link href={`/articles/${article.slug}`} className="block h-full flex flex-col items-center">
                <div className="flex items-center justify-center gap-4 text-[10px] font-bold text-black uppercase tracking-[0.2em] mb-8">
                  <span>{article.author}</span>
                  <span className="w-1 h-1 rounded-full bg-black/20" />
                  <span>{article.publishDate}</span>
                </div>
                
                <h3 className="text-2xl lg:text-3xl font-bold text-black group-hover:opacity-70 transition-opacity duration-300 leading-tight mb-8 font-sans">
                  {article.title}
                </h3>
                
                <p className="text-black leading-relaxed text-base font-playfair line-clamp-4 mb-10">
                  {article.preview}
                </p>
                
                <div className="mt-auto pt-6 flex items-center justify-center gap-3 text-[11px] font-black uppercase tracking-[0.2em] text-[#1A1A1A] group-hover:gap-5 transition-all">
                  Read More <ArrowRight className="w-4 h-4" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Read All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-20 flex justify-center"
        >
          <Link href="/articles">
            <button className="bg-[#1A1A1A] text-white hover:bg-black px-12 py-5 flex items-center justify-center gap-4 text-sm font-black uppercase tracking-widest transition-all">
              See All Articles <ArrowRight className="w-5 h-5" />
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};
