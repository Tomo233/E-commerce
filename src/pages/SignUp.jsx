import { Link } from "react-router-dom";
import image from "../assets/loginImage.png";
import google from "../assets/googleLogin.png";

function SignUp() {
  return (
    <section>
      <img src={image} alt="" />
      <div>
        <h2 className="text-3xl font-semibold">Create an account</h2>
        <p className="font-medium tracking-wide">Enter your details below</p>
        <input
          type="text"
          placeholder="Name"
          className="bg-transparent w-56 h-10 border-b border-stone-900 text-left outline-none"
        />
        <input
          type="email"
          placeholder="Email"
          className="bg-transparent w-56 h-10 border-b border-stone-900 text-left outline-none"
        />
        <input
          type="password"
          placeholder="Password"
          className="bg-transparent w-56 h-10 border-b border-stone-900 text-left outline-none"
        />
        <button className="bg-red-500 py-4 px-20">Create Account</button>
        <button className="border border-stone-900 py-3 px-10">
          <img src={google} alt="" />
        </button>
        <p className="text-stone-600 tracking-wide">Already have account?</p>
        <Link className="text-stone-700 underline pb-5 tracking-wide">
          Log in
        </Link>
      </div>
    </section>
  );
}

export default SignUp;
