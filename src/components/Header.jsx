import React from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();

  return (
    <header className="w-full bg-white shadow-sm p-1 fixed">
      <nav className="flex justify-evenly list-none items-center">
        <li>
          <img
            src="https://kidsactivitiesblog.com/wp-content/uploads/2020/04/waldo-at-home-logo.png"
            className="w-4 md:w-12 xl:w-24"
          ></img>
        </li>
        <li
          className={`text-xs xl:text-2xl text-white px-4 py-1 transition-all rounded-md duration-300 ${
            location.pathname === "/"
              ? "hidden"
              : "bg-red-400 hover hover:bg-red-500 hover:cursor-pointer"
          }`}
        >
          <Link to="/">Home</Link>
        </li>
        <li
          className={`text-xs xl:text-2xl text-white px-4 py-1 transition-all rounded-md duration-300 ${
            location.pathname === "/leaderboard"
              ? "hidden"
              : "bg-red-400 hover hover:bg-red-500 hover:cursor-pointer"
          }`}
        >
          <Link to="/leaderboard">Leaderboard</Link>
        </li>
      </nav>
    </header>
  );
};

export default Header;
