"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const articles = [
  {
    title: "As Cyber Threats Accelerate, Human Awareness Remains the Critical Weakness",
    category: "Security",
    image: "/cybersecurity-featured.png",
    slug: "cyber-threats-awareness",
    date: "May 2, 2026"
  },
  {
    title: "The Evolution of Digital Privacy in the Age of AI",
    category: "Privacy",
    image: "/images/data-breach.jpg",
    slug: "digital-privacy-ai",
    date: "April 28, 2026"
  },
  {
    title: "Mastering the Art of Modern Web Architecture",
    category: "Development",
    image: "/images/article.jpg",
    slug: "modern-web-architecture",
    date: "April 20, 2026"
  }
];

export const FeaturedContent = () => {
  return (
    <section id="blog" className="section-padding bg-secondary/30">
      <div className="container-tight">
        <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16">
          <div className="max-w-2xl">
            <p className="text-primary font-bold uppercase tracking-widest text-xs mb-4">Latest Insights</p>
            <h2>Stay ahead with our latest <br /> technical publications.</h2>
          </div>
          <Link href="/articles" className="btn-outline py-3 px-8 text-sm flex items-center gap-2">
            View All Articles <ArrowUpRight size={16} />
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {articles.map((a, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group flex flex-col h-full"
            >
              <Link href={`/articles/${a.slug}`} className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden mb-6 block">
                <Image 
                  src={a.image} 
                  alt={a.title} 
                  fill 
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-background/80 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest border border-white/10">
                    {a.category}
                  </span>
                </div>
              </Link>
              <div className="flex-1 space-y-4">
                <p className="text-xs font-bold text-foreground/40 uppercase tracking-widest">{a.date}</p>
                <Link href={`/articles/${a.slug}`} className="block group-hover:text-primary transition-colors">
                  <h3 className="text-xl font-bold leading-tight line-clamp-2">
                    {a.title}
                  </h3>
                </Link>
                <p className="text-sm text-foreground/60 line-clamp-3">
                  Exploring the critical intersections of technology, security, and human factor in the modern digital age.
                </p>
              </div>
              <div className="pt-6 mt-auto">
                <Link 
                  href={`/articles/${a.slug}`} 
                  className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest hover:text-primary transition-colors"
                >
                  Read More <ArrowUpRight size={14} />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
