import React from "react";
import Lottie from "lottie-react";
import notFound from "../../icons/Animation - notFound.json";
import { Link } from "react-router-dom";
import "./notFound.css";

// Functional component for the not found page
const NotFound = () => {
  // Render not found component
  return (
    <main className="projects-notFound main-section">
      {" "}
      <Lottie
        className="lottie-notFound"
        animationData={notFound}
        loop={true}
      />
      <Link to={"/"} role="button" className="btn btn-link link-home">
        Take me to home page!
      </Link>
    </main>
  );

  //TODO: link to homepage(button -return to homepage)
};

export default NotFound;
