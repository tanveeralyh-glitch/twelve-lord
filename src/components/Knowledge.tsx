"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { BookOpen, Lightbulb, Compass, ArrowUpRight } from "lucide-react";
import knowledgeImg from "@/assets/knowledge.jpg";

const blocks = [
  { icon: BookOpen, title: "Read deeper", text: "Long-form essays curated by editors who care about ideas." },
  { icon: Lightbulb, title: "Think clearer", text: "Frameworks, mental models, and notes from working creators." },
  { icon: Compass, title: "Explore further", text: "Discover voices and topics you didn't know you'd love." },
];

export const Knowledge = () => {
  return (
    <section id="knowledge" className="section-padding bg-secondary/20 relative overflow-hidden">
      <div className="container-tight relative px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16 lg:gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative order-last lg:order-first"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-soft border border-border">
              <img
                src={typeof knowledgeImg === 'string' ? knowledgeImg : knowledgeImg.src}
                alt="Knowledge Repository"
                loading="lazy"
                width={1280}
                height={800}
                className="w-full h-full object-cover aspect-video sm:aspect-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent" />
            </div>
            {/* Minimal Stat Badge - Adjusted for mobile */}
            <div className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 bg-card border border-border rounded-xl p-4 sm:p-6 shadow-premium z-10">
              <div className="text-2xl sm:text-3xl font-extrabold text-primary tracking-tight">+240</div>
              <div className="text-[10px] font-bold text-foreground/60 uppercase tracking-widest mt-1">Deep Analysis</div>
            </div>
          </motion.div>

          <div className="space-y-8 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-primary font-bold tracking-[0.2em] uppercase text-[10px] sm:text-xs mb-4 block">
                Research & Development
              </span>
              <h2 className="text-balance leading-tight text-black">Security insights that build lasting resilience.</h2>
              <p className="max-w-xl mx-auto lg:mx-0">
                We distill complex security concepts and industry trends into actionable 
                knowledge blocks designed for modern technical teams and decision-makers.
              </p>
              
              <div className="pt-4">
                <Link
                  href="/books"
                  className="btn-outline inline-flex items-center justify-center gap-2 text-sm w-full sm:w-auto"
                >
                  Explore Knowledge Base <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Feature Grid - Mobile: 1, Tablet: 2, Desktop: 3 */}
        <div className="mt-20 sm:mt-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {blocks.map((b, i) => (
            <motion.div
              key={b.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="card-premium flex flex-col gap-6"
            >
              <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <b.icon className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-bold mb-3 text-black">{b.title}</h3>
                <p className="text-sm text-foreground/70 mb-0 leading-relaxed">{b.text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
