import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="w-full bg-white shadow-sm p-1 fixed">
      <nav className="flex justify-evenly list-none items-center">
        <li className="text-xs xl:text-2xl text-white hover hover:bg-red-500 hover:cursor-pointer px-4 py-1 transition-all rounded-md bg-red-400 duration-300">
          <Link to="/">Home</Link>
        </li>
        <li>
          <img
            src="https://kidsactivitiesblog.com/wp-content/uploads/2020/04/waldo-at-home-logo.png"
            className="w-4 md:w-12 xl:w-24"
          ></img>
        </li>
        <li className="text-xs xl:text-2xl text-white hover hover:bg-red-500 hover:cursor-pointer px-1 xl:px-4 py-1 transition-all rounded-md bg-red-400 duration-300">
          Leaderboard
        </li>
      </nav>
    </header>
  );
};

export default Header;
