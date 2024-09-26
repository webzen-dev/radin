import { useState } from "react";
import ProjectsHeader from "./projects/ProjectsHeader";
import AddProjects from "./projects/AddProject";
import ListProjects from "./projects/ListProjects";

const Project = () => {
  const [showSection, setShowSection] = useState<boolean>(false);
  return (
    <div className="">
      <ProjectsHeader setShowSection={setShowSection} />
      {showSection ? <AddProjects /> : <ListProjects />}
    </div>
  );
};

export default Project;
