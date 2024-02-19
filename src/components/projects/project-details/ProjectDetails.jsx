import projectsData from "../../../projects.json";
import { useLocation } from "react-router-dom";

const ProjectDetails = () => {
  let location = useLocation();
  const locationPath = location.pathname.replace("/projects/", "");
  console.log(locationPath);
  console.log("proj data", projectsData);
  console.log("location pathname: ", location.pathname);

  const data = projectsData.find((proj) => proj.path === locationPath);
  console.log("DATA: ", data);
  return (
    <main className="projects main-section">
      <p>{data.title}</p>
    </main>
  );
};

export default ProjectDetails;
