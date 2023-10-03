import React from "react";
import PoseOfTheDay from "./PoseOfTheDay";
import TopNavBar from "../nav_and_search/TopNavBar";
import Footer from "./Footer";

import "../../styles/app_static_sass/home.scss";

const Home = () => {
  return (
    <>
      <div className="top-nav-bar">
        <TopNavBar />
      </div>
      <div>
        <PoseOfTheDay />
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
};

export default Home;
