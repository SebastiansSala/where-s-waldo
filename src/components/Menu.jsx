import React from "react";

const Menu = ({ clickPosition }) => {
  const menuStyle = {
    top: clickPosition.y,
    left: clickPosition.x,
  };

  return <div className="border absolute h-40 w-40" style={menuStyle}></div>;
};

export default Menu;
