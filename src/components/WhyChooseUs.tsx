import { Leaf, Heart, Sparkles, Shield } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const features = [
  {
    icon: Leaf,
    title: "100% Natural",
    description: "Every formula crafted with ethically sourced, plant-based ingredients.",
  },
  {
    icon: Heart,
    title: "Cruelty-Free",
    description: "Never tested on animals. Certified cruelty-free and vegan-friendly.",
  },
  {
    icon: Sparkles,
    title: "Clinically Proven",
    description: "Dermatologist-tested formulas backed by visible, measurable results.",
  },
  {
    icon: Shield,
    title: "Clean Beauty",
    description: "Free from parabens, sulfates, and synthetic fragrances. Always.",
  },
];

export const WhyChooseUs = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section ref={ref} className="py-16 md:py-24 gradient-rose">
      <div className="container mx-auto px-4 md:px-8">
        <div
          className={`text-center mb-10 md:mb-14 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="text-xs font-sans tracking-[0.3em] uppercase text-primary mb-3 block">
            Our Promise
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            Why Lumière
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, i) => (
            <div
              key={feature.title}
              style={{ transitionDelay: `${i * 100 + 200}ms` }}
              className={`group p-6 md:p-8 rounded-2xl bg-card/80 backdrop-blur-sm shadow-soft text-center transition-all duration-700 hover:shadow-glow hover:-translate-y-1 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-secondary flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                <feature.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-serif text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
