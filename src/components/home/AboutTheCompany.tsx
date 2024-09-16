import { MdArrowOutward } from "react-icons/md";
// import { LiaAwardSolid } from "react-icons/lia";
import Link from "next/link";
import { FC } from "react";

const AboutTheCompany: FC = () => {
  return (
    <div className="AboutTheCompany">
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
    </div>
  );
};

export default AboutTheCompany;