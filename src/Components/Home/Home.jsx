import React from "react";
import Banner from "./Banner";
import Chefs from "./Chefs/Chefs";
import AboutUs from "./AboutUs";
import FeedBack from "./FeedBack";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Chefs></Chefs>
      <AboutUs></AboutUs>
      <div className="bg-slate-50 p-8">
        <FeedBack></FeedBack>
      </div>
    </div>
  );
};

export default Home;
