import { Link } from "react-router-dom";
import "./project.css";

const Project = ({ project }) => {
  return (
    <div className="col-lg-6 col-md-12 col-sm-12 mb-4">
      <div className="card">
        {/* <img
          src={project.screenshot}
          className="card-img-top"
          alt={project.title}
        /> */}
        <div className="card-body">
          <h5 className="card-title">{project.title}</h5>
          <p className="card-text">Description: {project.description}</p>
          {/* <a
            href={project.deployedLink}
            className="btn btn-primary"
            target="_blank"
            rel="noopener noreferrer"
          >
            Deployed Version
          </a>
          <a
            href={project.githubLink}
            className="btn btn-secondary"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub Repository
          </a> */}
          <Link
            to={project.path}
            role="button"
            className="btn btn-secondary btn-link"
          >
            Project details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Project;
