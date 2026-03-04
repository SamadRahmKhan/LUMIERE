import { useState, useEffect, useCallback } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { testimonials } from "@/data/products";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export const Testimonials = () => {
  const { ref, isVisible } = useScrollReveal();
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [direction, setDirection] = useState<"left" | "right">("right");

  const goTo = useCallback((index: number, dir: "left" | "right") => {
    if (animating) return;
    setDirection(dir);
    setAnimating(true);
    setTimeout(() => {
      setCurrent(index);
      setTimeout(() => setAnimating(false), 50);
    }, 300);
  }, [animating]);

  const next = () => goTo((current + 1) % testimonials.length, "right");
  const prev = () => goTo((current - 1 + testimonials.length) % testimonials.length, "left");

  useEffect(() => {
    const timer = setInterval(() => {
      goTo((current + 1) % testimonials.length, "right");
    }, 5000);
    return () => clearInterval(timer);
  }, [current, goTo]);

  const slideClass = animating
    ? direction === "right"
      ? "opacity-0 translate-x-8"
      : "opacity-0 -translate-x-8"
    : "opacity-100 translate-x-0";

  return (
    <section ref={ref} className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-8">
        <div
          className={`text-center mb-10 md:mb-14 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="text-xs font-sans tracking-[0.3em] uppercase text-primary mb-3 block">
            Real Results
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            Loved by Thousands
          </h2>
        </div>

        <div
          className={`max-w-2xl mx-auto transition-all duration-700 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="relative bg-card rounded-2xl p-8 md:p-12 shadow-soft text-center overflow-hidden">
            <div className={`transition-all duration-300 ease-in-out ${slideClass}`}>
              {/* Stars */}
              <div className="flex justify-center gap-1 mb-4">
                {[...Array(testimonials[current].rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>

              <blockquote className="font-serif text-lg md:text-xl italic text-foreground mb-6 leading-relaxed min-h-[80px]">
                "{testimonials[current].text}"
              </blockquote>

              <div className="flex items-center justify-center gap-3">
                <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-sm font-semibold text-foreground">
                  {testimonials[current].avatar}
                </div>
                <div className="text-left">
                  <p className="text-sm font-semibold text-foreground">{testimonials[current].name}</p>
                  <p className="text-xs text-muted-foreground">on {testimonials[current].product}</p>
                </div>
              </div>
            </div>

            {/* Nav arrows */}
            <button
              onClick={prev}
              className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-secondary hover:bg-primary/10 flex items-center justify-center transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={next}
              className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-secondary hover:bg-primary/10 flex items-center justify-center transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i, i > current ? "right" : "left")}
                className={`w-2 h-2 rounded-full transition-all ${
                  i === current ? "bg-primary w-6" : "bg-border"
                }`}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
