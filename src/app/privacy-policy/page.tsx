"use client";

import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Eye, Lock, Server, Mail, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function PrivacyPolicyPage() {
  const sections = [
    {
      icon: Eye,
      title: "1. Information We Collect",
      content: "We collect information you provide directly to us when you subscribe to our newsletter, make a purchase, or communicate with us. This may include your name, email address, and any other details you choose to share. We also automatically collect certain information about your device and how you interact with our platform to improve our editorial experience."
    },
    {
      icon: ShieldCheck,
      title: "2. How We Use Your Information",
      content: "Your data is used strictly to provide, maintain, and improve our services. We use your email to send you the newsletters you requested, updates about new publications, and important administrative messages. We do not sell, rent, or trade your personal information to third parties for their commercial purposes."
    },
    {
      icon: Lock,
      title: "3. Data Security",
      content: "We implement industry-standard security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. While no method of transmission over the internet is 100% secure, we strive to use commercially acceptable means to protect your data."
    },
    {
      icon: Server,
      title: "4. Third-Party Services",
      content: "We may use third-party service providers to help us operate our platform, such as email delivery services, payment processors, and analytics tools. These providers have access to your personal information only to perform these tasks on our behalf and are obligated not to disclose or use it for any other purpose."
    },
    {
      icon: Mail,
      title: "5. Contact Us",
      content: "If you have any questions or concerns regarding this Privacy Policy or how we handle your data, please reach out to us. We value your privacy and are committed to addressing any inquiries transparently and promptly."
    }
  ];

  return (
    <main className="min-h-screen bg-white text-black">
      {/* Hero Section */}
      <section className="relative pt-48 pb-20 overflow-hidden bg-[#DCE2E2] border-b border-black">
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
                  Privacy Policy
                </h1>
                <div className="w-20 h-1 bg-black rounded-full mt-4" />
              </div>
              
              <div className="space-y-6 text-lg text-black leading-relaxed max-w-2xl mx-auto font-medium">
                <p>
                  At Twelve Lords, we respect your privacy and are committed to protecting your personal data. This policy outlines how we handle your information with transparency and integrity.
                </p>
                <p className="text-sm font-bold uppercase tracking-widest text-black/60 pt-4">
                  Last Updated: May 2026
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-24 bg-white">
        <div className="container-tight px-6">
          <div className="max-w-3xl mx-auto space-y-16">
            {sections.map((section, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="space-y-6"
              >
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-full bg-[#DCE2E2] flex items-center justify-center border border-black transition-transform hover:scale-110">
                    <section.icon className="h-5 w-5 text-black" strokeWidth={2} />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-playfair font-bold">
                    {section.title}
                  </h2>
                </div>
                <div className="pl-16">
                  <p className="text-lg text-black/80 leading-relaxed">
                    {section.content}
                  </p>
                  {index === sections.length - 1 && (
                    <div className="mt-6">
                      <Link 
                        href="/contact"
                        className="inline-flex items-center gap-2 font-bold uppercase tracking-wider text-sm border-b-2 border-black pb-1 hover:text-black/60 hover:border-black/60 transition-colors"
                      >
                        Contact Support <ArrowRight className="h-4 w-4" />
                      </Link>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-white py-12 border-t border-black">
        <div className="container-tight px-6">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="flex items-center gap-8 text-black">
              <div className="text-center lg:text-left">
                <p className="text-sm font-bold tracking-widest uppercase text-black mb-1">Your Privacy Matters.</p>
                <p className="text-xl font-playfair italic">Read with peace of mind.</p>
              </div>
            </div>

            <Link 
              href="/articles"
              className="bg-[#E85A00] text-white hover:bg-[#E85A00]/90 px-8 py-4 rounded-full font-bold transition-all flex items-center gap-3 group"
            >
              Return to Articles
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
