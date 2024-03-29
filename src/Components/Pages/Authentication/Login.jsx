import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthProvider";
import Swal from "sweetalert2/dist/sweetalert2.js";
import "sweetalert2/dist/sweetalert2.css";
import RegisterWith from "./RegisterWith";
const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname;
  // console.log(location);
  const { logIn } = useContext(AuthContext);
  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    logIn(email, password)
      .then(() => {
        Swal.fire("Your login has been succeeded");
        navigate(from, { replace: true });
      })
      .catch(() => {
        Swal.fire("User email and password doesn't match");
      });
  };
  return (
    <div className="my-2 bg-[#FEEDEA]">
      <div className="relative flex flex-col justify-center h-screen overflow-hidden">
        <div className="w-full p-6 m-auto bg-[white] rounded-md shadow-md ring-2 ring-blue-400/50 lg:max-w-lg">
          <div className="flex justify-center">
            <img src="/Logo.svg" alt="" />
          </div>
          <h1 className="text-3xl font-semibold text-center text-gray-700">
            Kitchen Master
          </h1>
          <form onSubmit={handleLogin} className="space-y-4">
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
                <span className="text-base label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="Enter Password"
                className="w-full input input-bordered"
                name="password"
              />
            </div>
            <a
              href="#"
              className="text-xs text-gray-600 hover:underline hover:text-blue-600"
            >
              Forget Password?
            </a>
            <div>
              <span>
                Don't have an account ?
                <Link
                  to="/register"
                  className="text-blue-600 hover:text-blue-800 hover:underline"
                >
                  Register
                </Link>
              </span>
              <br />
              <button className="my-btn my-2">Login</button>
            </div>
          </form>
          <RegisterWith></RegisterWith>
        </div>
      </div>
    </div>
  );
};

export default Login;
