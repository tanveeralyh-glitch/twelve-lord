"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const YEARS = ["2025", "2024", "2023", "2022", "2021", "2020", "2019", "2018", "2017", "2016", "2015", "2014", "2013", "2012", "2011"];

const ARTICLES_BY_YEAR = {
  "2025": [
    { date: "DECEMBER 26", title: "4 Simple Steps to Change Your Life" },
    { date: "DECEMBER 19", title: "I Chose This Over $5 Million" },
    { date: "DECEMBER 12", title: "Purpose, the Untold Story" },
    { date: "DECEMBER 5", title: "The Problem With AI Life Coaching—and My Solution" },
  ],
  // Fallback for other years
  "default": [
    { date: "MAY 15", title: "Why We Do What We Do" },
    { date: "APRIL 22", title: "The Art of Saying No" },
    { date: "MARCH 08", title: "Building a Better Future" },
  ]
};

export const ArticlesByDate = () => {
  const [selectedYear, setSelectedYear] = useState("2025");

  const displayArticles = ARTICLES_BY_YEAR[selectedYear as keyof typeof ARTICLES_BY_YEAR] || ARTICLES_BY_YEAR.default;

  return (
    <section className="py-24 bg-[#DCE2E2]">
      <div className="container-tight px-6">
        <div className="mb-12">
          <h2 className="text-4xl sm:text-5xl font-display font-black text-black tracking-tight mb-8">
            Articles by Date
          </h2>

          <div className="space-y-4">
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-black/60">
              SELECT YEAR
            </span>
            
            <div className="relative">
              <div className="flex items-center gap-6 overflow-x-auto pb-4 scrollbar-hide no-scrollbar">
                {YEARS.map((year) => (
                  <button
                    key={year}
                    onClick={() => setSelectedYear(year)}
                    className={`shrink-0 text-lg font-bold transition-all ${
                      selectedYear === year 
                        ? "px-6 py-1.5 bg-transparent border-2 border-black rounded-full text-black" 
                        : "text-black/30 hover:text-black"
                    }`}
                  >
                    {year}
                  </button>
                ))}
              </div>
              {/* Custom Scrollbar Mockup */}
              <div className="h-2 w-full bg-white/30 rounded-full overflow-hidden mt-2 flex items-center px-1">
                <div className="h-1 w-2/3 bg-black/40 rounded-full" />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20">
          <h3 className="text-7xl sm:text-8xl font-display font-black text-black mb-12">
            {selectedYear}
          </h3>

          <div className="border-t border-black/20">
            {displayArticles.map((article, index) => (
              <div 
                key={index}
                className="flex items-center justify-between py-8 border-b border-black/20 group cursor-pointer"
              >
                <div className="w-48 text-xs font-black uppercase tracking-[0.1em] text-black/60 shrink-0">
                  {article.date}
                </div>
                
                <h4 className="flex-1 text-lg sm:text-xl font-bold text-black leading-tight">
                  {article.title}
                </h4>
                
                <div className="h-8 w-8 rounded-full bg-black flex items-center justify-center text-white shrink-0">
                  <ArrowRight className="h-4 w-4" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
