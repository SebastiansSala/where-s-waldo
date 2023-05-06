import React, { useState } from "react";
import Home from "./components/Home";
import GameBoard from "./components/GameBoard";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Leaderboard from "./components/Leaderboard";

function App() {
  const [selectedBoard, setSelectedBoard] = useState(null);

  return (
    <BrowserRouter>
      <div>
        <div className="container mx-auto flex justify-center">
          <Routes>
            <Route
              path="/"
              element={
                <Home
                  setSelectedBoard={setSelectedBoard}
                />
              }
            />
            <Route
              path="/gameboard"
              element={<GameBoard selectedBoard={selectedBoard} />}
            />
            <Route
              path="/leaderboard"
              element={<Leaderboard/>}
            />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
