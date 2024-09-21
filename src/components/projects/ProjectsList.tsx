import axios from "axios";
import { useEffect, useState } from "react";
import { GiGearHammer } from "react-icons/gi";

const ProjectList = () => {
  const [data, setData] = useState([]);
  const fetchProjectData = async () => {
    try {
      const projects = await axios.get("http://localhost:3000/api/projects");
      setData(projects.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchProjectData();
  }, []);
  return (
    <div className="project-list">
      {/* project item */}
      {data.map((project) => (
        <div className="project-item" key={project.id}>
          <img src={project.image} alt={`project image ${project.name}`} />
          <div className="title">{project.name}</div>
          <div className="brand">
            <GiGearHammer />
            Brand: <span>{project.brand}</span>
          </div>
          <button>Show Product</button>
        </div>
      ))}
    </div>
  );
};

export default ProjectList;
