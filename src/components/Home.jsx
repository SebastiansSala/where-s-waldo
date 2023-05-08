import React from "react";
import RenderLevels from "./Levels";

const Home = ({ setSelectedBoard, currentUser, setCurrentUser, handleGoogleSignIn }) => {

  return (
    <>
      <RenderLevels setSelectedBoard={setSelectedBoard} handleGoogleSignIn={handleGoogleSignIn} setCurrentUser={setCurrentUser} currentUser={currentUser} />
    </>
  );
};

export default Home;
