import React, { useEffect, useState } from "react";
import ChefCard from "./ChefCard";

const Chefs = () => {
  const [chefs, setChefs] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/chefs")
      .then((res) => res.json())
      .then((data) => setChefs(data.chefs));
  }, []);
  console.log(chefs);
  return (
    <div className=" my-12">
      <h3 className="text-center my-2 text-2xl font-semibold font-sans">
        Our Chefs
      </h3>
      <hr className="w-[30%] mx-auto" />
      <div className="grid md:grid-cols-3 justify-center md:mx-12 mx-4 gap-4 my-8">
        {chefs.map((chef) => (
          <ChefCard key={chef.id} chef={chef}></ChefCard>
        ))}
      </div>
    </div>
  );
};

export default Chefs;
