import "./home.css";
import Lottie from "lottie-react";
import { NavLink } from "react-router-dom";
import animationHome from "../../icons/Animation - home.json";

// Functional component for the home section
const Home = () => {
  // Render home component
  return (
    <main className="home-container">
      <div className="home main-section">
        <div className="home-text">
          <h2 className="title">
            <span className="title-span">Hi there!</span> I'm{" "}
            <span className="title-span">Adrian! </span>
          </h2>
          <h3 className="sub-title">
            A <span className="title-span">Front-End</span> Software Developer
            passionate about creating interactive applications and experiences
            on the web.
          </h3>

          <NavLink to="projects" end className="text-span">
            Take a look at my projects!
          </NavLink>
        </div>
        <Lottie
          className="lottie-home"
          animationData={animationHome}
          loop={true}
        />
      </div>
    </main>
  );
};

export default Home;
