import { useNavigate } from "react-router-dom";

function EmptyCart() {
  const navigate = useNavigate();
  return (
    <section className="max-w-xl mx-auto h-dvh">
      <button className="my-5">
        <button
          className="font-semibold text-stone-500"
          onClick={() => navigate(-1)}
        >
          &larr; Back To Shop
        </button>
      </button>
      <p className="text-xl font-semibold">
        Your cart is still empty. Start adding some products{" "}
      </p>
    </section>
  );
}

export default EmptyCart;
