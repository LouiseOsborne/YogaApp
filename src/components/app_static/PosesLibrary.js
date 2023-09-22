import React, { useState, useEffect } from "react";
import axios from "axios";
import "../../styles/app_static_sass/poses-library.scss";
import TopNavBar from "../nav_and_search/TopNavBar";
import SideNavBar from "../nav_and_search/SideNavBar";
import PosePreview from "./PosePreview";

const PosesLibrary = () => {
  const [poses, setPoses] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:4001/poses").then((response) => {
      console.log(response);
      const yogaPosesArray = response.data;
      console.log(yogaPosesArray);
      const yogaPictures = yogaPosesArray.map((pose) => [
        pose.url_png,
        pose.pose_name,
        pose.sanskrit_name_adapted,
        pose.pose_benefits,
        pose.pose_description,
      ]);
      setPoses(yogaPictures);
      console.log(yogaPictures);
      console.log(yogaPictures.length);
    });
  }, []);

  return (
    <div>
      <div>
        <TopNavBar />
      </div>
      <div className="side-bar">
        <SideNavBar />
      </div>
      <div className="page-content__container">
        <div className="poses__library">
          <div className="poses__container">
            {poses.map((pose, index) => (
              <div className="grid-item" key={index}>
                <PosePreview pose={pose} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PosesLibrary;
