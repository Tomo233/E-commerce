import Interval from "./Interval";
import { Button as ArrowButton } from "primereact/button";
import Carousel from "./Carousel";
import Button from "./Button";

function FlashSalesSection() {
  return (
    <section className="my-12">
      <p className="text-red-500 font-bold border-l-8  border-red-600 pl-2 ">
        Today&rsquo;s
      </p>
      <div className="flex justify-between">
        <h2 className="text-3xl font-bold ">Flash Sales</h2>
        <Interval />
        <div className="flex gap-4">
          <ArrowButton
            icon="pi pi-arrow-left"
            rounded
            severity="secondary"
            aria-label="Bookmark"
            className="bg-slate-200"
          />
          <ArrowButton
            icon="pi pi-arrow-right"
            rounded
            severity="secondary"
            aria-label="Bookmark"
            className="bg-slate-200"
          />
        </div>
      </div>
      <Carousel />
      <Button>View All Products </Button>
    </section>
  );
}

export default FlashSalesSection;
