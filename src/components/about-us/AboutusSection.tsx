import Image from "next/image";
import img from "../../public/images/aboutus-section.jpg";
const AboutUsSectoin = () => {
  return (
    <div className="aboutus-section">
      <Image src={img} alt="about us image" />
      <div className="box">
        <div className="title">About us</div>
        <div>
          {" "}
          At <span>RET</span>, you can get a full range of spare parts,
          equipment, small and medium EPC contracting services from various
          brands, power generation, transmission, oil and gas, transportation,
          chemical, industrial automation and other projects. With many years of
          expertise in upstream and downstream operations, RET provides advanced
          energy services throughout the UAE, the Middle East, Africa, the
          Mediterranean and South Asia.
        </div>
      </div>
    </div>
  );
};

export default AboutUsSectoin;