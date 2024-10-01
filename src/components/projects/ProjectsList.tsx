import { useContext } from "react";
import Link from "next/link";
import { ProjectContext } from "../../context/ProjectContext";
import { GiGearHammer } from "react-icons/gi";
import Image from "next/image";

const ProjectList = () => {
  const { projects, searchTerm } = useContext(ProjectContext);
  const filteredProjects = projects.filter(
    (project) =>
      project.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.brand.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="project-list">
      {filteredProjects.length > 0 ? (
        filteredProjects.map((project) => (
          <div className="project-item" key={project.id}>
            <Image src={project.image} alt={`Project: ${project.name}`} width={220} height={162} />
            <div className="title">{project.name}</div>
            <div className="brand">
              <GiGearHammer />
              Brand: {project.brand}
            </div>
            <Link href={`/projects/${project.id}`}>
              <button>Show Project</button>
            </Link>
          </div>
        ))
      ) : (
        <div>No projects found</div>
      )}
    </div>
  );
};

export default ProjectList;
