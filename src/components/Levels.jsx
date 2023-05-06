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
    <div className="flex gap-x-40 gap-y-20 w-full mt-40 flex-wrap justify-center pb-20">
      {boards.map((board, index) => {
        return (
          <div
            key={index}
            className="bg-white w-96 shadow hover:shadow-lg hover:cursor-pointer p-2 transition-all duration-300"
            onClick={() => handleLevel(index)}
          >
            <img
              src={board.img}
              className="w-full h-60 object-cover"
            ></img>
            <div className="flex justify-between p-4 max-w-">
              <p className="text-xl">Level {index + 1}</p>
              <div className="flex gap-4">
                {board.target.map((item, index) => {
                  return(
                    <img src={item.img} className="w-5 object-cover" key={index}></img>
                  )
                })}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default RenderLevels;
