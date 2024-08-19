import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <header className="flex justify-around items-center w-full h-[80px] bg-zinc-900 text-white fixed hover:bg-zinc-700 ease-in duration-500 rounded-b-[30px] z-50">
      <div className="mt-">Logo</div>
      <nav>
        <ul className="flex space-x-20 navLink">
          <li className="px-3 py-2 text-white hover:border-b-[1px] hover:border-solid hover:border-white">
            <Link to="/home">Home</Link>
          </li>
          <li className="px-3 py-2 text-white hover:border-b-[1px] hover:border-solid hover:border-white">
            <Link to="/TrainWithUs">Train With Us</Link>{" "}
          </li>
          <li className="px-3 py-2 text-white hover:border-b-[1px] hover:border-solid hover:border-white">
            <Link to="/shopPage">Shop</Link>
          </li>
        </ul>
      </nav>
      <div>
        <Link to="/Login">
          <button className="px-4 py-2 bg-white text-black hover:bg-black hover:text-white ease-in duration-500 rounded-2xl">
            Join Us
          </button>
        </Link>
        <Link to="/cart">
          <button className="p-[15px] bg-white rounded-[30px] ml-[15px]">
            🛒
          </button>
        </Link>
      </div>
    </header>
  );
}

export default NavBar;
