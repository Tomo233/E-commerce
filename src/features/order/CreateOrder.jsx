import { useSelector } from "react-redux";
import Button from "../../components/Button";
import { getCartProducts } from "../cart/CartSlice";
import OrderItem from "./OrderItem";

function CreateOrder() {
  const products = useSelector(getCartProducts);
  console.log(products);
  return (
    <section className="mt-10 flex justify-between pb-40">
      <div className="w-1/3">
        <h2 className="text-stone-950 text-3xl font-medium mb-10">
          Billing Details
        </h2>

        <form className="grid gap-y-3 ">
          <label className="text-stone-500">First Name*</label>
          <input type="text" required className="bg-stone-200 py-3 w-" />

          <label className="text-stone-500">Street Address*</label>
          <input type="text" required className="bg-stone-200 py-3" />

          <label className="text-stone-500">Town/City</label>
          <input type="text" required className="bg-stone-200 py-3" />

          <label className="text-stone-500">Phone Number*</label>
          <input type="text" required className="bg-stone-200 py-3" />

          <label className="text-stone-500">Email Address*</label>
          <input type="email" required className="bg-stone-200 py-3" />
        </form>
      </div>
      <div className="grid place-items-start w-1/3">
        <div>
          {products.map((item) => (
            <OrderItem product={item} key={item.id} />
          ))}
        </div>

        <div className="w-full">
          <div className="py-10">
            <div className="flex justify-between  border-b border-stone-900 mb-5">
              <p className="font-medium mb-3">Subtotal</p>
              <p>$1750</p>
            </div>
            <div className="flex justify-between border-b border-stone-900 mb-5">
              <p className="font-medium mb-3">Shipping</p>
              <p>Free</p>
            </div>
            <div className="flex justify-between">
              <p className="font-medium">Total</p>
              <p>$1750</p>
            </div>
            <div className="flex gap-5 mt-5">
              <input type="checkbox" disabled checked />
              <label className="font-medium">Cash on delivery</label>
            </div>
          </div>
        </div>

        <div className="flex justify-between items-center gap-5 mb-8">
          <input
            type="text"
            placeholder="Coupon Code"
            className="border border-slate-400 text-center h-14 w-52 rounded-sm"
          />
          <Button type="primary">Apply Coupon</Button>
        </div>
        <button className="text-md font-medium rounded-sm px-12 py-4 bg-red-500  text-slate-200">
          Place Order
        </button>
      </div>
    </section>
  );
}

export default CreateOrder;
