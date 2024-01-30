import Carousel from "./Carousel";
import { useGetSomeProductsQuery } from "../features/api/apiSlice";
import Error from "../pages/Error";
import Loader from "./Loader";

function ProminentProducts() {
  const { data, isLoading, error } = useGetSomeProductsQuery(9);

  if (isLoading) return <Loader />;
  if (error) return <Error />;
  return <Carousel products={data} />;
}

export default ProminentProducts;
