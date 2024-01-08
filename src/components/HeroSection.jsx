import HeroCarousel from "./HeroCarousel";
import ProductNavigation from "./ProductNavigation";

function HeroSection() {
  return (
    <section className="flex justify-between gap-5">
      <ProductNavigation />
      <HeroCarousel />
    </section>
  );
}

export default HeroSection;
