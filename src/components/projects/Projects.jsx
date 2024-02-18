import "./projects.css";
import Project from "./project/Project";
import projectsData from "../../projects.json";

const Projects = () => {
  return (
    <main className="projects main-section">
      {projectsData.map((project) => (
        <Project key={project.id} project={project} />
      ))}{" "}
    </main>
  );
};

export default Projects;
