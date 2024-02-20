import { Route, Routes } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Projects from "./Projects";
import ProjectDetails from "./project-details/ProjectDetails";
import NotFound from "../not-found/NotFound";

// Functional component for managing routes related to projects
const ProjectsRoutes = () => {
  let location = useLocation(); // Get current location
  return (
    <Routes location={location}>
      <Route path="/" element={<Projects />} />
      <Route
        path="/:path"
        key={location.pathname}
        element={<ProjectDetails />}
      />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default ProjectsRoutes;
