import React, { useState } from "react";
import Home from "./components/Home";
import GameBoard from "./components/GameBoard";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Leaderboard from "./components/Leaderboard";
import { app } from "./firebase";
import Header from "./components/Header";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const provider = new GoogleAuthProvider();
const auth = getAuth(app);

function App() {
  const [selectedBoard, setSelectedBoard] = useState(null);
  const [currentUser, setCurrentUser] = useState(null);

  const handleGoogleSignIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        setCurrentUser(user);
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };

  return (
    <BrowserRouter>
      <div>
        <div className="container mx-auto flex justify-center">
          <Header
            currentUser={currentUser}
            handleGoogleSignIn={handleGoogleSignIn}
            setCurrentUser={setCurrentUser}
          ></Header>
          <Routes>
            <Route
              path="/"
              exact
              element={
                <Home
                  setSelectedBoard={setSelectedBoard}
                  handleGoogleSignIn={handleGoogleSignIn}
                  setCurrentUser={setCurrentUser}
                />
              }
            />
            <Route
              path="/gameboard"
              element={<GameBoard selectedBoard={selectedBoard} />}
            />
            <Route path="/leaderboard" element={<Leaderboard setCurrentUser={setCurrentUser}/>} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
