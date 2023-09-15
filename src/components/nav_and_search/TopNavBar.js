// fixed el at top of window. With logo.png (on click takes to home page), Search.js, MyAccount.js with hamburger menu (my poses, my flows, log out)

import React from "react";
import { Link } from "react-router-dom";
import "../../styles/nav_search_sass/top-nav-bar.scss";
import PosesLibrary from "../app_static/PosesLibrary";
import MyAccount from "../user_account/MyAccount";
import NavMenu from "./NavMenu";

const TopNavBar = () => {
  return (
    <nav className="navbar-container">
      <div className="poses-library-link">
        <Link to="/poses-library">Poses Library</Link>
      </div>
      <div>
        <a className="navbar-container--logo__link" href="/home">
          <img src="Yogipedia-logo.png" alt="yogipedia-logo" />
        </a>
      </div>
      <NavMenu />
    </nav>
  );
};

export default TopNavBar;
