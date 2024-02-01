import HeroPhoneSection from "../features/products/HeroPhoneSection";
import FlashSalesProducts from "../features/products/FlashSalesProducts";
import ProductCategories from "../features/products/ProductCategories";
import BestSellingProducts from "../features/products/BestSellingProducts";
import SpeakerProduct from "../features/products/SpeakerProduct";
import OurProducts from "../features/products/OurProducts";
import Featured from "../features/products/Featured";
import ProductsDelivery from "../features/products/ProductsDelivery";

function Home() {
  return (
    <>
      <HeroPhoneSection />
      <FlashSalesProducts />
      <ProductCategories />
      <BestSellingProducts />
      <SpeakerProduct />
      <OurProducts />
      <Featured />
      <ProductsDelivery />
    </>
  );
}

export default Home;
