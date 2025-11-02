import { Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="py-12 px-6 bg-card border-t border-card-border">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-6">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="h-px w-16 bg-primary/50" />
            <Heart className="w-5 h-5 text-primary fill-primary" />
            <div className="h-px w-16 bg-primary/50" />
          </div>
          <p className="font-serif text-2xl text-foreground mb-2">
            With Love and Blessings
          </p>
          <p className="text-muted-foreground">
            From Joshi and Shanbhag Family
          </p>
        </div>
        
        <div className="text-sm text-muted-foreground">
          <p>&copy; 2025 Sameer & Purva Engagement Celebration</p>
        </div>
      </div>
    </footer>
  );
}
