import { products } from "@/data/products";
import { ProductCard } from "@/components/ProductCard";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Award } from "lucide-react";

export const BestSellers = () => {
  const { ref, isVisible } = useScrollReveal();
  const bestSellers = products.filter((p) => p.rating >= 4.8);

  return (
    <section ref={ref} className="hidden md:block py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-8">
        <div
          className={`text-center mb-10 md:mb-14 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="text-xs font-sans tracking-[0.3em] uppercase text-primary mb-3 flex items-center justify-center gap-2">
            <Award className="w-4 h-4" />
            Customer Favorites
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            Best Sellers
          </h2>
          <p className="text-muted-foreground text-sm mt-3 max-w-md mx-auto">
            The products our community can't stop raving about.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {bestSellers.map((product, i) => (
            <div
              key={product.id}
              style={{ transitionDelay: `${i * 120 + 200}ms` }}
              className={`transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
