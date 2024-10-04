import Link from "next/link";
import { motion } from "framer-motion";
import { useAnimation } from "../../context/AnimationContext";

const AboutServices = () => {
  const { itemVariants } = useAnimation();

  return (
    <motion.div
      variants={itemVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false }}
      className="about-services"
    >
      <h1>Services</h1>
      <div className="box">
        <div className="item">
          <div className="icon"> 🛠️ </div> <div className="z" />
          <span className="title">Parts Supply & Repair</span>
          <div className="caption">
            Supplying spare parts and professional repairs.
          </div>
          <Link href={"/"}>conteact us</Link>
        </div>
        <div className="item">
          <div className="icon">⚙️ </div>
          <div className="z" />
          <span className="title">Support & Upgrades</span>
          <div className="caption">
            {" "}
            Specialized support with equipment upgrades and modifications.
          </div>
          <Link href={"/"}>conteact us</Link>
        </div>
        <div className="item">
          <div className="icon"> 📐 </div>
          <div className="z" />

          <span className="title">Engineering & Design</span>
          <div className="caption">
            Engineering solutions for old and obsolete equipment.
          </div>
          <Link href={"/"}>conteact us</Link>
        </div>
        <div className="item">
          <div className="icon"> 📊 </div>
          <div className="z" />

          <span className="title">Project Management </span>
          <div className="caption">
            {" "}
            Managing projects and extending parts' lifespan.{" "}
          </div>
          <Link href={"/"}>conteact us</Link>
        </div>
      </div>
    </motion.div>
  );
};

export default AboutServices;
