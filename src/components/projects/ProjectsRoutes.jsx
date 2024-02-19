import { Route, Routes } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Projects from "./Projects";

const ProjectsRoutes = () => {
  let location = useLocation();
  return (
    <Routes location={location}>
      <Route path="/" element={<Projects />} />
      <Route
        path="/:path"
        key={location.pathname}
        element={<div>Details page</div>}
      />
      <Route path="*" element={<div>NOT FOUND</div>} />
    </Routes>
  );
};

export default ProjectsRoutes;
