/* eslint-disable react/prop-types */
import { useState } from "react";
import AddToCart from "../cart/AddToCart";
import Rating from "../../components/Rating";
import { Link } from "react-router-dom";
function OurItem({ product }) {
  const [isHovered, setIsHovered] = useState(false);
  const itemRating = product?.rating?.rate?.toFixed();

  return (
    <div
      className="flex flex-col items-center justify-center cursor-pointer relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link
        className="pb-3 flex items-center justify-center"
        to={`/products/${product.id}`}
      >
        <img src={product?.image} className="w-32 h-32" alt={product?.title} />
      </Link>
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
