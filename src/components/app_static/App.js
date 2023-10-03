import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import ProtectedRoute from "../authorisation/ProtectedRoute";
import { UserAuthContextProvider } from "../../context/UserAuthContext";

import LoginModal from "../authorisation/LoginModal";
import SignUp from "../authorisation/SignUp";
import Home from "./Home";
import PosesLibrary from "./PosesLibrary";
import MyFavourites from "../user_account/MyFavourites";

import "../../styles/app_static_sass/app.scss";

const App = () => {
  const [userId, setUserId] = useState(null);
  const [currentUser, setCurrentUser] = useState("");

  return (
    <>
      <UserAuthContextProvider>
        <Routes>
          <Route
            className="page-content__container"
            path="/"
            element={
              <LoginModal
                userId={userId}
                setUserId={setUserId}
                currentUser={currentUser}
                setCurrentUser={setCurrentUser}
              />
            }
          />
          <Route
            path="/signup"
            element={
              <SignUp
                userId={userId}
                setUserId={setUserId}
                currentUser={currentUser}
                seetCurrentUser={setCurrentUser}
              />
            }
          />
          <Route
            path="/home"
            element={
              <ProtectedRoute>
                <Home userId={userId} currentUser={currentUser} />
              </ProtectedRoute>
            }
          />
          <Route
            path="/poses-library"
            element={
              <ProtectedRoute>
                <PosesLibrary userId={userId} currentUser={currentUser} />
              </ProtectedRoute>
            }
          />
          <Route
            path="/my-favourites"
            element={
              <ProtectedRoute>
                <MyFavourites userId={userId} currentUser={currentUser} />
              </ProtectedRoute>
            }
          />
        </Routes>
      </UserAuthContextProvider>
    </>
  );
};

export default App;
