import { NavLink } from "react-router-dom";
import "./header.css";
import Lottie from "lottie-react";
import animationHeader from "../../icons/Lottie Lego.json";

// Functional component for the header
const Header = () => {
  // Render header component
  return (
    <header className="header ">
      <div className="content">
        <div className="portfolio-header">
          <Lottie
            className="lottie-header"
            animationData={animationHeader}
            loop={true}
          />
          <h2 className="header-title">Portfolio </h2>
          <Lottie
            className="lottie-header"
            animationData={animationHeader}
            loop={true}
          />
        </div>
        <ul className="nav nav-tabs">
          <li className="nav-item">
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              Home
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink
              to="about"
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              About
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="projects"
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              Projects
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="contact"
              end
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
