"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    quote: "Twelve Lords has completely transformed how our team consumes technical content. The depth is unmatched.",
    author: "Alex Rivera",
    role: "CTO, TechFlow",
    avatar: "AR"
  },
  {
    quote: "The best resource for security masterclasses. Every article feels like a high-end editorial piece.",
    author: "Sarah Chen",
    role: "Security Engineer",
    avatar: "SC"
  },
  {
    quote: "Premium insights that actually move the needle for our development strategy.",
    author: "James Wilson",
    role: "Lead Developer",
    avatar: "JW"
  }
];

export const TrustSection = () => {
  return (
    <section className="section-padding bg-secondary/30">
      <div className="container-tight">
        <div className="text-center mb-16">
          <p className="text-primary font-bold uppercase tracking-widest text-xs mb-4">Trusted by Experts</p>
          <h2>Powering the world's most <br /> innovative tech teams.</h2>
        </div>

        {/* Logo Cloud (Simplified) */}
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-40 grayscale hover:grayscale-0 transition-all duration-500 mb-24">
          <div className="text-2xl font-black tracking-tighter">STRIPE</div>
          <div className="text-2xl font-black tracking-tighter">APPLE</div>
          <div className="text-2xl font-black tracking-tighter">META</div>
          <div className="text-2xl font-black tracking-tighter">MICROSOFT</div>
          <div className="text-2xl font-black tracking-tighter">GOOGLE</div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="card-premium relative"
            >
              <div className="absolute top-6 right-8 text-primary/10">
                <Quote size={48} />
              </div>
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} className="fill-primary text-primary" />
                ))}
              </div>
              <p className="text-lg italic mb-8 relative z-10 text-foreground/80">
                "{t.quote}"
              </p>
              <div className="flex items-center gap-4">
                <div className="h-10 w-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold text-xs">
                  {t.avatar}
                </div>
                <div>
                  <p className="font-bold text-sm">{t.author}</p>
                  <p className="text-xs text-foreground/40 font-medium">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
