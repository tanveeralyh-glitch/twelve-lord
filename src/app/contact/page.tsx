"use client";

import React from "react";
import { Mail } from "lucide-react";
import { motion } from "framer-motion";

const emails = [
  {
    title: "Tech Inquiries",
    email: "Tech@twelvelords.com",
    description: "Technical questions and support",
  },
  {
    title: "Books & Publications",
    email: "Books@twelvelords.com",
    description: "Book orders and inquiries",
  },
  {
    title: "General Information",
    email: "Info@twelvelords.com",
    description: "General questions and partnerships",
  },
];

export default function ContactPage() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Message sent! Our team will get back to you at the email provided.");
    (e.target as HTMLFormElement).reset();
  };

  return (
    <main className="min-h-screen bg-background pt-20">
      <section className="relative w-full py-16 sm:py-20 flex items-center justify-center overflow-hidden">
        <div className="relative z-10 text-center px-4 sm:px-6">
          <h1 className="font-display font-bold mb-4 text-black">
            Get in <span className="">Touch</span>
          </h1>
          <p className="text-base sm:text-lg text-muted-foreground max-w-xl mx-auto">
            We're here to help you anytime.
          </p>
        </div>
      </section>

      {/* Email Cards Section */}
      <section className="py-12 sm:py-20 px-4 sm:px-6">
        <div className="container-tight">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-16 sm:mb-20">
            {emails.map((item, i) => (
              <motion.a
                key={item.email}
                href={`mailto:${item.email}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group relative p-6 sm:p-8 rounded-2xl bg-card border border-border hover:border-primary/50 hover:bg-secondary/30 transition-all duration-300 hover:shadow-card-hover hover:-translate-y-1 cursor-pointer"
              >
                <motion.div
                  animate={{ rotate: [0, 3, -3, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="h-12 w-12 rounded-lg bg-primary/20 flex items-center justify-center mb-4 group-hover:bg-primary/30 transition-colors"
                >
                  <Mail className="h-6 w-6 text-primary" />
                </motion.div>

                <h3 className="text-lg sm:text-xl font-display font-bold text-black mb-2 transition-colors duration-300">
                  {item.title}
                </h3>

                <p className="text-primary font-semibold text-sm mb-2">
                  {item.email}
                </p>

                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>

                {/* Hover glow effect */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className="absolute -inset-4 bg-primary/5 rounded-2xl -z-10 blur-xl"
                />
              </motion.a>
            ))}
          </div>

          {/* Contact Form */}
          <div className="max-w-2xl mx-auto">
            <form className="glass rounded-3xl p-6 sm:p-8 border border-border" onSubmit={handleSubmit}>
              <h2 className="font-display font-bold mb-8 text-black text-center">
                Send us a <span className="">Message</span>
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="space-y-2"
                >
                  <label className="text-sm font-medium">Name</label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-primary transition-colors outline-none"
                    placeholder="Your name"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="space-y-2"
                >
                  <label className="text-sm font-medium">Email</label>
                  <input
                    type="email"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-primary transition-colors outline-none"
                    placeholder="Email address"
                  />
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="space-y-2 mb-6"
              >
                <label className="text-sm font-medium">Message</label>
                <textarea
                  rows={5}
                  required
                  className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-primary transition-colors outline-none resize-none"
                  placeholder="How can we help?"
                />
              </motion.div>

              <motion.button
                type="submit"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="w-full py-4 rounded-xl bg-[#252121] text-white font-bold transition-all duration-300 hover:bg-primary hover:text-black hover:shadow-glow"
              >
                Send Message
              </motion.button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
