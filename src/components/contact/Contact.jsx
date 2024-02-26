import { useState } from "react";
import Lottie from "lottie-react";
import lottieCard from "../../icons/Animation - contact2.json";
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
          href="mailto:hello@adriantut.dev?subject=Contact Adrian"
          title="Email Adrian at hello@adriantut.dev"
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
      <Lottie className="lottie-contact-letter" animationData={lottieCard} />
    </main>
  );
};

export default Contact;
