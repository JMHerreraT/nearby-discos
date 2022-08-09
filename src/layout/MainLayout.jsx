import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/shared/Navbar/Navbar";
import Sidebar from "../components/shared/Sidebar/Sidebar";
import "./main-layout.scss";

const MainLayout = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <div className="main">
        <div className="main__content">
          <Navbar toggle={toggle} />
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default MainLayout;
