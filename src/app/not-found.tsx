import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background text-foreground p-4">
      <div className="text-center space-y-6">
        <h1 className="text-8xl font-display font-black">
          4<span className="text-gradient-accent">0</span>4
        </h1>
        <p className="text-xl text-muted-foreground max-w-md mx-auto">
          The page you are looking for has drifted into another dimension.
        </p>
        <Link 
          href="/" 
          className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-accent text-accent-foreground font-bold hover:scale-105 transition-all"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}
