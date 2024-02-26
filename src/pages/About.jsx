import about from "../assets/about.png";

function About() {
  return (
    <section className="pb-40">
      <div className="flex justify-between items-center mt-16">
        <div>
          <h2 className="text-5xl font-semibold">Our Story</h2>
          <div className="max-w-lg mt-5">
            <p className="font-medium tracking-wide">
              Launced in 2015, Exclusive is South Asia’s premier online shopping
              makterplace with an active presense in Bangladesh. Supported by
              wide range of tailored marketing, data and service solutions,
              Exclusive has 10,500 sallers and 300 brands and serves 3 millioons
              customers across the region.
            </p>
            <p className="font-medium tracking-wide pt-3">
              Exclusive has more than 1 Million products to offer, growing at a
              very fast. Exclusive offers a diverse assotment in categories
              ranging from consumer.
            </p>
          </div>
        </div>
        <img src={about} alt="about" />
      </div>
      <div>
        <div></div>
      </div>
    </section>
  );
}

export default About;
