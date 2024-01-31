import HeroPhoneSection from "../features/products/HeroPhoneSection";
import FlashSalesProducts from "../features/products/FlashSalesProducts";
import ProductCategories from "../features/products/ProductCategories";
import BestSellingProducts from "../features/products/BestSellingProducts";
import SpeakerProduct from "../features/products/SpeakerProduct";
import OurProducts from "../features/products/OurProducts";

function Home() {
  return (
    <>
      <HeroPhoneSection />
      <FlashSalesProducts />
      <ProductCategories />
      <BestSellingProducts />
      <SpeakerProduct />
      <OurProducts />
    </>
  );
}

export default Home;
