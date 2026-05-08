"use client";

import React from "react";
import { PageHero } from "@/components/PageHero";
import { BookCard } from "@/components/BookCard";
import { useAppState } from "@/context/AppStateContext";
import { Heart, BookOpen } from "lucide-react";
import Link from "next/link";

export default function FavoritesPage() {
  const { favorites } = useAppState();

  return (
    <main className="min-h-screen pb-20">
      <PageHero 
        title="Your Favorites" 
        subtitle="The books and ideas you've saved for later."
        type="books" 
      />

      <section className="py-20">
        <div className="container-tight">
          {favorites.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {favorites.map((book, i) => (
                <BookCard key={book.title} book={book} index={i} showButtons={true} />
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center py-20 text-center">
              <div className="h-20 w-20 rounded-full bg-secondary flex items-center justify-center mb-6">
                <Heart className="h-10 w-10 text-muted-foreground/40" />
              </div>
              <h2 className="text-2xl font-display font-bold mb-3">No favorites yet</h2>
              <p className="text-muted-foreground max-w-sm mb-8">
                Explore our collection and save the books that inspire you the most.
              </p>
              <Link 
                href="/books" 
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-accent text-accent-foreground font-semibold hover:scale-105 transition-all"
              >
                <BookOpen className="h-5 w-5" />
                Browse Books
              </Link>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
