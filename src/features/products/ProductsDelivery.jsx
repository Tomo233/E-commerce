import whiteHeadPhones from "../../assets/whiteHeadPhones.png";
import secure from "../../assets/secure.png";
import delivery from "../../assets/delivery.png";
function ProductsDelivery() {
  return (
    <section className="my-36">
      <div className="flex justify-center gap-20">
        <div>
          <div className="rounded-full flex justify-center items-center">
            <img
              src={delivery}
              alt="delivery"
              className="bg-stone-900 rounded-full px-1 py-1"
            />
          </div>
          <div className="text-center">
            <h3 className="font-semibold text-xl mt-3">
              FREE AND FAST DELIVERY
            </h3>
            <p className="font-semibold  mt-1">
              Free delivery for all orders over $140
            </p>
          </div>
        </div>
        <div>
          <div className="rounded-full flex justify-center items-center">
            <img
              src={whiteHeadPhones}
              alt="whiteHeadPhones"
              className="bg-stone-900 rounded-full px-1 py-1"
            />
          </div>
          <div className="text-center">
            <h3 className="font-semibold text-xl mt-3">
              24/7 CUSTOMER SERVICE
            </h3>
            <p className="font-semibold  mt-1">
              Friendly 24/7 customer support
            </p>
          </div>
        </div>
        <div>
          <div className="rounded-full flex justify-center items-center">
            <img
              src={secure}
              alt="secure"
              className="bg-stone-900 rounded-full px-1 py-1"
            />
          </div>
          <div className="text-center">
            <h3 className="font-semibold text-xl mt-3">MONEY BACK GUARANTEE</h3>
            <p className="font-semibold  mt-1">We reurn money within 30 days</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProductsDelivery;
