import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Components/Shared/Navbar";
import Footer from "../Components/Shared/Footer";
import ScrollToTop from "react-scroll-to-top";
const MainLayout = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
      <ScrollToTop className="p-1" smooth />
    </div>
  );
};

export default MainLayout;
