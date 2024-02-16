import { Link } from "react-router-dom";
import hdd from "../../assets/hdd.png";
function HddProduct() {
  return (
    <section className="bg-stone-950 my-10 py-20">
      <div className="flex items-center justify-around">
        <div>
          <p className="text-green-400 font-semibold">Categories</p>
          <h2 className="text-6xl text-stone-100 font-semibold tracking-wide my-5 leading-tight	">
            Enhance Your <span className="block"> Computer Experience</span>
          </h2>

          <div className="mt-5 flex gap-8">
            <div className="bg-stone-100 w-16 h-16 rounded-full flex  flex-col	items-center justify-center">
              <p className="text-sm font-bold">23</p>
              <p className="text-sm font-medium">Hours</p>
            </div>

            <div className="bg-stone-100 w-16 h-16 rounded-full flex  flex-col	items-center justify-center">
              <p className="text-sm font-bold">05</p>
              <p className="text-sm font-medium">Days</p>
            </div>

            <div className="bg-stone-100 w-16 h-16 rounded-full flex  flex-col	items-center justify-center">
              <p className="text-sm font-bold">59</p>
              <p className="text-sm font-medium">Minutes</p>
            </div>
            <div className="bg-stone-100 w-16 h-16 rounded-full flex  flex-col	items-center justify-center">
              <p className="text-sm font-bold">35</p>
              <p className="text-sm font-medium">Seconds</p>
            </div>
          </div>
          <button className="mt-10">
            <Link
              to="products/9"
              className="bg-green-600 text-slate-200 text-md font-medium rounded-sm px-12 py-4"
            >
              Buy Now
            </Link>
          </button>
        </div>

        <div>
          <img src={hdd} alt="speaker" className="w-72" />
        </div>
      </div>
    </section>
  );
}

export default HddProduct;
