import { FC } from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import Link from "next/link";

const ProjectAndServices: FC = () => {
  return (
    <div className="ProjectAndServices">
      <div className="box">
        <div className="title">Projects</div>
        <span>
          "RET excels in delivering complex projects in power, transmission, and
          industrial automation, ensuring efficiency and quality throughout all
          phases."
        </span>
        <Link href="/aboutUs" legacyBehavior>
          <a>
            Explore <FaExternalLinkAlt />
          </a>
        </Link>
      </div>
      <div className="line"></div>
      <div className="box">
        <div className="title">Services</div>
        <span>
          "RET provides comprehensive services, including spare parts, repairs,
          technical support, and upgrades, tailored to various industry needs
          and requirements."
        </span>
        <Link href="/aboutUs" legacyBehavior>
          <a>
            Explore <FaExternalLinkAlt />
          </a>
        </Link>
      </div>
    </div>
  );
};

export default ProjectAndServices;