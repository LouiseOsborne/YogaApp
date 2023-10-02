import React, { useState, useEffect } from "react";
import axios from "axios";
import "../../styles/app_static_sass/favourite-button.scss";

const FavouriteButton = ({ userId, poseId }) => {
  const [isFavourite, setIsFavourite] = useState(false);
  const currentlyAFavourite = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      fill="#EDA994"
      className="bi bi-heart-fill"
      viewBox="0 0 16 16"
    >
      <path
        fill-rule="evenodd"
        d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"
      />
    </svg>
  ); //unfilled heart image

  const currentlyNotAFavourite = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      fill="#EDA994"
      className="bi bi-heart"
      viewBox="0 0 16 16"
    >
      <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
    </svg>
  ); //filled heart image

  useEffect(() => {
    axios
      .get(`/favourites/${userId}`)
      .then((response) => {
        const favouritePoseIds = response.data.map(({ pose_id }) => pose_id);
        setIsFavourite(favouritePoseIds.includes(poseId));
      })
      .catch((error) => console.error("Error fetching favorites:", error));
  }, [userId, poseId]);

  const handleFavouriteClick = () => {
    if (!isFavourite) {
      axios
        .post("/favourites", {
          userId: userId,
          poseId: poseId,
        })
        .then(() => setIsFavourite(true))
        .catch((error) => console.error("Error adding favorite:", error));
    } else {
      axios
        .delete("/favourites", {
          data: { userId: userId, poseId: poseId }, // Send data in the request body
        })
        .then(() => setIsFavourite(false))
        .catch((error) => console.error("Error removing favorite:", error));
    }
  };

  return (
    <button className="favourite-button" onClick={handleFavouriteClick}>
      {isFavourite ? currentlyAFavourite : currentlyNotAFavourite}
    </button>
  );
};

export default FavouriteButton;
