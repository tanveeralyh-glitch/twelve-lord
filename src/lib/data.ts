export interface Book {
  id: string;
  title: string;
  subtitle?: string;
  author: string;
  publishDate: string;
  genre: string;
  description: string;
  benefits?: string[];
  image: string;
  featured?: boolean;
  gallery?: string[];
  sections?: {
    title: string;
    content: string[];
  }[];
}

export interface Article {
  title: string;
  slug: string;
  thumb: string;
  author: string;
  publishDate: string;
  readTime: string;
  preview: string;
}

export interface TechItem {
  title: string;
  description: string;
  image?: string;
  icon?: string;
}

export const books: Book[] = [
  {
    id: "self-as-witness",
    title: "THE SELF AS WITNESS",
    subtitle: "Exploring How the Self Becomes Both Subject and Suspect in Its Own Gaze",
    author: "Muhammad Raza",
    genre: "Non-Fiction",
    publishDate: "2026",
    description: "The Self as Witness explores the timeless struggle for self-mastery—the internal battle that has defined the human condition across history. Drawing from the wisdom of great thinkers, it distills profound philosophies into a clear, practical framework. Rather than remaining abstract, this book transforms ancient insight into actionable discipline, guiding you to apply self-awareness and control in your everyday life.",
    benefits: [
      "Recognition of the Inner Adversary",
      "Deep Self-Awareness and Insight",
      "A Structured Strategy for Inner Mastery"
    ],
    image: "/images/books/self-as-witness-4k.png",
    featured: true,
    gallery: [
      "/images/books/self-as-witness-4k.png",
      "/images/books/self-as-witness-perspective.png",
      "/images/books/self-as-witness-desk.png"
    ]
  },
  {
    id: "cyber-cable",
    title: "Twelve Lords Cyber Cable",
    subtitle: "Security Hardware-Level",
    author: "Twelve Lords Engineers",
    genre: "Hardware",
    publishDate: "2026",
    description: "Secure Charging. Controlled Data. Total Protection. Our team of engineers developed the Cyber Cable to eliminate 'Juice Jacking' and data theft at the physical layer.",
    image: "/images/cablepost.jpg.jpeg",
    featured: true
  }
];

export const articles: Article[] = [
  {
    title: "The Quiet Craft of Writing Every Day",
    slug: "quiet-craft-of-writing",
    thumb: "/images/articles/writing.jpg",
    author: "Maya Aldrin",
    publishDate: "Apr 12, 2026",
    readTime: "6 min read",
    preview: "Small daily rituals that turn writing from a chore into a craft you'll never want to stop refining."
  },
  {
    title: "Why Edge Computing Will Reshape The Web",
    slug: "why-edge-computing",
    thumb: "/images/articles/tech.jpg",
    author: "Daniel Cho",
    publishDate: "Apr 09, 2026",
    readTime: "9 min read",
    preview: "How moving compute closer to users is rewriting the rules of performance, privacy, and product design."
  },
  {
    title: "How Reading Slowly Changes Your Mind",
    slug: "how-reading-slowly-changes-your-mind",
    thumb: "/images/articles/knowledge.jpg",
    author: "Iris Bennett",
    publishDate: "Apr 02, 2026",
    readTime: "5 min read",
    preview: "The neuroscience of deep reading — and why slowing down may be the most radical productivity hack."
  },
  {
    title: "The Art of Minimalist Productivity",
    slug: "art-of-minimalist-productivity",
    thumb: "/images/articles/minimal.jpg",
    author: "Leo Babauta",
    publishDate: "Mar 25, 2026",
    readTime: "4 min read",
    preview: "Finding focus in a world designed to distract us from our most important work."
  }
];

export const techItems: TechItem[] = [
  {
    title: "AI-assisted editor",
    description: "Smart suggestions that respect your voice and help you write faster.",
    icon: "cpu"
  },
  {
    title: "Instant publish",
    description: "From draft to live in under a second with our global edge network.",
    icon: "zap"
  },
  {
    title: "Developer friendly",
    description: "API and embeds for your own stack, built with modern standards.",
    icon: "code-2"
  },
  {
    title: "Lumina SDK",
    description: "The complete toolkit for integrating Lumina insights into your apps.",
    icon: "box"
  }
];
