"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import type { Article } from "@/lib/data";

interface LatestArticlesProps {
  articles: Article[];
}

export const LatestArticles = ({ articles }: LatestArticlesProps) => {
  return (
    <section id="latest" className="py-24 bg-white border-t border-black/5">
      <div className="container-tight px-6">
        <div className="mb-16">
          <h2 className="text-4xl font-display font-black text-black uppercase tracking-tighter">
            Latest Articles
          </h2>
        </div>

        <div className="flex flex-col border-t-2 border-black/10">
          {articles.map((article, index) => (
            <motion.div
              key={article.slug}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="group border-b-2 border-black/10"
            >
              <Link 
                href={`/articles/${article.slug}`}
                className="flex flex-col md:flex-row md:items-center justify-between py-8 gap-4"
              >
                <div className="text-sm font-bold uppercase tracking-widest text-muted-foreground md:w-32 shrink-0">
                  {article.publishDate}
                </div>
                
                <h3 className="flex-1 text-xl md:text-2xl font-bold text-black leading-tight">
                  {article.title}
                </h3>
                
                <div className="h-10 w-10 rounded-full border-2 border-black flex items-center justify-center group-hover:bg-black group-hover:text-white transition-all shrink-0">
                  <ArrowRight className="h-5 w-5" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 flex justify-center">
          <Link href="/articles/archive" className="px-12 py-5 bg-black text-white text-sm font-black uppercase tracking-widest transition-all">
            See All Articles
          </Link>
        </div>
      </div>
    </section>
  );
};
