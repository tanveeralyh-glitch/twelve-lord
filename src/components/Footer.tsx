"use client";

import { Logo } from "./Logo";
import Link from "next/link";
import { Instagram, Facebook, Music2, Send, Linkedin, Twitter, Youtube } from "lucide-react";

const XIcon = (props: any) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24h-2.19L17.61 20.644Z" />
  </svg>
);

const social = [
  { icon: Facebook, href: "https://www.facebook.com/share/1CRfTGwmLb/", label: "Facebook", bgColor: "bg-[#1877F2]" },
  { icon: Instagram, href: "https://www.instagram.com/twelvelords", label: "Instagram", bgColor: "bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7]" },
  { icon: XIcon, href: "https://twitter.com/twelvelords", label: "X / Twitter", bgColor: "bg-[#000000]" },
  { icon: Linkedin, href: "https://linkedin.com/company/twelvelords", label: "LinkedIn", bgColor: "bg-[#0A66C2]" },
  { icon: Youtube, href: "https://youtube.com/@twelvelords", label: "YouTube", bgColor: "bg-[#FF0000]" },
  { icon: Music2, href: "https://www.tiktok.com/@twelvelords", label: "TikTok", bgColor: "bg-[#000000]" },
];

const footerLinks = [
  { 
    title: "Product", 
    links: [
      { label: "Articles", href: "/articles" },
      { label: "Books", href: "/books" },
      { label: "Tech", href: "/tech" },
      { label: "About Us", href: "/about" }
    ] 
  },
  { 
    title: "Company", 
    links: [
      { label: "Our Story", href: "/about" },
      { label: "The Philosophy", href: "/about" },
      { label: "Latest News", href: "/articles" },
      { label: "Contact", href: "/contact" }
    ] 
  },
  { 
    title: "Resources", 
    links: [
      { label: "Help Center", href: "/contact" },
      { label: "Reading List", href: "/books" },
      { label: "Tech Specs", href: "/tech" },
      { label: "Privacy Policy", href: "/privacy-policy" }
    ] 
  },
];

export const Footer = () => {
  return (
    <footer id="footer" className="relative bg-[#0B121E] text-white pt-16 sm:pt-20 pb-10 border-t border-white/10">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent opacity-50" />
      <div className="container-tight px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="lg:col-span-5 text-center lg:text-left">
            <div className="flex justify-center lg:justify-start">
              {/* Logo removed */}
            </div>
            <p className="mt-5 text-sm text-[#FAF9F6] max-w-sm mx-auto lg:mx-0 leading-relaxed font-medium">
              Bridging the gap between ancient wisdom and modern technology. Twelve Lords is a sanctuary for thinkers, writers, and creators.
            </p>

            <form
              onSubmit={(e) => e.preventDefault()}
              className="mt-8 flex flex-col sm:flex-row items-center gap-3 p-1.5 sm:rounded-full bg-white/5 border border-white/10 max-w-md mx-auto lg:mx-0 backdrop-blur-md overflow-hidden rounded-2xl focus-within:border-primary/50 transition-colors"
            >
              <input
                type="email"
                placeholder="Join the collective"
                className="w-full sm:flex-1 bg-transparent px-4 py-3 sm:py-2 text-sm text-white placeholder:text-white/40 focus:outline-none"
              />
              <button
                type="submit"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-primary text-primary-foreground px-6 py-3 sm:py-2.5 text-sm font-bold hover:scale-105 active:scale-95 transition-all shadow-glow"
              >
                Subscribe <Send className="h-4 w-4" />
              </button>
            </form>
          </div>

          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8 sm:gap-12">
            {footerLinks.map((col) => (
              <div key={col.title} className="text-center sm:text-left">
                <h4 className="font-sans font-bold text-[10px] sm:text-xs tracking-[0.2em] uppercase text-[#FAF9F6]">{col.title}</h4>
                <ul className="mt-6 space-y-4">
                  {col.links.map((l) => (
                    <li key={l.label}>
                      <Link href={l.href} className="text-sm font-medium text-[#FAF9F6] hover:text-primary transition-colors">
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col items-center justify-center gap-8 text-center">
          <div className="flex items-center justify-center flex-wrap gap-5">
            {social.map((s, i) => (
              <a
                key={i}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className={`h-11 w-11 sm:h-10 sm:w-10 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 text-white ${s.bgColor} shadow-premium hover:shadow-glow`}
              >
                <s.icon className="h-5 w-5" />
              </a>
            ))}
          </div>
          <div className="space-y-1">
            <p className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] text-[#FAF9F6]">
              Twelve Lords
            </p>
            <p className="text-[10px] text-[#FAF9F6]">
              © {new Date().getFullYear()} Twelve Lords. Crafted with purpose.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
