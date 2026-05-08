"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

export const CTASection = () => {
  return (
    <section id="contact" className="section-padding bg-background relative overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl aspect-square bg-primary/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="container-tight relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-card border border-border/50 rounded-[40px] p-12 md:p-24 text-center shadow-premium relative overflow-hidden"
        >
          {/* Subtle Grid Background */}
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[linear-gradient(rgba(0,0,0,1)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,1)_1px,transparent_1px)] bg-[size:40px_40px]" />

          <div className="max-w-3xl mx-auto space-y-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-widest">
              <Sparkles size={14} /> Ready to Begin?
            </div>
            
            <h2 className="text-4xl md:text-6xl font-black">
              Start your journey into the <br /> <span className="text-primary">future of technology</span> today.
            </h2>
            
            <p className="text-lg md:text-xl text-foreground/60">
              Join thousands of tech visionaries and gain access to the world's most premium technical content and insights.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-4">
              <Link
                href="/contact"
                className="btn-primary w-full sm:w-auto text-lg px-12 py-5 flex items-center justify-center gap-3 group"
              >
                Join Now
                <ArrowRight className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/about"
                className="btn-outline w-full sm:w-auto text-lg px-12 py-5"
              >
                Learn More
              </Link>
            </div>
            
            <p className="text-xs font-bold text-foreground/30 uppercase tracking-[0.2em] pt-10">
              NO CREDIT CARD REQUIRED • INSTANT ACCESS • ELITE COMMUNITY
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
