import HeroPhoneSection from "../features/products/HeroPhoneSection";
import FlashSalesProducts from "../features/products/FlashSalesProducts";
import ProductCategories from "../features/products/ProductCategories";
import BestSellingProducts from "../features/products/BestSellingProducts";
import OurProducts from "../features/products/OurProducts";
import Featured from "../features/products/Featured";
import ProductsDelivery from "../features/products/ProductsDelivery";
import HddProduct from "../features/products/HddProduct";

function Home() {
  return (
    <>
      <HeroPhoneSection />
      <FlashSalesProducts />
      <ProductCategories />
      <BestSellingProducts />
      <HddProduct />
      <OurProducts />
      <Featured />
      <ProductsDelivery />
    </>
  );
}

export default Home;
