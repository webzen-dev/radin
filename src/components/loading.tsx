import Image from "next/image";
import React from "react";

const Loader: React.FC = () => {
  return (
    <div className="loading">
      <div className="loader">
        <div className="box">
          <div className="logo">
            <Image src={'/de.png'} width={50} height={50} alt="logo" />
          </div>
        </div>
        <div className="box"></div>
        <div className="box"></div>
        <div className="box"></div>
        <div className="box"></div>
      </div>
    </div>
  );
};

export default Loader;
