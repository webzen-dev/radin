import Image from "next/image";
import brand from "../public/ret.png"
import { MdAddIcCall, MdOutlineEmail, MdOutlineSearch } from "react-icons/md";
import { PiInstagramLogo } from "react-icons/pi";
import { GrLinkedinOption } from "react-icons/gr";
import { LiaFacebookF } from "react-icons/lia";
import { FaTwitter } from "react-icons/fa";
import Link from "next/link";
import { useState } from "react";
import SearchBox from "./modal/SearchBox";
import { useRouter } from "next/router";
import { IoMdClose } from "react-icons/io";
import { HiOutlineBars3BottomLeft } from "react-icons/hi2";

const Header = () => {
  const router = useRouter();
  const [openSearchBox, setOpenSearchBox] = useState<boolean>(false);
  const isActive = (path: string) => router.pathname === path;
  const [MobileMenu, setMobileMenu] = useState(false);

  return (
    <header>
      <div id="menuButton" onClick={() => setMobileMenu(!MobileMenu)}>
        {MobileMenu ? (
          <IoMdClose className="closeMenuIcon" />
        ) : (
          <HiOutlineBars3BottomLeft className="openMenuIcon" />
        )}
      </div>
      <div
        className={MobileMenu ? "responsive " : "box"}
        onClick={() => setMobileMenu(false)}
      >
        <Image src={brand} alt="brand image" className="logo"  
        //  layout="fill"  
        width={94}
        height={50}
        objectFit="cover" 
        
        />
        <nav>
          <div className="cta-box">
            <a href="tel:+971555898116">
              <MdAddIcCall />
              +971 55 589 8116
            </a>
            <a href="mailto:info@ret-co.ae">
              <MdOutlineEmail />
              info@ret-co.ae
            </a>
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
          </div>
          <div className="line" />
          <ul className="menu-items">
            <li className={isActive("/") ? "active" : ""}>
              <Link href="/">Home</Link>
            </li>
            <li className={isActive("/projects") ? "active" : ""}>
              <Link href="/projects">Projects</Link>
            </li>
            <li className={isActive("/aboutUs") ? "active" : ""}>
              <Link href="/aboutUs">About Us</Link>
            </li>

          </ul>
        </nav>
        <div className="search-box">
          <MdOutlineSearch onClick={() => setOpenSearchBox(true)} />
        </div>
      </div>
      {openSearchBox && <SearchBox setOpenSearchBox={setOpenSearchBox} />}
    </header>
  );
};

export default Header;
