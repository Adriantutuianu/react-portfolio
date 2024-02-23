import { useState } from "react";
import Lottie from "lottie-react";
import lottieCard from "../../icons/Animation - contact.json";
import MailImage from "../../icons/email img.png";
import LinkedInImage from "../../icons/linkedin.png";
import GithubImage from "../../icons/github img.png";
import "./contact.css";

const Contact = () => {
  // Render Contact component
  return (
    <main className="contact main-section">
      <h1 className="title">
        Let`s get <span> in touch!</span>
      </h1>
      <div className="contact-wrap">
        <a
          className="item item--mail"
          href="mailto:adriantutuianu01@gmail.com?subject=Contact Adrian"
          title="Email Adrian at adriantutuianu01@gmail.com"
          target="_blank"
          rel="noreferrer"
        >
          <img className="contact-img" src={MailImage} alt="Mail image" />
          <span>Email Adrian</span>
        </a>
        <a
          className="item item--linkedin"
          href="https://www.linkedin.com/in/adrian-tutuianu"
          title="LinkedIn"
          target="_blank"
          rel="noreferrer"
        >
          <img
            className="contact-img"
            src={LinkedInImage}
            alt="linkedin image"
          />
          <span>/in/adriantutuianu</span>
        </a>
        <a
          className="item item--github"
          href="https://github.com/Adriantutuianu"
          title="Github"
          target="_blank"
          rel="noreferrer"
        >
          <img className="contact-img" src={GithubImage} alt="github image" />
          <span>/adriantutuianu</span>
        </a>
      </div>
      <Lottie
        className="lottie-contact-letter"
        animationData={lottieCard}
        loop={true}
      />
    </main>
  );
};

export default Contact;
