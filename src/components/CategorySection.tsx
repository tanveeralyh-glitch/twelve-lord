"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import type { Article } from "@/lib/data";

interface CategorySectionProps {
  title: string;
  articles: Article[];
}

export const CategorySection = ({ title, articles }: CategorySectionProps) => {
  return (
    <div className="flex flex-col h-full">
      <div className="mb-8">
        <h2 className="text-2xl font-bold uppercase tracking-widest text-black mb-2">
          {title}
        </h2>
        <div className="h-0.5 w-full bg-black" />
      </div>

      <div className="flex flex-col divide-y-2 divide-black/5">
        {articles.map((article, index) => (
          <motion.div
            key={article.slug}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="py-6 group"
          >
            <Link href={`/articles/${article.slug}`}>
              <h3 className="text-xl font-bold text-black leading-tight mb-2">
                {article.title}
              </h3>
              <p className="text-muted-foreground text-sm line-clamp-2 leading-relaxed">
                {article.preview}
              </p>
            </Link>
          </motion.div>
        ))}
      </div>

      <div className="mt-auto pt-6">
        <Link 
          href={`/articles?category=${title}`}
          className="inline-flex items-center gap-3 text-sm font-black uppercase tracking-tighter text-black group"
        >
          Read more about {title}
          <div className="h-8 w-8 rounded-full border-2 border-black flex items-center justify-center group-hover:bg-black group-hover:text-white transition-all">
            <ArrowRight className="h-4 w-4" />
          </div>
        </Link>
      </div>
    </div>
  );
};
