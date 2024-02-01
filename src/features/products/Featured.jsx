import RedBorder from "../../components/RedBorder";
import perfume from "../../assets/perfume.png";
import ps5 from "../../assets/ps5.png";
import speakers from "../../assets/speakers.png";
import womanHat from "../../assets/womanHat.png";

function Featured() {
  return (
    <section className="my-10">
      <RedBorder>Featured</RedBorder>
      <h2 className="text-3xl font-bold">New Arrival</h2>

      <div className="grid grid-cols-2 gap-5 my-12">
        <div className="bg-stone-900 p-4 row-span-3 relative rounded-md">
          <div className="absolute bottom-10 z-10 w-64 left-14 max-w-72 mb-3">
            <h3 className="text-stone-100 text-2xl font-semibold tracking-wide">
              PlayStation 5
            </h3>
            <p className="text-stone-100 tracking-wide my-2">
              Black and White version of the PS5 coming out on sale.
            </p>
            <p className="text-stone-100 underline font-semibold">Shop Now</p>
          </div>

          <img
            src={ps5}
            alt="ps5"
            className="mx-auto absolute left-1/2 transform -translate-x-1/2 bottom-0"
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
            <p className="text-stone-100 underline font-semibold">Shop Now</p>
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
                Speakers
              </h3>
              <p className="text-stone-100 tracking-wide my-1">
                Amazon wireless speakers
              </p>
              <p className="text-stone-100 underline font-semibold">Shop Now</p>
            </div>
          </div>

          <div className="bg-stone-900 p-4 w-80 h-80 relative rounded-md">
            <img
              src={perfume}
              alt="perfume"
              className="mx-auto absolute z-0 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            />
            <div className="absolute bottom-10 left-10">
              <h3 className="text-stone-100 text-2xl font-semibold tracking-wide">
                Perfume
              </h3>
              <p className="text-stone-100 tracking-wide my-1">
                GUCCI INTENSE OUD EDP
              </p>
              <p className="text-stone-100 underline font-semibold">Shop Now</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Featured;
