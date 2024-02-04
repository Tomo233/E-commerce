/* eslint-disable react/prop-types */
import Rating from "../../components/Rating";
function OurItem({ product }) {
  const itemRating = product?.rating?.rate?.toFixed();
  return (
    <div className="w-80 flex flex-col items-center justify-center cursor-pointer relative h-80">
      <div className="pb-3 flex items-center justify-center">
        <img src={product?.image} className="w-32 h-32" alt={product?.title} />
      </div>
      <div className="w-56">
        <h4 className="font-medium">{product?.title}</h4>
        <h6 className="text-red-700 font-medium">${product?.price}</h6>
        <div className="mt-5 flex flex-wrap gap-2 justify-content-center"></div>
        <Rating value={itemRating} />
      </div>
      <p className="bg-stone-900 text-sm font-semibold px-3 py-2 text-stone-100 mt-2">
        Add To Cart
      </p>
    </div>
  );
}

export default OurItem;
