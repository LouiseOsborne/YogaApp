import React, { useState, useEffect } from "react";
import axios from "axios";
import Alert from "../app_static/Alert";
import PosePreview from "../app_static/PosePreview";
import FavouriteButton from "../app_static/FavouriteButton";

const MyPoses = ({ userId }) => {
  const [poses, setPoses] = useState([]);
  const [alertMessage, setAlertMessage] = useState(null);

  useEffect(() => {
    const currentUser = localStorage.getItem("currentUser");
    let endpoint = `/favourites/${currentUser}`;

    axios
      .get(endpoint)
      .then((response) => {
        const myFavouritesArray = response.data;
        setPoses(myFavouritesArray);
      })
      .catch(() =>
        setAlertMessage(
          "Server error. Unable to retrieve user's favourite poses."
        )
      );
  }, []);

  if (alertMessage) {
    return (
      <div className="alert-message">
        <Alert message={alertMessage} />
      </div>
    );
  }

  return (
    <div>
      <div className="poses__container">
        {poses.map((pose, index) => (
          <div className="grid-item" key={index} onClick={() => {}}>
            <FavouriteButton userId={userId} poseId={pose.pose_id} />
            <PosePreview
              poseId={pose.pose_id}
              poseImage={pose.url_png}
              englishName={pose.pose_name}
              sanskritName={pose.sanskrit_name}
              poseBenefits={pose.pose_benefits}
              poseDescription={pose.pose_description}
              poseLevel={pose.level}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyPoses;
