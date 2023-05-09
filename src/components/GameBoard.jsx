import React, { useEffect, useState } from "react";
import Menu from "./menu";
import { useNavigate } from "react-router-dom";
import GameboardHeader from "./gameboardHeader";
import { getAuth } from "firebase/auth";
import { app, firestore } from "../firebase";
import { collection, getDocs } from "firebase/firestore";

const auth = getAuth(app);

const GameBoard = ({ selectedBoard }) => {
  const [clickPosition, setClickPosition] = useState({});
  const [showMenu, setShowMenu] = useState(false);
  const [target, setTargets] = useState([]);
  const [querySnapshot, setQuerySnapshot] = useState([]);
  const navigate = useNavigate();

  const handleBoardClick = (e) => {
    const x = e.pageX;
    const y = e.pageY;
    setClickPosition({ x, y });
    console.log(x, y);
    setShowMenu(true);
  };

  useEffect(() => {
    if (!selectedBoard || !auth.currentUser) {
      navigate("/");
      return;
    }
    const fetchBoardData = async () => {
      const querySnapshot = await getDocs(collection(firestore, "board1"));
      setQuerySnapshot(querySnapshot);
    };
    fetchBoardData();
    const targets = selectedBoard.target.map((elem) => elem.imgID);
    setTargets(targets);
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
            querySnapshot={querySnapshot}
            target={target}
            setTargets={setTargets}
          />
        )}
      </div>
    </div>
  );
};

export default GameBoard;
