import RedBorder from "../../components/RedBorder";
import Button from "../../components/Button";
import Carousel from "../../components/Carousel";
import { useGetSomeProductsQuery } from "../api/apiSlice";
import Error from "../../pages/Error";
import Loader from "../../components/Loader";
function BestSellingProducts() {
  const { data, isLoading, error } = useGetSomeProductsQuery(5);

  if (isLoading) return <Loader />;
  if (error) return <Error />;

  return (
    <section className="mb-20">
      <RedBorder>This Month</RedBorder>
      <div className="flex justify-between">
        <h2 className="text-3xl font-bold">Best Selling Products</h2>
        <Button>View All</Button>
      </div>
      <Carousel products={data} />
    </section>
  );
}

export default BestSellingProducts;
