import React, { useEffect, useState } from "react";
import Menu from "./Menu";
import { useNavigate } from "react-router-dom";
import { getAuth } from "firebase/auth";
import { app, firestore } from "../firebase";
import { collection, getDocs } from "firebase/firestore";
import Score from "./Score";

const auth = getAuth(app);

const GameBoard = ({ selectedBoard }) => {
  const [clickPosition, setClickPosition] = useState({});
  const [showMenu, setShowMenu] = useState(false);
  const [target, setTargets] = useState([]);
  const [querySnapshot, setQuerySnapshot] = useState([]);
  const [win, setWin] = useState(false);
  const navigate = useNavigate();

  const handleBoardClick = (e) => {
    const x = e.pageX;
    const y = e.pageY;
    setClickPosition({ x, y });
    console.log(x, y);
    setShowMenu(true);
  };

  const handleCheck = (x, y, imgID) => {
    querySnapshot.forEach((doc) => {
      const data = doc.data();
      const locationX = data.coordenateX;
      const locationY = data.coordenateY;
      if (
        x >= locationX - 50 &&
        x <= locationX + 50 &&
        y >= locationY - 50 &&
        y <= locationY + 50 &&
        doc.id === imgID
      ) {
        console.log(`Acertaste ${data.name}`);
        setTargets((prevTargets) => prevTargets.filter((id) => id !== imgID));
      }
    });
  };

  useEffect(() => {
    if (!selectedBoard || !auth.currentUser) {
      navigate("/");
      return;
    }

    const fetchQuerySnapshot = async () => {
      const querySnapshotAssing = await getDocs(
        collection(firestore, "board1")
      );
      setQuerySnapshot(querySnapshotAssing);
    };
    fetchQuerySnapshot();

    const targets = selectedBoard.target.map((elem) => elem.imgID);
    setTargets(targets);
  }, [selectedBoard]);

  if (!selectedBoard) return null;

  return (
    <div>
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
            target={target}
            handleCheck={handleCheck}
            setWin={setWin}
          />
        )}
      </div>
      {win && <Score />}
    </div>
  );
};

export default GameBoard;
