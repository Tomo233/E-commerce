import HeroPhoneSection from "../features/products/HeroPhoneSection";
import FlashSalesProducts from "../features/products/FlashSalesProducts";
import ProductCategories from "../features/products/ProductCategories";
import BestSellingProducts from "../features/products/BestSellingProducts";

function Home() {
  return (
    <>
      <HeroPhoneSection />
      <FlashSalesProducts />
      <ProductCategories />
      <BestSellingProducts />
    </>
  );
}

export default Home;
