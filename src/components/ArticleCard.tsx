"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Calendar, Clock, ArrowRight, User } from "lucide-react";
import type { Article } from "@/lib/data";

interface ArticleCardProps {
  article: Article;
  index?: number;
}

export const ArticleCard = ({ article, index = 0 }: ArticleCardProps) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group flex flex-col lg:flex-row gap-8 py-10 sm:py-12 border-b border-border last:border-0"
    >
      <Link 
        href={`/articles/${article.slug}`}
        className="w-full lg:w-[40%] aspect-[16/10] overflow-hidden rounded-2xl bg-secondary shrink-0 shadow-premium"
      >
        <img
          src={article.thumb}
          alt={article.title}
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        />
      </Link>
      
      <div className="flex flex-col justify-center flex-1 text-center lg:text-left">
        <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 text-[10px] sm:text-xs font-semibold text-primary uppercase tracking-widest mb-4">
          <span className="flex items-center gap-1.5"><User className="h-3.5 w-3.5" /> {article.author}</span>
          <span className="flex items-center gap-1.5"><Calendar className="h-3.5 w-3.5" /> {article.publishDate}</span>
          <span className="flex items-center gap-1.5"><Clock className="h-3.5 w-3.5" /> {article.readTime}</span>
        </div>
        
        <Link href={`/articles/${article.slug}`}>
          <h2 className="font-display font-bold leading-tight transition-colors duration-300 text-black">
            {article.title.split(' ').slice(0, -1).join(' ')} <span className="">{article.title.split(' ').pop()}</span>
          </h2>
        </Link>
        
        <p className="mt-4 text text-muted-foreground leading-relaxed line-clamp-3 max-w-2xl mx-auto lg:mx-0">
          {article.preview}
        </p>
        
        <div className="mt-6 sm:mt-8">
          <Link 
            href={`/articles/${article.slug}`}
            className="inline-flex items-center justify-center gap-2 text-sm font-bold uppercase tracking-wide group/btn border-b-2 border-primary pb-1 hover:gap-4 transition-all"
          >
            Read Article 
            <ArrowRight className="h-4 w-4 transform group-hover/btn:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </motion.article>
  );
};
