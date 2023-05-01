import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className=" bg-slate-100">
      <div className="md:flex items-center justify-between mx-8">
        <div>
          <Link to="/" className="text-3xl font-mono font-semibold">
            Kitchen <br /> Master
          </Link>
        </div>
        <div className="flex items-center  gap-8">
          <NavLink
            to="/"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "underline text-blue-600" : ""
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/blog"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "underline text-blue-600" : ""
            }
          >
            Blog
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "underline text-blue-600" : ""
            }
          >
            Contact
          </NavLink>
          <NavLink
            to="/login"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "underline text-blue-600" : ""
            }
          >
            <button className="btn btn-warning px-7"> Login</button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
