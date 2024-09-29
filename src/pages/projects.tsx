import { useContext, useEffect, useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import ProjectsHeroSection from "../components/projects/ProjectsHeroSection";
import ProjectList from "../components/projects/ProjectsList";
import Loader from "../components/loading";

const Projects = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

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
