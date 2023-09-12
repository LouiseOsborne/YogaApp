import React from "react";
import TopNavBar from "../nav_and_search/TopNavBar";
import PoseOfTheDay from "./PoseOfTheDay";

import "../../styles/app_static_sass/home.scss";

const Home = () => {
	return (
		<>
			<div className="App">
				<PoseOfTheDay />
			</div>
		</>
	);
};

export default Home;
