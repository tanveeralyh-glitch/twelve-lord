"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Logo } from "./Logo";
import { Menu, X, Heart, Instagram, Facebook, Twitter, Youtube, Music2, Music, Podcast } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

import { useAppState } from "@/context/AppStateContext";

const XIcon = (props: any) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24h-2.19L17.61 20.644Z" />
  </svg>
);

const social = [
  { icon: Instagram, href: "https://www.instagram.com/twelvelords", label: "Instagram", color: "stroke-[url(#ig-grad)] text-[#E4405F]" },
  { icon: Facebook, href: "https://www.facebook.com/share/1CRfTGwmLb/", label: "Facebook", color: "text-[#1877F2]" },
  { icon: XIcon, href: "https://twitter.com/twelvelords", label: "X / Twitter", color: "text-black dark:text-white" },
  { icon: Youtube, href: "https://youtube.com/@twelvelords", label: "YouTube", color: "text-[#FF0000]" },
  { icon: Music2, href: "https://www.tiktok.com/@twelvelords", label: "TikTok", color: "text-black dark:text-white" },
  { icon: Music, href: "https://open.spotify.com/episode/0DncvmZNsruO4zWw4KHB76", label: "Spotify", color: "text-[#1DB954]" },
  { icon: Podcast, href: "https://podcasts.apple.com/gb/podcast/the-weakest-link/id1895144412", label: "Apple Podcast", color: "text-[#872EC4]" },
];

const links = [
  { label: "Home", href: "/" },
  { label: "Articles", href: "/articles" },
  { label: "Book", href: "/books" },
  { label: "Tech", href: "/tech" },
  { label: "About", href: "/about" },
  { label: "Contact Us", href: "/contact" },
];

export const Navbar = () => {
  const { favorites, setIsFavoritesOpen } = useAppState();
  const [open, setOpen] = useState(false);

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [open]);

  return (
    <header
      className="absolute top-0 inset-x-0 z-50 flex flex-col bg-[#DCE2E2] border-b border-black"
    >
      <div className="w-full px-8 sm:px-16 flex items-center justify-between py-3">
        <div className="flex-shrink-0">
          <Logo showBg={false} />
        </div>

        <nav className="hidden lg:flex items-center gap-10">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="relative text-[15px] font-bold text-black hover:opacity-70 transition-opacity group"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3 sm:gap-6">
          <button 
            onClick={() => setIsFavoritesOpen(true)}
            className="relative text-black hover:opacity-70 transition-opacity p-2.5 group"
            aria-label="Favorites"
          >
            <Heart className="h-5 w-5" />
            {favorites.length > 0 && (
              <span className="absolute top-1 right-1 h-4 w-4 bg-primary text-white text-[9px] font-black rounded-full flex items-center justify-center border-2 border-background">
                {favorites.length}
              </span>
            )}
          </button>

          <button
            className="lg:hidden h-11 w-11 flex items-center justify-center rounded-full bg-secondary/80 text-foreground z-[70] transition-all active:scale-95 hover:bg-secondary"
            onClick={() => setOpen(!open)}
            aria-label="Menu"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Modern Mobile Menu with Blur Effect */}
      <AnimatePresence>
        {open && (
          <>
            {/* Background Overlay with Blur */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 z-[60] bg-background/60 lg:hidden"
            />
            
            {/* Slide-out Menu Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="fixed right-0 top-0 bottom-0 w-[85%] max-w-sm z-[65] bg-black shadow-2xl border-l border-white/10 lg:hidden flex flex-col overflow-hidden"
            >
              <div className="flex flex-col h-full pt-24 px-8 pb-12 overflow-y-auto">
                <div className="flex flex-col gap-6">
                  {links.map((link, i) => (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                    >
                      <Link
                        href={link.href}
                        onClick={() => setOpen(false)}
                        className="text-[18px] font-[350] text-white hover:text-primary transition-colors flex items-center justify-between group"
                      >
                        {link.label}
                        <span className="h-1 w-0 bg-primary group-hover:w-8 transition-all duration-300" />
                      </Link>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-auto pt-10 flex flex-col gap-8">
                  <div className="h-px w-full bg-gradient-to-r from-border to-transparent" />
                  
                  <div className="space-y-4">
                    <span className="text-xs font-bold uppercase tracking-widest text-white/40">Connect With Us</span>
                    <div className="flex flex-wrap gap-4">
                      {social.map((s, i) => (
                        <motion.a
                          key={i}
                          href={s.href}
                          initial={{ opacity: 0, scale: 0.5 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.4 + (i * 0.05) }}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`h-10 w-10 rounded-full bg-secondary flex items-center justify-center transition-transform hover:scale-110 ${s.color}`}
                        >
                          <s.icon className="h-5 w-5" />
                        </motion.a>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-col gap-1">
                    <span className="text-white/40 font-bold text-sm uppercase tracking-widest">Twelve Lords</span>
                    <span className="text-white/30 text-xs">Crafted for thinkers and creators</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};
