import React from "react";
import { Link } from "react-router-dom";
import Timer from "./Timer";

const GameboardHeader = ({ selectedBoard }) => {
  return (
    <header className="w-full bg-white shadow-sm p-1">
      <nav className="flex justify-evenly list-none items-center">
        <li className="text-xs xl:text-2xl text-white hover hover:bg-red-500 hover:cursor-pointer px-4 py-1 transition-all rounded-md bg-red-400 duration-300">
          <Link to="/">Home</Link>
        </li>
        <Timer />
        <li className="text-xs xl:text-2xl text-white flex gap-10 px-1 xl:px-4 py-1 transition-all">
          {selectedBoard.target.map((elem, index) => {
            return <img src={elem.img} className="w-10 object-cover" key={index}/>;
          })}
        </li>
      </nav>
    </header>
  );
};

export default GameboardHeader;
