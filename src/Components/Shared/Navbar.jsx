import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2/dist/sweetalert2.js";
import "sweetalert2/dist/sweetalert2.css";
import {
  HiBars3,
  HiOutlineBarsArrowDown,
  HiOutlineBarsArrowUp,
  HiOutlineChevronRight,
} from "react-icons/hi2";
import { MdAccountBox, MdFastfood } from "react-icons/md";
import Button from "./Button";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [mouseOver, setMouseOver] = useState(false);
  const [open, setOpen] = useState(false);
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
    <div className=" bg-slate-100 font-propines p-2 relative">
      <div className="flex items-center justify-between mx-8">
        <div>
          <Link
            to="/"
            className="text-xl font-serif text-blue-600 uppercase tracking-wide leading-tight"
          >
            <MdFastfood className="text-3xl"></MdFastfood> Kitchen Master
          </Link>
        </div>
        <div
          onClick={() => setOpen(!open)}
          className="md:hidden text-3xl text-blue-500"
        >
          {open ? (
            <HiOutlineBarsArrowUp></HiOutlineBarsArrowUp>
          ) : (
            <HiOutlineBarsArrowDown></HiOutlineBarsArrowDown>
          )}
        </div>
        <div
          className={`flex md:flex-row flex-col justify-center items-center  gap-8 ${
            open
              ? " top-20 end-4 md:static absolute z-20 border md:border-0  md:p-0 p-12  bg-white md:bg-transparent"
              : "md:flex hidden"
          } `}
        >
          <NavLink
            onClick={() => setOpen(!open)}
            to="/"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "underline text-blue-600" : ""
            }
          >
            <span className="flex items-center">
              Home <HiOutlineChevronRight />
            </span>
          </NavLink>

          <NavLink
            onClick={() => setOpen(!open)}
            to="/blog"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "underline text-blue-600" : ""
            }
          >
            <span className="flex items-center">
              Blog <HiOutlineChevronRight />
            </span>
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
                  mouseOver ? " md:top-16  end-0 " : "hidden"
                }  `}
              >
                <ul className=" flex flex-col bg-base-100 shadow-lg border p-4 text-start">
                  <li
                    onClick={() => {
                      setMouseOver(false);
                      setOpen(!open);
                    }}
                    className=""
                  >
                    <Link
                      to="/userDetails"
                      className="block px-4  whitespace-nowrap py-2 hover:bg-gray-100"
                    >
                      {user?.displayName}
                    </Link>
                  </li>
                  <li
                    onClick={() => {
                      setMouseOver(false);
                      setOpen(!open);
                    }}
                    className=" "
                  >
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
              <div>
                <Button>
                  <span className="flex gap-2 items-center">
                    Login <MdAccountBox className="text-2xl" />
                  </span>
                </Button>
              </div>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
