import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroProduct from "@/assets/hero-product.png";

export const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] md:min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 gradient-blush" />
      <div className="absolute top-20 right-10 w-72 h-72 rounded-full bg-primary/10 blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 rounded-full bg-lavender blur-3xl opacity-60" />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Text */}
          <div className="text-center md:text-left pt-20 md:pt-0">
            <span className="inline-block text-xs font-sans tracking-[0.3em] uppercase text-primary mb-4 md:mb-6">
              Luxury Skincare
            </span>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.1] mb-4 md:mb-6 text-foreground">
              Reveal Your
              <br />
              <span className="text-gradient">Natural Glow</span>
            </h1>
            <p className="text-muted-foreground text-base md:text-lg max-w-md mx-auto md:mx-0 mb-6 md:mb-8 leading-relaxed">
              Crafted with nature's finest botanicals for skin that radiates from within.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
              <Link to="/store">
                <Button size="lg" className="rounded-full px-8 font-sans text-xs tracking-wider uppercase gap-2 shadow-glow w-full sm:w-auto">
                  Explore Collection
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
              <Link to="/about">
                <Button variant="outline" size="lg" className="rounded-full px-8 font-sans text-xs tracking-wider uppercase w-full sm:w-auto">
                  Our Story
                </Button>
              </Link>
            </div>
          </div>

          {/* Product Image */}
          <div className="flex justify-center md:justify-end mt-4 md:mt-0">
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-primary/10 blur-3xl scale-75" />
              <img
                src={heroProduct}
                alt="Lumière signature serum — luxury skincare"
                className="relative w-56 md:w-72 lg:w-96 float-animation drop-shadow-2xl"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
