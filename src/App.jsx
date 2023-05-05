import React, { useState } from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import GameBoard from "./components/GameBoard";
import { Route, Routes, BrowserRouter } from "react-router-dom";

function App() {

  return (
    <BrowserRouter>
      <Header></Header>
      <div className="container mx-auto flex justify-center">
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
        
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App
