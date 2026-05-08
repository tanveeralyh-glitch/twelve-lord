"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Heart, ShoppingCart } from "lucide-react";
import { useAppState } from "@/context/AppStateContext";
import { Book } from "@/lib/data";
import { motion } from "framer-motion";

interface BookListProps {
  books: Book[];
}

export const BookList = ({ books }: BookListProps) => {
  const { addToCart, toggleFavorite, isFavorite } = useAppState();

  return (
    <div className="space-y-24 sm:space-y-40">
      {books.map((book) => (
        <div
          key={book.id}
          className="flex flex-col lg:flex-row gap-10 sm:gap-12 lg:gap-24 items-start"
        >
          {/* Book Cover */}
          <div className="w-full lg:w-[340px] shrink-0">
            <div className="relative aspect-[2/3] shadow-premium rounded-sm overflow-hidden bg-secondary/20 group cursor-pointer max-w-[400px] mx-auto lg:mx-0">
              <Image
                src={book.image}
                alt={book.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500" />
              
              {/* Over-image actions - Visible on mobile for better UX */}
              <div className="absolute top-4 right-4 flex flex-col gap-2 opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity">
                <button 
                  onClick={(e) => {
                    e.preventDefault();
                    toggleFavorite(book);
                  }}
                  className={`h-11 w-11 rounded-full flex items-center justify-center transition-all shadow-md ${
                    isFavorite(book.id) ? "bg-primary text-white" : "bg-white/90 text-foreground hover:bg-primary hover:text-white"
                  }`}
                >
                  <Heart className={`h-5 w-5 ${isFavorite(book.id) ? "fill-current" : ""}`} />
                </button>
              </div>
            </div>
          </div>

          {/* Book Details */}
          <div className="flex-1 space-y-6 sm:space-y-8 w-full text-center lg:text-left">
            <div className="space-y-3">
              <span className="text-primary font-bold tracking-[0.2em] uppercase text-[10px] sm:text-xs block">
                {book.genre || "Featured Publication"}
              </span>
              <h2 className="font-extrabold tracking-tight leading-[1.1] uppercase">
                {book.title}
              </h2>
              <div className="text-base sm:text-lg font-bold text-foreground/80">
                By {book.author}
              </div>
            </div>

            <p className="text-foreground/70 leading-relaxed max-w-3xl mx-auto lg:mx-0">
              {book.description}
            </p>

            <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center lg:justify-start gap-4 sm:gap-6 pt-4">
              <Link
                href={`/books/${book.id}`}
                className="inline-flex items-center justify-center gap-3 border-b-2 border-primary pb-2 text-base sm:text-lg font-bold hover:gap-5 transition-all w-full sm:w-auto"
              >
                READ BOOK <ArrowRight className="h-5 w-5" />
              </Link>
              
              <button 
                onClick={() => addToCart(book)}
                className="btn-primary flex items-center justify-center gap-3 px-8 py-3 rounded-full w-full sm:w-auto"
              >
                <ShoppingCart className="h-5 w-5" />
                ADD TO CART
              </button>

              <button 
                onClick={() => toggleFavorite(book)}
                className={`h-12 w-12 rounded-full hidden sm:flex items-center justify-center border-2 transition-all ${
                  isFavorite(book.id) 
                    ? "border-primary bg-primary text-white" 
                    : "border-border text-foreground hover:border-primary hover:text-primary"
                }`}
              >
                <Heart className={`h-5 w-5 ${isFavorite(book.id) ? "fill-current" : ""}`} />
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
