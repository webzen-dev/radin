import Image from "next/image";
import { MdDeleteOutline } from "react-icons/md";
import { useContext, useEffect, useState } from "react";
import { ProjectContext } from "../../../context/ProjectContext";
import axios from "axios";
import ConfirmModal from "../ListAdmins/ConfirmModal";

const ListProjects = () => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [projectToDelete, setProjectToDelete] = useState<{
    id: number;
    name: string;
  } | null>(null);

  const [localProjects, setLocalProjects] = useState<any[]>([]);

  const projectContext = useContext(ProjectContext);

  const projects = projectContext?.projects || [];

  useEffect(() => {
    setLocalProjects(projects);
  }, [projects]);

  const handleDeleteClick = (project: { id: number; name: string }) => {
    setProjectToDelete(project);
    setShowModal(true);
  };

  const confirmDelete = async () => {
    if (projectToDelete !== null) {
      try {
        await axios.delete(`/api/projects/${projectToDelete.id}`);
        setShowModal(false);
        setLocalProjects((prev) =>
          prev.filter((project) => project.id !== projectToDelete.id)
        );
      } catch (err) {
        console.error("Error deleting project:", err.message);
      }
    }
  };

  const cancelDelete = () => {
    setShowModal(false);
    setProjectToDelete(null);
  };

  if (!projectContext) {
    return <p>Loading...</p>;
  }

  return (
    <div className="list-project">
      <h2>Project List</h2>
      <div className="list-project-box">
        {localProjects.length === 0 ? (
          <p>No projects available</p>
        ) : (
          localProjects.map((project) => (
            <div key={project.id} className="project-item">
              <div className="box">
                <Image
                  alt={project.name}
                  src={project.images[0]?.src || "/default-image.jpg"}
                  width={100}
                  height={100}
                />
                <div className="box">
                  <div className="name">{project.name}</div>
                  <div className="description">{project.description}</div>
                  <div className="brand">{project.brand}</div>
                  <div className="category">{project.category}</div>
                </div>
              </div>
              <button
                onClick={() =>
                  handleDeleteClick({ id: project.id, name: project.name })
                }
              >
                Delete <MdDeleteOutline />
              </button>
            </div>
          ))
        )}
      </div>

      {showModal && projectToDelete && (
        <ConfirmModal
          onConfirm={confirmDelete}
          onCancel={cancelDelete}
          username={projectToDelete.name}
        />
      )}
    </div>
  );
};

export default ListProjects;
