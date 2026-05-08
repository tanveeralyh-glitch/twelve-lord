"use client";

import { PageHero } from "@/components/PageHero";
import { TechCard } from "@/components/TechCard";
import { CyberCableSection } from "@/components/CyberCableSection";
import { CableFeatures } from "@/components/CableFeatures";
import { techItems } from "@/lib/data";

export default function TechPage() {
  return (
    <main className="min-h-screen pb-20 bg-[#FAF9F6]">
      <PageHero 
        title="Innovation & Security" 
        subtitle="Bridging the gap between timeless wisdom and modern hardware-level protection."
        type="tech" 
      />

      {/* Cyber Cable Section */}
      <CyberCableSection />

      {/* Cable Features */}
      <CableFeatures />

      {/* Tech Items Grid */}
      <section className="py-20">
        <div className="container-tight">
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
              Technology <span className="text-gradient-accent">Stack</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl">
              Discover the tools and frameworks powering our platform.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {techItems.map((item, i) => (
              <TechCard key={item.title} item={item} index={i} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
