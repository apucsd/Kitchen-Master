import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2/dist/sweetalert2.js";
import "sweetalert2/dist/sweetalert2.css";
const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [mouseOver, setMouseOver] = useState(false);
  const handleLogOut = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You will be log out now!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Log out!",
    }).then((result) => {
      if (result.isConfirmed) {
        logOut()
          .then(() => {
            Swal.fire("Your logout has been succeeded");
            // console.log(result.user);
          })
          .catch(() => {
            Swal.fire("Something Wrong when getting logout");
          });
      }
    });
  };
  return (
    <div className=" bg-slate-100 font-propines">
      <div className="md:flex items-center justify-between mx-8">
        <div>
          <Link to="/" className="text-3xl text-fuchsia-500 font-semibold">
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

          {user ? (
            <div className="relative me-8">
              <img
                onMouseEnter={() => setMouseOver(true)}
                className="w-10 h-10 rounded-full hover:cursor-pointer"
                src={user?.photoURL}
                alt=""
              />
              <div
                className={` absolute z-20 flex-col  ${
                  mouseOver ? " top-16  end-3" : "hidden"
                }  `}
              >
                <ul className=" flex md:flex-col bg-base-100 shadow-lg border p-4 text-start">
                  <li onClick={() => setMouseOver(false)} className="">
                    <Link className="block px-4  whitespace-nowrap py-2 hover:bg-gray-100">
                      {user?.displayName}
                    </Link>
                  </li>
                  <li onClick={() => setMouseOver(false)} className=" ">
                    <button
                      onClick={handleLogOut}
                      className="block whitespace-nowrap px-4 py-2 hover:bg-gray-100"
                    >
                      Log out
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          ) : (
            <Link to="/login">
              <button className="btn btn-warning">Log in </button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
