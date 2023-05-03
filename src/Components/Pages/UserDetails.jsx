import React, { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { useNavigate } from "react-router-dom";

const UserDetails = () => {
  const { isLoading, user } = useContext(AuthContext);
  const navigate = useNavigate();
  if (isLoading) {
    return (
      <div className="flex justify-center">
        <h3 className="my-12  h-12 w-12 bg-blue-500 animate-spin"></h3>
      </div>
    );
  }
  if (!user) {
    return navigate("/login");
  }

  //   console.log(user);
  return (
    <div className="flex gap-1 m-8">
      <div>
        <img
          className="w-80 border-2 rounded border-slate-400"
          src={user.photoURL}
          alt=""
        />
      </div>
      <div className="bg-white p-3 shadow-sm rounded-sm">
        <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8">
          <span className="text-green-500">
            <svg
              className="h-5"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              />
            </svg>
          </span>
          <span className="tracking-wide">About</span>
        </div>
        <div className="text-gray-700">
          <div className="grid md:grid-cols-2 text-sm">
            <div className="grid grid-cols-2">
              <div className="px-4 py-2 font-semibold">Full Name</div>
              <div className="px-4 py-2">{user.displayName}</div>
            </div>

            <div className="grid grid-cols-2">
              <div className="px-4 py-2 font-semibold">Gender</div>
              <div className="px-4 py-2">{user.gender ? gender : "N/A"}</div>
            </div>
            <div className="grid grid-cols-2">
              <div className="px-4 py-2 font-semibold">Contact No.</div>
              <div className="px-4 py-2">
                {user.phoneNumber ? phoneNumber : "+8801998001001"}
              </div>
            </div>
            <div className="grid grid-cols-2">
              <div className="px-4 py-2 font-semibold">Current Address</div>
              <div className="px-4 py-2">Narsingdi,Dhaka,Bangladesh</div>
            </div>
            <div className="grid grid-cols-2">
              <div className="px-4 py-2 font-semibold">Permanent Address</div>
              <div className="px-4 py-2">Narsingdi,Dhaka,Bangladesh</div>
            </div>
            <div className="grid grid-cols-2">
              <div className="px-4 py-2 font-semibold">Email.</div>
              <div className="px-4 py-2">
                <a className="text-blue-800" href="mailto:jane@example.com">
                  {user.email ? user.email : "example@gmail.com"}
                </a>
              </div>
            </div>
            <div className="grid grid-cols-2">
              <div className="px-4 py-2 font-semibold">Birthday</div>
              <div className="px-4 py-2">Jan 21, 2002</div>
            </div>
          </div>
        </div>
        <button className="block w-full text-blue-800 text-sm font-semibold rounded-lg hover:bg-gray-100 focus:outline-none focus:shadow-outline focus:bg-gray-100 hover:shadow-xs p-3 my-4">
          Show Full Information
        </button>
      </div>
    </div>
  );
};

export default UserDetails;
