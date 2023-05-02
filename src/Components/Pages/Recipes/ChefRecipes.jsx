import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2/dist/sweetalert2.js";
import "sweetalert2/dist/sweetalert2.css";

const ChefRecipes = () => {
  const chef = useLoaderData([]);
  const [isFav, setIsFav] = useState(false);
  const {
    id,
    chef_name,
    chef_picture,
    year_of_experience,
    number_of_recipes,
    likes,
    short_bio,
    recipes,
  } = chef;
  //   console.log(recipes);
  const handleFavorite = () => {
    Swal.fire("Added to favorites items");
    setIsFav(true);
  };
  return (
    <div className="m-8">
      <section className="card lg:card-side bg-base-100 shadow-xl">
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
      </section>

      <section className="my-12">
        <div>
          <div>
            <h3 className="card-title mx-8">{chef_name} Recipes:</h3>
          </div>
          <div className="grid md:grid-cols-1 gap-4 ">
            {recipes.map((recipe) => (
              <div
                key={recipe.id}
                className="w-full grid md:grid-cols-3 justify-around gap-4 items-center shadow-lg  p-4 md:m-8"
              >
                <div className="md:col-span-2 p-3">
                  <h1 className="card-title my-2">{recipe.recipe_name}</h1>
                  <div className="flex items-center gap-4">
                    <h1 className="font-semibold">Cooking Method:</h1>
                    <hr className="w-1/2 border my-4" />
                  </div>
                  <p className="text-slate-600 my-3">{recipe.cooking_method}</p>
                  <div className="flex items-center gap-4">
                    <h1 className="font-semibold">Ingredient:</h1>
                    <hr className="w-1/2 border my-4" />
                  </div>
                  <div className="grid md:grid-cols-2 justify-start">
                    {recipe.ingredients.map((ing, index) => (
                      <li key={index} className="text-slate-600 ">
                        {ing}
                      </li>
                    ))}
                  </div>
                </div>
                <div className="md:text-end text-center p-4 bg-slate-50 w-full h-full flex items-center justify-center">
                  <div>
                    <div className="flex gap-4 my-8">
                      <p className="text-slate-600 text-xl">
                        Rating: {recipe.rating}
                      </p>
                      <p className="text-slate-600 text-xl">Likes: {likes}</p>
                    </div>
                    <button
                      disabled={isFav}
                      onClick={handleFavorite}
                      className="btn btn-dark"
                    >
                      Add To Favorite
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ChefRecipes;
