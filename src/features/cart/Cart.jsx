import Button from "../../components/Button";
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

  return (
    <section className="h-dvh">
      <div>
        <div className="grid gap-40 grid-cols-4 bg-stone-200 py-5 my-10">
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
        <Button type="white">Return To Shop</Button>
        <div className="flex mt-10 gap-5">
          <input
            type="text"
            placeholder="Coupon Code"
            className="border border-slate-400 text-center px-6 rounded-sm"
          />
          <Button type="primary">Apply Coupon</Button>
        </div>
      </div>
    </section>
  );
}

export default Cart;
