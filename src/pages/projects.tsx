import Header from "../components/Header";
import ProjectsHeroSection from "../components/projects/ProjectsHeroSection";
import ProjectList from "../components/projects/ProjectsList";

const Projects = () => {
    return ( 
        <div className="projects-page">
            {/* <Header/> */}
            <ProjectsHeroSection />
            <ProjectList/>
        </div>
    );
}
 
export default Projects
