import { useAnimation } from "../../context/AnimationContext";
import { motion } from "framer-motion";

const Vision = () => {
  const { itemVariants } = useAnimation();

  return (
    <motion.div
      variants={itemVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false }}
      className="Vision"
    >
      <div className="box">
        {" "}
        <div className="title">Vision</div>
        <div className="caption">
          "Shaping a sustainable future through innovation."
        </div>
        <div className="text">
          Our vision is to lead the industrial sector by embracing innovative
          technologies and sustainable practices, contributing to the global
          effort of energy optimization and environmental preservation.
        </div>
      </div>
      <div></div>
    </motion.div>
  );
};

export default Vision;
