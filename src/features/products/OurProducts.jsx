import RedBorder from "../../components/RedBorder";
import { useGetSomeProductsQuery } from "../api/apiSlice";
import Loader from "../../components/Loader";
import Error from "../../pages/Error";
import OurItem from "./OurItem";
function OurProducts() {
  const { data, error, isLoading } = useGetSomeProductsQuery(8);

  if (isLoading) return <Loader />;
  if (error) return <Error />;
  return (
    <section className="my-20">
      <RedBorder>Our Products</RedBorder>
      <h2 className="text-3xl font-bold ">Explore Our Products</h2>
      <div className="grid grid-cols-4 gap-10 mt-10">
        {data.map((product) => (
          <OurItem product={product} key={product.id} />
        ))}
      </div>
    </section>
  );
}

export default OurProducts;
