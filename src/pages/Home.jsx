import HeroSection from "../components/HeroSection";
import FlashSalesSection from "../components/FlashSalesSection";
import { useEffect } from "react";
import { getOneProducts } from "../services/apiProducts";

function Home() {
  useEffect(function () {
    getOneProducts();
  }, []);

  return (
    <>
      <HeroSection />
      <FlashSalesSection />
    </>
  );
}

export default Home;
