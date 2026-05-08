import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function CorporalPunishmentArticle() {
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
            Social Analysis
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold leading-[1.1] tracking-tight mb-8">
            A Generation Under Fear: How Corporal Punishment Is Quietly Damaging Pakistan’s Youth
          </h1>
          <div className="flex items-center gap-4 text-foreground/60 text-sm font-medium border-t border-border pt-8">
            <span>By Lumina Press Editorial</span>
            <span className="w-1 h-1 rounded-full bg-border" />
            <span>April 21, 2024</span>
            <span className="w-1 h-1 rounded-full bg-border" />
            <span>12 min read</span>
          </div>
        </header>

        {/* Article Content */}
        <div className="max-w-3xl prose prose-lg dark:prose-invert">
          <p className="text-xl md:text-2xl font-medium leading-relaxed text-foreground/90 mb-10">
            Every generation is told it is the future of the nation. In Pakistan, that idea is repeated often—by policymakers, by educators, and by parents. But what happens when that future is shaped not by curiosity and confidence, but by fear?
          </p>

          <p>
            Across many schools and madrassas in Pakistan, corporal punishment remains an embedded part of discipline. For countless children, the school day does not begin with learning, but with anxiety: the anticipation of humiliation, the threat of violence, and the quiet erosion of self-worth. Education, which should nurture potential, instead becomes a source of psychological strain.
          </p>

          <p>
            The scale of the issue is significant. A 2018 peer-reviewed study found that more than 90% of boys and over 60% of girls experienced corporal punishment within a four-week period in school. More recent research from 2023 in Khyber Pakhtunkhwa reported that approximately 83% of students in schools and madrassas had been subjected to physical punishment. These are not isolated figures—they reflect a broader system in which physical discipline is normalised rather than questioned.
          </p>

          <p>
            For many teachers, this reality is not always rooted in cruelty, but in pressure. Overcrowded classrooms, rigid academic expectations, and a lack of training in behavioural management often leave educators with few tools. In such environments, physical punishment becomes a shortcut—an immediate way to assert control. Yet what appears effective in the moment can have long-term consequences that extend far beyond the classroom.
          </p>

          <p>
            Research on childhood trauma offers a stark warning. Studies from institutions such as the Centers for Disease Control and Prevention and the World Health Organization show that adverse childhood experiences—including physical abuse, humiliation, and chronic fear—are strongly associated with mental health problems later in life. These include anxiety, depression, substance misuse, and even suicidal behaviour. More importantly, such experiences can alter how a child understands themselves and the world.
          </p>

          <p>
            A child repeatedly exposed to punishment and humiliation may begin to internalise damaging beliefs: that they are inadequate, that mistakes deserve pain, or that authority must be feared rather than respected. Over time, this can disrupt personality development itself. Emotional regulation becomes harder, self-esteem weakens, and relationships—both in childhood and adulthood—can be shaped by insecurity or distrust.
          </p>

          <p>
            Neuroscience reinforces this concern. Research highlighted by the Harvard Center on the Developing Child explains how prolonged exposure to stress in childhood—often referred to as “toxic stress”—can affect brain development, particularly in areas related to learning, memory, and emotional control. In simple terms, a child who learns in fear is not just emotionally affected; their ability to think, focus, and create may also be compromised.
          </p>

          <blockquote className="border-l-4 border-primary pl-6 my-12 text-2xl font-semibold text-foreground">
            "This raises a difficult question: how can a child be expected to learn effectively in an environment where they feel unsafe?"
          </blockquote>

          <p>
            In Pakistan, this contradiction is particularly striking. Students who struggle academically often face harsher punishment rather than additional support. Instead of receiving guidance, they are made to feel inadequate—reinforcing a cycle where fear replaces motivation. Creativity, critical thinking, and innovation—qualities essential for national development—are unlikely to thrive under such conditions.
          </p>

          <p>
            The legal landscape, while evolving, has yet to fully address this reality. Laws such as the Islamabad Capital Territory Prohibition of Corporal Punishment Act 2021 and provincial measures in Sindh represent important progress. They signal a growing recognition that physical punishment has no place in education. However, enforcement remains uneven, and in many parts of the country, such practices continue with little oversight.
          </p>

          <p>
            Cultural attitudes also play a role. Many parents, even when aware of these practices, accept them as necessary. The belief that “this is how children learn” remains deeply ingrained. In doing so, discipline is prioritised over dignity, and obedience over well-being.
          </p>

          <p>
            At the same time, it would be too simplistic to place blame solely on teachers or institutions. The issue is systemic. It reflects gaps in training, policy enforcement, and awareness. Teachers under pressure, parents driven by expectations, and institutions concerned with reputation all contribute—often unintentionally—to an environment where harm is normalised.
          </p>

          <p>
            The consequences, however, are far from abstract. Pakistan continues to face significant challenges in innovation, entrepreneurship, and youth retention. While these issues have multiple causes, the psychological environment in which children are raised and educated cannot be ignored. A generation shaped by fear, anxiety, and diminished self-worth is less likely to take risks, think independently, or challenge ideas—all essential traits for progress.
          </p>

          <p>
            This is not to suggest that every child exposed to corporal punishment will suffer lasting harm. Research is clear that outcomes vary, and protective relationships—supportive teachers, engaged parents, or positive environments—can mitigate the effects of early trauma. But the risk remains substantial, particularly when such experiences are repeated and unchallenged.
          </p>

          <p>
            If Pakistan is serious about investing in its future, the conversation around education must go beyond access and curriculum. It must include the psychological safety of students. Stronger enforcement of existing laws, better teacher training in non-violent discipline, and a shift in societal attitudes are not optional—they are necessary.
          </p>

          <p className="text-xl font-bold mt-12 border-t border-border pt-12">
            Because the question is no longer whether corporal punishment exists. It is whether a nation can afford the long-term cost of ignoring its impact.
          </p>
        </div>
      </div>
    </article>
  );
}
