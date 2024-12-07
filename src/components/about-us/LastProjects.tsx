import { useState, useEffect, useContext } from "react";
import { ProjectContext } from "../../context/ProjectContext"; // به پروژه خودتان ارجاع بدهید
import { motion, useAnimation } from "framer-motion";  // استفاده از useAnimation از framer-motion
import Link from "next/link";  // ایمپورت Link از next/link

const LastProjects = () => {
  const { projects, loading, error } = useContext(ProjectContext);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const controls = useAnimation();  // استفاده از useAnimation

  const speed = 80;
  const itemWidth = 320;

  // فقط 10 محصول آخر
  const last10Projects = projects.slice(-10);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === last10Projects.length ? 0 : prevIndex + 1
      );
      setIsTransitioning(true);
    }, 3000);

    return () => clearInterval(interval);
  }, [last10Projects.length]);

  useEffect(() => {
    if (currentIndex === last10Projects.length) {
      setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(0);
      }, speed * 10);
    }
  }, [currentIndex, last10Projects.length, speed]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <motion.div
      animate={controls}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="last-projects"
    >
      <h2>Latest Products</h2>
      <div
        className="box"
        style={{
          transform: `translateX(${-currentIndex * itemWidth}px)`,
          transition: isTransitioning
            ? `transform ${speed / 10}s linear`
            : "none",
        }}
      >
        {last10Projects.map((project) => (
          <Link href={`/projects/${project.id}`} key={project.id}>
            <div className="item">
              <img src={project.images[0]?.src} alt={project.name} />
              <div>{project.name}</div>
            </div>
          </Link>
        ))}
        {last10Projects.map((project) => (
          <Link href={`/projects/${project.id}`} key={`duplicate-${project.id}`}>
            <div className="item">
              <img src={project.images[0]?.src} alt={project.name} />
              <div>{project.name}</div>
            </div>
          </Link>
        ))}
      </div>
    </motion.div>
  );
};

export default LastProjects;
