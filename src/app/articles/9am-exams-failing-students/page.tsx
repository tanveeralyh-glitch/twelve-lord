"use client";

import React from "react";
import { articles } from "@/lib/data";
import { Play, ArrowRight, Youtube, Instagram, Facebook, Linkedin } from "lucide-react";
import Link from "next/link";

const XIcon = (props: React.ComponentPropsWithoutRef<"svg">) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24h-2.19L17.61 20.644Z" />
  </svg>
);

export default function ArticlePage() {
  const article = articles.find((a) => a.slug === "9am-exams-failing-students");

  if (!article) return null;

  return (
    <main className="min-h-screen bg-[#F5F5F5] pt-32 pb-24 selection:bg-black selection:text-white">
      <div className="max-w-[1240px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-[1fr,400px] gap-16 lg:gap-24">
        {/* Main Content Column */}
        <div className="space-y-12">
          <header className="space-y-10">
            <h1 className="text-[48px] md:text-[76px] font-bold text-[#1A1A1A] leading-[1.02] tracking-tightest font-sans">
              {article.title}
            </h1>
            
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-[12px] font-bold uppercase tracking-[0.2em] text-black">
                <span>written by</span>
                <span className="text-black font-black">{article.author}</span>
              </div>
              <div className="flex items-center gap-3 text-[12px] font-bold uppercase tracking-[0.2em] text-black">
                <span>filed under</span>
                <div className="flex items-center gap-2 text-black font-black">
                  {article.category.toUpperCase()} 
                  {article.tags && article.tags.length > 0 && (
                    <>
                      <span className="text-black/30 font-normal">|</span>
                      {article.tags.join(" | ")}
                    </>
                  )}
                </div>
              </div>
            </div>

            <button className="flex items-center gap-4 px-8 py-4 border-2 border-[#1A1A1A] rounded-full font-black uppercase tracking-widest text-[12px] hover:bg-[#1A1A1A] hover:text-white transition-all group mt-8">
              <div className="w-6 h-6 rounded-full bg-[#1A1A1A] flex items-center justify-center text-white group-hover:bg-white group-hover:text-black transition-colors">
                <Play className="w-3 h-3 fill-current ml-0.5" />
              </div>
              Listen to this article
            </button>

            <div className="w-full h-[2px] bg-black mt-16" />
          </header>

          <article className="max-w-none">
             <div className="font-playfair text-[20px] md:text-[22px] leading-[1.85] text-black space-y-10">
               <p className="first-letter:text-[100px] first-letter:font-bold first-letter:text-black first-letter:float-left first-letter:mr-6 first-letter:mt-4 first-letter:leading-[0.6] font-playfair">
                 {article.content?.split('\n\n')[0]}
               </p>
               {article.content?.split('\n\n').slice(1).map((para, i) => {
                 const isReferencesHeader = para.trim().toUpperCase() === "REFERENCES:";
                 if (isReferencesHeader) {
                   return (
                     <h2 key={i} className="text-xl font-bold text-[#1A1A1A] mt-20 mb-6 tracking-widest uppercase border-b-2 border-black pb-2 inline-block font-sans">
                       References
                     </h2>
                   );
                 }

                 const isHeader = para.length < 60 && !para.includes('.') && !para.includes(',');
                 if (isHeader) {
                   return (
                     <h2 key={i} className="text-3xl font-bold text-[#1A1A1A] mt-16 mb-8 tracking-tight font-sans">
                       {para}
                     </h2>
                   );
                 }
                 
                 const isReferenceItem = article.content?.includes("REFERENCES:") && i > article.content.split('\n\n').findIndex(p => p.trim().toUpperCase() === "REFERENCES:");

                 return (
                   <p key={i} className={`font-playfair ${isReferenceItem ? "text-[15px] text-gray-500 leading-relaxed mb-4" : ""}`}>
                     {para}
                   </p>
                 );
               })}
             </div>
          </article>

          {/* Newsletter Signup Section */}
          <section className="mt-24 pt-16 border-t-2 border-black space-y-10">
            <h2 className="text-3xl md:text-4xl font-black text-[#1A1A1A] uppercase tracking-tight font-sans">
              GET YOUR SHIT TOGETHER — HERE’S HOW
            </h2>
            <p className="text-lg md:text-xl text-[#333] font-playfair leading-relaxed max-w-2xl">
              Enter your email address below and I’ll send you a 55-page guide showing you how to develop rock-solid self-discipline and healthy habits that last.
            </p>
            
            <div className="relative max-w-2xl">
              <form onSubmit={(e) => e.preventDefault()} className="relative flex items-center">
                <input
                  type="email"
                  placeholder="Your Email Address"
                  className="w-full bg-white border-2 border-[#1A1A1A] rounded-full py-5 px-8 text-[16px] font-medium text-black focus:outline-none"
                />
                <button
                  type="submit"
                  className="absolute right-1.5 top-1.5 bottom-1.5 bg-[#1A1A1A] text-white px-8 rounded-full text-[12px] font-black uppercase tracking-widest hover:bg-black/90 transition-colors"
                >
                  GET EBOOK
                </button>
              </form>
            </div>

            <p className="text-[14px] italic text-[#666] font-playfair">
              Your information is protected and I never spam, ever. You can view my privacy policy <a href="#" className="underline hover:text-black">here</a>.
            </p>
          </section>
        </div>

        {/* Sidebar Column */}
        <aside className="lg:border-l-2 lg:border-black lg:pl-20 space-y-16">
          <div className="space-y-8">
            <h3 className="text-[12px] font-bold uppercase tracking-[0.3em] text-black">
              About the Author
            </h3>
            
            <p className="text-[16px] leading-[1.8] text-black font-playfair italic">
              {article.authorBio}
            </p>

            <Link 
              href="/about" 
              className="flex items-center gap-4 group pt-2"
            >
              <div className="w-10 h-10 bg-[#1A1A1A] rounded-full flex items-center justify-center text-white group-hover:scale-110 transition-transform shrink-0 shadow-lg shadow-black/10">
                <ArrowRight className="w-5 h-5" />
              </div>
              <span className="text-[11px] font-black uppercase tracking-[0.2em] text-[#1A1A1A] border-b-2 border-transparent group-hover:border-black transition-all">
                Learn more about {article.author.split(' ').map(n => n.charAt(0).toUpperCase() + n.slice(1).toLowerCase())[0]}
              </span>
            </Link>
          </div>

          <div className="pt-12 flex gap-4 border-t-2 border-black">
            <SocialIcon icon={<Youtube className="w-4 h-4" />} />
            <SocialIcon icon={<Instagram className="w-4 h-4" />} />
            <SocialIcon icon={<XIcon className="w-4 h-4" />} />
            <SocialIcon icon={<Facebook className="w-4 h-4" />} />
            <SocialIcon icon={<Linkedin className="w-4 h-4" />} />
          </div>
        </aside>
      </div>
    </main>
  );
}

function SocialIcon({ icon }: { icon: React.ReactNode }) {
  return (
    <a 
      href="#" 
      className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center text-gray-500 hover:bg-[#1A1A1A] hover:text-white transition-all shadow-sm"
    >
      {icon}
    </a>
  );
}
