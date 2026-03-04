import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export const PromoBanner = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section
      ref={ref}
      className="py-16 md:py-24 relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 gradient-blush" />
      <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-primary/10 blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-72 h-72 rounded-full bg-lavender blur-3xl opacity-50" />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div
          className={`max-w-2xl mx-auto text-center transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          <span className="text-xs font-sans tracking-[0.3em] uppercase text-primary mb-4 block">
            Limited Offer
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 md:mb-6">
            The Glow Collection
          </h2>
          <p className="text-muted-foreground text-base md:text-lg mb-6 md:mb-8 leading-relaxed max-w-lg mx-auto">
            Get 20% off our curated 3-step routine — cleanse, treat, and glow. Everything your skin needs in one set.
          </p>
          <Link to="/store">
            <Button size="lg" className="rounded-full px-10 font-sans text-xs tracking-wider uppercase shadow-glow">
              Shop the Set
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};
