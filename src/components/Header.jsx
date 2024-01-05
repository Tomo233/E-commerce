import { Link } from "react-router-dom";
// import like from "../assets/like.png";
// import shoppingCart from "../assets/shoppingCart.png";

function Header() {
  return (
    <header className="flex justify-between">
      <div>
        <p className="font-bold	text-3xl">Exclusive</p>
      </div>
      <div>
        <ul className="flex gap-5">
          <Link to="/home" className="text-xl text-[#363738]">
            Home
          </Link>
          <Link to="/Contact" className="text-xl text-[#363738]">
            Contact
          </Link>
          <Link to="/About" className="text-xl text-[#363738]">
            About
          </Link>
          <Link to="/signUp" className="text-xl text-[#363738]">
            Sign Up
          </Link>
        </ul>
      </div>
      <div>
        <input
          type="search"
          placeholder="what are you looking for"
          className="w-60 h-12  bg-[#F5F5F5] font-semibold	"
        />
        {/* <img src={like} alt="like" className="w-28" /> */}
        {/* <img src={shoppingCart} alt="like" className="w-5" /> */}
      </div>
    </header>
  );
}

export default Header;
