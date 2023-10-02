// Div that renders two sections: a random Pose.js (Image, name, info.) + History of Yoga section.

import React, { useState, useEffect } from "react";
import axios from "axios";
import "../../styles/app_static_sass/pose-of-the-day.scss";
import Alert from "./Alert";

const PoseOfTheDay = () => {
  const [randomImage, setRandomImage] = useState(null);
  const [poseName, setPoseName] = useState(null);
  const [alertMessage, setAlertMessage] = useState(null);

  useEffect(() => {
    const lastGeneratedDate = localStorage.getItem("lastGeneratedDate");
    const currentDate = new Date().toDateString();

    if (lastGeneratedDate !== currentDate) {
      axios
        .get("/poses")
        .then((response) => {
          const yogaPosesArray = response.data;

          const randomIndex = Math.floor(Math.random() * yogaPosesArray.length);
          const randomPose = yogaPosesArray[randomIndex];
          const randomImageUrl = randomPose.url_png;
          const randomName = randomPose.pose_name;

          console.log(randomPose);
          console.log(randomImageUrl);
          console.log(randomName);

          setRandomImage(randomImageUrl);
          setPoseName(randomName);

          localStorage.setItem("lastGeneratedDate", currentDate);
          localStorage.setItem("lastGeneratedPictureUrl", randomImageUrl);
          localStorage.setItem("lastGeneratedName", randomName);
        })
        .catch(() =>
          setAlertMessage("Server error. Pose of the day data unavailable.")
        );
    } else {
      const storedPictureUrl = localStorage.getItem("lastGeneratedPictureUrl");
      const storedName = localStorage.getItem("lastGeneratedName");
      setRandomImage(storedPictureUrl);
      setPoseName(storedName);
    }
  }, []);

  if (alertMessage) {
    return (
      <div className="page-content__container">
        <div className="pose__container">
          <div className="pose-of-the-day">
            <h4 className="pose-of-the-day__alert-message">
              <Alert message={alertMessage} />
            </h4>
          </div>
        </div>
        <div className="pose-description__container">
          <p>
            Yoga is a holistic practice that originated in ancient India and
            encompases physical postures, breathing exercises, meditation, and
            ethical principles. It is a discipline aimed at promoting physical,
            mental, and spiritual well-being. Through the practice of yoga,
            individuals can improve flexibility, strength, and balance, while
            also reducing stress, enhancing mental clarity and fostering a sense
            of inner peace. Whether you are a beginner yogi or an aspiring yoga
            teacher, you can explore a variety of yoga poses by using the
            Yogipeadia app.
          </p>
        </div>
      </div>
    );
  }
  return (
    <div className="page-content__container">
      <div className="pose__container">
        <div className="pose-of-the-day">
          <h2>Pose Of The Day</h2>
          <h4>{poseName}</h4>
        </div>
        <div className="pose__image">
          <img src={randomImage} alt="yoga pose of the day" />
        </div>
      </div>
      <div className="pose-description__container">
        <p>
          Yoga is a holistic practice that originated in ancient India and
          encompases physical postures, breathing exercises, meditation, and
          ethical principles. It is a discipline aimed at promoting physical,
          mental, and spiritual well-being. Through the practice of yoga,
          individuals can improve flexibility, strength, and balance, while also
          reducing stress, enhancing mental clarity and fostering a sense of
          inner peace. Whether you are a beginner yogi or an aspiring yoga
          teacher, you can explore a variety of yoga poses by using the
          Yogipeadia app.
        </p>
      </div>
    </div>
  );
};

export default PoseOfTheDay;
