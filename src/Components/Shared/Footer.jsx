import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className=" bg-gray-800">
      <footer className="mx-8  text-gray-200 py-4">
        <div className="container mx-auto md:flex justify-between items-center">
          <p className="text-sm">
            &copy; 2023 Kitchen Master. All Rights Reserved.
          </p>
          <ul className="md:flex gap-4 text-center my-4">
            <li>
              <Link to="/" className="text-gray-200 hover:text-white">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link to="/" className="text-gray-200 hover:text-white">
                Terms of Use
              </Link>
            </li>
            <li>
              <Link to="/contact" className="text-gray-200 hover:text-white">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
