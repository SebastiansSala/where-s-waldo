import React, { useEffect, useState } from "react";
import Menu from "./menu";
import { useNavigate } from "react-router-dom";
import GameboardHeader from "./gameboardHeader";
import { getAuth } from "firebase/auth";
import { app } from "../firebase";

const auth = getAuth(app);

const GameBoard = ({ selectedBoard }) => {
  const [clickPosition, setClickPosition] = useState({ x: 0, y: 0 });
  const [showMenu, setShowMenu] = useState(false);
  const navigate = useNavigate();

  const handleBoardClick = (e) => {
    setClickPosition({ x: e.pageX, y: e.pageY });
    console.log(e.pageX, e.pageY);
    setShowMenu(true);
  };

  useEffect(() => {
    if (!selectedBoard || !auth.currentUser) {
      navigate("/");
    }
  }, [selectedBoard]);

  if (!selectedBoard) return null;

  return (
    <div>
      <GameboardHeader selectedBoard={selectedBoard} />
      <div className="mt-4 pb-4">
        <img
          src={selectedBoard.img}
          className="w-full h-full"
          onClick={(e) => {
            handleBoardClick(e);
          }}
        />
        {showMenu && (
          <Menu
            clickPosition={clickPosition}
            selectedBoard={selectedBoard}
            setShowMenu={setShowMenu}
          />
        )}
      </div>
    </div>
  );
};

export default GameBoard;
