import { FC } from "react";
import bg from "@/public/images/IndustryPride.jpg";
const IndustryPride: FC = () => {
  return (
    <div
      className="IndustryPride"
      style={{ backgroundImage: `url(${bg.src})` }}
    >
      "Engineering Excellence, Every Step of the Way"
    </div>
  );
};

export default IndustryPride;
