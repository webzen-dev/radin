import { FC } from "react";
import { FaChevronRight } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import { useAnimation } from "../../context/AnimationContext";
import { motion } from "framer-motion";

const ProjectsIndex: FC = () => {
  const { itemVariants } = useAnimation();

  return (
    <motion.div
      variants={itemVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false }}
      className="ProjectsIndex"
    >
      <div className="box">
        <div className="title">Projects</div>
        <span>
          Designing and proposing the main and auxiliary equipment needed for
          projects, such as pumps, engines, gearboxes, etc{" "}
          <Link href="/projects">Go to projects page</Link>
        </span>
      </div>
      <div className="box">
        <div className="item main">
          Cella Compact Temperature Switches
          <Link href="/sdsd">
            Show Project
            <FaChevronRight />
          </Link>
        </div>
        <div className="item">
          <Image
            src="https://ret-co.ae/uploads/products/product-46-1-thumb2.jpg?v=-17883965262"
            alt="Product 1"
            width={150}
            height={150}
          />
        </div>
        <div className="item">
          <Image
            src="https://ret-co.ae/uploads/products/product-25-1-thumb2.jpg?v=-17891221932"
            alt="Product 2"
            width={150}
            height={150}
          />
        </div>
        <div className="item">
          <Image
            src="https://ret-co.ae/uploads/products/product-31-1-thumb2.jpg?v=-17883965904"
            alt="Product 3"
            width={150}
            height={150}
          />
        </div>
        <div className="item">
          <Image
            src="https://ret-co.ae/uploads/products/product-33-1.jpg?v=-17883965833"
            alt="Product 4"
            width={150}
            height={150}
          />
        </div>
        <div className="item main">
          Ashcroft Pressure Switch
          <Link href="/sdsd">
            Show Project
            <FaChevronRight />
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectsIndex;
