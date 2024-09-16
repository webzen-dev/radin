import Link from "next/link";
import { useRouter } from "next/router";
import { FaAngleUp, FaTwitter } from "react-icons/fa";
import { GrLinkedinOption } from "react-icons/gr";
import { LiaFacebookF } from "react-icons/lia";
import { PiInstagramLogo } from "react-icons/pi";
import { useCallback } from "react";

const Footer = () => {
  const router = useRouter();
  const isActive = (path: string) => router.pathname === path;

  const scrollToTop = useCallback(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, []);

  return (
    <footer>
      <div id="up" onClick={scrollToTop}>
        <span> <FaAngleUp /></span>
      </div>
      <ul>
        <li className={isActive("/") ? "active" : ""}>
          <Link href="/">Home</Link>
        </li>
        <li className={isActive("/projects") ? "active" : ""}>
          <Link href="/projects">Projects</Link>
        </li>
        <li className={isActive("/aboutUs") ? "active" : ""}>
          <Link href="/aboutUs">About Us</Link>
        </li>
        <li className={isActive("/contactUs") ? "active" : ""}>
          <Link href="/login">Login For Admin</Link>
        </li>
      </ul>
      <div className="social-media">
        <a href="">
          <PiInstagramLogo />
        </a>
        <a href="">
          <FaTwitter />
        </a>
        <a href="">
          <GrLinkedinOption />
        </a>
        <a href="">
          <LiaFacebookF />
        </a>
      </div>

      <div className="about_developer">
        <Link href={"developers"}>About developers</Link>
      </div>
    </footer>
  );
};

export default Footer;