import React from "react";

const AboutUs = () => {
  return (
    <div className="sm:flex items-center max-w-screen-xl">
      <div className="sm:w-1/2 p-10">
        <div className="image object-center text-center">
          <img src="https://i.imgur.com/WbQnbas.png" />
        </div>
      </div>
      <div className="sm:w-1/2 p-5">
        <div className="text">
          <span className="text-gray-500 border-b-2 border-indigo-600 uppercase">
            About us
          </span>
          <h2 className="my-4 font-bold text-3xl  sm:text-4xl ">
            About <span className="text-indigo-600">Kitchen Master</span>
          </h2>
          <p className="text-slate-600 my-4">
            Welcome to Kitchen Master – the world’s most successful food format.
            For over 15 years, we have been uncovering Indian best food talents,
            putting them through their paces in a series of extraordinary
            cooking challenges. Cooking doesn’t get tougher than this!
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
