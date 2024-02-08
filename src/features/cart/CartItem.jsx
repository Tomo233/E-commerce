import { useState } from "react";
import { increaseOrDecreaseQuantity } from "./CartSlice";
import { useDispatch } from "react-redux";

/* eslint-disable react/prop-types */
function CartItem({ product }) {
  const [quantity, setQuantity] = useState(1);
  const productQuantity = product.quantity;
  const dispatch = useDispatch();
  console.log(productQuantity);

  function handleSetQuantity(e) {
    setQuantity(e.target.value);

    dispatch(increaseOrDecreaseQuantity({ id: product.id, quantity }));
  }

  return (
    <li className="grid grid-cols-4 gap-40 my-5">
      <div className="flex  gap-2">
        <img src={product.image} alt={product.title} className="w-12" />
        <p>{product.title}</p>
      </div>
      <p>${product.price}</p>
      <input
        type="number"
        className="bg-stone-200  w-18 h-10 text-center"
        min="0"
        value={quantity}
        // onChange={(e) => setQuantity(e.target.value)}
        onChange={handleSetQuantity}
      />
      <p>${product.price * 1}</p>
    </li>
  );
}

export default CartItem;
