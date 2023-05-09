import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Menu = ({
  clickPosition,
  selectedBoard,
  setShowMenu,
  target,
  handleCheck,
  setWin
}) => {
  const menuStyle = {
    top: clickPosition.y,
    left: clickPosition.x,
  };

  const handleWin = () => {
    if (target.length === 0) {
      console.log("hola");
      setShowMenu(false);
      setWin(true);
    }
  };

  const navigate = useNavigate();

  useEffect(() => {
    handleWin();
  }, [target]);

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
