import React, { useEffect, useState } from "react";

const ProgressBar = () => {
  const [scrollWidth, setScrollWidth] = useState(0);

  const updateScrollProgress = () => {
    const scrollTop = window.scrollY;
    const scrollHeight = document.documentElement.scrollHeight;
    const clientHeight = document.documentElement.clientHeight;
    const scrolled = (scrollTop / (scrollHeight - clientHeight)) * 100;
    setScrollWidth(scrolled);
  };

  useEffect(() => {
    window.addEventListener("scroll", updateScrollProgress);
    updateScrollProgress(); 

    return () => {
      window.removeEventListener("scroll", updateScrollProgress);
    };
  }, []);

  return (
    <div className="progress-bar-container">
      <div className="progress-bar" style={{ width: `${scrollWidth}%` }}></div>
    </div>
  );
};

export default ProgressBar;
