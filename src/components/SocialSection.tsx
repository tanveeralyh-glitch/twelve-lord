"use client";

import { motion } from "framer-motion";
import { Instagram, Facebook, Music2 as TikTok, Youtube, Linkedin } from "lucide-react";

const XIcon = (props: any) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24h-2.19L17.61 20.644Z" />
  </svg>
);

const socialLinks = [
  { 
    name: "Facebook", 
    icon: Facebook, 
    href: "https://www.facebook.com/share/1CRfTGwmLb/",
    bgColor: "bg-[#1877F2]" 
  },
  { 
    name: "Instagram", 
    icon: Instagram, 
    href: "https://www.instagram.com/twelvelords",
    bgColor: "bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7]" 
  },
  { 
    name: "Twitter / X", 
    icon: XIcon, 
    href: "https://twitter.com/twelvelords",
    bgColor: "bg-[#000000]" 
  },
  { 
    name: "LinkedIn", 
    icon: Linkedin, 
    href: "https://linkedin.com/company/twelvelords",
    bgColor: "bg-[#0A66C2]" 
  },
  { 
    name: "YouTube", 
    icon: Youtube, 
    href: "https://youtube.com/@twelvelords",
    bgColor: "bg-[#FF0000]" 
  },
  { 
    name: "TikTok", 
    icon: TikTok, 
    href: "https://www.tiktok.com/@twelvelords",
    bgColor: "bg-[#000000]" 
  },
];

export const SocialSection = () => {
  return (
    <section className="py-24 bg-secondary/30 dark:bg-secondary/10 border-y border-border/50">
      <div className="container-tight text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-primary font-bold tracking-[0.2em] uppercase text-xs mb-4 block">
            Stay Connected
          </span>
          <h2 className="mb-16">Official Brand Channels</h2>
          
          <div className="grid grid-cols-3 sm:flex sm:flex-wrap justify-center gap-4 sm:gap-6 md:gap-10">
            {socialLinks.map((social, i) => (
              <motion.a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.1, y: -8 }}
                viewport={{ once: true }}
                transition={{ 
                  type: "spring",
                  stiffness: 300,
                  damping: 15,
                  delay: i * 0.05 
                }}
                aria-label={social.name}
                className="group flex flex-col items-center gap-2 sm:gap-4"
              >
                <div className={`h-12 w-12 sm:h-16 sm:w-16 md:h-20 md:w-20 rounded-[1rem] sm:rounded-[1.5rem] flex items-center justify-center shadow-lg transition-shadow duration-300 group-hover:shadow-xl ${social.bgColor} text-white`}>
                  <social.icon className="h-6 w-6 sm:h-8 sm:w-8 md:h-10 md:w-10" strokeWidth={1.5} />
                </div>
                <span className="text-[8px] sm:text-[10px] font-black tracking-widest uppercase opacity-100 sm:opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-0 sm:translate-y-2 group-hover:translate-y-0">
                  {social.name.split(' ')[0]}
                </span>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
