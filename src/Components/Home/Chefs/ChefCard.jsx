import React from "react";
import { HiHandThumbUp } from "react-icons/hi2";
import { Link } from "react-router-dom";
import LazyLoad from "react-lazy-load";

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
    <div className="card bg-base-100 shadow-xl">
      <figure>
        <LazyLoad height={200} threshold={0.99}>
          <img className="w-full" src={chef_picture} alt="chefs" />
        </LazyLoad>
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
            <button className="btn w-full btn-outline btn-success">
              View Receipe
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ChefCard;
