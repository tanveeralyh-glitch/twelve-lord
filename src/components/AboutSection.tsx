"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export const AboutSection = () => {
  return (
    <section id="about" className="section-padding overflow-hidden">
      <div className="container-tight">
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-20 items-center">
          {/* TEXT - Order 1 on mobile, 2 on desktop */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-10 order-1 lg:order-2"
          >
            <div>
              <p className="text-primary font-bold uppercase tracking-widest text-xs mb-4">About Twelve Lords</p>
              <h2>Our mission is to empower <br /> tech creators worldwide.</h2>
            </div>

            <div className="space-y-6 text-foreground/60">
              <p>
                Twelve Lords was born out of a desire to bridge the gap between high-level technical expertise and high-end editorial storytelling. We believe that deep technical knowledge deserves a premium platform.
              </p>
              <p>
                Our mission is to curate and publish content that doesn't just inform, but inspires the next generation of developers, security experts, and tech visionaries to build a better future.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-8 pt-6">
              <div className="space-y-4">
                <h4 className="font-bold text-lg">Our Vision</h4>
                <p className="text-sm text-foreground/60">To become the world's most trusted source for technical mastery and creative inspiration.</p>
              </div>
              <div className="space-y-4">
                <h4 className="font-bold text-lg">Our Story</h4>
                <p className="text-sm text-foreground/60">Founded by a group of developers and writers who wanted more from tech media.</p>
              </div>
            </div>
          </motion.div>

          {/* IMAGE - Order 2 on mobile, 1 on desktop */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative aspect-[4/5] w-full rounded-[40px] overflow-hidden shadow-premium">
              <Image 
                src="/images/about-hero.png" 
                alt="Our Vision" 
                fill 
                className="object-cover"
              />
            </div>
            {/* Floating Badge */}
            <div className="absolute -bottom-10 -right-10 glass p-8 rounded-3xl border-white/20 hidden md:block">
              <p className="text-4xl font-black text-primary">5+</p>
              <p className="text-xs font-bold uppercase tracking-widest text-foreground/40">Years of Excellence</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
