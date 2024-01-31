import RedBorder from "../../components/RedBorder";
import { useGetSomeProductsQuery } from "../api/apiSlice";
import Carousel from "../../components/Carousel";
import Loader from "../../components/Loader";
import Error from "../../pages/Error";
function OurProducts() {
  const { data, error, isLoading } = useGetSomeProductsQuery(16);

  if (isLoading) return <Loader />;
  if (error) return <Error />;
  return (
    <section className="my-20">
      <RedBorder>Our Products</RedBorder>
      <h2 className="text-3xl font-bold ">Explore Our Products</h2>
      <Carousel products={data} />
    </section>
  );
}

export default OurProducts;
