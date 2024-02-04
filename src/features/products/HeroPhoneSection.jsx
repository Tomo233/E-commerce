import OneProductCarousel from "./OneProductCarousel";
import ProductNavigation from "./ProductNavigation";
function HeroPhoneSection() {
  return (
    <section className="flex justify-between gap-5">
      <ProductNavigation />
      <OneProductCarousel />
    </section>
  );
}

export default HeroPhoneSection;
