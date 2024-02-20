import projectsData from "../../../projects.json";
import { useLocation } from "react-router-dom";
import NotFound from "../../not-found/NotFound";
import { Link } from "react-router-dom";
import "./projectDetails.css";

const ProjectDetails = () => {
  let location = useLocation();
  const locationPath = location.pathname.replace("/projects/", "");

  const data = projectsData.find((proj) => proj.path === locationPath);
  console.log("DATA: ", data);
  return data ? (
    <main className="project-details main-section">
      <div className="content-details">
        <h1>{data?.title}</h1>
        <img
          src={data.screenshot}
          className=" img-screenshot"
          alt={data.title}
        />
        <p className="text-description">{data.description}</p>
        <p className="text-link">Deployed link:</p>
        <Link
          to={data.deployedLink}
          target="_blank"
          role="button"
          className="btn btn-link btn-link-style"
        >
          Click me to see the deployed app!
        </Link>
        <p className="text-link">Github Link: </p>
        <Link
          to={data.githubLink}
          target="_blank"
          role="button"
          className="btn btn-link btn-link-style"
        >
          click me to see the Github repository!
        </Link>
      </div>
    </main>
  ) : (
    <NotFound />
  );
};

export default ProjectDetails;
