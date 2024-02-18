import { Link } from "react-router-dom";

function TopFooter() {
  return (
    <div className="bg-stone-950 py-3">
      <div className="mx-auto w-5/6 text-white flex">
        <div className="w-3/4 mx-auto flex justify-center">
          <div className="flex gap-10">
            <p>
              Summer Sale For All Swim Suits And Free Express Delivery - OFF
              50%!
            </p>
            <Link to="/products" className="font-semibold">
              Shop Now
            </Link>
          </div>
        </div>
        <div>
          <p className="text-white">English</p>
        </div>
      </div>
    </div>
  );
}

export default TopFooter;
