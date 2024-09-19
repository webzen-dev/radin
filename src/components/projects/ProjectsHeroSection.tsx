import Image from "next/image";
import bg from "../../public/images/projects.jpg";
import ProjectsSearchBox from "./ProjectsSearchBox";
// import "../../styles/globals.css"
const ProjectsHeroSection = () => {
  return (
    <div className="ProjectsHeroSection">
      <div className="image-box" style={{ backgroundImage: `url(${bg.src})` }}>
        <span> "Empowering Industry with Advanced Parts and Services"</span>

      </div>
      <ProjectsSearchBox/>
    </div>
  );
};

export default ProjectsHeroSection;
