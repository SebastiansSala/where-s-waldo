import React from "react";
import Header from "./components/Header";
import Background from "./components/Background";

function App() {
  return (
    <div className="bg-gray-800 h-full">
      <Header></Header>
      <div className="container mx-auto w-full min-w-44 flex justify-center">
        <Background></Background>
      </div>
    </div>
  );
}

export default App;
