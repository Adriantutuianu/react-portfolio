import { Link } from "react-router-dom";
import "./project.css";

const Project = ({ project }) => {
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-8 col-md-10 col-sm-12 p-3">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">{project.title}</h5>
              <p className="card-text">{project.shortDescription}</p>
              <Link
                to={project.path}
                role="button"
                className="btn btn-secondary btn-link btn-style"
              >
                Project details
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
