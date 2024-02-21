import projectsData from "../../../projects.json";
import { useLocation } from "react-router-dom";
import NotFound from "../../not-found/NotFound";
import { Link } from "react-router-dom";
import "./projectDetails.css";

// Functional component for project details
const ProjectDetails = () => {
  let location = useLocation(); // Get current location
  const locationPath = location.pathname.replace("/projects/", ""); // Extract project path from location

  const data = projectsData.find((proj) => proj.path === locationPath); // Find project data from projectsData array
  console.log("DATA: ", data); // Log project data
  return data ? ( // If project data exists
    <main className="project-details-container">
      <div className="project-details main-section">
        <div className="content-details">
          <h1>{data?.title}</h1>
          <img
            src={data.screenshot}
            className=" img-screenshot"
            alt={data.title}
          />
          <p className="text-description">{data.description}</p>
          <p className="text-link">Deployed link:</p>
          <a href={data.deployedLink} target="_blank">
            Click me to see the deployed app!
          </a>
          <p className="text-link">Github Link: </p>
          <a
            href={data.githubLink}
            target="_blank"
            role="button"
            className="btn btn-link btn-link-style"
          >
            click me to see the Github repository!
          </a>
        </div>
      </div>
    </main>
  ) : (
    <NotFound /> // Render NotFound component if project data doesn't exist
  );
};

export default ProjectDetails;
