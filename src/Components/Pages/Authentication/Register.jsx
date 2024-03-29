import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2/dist/sweetalert2.js";
import "sweetalert2/dist/sweetalert2.css";
import { AuthContext } from "../../../Providers/AuthProvider";
import { updateProfile } from "firebase/auth";
import RegisterWith from "./RegisterWith";
const Register = () => {
  const { createUser } = useContext(AuthContext);
  const handleRegister = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const photoURL = form.photoURL.value;
    const password = form.password.value;
    const confirmPassword = form.confirmPassword.value;
    // password verification
    // console.log(name, email, password, confirmPassword, photoURL);
    if (!password) {
      return Swal.fire("Enter a password");
    }
    if (!email) {
      return Swal.fire("Enter a email");
    }

    if (password !== confirmPassword) {
      return Swal.fire("Password doesn't match");
    }
    if (password.length < 6) {
      return Swal.fire("Password must be at least 6 characters");
    }

    /////email validation
    if (!/[^\s@]+@[^\s@]+\.[^\s@]+/.test(email)) {
      return Swal.fire("Enter a valid email");
    }
    createUser(email, password)
      .then((result) => {
        updateProfile(result.user, {
          displayName: name,
          photoURL: photoURL,
        });
        Swal.fire("Your account has created");
        // console.log(result.user);
      })
      .catch((error) => {
        Swal.fire("Your account has already been created");
      });
  };

  return (
    <div>
      <div className="my-10 bg-[#FEEDEA]">
        <div className="relative flex flex-col justify-center overflow-hidden my-4">
          <div className="w-full p-6 m-auto bg-white rounded-md shadow-md ring-2 ring-blue-400/50 lg:max-w-xl">
            <div className="flex justify-center">
              <img src="/public/Logo.svg" alt="" />
            </div>
            <h1 className="text-3xl font-semibold text-center text-gray-700">
              Kitchen Master
            </h1>
            <form onSubmit={handleRegister} className="space-y-4">
              <div>
                <label className="label">
                  <span className="text-base label-text">Name</span>
                </label>
                <input
                  required
                  type="text"
                  placeholder="Name"
                  className="w-full input input-bordered"
                  name="name"
                />
              </div>
              <div>
                <label className="label">
                  <span className="text-base label-text">Email</span>
                </label>
                <input
                  type="text"
                  placeholder="Email Address"
                  className="w-full input input-bordered"
                  name="email"
                />
              </div>
              <div>
                <label className="label">
                  <span className="text-base label-text">Photo URL</span>
                </label>
                <input
                  required
                  type="text"
                  placeholder="Enter photo url"
                  className="w-full input input-bordered"
                  name="photoURL"
                />
              </div>
              <div>
                <label className="label">
                  <span className="text-base label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="Enter Password"
                  className="w-full input input-bordered"
                  name="password"
                />
              </div>
              <div>
                <label className="label">
                  <span className="text-base label-text">Confirm Password</span>
                </label>
                <input
                  required
                  type="password"
                  placeholder="Confirm Password"
                  className="w-full input input-bordered"
                  name="confirmPassword"
                />
              </div>
              <div>
                <span>
                  Already have an account ?
                  <Link
                    to="/login"
                    className="text-blue-600 hover:text-blue-800 hover:underline"
                  >
                    Login
                  </Link>
                </span>
                <button className="my-btn my-2">Sign Up</button>
              </div>
            </form>
            <RegisterWith></RegisterWith>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
