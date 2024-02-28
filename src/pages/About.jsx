import about from "../assets/about.png";
import firstService from "../assets/firstService.png";
import secondService from "../assets/secondService.png";
import thirdService from "../assets/thirdService.png";
import fourthService from "../assets/fourthService.png";
import tom from "../assets/tom.png";
import emma from "../assets/emma.png";
import will from "../assets/will.png";
import instagram from "../assets/instagram.png";
import twt from "../assets/twt.png";
import linkedin from "../assets/linkedin.png";
import ProductsDelivery from "../features/products/ProductsDelivery";

function About() {
  return (
    <section>
      <div className="flex justify-between items-center my-20">
        <div>
          <h2 className="text-5xl font-semibold">Our Story</h2>
          <div className="max-w-lg mt-8">
            <p className="font-medium tracking-wider">
              Launced in 2015, Exclusive is South Asia’s premier online shopping
              makterplace with an active presense in Bangladesh. Supported by
              wide range of tailored marketing, data and service solutions,
              Exclusive has 10,500 sallers and 300 brands and serves 3 millioons
              customers across the region.
            </p>
            <p className="font-medium tracking-wider pt-3">
              Exclusive has more than 1 Million products to offer, growing at a
              very fast. Exclusive offers a diverse assotment in categories
              ranging from consumer.
            </p>
          </div>
        </div>
        <img src={about} alt="about" />
      </div>
      <div className="flex justify-between items-center">
        <div className="border border-stone-300 w-64 h-52 py-3">
          <div className="grid place-items-center mt-5">
            <img src={firstService} alt="" />
            <h3 className="text-2xl font-semibold">10.5K</h3>
            <p className="font-medium mt-1">Sallers active our site</p>
          </div>
        </div>
        <div className="border border-stone-300 w-64 h-52 py-3 bg-red-500 my-32">
          <div className="grid place-items-center mt-5">
            <img src={secondService} alt="" />
            <h3 className="text-2xl font-semibold text-stone-100">33K</h3>
            <p className="font-medium text-stone-100 mt-1">
              Mopnthly Produduct Sale
            </p>
          </div>
        </div>
        <div className="border border-stone-300 w-64 h-52 py-3">
          <div className="grid place-items-center mt-5">
            <img src={thirdService} alt="" />
            <h3 className="text-2xl font-semibold">45.5K</h3>
            <p className="font-medium mt-1">Customer active in our site</p>
          </div>
        </div>
        <div className="border border-stone-300 w-64 h-52 py-3">
          <div className="grid place-items-center mt-5">
            <img src={fourthService} alt="" />
            <h3 className="text-2xl font-semibold ">25K</h3>
            <p className="font-medium mt-1">Anual gross sale in our site</p>
          </div>
        </div>
      </div>
      <div className="flex justify-between mb-36">
        <div className="max-w-96">
          <img src={tom} alt="image" />
          <h3 className="text-3xl font-semibold mt-3">Tom Cruise</h3>
          <p className="tracking-wider font-medium">Founder & Chaiman</p>
          <div className="flex gap-5 mt-2">
            <img src={twt} alt="" />
            <img src={instagram} alt="" />
            <img src={linkedin} alt="" />
          </div>
        </div>
        <div className="max-w-96">
          <img src={emma} alt="image" />
          <h3 className="text-3xl font-semibold mt-3">Emma Watson</h3>
          <p className="tracking-wider font-medium">Managing Director</p>
          <div className="flex gap-5 mt-2">
            <img src={twt} alt="" />
            <img src={instagram} alt="" />
            <img src={linkedin} alt="" />
          </div>
        </div>
        <div className="max-w-96">
          <img src={will} alt="image" />
          <h3 className="text-3xl font-semibold mt-3">Will Smith</h3>
          <p className="tracking-wider font-medium">Product Designer</p>
          <div className="flex gap-5 mt-2">
            <img src={twt} alt="" />
            <img src={instagram} alt="" />
            <img src={linkedin} alt="" />
          </div>
        </div>
      </div>
      <ProductsDelivery />
    </section>
  );
}

export default About;
