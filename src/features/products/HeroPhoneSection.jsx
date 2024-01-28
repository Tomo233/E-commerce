import OneProductCarousel from "../../components/OneProductCarousel";
import ProductNavigation from "../../components/ProductNavigation";

function HeroPhoneSection() {
  return (
    <section className="flex justify-between gap-5">
      <ProductNavigation />
      <OneProductCarousel />
    </section>
  );
}

export default HeroPhoneSection;
