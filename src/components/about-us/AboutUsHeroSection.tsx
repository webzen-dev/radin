import bg from "../../../public/images/about.jpg";
import { motion } from "framer-motion";

import { useAnimation } from "../../context/AnimationContext";
const AboutUsHeroSection = () => {
  const { itemVariants } = useAnimation();
  return (
    <motion.div
      variants={itemVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false }}
      className="hero-section "
      style={{ background: `url(${bg.src})` }}
    >
      <h2>RET </h2>
      <span>
        RET offers advanced energy services across multiple industries globally.
      </span>
    </motion.div>
  );
};

export default AboutUsHeroSection;
