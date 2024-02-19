import { useParams } from "react-router-dom";
import { useGetCategoryProductsQuery } from "../api/apiSlice";
import OurItem from "./OurItem";

function ProductsOfCertainCategory() {
  const { category } = useParams();
  const { data: products } = useGetCategoryProductsQuery(
    category.toLowerCase()
  );
  return (
    <section className="pb-32 mt-20">
      <div className="grid grid-cols-4 gap-12">
        {products?.map((product) => (
          <OurItem product={product} key={product.id} />
        ))}
      </div>
    </section>
  );
}

export default ProductsOfCertainCategory;
