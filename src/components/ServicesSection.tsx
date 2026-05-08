"use client";

import { motion } from "framer-motion";
import { Shield, BookOpen, PenTool, Zap, Globe, Users } from "lucide-react";

const services = [
  {
    title: "Security Masterclasses",
    description: "Deep-dive technical content focused on modern cybersecurity threats and defense strategies.",
    icon: Shield,
    color: "bg-blue-500/10 text-blue-500"
  },
  {
    title: "Digital Library",
    description: "Access a curated collection of master-level books and articles for technical mastery.",
    icon: BookOpen,
    color: "bg-amber-500/10 text-amber-500"
  },
  {
    title: "Editorial Services",
    description: "Professional editing and publishing for world-class technical writers and creators.",
    icon: PenTool,
    color: "bg-emerald-500/10 text-emerald-500"
  },
  {
    title: "Real-time Updates",
    description: "Stay ahead of the curve with lightning-fast updates on the latest tech developments.",
    icon: Zap,
    color: "bg-purple-500/10 text-purple-500"
  },
  {
    title: "Global Community",
    description: "Join a network of elite developers and thinkers from around the globe.",
    icon: Globe,
    color: "bg-cyan-500/10 text-cyan-500"
  },
  {
    title: "Expert Mentorship",
    description: "Connect with industry leaders and master technical concepts through guidance.",
    icon: Users,
    color: "bg-rose-500/10 text-rose-500"
  }
];

export const ServicesSection = () => {
  return (
    <section id="services" className="section-padding">
      <div className="container-tight">
        <div className="max-w-3xl mb-20">
          <p className="text-primary font-bold uppercase tracking-widest text-xs mb-4">Our Services</p>
          <h2>Everything you need to master <br /> the technical landscape.</h2>
          <p className="mt-6 text-foreground/60">
            We provide the tools, content, and community to help you navigate and master the rapidly evolving world of technology and security.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -8 }}
              className="group card-premium h-full"
            >
              <div className={`h-12 w-12 rounded-2xl ${s.color} flex items-center justify-center mb-8 transition-transform group-hover:scale-110`}>
                <s.icon size={24} />
              </div>
              <h3 className="text-xl font-bold mb-4">{s.title}</h3>
              <p className="text-sm text-foreground/60 leading-relaxed">
                {s.description}
              </p>
              <div className="mt-8 pt-6 border-t border-border/40 flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                Learn More <Zap size={12} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
