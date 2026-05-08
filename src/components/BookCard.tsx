"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Book as BookIcon, Calendar, Heart, ShoppingCart, Check } from "lucide-react";
import type { Book } from "@/lib/data";
import { useAppState } from "@/context/AppStateContext";
import { useState } from "react";

interface BookCardProps {
  book: Book;
  index?: number;
  showButtons?: boolean;
}

const keyPoints = [
  "Cyber Awareness",
  "Data Protection",
  "Digital Security",
  "Human Behavior",
];

export const BookCard = ({ book, index = 0, showButtons = false }: BookCardProps) => {
  const { toggleFavorite, addToCart, isFavorite, cart } = useAppState();
  const [added, setAdded] = useState(false);

  const handleAddToCart = () => {
    addToCart(book);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group bg-card border border-border rounded-2xl overflow-hidden hover:shadow-card-hover hover:-translate-y-1 transition-all duration-500"
    >
      <Link 
        href={`/books/${book.id}`}
        className="relative aspect-[3/4] overflow-hidden bg-secondary block"
      >
        {book.image ? (
          <img
            src={book.image}
            alt={book.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <BookIcon className="h-12 w-12 text-muted-foreground/30" />
          </div>
        )}
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 rounded-full bg-accent/90 text-accent-foreground text-[10px] font-bold uppercase tracking-wider backdrop-blur-sm">
            {book.genre}
          </span>
        </div>
      </Link>

      <div className="p-5">
        <div className="flex items-center gap-2 text-xs text-muted-foreground mb-2">
          <Calendar className="h-3 w-3" />
          <span>{book.publishDate}</span>
        </div>
        <Link href={`/books/${book.id}`}>
          <h3 className="font-display font-bold text-lg leading-tight transition-colors duration-300 text-black">
            {book.title.split(' ').slice(0, -1).join(' ')} <span className="">{book.title.split(' ').pop()}</span>
          </h3>
        </Link>
        <p className="text-sm font-medium text-foreground/80 mt-1">{book.author}</p>
        <p className="mt-3 text-sm text-muted-foreground line-clamp-2 leading-relaxed">
          {book.description}
        </p>

        {/* Key Points - Horizontal scrollable row */}
        <div className="mt-6 flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
          {keyPoints.map((point, i) => (
            <motion.div
              key={point}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.05 }}
              className="group flex-shrink-0 px-3 py-2 rounded-lg border border-border hover:border-accent/50 hover:shadow-sm transition-all duration-300 cursor-pointer"
            >
              <span className="text-xs font-medium text-muted-foreground group-hover:text-accent transition-colors text-nowrap">
                {point}
              </span>
            </motion.div>
          ))}
        </div>

        {showButtons && (
          <div className="mt-6 flex flex-col gap-3">
            <div className="flex items-center gap-3">
              <button 
                onClick={handleAddToCart}
                disabled={cart.some(b => b.id === book.id)}
                className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-full bg-[#252121] text-white text-sm font-bold transition-all duration-300 hover:bg-primary hover:text-black hover:shadow-glow disabled:opacity-50"
              >
                {added ? <Check className="h-4 w-4" /> : <ShoppingCart className="h-4 w-4" />}
                {cart.some(b => b.id === book.id) ? "In Cart" : "Buy Now"}
              </button>
              <button 
                onClick={() => toggleFavorite(book)}
                className={`inline-flex items-center justify-center h-10 w-10 rounded-lg border border-border hover:bg-secondary transition-all ${isFavorite(book.id) ? "bg-accent/10 border-accent/30" : ""}`}
                title={isFavorite(book.id) ? "Remove from Favorites" : "Add to Favorites"}
              >
                <Heart className={`h-4 w-4 transition-colors ${isFavorite(book.id) ? "fill-accent text-accent" : "text-muted-foreground hover:text-accent"}`} />
              </button>
            </div>
            
            <a 
              href={`/books/${book.id}`}
              className="w-full inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full border-2 border-[#252121] text-[#252121] text-xs font-bold transition-all duration-300 hover:bg-primary hover:border-primary hover:text-black"
            >
              View Full Details
            </a>
          </div>
        )}
      </div>
    </motion.div>
  );
};
