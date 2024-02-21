/* eslint-disable react/prop-types */
function SearchedItem({ product }) {
  return (
    <div className="flex gap-5 items-center justify-between border border-b-stone-900 py-5">
      <img src={product?.image} className="w-12" alt="image" />
      <p className="text-sm">${product?.price}</p>
      <p className="text-sm">{product?.title}</p>
    </div>
  );
}

export default SearchedItem;
