import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Send } from "lucide-react";

export const Newsletter = () => {
  const { ref, isVisible } = useScrollReveal();
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail("");
    }
  };

  return (
    <section ref={ref} className="py-16 md:py-24 gradient-rose">
      <div className="container mx-auto px-4 md:px-8">
        <div
          className={`max-w-lg mx-auto text-center transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="text-xs font-sans tracking-[0.3em] uppercase text-primary mb-3 block">
            Stay in the Glow
          </span>
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-3">
            Get 15% Off Your First Order
          </h2>
          <p className="text-sm text-muted-foreground mb-6">
            Join our community for exclusive offers, skincare tips, and early access to new launches.
          </p>

          {submitted ? (
            <p className="text-primary font-medium">Welcome to the glow ✨</p>
          ) : (
            <form onSubmit={handleSubmit} className="flex gap-2">
              <Input
                type="email"
                placeholder="Your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="rounded-full bg-card border-border focus:border-primary"
              />
              <Button type="submit" className="rounded-full px-6 flex-shrink-0" size="default">
                <Send className="w-4 h-4" />
              </Button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};
