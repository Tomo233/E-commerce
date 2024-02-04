import Carousel from "../../components/Carousel";
import { useGetSomeProductsQuery } from "../api/apiSlice";
import Error from "../../pages/Error";
import Loader from "../../components/Loader";

function ProminentProducts() {
  const { data, isLoading, error } = useGetSomeProductsQuery(9);

  if (isLoading) return <Loader />;
  if (error) return <Error />;
  return <Carousel products={data} />;
}

export default ProminentProducts;
