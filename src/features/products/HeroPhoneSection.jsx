import PhoneCarousel from "./PhoneCarousel";
import ProductNavigation from "./ProductNavigation";
function HeroPhoneSection() {
  return (
    <section className="flex justify-between gap-5">
      <ProductNavigation />
      <PhoneCarousel />
    </section>
  );
}

export default HeroPhoneSection;
