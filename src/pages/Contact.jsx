import call from "../assets/call.png";
import mail from "../assets/mail.png";

function Contact() {
  return (
    <section>
      <div className="flex justify-between gap-5 my-32">
        <div className="shadow-lg py-5 px-6 w-96">
          <div className="border-b border-stone-900 ">
            <div className="flex items-center gap-3">
              <img src={call} alt="" />
              <p className="text-lg font-semibold">Call To Us</p>
            </div>
            <p className="font-medium tracking-wide py-3">
              We are available 24/7, 7 days a week.
            </p>
            <p className="pb-8">Phone: +8801611112222</p>
          </div>
          <div className="pt-5 max-w-64">
            <div className="flex items-center gap-3 pb-3">
              <img src={mail} alt="" />
              <p className="text-lg font-semibold">Write To Us</p>
            </div>
            <p className="font-medium tracking-wide py-3 text-sm pb-3">
              Fill out our form and we will contact you within 24 hours.
            </p>
            <p className="pb-3 tracking-wider">Emails: support@exclusive.com</p>
            <p className="pb-3 tracking-wider">
              Emails: customer@exclusive.com
            </p>
          </div>
        </div>

        <form className="shadow-md px-10 py-8">
          <div className="flex justify-between gap-5 mt-5">
            <input
              className="bg-stone-200 px-8 py-3 placeholder:text-stone-500 placeholder:font-medium placeholder:tracking-wider"
              type="text"
              placeholder="Your Name *"
              required
            />
            <input
              className="bg-stone-200 px-8 py-3 placeholder:text-stone-500 placeholder:font-medium placeholder:tracking-wider"
              type="email"
              placeholder="Your Email *"
              required
            />
            <input
              className="bg-stone-200 px-8 py-3 placeholder:text-stone-500 placeholder:font-medium placeholder:tracking-wider"
              type="number"
              placeholder="Your Phone *"
              required
            />
          </div>
          <input
            type="text"
            placeholder="Your Message *"
            className="w-full h-52 bg-stone-200 mt-8 text-center placeholder:text-stone-500 placeholder:font-medium placeholder:tracking-wider"
            required
          />
          <button className=" float-right text-md font-medium rounded-sm px-12 py-4 bg-red-500  text-slate-200 mt-10">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
