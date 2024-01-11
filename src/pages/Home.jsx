import Header from "../components/Header";
import TopHeader from "../components/TopHeader";
import Container from "../components/Container";
import HeroSection from "../components/HeroSection";
import FlashSalesSection from "../components/FlashSalesSection";

function Home() {
  return (
    <>
      <Container>
        <TopHeader />
        <Header />
        <HeroSection />
        <FlashSalesSection />
      </Container>
    </>
  );
}

export default Home;
