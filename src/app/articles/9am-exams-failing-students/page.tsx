import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function ExamsArticle() {
  return (
    <article className="min-h-screen bg-background pt-[140px] pb-24">
      <div className="container-tight px-6">
        {/* Back Link */}
        <Link 
          href="/articles" 
          className="inline-flex items-center gap-2 text-primary font-bold tracking-widest uppercase text-xs hover:gap-3 transition-all mb-12 px-[20px] py-[10px] bg-primary/5 rounded-full mt-[20px]"
        >
          <ArrowLeft className="w-4 h-4" />
          BACK TO ARTICLES
        </Link>

        {/* Article Header */}
        <header className="max-w-4xl mb-16">
          <span className="text-primary font-bold tracking-[0.2em] uppercase text-xs mb-4 block">
            Educational Critique
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold leading-[1.1] tracking-tight mb-8">
            9AM Exams Are Failing Students — And We Know It
          </h1>
          <div className="flex items-center gap-4 text-foreground/60 text-sm font-medium border-t border-border pt-8">
            <span>By Lumina Press Editorial</span>
            <span className="w-1 h-1 rounded-full bg-border" />
            <span>April 21, 2024</span>
            <span className="w-1 h-1 rounded-full bg-border" />
            <span>10 min read</span>
          </div>
        </header>

        {/* Article Content */}
        <div className="max-w-3xl prose prose-lg dark:prose-invert">
          <p className="text-xl md:text-2xl font-medium leading-relaxed text-foreground/90 mb-10">
            At 9:00 a.m. sharp, millions of students sit in a heavy, collective silence, staring at exam papers that will shape the trajectory of their adult lives. We are told this system represents fairness at its highest level—a standardised, meritocratic “level playing field” where effort and ability determine outcomes.
          </p>

          {/* Image 1: Ancient Exams */}
          <figure className="my-16">
            <div className="relative aspect-[16/9] rounded-2xl overflow-hidden border border-border shadow-premium bg-secondary/20">
              <Image 
                src="/images/article.jpg" 
                alt="Ancient Chinese examination halls" 
                fill 
                className="object-cover opacity-80"
              />
            </div>
            <figcaption className="mt-4 text-sm text-foreground/60 text-center">
              Historical roots: The traditional examination model has changed little since its origins in scholarly halls.
            </figcaption>
          </figure>

          <p>
            But as our understanding of human biology and cognitive science has advanced, a glaring contradiction has emerged. The very structure of high-stakes morning examinations may be creating an invisible, biological bias that penalises a significant portion of the student population—regardless of their intelligence or preparation.
          </p>

          <p>
            Standardised exams are designed to measure knowledge and aptitude. However, by scheduling them early in the morning, we are inadvertently testing something else entirely: a student’s biological clock.
          </p>

          <p>
            The circadian rhythm—the internal clock that regulates sleep-wake cycles—undergoes a dramatic shift during adolescence and early adulthood. Research consistently shows that teenagers and young adults have a natural tendency toward later sleep and wake times. For many, 9:00 a.m. is a time when their brains are still in a physiological state of rest.
          </p>

          {/* Image 2: Modern 9AM Exams */}
          <figure className="my-16">
            <div className="relative aspect-[16/9] rounded-2xl overflow-hidden border border-border shadow-premium bg-secondary/20">
              <Image 
                src="/images/article.jpg" 
                alt="Modern exam hall with tired students" 
                fill 
                className="object-cover"
              />
            </div>
            <figcaption className="mt-4 text-sm text-foreground/60 text-center">
              The modern reality: Students performing high-stakes cognitive tasks while battling biological sleep pressure.
            </figcaption>
          </figure>

          <p>
            This isn't just about feeling "groggy." It's about executive function, memory recall, and processing speed—all of which are compromised when the brain is forced to perform at peak capacity before its natural wake window.
          </p>

          <p>
            When we ignore these biological realities, we undermine the very meritocracy we claim to uphold. If a student with the same level of knowledge performs worse simply because their brain functions better at 2:00 p.m. than at 9:00 a.m., the exam has failed as a fair measure of ability.
          </p>

          <blockquote className="border-l-4 border-primary pl-6 my-12 text-2xl font-semibold text-foreground">
            "It is bias, dressed up as fairness."
          </blockquote>

          <p>
            It is time to reconsider how we evaluate the next generation. A system that ignores the fundamental biology of the human brain is not a system of excellence; it is a system of convenience.
          </p>

          <p>
            It is not a pure test of knowledge or ability.
          </p>
          <p>
            It is a test of how well a student can perform while half-asleep.
          </p>
          <p>
            And that is not education.
          </p>
          <p className="text-xl font-bold mt-12 border-t border-border pt-12">
            It is bias, dressed up as fairness.
          </p>
        </div>
      </div>
    </article>
  );
}
