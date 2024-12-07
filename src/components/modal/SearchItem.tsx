import Image from "next/image";
import { useContext } from "react";
import { useRouter } from "next/router";
import { ProjectContext } from "../../context/ProjectContext";

const SearchItem = () => {
  const context = useContext(ProjectContext);
  const router = useRouter();

  if (!context) {
    return <div>Loading...</div>;
  }

  const { projects, searchTerm } = context;

  const filteredProjects = projects.filter((project) =>
    project.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="search-item-modal">
      {filteredProjects.length > 0 ? (
        filteredProjects.map((project) => (
          <div key={project.id} className="search-item">
            <Image
              width={80}
              height={80}
              src={
                typeof project.images?.[0] === "string"
                  ? project.images[0]
                  : "/de.png"
              }
              alt={project.name || "Project Image"}
            />

            <div className="box-item">
              <span>{project.name}</span>
              <button onClick={() => router.push(`/projects/${project.id}`)}>
                Show Item
              </button>
            </div>
          </div>
        ))
      ) : (
        <div>No projects found</div>
      )}
    </div>
  );
};

export default SearchItem;
