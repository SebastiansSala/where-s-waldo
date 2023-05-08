import React, { useEffect, useState } from "react";
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

  auth.onAuthStateChanged((user) => {
    if (user) {
      setCurrentUser(user);
    } else {
      setCurrentUser(null);
    }
  });

  const handleGoogleSignIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;
        setCurrentUser(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.customData.email;
        const credential = GoogleAuthProvider.credentialFromError(error);
        console.log(errorMessage);
      });
  };

  useEffect(() => {
    app;
  }, []);

  return (
    <BrowserRouter>
      <div>
        <div className="container mx-auto flex justify-center">
          <Header
            currentUser={currentUser}
            handleGoogleSignIn={handleGoogleSignIn}
          ></Header>
          <Routes>
            <Route
              path="/"
              element={
                <Home
                  setSelectedBoard={setSelectedBoard}
                  handleGoogleSignIn={handleGoogleSignIn}
                />
              }
            />
            <Route
              path="/gameboard"
              element={<GameBoard selectedBoard={selectedBoard} />}
            />
            <Route path="/leaderboard" element={<Leaderboard />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
