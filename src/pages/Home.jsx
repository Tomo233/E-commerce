import Header from "../components/Header";
import TopHeader from "../components/TopHeader";
import Container from "../components/Container";
import HeroSection from "../components/HeroSection";

function Home() {
  return (
    <>
      <Container>
        <TopHeader />
        <Header />
        <HeroSection />
      </Container>
    </>
  );
}

export default Home;
