import React from "react";
import { Link, useLocation } from "react-router-dom";
import { getAuth, signOut } from "firebase/auth";
import { app } from "../firebase";

const auth = getAuth(app);
const Header = ({ currentUser, handleGoogleSignIn }) => {
  const location = useLocation();

  const signOutUser = () => {
    signOut(auth);
  };

  return (
    <header className="w-full bg-white shadow-sm p-1 fixed">
      <nav className="flex justify-evenly list-none items-center">
        <li>
          <img
            src="https://kidsactivitiesblog.com/wp-content/uploads/2020/04/waldo-at-home-logo.png"
            className="w-4 md:w-12 xl:w-24"
          ></img>
        </li>
        {!currentUser && (
          <li>
            <button
              onClick={handleGoogleSignIn}
              className="text-xs xl:text-2xl text-white px-4 py-1 transition-all rounded-md duration-300 bg-red-400 hover hover:bg-red-500 hover:cursor-pointer"
            >
              Iniciar sesión con Google
            </button>
          </li>
        )}
        {currentUser && (
          <div className="text-xs xl:text-2xl text-black flex px-4 py-1 transition-all rounded-md duration-300">
            <li className="text-xs xl:text-2xl text-black px-4 py-1 transition-all rounded-md duration-300">
              {currentUser.displayName}
            </li>
            <button
              onClick={signOutUser}
              className="text-xs xl:text-2xl text-white px-4 py-1 transition-all rounded-md duration-300 bg-red-400 hover hover:bg-red-500 hover:cursor-pointer"
            >
              Sign out
            </button>
          </div>
        )}
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
