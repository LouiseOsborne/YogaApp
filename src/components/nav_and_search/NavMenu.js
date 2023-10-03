// hamburger icon that acts as a dropdown button, with links to MyPoses, MyFlows, LogOut

import React, { useState } from "react";
import "../../styles/nav_search_sass/nav-menu.scss";
import { Link, useNavigate } from "react-router-dom";
import { useUserAuth } from "../../context/UserAuthContext";

const NavMenu = ({ userId, currentUser }) => {
  const { logOut, unsubscribe } = useUserAuth();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const handleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };
  const navigate = useNavigate();

  const handleLogOut = () => {
    logOut();
    navigate("/");
  };

  const handleDelete = () => {
    unsubscribe();
    navigate("/");
  };

  return (
    <div className="dropdown">
      <div className="dropdown__btn" onClick={handleDropdown}>
        <img
          className="dropdown__hamburger-icon"
          src="hamburger.png"
          alt="hamburger-menu"
        />
      </div>
      {dropdownOpen && (
        <div className="dropdown-content">
          <ul>
            <li className="dropdown-content__item">
              <Link to="/my-favourites">My Favourites</Link>
            </li>

            <li className="dropdown-content__item">
              <Link to="/" onClick={handleLogOut}>
                Log out
              </Link>
            </li>
            <li className="dropdown-content__item">
              <Link to="/" onClick={handleDelete}>
                Delete my account
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default NavMenu;
