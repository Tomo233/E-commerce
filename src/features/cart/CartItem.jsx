import { useState } from "react";
import { increaseOrDecreaseQuantity, removeFromCart } from "./CartSlice";
import { useDispatch } from "react-redux";

/* eslint-disable react/prop-types */
function CartItem({ product }) {
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();

  function handleSetQuantity(e) {
    setQuantity(e.target.value);

    dispatch(increaseOrDecreaseQuantity({ id: product.id, quantity }));
  }

  return (
    <li className="grid grid-cols-5 gap-40 my-5">
      <div className="flex w-56 gap-5">
        <img src={product.image} alt={product.title} className="w-12" />
        <p>{product.title}</p>
      </div>
      <p>${product.price}</p>
      <input
        type="number"
        className="bg-stone-200  w-18 h-10 text-center"
        min="0"
        value={quantity}
        onChange={handleSetQuantity}
      />
      <button
        className="bg-red-500 text-stone-100 font-medium h-10"
        onClick={() => dispatch(removeFromCart(product.id))}
      >
        Delete Item
      </button>
      <p>${product.price * quantity}</p>
    </li>
  );
}

export default CartItem;
