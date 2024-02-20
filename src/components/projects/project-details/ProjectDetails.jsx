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
      <img src={data.screenshot} className="img-screenshot" alt={data.title} />
      <h1>{data?.title}</h1>
      <section>{data.description}</section>
      <p>Deployed link:</p>
      <Link to={data.deployedLink} role="button" className="btn btn-link">
        This is the link to deployed application.
      </Link>
      <p>Github Link: </p>
      <Link to={data.githubLink} role="button" className="btn btn-link">
        This is the link to Github Repository.
      </Link>
    </main>
  ) : (
    <NotFound />
  );
};

export default ProjectDetails;
