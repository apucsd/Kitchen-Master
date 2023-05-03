import React from "react";

const Button = ({ children }) => {
  return (
    <div className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor-pointer">
      {children}
    </div>
  );
};

export default Button;
