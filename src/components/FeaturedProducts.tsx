import { products } from "@/data/products";
import { ProductCard } from "@/components/ProductCard";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const FeaturedProducts = () => {
  const { ref, isVisible } = useScrollReveal();
  const featured = products.slice(0, 4);

  return (
    <section ref={ref} className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-8">
        <div
          className={`text-center mb-10 md:mb-14 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="text-xs font-sans tracking-[0.3em] uppercase text-primary mb-3 block">
            Curated for You
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            Bestselling Rituals
          </h2>
        </div>

        <div
          className={`grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 transition-all duration-700 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {featured.map((product, i) => (
            <div
              key={product.id}
              style={{ transitionDelay: `${i * 100 + 200}ms` }}
              className={`transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>

        <div className={`text-center mt-10 transition-all duration-700 delay-500 ${isVisible ? "opacity-100" : "opacity-0"}`}>
          <Link to="/store">
            <Button variant="outline" className="rounded-full px-8 font-sans text-xs tracking-wider uppercase gap-2">
              View All Products
              <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};
