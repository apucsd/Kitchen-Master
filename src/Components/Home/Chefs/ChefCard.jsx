import React from "react";
import { HiHandThumbUp } from "react-icons/hi2";
import { Link } from "react-router-dom";
const ChefCard = ({ chef }) => {
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
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={chef_picture} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{chef_name}</h2>
        <div className="flex gap-2 text-slate-500 ">
          <span className="bg-slate-50 p-3 rounded">
            Year of experience:
            <p>{year_of_experience}</p>
          </span>
          <span className="bg-slate-50 p-3 rounded">
            Number of Recipe:
            <p>{number_of_recipes}</p>
          </span>
        </div>
        <div className="flex justify-center p-2  my-1 bg-slate-50 w-full shadow-sm">
          <span className="flex text-center gap-1 items-center cursor-pointer">
            <HiHandThumbUp className="text-blue-600 text-xl" />
            {likes}
          </span>
        </div>
        <div className="card-actions w-full">
          <Link className="w-full" to={`chef-recipes/${id}`}>
            <button className="btn btn-warning  w-full">View recipes</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ChefCard;
