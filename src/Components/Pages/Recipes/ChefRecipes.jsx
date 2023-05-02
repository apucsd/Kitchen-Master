import React from "react";
import { useLoaderData } from "react-router-dom";

const ChefRecipes = () => {
  const chef = useLoaderData([]);
  console.log(chef);
  const {
    id,
    chef_name,
    chef_picture,
    year_of_experience,
    number_of_recipes,
    likes,
    short_bio,
    recipies,
  } = chef;
  return (
    <div className="m-8">
      <div className="card lg:card-side bg-base-100 shadow-xl">
        <figure>
          <img src={chef.chef_picture} alt="Album" />
        </figure>
        <div className="p-8">
          <h2 className="card-title my-3">{chef_name}</h2>
          <hr />
          <div className="text-sm">
            <p className="text-slate-600">
              <small>{short_bio}</small>
            </p>
            <br />
            <p className="my-1">
              Year of Experience:{" "}
              <span className="font-semibold">{year_of_experience}</span>
            </p>
            <p className="my-1">
              Total Like: <span className="font-semibold">{likes}</span>
            </p>
            <p className="my-1">
              Number of Recipes:{" "}
              <span className="font-semibold">{number_of_recipes}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChefRecipes;
