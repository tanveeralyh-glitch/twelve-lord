"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, Heart, Trash2, BookOpen } from "lucide-react";
import { useAppState } from "@/context/AppStateContext";
import Image from "next/image";
import Link from "next/link";

export const FavoritesDrawer = () => {
  const { favorites, isFavoritesOpen, setIsFavoritesOpen, toggleFavorite } = useAppState();

  return (
    <AnimatePresence>
      {isFavoritesOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsFavoritesOpen(false)}
            className="fixed inset-0 bg-background/80 backdrop-blur-sm z-[110]"
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 h-full w-full max-w-md bg-card border-l border-white/5 shadow-2xl z-[120] flex flex-col"
          >
            {/* Header */}
            <div className="p-8 border-b border-white/5 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Heart className="w-5 h-5 text-primary fill-current" />
                <h2 className="text-xl font-display font-black uppercase tracking-widest text-foreground">
                  Your <span className="text-primary underline decoration-primary/20">Favorites</span>
                </h2>
              </div>
              <button
                onClick={() => setIsFavoritesOpen(false)}
                className="p-3 rounded-xl hover:bg-white/5 text-muted-foreground hover:text-foreground transition-all"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Items List */}
            <div className="flex-1 overflow-y-auto p-8 space-y-6">
              {favorites.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center space-y-6">
                  <div className="p-8 rounded-[2.5rem] bg-secondary/30 text-muted-foreground/20">
                    <Heart className="w-20 h-20" />
                  </div>
                  <div className="space-y-2">
                    <p className="text-lg font-bold text-foreground">No favorites yet</p>
                    <p className="text-sm text-muted-foreground max-w-[200px]">Save your favorite books to read them later.</p>
                  </div>
                  <button 
                    onClick={() => setIsFavoritesOpen(false)}
                    className="text-primary font-black text-xs uppercase tracking-widest hover:underline"
                  >
                    Start Exploring
                  </button>
                </div>
              ) : (
                favorites.map((item) => (
                  <motion.div
                    key={item.id}
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="flex gap-4 p-4 rounded-2xl bg-white/[0.02] border border-white/5 group"
                  >
                    <div className="relative w-20 h-24 rounded-lg overflow-hidden bg-secondary">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0 flex flex-col justify-between">
                      <div className="space-y-1">
                        <h4 className="font-bold text-foreground truncate text-sm">
                          {item.title}
                        </h4>
                        <p className="text-[10px] text-muted-foreground uppercase tracking-widest">
                          {item.author}
                        </p>
                      </div>
                      <div className="flex items-center gap-4">
                        <Link
                          href={`/books/${item.id}`}
                          onClick={() => setIsFavoritesOpen(false)}
                          className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-primary hover:underline transition-colors"
                        >
                          <BookOpen className="w-3.5 h-3.5" /> View
                        </Link>
                        <button
                          onClick={() => toggleFavorite(item)}
                          className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-muted-foreground hover:text-red-400 transition-colors"
                        >
                          <Trash2 className="w-3.5 h-3.5" /> Remove
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))
              )}
            </div>

            {/* Footer */}
            <div className="p-8 border-t border-white/5 bg-white/[0.01]">
              <button
                onClick={() => setIsFavoritesOpen(false)}
                className="w-full py-4 rounded-xl border border-white/10 text-xs font-black uppercase tracking-widest hover:bg-white/5 transition-all"
              >
                Continue Browsing
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
