import React, { useEffect, useState, Suspense } from "react";
import Loader from "../components/loading";

const Header = React.lazy(() => import("../components/Header"));
const Footer = React.lazy(() => import("../components/Footer"));
const ProjectsHeroSection = React.lazy(() => import("../components/projects/ProjectsHeroSection"));
const ProjectList = React.lazy(() => import("../components/projects/ProjectsList"));

const Projects = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 0);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <Suspense fallback={<Loader />}>
      <div className="projects-page">
        <Header />
        <ProjectsHeroSection />
        <ProjectList />
        <Footer />
      </div>
    </Suspense>
  );
};

export default Projects;
