import { Routes, Route } from "react-router-dom";
import ProtectedRoute from "../authorisation/ProtectedRoute";
import { UserAuthContextProvider } from "../../context/UserAuthContext";

import LoginModal from "../authorisation/LoginModal";
import SignUp from "../authorisation/SignUp";
import Home from "./Home";
import PosesLibrary from "./PosesLibrary";
import MyFavourites from "../user_account/MyFavourites";
import PoseDetails from "./PoseDetails";

import "../../styles/app_static_sass/app.scss";

const App = () => {
  return (
    <>
      <UserAuthContextProvider>
        <Routes>
          <Route
            path="/home"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />

          <Route path="/" element={<LoginModal />} />
          <Route path="/signup" element={<SignUp />} />
          <Route
            path="/poses-library"
            element={
              <ProtectedRoute>
                <PosesLibrary />{" "}
              </ProtectedRoute>
            }
          />
          <Route path="/my-favourites" element={<MyFavourites />} />
          <Route path="/pose-card" element={<PoseDetails />} />
        </Routes>
      </UserAuthContextProvider>
    </>
  );
};

export default App;
