import { Quote, Star } from "lucide-react";

const testimonials = [
  { name: "James Sterling", role: "Security Architect", text: "Twelve Lords has redefined how we approach digital sovereignty. Their insights are indispensable." },
  { name: "Sarah Chen", role: "CTO, Nexus Dynamics", text: "The cleanest reading experience on the web. A must-read for anyone in the tech leadership space." },
  { name: "David Miller", role: "Cybersecurity Analyst", text: "Beautiful typography and thoughtful defaults. It's rare to find a platform that respects the reader's focus." },
  { name: "Elena Rodriguez", role: "Independent Researcher", text: "Their deep dives into systems and complexity provide a level of clarity that is hard to find elsewhere." },
  { name: "Marcus Thorne", role: "Systems Engineer", text: "It feels premium and authoritative. Every detail, from the content to the hardware, is meticulously considered." },
  { name: "Sophie Al-Fayed", role: "Digital Rights Advocate", text: "Twelve Lords isn't just a publisher; they're building the infrastructure for a more secure digital future." },
];

const Card = ({ t }: { t: typeof testimonials[number] }) => (
  <div className="w-[280px] sm:w-[340px] shrink-0 card-premium mx-2 sm:mx-3 flex flex-col justify-between transition-transform duration-500 hover:-translate-y-1">
    <div>
      <Quote className="h-5 sm:h-6 w-5 sm:w-6 text-primary mb-4 sm:mb-6 opacity-50" />
      <p className="text-foreground/90 text-sm sm:text-base leading-relaxed font-medium">"{t.text}"</p>
    </div>
    <div className="mt-6 sm:mt-8 flex items-center justify-between border-t border-border/50 pt-4 sm:pt-6">
      <div>
        <div className="font-bold text-[14px] sm:text-[15px] tracking-tight">{t.name}</div>
        <div className="text-[10px] sm:text-xs font-bold text-primary/80 uppercase tracking-widest">{t.role}</div>
      </div>
      <div className="flex gap-0.5 text-primary">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} className="h-3 w-3 fill-current" />
        ))}
      </div>
    </div>
  </div>
);

export const Testimonials = () => {
  const row = [...testimonials, ...testimonials];
  return (
    <section className="section-padding bg-secondary/10 overflow-hidden hidden md:block">
      <div className="container-tight text-center mb-12 sm:mb-16 px-4 sm:px-6">
        <span className="text-primary font-bold tracking-[0.2em] uppercase text-[10px] sm:text-xs mb-4 block">
          Endorsements
        </span>
        <h2 className="text-balance leading-tight font-display">Trusted by world-class security professionals.</h2>
      </div>

      <div className="relative">
        {/* Fade edges */}
        <div className="absolute inset-y-0 left-0 w-16 sm:w-32 bg-gradient-to-r from-secondary/10 to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-16 sm:w-32 bg-gradient-to-l from-secondary/10 to-transparent z-10 pointer-events-none" />

        <div className="flex animate-marquee-slow will-change-transform overflow-x-auto scroll-smooth no-scrollbar py-4">
          {row.map((t, i) => <Card key={i} t={t} />)}
        </div>
        {/* Only show second row on larger screens */}
        <div className="hidden sm:flex animate-marquee-slow will-change-transform mt-8 overflow-x-auto scroll-smooth no-scrollbar py-4" style={{ animationDirection: "reverse" }}>
          {row.map((t, i) => <Card key={`b-${i}`} t={t} />)}
        </div>
      </div>
    </section>
  );
};
