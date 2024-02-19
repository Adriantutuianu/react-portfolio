import { Route, Routes } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Projects from "./Projects";
import ProjectDetails from "./project-details/ProjectDetails";

const ProjectsRoutes = () => {
  let location = useLocation();
  return (
    <Routes location={location}>
      <Route path="/" element={<Projects />} />
      <Route
        path="/:path"
        key={location.pathname}
        element={<ProjectDetails />}
      />
      <Route path="*" element={<div>NOT FOUND</div>} />
    </Routes>
  );
};

export default ProjectsRoutes;
