import "./project.css";

const Project = ({ project }) => {
  return (
    <div className="card">
      <img
        src={project.screenshot}
        className="card-img-top"
        alt={project.title}
      />
      <div className="card-body">
        <h5 className="card-title">{project.title}</h5>
        <p className="card-text">Description: {project.description}</p>
        <a
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
        </a>
      </div>
    </div>
  );
};

export default Project;
