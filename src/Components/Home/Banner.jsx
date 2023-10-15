import React from "react";

import LaptopFrame from "../Shared/laptop-frame/LaptopFrame";
const Banner = () => {
  return (
    <div className="grid md:grid-cols-2 gap-4 items-center justify-center font-propines bg-[#FFC700] py-10">
      <LaptopFrame></LaptopFrame>
      <div className="text-start px-4">
        <h2 className="md:text-4xl text-2xl font-semibold">
          Mastering the Art of Culinary Excellence with{" "}
        </h2>
        <br />
        <span
          style={{ borderRadius: "10px 0 10px 0" }}
          className="text-indigo-600 text-5xl font-bold p-1 bg-white"
        >
          Kitchen Master
        </span>
        <p className="text-slate-600 my-6">
          {" "}
          Unleash Your Culinary Potential with Kitchen Master: The Ultimate
          Resource for Professional and Home Cooks Alike.
        </p>
        <div className="md:w-[25%]">
          <button className="btn text-white btn-success hover:bg-white hover:text-slate-600  hover:border-white">
            Explore More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
