import "./projects.css";
import Project from "./project/Project";
import projectsData from "../../projects.json";
import Grid from "@mui/material/Grid";

// Functional component for displaying projects
const Projects = () => {
  return (
    <main className="projects-container">
      <Grid
        className="proj-cards"
        container
        justifyContent="center"
        columnSpacing={5}
        rowSpacing={5}
      >
        {projectsData.map((project) => (
          <Grid key={project.id} item xs={11} sm={11} md={5} lg={5}>
            <Project project={project} />
          </Grid>
        ))}
      </Grid>
    </main>
  );
};

export default Projects;
