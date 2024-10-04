import { motion } from "framer-motion";
import { useAnimation } from "../../context/AnimationContext";

const CoreValues = () => {
  const { itemVariants } = useAnimation();

  return (
    <motion.div
      variants={itemVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false }}
      className="core-value"
    >
      <div className="box">
        {" "}
        <div className="title">Core Values</div>
        <div className="caption">Guided by integrity and excellence </div>
        <ul>
          <li>
            <span>Quality</span>: Commitment to delivering superior products and
            services.
          </li>
          <li>
            <span>Integrity</span>: Building trust through transparency and
            ethical practices.
          </li>
          <li>
            <span>Innovation</span>: Continually advancing our solutions with
            cutting-edge technologies.
          </li>
          <li>
            <span> Customer Satisfaction</span>: Prioritizing our clients' needs
            and fostering long-term partnerships.
          </li>
        </ul>
      </div>{" "}
      <div></div>
    </motion.div>
  );
};

export default CoreValues;
