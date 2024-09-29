import Image from "next/image";
import img from "../../public/images/mission.jpg"
const Mission = () => {
  return (
    <div className="Mission">
      <div className="box">
        <div className="title">Mission</div>
        <span> "Delivering a comprehensive range of energy solutions."</span>
        <p>
          At RET, we provide an extensive range of spare parts, equipment, and
          EPC contracting services across various industries, including power
          generation, oil and gas, and industrial automation. Our mission is to
          ensure operational excellence and sustainability in energy services
          across the Middle East and beyond.
        </p>
      </div>
      <Image src={img} alt="mission image" />
    </div>
  );
};

export default Mission;
