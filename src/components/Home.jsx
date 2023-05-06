import React from "react";
import RenderLevels from "./Levels";
import Header from "./Header";

const Home = ({ setSelectedBoard }) => {
  return (
    <>
      <Header></Header>
      <RenderLevels setSelectedBoard={setSelectedBoard} />
    </>
  );
};

export default Home;
