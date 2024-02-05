/* eslint-disable react/prop-types */
function CartItem({ product }) {
  return (
    <li className="flex justify-around my-5">
      <div className="flex  gap-2">
        <img src={product.image} alt={product.title} className="w-12" />
        <p>LCD Monitor</p>
      </div>
      <p>${product.price}</p>
      <input type="number" className="bg-stone-200 h-8" min="0" />
      <p>${product.price * 2}</p>
    </li>
  );
}

export default CartItem;
