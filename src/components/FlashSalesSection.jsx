import Interval from "./Interval";
import { Button } from "primereact/button";
import FlashSalesProduct from "./FlashSalesProduct";

function FlashSalesSection() {
  const products = [
    {
      id: 1,
      title: "tmaotmoatmom",
      price: "2313131",
      category: "dmsaodmoasdmasodm",
      image: "https://fakestoreapi.com/img/81XH0e8fefL._AC_UY879_.jpg",
      rating: 3.5,
    },
  ];
  return (
    <section className="mt-12">
      <p className="text-red-500 font-bold border-l-8  border-red-600 pl-2 ">
        Today&rsquo;s
      </p>
      <div className="flex justify-between">
        <h2 className="text-3xl font-bold ">Flash Sales</h2>
        <Interval />
        <div className="flex gap-4">
          <Button
            icon="pi pi-arrow-left"
            rounded
            severity="secondary"
            aria-label="Bookmark"
            className="bg-slate-200"
          />
          <Button
            icon="pi pi-arrow-right"
            rounded
            severity="secondary"
            aria-label="Bookmark"
            className="bg-slate-200"
          />
        </div>
      </div>
      <ul className="flex justify-between gap-2 mt-5 w-screen-lg">
        {products.map((item) => (
          <FlashSalesProduct item={item} key={item.id} />
        ))}
      </ul>
    </section>
  );
}

export default FlashSalesSection;
