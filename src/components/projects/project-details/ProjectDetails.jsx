import projectsData from "../../../projects.json";
import { useLocation } from "react-router-dom";
import NotFound from "../../not-found/NotFound";

const ProjectDetails = () => {
  let location = useLocation();
  const locationPath = location.pathname.replace("/projects/", "");

  const data = projectsData.find((proj) => proj.path === locationPath);
  console.log("DATA: ", data);
  return data ? (
    <main className="projects main-section">
      <p>{data?.title}</p>
    </main>
  ) : (
    <NotFound />
  );
};

export default ProjectDetails;
