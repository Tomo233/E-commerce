import HeroCarousel from "./HeroCarousel";
import ProductNavigation from "./ProductNavigation";

function HeroSection() {
  return (
    <section className="h-96 flex justify-between">
      <ProductNavigation />
      <HeroCarousel />
    </section>
  );
}

export default HeroSection;
