import HeroSectionCarousel from "./HeroSectionCarousel";
import ProductNavigation from "./ProductNavigation";

function HeroSection() {
  return (
    <section className="flex justify-between gap-5">
      <ProductNavigation />
      <HeroSectionCarousel />
    </section>
  );
}

export default HeroSection;
