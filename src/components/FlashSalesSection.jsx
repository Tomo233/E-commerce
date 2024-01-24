import Interval from "./Interval";
import { Button } from "primereact/button";

function FlashSalesSection() {
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
    </section>
  );
}

export default FlashSalesSection;
