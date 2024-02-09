/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/prop-types */
import { Carousel } from "primereact/carousel";
import Rating from "../../components/Rating";
import { useState } from "react";
import { useGetSomeProductsQuery } from "../api/apiSlice";
import Error from "../../pages/Error";
import Loader from "../../components/Loader";
import AddToCart from "../../components/AddToCart";

export default function ResponsiveDemo() {
  const { data: products, isLoading, error } = useGetSomeProductsQuery(9);
  if (isLoading) return <Loader />;
  if (error) return <Error />;

  const productTemplate = (product) => {
    const [isHovered, setIsHovered] = useState(false);

    const itemRating = product?.rating?.rate?.toFixed();
    const newPrice = product.price - product.price * 0.2;

    return (
      <div
        className="flex items-center flex-col  justify-center mt-10 h-72  max-w-md  cursor-pointer relative"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div>
          <img
            src={product?.image}
            className="w-36 h-36"
            alt={product?.title}
          />
        </div>
        <div className="w-56">
          <h4 className="font-medium text-base">{product?.title}</h4>
          <div className="flex gap-5 my-2">
            <h6 className="text-red-700 font-medium">${newPrice.toFixed(2)}</h6>
            <h6 className="text-stone-400 line-through font-medium">
              ${product?.price.toFixed(2)}
            </h6>
          </div>
          <Rating value={itemRating} />
        </div>

        <AddToCart product={product} isHovered={isHovered} />
      </div>
    );
  };

  return (
    <div className="card p-d-flex p-jc-center p-ai-center max-w-full mt-3">
      <Carousel
        value={products}
        numVisible={3}
        numScroll={3}
        responsiveOptions={[
          {
            breakpoint: "575px",
            numVisible: 1,
            numScroll: 1,
          },
          {
            breakpoint: "767px",
            numVisible: 2,
            numScroll: 1,
          },
          {
            breakpoint: "1199px",
            numVisible: 3,
            numScroll: 1,
          },
          {
            breakpoint: "1400px",
            numVisible: 4,
            numScroll: 1,
          },
        ]}
        circular
        itemTemplate={productTemplate}
      />
    </div>
  );
}
