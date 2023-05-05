import React, { useState } from "react";
import { boards } from "./Boards";
import GameBoard from "./GameBoard";
import { Link, Route } from "react-router-dom";

const RenderLevels = () => {
  const [selectedBoard, setSelectedBoard] = useState(null);

  const handleLevel = (id) => {
    const level = boards.filter((board) => id === board.id);
    setSelectedBoard(level[0]);
  };

  return (
    <div className="flex gap-40 w-full mt-40 flex-wrap justify-center pb-20">
      {boards.map((board, index) => {
        return (
          <div key={index} className="bg-white shadow hover:shadow-lg hover:cursor-pointer p-2 transition-all duration-300">
            <Link to="/game" onClick={() => handleLevel(index)}>
              <img src={board.img} className="w-full max-w-max h-60 object-cover" />
              <div className="flex justify-between p-4 max-w-">
                <p className="text-xl">Level {index + 1}</p>
                <div>hola</div>
              </div>
            </Link>
          </div>
        );
      })}
      <Route path="/game">
        {selectedBoard && <GameBoard board={selectedBoard} />}
      </Route>
    </div>
  );
};

export default RenderLevels;
