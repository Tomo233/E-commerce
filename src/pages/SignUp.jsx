import { Link } from "react-router-dom";
import image from "../assets/loginImage.png";
import google from "../assets/googleLogin.png";

function SignUp() {
  return (
    <section className="flex justify-between items-center">
      <img src={image} alt="" />
      <div className="grid gap-y-3 w-1/3">
        <h2 className="text-3xl font-semibold">Create an account</h2>
        <p className="font-medium tracking-wide">Enter your details below</p>
        <input
          type="text"
          placeholder="Name"
          className="bg-transparent h-12 border-b border-stone-900 text-left outline-none"
        />
        <input
          type="email"
          placeholder="Email"
          className="bg-transparent h-12 border-b border-stone-900 text-left outline-none"
        />
        <input
          type="password"
          placeholder="Password"
          className="bg-transparent h-12 border-b border-stone-900 text-left outline-none"
        />
        <button className="bg-red-500 py-4 mt-5 mb-2 rounded-sm text-stone-100 font-medium">
          Create Account
        </button>
        <button className="border border-stone-400 rounded-sm py-4">
          <img src={google} className="mx-auto" alt="" />
        </button>
        <div className="flex justify-center items-center gap-5 mt-2">
          <p className="text-stone-600 tracking-wide">Already have account?</p>
          <Link className="text-stone-700 underline  tracking-wide">
            Log in
          </Link>
        </div>
      </div>
    </section>
  );
}

export default SignUp;
