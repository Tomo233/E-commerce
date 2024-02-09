import RedBorder from "../../components/RedBorder";
import { useGetAllProductsQuery } from "../api/apiSlice";
import OurItem from "./OurItem";

function AllProducts() {
  const { data: products } = useGetAllProductsQuery();
  console.log(products);
  return (
    <section className="mb-10">
      <RedBorder allProducts="true">All Our Products</RedBorder>
      <div className="grid grid-cols-4 gap-12 mt-10">
        {products?.map((product) => (
          <OurItem product={product} key={product.id} />
        ))}
      </div>
    </section>
  );
}

export default AllProducts;
