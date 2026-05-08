"use client";

import { PageHero } from "@/components/PageHero";
import { ArticleHighlight } from "@/components/ArticleHighlight";
import { ArticleCard } from "@/components/ArticleCard";
import { articles } from "@/lib/data";

export default function ArticlesPage() {
  return (
    <main className="min-h-screen bg-background text-foreground pt-20 pb-20">
      {/* Latest Article (Unchanged) */}
      <ArticleHighlight
        heading="Latest Article"
        articleTitle="As Cyber Threats Accelerate, Human Awareness Remains the Critical Weakness"
        description="Despite massive investments in security technology, 90% of breaches still involve human error. Explore why organizational culture is your ultimate firewall."
        imagePath="/cybersecurity-featured.png"
        link="/articles/cyber-threats-awareness"
        showMoreLink={false}
      />

      {/* New Article (Added Below) */}
      <ArticleHighlight
        heading="Social Analysis"
        articleTitle="A Generation Under Fear: How Corporal Punishment Is Quietly Damaging Pakistan’s Youth"
        description="Every generation is told it is the future of the nation. But what happens when that future is shaped not by curiosity and confidence, but by fear? Across many schools and madrassas in Pakistan, corporal punishment remains an embedded part of discipline, leaving lasting psychological scars on the nation's youth."
        imagePath="/images/article.jpg"
        link="/articles/pakistan-corporal-punishment"
        showMoreLink={false}
      />

      {/* Article 3 (Added Below) */}
      <ArticleHighlight
        heading="Educational Critique"
        articleTitle="9AM Exams Are Failing Students — And We Know It"
        description="At 9:00 a.m. sharp, millions of students sit in a heavy silence, staring at exam papers that will shape their lives. But is this standardised system truly fair, or is it merely testing how well a student can perform while half-asleep?"
        imagePath="/images/article.jpg"
        link="/articles/9am-exams-failing-students"
        showMoreLink={false}
      />
    </main>
  );
}
