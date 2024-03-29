import React, { useEffect, useState } from "react";
import ChefCard from "./ChefCard";

const Chefs = () => {
  const [loader, setLoader] = useState(true);
  const [chefs, setChefs] = useState([]);
  useEffect(() => {
    fetch("https://chef-master-server-apucsd.vercel.app/chefs")
      .then((res) => res.json())
      .then((data) => {
        setChefs(data.chefs);
        setLoader(false);
      });
  }, []);
  // console.log(chefs);
  if (loader) {
    return (
      <div className="flex justify-center">
        <h3 className="my-12  h-8 w-8 bg-blue-500 animate-spin"></h3>
      </div>
    );
  }
  return (
    <div className=" my-12 p-10 bg-[#FEEDEA]">
      <h3 className="text-center  my-2 text-5xl font-bold font-sans">
        Let's meet the expert.
      </h3>

      <hr className="w-[30%] mx-auto" />
      <div className="grid md:grid-cols-3 justify-center md:mx-12 mx-4 gap-4 my-8">
        {chefs.map((chef) => (
          <ChefCard loader={loader} key={chef.id} chef={chef}></ChefCard>
        ))}
      </div>
    </div>
  );
};

export default Chefs;
