import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Droplets, Sun, Zap, FlowerIcon } from "lucide-react";

const ingredients = [
  {
    icon: Droplets,
    name: "Hyaluronic Acid",
    benefit: "Deep Hydration",
    description: "Holds 1000x its weight in water, plumping skin from within for a dewy, youthful complexion.",
  },
  {
    icon: Sun,
    name: "Vitamin C",
    benefit: "Brightening",
    description: "Powerful antioxidant that fades dark spots and evens skin tone for a radiant glow.",
  },
  {
    icon: Zap,
    name: "Retinol",
    benefit: "Anti-Aging",
    description: "Accelerates cell renewal, smoothing fine lines and improving skin texture overnight.",
  },
  {
    icon: FlowerIcon,
    name: "Botanical Oils",
    benefit: "Nourishment",
    description: "A blend of 9 plant oils that deeply restore skin's barrier and natural luminosity.",
  },
];

export const IngredientsBenefits = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section ref={ref} className="hidden md:block py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-8">
        <div
          className={`text-center mb-10 md:mb-14 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="text-xs font-sans tracking-[0.3em] uppercase text-primary mb-3 block">
            Science Meets Nature
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            Key Ingredients
          </h2>
          <p className="text-muted-foreground text-sm mt-3 max-w-lg mx-auto">
            Every formula is built around clinically proven actives paired with gentle botanicals.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {ingredients.map((item, i) => (
            <div
              key={item.name}
              style={{ transitionDelay: `${i * 120 + 200}ms` }}
              className={`group p-6 rounded-2xl bg-card/80 backdrop-blur-sm shadow-soft text-center transition-all duration-700 hover:shadow-glow hover:-translate-y-1 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-secondary flex items-center justify-center group-hover:bg-primary/10 transition-colors duration-300">
                <item.icon className="w-6 h-6 text-primary" />
              </div>
              <span className="text-[10px] font-sans tracking-[0.2em] uppercase text-primary mb-1 block">
                {item.benefit}
              </span>
              <h3 className="font-serif text-lg font-semibold text-foreground mb-2">{item.name}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
