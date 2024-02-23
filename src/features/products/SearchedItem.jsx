import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
function SearchedItem({ product }) {
  return (
    <Link
      className="flex gap-5 items-center justify-between border border-b-stone-900 py-5"
      to={`products/${product.id}`}
    >
      <img src={product?.image} className="w-12" alt="image" />
      <p className="text-sm">${product?.price}</p>
      <p className="text-sm">{product?.title}</p>
    </Link>
  );
}

export default SearchedItem;
