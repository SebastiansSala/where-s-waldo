import React, { useState } from "react";
import Header from "./components/Header";
import Background from "./components/Background";
import Menu from "./components/menu";
import Home from "./components/Home";

function App() {
  const [showMenu, setShowMenu] = useState(false);
  const [clickPosition, setClickPosition] = useState({ x: 0, y: 0 });

  return (
    <div className="bg-gray-800 h-full">
      <Header></Header>
      <div className="container mx-auto w-full min-w-44 flex justify-center">
       <Home></Home>
      </div>
    </div>
  );
}

/**
<Background
setClickPosition={setClickPosition}
setShowMenu={setShowMenu}
></Background>
{showMenu && <Menu clickPosition={clickPosition}></Menu>}*/

export default App;
