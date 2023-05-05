import React from "react";

const Background = ({ setClickPosition, setShowMenu }) => {
  return (
    <img
      src="https://kfig21.github.io/photo_tagging_app/static/media/xbox.6c93b3fa.jpg"
      className="w-full"
      onClick={(e) => {
        setClickPosition({ x: e.clientX, y: e.clientY });
        setShowMenu(true);
      }}
    ></img>
  );
};

export default Background;
