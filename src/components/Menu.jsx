import React from "react";

const Menu = ({ clickPosition }) => {
  const menuStyle = {
    top: clickPosition.y,
    left: clickPosition.x,
  };

  return (
    <div className="absolute h-20 w-20 bg-black/40 " style={menuStyle}>
      <div>rast</div>
    </div>
  );
};

export default Menu;
