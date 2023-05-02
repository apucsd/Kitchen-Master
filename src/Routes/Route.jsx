import React from "react";
import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";

import Home from "../Components/Home/Home";
import Blog from "../Components/Pages/Blog";
import Error from "../Components/Pages/Error page/Error";
import Login from "../Components/Pages/Authentication/Login";
import Register from "../Components/Pages/Authentication/Register";
import ChefRecipes from "../Components/Pages/Recipes/ChefRecipes";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/contact",
        element: <Blog></Blog>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "register",
        element: <Register></Register>,
      },
      {
        path: "chef-recipes/:id",
        element: (
          <PrivateRoute>
            <ChefRecipes></ChefRecipes>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/chef-recipes/${params.id}`),
      },
    ],
  },
]);

export default router;
