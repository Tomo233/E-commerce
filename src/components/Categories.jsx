import RedBorder from "./RedBorder";
import camera from "../assets/camera.png";
import cellphone from "../assets/cellphone.png";
import watch from "../assets/watch.png";
import headphones from "../assets/headphones.png";
import gamepad from "../assets/gamepad.png";

function Categories() {
  return (
    <section className="relative my-10">
      <RedBorder>Categories</RedBorder>
      <h2 className="text-3xl font-bold ">Browse By Categories</h2>
      <div className="flex gap-5 justify-between mt-10">
        <div className="grid place-items-center gap-y-2 border border-solid px-12 py-8 border-stone-300">
          <img src={camera} alt="" />
          <p>Camera</p>
        </div>
        <div className="grid place-items-center gap-y-2 border border-solid px-12 py-8 border-stone-300">
          <img src={cellphone} alt="" />
          <p>Phones</p>
        </div>
        <div className="grid place-items-center gap-y-2 border border-solid px-12 py-8 border-stone-300">
          <img src={watch} alt="" />
          <p>SmartWatch</p>
        </div>
        <div className="grid place-items-center gap-y-2 border border-solid px-12 py-8 border-stone-300">
          <img src={headphones} alt="" />
          <p>HeadPhones</p>
        </div>
        <div className="grid place-items-center gap-y-2 border border-solid px-12 py-8 border-stone-300">
          <img src={gamepad} alt="" />
          <p>GamePad</p>
        </div>
      </div>
    </section>
  );
}

export default Categories;
