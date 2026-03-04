import { HeroSection } from "@/components/HeroSection";
import { FeaturedProducts } from "@/components/FeaturedProducts";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { BestSellers } from "@/components/BestSellers";
import { ProductCategories } from "@/components/ProductCategories";
import { IngredientsBenefits } from "@/components/IngredientsBenefits";
import { PromoBanner } from "@/components/PromoBanner";
import { Testimonials } from "@/components/Testimonials";
import { HowItWorks } from "@/components/HowItWorks";
import { Newsletter } from "@/components/Newsletter";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <main>
      <HeroSection />
      <FeaturedProducts />
      <WhyChooseUs />
      <BestSellers />
      <ProductCategories />
      <IngredientsBenefits />
      <PromoBanner />
      <Testimonials />
      <HowItWorks />
      <Newsletter />
      <Footer />
    </main>
  );
};

export default Index;
