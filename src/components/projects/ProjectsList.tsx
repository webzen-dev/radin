import { useContext, useState } from "react";
import { ProjectContext } from "../../context/ProjectContext";
import { GiGearHammer } from "react-icons/gi";
const ProjectList = () => {
  const { projects, searchTerm } = useContext(ProjectContext);
  const [selectedProject, setSelectedProject] = useState<any | null>(null);
  const filteredProjects = projects.filter(
    (project) =>
      project.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.brand.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
    <div className="project-list">
      {selectedProject && (
        <div className="project-details">
          <div className="box">
            <img
              src={selectedProject.image}
              alt={`Project: ${selectedProject.name}`}
            />
            <div className="box">
              <h2>{selectedProject.name}</h2>
              <div>
                <span>Brand:</span> {selectedProject.brand}
              </div>
              <div>
                <span>Description:</span> {selectedProject.description}
              </div>
              <div>
                <span>Category:</span> {selectedProject.category}
              </div>
              <button onClick={() => setSelectedProject(null)}>
                Back to list
              </button>
            </div>
          </div>
        </div>
      )}
      {filteredProjects.length > 0 ? (
        filteredProjects.map((project) => (
          <div className="project-item" key={project.id}>
            <img src={project.image} alt={`Project: ${project.name}`} />
            <div className="title">{project.name}</div>
            <div className="brand">
              <GiGearHammer />
              Brand: {project.brand}
            </div>
            <button onClick={() => setSelectedProject(project)}>
              show project
            </button>
          </div>
        ))
      ) : (
        <div>No projects found</div>
      )}
    </div>
  );
};

export default ProjectList;
