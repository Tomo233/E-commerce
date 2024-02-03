/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/prop-types */
import { Carousel } from "primereact/carousel";
import Rating from "./Rating";

export default function ResponsiveDemo({ products }) {
  const productTemplate = (product) => {
    const itemRating = product?.rating?.rate?.toFixed();
    const newPrice = product.price - product.price * 0.2;
    return (
      <div className="flex items-center flex-col justify-center gap-4 mt-10 max-w-md cursor-pointer relative ">
        <div className="">
          <img
            src={product?.image}
            className="w-36 h-36"
            alt={product?.title}
          />
        </div>
        <div className="w-56">
          <h4 className="font-medium">{product?.title}</h4>
          <div className="flex gap-5 my-2">
            <h6 className="text-red-700 font-medium">${newPrice.toFixed(2)}</h6>
            <h6 className="text-stone-400 line-through font-medium">
              ${product?.price.toFixed(2)}
            </h6>
          </div>
          <div className="mt-5 flex flex-wrap gap-2 justify-content-center"></div>
          <Rating value={itemRating} />
        </div>

        <div className="bg-violet-800 w-80 h-10 absolute bottom-0 flex items-center justify-center">
          <p className="">Add To Cart</p>
        </div>
      </div>
    );
  };

  return (
    <div className="card p-d-flex p-jc-center p-ai-center max-w-full mt-3 ">
      <Carousel
        value={products}
        numVisible={3}
        numScroll={3}
        responsiveOptions={[
          {
            breakpoint: "575px",
            numVisible: 1,
            numScroll: 1,
          },
          {
            breakpoint: "767px",
            numVisible: 2,
            numScroll: 1,
          },
          {
            breakpoint: "1199px",
            numVisible: 3,
            numScroll: 1,
          },
          {
            breakpoint: "1400px",
            numVisible: 4,
            numScroll: 1,
          },
        ]}
        circular
        itemTemplate={productTemplate}
      />
    </div>
  );
}
