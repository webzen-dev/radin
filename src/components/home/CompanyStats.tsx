import { useEffect, useState, useRef, useCallback } from "react";
import { LiaCertificateSolid } from "react-icons/lia";
import { PiBuildingOffice } from "react-icons/pi";
import { TiWorldOutline } from "react-icons/ti";
import bg from "../../../public/images/AboutTheCompany.jpg";
import { useAnimation } from "../../context/AnimationContext";
import { motion } from "framer-motion";

const CompanyStats: React.FC = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const statsRef = useRef<HTMLDivElement | null>(null);

  const [customersCount, setCustomersCount] = useState<number>(0);
  const [certificatesCount, setCertificatesCount] = useState<number>(0);
  const [projectsCount, setProjectsCount] = useState<number>(0);

  const animateCount = (
    target: number,
    setCount: React.Dispatch<React.SetStateAction<number>>
  ) => {
    let start = 0;
    const duration = 1000;
    const increment = target / (duration / 100);
    const interval = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(interval);
      } else {
        setCount(Math.floor(start));
      }
    }, 100);
  };

  const handleScroll = useCallback(() => {
    const viewportHeight = window.innerHeight;
    const scrollY = window.scrollY;

    if (scrollY >= viewportHeight) {
      if (!isVisible) {
        setIsVisible(true);
      }
    }
  }, [isVisible]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  useEffect(() => {
    if (isVisible) {
      animateCount(423, setCustomersCount);
      animateCount(12, setCertificatesCount);
      animateCount(1532, setProjectsCount);
    }
  }, [isVisible]);
  const { itemVariants } = useAnimation();

  return (
    <motion.div
      variants={itemVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false }}
      className="CompanyStats"
      ref={statsRef}
      style={{ backgroundImage: `url(${bg.src})` }}
    >
      <div className="box">
        <div>
          <TiWorldOutline />
          <span>{customersCount}</span>
          <span>Our customers are all over the country</span>
        </div>
        <div>
          <LiaCertificateSolid />
          <span>{certificatesCount}</span>
          <span>Certificates and awards</span>
        </div>
        <div>
          <PiBuildingOffice />
          <span>{projectsCount}</span>
          <span>Completed projects of the company</span>
        </div>
      </div>
    </motion.div>
  );
};

export default CompanyStats;
