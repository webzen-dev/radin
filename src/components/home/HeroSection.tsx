import Link from "next/link";
import { FaTwitter } from "react-icons/fa";
import { GrInstagram, GrLinkedinOption } from "react-icons/gr";
import { LiaFacebookF } from "react-icons/lia";
import { FiChevronDown } from "react-icons/fi";
import { FC } from "react";
import bg from "../../../public/images/hero-section.jpg";
const HeroSection: FC = () => {
  const scrollToSection = () => {
    window.scrollTo(0, 600);
  };
  return (
    <div
      className="hero-section"
      style={{ backgroundImage: `url(${bg.src}) ` }}
    >
      <div className="box">
        <div className="title">
          <ul>
            <li>
              <span>Supplier of power plant and refinery equipment</span>
            </li>
            <li>
              <span>Performing maintenance services of power plants</span>
            </li>
            <li>
              <span>Provision of specialized human resources</span>
            </li>
          </ul>
        </div>
        <div className="caption">
          Comprehensive Solutions for Power Plant and Refinery Equipment Supply,
          Advanced Maintenance Services, and Specialized Human Resource
          Provision
        </div>

        <Link href="/aboutUs">
          <span>About Us</span>
        </Link>
      </div>
      <div className="social-media">
        <ul>
          <li>
            <a href="#">
              <GrInstagram />
            </a>
          </li>
          <li>
            <a href="#">
              <FaTwitter />
            </a>
          </li>
          <li>
            <a href="#">
              <GrLinkedinOption />
            </a>
          </li>
          <li>
            <a href="#">
              <LiaFacebookF />
            </a>
          </li>
        </ul>
      </div>

      <div id="arrowDown" onClick={scrollToSection}>
        <FiChevronDown />
      </div>
    </div>
  );
};

export default HeroSection;
