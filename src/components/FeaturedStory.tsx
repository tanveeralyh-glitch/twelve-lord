"use client";

import { Play, ArrowRight } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { articles } from "@/lib/data";

export const FeaturedStory = () => {
  const article = articles[0]; // Use the latest article

  return (
    <section className="py-24 bg-[#F5F5F5] border-y-2 border-black/10 selection:bg-black selection:text-white overflow-hidden">
      <div className="container-tight">
        <div className="max-w-4xl mx-auto md:mx-0">
           <motion.header 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.6 }}
             className="space-y-10"
           >
            <h2 className="text-[42px] md:text-[68px] font-bold text-[#1A1A1A] leading-[1.05] tracking-tightest font-sans">
              {article.title}
            </h2>
            
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.2em] text-black">
                <span>written by</span>
                <span className="text-black font-black">{article.author}</span>
              </div>
              <div className="flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.2em] text-black">
                <span>filed under</span>
                <div className="flex items-center gap-2 text-black font-black uppercase">
                  {article.category} {article.tags && article.tags.length > 0 && (
                    <>
                      <span className="text-black/30 font-normal">|</span>
                      {article.tags.join(" | ")}
                    </>
                  )}
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mt-8">
              <Link href={`/articles/${article.slug}`}>
                <button className="flex items-center gap-4 px-8 py-4 border-2 border-[#1A1A1A] rounded-full font-black uppercase tracking-widest text-[11px] hover:bg-[#1A1A1A] hover:text-white transition-all group">
                  <div className="w-6 h-6 rounded-full bg-[#1A1A1A] flex items-center justify-center text-white group-hover:bg-white group-hover:text-black transition-colors">
                    <Play className="w-3 h-3 fill-current ml-0.5" />
                  </div>
                  Listen to this article
                </button>
              </Link>

              <Link 
                href={`/articles/${article.slug}`}
                className="flex items-center gap-3 group text-[11px] font-black uppercase tracking-[0.2em] text-[#1A1A1A] hover:opacity-70 transition-opacity"
              >
                Read the story
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            <div className="w-full h-[1px] bg-gray-300 mt-16" />
          </motion.header>
        </div>
      </div>
    </section>
  );
};
