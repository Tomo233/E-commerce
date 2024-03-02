import { Link } from "react-router-dom";
import image from "../assets/loginImage.png";
function SignUp() {
  return (
    <section>
      <img src={image} alt="" />
      <div>
        <h2>Create an account</h2>
        <p>Enter your details below</p>
        <input type="text" placeholder="Name" />
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button>Create Account</button>
        <button>Sign Up With Google</button>
        <p>Already have account</p>
        <Link>Log in</Link>
      </div>
    </section>
  );
}

export default SignUp;
