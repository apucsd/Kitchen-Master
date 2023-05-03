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
    <div className=" bg-slate-100 font-propines p-2">
      <div className="md:flex items-center justify-between mx-8">
        <div>
          <Link
            to="/"
            className="text-xl font-semibold flex gap-2 items-center"
          >
            <img
              className="w-14 h-14 rounded-full border-2 border-fuchsia-400"
              src="data:image/jpeg;base64,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"
              alt=""
            />
            Kitchen <br /> Master
          </Link>
        </div>
        <div className="flex justify-center items-center  gap-8">
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
                  mouseOver ? " top-16  md:end-3 -end-24" : "hidden"
                }  `}
              >
                <ul className=" flex flex-col bg-base-100 shadow-lg border p-4 text-start">
                  <li onClick={() => setMouseOver(false)} className="">
                    <Link
                      to="/userDetails"
                      className="block px-4  whitespace-nowrap py-2 hover:bg-gray-100"
                    >
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
