import { useState, useEffect } from "react";
import { useAnimation } from "../../context/AnimationContext";
import { motion } from "framer-motion";

const CompanyCollaborations = () => {
  const [companies, setCompanies] = useState([
    "Company 1",
    "Company 2",
    "Company 3",
    "Company 4",
    "Company 5",
    "Company 6",
    "Company 7",
    "Company 8",
    "Company 9",
  ]);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const { itemVariants } = useAnimation();

  const speed = 80;
  const itemWidth = 320;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === companies.length ? 0 : prevIndex + 1
      );
      setIsTransitioning(true);
    }, 3000);

    return () => clearInterval(interval);
  }, [companies.length]);

  useEffect(() => {
    if (currentIndex === companies.length) {
      setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(0);
      }, speed * 10);
    }
  }, [currentIndex, companies.length, speed]);

  return (
    <motion.div
      variants={itemVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false }}
      className="company-collaborations"
    >
      <h2>Company Collaborations</h2>
      <div
        className="box"
        style={{
          transform: `translateX(${-currentIndex * itemWidth}px)`,
          transition: isTransitioning
            ? `transform ${speed / 10}s linear`
            : "none",
        }}
      >
        {companies.map((company, index) => (
          <div className="item" key={index}>
            {company}
          </div>
        ))}
        {companies.map((company, index) => (
          <div className="item" key={`duplicate-${index}`}>
            {company}
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default CompanyCollaborations;
