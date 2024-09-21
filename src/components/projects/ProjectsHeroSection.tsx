import bg from "../../public/images/projects.jpg";
import ProjectsSearchBox from "./ProjectsSearchBox";
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
