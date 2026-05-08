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
            className="text-black mx-auto"
          >
            Thought, Technology & the Modern World
          </motion.h2>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-y-4 border-black/10 text-center">
          {featuredArticles.map((article, index) => (
            <motion.div
              key={article.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative group p-8 md:p-10 lg:p-12 ${
                index < featuredArticles.length - 1 ? "md:border-r-4 border-black/10" : ""
              }`}
            >
              <Link href={`/articles/${article.slug}`} className="block h-full flex flex-col items-center">
                <div className="flex items-center justify-center gap-4 text-[10px] font-bold text-black/50 uppercase tracking-widest mb-6">
                  <span className="flex items-center gap-1.5"><User className="w-3 h-3 text-red-600" /> {article.author}</span>
                  <span className="flex items-center gap-1.5"><Calendar className="w-3 h-3 text-red-600" /> {article.publishDate}</span>
                </div>
                
                <h3 className="text-xl lg:text-2xl font-bold text-black group-hover:text-red-600 transition-colors duration-300 leading-tight mb-6">
                  {article.title}
                </h3>
                
                <p className="text-black/70 leading-relaxed text-sm lg:text-base line-clamp-4 mb-8">
                  {article.preview}
                </p>
                
                <div className="mt-auto pt-4 flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-widest text-black/40 group-hover:text-red-600 group-hover:gap-4 transition-all">
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
          className="mt-16 flex justify-center"
        >
          <Link href="/articles">
            <button className="bg-red-600 text-white hover:bg-red-700 px-10 py-4 flex items-center justify-center gap-3 text-base font-bold rounded-full transition-all">
              Read Articles <ArrowRight className="w-5 h-5" />
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};
