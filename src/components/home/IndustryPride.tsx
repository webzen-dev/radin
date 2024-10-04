import { FC } from "react";
import bg from "../../../public/images/IndustryPride.jpg";
import { useAnimation } from "../../context/AnimationContext";
import { motion } from "framer-motion";

const IndustryPride: FC = () => {
  const { itemVariants } = useAnimation();

  return (
    <motion.div
      variants={itemVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false }}
      className="IndustryPride"
      style={{ backgroundImage: `url(${bg.src})` }}
    >
      Engineering Excellence, Every Step of the Way
    </motion.div>
  );
};

export default IndustryPride;
