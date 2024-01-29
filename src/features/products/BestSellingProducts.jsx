import RedBorder from "../../components/RedBorder";
import Button from "../../components/Button";
import { useGetAllProductsQuery } from "../api/apiSlice";
function BestSellingProducts() {
  const { data } = useGetAllProductsQuery();
  console.log(data);
  return (
    <section className="mb-20">
      <RedBorder>This Month</RedBorder>
      <div className="flex justify-between">
        <h2 className="text-3xl font-bold">Best Selling Products</h2>
        <Button>View All</Button>
      </div>
    </section>
  );
}

export default BestSellingProducts;
