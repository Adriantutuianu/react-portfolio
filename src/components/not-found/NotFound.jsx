import React from "react";
import Lottie from "lottie-react";
import notFound from "../../icons/Animation - notFound.json";
import "./notFound.css";
const NotFound = () => {
  return (
    <main className="projects-notFound main-section">
      {" "}
      <Lottie
        className="lottie-notFound"
        animationData={notFound}
        loop={true}
      />
    </main>
  );

  //TODO: link to homepage(button -return to homepage)
};

export default NotFound;
