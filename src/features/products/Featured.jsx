import RedBorder from "../../components/RedBorder";
import jewelry from "../../assets/jewelry.png";
import man from "../../assets/man.png";
import speakers from "../../assets/speakers.png";
import womanHat from "../../assets/womanHat.png";
import { Link } from "react-router-dom";

function Featured() {
  return (
    <section className="my-10">
      <RedBorder>Featured</RedBorder>
      <h2 className="text-3xl font-bold">New Arrival</h2>

      <div className="grid grid-cols-2 gap-5 my-12">
        <div className="bg-stone-900 p-4 row-span-3 relative rounded-md">
          <div className="absolute bottom-10 z-10 w-64 left-14 max-w-72 mb-3">
            <h3 className="text-stone-100 text-2xl font-semibold tracking-wide">
              Man’s Collections
            </h3>
            <p className="text-stone-100 tracking-wide my-2">
              Featured Man collections that give you another vibe. Shop Now
            </p>
            <Link
              className="text-stone-100 underline font-semibold"
              to="/products/category/men's clothing"
            >
              Shop Now
            </Link>
          </div>
          <img
            src={man}
            alt="man"
            className="h-5/6 mx-auto absolute left-1/2 transform -translate-x-1/2 top-14"
          />
        </div>

        <div className="bg-stone-900 p-4 flex h-64 items-end relative rounded-md">
          <div className="max-w-72 mb-3">
            <h3 className="text-stone-100 text-2xl font-semibold tracking-wide">
              Women’s Collections
            </h3>
            <p className="text-stone-100 tracking-wide my-2">
              Featured woman collections that give you another vibe. Shop Now
            </p>
            <Link
              className="text-stone-100 underline font-semibold"
              to="/products/category/women's clothing"
            >
              Shop Now
            </Link>
          </div>

          <img
            src={womanHat}
            alt="hat"
            className="mx-auto absolute bottom-0 right-3"
          />
        </div>

        <div className="flex justify-between">
          <div className="bg-stone-900 p-4 w-80 relative rounded-md">
            <img
              src={speakers}
              alt="speakers"
              className="mx-auto absolute z-0 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            />
            <div className="absolute bottom-10 left-10 max-w-72">
              <h3 className="text-stone-100 text-2xl font-semibold tracking-wide">
                Tehnology
              </h3>
              <p className="text-stone-100 tracking-wide my-1">
                Amazon SSD and HDD
              </p>
              <Link
                className="text-stone-100 underline font-semibold"
                to="/products/category/electronics"
              >
                Shop Now
              </Link>
            </div>
          </div>

          <div className="bg-stone-900 p-4 w-80 h-80 relative rounded-md">
            <img
              src={jewelry}
              alt="jewerly"
              className="h-64 mx-auto absolute z-0 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            />
            <div className="absolute bottom-10 left-10">
              <h3 className="text-stone-100 text-2xl font-semibold tracking-wide">
                Jewelry
              </h3>
              <p className="text-stone-100 tracking-wide my-1">
                Amazing Jewelry
              </p>
              <Link
                className="text-stone-100 underline font-semibold"
                to="/products/category/jewelery"
              >
                Shop Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Featured;
