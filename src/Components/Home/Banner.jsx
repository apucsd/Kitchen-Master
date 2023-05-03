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
        <h2 className="text-4xl font-semibold">
          Mastering the Art of Culinary Excellence with{" "}
          <span className="text-6xl block my-3 text-fuchsia-500">
            Chef Master
          </span>
        </h2>
        <p className="text-slate-600 my-6">
          Unleash Your Culinary Potential with Chef Master: The Ultimate
          Resource for Professional and Home Cooks Alike
        </p>
        <button className="btn btn-outline">View details</button>
      </div>
    </div>
  );
};

export default Banner;
