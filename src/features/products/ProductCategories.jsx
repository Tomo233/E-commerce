import RedBorder from "../../components/RedBorder";
import Line from "../../components/Line";

import manClothes from "../../assets/manClothes.png";
import cellphone from "../../assets/cellphone.png";
import jewelryIcon from "../../assets/jewelryIcon.png";
import womanDress from "../../assets/womanDress.png";
import { Link } from "react-router-dom";

function Categories() {
  return (
    <section className="relative my-12 pb-16">
      <RedBorder>Categories</RedBorder>
      <h2 className="text-3xl font-bold ">Browse By Categories</h2>
      <div className="flex gap-5 justify-between mt-10">
        <Link
          className="grid place-items-center gap-y-2 border border-solid px-12 py-8 border-stone-300"
          to="/category/men's clothing"
        >
          <img src={manClothes} className="w-14" alt="" />
          <p>Man’s</p>
        </Link>
        <Link
          className="grid place-items-center gap-y-2 border border-solid px-12 py-8 border-stone-300"
          to="/category/electronics"
        >
          <img src={cellphone} alt="" />
          <p>Electronics</p>
        </Link>
        <Link
          className="grid place-items-center gap-y-2 border border-solid px-12 py-8 border-stone-300"
          to="/category/women's clothing"
        >
          <img src={womanDress} className="w-14" alt="" />
          <p>Woman’s</p>
        </Link>
        <Link
          className="grid place-items-center gap-y-2 border border-solid px-12 py-8 border-stone-300"
          to="/category/jewelery"
        >
          <img src={jewelryIcon} alt="" className="w-14" />
          <p>Jewelry</p>
        </Link>
      </div>
      <Line />
    </section>
  );
}

export default Categories;
