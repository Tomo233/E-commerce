import { Link, NavLink } from "react-router-dom";
import Line from "./Line";
import { useState } from "react";
import SearchedResults from "../features/products/SearchedResults";

function Header() {
  const [query, setQuery] = useState("");

  return (
    <header className="flex justify-between h-20 items-center	 relative mx-auto w-5/6">
      <div>
        <Link className="font-semibold	text-3xl" to="/">
          Exclusive
        </Link>
      </div>
      <div>
        <ul className="flex gap-5">
          <NavLink to="/" className="text-xl text-[#363738]">
            Home
          </NavLink>
          <NavLink to="/contact" className="text-xl text-[#363738]">
            Contact
          </NavLink>
          <NavLink to="/about" className="text-xl text-[#363738]">
            About
          </NavLink>
          <NavLink to="/signUp" className="text-xl text-[#363738]">
            Sign Up
          </NavLink>
        </ul>
      </div>
      <div className="flex justify-between gap-2 items-center relative">
        <input
          type="search"
          placeholder="what are you looking for?"
          className="w-56 h-10  bg-[#F5F5F5] font-semibold text-sm	text-center outline-none"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        {!query && <SearchedResults />}
        <Link to="/cart">
          <i className="pi pi-shopping-cart text-2xl"></i>
        </Link>
      </div>
      <Line />
    </header>
  );
}

export default Header;
