import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Menu = ({
  clickPosition,
  selectedBoard,
  setShowMenu,
  querySnapshot,
  target,
  setTargets,
}) => {
  const menuStyle = {
    top: clickPosition.y,
    left: clickPosition.x,
  };

  const navigate = useNavigate();
  const [win, setWin] = useState(false);

  useEffect(() => {
    if (target.length === 0) {
      console.log("hola");
      setWin(true);
    }
  }, [target]);

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

  return (
    <div className="absolute bg-gray-100 rounded-md" style={menuStyle}>
      {selectedBoard.target.map((elem) => {
        const isDisabled = !target.includes(elem.imgID);
        return (
          <div
            className={`flex p-2 items-center gap-4 rounded-md border-b hover:bg-gray-200 hover:cursor-pointer ${
              isDisabled ? "disabled blur-sm" : ""
            }`}
            key={elem.imgID}
            onClick={() => {
              if (!isDisabled) {
                setShowMenu(false);
                handleCheck(menuStyle.left, menuStyle.top, elem.imgID);
              }
            }}
          >
            <img
              src={elem.img}
              className={`w-8 ${isDisabled ? "disabled" : ""}`}
            />
          </div>
        );
      })}
    </div>
  );
};

export default Menu;
