import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { books as localBooks } from "@/lib/data";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Books | Twelve Lords Publishing",
  description: "Curated insights from philosophy, technology, and modern strategy.",
};

// Types for Google Books API
interface GoogleBook {
  id: string;
  volumeInfo: {
    title: string;
    authors?: string[];
    description?: string;
    imageLinks?: {
      thumbnail: string;
    };
    infoLink: string;
  };
}

async function getExternalBooks() {
  try {
    // Fetching relevant books from Google Books API
    const res = await fetch(
      "https://www.googleapis.com/books/v1/volumes?q=subject:philosophy+cybersecurity&maxResults=10",
      { next: { revalidate: 3600 } } // Cache for 1 hour
    );
    const data = await res.json();
    return data.items || [];
  } catch (error) {
    console.error("Error fetching books:", error);
    return [];
  }
}

import { PageHero } from "@/components/PageHero";
import { BookList } from "@/components/BookList";

export default async function BooksPage() {
  return (
    <main className="min-h-screen bg-background text-foreground pt-20 pb-24">
      <PageHero 
        title="Bookshelf" 
        subtitle="Exploring the timeless struggle for self-mastery through curated insights."
        type="books" 
      />

      {/* Books List Section */}
      <section className="container-tight px-6 mt-12">
        <BookList books={localBooks} />
      </section>
    </main>
  );
}
