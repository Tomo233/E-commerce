/* eslint-disable react/prop-types */
import SearchedItem from "./SearchedItem";

function SearchedResults({ products }) {
  return (
    <section className="max-h-96 overflow-y-scroll absolute top-12 bg-white w-72  z-10">
      {products?.map((product) => (
        <SearchedItem product={product} key={product.id} />
      ))}
    </section>
  );
}

export default SearchedResults;
