import { useDispatch, useSelector } from "react-redux";
import {
  applyCoupon,
  getCartProducts,
  getCouponMessage,
  getSubTotalPrice,
  getTotalPrice,
} from "../cart/CartSlice";
import OrderItem from "./OrderItem";
import { useState } from "react";

function CreateOrder() {
  const products = useSelector(getCartProducts);
  const subTotalPrice = useSelector(getSubTotalPrice);
  const totalPrice = useSelector(getTotalPrice);
  const couponMessage = useSelector(getCouponMessage);
  console.log(couponMessage);
  const [coupon, setCoupon] = useState("");
  const dispatch = useDispatch();

  const handleApplyCoupon = function () {
    dispatch(applyCoupon(coupon.toLowerCase()));
  };

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
        <div className="max-h-96 overflow-y-scroll border-b border-stone-900 mb-3">
          {products.map((item) => (
            <OrderItem product={item} key={item.id} />
          ))}
        </div>

        <div className="w-full">
          <div className="py-10">
            <div className="flex justify-between  border-b border-stone-900 mb-5">
              <p className="font-medium mb-3">Subtotal</p>
              <p>${subTotalPrice.toFixed(2)}</p>
            </div>
            <div className="flex justify-between border-b border-stone-900 mb-5">
              <p className="font-medium mb-3">Shipping</p>
              <p>
                ${subTotalPrice > 1000 ? Math.round(subTotalPrice * 0.2) : 0}
              </p>
            </div>
            <div className="flex justify-between">
              <p className="font-medium">Total</p>
              <p>${totalPrice.toFixed(2)}</p>
            </div>
            <div className="flex gap-5 mt-5">
              <input type="checkbox" disabled checked />
              <label className="font-medium">Cash on delivery</label>
            </div>
          </div>
        </div>

        <div className="flex justify-between items-center gap-5 mb-8">
          {couponMessage ===
          "Great news! 🎉 Thanks to your coupon, you're enjoying a 10% discount on your total price. Your savings are applied at checkout. Happy shopping!" ? (
            <>
              <input
                type="text"
                placeholder="Coupon Code"
                className="border border-slate-400 text-center h-14 w-52 rounded-sm cursor-not-allowed"
                value={coupon}
                onChange={() => setCoupon("")}
                disabled
              />
              <button
                className="text-md font-medium rounded-sm px-12 py-4 bg-slate-500 text-slate-200 cursor-not-allowed"
                onClick={handleApplyCoupon}
                disabled
              >
                Apply Coupon
              </button>
            </>
          ) : (
            <>
              <input
                type="text"
                placeholder="Coupon Code"
                className="border border-slate-400 text-center h-14 w-52 rounded-sm"
                value={coupon}
                onChange={(e) => setCoupon(e.target.value)}
              />
              <button
                className="text-md font-medium rounded-sm px-12 py-4 bg-red-500  text-slate-200"
                onClick={handleApplyCoupon}
              >
                Apply Coupon
              </button>
            </>
          )}
        </div>
        <p className="text-red-500 font-medium mb-3">{couponMessage}</p>
        <div>
          <button className="text-md font-medium rounded-sm px-12 py-4 bg-red-500  text-slate-200">
            Place Order
          </button>
        </div>
      </div>
    </section>
  );
}

export default CreateOrder;
