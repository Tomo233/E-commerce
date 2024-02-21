/* eslint-disable react/prop-types */
import SearchedItem from "./SearchedItem";

function SearchedResults({ products }) {
  console.log(products);
  return (
    <section className="box-shadow-custom absolute top-60 left-1/2  transform -translate-x-1/2 -translate-y-1/2  bg-stone-200 w-72  z-10">
      {[...products].map((product) => (
        <SearchedItem product={product} key={product.id} />
      ))}
    </section>
  );
}

export default SearchedResults;
