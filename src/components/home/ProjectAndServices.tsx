import { FC } from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import Link from "next/link";
import { useAnimation } from "../../context/AnimationContext";
import { motion } from "framer-motion";

const ProjectAndServices: FC = () => {
  const { itemVariants } = useAnimation();

  return (
    <motion.div
      variants={itemVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false }}
      className="ProjectAndServices"
    >
      <div className="box">
        <div className="title">Projects</div>
        <span>
          "RET excels in delivering complex projects in power, transmission, and
          industrial automation, ensuring efficiency and quality throughout all
          phases."
        </span>
        <Link href="/aboutUs" legacyBehavior>
          <a>
            Explore <FaExternalLinkAlt />
          </a>
        </Link>
      </div>
      <div className="line"></div>
      <div className="box">
        <div className="title">Services</div>
        <span>
          "RET provides comprehensive services, including spare parts, repairs,
          technical support, and upgrades, tailored to various industry needs
          and requirements."
        </span>
        <Link href="/aboutUs" legacyBehavior>
          <a>
            Explore <FaExternalLinkAlt />
          </a>
        </Link>
      </div>
    </motion.div>
  );
};

export default ProjectAndServices;
