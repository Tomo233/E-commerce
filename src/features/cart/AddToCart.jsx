import { useDispatch, useSelector } from "react-redux";
import { addToCart, getCurrentQuantity } from "./CartSlice";
import { useNavigate } from "react-router-dom";

/* eslint-disable react/prop-types */
function AddToCart({ product, isHovered }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const curQuantity = useSelector(getCurrentQuantity(product.id));
  const isInCart = curQuantity > 0;
  const newPrice = product.price - product.price * 0.2;
  const newPriceRounded = Number(newPrice.toFixed(2));

  function addItemToCart() {
    const newProduct = {
      id: product.id,
      title: product.title,
      image: product.image,
      price: newPriceRounded,
      quantity: 1,
      totalPrice: product.price,
      description: product.description,
      rating: product.rating.rate,
      category: product.category,
    };
    dispatch(addToCart(newProduct));
  }
  return (
    <>
      {isInCart ? (
        <button
          onClick={() => navigate("/cart")}
          className={`bg-red-600 text-sm text-stone-100 font-semibold w-80 h-10 absolute bottom-0 flex items-center justify-center transition-all  duration-700 ${
            isHovered ? "opacity-100" : "opacity-0"
          }`}
        >
          Go To Cart
        </button>
      ) : (
        <button
          onClick={addItemToCart}
          className={`bg-stone-950 text-sm text-stone-100 font-semibold w-80 h-10 absolute bottom-0 flex items-center justify-center transition-all  duration-700 ${
            isHovered ? "opacity-100" : "opacity-0"
          }`}
        >
          Add To Cart
        </button>
      )}
    </>
  );
}

export default AddToCart;
