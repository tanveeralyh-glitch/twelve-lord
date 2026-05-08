"use client";

import { useParams, useRouter } from "next/navigation";
import { books } from "@/lib/data";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { 
  ArrowLeft, 
  ShoppingCart, 
  Heart, 
  Check, 
  Calendar, 
  User, 
  Tag, 
  Sparkles,
  ShieldCheck,
  Zap,
  Info
} from "lucide-react";
import Image from "next/image";
import { useState, useMemo } from "react";
import { useAppState } from "@/context/AppStateContext";

export default function BookDetailPage() {
  const { slug } = useParams();
  const router = useRouter();
  const { toggleFavorite, addToCart, isFavorite, cart } = useAppState();
  const [added, setAdded] = useState(false);
  
  // Find the book by slug
  const book = useMemo(() => books.find(b => b.id === slug), [slug]);
  
  const [activeImage, setActiveImage] = useState(book?.image || "");

  if (!book) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-display font-bold">Book Not Found</h1>
          <Button onClick={() => router.push('/books')} variant="ghost">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Library
          </Button>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(book);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <main className="min-h-screen relative overflow-hidden">
      {/* Split Background */}
      <div className="absolute inset-0 flex flex-col lg:flex-row pointer-events-none">
        <div className="flex-1 bg-black" />
        <div className="flex-1 bg-white" />
      </div>

      <div className="container-tight relative z-10 pt-48 pb-20">
        {/* Navigation */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-10"
        >
          <Button 
            onClick={() => router.push('/books')} 
            variant="ghost" 
            className="group text-muted-foreground hover:bg-white hover:text-black transition-all px-6 py-3 rounded-xl flex items-center gap-2"
          >
            <ArrowLeft className="h-5 w-5 transition-transform group-hover:-translate-x-1" /> 
            <span className="font-bold uppercase tracking-widest text-sm text-white/60">Back to Library</span>
          </Button>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-16 items-start">
          {/* Left: Content (Black Side) */}
          <div className="space-y-12 order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <div className="flex flex-wrap items-center gap-4 text-[10px] text-accent font-black uppercase tracking-[0.2em]">
                <span className="px-3 py-1 bg-accent/10 border border-accent/20 rounded-full flex items-center gap-2">
                  <Tag className="w-3 h-3" /> {book.genre}
                </span>
                <span className="flex items-center gap-2 text-white/60"><User className="h-4 w-4" /> Author: {book.author}</span>
                <span className="flex items-center gap-2 text-white/60"><Calendar className="h-4 w-4" /> {book.publishDate}</span>
              </div>

              <h1 className="text-4xl md:text-7xl font-display font-black leading-tight text-white tracking-tighter shadow-sm whitespace-pre-line">
                {book.title}
              </h1>

              {book.subtitle && (
                <p className="text-xl md:text-3xl text-white/70 font-semibold leading-snug">
                  {book.subtitle}
                </p>
              )}

              <p className="text-lg md:text-xl text-white/60 leading-relaxed font-medium">
                {book.description}
              </p>
            </motion.div>

            {/* Benefits Highlight */}
            {book.benefits && (
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="grid gap-4"
              >
                <div className="flex items-center gap-3">
                   <Sparkles className="w-5 h-5 text-accent" />
                   <h3 className="text-xs font-black uppercase tracking-[0.3em] text-white">Core ADVANTAGES</h3>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {book.benefits.map((benefit) => (
                    <div key={benefit} className="flex items-center gap-4 px-6 py-4 rounded-2xl bg-white/5 border border-white/10 hover:border-accent/30 transition-colors group">
                      <div className="h-2 w-2 rounded-full bg-accent animate-pulse group-hover:scale-150 transition-transform" />
                      <span className="text-sm font-bold text-white/80">{benefit}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Detailed Sections (Rich Content) */}
            {book.sections && (
              <div className="space-y-12 border-t border-white/10 pt-12">
                {book.sections.map((section, idx) => (
                  <motion.div 
                    key={section.title}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 + idx * 0.1 }}
                    className="space-y-4"
                  >
                    <h2 className="text-2xl md:text-3xl font-display font-bold text-white">
                      {section.title}
                    </h2>
                    <div className="space-y-4">
                      {section.content.map((para, pIdx) => (
                        <p key={pIdx} className="text-white/60 leading-relaxed text-lg">
                          {para}
                        </p>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            )}

            {/* Call to Action */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="pt-10 flex flex-wrap items-center gap-6"
            >
              <button 
                onClick={handleAddToCart}
                disabled={cart.some(b => b.id === book.id)}
                className="group relative inline-flex items-center justify-center gap-4 px-12 py-6 rounded-2xl bg-accent text-white font-black text-xl transition-all hover:scale-105 hover:shadow-[0_0_40px_rgba(34,211,238,0.5)] disabled:opacity-50"
              >
                {added ? <Check className="h-6 w-6" /> : <ShoppingCart className="h-6 w-6" />}
                {cart.some(b => b.id === book.id) ? "Successfully Added" : "Purchase Now"}
              </button>
              
              <button 
                onClick={() => toggleFavorite(book)}
                className={`flex items-center gap-3 px-12 py-6 rounded-2xl border transition-all hover:bg-white/5 font-black text-xl ${
                  isFavorite(book.id) 
                  ? "text-accent bg-accent/5 border-accent/20" 
                  : "text-white border-white/10"
                }`}
              >
                <Heart className={`h-6 w-6 ${isFavorite(book.id) ? "fill-accent text-accent" : ""}`} />
                {isFavorite(book.id) ? "Favorited" : "Save Item"}
              </button>
            </motion.div>
          </div>

          {/* Right: Image Gallery (White Side) */}
          <div className="space-y-6 order-1 lg:order-2">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="relative aspect-[3/4] rounded-[2.5rem] overflow-hidden group"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeImage}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  className="w-full h-full"
                >
                  <Image
                    src={activeImage}
                    alt={book.title}
                    fill
                    className="object-contain p-8 md:p-12 mix-blend-multiply"
                    priority
                  />
                </motion.div>
              </AnimatePresence>
            </motion.div>

            {/* Thumbnails */}
            {book.gallery && book.gallery.length > 1 && (
              <div className="flex flex-wrap gap-4 justify-center">
                {book.gallery.map((img, i) => (
                  <motion.button
                    key={img}
                    onClick={() => setActiveImage(img)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className={`relative w-20 h-24 rounded-xl overflow-hidden border-2 transition-all shadow-lg ${
                      activeImage === img ? "border-accent ring-4 ring-accent/20" : "border-black/10 opacity-60 grayscale hover:grayscale-0 hover:opacity-100"
                    }`}
                  >
                    <Image
                      src={img}
                      alt={`${book.title} view ${i + 1}`}
                      fill
                      className="object-cover"
                    />
                  </motion.button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
