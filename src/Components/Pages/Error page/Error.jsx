import React from "react";
import Lottie from "lottie-react";
import errorPage from "../../../assets/error.json";
import { Link } from "react-router-dom";
const Error = () => {
  return (
    <div className="w-full h-[80vh]">
      <Lottie className="h-[80vh]" animationData={errorPage} loop={true} />
      <div className="text-center">
        <Link to="/">
          {" "}
          <button className="btn btn-secondary text-center">Go Home</button>
        </Link>
      </div>
    </div>
  );
};

export default Error;
