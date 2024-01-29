/* eslint-disable react/prop-types */
import { Carousel } from "primereact/carousel";
import Rating from "./Rating";

export default function ResponsiveDemo({ products }) {
  const productTemplate = (product) => {
    const itemRating = product?.rating?.rate.toFixed();

    return (
      <div className="flex items-center justify-center gap-4 mt-5 max-w-md">
        <div className="mb-3">
          <img src={product.image} className="w-36 h-36" alt={product.title} />
        </div>
        <div className="w-56">
          <h4 className="font-medium">{product.title}</h4>
          <h6 className="text-red-700 font-medium">${product.price}</h6>
          <div className="mt-5 flex flex-wrap gap-2 justify-content-center"></div>
          <Rating value={itemRating} />
        </div>
      </div>
    );
  };

  // if (isLoading) return <Loader />;
  // console.log(error);
  return (
    <div className="card p-d-flex p-jc-center p-ai-center max-w-full mt-3">
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
