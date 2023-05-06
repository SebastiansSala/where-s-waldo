import React, { useState } from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import GameBoard from "./components/GameBoard";
import { Route, Routes, BrowserRouter } from "react-router-dom";

function App() {
  const [selectedBoard, setSelectedBoard] = useState(null);

  return (
    <BrowserRouter>
      <div>
        <Header></Header>
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
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
