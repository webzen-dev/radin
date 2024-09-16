import { FC } from "react";
import { CiClock2 } from "react-icons/ci";
import { GrLinkedinOption } from "react-icons/gr";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";
import { IoCallOutline } from "react-icons/io5";
import { LiaFacebookF } from "react-icons/lia";
import { MdOutlineEmail } from "react-icons/md";
import { PiInstagramLogo } from "react-icons/pi";
import Link from "next/link";

const ContactUsIndex: FC = () => {
  return (
    <div className="ContactUsIndex">
      <div className="box">
        <div className="title">Contact Us</div>
        <div className="caption">
          If you want to send us your opinion, suggestion or criticism, you can
          use the e-mail address info@ret-co.ae. You can also contact us through
          the form below.
        </div>
        <form method="POST">
          <input type="text" placeholder="Name" required />
          <input type="email" placeholder="Email" required />
          <textarea
            name="textMessage"
            id="textMessage"
            placeholder="Message"
          ></textarea>
          <button type="submit">Send</button>
        </form>
      </div>
      <div className="box">
        <div className="title">Info</div>
        <ul>
          <li>
            <Link href="mailto:info@ret-co.ae">
              <MdOutlineEmail />
              <span>info@ret-co.ae</span>
            </Link>
          </li>
          <li>
            <Link href="tel:+971555898161">
              <IoCallOutline />
              <span>+971555898161</span>
            </Link>
          </li>
          <li>
            <Link href="">
              <HiOutlineBuildingOffice2 />
              <span>
                Street 28 C 47 B, Mirdif, Dubai, United Arab Emirates
              </span>
            </Link>
          </li>
          <li>
            <CiClock2 />
            <span> 09:00 - 18:00 </span>
          </li>
        </ul>
      </div>
      <div className="socialMedia">
        <span>
          <Link href="">
            <PiInstagramLogo />
          </Link>
        </span>
        <span>
          <Link href="">
            <GrLinkedinOption />
          </Link>
        </span>
        <span>
          <Link href="">
            <LiaFacebookF />
          </Link>
        </span>
      </div>
    </div>
  );
};

export default ContactUsIndex;