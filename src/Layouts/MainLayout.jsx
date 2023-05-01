import React from "react";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div>
      this is main layout
      <Outlet></Outlet>
    </div>
  );
};

export default MainLayout;
