import React from "react";
import RenderLevels from "./Levels";

const Home = ({ setSelectedBoard }) => {
  return (
    <>
      <RenderLevels setSelectedBoard={setSelectedBoard} />
    </>
  );
};

export default Home;
