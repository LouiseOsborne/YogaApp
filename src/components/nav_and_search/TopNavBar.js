import { Link } from "react-router-dom";
import "../../styles/nav_search_sass/top-nav-bar.scss";
import NavMenu from "./NavMenu";

const TopNavBar = () => {
  return (
    <nav className="navbar-container">
      <div className="navbar-left">
        <a className="navbar-container__logo--link" href="/home">
          <img src="Logo.png" alt="yogipedia-logo" />
        </a>
      </div>
      <div className="navbar-right">
        <div className="poses-library__link">
          <Link to="/poses-library">Poses Library</Link>
        </div>
        <NavMenu />
      </div>
    </nav>
  );
};

export default TopNavBar;
