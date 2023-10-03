import React from "react";
import "../../styles/nav_search_sass/side-nav-bar.scss";

const SideNavBar = ({ handleSelectedFilter, handleClearFilter }) => {
  return (
    <div className="sidebar-container">
      <div className="sidebar-title">Categories</div>
      <div className="sidebar-div">
        <button
          className="sidebar-button"
          onClick={() => handleSelectedFilter("Core")}
        >
          Core
        </button>
      </div>
      <div className="sidebar-div">
        <button
          className="sidebar-button"
          onClick={() => handleSelectedFilter("Seated")}
        >
          Seated
        </button>
      </div>
      <div className="sidebar-div">
        <button
          className="sidebar-button"
          onClick={() => handleSelectedFilter("Strengthening")}
        >
          Strengthening
        </button>
      </div>
      <div className="sidebar-div">
        <button
          className="sidebar-button"
          onClick={() => handleSelectedFilter("Chest Opening")}
        >
          Chest Opening
        </button>
      </div>
      <div className="sidebar-div">
        <button
          className="sidebar-button"
          onClick={() => handleSelectedFilter("Backbend")}
        >
          Backbend
        </button>
      </div>
      <div className="sidebar-title">Skill level</div>
      <div className="sidebar-div">
        <button
          className="sidebar-button"
          onClick={() => handleSelectedFilter("Beginner")}
        >
          Beginner
        </button>
      </div>
      <div className="sidebar-div">
        <button
          className="sidebar-button"
          onClick={() => handleSelectedFilter("Intermediate")}
        >
          Intermediate
        </button>
      </div>
      <div className="sidebar-div">
        <button
          className="sidebar-button"
          onClick={() => handleSelectedFilter("Advanced")}
        >
          Advanced
        </button>
      </div>
      <button
        type="submit"
        className="clear-filter"
        onClick={handleClearFilter}
      >
        Clear filter
      </button>
    </div>
  );
};

export default SideNavBar;
