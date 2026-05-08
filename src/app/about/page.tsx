"use client";

import React from "react";
import { motion } from "framer-motion";
import { User, Target, Pencil, Lightbulb, FileText, Book, Youtube, Code, Sparkles, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white text-[#252121]">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="container-tight relative z-10 px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="space-y-8 text-center"
            >
              <div className="space-y-4 flex flex-col items-center">
                <h1 className="text-6xl md:text-8xl font-playfair font-bold tracking-tight leading-[1.1] mb-0">
                  About Twelve Lords
                </h1>
                <div className="w-20 h-1 bg-primary/40 rounded-full mt-4" />
              </div>
              
              <h2 className="text-2xl md:text-3xl font-playfair text-foreground/80 leading-relaxed max-w-2xl mx-auto">
                Clarity, awareness, and timeless wisdom for the modern world.
              </h2>
              
              <div className="space-y-6 text-lg text-foreground/70 leading-relaxed max-w-3xl mx-auto">
                <p>
                  We explore the intersection of modern technology, human awareness, philosophy, and timeless wisdom. 
                  Our work is built for people who want to understand the world beneath the surface — 
                  not just what is happening, but why it matters.
                </p>
                <p>
                  Through articles, books, videos, and digital platforms, we translate complex ideas into clear, 
                  practical insight for modern life.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Grid Section */}
      <section className="py-24 bg-white">
        <div className="container-tight px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24">
            {/* ... Who We Are, Our Purpose, What We Create, Why It Matters ... (keeping same content) */}
            {/* Who We Are */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="h-12 w-12 rounded-full bg-primary/5 flex items-center justify-center border border-primary/10">
                <User className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-3xl font-playfair font-bold">Who We Are</h3>
              <div className="space-y-4 text-lg text-foreground/70 leading-relaxed">
                <p>
                  Twelve Lords is a knowledge and media platform dedicated to thoughtful content that empowers minds and elevates perspectives.
                </p>
                <p>
                  We are a team of writers, researchers, creators, and technologists united by one belief: 
                  that wisdom and technology together can shape a better future.
                </p>
              </div>
            </motion.div>

            {/* Our Purpose */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="space-y-6"
            >
              <div className="h-12 w-12 rounded-full bg-primary/5 flex items-center justify-center border border-primary/10">
                <Target className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-3xl font-playfair font-bold">Our Purpose</h3>
              <div className="space-y-4 text-lg text-foreground/70 leading-relaxed">
                <p>
                  Technology is changing how we think, live, learn, and connect. But progress without wisdom can create confusion.
                </p>
                <p className="font-bold text-foreground">
                  Twelve Lords was created to bridge that gap.
                </p>
                <p>
                  Our purpose is to help people navigate the modern world with awareness, critical thinking, and deeper understanding.
                </p>
                <p>
                  We cover technology, current affairs, history, philosophy, and human development through a lens of clarity and responsibility.
                </p>
                <div className="pt-2">
                  <p className="font-bold text-foreground">We do not chase noise.</p>
                  <p className="font-bold text-primary">We seek meaning.</p>
                </div>
              </div>
            </motion.div>

            {/* What We Create */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="h-12 w-12 rounded-full bg-primary/5 flex items-center justify-center border border-primary/10">
                <Pencil className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-3xl font-playfair font-bold">What We Create</h3>
              <p className="text-lg text-foreground/70">
                We produce high-quality, well-researched content across multiple formats:
              </p>
              <div className="grid grid-cols-1 gap-6 pt-4">
                <div className="flex gap-4">
                  <FileText className="h-6 w-6 text-primary shrink-0" />
                  <div>
                    <h4 className="font-bold text-foreground">In-depth Articles</h4>
                    <p className="text-foreground/60 text-sm">Clarity on complex topics.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Book className="h-6 w-6 text-primary shrink-0" />
                  <div>
                    <h4 className="font-bold text-foreground">Books & Guides</h4>
                    <p className="text-foreground/60 text-sm">Long-form knowledge for deeper growth.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Youtube className="h-6 w-6 text-primary shrink-0" />
                  <div>
                    <h4 className="font-bold text-foreground">Videos & Podcasts</h4>
                    <p className="text-foreground/60 text-sm">Ideas that inform, inspire, and provoke thought.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Code className="h-6 w-6 text-primary shrink-0" />
                  <div>
                    <h4 className="font-bold text-foreground">Technology Solutions</h4>
                    <p className="text-foreground/60 text-sm">Building tools and platforms that empower creators and communities.</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Why It Matters */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="space-y-6 flex flex-col"
            >
              <div className="space-y-6">
                <div className="h-12 w-12 rounded-full bg-primary/5 flex items-center justify-center border border-primary/10">
                  <Lightbulb className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-3xl font-playfair font-bold">Why It Matters</h3>
                <div className="space-y-4 text-lg text-foreground/70 leading-relaxed">
                  <p>
                    We live in an age of information overload and short attention.
                  </p>
                  <p className="font-bold text-foreground">
                    Understanding is the new advantage.
                  </p>
                  <p>
                    Our mission is to make modern knowledge accessible, thoughtful, and useful — while preserving the timeless principles that help people think clearly, live consciously, and act wisely.
                  </p>
                </div>
              </div>

              <div className="mt-auto pt-12">
                <motion.div 
                  whileHover={{ scale: 1.02 }}
                  className="p-6 rounded-xl bg-primary/5 border border-primary/20 flex items-center gap-6"
                >
                  <Sparkles className="h-8 w-8 text-primary shrink-0" />
                  <div className="space-y-1">
                    <p className="font-playfair text-lg text-foreground/80">Timeless wisdom. Modern perspective.</p>
                    <p className="font-bold text-foreground">Stronger future.</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-white py-12 border-t border-border">
        <div className="container-tight px-6">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="flex items-center gap-8 text-foreground/90">
              <div className="text-center lg:text-left">
                <p className="text-sm font-bold tracking-widest uppercase text-foreground/40 mb-1">Exploring today.</p>
                <p className="text-xl font-playfair italic">Understanding tomorrow.</p>
              </div>
              <div className="w-px h-12 bg-border hidden lg:block" />
              <p className="max-w-md text-foreground/60 leading-relaxed hidden lg:block">
                Join thousands of readers and thinkers building a smarter, more conscious future.
              </p>
            </div>

            <Link 
              href="/articles"
              className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-full font-bold transition-all flex items-center gap-3 group shadow-glow"
            >
              Explore Insights
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

