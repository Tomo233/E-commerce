import Carousel from "./Carousel";
import ProductNavigation from "./ProductNavigation";

function HeroSection() {
  return (
    <section className="flex justify-between gap-5">
      <ProductNavigation />
      <Carousel />
    </section>
  );
}

export default HeroSection;
