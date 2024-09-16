import { FC } from "react";
import { FaRegBuilding } from "react-icons/fa";
import { GiTeamUpgrade } from "react-icons/gi";
import { GrServerCluster } from "react-icons/gr";
import { MdEngineering, MdManageAccounts } from "react-icons/md";
import { TbSolarElectricity } from "react-icons/tb";

const ServiceIndex: FC = () => {
  return (
    <div className="ServiceIndex">
      <div className="box">Service</div>
      <div className="box">
        <div className="item main">
          <FaRegBuilding />
          Parts repair
        </div>
        <div className="item">
          <GiTeamUpgrade />
          Upgrade and modification
        </div>
        <div className="item">
          <MdManageAccounts />
          Project management
        </div>
        <div className="item">
          <MdEngineering />
          Technical support
        </div>
        <div className="item">
          <TbSolarElectricity />
          Parts life extension
        </div>
        <div className="item main">
          <GrServerCluster />
          Reverse Engineering, especially for old and obsolete items
        </div>
      </div>
    </div>
  );
};

export default ServiceIndex;