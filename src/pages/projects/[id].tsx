import { useRouter } from "next/router";
import { useContext, useState } from "react";
import { ProjectContext } from "../../context/ProjectContext";
import Link from "next/link";
import Image from "next/image";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import RequestBuy from "../../components/modal/RequestBuy";

const ProjectItem = () => {
  const router = useRouter();
  const [openModal, setOpenModal] = useState(false);
  const { id } = router.query;
  const context = useContext(ProjectContext);
  if (!context) {
    return <div>Loading...</div>;
  }
  const { projects } = context;

  const project = projects.find((project) => project.id === Number(id));

  if (!project) return <div>Project not found</div>;

  return (
    <div className="project-item-page-box">
      <h2>Project Item</h2>
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
          <div className="title">{project.name}</div>
          <p className="description">{project.description}</p>
          <p className="brand">Brand: {project.brand}</p>
          <p className="category">Category: {project.category}</p>
          <button onClick={() => setOpenModal(true)}>
            Request to Buy
          </button>
          <button className="last-btn">
            <Link href={"/projects"}>Back to Project Page</Link>
          </button>
        </div>
        {openModal && (
          <RequestBuy
            projectinfo={project}
            closeModal={() => setOpenModal(false)}
          />
        )}
      </div>
      <ToastContainer />
    </div>
  );
};

export default ProjectItem;
