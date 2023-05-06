import React, { useState } from "react";
import { boards } from "./Boards";
import { redirect, useNavigate } from "react-router-dom";

const RenderLevels = ({ setSelectedBoard }) => {
  const navigate = useNavigate();

  const handleLevel = (id) => {
    const level = boards.filter((board) => id === board.id);
    setSelectedBoard(level[0]);
    navigate("/gameboard");
  };

  return (
    <div className="flex gap-40 w-full mt-40 flex-wrap justify-center pb-20">
      {boards.map((board, index) => {
        return (
          <div
            key={index}
            className="bg-white w-96 shadow hover:shadow-lg hover:cursor-pointer p-2 transition-all duration-300"
            onClick={() => handleLevel(index)}
          >
            <img
              src={board.img}
              className="w-full max-w-max h-60 object-cover"
            ></img>
            <div className="flex justify-between p-4 max-w-">
              <p className="text-xl">Level {index + 1}</p>
              <div>hola</div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default RenderLevels;
