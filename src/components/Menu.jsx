import React from "react";

const Menu = ({ clickPosition, selectedBoard, setShowMenu }) => {
  const menuStyle = {
    top: clickPosition.y,
    left: clickPosition.x,
  };

  return (
    <div className="absolute bg-gray-100 rounded-md" style={menuStyle}>
      {selectedBoard.target.map((elem, index) => {
        return (
          <div
            className="flex p-2 items-center gap-4 rounded-md border-b hover:bg-gray-200 hover:cursor-pointer"
            key={index}
            onClick={() => setShowMenu(false)}
          >
            <img src={elem.img} className="w-8"/>
          </div>
        );
      })}
    </div>
  );
};

export default Menu;
