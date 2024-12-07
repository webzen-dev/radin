import { IoLogoInstagram } from "react-icons/io";
import { PiTelegramLogoBold } from "react-icons/pi";
import { SlSocialFacebook } from "react-icons/sl";
import { BsTwitterX } from "react-icons/bs";
import { FaWhatsapp } from "react-icons/fa";

const SocialLinks = () => {
  const currentUrl = typeof window !== "undefined" ? window.location.href : "";

  return (
    <div className="share">
      <span>Share :</span>
      <a
        href={`https://www.instagram.com/share?url=${encodeURIComponent(
          currentUrl
        )}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <IoLogoInstagram />
      </a>
      <a
        href={`https://t.me/share/url?url=${encodeURIComponent(
          currentUrl
        )}&text=Check this out!`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <PiTelegramLogoBold />
      </a>
      <a
        href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
          currentUrl
        )}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <SlSocialFacebook />
      </a>
      <a
        href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(
          currentUrl
        )}&text=Check this out!`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <BsTwitterX />
      </a>
      <a
        href={`https://wa.me/?text=${encodeURIComponent(currentUrl)}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaWhatsapp />
      </a>
    </div>
  );
};

export default SocialLinks;
