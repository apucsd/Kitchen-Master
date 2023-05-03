import React from "react";
import Lottie from "lottie-react";
import errorPage from "../../../assets/error.json";
import { Link, useRouteError } from "react-router-dom";
const Error = () => {
  const { error, status } = useRouteError();
  return (
    <div className="w-full h-[80vh]">
      <Lottie className="h-[80vh]" animationData={errorPage} loop={true} />
      <div className="text-center">
        <h3>Status: {status && status}</h3>
        <h3 className="my-2">Message: {error?.message}</h3>
        <Link to="/">
          <button className="btn btn-secondary text-center">Go Home</button>
        </Link>
      </div>
    </div>
  );
};

export default Error;
