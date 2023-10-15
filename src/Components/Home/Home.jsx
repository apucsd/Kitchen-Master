import React from "react";
import Banner from "./Banner";
import Chefs from "./Chefs/Chefs";
import FeedBack from "./FeedBack";
import Feature from "./Feature";
import NewsLater from "./NewsLater";
import AboutUs from "./AboutUs";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Feature></Feature>
      <Chefs></Chefs>

      <NewsLater></NewsLater>
      <AboutUs></AboutUs>
      <div className="bg-slate-50 p-8">
        <FeedBack></FeedBack>
      </div>
    </div>
  );
};

export default Home;
