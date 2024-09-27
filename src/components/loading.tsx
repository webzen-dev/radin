import React from "react";

const Loader: React.FC = () => {
  return (
    <div className="loading">
      <div className="loader">
        <div className="box">
          <div className="logo">radin</div>
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
