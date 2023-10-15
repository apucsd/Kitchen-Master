import React from "react";
import "./laptopframe.css";

import Lottie from "lottie-react";
import chef from "../../../assets/chef.json";
const LaptopFrame = ({ children }) => {
  return (
    <div className="container md:p-20">
      <div className="laptop">
        <div className="laptop__screen">
          <img className="h-72" src="/banner-image.webp" alt="" />
        </div>
        <div className="laptop__bottom">
          <div className="laptop__under"></div>
        </div>
        <div className="laptop__shadow"></div>
      </div>
    </div>
  );
};

export default LaptopFrame;
