import "./project.css";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

// Functional component for each project
const Project = ({ project }) => {
  // Render project component
  return (
    <Card sx={{ maxWidth: 545 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={project.screenshot}
        title={project.title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {project.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {project.shortDescription}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          variant="outlined"
          href={`#/projects/${project.path}`}
          size="small"
        >
          Project Details
        </Button>
      </CardActions>
    </Card>
  );
};

export default Project;
