import { Link, useNavigate } from "react-router-dom";
import CartItem from "./CartItem";

function Cart() {
  const products = [
    {
      id: 9,
      title: "WD 2TB Elements Portable External Hard Drive - USB 3.0 ",
      price: 64,
      description:
        "USB 3.0 and USB 2.0 Compatibility Fast data transfers Improve PC Performance High Capacity; Compatibility Formatted NTFS for Windows 10, Windows 8.1, Windows 7; Reformatting may be required for other operating systems; Compatibility may vary depending on user’s hardware configuration and operating system",
      category: "electronics",
      image: "https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg",
    },
    {
      id: 9,
      title: "WD 2TB Elements Portable External Hard Drive - USB 3.0 ",
      price: 64,
      description:
        "USB 3.0 and USB 2.0 Compatibility Fast data transfers Improve PC Performance High Capacity; Compatibility Formatted NTFS for Windows 10, Windows 8.1, Windows 7; Reformatting may be required for other operating systems; Compatibility may vary depending on user’s hardware configuration and operating system",
      category: "electronics",
      image: "https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg",
    },
    {
      id: 9,
      title: "WD 2TB Elements Portable External Hard Drive - USB 3.0 ",
      price: 64,
      description:
        "USB 3.0 and USB 2.0 Compatibility Fast data transfers Improve PC Performance High Capacity; Compatibility Formatted NTFS for Windows 10, Windows 8.1, Windows 7; Reformatting may be required for other operating systems; Compatibility may vary depending on user’s hardware configuration and operating system",
      category: "electronics",
      image: "https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg",
    },
  ];
  console.log(products);
  // const navigate = useNavigate();
  return (
    // <section className="mx-auto h-dvh">
    //   <div className="bg-stone-200 flex justify-around  py-5 my-10">
    //     <p className="text-sm text-stone-900 font-medium">Product</p>
    //     <p className="text-sm text-stone-900 font-medium">Price</p>
    //     <p className="text-sm text-stone-900 font-medium">Quantity</p>
    //     <p className="text-sm text-stone-900 font-medium">Subtotal</p>
    //   </div>
    //   <ul>
    //     {products.map((product) => (
    //       <CartItem key={product.id} product={product} />
    //     ))}
    //   </ul>
    // </section>
    <section className="mx-auto h-dvh">
      <div className="">
        <div className="bg-stone-200 flex justify-around py-5 my-10">
          <p className="text-sm text-stone-900 font-medium">Product</p>
          <p className="text-sm text-stone-900 font-medium">Price</p>
          <p className="text-sm text-stone-900 font-medium">Quantity</p>
          <p className="text-sm text-stone-900 font-medium">Subtotal</p>
        </div>
        <ul>
          {products.map((product) => (
            <CartItem key={product.id} product={product} />
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Cart;
