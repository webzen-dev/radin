import { FC, useState } from "react";
import { CiClock2 } from "react-icons/ci";
import { GrLinkedinOption } from "react-icons/gr";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";
import { IoCallOutline } from "react-icons/io5";
import { LiaFacebookF } from "react-icons/lia";
import { MdOutlineEmail } from "react-icons/md";
import { PiInstagramLogo } from "react-icons/pi";
import Link from "next/link";
import axios from "axios";
import HCaptcha from "@hcaptcha/react-hcaptcha";
import { toast, ToastContainer } from "react-toastify"; // ایمپورت توست
import "react-toastify/dist/ReactToastify.css";
import { useAnimation } from "../../context/AnimationContext";
import { motion } from "framer-motion";

const ContactUsIndex: FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [captchaValue, setCaptchaValue] = useState<string | null>(null);
  const { itemVariants } = useAnimation();
  
  const openModal = (e: React.FormEvent) => {
    e.preventDefault();
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const handleCaptchaChange = (value: string | null) => {
    setCaptchaValue(value);
  };

  const handleSubmit = async () => {
    if (!captchaValue) {
      toast.error("Please complete the captcha");
      return;
    }

    try {
      const response = await axios.post("http://localhost:3000/api/message", {
        username: name,
        email: email,
        content: message,
      });

      if (response.status === 201) {
        toast.success("Message sent successfully!");
        setName("");
        setEmail("");
        setMessage("");
      } else {
        toast.error("Failed to send message.");
      }
    } catch (error) {
      toast.error("Error sending message: " + error.message);
    }

    setShowModal(false);
  };

  return (
    <motion.div
      variants={itemVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false }}
    >
      <div className="ContactUsIndex">
        <div className="box">
          <div className="title">Contact Us</div>
          <div className="caption">
            If you want to send us your opinion, suggestion or criticism, you
            can use the e-mail address info@ret-co.ae. You can also contact us
            through the form below.
          </div>
          <form onSubmit={openModal}>
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <textarea
              name="textMessage"
              id="textMessage"
              placeholder="Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
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

      <ToastContainer theme="dark" />

      {showModal && (
        <div className="check-captcha">
          <div className="modal-captcha-bot">
            <h3>Please verify you're not a robot</h3>
            <HCaptcha
              sitekey="2a3e0cb8-dc30-416c-87d2-541e4a3eaa56"
              onVerify={handleCaptchaChange}
            />
            <div className="btns">
              <button onClick={closeModal}>Cancel</button>
              <button onClick={handleSubmit} disabled={!captchaValue}>
                Submit
              </button>
            </div>
          </div>
        </div>
      )}
    </motion.div>
  );
};

export default ContactUsIndex;
