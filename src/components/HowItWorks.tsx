import { useScrollReveal } from "@/hooks/useScrollReveal";

const steps = [
  {
    number: "01",
    title: "Cleanse",
    description: "Start with our gentle Petal Soft Cleanser to remove impurities without stripping moisture.",
  },
  {
    number: "02",
    title: "Treat",
    description: "Apply the Radiance Glow Serum to target concerns — brightening, hydration, or anti-aging.",
  },
  {
    number: "03",
    title: "Moisturize",
    description: "Lock in all the goodness with the Cloud Veil Moisturizer for lasting, weightless hydration.",
  },
  {
    number: "04",
    title: "Protect",
    description: "Finish with Dewdrop SPF 50 for invisible, dewy sun protection every single day.",
  },
];

export const HowItWorks = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section ref={ref} className="hidden md:block py-16 md:py-24 gradient-blush">
      <div className="container mx-auto px-4 md:px-8">
        <div
          className={`text-center mb-10 md:mb-14 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="text-xs font-sans tracking-[0.3em] uppercase text-primary mb-3 block">
            Your Ritual
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            How It Works
          </h2>
          <p className="text-muted-foreground text-sm mt-3 max-w-md mx-auto">
            Four simple steps to your most radiant skin ever.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-6 relative">
          {/* Connecting line */}
          <div className="hidden lg:block absolute top-16 left-[12.5%] right-[12.5%] h-px bg-border" />

          {steps.map((step, i) => (
            <div
              key={step.number}
              style={{ transitionDelay: `${i * 150 + 200}ms` }}
              className={`relative text-center transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-card shadow-soft flex items-center justify-center relative z-10">
                <span className="font-serif text-lg font-bold text-primary">{step.number}</span>
              </div>
              <h3 className="font-serif text-xl font-semibold text-foreground mb-2">{step.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed max-w-[220px] mx-auto">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
