// Search via two dropdown buttons: Difficulty Level/Type.
// Optional: My Flows
// Optional: Suggested Flows with options

import React from "react";
import { Link } from "react-router-dom";
import "../../styles/nav_search_sass/side-nav-bar.scss";

const SideNavBar = () => {
  return (
    <div className="sidebar-container">
      <div className="search-bar">
        <form>
          <input
            className="search-input"
            type="text"
            placeholder="Enter pose name..."
          />
          <button type="submit" className="search-button">
            Search
          </button>
        </form>
      </div>
      <div className="sidebar-title">Categories</div>
      <div className="sidebar-div">
        <Link className="sidebar-link">Core</Link>
      </div>
      <div className="sidebar-div">
        <Link className="sidebar-link">Seated</Link>
      </div>
      <div className="sidebar-div">
        <Link className="sidebar-link">Strengthening</Link>
      </div>
      <div className="sidebar-div">
        <Link className="sidebar-link">Chest Opening</Link>
      </div>
      <div className="sidebar-div">
        <Link className="sidebar-link">Backbend</Link>
      </div>
      <div className="sidebar-title">Skill level</div>
      <div className="sidebar-div">
        <Link className="sidebar-link">Beginner</Link>
      </div>
      <div className="sidebar-div">
        <Link className="sidebar-link">Intermediate</Link>
      </div>
      <div className="sidebar-div">
        <Link className="sidebar-link">Advanced</Link>
      </div>
    </div>
  );
};

export default SideNavBar;
