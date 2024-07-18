import { useState } from "react";
import "./project.css";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Tooltip from "@mui/material/Tooltip";
import Zoom from "@mui/material/Zoom";
// Functional component for each project
const Project = ({ project }) => {
  // Render project component

  const [hovered, setHovered] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  const cardStyle = {
    backgroundColor: hovered ? "#D2E3C8" : "#E7F0DC",
    transition: "background-color 0.3s ease",
  };

  return (
    <Card
      style={cardStyle}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="card-content"
      sx={{
        height: "100%",
        width: "100%",
        padding: 3,
        marginTop: 3,
      }}
    >
      <CardMedia
        sx={{ height: 200, border: "1px solid black" }}
        image={project.screenshot}
        title={project.title}
      />
      <CardContent>
        <Typography
          gutterBottom
          className="card-title"
          variant="h5"
          component="div"
        >
          {project.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {project.shortDescription}
        </Typography>
        <Typography
          variant="body1"
          color="text.secondary"
          className="techno-used"
        >
          Technologies used:
        </Typography>
        <Typography
          variant="body1"
          color="text.secondary"
          className="techno-used-text"
        >
          {project.technologiesUsed}
        </Typography>
      </CardContent>
      <CardActions>
        <div className="cardButton">
          {project.deployedLink.length > 0 && (
            <Tooltip TransitionComponent={Zoom} title="Website">
              <Button
                className="project-link"
                variant="outlined"
                target="_blank"
                href={project.deployedLink}
                size="small"
              >
                View Website
              </Button>
            </Tooltip>
          )}
          <Tooltip TransitionComponent={Zoom} title="Github Page">
            <Button
              className="project-link"
              variant="outlined"
              target="_blank"
              href={project.githubLink}
              size="small"
            >
              View Github
            </Button>
          </Tooltip>
        </div>
      </CardActions>
    </Card>
  );
};

export default Project;
