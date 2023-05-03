import React from "react";
import Lottie from "lottie-react";
import chef from "../../assets/chef.json";
const Banner = () => {
  return (
    <div className="grid md:grid-cols-2 gap-4 items-center justify-center font-propines">
      <div>
        <Lottie className="md:h-[100vh]" animationData={chef} loop={true} />
      </div>
      <div className="text-start px-4">
        <h2 className="md:text-4xl text-2xl font-semibold">
          Mastering the Art of Culinary Excellence with{" "}
          <span className="text-5xl block my-3 text-fuchsia-500 ">
            Kitchen Master
          </span>
        </h2>
        <p className="text-slate-600 my-6">
          <small>
            {" "}
            Unleash Your Culinary Potential with Kitchen Master: The Ultimate
            Resource for Professional and Home Cooks Alike.
          </small>
        </p>
        <div className="md:w-[25%]">
          <button className="my-btn">View Details</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
