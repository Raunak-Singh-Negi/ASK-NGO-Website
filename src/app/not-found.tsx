import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-secondary/20 px-4">
      <div className="text-center max-w-md">
        <h1 className="font-headline text-6xl md:text-7xl font-bold text-primary mb-4">404</h1>
        <h2 className="font-headline text-2xl md:text-3xl font-semibold mb-2">Page Not Found</h2>
        <p className="text-muted-foreground mb-8 text-lg">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="flex gap-4 justify-center">
          <Button asChild className="bg-accent text-accent-foreground hover:bg-accent/90">
            <Link href="/">Go Home</Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/contact">Contact Us</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
