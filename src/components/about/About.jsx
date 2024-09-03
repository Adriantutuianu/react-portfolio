import "./about.css";
import React from "react";
import Avatar from "./Avatar";
const About = () => {
  return (
    <div className="content-wrap">
      <div className="avatar">
        {" "}
        <Avatar />
      </div>
      <ul>
        <li>
          My name is <span className="bold-text">Adrian,</span> and as a
          <span className="bold-text"> Front-end Software Developer,</span> my
          passion drives me forward. Recently, I completed a comprehensive
          bootcamp program offered by <span className="bold-text">Edx.</span>{" "}
          Through this intensive learning experience, I've gained proficiency in{" "}
          <span className="bold-text">
            HTML, CSS, Bootstrap, JavaScript, React, Node.js and jQuery.
          </span>
        </li>
        <li>
<<<<<<< HEAD
          Right now I am working on a real start-up project called{" "}
          <span className="bold-text">DizzitUp</span> and it is build using{" "}
          <span className="bold-text">React</span> and{" "}
          <span className="bold-text">Next.js</span>. The project was styled
          using <span className="bold-text">Tailwind CSS</span>.
        </li>

=======
          The most recent project that I finished is named{" "}
          <span className="bold-text">World Statistics</span> and it was build
          using <span className="bold-text">React</span> and{" "}
          <span className="bold-text">TypeScript</span>. The project was styled
          using <span className="bold-text">Tailwind CSS</span>.
        </li>
>>>>>>> d26d2e92c7ccad38b010d7840ca7141a5d575426
        <li>
          On{" "}
          <a
            className="bold-text"
            href="https://github.com/Adriantutuianu"
            title="Github"
            target="_blank"
            rel="noreferrer"
          >
            Github
          </a>{" "}
          you can see the day by day progress and on{" "}
          <a
            className="bold-text"
            href="https://www.linkedin.com/in/adrian-tutuianu"
            title="LinkedIn"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn{" "}
          </a>{" "}
          all certificates that I gained since I started to learn coding.
        </li>
      </ul>
    </div>
  );
};

export default About;
