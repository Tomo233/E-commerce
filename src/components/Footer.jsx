import qrCode from "../assets/qrCode.png";
import googlePlay from "../assets/googlePlay.png";
import appStore from "../assets/appStore.png";
function Footer() {
  return (
    <footer className="bg-stone-950 pt-10">
      <div className="mx-auto w-5/6 flex justify-between">
        <div className="mt-5">
          <h3 className="text-stone-100 text-2xl font-semibold mt-3">
            Exclusive
          </h3>
          <p className="text-lg text-stone-100 font-medium mt-3">Subscribe</p>
          <p className="text-stone-100 tracking-wide mt-3">
            Get 10% off your first order
          </p>
          <input
            type="email"
            placeholder="Enter your email"
            className="bg-stone-950 border py-2 text-center mt-3 border-stone-100 text-stone-100 rounded-sm"
          />
        </div>
        <div className="mt-5">
          <h3 className="text-stone-100 text-2xl font-semibold mt-3">
            Support
          </h3>
          <p className="text-lg text-stone-100 mt-3">
            111 Bijoy sarani, Dhaka,
            <br /> DH 1515, Bangladesh.
          </p>
          <p className="text-lg text-stone-100 mt-3">exclusive@gmail.com</p>
          <p className="text-lg text-stone-100 mt-3">+88015-88888-9999</p>
        </div>
        <div className="mt-5">
          <h3 className="text-stone-100 text-2xl font-semibold">Account</h3>
          <p className="text-lg text-stone-100 mt-3">My Account</p>
          <p className="text-lg text-stone-100 mt-3">Login / Register</p>
          <p className="text-lg text-stone-100 mt-3">Cart</p>
          <p className="text-lg text-stone-100 mt-3">Wishlist</p>
          <p className="text-lg text-stone-100 mt-3">Shop</p>
        </div>
        <div className="mt-5">
          <h3 className="text-stone-100 text-2xl font-semibold">Quick Link</h3>
          <p className="text-lg text-stone-100 mt-3">Privacy Policy</p>
          <p className="text-lg text-stone-100 mt-3">Terms Of Use</p>
          <p className="text-lg text-stone-100 mt-3">FAQ</p>
          <p className="text-lg text-stone-100 mt-3">Contact</p>
        </div>
        <div className="mt-5">
          <h3 className="text-stone-100 text-2xl font-semibold">
            Download App
          </h3>
          <p className="text-lg text-stone-100 my-3">
            Save $3 with App New User Only
          </p>
          <div className="flex gap-2">
            <img src={qrCode} alt="qrCode" />
            <div className="grid">
              <img src={googlePlay} alt="google play" />
              <img src={appStore} alt="app store" />
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-stone-900 mt-5 py-5">
        <p className="text-center text-stone-600 tracking-wider">
          &copy; Copyright Rimel 2022. All right reserved
        </p>
      </div>
    </footer>
  );
}

export default Footer;
