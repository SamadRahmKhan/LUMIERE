import { Footer } from "@/components/Footer";
import { Leaf, Heart, Globe } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const values = [
  { icon: Leaf, title: "Sustainably Sourced", text: "Every ingredient is ethically harvested and sustainably sourced from trusted partners around the world." },
  { icon: Heart, title: "Made with Love", text: "Each formula is developed by our team of cosmetic chemists who pour passion into every product." },
  { icon: Globe, title: "Planet Positive", text: "We're committed to reducing our environmental footprint with recyclable packaging and carbon-neutral shipping." },
];

const About = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <main className="pt-20 md:pt-24">
      {/* Hero */}
      <section className="gradient-blush py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-8 text-center">
          <span className="text-xs font-sans tracking-[0.3em] uppercase text-primary mb-4 block">Our Story</span>
          <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Beauty, Reimagined
          </h1>
          <p className="text-muted-foreground max-w-xl mx-auto leading-relaxed">
            Lumière was born from a simple belief — that luxury skincare should be clean, effective, and accessible. 
            We blend science with nature to create products that honor your skin and the planet.
          </p>
        </div>
      </section>

      {/* Values */}
      <section ref={ref} className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((v, i) => (
              <div
                key={v.title}
                style={{ transitionDelay: `${i * 150}ms` }}
                className={`text-center p-6 transition-all duration-700 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
              >
                <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-secondary flex items-center justify-center">
                  <v.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-serif text-lg font-semibold text-foreground mb-2">{v.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default About;
