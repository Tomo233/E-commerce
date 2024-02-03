/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/prop-types */
import { Carousel } from "primereact/carousel";
import Rating from "./Rating";
import { useState } from "react";

export default function ResponsiveDemo({ products }) {
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
        <div className="">
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

        <div
          className={`bg-stone-950 text-sm text-stone-100 font-semibold w-80 h-10 absolute bottom-0 flex items-center justify-center transition-all  duration-700 ${
            isHovered ? "opacity-100" : "opacity-0"
          }`}
        >
          <p>Add To Cart</p>
        </div>
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
