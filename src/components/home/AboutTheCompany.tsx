import { MdArrowOutward } from "react-icons/md";
import Link from "next/link";
import { FC } from "react";
import { motion } from "framer-motion";
import { useAnimation } from "../../context/AnimationContext";

const AboutTheCompany: FC = () => {
  const { itemVariants } = useAnimation();

  return (
    <motion.div
      className="AboutTheCompany"
      variants={itemVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false }}
    >
      <span>Who We Are</span>
      <span>RET (Radin Equipment Trading) LLC</span>
      <div className="box">
        At RET, you can get a full range of spare parts, equipment, small and
        medium EPC contracting services from various brands, power generation,
        transmission, oil and gas, transportation, chemical, industrial
        automation and other projects. With many years of expertise in upstream
        and downstream operations, RET provides advanced energy services
        throughout the UAE, the Middle East, Africa, the Mediterranean and South
        Asia.
        <Link href="/aboutUs">
          <span>
            read more <MdArrowOutward />
          </span>
        </Link>
      </div>
    </motion.div>
  );
};

export default AboutTheCompany;
