import { useRouter } from "next/router";
import { useContext } from "react";
import { ProjectContext } from "../../context/ProjectContext";
import Link from "next/link";
import Image from "next/image";

const ProjectItem = () => {
  const router = useRouter();
  const { id } = router.query;
  const context = useContext(ProjectContext);
  if (!context) {
    return <div>Loading...</div>;
  }
  const { projects, loading, error } = context;

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  const project = projects.find((project) => project.id === Number(id));

  if (!project) return <div>Project not found</div>;

  return (
    <div className="project-item-page-box">
      <h2>project item</h2>
      <div className="project-item-page">
        <div className="box">
          <Image
            src={project.image}
            alt={project.name}
            width={0}
            height={0}
            sizes="100%"
          />
        </div>
        <div className="box">
          {" "}
          <div className="title">{project.name}</div>
          <p className="description">{project.description}</p>
          <p className="brand">Brand: {project.brand}</p>
          <p className="category">Category: {project.category}</p>
          <button>
            <Link href={"/projects"}>back home page</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
