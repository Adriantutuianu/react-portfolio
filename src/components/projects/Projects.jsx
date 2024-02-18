import { Link, Route, Routes } from "react-router-dom";
import "./projects.css";
import ProjectOne from "./projectOne/ProjectOne";
import ProjectTwo from "./projectTwo/ProjectTwo";

const Projects = () => {
  return (
    <main className="projects main-section">
      <h1>Projects</h1>
      <Link to="project-one" role="button" className="btn btn-link">
        Project One
      </Link>
      <Link to="project-two" role="button" className="btn btn-link">
        Project Two
      </Link>
      <Routes>
        <Route path="project-one" element={<ProjectOne />} />
        <Route path="project-two" element={<ProjectTwo />} />
      </Routes>
    </main>
  );
};

export default Projects;
