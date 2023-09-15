// hamburger icon that acts as a dropdown button, with links to MyPoses, MyFlows, LogOut

import React, { useState } from "react";
import "../../styles/nav_search_sass/nav-menu.scss";
import { Link, useNavigate } from "react-router-dom";
import { useUserAuth } from "../../context/UserAuthContext";

import "./ci_hamburger-md.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const NavMenu = () => {
  const { logOut, unsubscribe } = useUserAuth();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const handleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };
  const navigate = useNavigate();

  const handleLogOut = () => {
    // logic for handling log out and clearing user session to be inserted. check context/UserAuthContext.js for clues. All covered by firebase.
    logOut();
    navigate("/"); //redirects user to log in page
  };

  const handleDelete = () => {
    unsubscribe();
    //logic for handling delete account to be inserted. check context/UserAuthContext.js for clues. All covered by firebase.
    navigate("/"); //redirects user to log in page
  };

  return (
    <div className="dropdown">
      <label onClick={handleDropdown}>
        <span className="my-account">My account</span>
        {/* this icon doesn't render at the moment, so I'm commenting it out until we've solved the dropdown issue*/}
        {/* <span className="dropdown-menu" onClick={handleDropdown}>
					<FontAwesomeIcon icon={faBars} />
				</span> */}
        <img
          className="fa fa-bars"
          src="ci_hamburger-md.png"
          alt="hamburger-menu"
        />
        {dropdownOpen && (
          <div className="dropdown-content">
            <ul>
              <li>
                <Link to="/my-favourites">My Favourites</Link>
              </li>

              <li>
                <Link to="/" onClick={handleLogOut}>
                  Log out
                </Link>
              </li>
              <li>
                <Link to="/" onClick={handleDelete}>
                  Delete my account
                </Link>
              </li>
            </ul>
          </div>
        )}
      </label>
    </div>

    //logout and delete account have to be buttons to be able to add logic for loging out/deleting account
    //Holly you can add styling so the buttons have no margins
    // and the background color is the same as the dropdown so it looks like a normal link rather than a button
  );
};

export default NavMenu;
