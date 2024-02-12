/* eslint-disable react/no-unescaped-entities */
import { useEffect, useState } from "react";
import RedBorder from "../../components/RedBorder";
import OurItem from "./OurItem";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductsCategory, filterProductsByPrice } from "./ProductsSlice";
import Loader from "../../components/Loader";

function AllProducts() {
  const [range, setRange] = useState(1);
  const [selected, setSelected] = useState("All Categories");
  const dispatch = useDispatch();
  const { categoryFiltered, priceFiltered, status, error } = useSelector(
    (state) => state.products
  );

  useEffect(() => {
    setRange(1);
    dispatch(fetchProductsCategory(selected.toLowerCase()));
  }, [selected, dispatch]);

  useEffect(() => {
    dispatch(filterProductsByPrice(+range));
  }, [dispatch, range]);

  return (
    <section className="my-10">
      <div>
        <div>
          <div className="flex justify-between items-center">
            <RedBorder>All Our Products</RedBorder>
            <div className="mt-10">
              <h3 className="text-2xl font-semibold mb-3">
                Price from 1$ to ${range}
              </h3>
              <input
                type="range"
                min="1"
                max="1000"
                step="1"
                value={range}
                onChange={(e) => setRange(e.target.value)}
                className="slider appearance-none w-full h-2 bg-stone-300 rounded-lg outline-none"
              />
            </div>

            <select
              className="outline-none border-2 border-stone-300 rounded-sm max-h-8 "
              value={selected}
              onChange={(e) => setSelected(e.target.value)}
            >
              <option>All Categories</option>
              <option>Men's clothing</option>
              <option>Women's clothing</option>
              <option>Jewelery</option>
              <option>Electronics</option>
            </select>
          </div>
          <div className="grid grid-cols-4 gap-12 mt-10">
            {status === "loading" && <Loader />}
            {status === "error" && (
              <p className="text-red-500">Error !!! {error}</p>
            )}
            {priceFiltered?.length > 0
              ? priceFiltered?.map((product) => (
                  <OurItem product={product} key={product?.id} />
                ))
              : categoryFiltered?.map((product) => (
                  <OurItem product={product} key={product?.id} />
                ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default AllProducts;
