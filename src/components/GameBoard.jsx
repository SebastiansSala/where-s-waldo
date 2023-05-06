import React, { useEffect, useState } from "react";
import Menu from "./menu";
import { useNavigate } from "react-router-dom";
import GameboardHeader from "./gameboardHeader";

const GameBoard = ({ selectedBoard }) => {
  const [clickPosition, setClickPosition] = useState({ x: 0, y: 0 });
  const [showMenu, setShowMenu] = useState(false);
  const navigate = useNavigate();

  const handleBoardClick = (e) => {
    setClickPosition({ x: e.clientX, y: e.clientY });
    console.log(e.clientX, e.clientY);
    setShowMenu(true);
  };

  useEffect(() => {
    if (!selectedBoard) {
      navigate("/");
    }
  }, [selectedBoard]);

  if (!selectedBoard) return null;

  return (
    <div>
      <GameboardHeader selectedBoard={selectedBoard}/>
      <div className="mt-4 pb-4">
        <img
          src={selectedBoard.img}
          className="w-full h-full"
          onClick={(e) => {
            handleBoardClick(e);
          }}
        ></img>
        {showMenu && <Menu clickPosition={clickPosition} selectedBoard={selectedBoard}/>}
      </div>
    </div>
  );
};

export default GameBoard;
