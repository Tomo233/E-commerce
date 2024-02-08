/* eslint-disable react/prop-types */
function CartItem({ product }) {
  return (
    <li className="grid grid-cols-4 gap-40 my-5">
      <div className="flex  gap-2">
        <img src={product.image} alt={product.title} className="w-12" />
        <p>{product.title}</p>
      </div>
      <p>${product.price}</p>
      <input
        type="number"
        className="bg-stone-200  w-18 h-10"
        min="1"
        defaultValue="1"
      />
      <p>${product.price * 2}</p>
    </li>
  );
}

export default CartItem;
