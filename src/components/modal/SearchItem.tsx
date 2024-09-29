import Image from "next/image";
import { useContext } from "react";
import { ProjectContext } from "../../context/ProjectContext";

const SearchItem = () => {
  const context = useContext(ProjectContext);

  if (!context) {
    return <div>Loading...</div>;
  }

  const { projects, loading, error, searchTerm } = context;

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

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
              src={project.image}
              alt={project.name}
            />
            <div className="box-item">
              <span>{project.name}</span>
              <button>Show Item</button>
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
