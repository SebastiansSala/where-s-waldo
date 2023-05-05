import React from "react";

const GameBoard = ({ setClickPosition, setShowMenu, board}) => {
  return (
    <img
      src={board.img}
      className="w-full"
      onClick={(e) => {
        setClickPosition({ x: e.clientX, y: e.clientY });
        setShowMenu(true);
      }}
    ></img>
  );
};

export default GameBoard;
