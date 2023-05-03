import React, { useRef, useState } from "react";
import toast, { Toaster } from "react-hot-toast";

const Recipe = ({ recipe }) => {
  const [isFav, setIsFav] = useState(false);
  const handleFavorite = () => {
    toast.success("Added item to favorite.");
    setIsFav(true);
  };
  return (
    <div className="w-full grid md:grid-cols-3 justify-around gap-4 items-center shadow-lg  p-4 md:m-8">
      <div className="md:col-span-2 p-3">
        <Toaster />
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
          <p className="text-slate-600 text-xl my-4 text-center">
            Rating: {recipe.rating}
          </p>

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
  );
};

export default Recipe;
