import Rating from "../../components/Rating";
import blackDelivery from "../../assets/blackDelivery.png";
import returnIcon from "../../assets/return.png";
import { useGetCertainProductQuery } from "../api/apiSlice";
import { useParams } from "react-router-dom";

// const product = {
//   id: 1,
//   title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
//   price: 109.95,
//   description:
//     "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
//   category: "men's clothing",
//   image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
// };

function Product() {
  const { productId } = useParams();
  const { data: product } = useGetCertainProductQuery(productId);
  return (
    <section className="flex justify-between  items-center my-20 ">
      <div>
        <img src={product?.image} className="w-96 " alt="" />
      </div>
      <div className="grid">
        <div className="border-b border-stone-400 mb-5">
          <h2 className="text-3xl font-semibold">{product?.title}</h2>
          <Rating value="3" />
          <p className="text-2xl my-2">${product?.price}</p>
          <p className="w-96 mb-5 font-medium">{product?.description}</p>
        </div>

        <div className="flex gap-7 my-3">
          <input
            type="number"
            className="bg-stone-100 border border-stone-500 px-3 py-3 text-center"
            min={1}
          />
          <button className="bg-red-500 px-8 py-3 text-stone-100 font-medium">
            Add To Cart
          </button>
        </div>

        <div className="flex border border-stone-500 py-7 mt-5">
          <img src={blackDelivery} className="w-12" alt="delivery" />
          <div>
            <h4 className="text-stone-900 font-semibold">Free Delivery</h4>
            <p className="underline text-stone-900 font-semibold">
              Enter your postal code for Delivery Availability
            </p>
          </div>
        </div>

        <div className="flex border border-stone-500 py-7">
          <img src={returnIcon} className="w-12" alt="returnIcon" />
          <div>
            <h3 className="text-stone-900 font-semibold">Return Delivery</h3>
            <p className="underline text-stone-900 font-semibold">
              Free 30 Days Delivery Returns. Details
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Product;
