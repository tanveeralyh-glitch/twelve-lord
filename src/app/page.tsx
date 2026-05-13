import { Hero } from "@/components/Hero";
import { Tech } from "@/components/Tech";
import { VideoSection } from "@/components/VideoSection";
import { BookSection } from "@/components/BookSection";
import { FullCoverSection } from "@/components/FullCoverSection";
import { Articles } from "@/components/Articles";

export default function Home() {
  return (
    <main>
      <Hero />
      <BookSection />
      <FullCoverSection />
      <Articles />
      <VideoSection />
      <Tech />
    </main>
  );
}
