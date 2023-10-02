import React from "react";
import TopNavBar from "../nav_and_search/TopNavBar";
import MyPoses from "./MyPoses";
import Footer from "../app_static/Footer";
import "../../styles/user_account_sass/my-favourites.scss";

const MyFavourites = ({ userId }) => {
  return (
    <div>
      <div className="top-nav-bar">
        <TopNavBar />
      </div>
      <div className="my-favourites-page-content__container">
        <div className="page-content__title">
          <h2 className="title-text">My Favourite Poses</h2>
        </div>
        <MyPoses userId={userId} />
      </div>
      <Footer />
    </div>
  );
};
export default MyFavourites;
