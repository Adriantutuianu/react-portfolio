import "./home.css";
import Lottie from "lottie-react";
import animationHome from "../../Animation - home.json";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <main className="home main-section">
      <div className="home-text">
        <h2 className="title">
          Hi there! I'm <span className="title-span">Adrian!</span>
        </h2>
        <h3 className="sub-title">
          A Front-End Web Developer passionate about creating interactive
          applications and experiences on the web.
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
    </main>
  );
};

export default Home;
