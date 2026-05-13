"use client";

import { motion } from "framer-motion";
import { CheckCircle2, ShoppingCart, Heart, Calendar, User, Check, Sparkles, Info } from "lucide-react";
import type { Book } from "@/lib/data";
import { useAppState } from "@/context/AppStateContext";
import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

interface FeaturedBookProps {
  book: Book;
}

export const FeaturedBook = ({ book }: FeaturedBookProps) => {
  const { toggleFavorite, addToCart, isFavorite, cart } = useAppState();
  const [added, setAdded] = useState(false);

  const handleAddToCart = () => {
    addToCart(book);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <section className="py-24 bg-background relative overflow-hidden" id="featured-book">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-[0.03]">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent blur-[150px] rounded-full" />
      </div>

      <div className="container-tight relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="relative bg-card/40 backdrop-blur-xl rounded-[3rem] overflow-hidden border border-white/5 shadow-2xl"
        >
          {/* Top Label */}
          <div className="absolute top-8 left-8 z-20">
            <motion.div
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="px-5 py-2 rounded-full bg-accent/20 border border-accent/30 text-accent text-xs font-black uppercase tracking-[0.2em] shadow-lg backdrop-blur-md"
            >
              Featured Release
            </motion.div>
          </div>

          <div className="flex flex-col lg:grid lg:grid-cols-[1.2fr_1fr] items-center">
            {/* TEXT (Details) - Order 1 on mobile, 1 on desktop */}
            <div className="p-8 lg:p-20 border-b lg:border-b-0 lg:border-r border-white/5 bg-white/[0.01] order-1 lg:order-1 w-full">
              <div className="space-y-10 max-w-xl">
                <div>
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="flex flex-wrap items-center gap-6 text-[10px] text-accent font-black uppercase tracking-widest mb-6"
                  >
                    <span className="flex items-center gap-2"><User className="h-4 w-4" /> {book.author}</span>
                    <span className="flex items-center gap-2"><Calendar className="h-4 w-4" /> {book.publishDate}</span>
                  </motion.div>

                  <h2 className="text-xl sm:text-2xl md:text-4xl lg:text-6xl font-display font-black leading-tight text-black tracking-tighter">
                    {book.title.split(' ').slice(0, -1).join(' ')} <span className="">{book.title.split(' ').pop()}</span>
                  </h2>

                  {book.subtitle && (
                    <p className="mt-6 text-base sm:text-lg md:text-2xl text-muted-foreground font-semibold leading-snug">
                      {book.subtitle}
                    </p>
                  )}
                </div>

                <p className="text-lg text-muted-foreground leading-relaxed font-medium">
                  {book.description}
                </p>

                {/* DESKTOP BUTTONS */}
                <div className="hidden lg:flex flex-wrap items-center gap-6 pt-10">
                  <button 
                    onClick={handleAddToCart}
                    disabled={cart.some(b => b.title === book.title)}
                    className="group relative inline-flex items-center justify-center gap-4 px-10 py-5 rounded-2xl bg-[#252121] text-white font-black text-lg transition-all duration-300 hover:bg-primary hover:text-black disabled:opacity-50 shadow-soft hover:shadow-glow"
                  >
                    {added ? <Check className="h-6 w-6" /> : <ShoppingCart className="h-6 w-6" />}
                    {cart.some(b => b.title === book.title) ? "In Cart" : "Buy Now"}
                  </button>
                  
                  <button 
                    onClick={() => toggleFavorite(book)}
                    className={`flex items-center gap-3 px-10 py-5 rounded-2xl border-2 border-[#252121] font-black text-lg transition-all duration-300 hover:bg-primary hover:border-primary hover:text-black ${isFavorite(book.id) ? "text-primary border-primary" : "text-[#252121]"}`}
                  >
                    <Heart className={`h-6 w-6 ${isFavorite(book.id) ? "fill-primary text-primary" : ""}`} />
                    {isFavorite(book.id) ? "Favorited" : "Save"}
                  </button>

                  <Link href={`/books/${book.id}`}>
                    <button className="px-10 py-5 rounded-2xl border-2 border-[#252121] text-[#252121] font-black text-lg h-auto transition-all duration-300 hover:bg-primary hover:border-primary hover:text-black group">
                      Details <Info className="ml-2 w-5 h-5 group-hover:scale-110 transition-transform" />
                    </button>
                  </Link>
                </div>
              </div>
            </div>

            {/* IMAGE & Benefits Side - Order 2 on mobile, 2 on desktop */}
            <div className="p-8 lg:p-16 flex flex-col items-center order-2 lg:order-2 w-full">
              <motion.div 
                initial={{ opacity: 0, scale: 0.9, rotate: 2 }}
                whileInView={{ opacity: 1, scale: 1, rotate: 2 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative aspect-[3/4.5] w-full max-w-[320px] mb-16"
              >
                {/* Book Shadow for depth */}
                <div className="absolute -inset-4 bg-accent/10 blur-[40px] rounded-full opacity-50" />
                
                {book.image ? (
                  <div className="relative w-full h-full rounded-lg overflow-hidden shadow-[20px_20px_60px_-15px_rgba(0,0,0,0.7)] transform-gpu transition-all duration-700 group-hover:rotate-0">
                    <img
                      src={book.image}
                      alt={book.title}
                      loading="lazy"
                      className="w-full h-full object-contain bg-white/5"
                    />
                    {/* Subtle Spine Shine */}
                    <div className="absolute inset-0 bg-gradient-to-r from-white/10 via-transparent to-transparent pointer-events-none" />
                  </div>
                ) : (
                  <div className="w-full h-full bg-slate-900 flex items-center justify-center rounded-xl">
                     <span className="text-accent font-bold uppercase tracking-widest text-xs">No Cover</span>
                  </div>
                )}
              </motion.div>

              {/* Benefits in boxes below image (Single line on desktop) */}
              {book.benefits && (
                <div className="w-full space-y-4">
                  <div className="flex items-center gap-3 mb-6">
                    <Sparkles className="w-4 h-4 text-accent" />
                    <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-muted-foreground">Key Benefits</h4>
                    <div className="h-px flex-1 bg-gradient-to-r from-white/10 to-transparent" />
                  </div>
                  <div className="flex flex-wrap justify-center gap-3">
                    {book.benefits.map((benefit, i) => (
                      <motion.div
                        key={benefit}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 + i * 0.1 }}
                        className="px-5 py-3 rounded-xl bg-accent/5 border border-accent/20 flex items-center gap-3 transition-colors hover:bg-accent/10 group"
                      >
                        <Check className="w-4 h-4 text-accent group-hover:scale-125 transition-transform" />
                        <span className="text-xs font-bold text-foreground/90">{benefit}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* MOBILE BUTTONS - Order 3 on mobile */}
            <div className="order-3 lg:hidden p-8 pt-0 w-full flex flex-col sm:flex-row items-center gap-4 justify-center">
              <button 
                onClick={handleAddToCart}
                disabled={cart.some(b => b.title === book.title)}
                className="group relative inline-flex items-center justify-center gap-4 px-10 py-5 rounded-2xl bg-[#252121] text-white font-black text-lg transition-all duration-300 hover:bg-primary hover:text-black disabled:opacity-50 shadow-soft w-full sm:w-auto"
              >
                {added ? <Check className="h-6 w-6" /> : <ShoppingCart className="h-6 w-6" />}
                {cart.some(b => b.title === book.title) ? "In Cart" : "Buy Now"}
              </button>
              
              <button 
                onClick={() => toggleFavorite(book)}
                className={`flex items-center justify-center gap-3 px-10 py-5 rounded-2xl border-2 border-[#252121] font-black text-lg transition-all duration-300 w-full sm:w-auto ${isFavorite(book.id) ? "text-primary border-primary" : "text-[#252121]"}`}
              >
                <Heart className={`h-6 w-6 ${isFavorite(book.id) ? "fill-primary text-primary" : ""}`} />
                {isFavorite(book.id) ? "Favorited" : "Save"}
              </button>

              <Link href={`/books/${book.id}`} className="w-full sm:w-auto">
                <button className="px-10 py-5 rounded-2xl border-2 border-[#252121] text-[#252121] font-black text-lg h-auto transition-all duration-300 hover:bg-primary hover:border-primary hover:text-black group w-full">
                  Details <Info className="ml-2 w-5 h-5 group-hover:scale-110 transition-transform" />
                </button>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Global Spacing Divider */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80%] h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </section>
  );
};
