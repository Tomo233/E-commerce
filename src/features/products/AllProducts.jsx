import { useState } from "react";
import Line from "../../components/Line";
import RedBorder from "../../components/RedBorder";
import { useGetAllProductsQuery } from "../api/apiSlice";
import OurItem from "./OurItem";
import ProductNavigation from "./ProductNavigation";

const items = [
  {
    label: "electronics",

    template: (
      <>
        <span className="text-2xl">Woman&rsquo;s fashion</span>
      </>
    ),
    command: () => {
      // Callback to run
      // navigate("/signUp");
    },
  },
  {
    label: "Jewelery",
    template: (
      <>
        <span className="text-2xl">jewelery</span>
      </>
    ),

    command: () => {
      // Callback to run
    },
  },

  {
    label: "Men's clothing",
    icon: "pi pi-signout",
    command: () => {
      // Callback to run
      console.log("electronics");
    },
    template: <span className="text-2xl">men&rsquo;s clothing</span>,
  },
  {
    label: "Woman's clothing",
    icon: "pi pi-signout",
    command: () => {
      // Callback to run
      console.log("electronics");
    },
    template: <span className="text-2xl">woman&rsquo;s clothing</span>,
  },
];

function AllProducts() {
  const { data: products } = useGetAllProductsQuery();
  const [range, setRange] = useState(1);

  return (
    <section className="my-10">
      <div className="flex justify-between">
        <div>
          <div className="border-b border-stone-400">
            <h3 className="font-semibold text-2xl">Categories</h3>
            <ProductNavigation items={items} />
          </div>
          <div className="mt-10">
            <h3 className="text-2xl font-semibold mb-3">
              Price from 1$ to ${range}
            </h3>
            <input
              type="range"
              min="1"
              max="2000"
              step="1"
              value={range}
              onChange={(e) => setRange(e.target.value)}
              className="appearance-none w-full h-2 bg-red-500 rounded-lg outline-none"
            />
            <div>
              <label className="text-2xl">A-Z</label>
              <input type="checkbox" />
            </div>
            <div>
              <label className="text-2xl">Z-A</label>
              <input type="checkbox" />
            </div>
          </div>
        </div>

        <div>
          <RedBorder>All Our Products</RedBorder>
          <div className="grid grid-cols-4 gap-12 mt-10">
            {products?.map((product) => (
              <OurItem product={product} key={product.id} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default AllProducts;
