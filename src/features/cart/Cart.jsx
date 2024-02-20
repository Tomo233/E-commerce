import { useSelector } from "react-redux";
import Button from "../../components/Button";
import CartItem from "./CartItem";
import { getCartProducts, getTotalPrice } from "./CartSlice";
import EmptyCart from "./EmptyCart";
import { Link } from "react-router-dom";

function Cart() {
  const products = useSelector(getCartProducts);

  const subTotalPrice = useSelector(getTotalPrice);
  const twentyPercentOfPrice =
    subTotalPrice > 1000 ? Math.round(Number(subTotalPrice * 0.2)) : 0;
  const totalPrice = subTotalPrice + twentyPercentOfPrice;

  if (!products.length) return <EmptyCart />;

  return (
    <section>
      <div>
        <div className="grid gap-40 grid-cols-5 bg-stone-200 py-5 my-10">
          <p className="text-sm text-stone-900 font-medium">Product</p>
          <p className="text-sm text-stone-900 font-medium">Price</p>
          <p className="text-sm text-stone-900 font-medium">Quantity</p>
          <p className="text-sm text-stone-900 font-medium">Delete</p>
          <p className="text-sm text-stone-900 font-medium">Subtotal</p>
        </div>
        <ul>
          {products.map((product) => (
            <CartItem key={product.id} product={product} />
          ))}
        </ul>
        <Button type="white" to="/products">
          Return To Shop
        </Button>
        <div className="flex justify-between">
          <div className="flex mt-10 gap-5">
            <input
              type="text"
              placeholder="Coupon Code"
              className="border border-slate-400 text-center h-14 px-6 rounded-sm"
            />
            <Button type="primary">Apply Coupon</Button>
          </div>

          <div className="max-w-md border mb-5 border-stone-900 rounded-sm">
            <div className="p-10">
              <h3 className="text-xl font-semibold  mb-1">Cart Total</h3>
              <p className="text-red-500 font-medium mb-5">
                🎁 Enjoy Free Shipping on Orders Over $1000! 🚚
              </p>
              <div className="flex justify-between border-b border-stone-900 mb-5">
                <p className="font-medium mb-3">Subtotal</p>
                <p>${subTotalPrice.toFixed(2)}</p>
              </div>
              <div className="flex justify-between border-b border-stone-900 mb-5">
                <p className="font-medium mb-3">Shipping</p>
                <p>${twentyPercentOfPrice}</p>
              </div>
              <div className="flex justify-between">
                <p className="font-medium">Total</p>
                <p>${totalPrice.toFixed(2)}</p>
              </div>
              <Link to="/order/checkout">
                <button className="text-md font-medium rounded-sm px-12 py-4 bg-red-500 text-slate-200 flex mt-5">
                  Procees to checkout
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Cart;
