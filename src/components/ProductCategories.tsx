import { Link } from "react-router-dom";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const categories = [
  {
    name: "Serums",
    description: "Targeted treatments for every concern",
    gradient: "linear-gradient(135deg, hsl(345 60% 92%), hsl(15 55% 85%))",
    icon: "💧",
  },
  {
    name: "Moisturizers",
    description: "Deep hydration, day & night",
    gradient: "linear-gradient(135deg, hsl(270 30% 94%), hsl(330 25% 92%))",
    icon: "☁️",
  },
  {
    name: "Cleansers",
    description: "Gentle, effective daily cleansing",
    gradient: "linear-gradient(135deg, hsl(345 60% 95%), hsl(270 30% 94%))",
    icon: "🌸",
  },
  {
    name: "Sun Care",
    description: "Invisible protection, dewy finish",
    gradient: "linear-gradient(135deg, hsl(35 30% 96%), hsl(30 25% 90%))",
    icon: "☀️",
  },
];

export const ProductCategories = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section ref={ref} className="hidden md:block py-16 md:py-24 gradient-rose">
      <div className="container mx-auto px-4 md:px-8">
        <div
          className={`text-center mb-10 md:mb-14 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="text-xs font-sans tracking-[0.3em] uppercase text-primary mb-3 block">
            Browse by Type
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            Shop Categories
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
          {categories.map((cat, i) => (
            <Link
              to="/store"
              key={cat.name}
              style={{ transitionDelay: `${i * 100 + 200}ms` }}
              className={`group relative rounded-2xl overflow-hidden transition-all duration-700 hover:shadow-glow hover:-translate-y-1 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <div
                className="aspect-[4/3] flex flex-col items-center justify-center p-6 transition-transform duration-500 group-hover:scale-105"
                style={{ background: cat.gradient }}
              >
                <span className="text-4xl mb-3">{cat.icon}</span>
                <h3 className="font-serif text-lg font-semibold text-foreground mb-1">{cat.name}</h3>
                <p className="text-xs text-muted-foreground">{cat.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
