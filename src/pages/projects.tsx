import { useContext, useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import ProjectsHeroSection from "../components/projects/ProjectsHeroSection";
import ProjectList from "../components/projects/ProjectsList";

const Projects = () => {

  return (
    <div className="projects-page">
        <Header />
        <ProjectsHeroSection />
        <ProjectList />
        <Footer />
    </div>
  );
};

export default Projects;
