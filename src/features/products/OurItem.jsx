/* eslint-disable react/prop-types */
import { useState } from "react";
import AddToCart from "../../components/AddToCart";
import Rating from "../../components/Rating";
function OurItem({ product }) {
  const [isHovered, setIsHovered] = useState(false);
  const itemRating = product?.rating?.rate?.toFixed();

  return (
    <div
      className="flex flex-col items-center justify-center cursor-pointer relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="pb-3 flex items-center justify-center">
        <img src={product?.image} className="w-32 h-32" alt={product?.title} />
      </div>
      <div className="w-56">
        <h4 className="font-medium">{product?.title}</h4>
        <h6 className="text-red-700 font-medium">${product?.price}</h6>
        <Rating value={itemRating} />
      </div>
      <AddToCart isHovered={isHovered} product={product} />
    </div>
  );
}

export default OurItem;
