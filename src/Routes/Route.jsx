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
import UserDetails from "../Components/Pages/UserDetails";
import AboutUs from "../Components/Home/AboutUs";

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
        path: "/about",
        element: <AboutUs></AboutUs>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/userDetails",
        element: <UserDetails></UserDetails>,
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
          fetch(
            `https://chef-master-server-apucsd.vercel.app/chef-recipes/${params.id}`
          ),
      },
    ],
  },
]);

export default router;
