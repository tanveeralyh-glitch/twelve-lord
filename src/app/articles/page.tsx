"use client";

import { ArticleHero } from "@/components/ArticleHero";
import { LatestArticles } from "@/components/LatestArticles";
import { ArticlesByDate } from "@/components/ArticlesByDate";
import { Newsletter } from "@/components/Newsletter";
import { articles } from "@/lib/data";

export default function ArticlesPage() {
  // Group articles by category for the category sections
  const philosophyArticles = articles.filter(a => a.category === "Philosophy").slice(0, 3);
  const productivityArticles = articles.filter(a => a.category === "Productivity").slice(0, 3);
  const cultureArticles = articles.filter(a => a.category === "Culture").slice(0, 3);
  const techArticles = articles.filter(a => a.category === "Tech").slice(0, 3);
  
  // Latest articles (first 8)
  const latestArticles = [...articles].sort((a, b) => 
    new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime()
  ).slice(0, 8);

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section (includes search bar) */}
      <ArticleHero />

      {/* Latest Articles Section */}
      <LatestArticles articles={latestArticles} />

      <Newsletter />

      {/* Articles By Date Section */}
      <ArticlesByDate />
    </main>
  );
}

