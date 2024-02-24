/* eslint-disable react/prop-types */
function OrderItem({ product }) {
  return (
    <div className="flex items-center justify-between w-full mb-5">
      <div className="flex items-center gap-5">
        <img src={product.image} alt={product.title} className="w-14" />
        <h3>{product.title}</h3>
      </div>

      <p>${product.price}</p>
    </div>
  );
}

export default OrderItem;
