import "./about.css";
import React from "react";
import Avatar from "./Avatar";
const About = () => {
  return (
    <div className="content-wrap">
      <Avatar />
      <ul>
        <li>
          My name is <span className="bold-text">Adrian,</span> and I'm driven
          by a deep passion to become a
          <span className="bold-text"> Front-end Software Developer.</span>{" "}
          Currently, I'm on the verge of completing a comprehensive bootcamp
          program offered by <span className="bold-text">Edx.</span> Through
          this intensive learning experience, I've gained proficiency in{" "}
          <span className="bold-text">
            HTML, CSS, jQuery, Bootstrap, Node.js, JavaScript, and React.
          </span>
        </li>
        <li>
          With a solid understanding of <span className="bold-text">HTML</span>{" "}
          and <span className="bold-text">CSS,</span> I can effectively
          structure and style web pages.{" "}
          <span className="bold-text">jQuery</span> has enhanced my ability to
          manipulate the Document Object Model (DOM) and create dynamic,
          interactive user experiences.{" "}
          <span className="bold-text">Bootstrap</span> provides me with a
          powerful framework for building responsive and visually appealing
          websites with ease.
        </li>
        <li>
          <span className="bold-text">JavaScript,</span> as the language of the
          web, empowers me to add functionality and interactivity to my
          projects. With <span className="bold-text">React's</span>
          component-based architecture, I can build complex user interfaces
          efficiently. Armed with these technologies, I'm well-equipped to
          tackle a wide range of front-end development projects. I'm excited
          about the opportunities ahead and am eager to make a meaningful impact
          in the world of software development.
        </li>
        <li>
          On <span className="bold-text">Github</span> you can see the day by
          day progress and on <span className="bold-text">LinkedIn</span> all
          certificates that I gained since I started to learn coding.
        </li>
      </ul>
    </div>
  );
};

export default About;
