import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaTimes as CloseIcon } from "react-icons/fa";
import "./sidebar.scss";
import SidebarMock from "../../mocks/SidebarMock";

const Sidebar = ({ isOpen, toggle }) => {
  const location = useLocation();
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const currentPath = window.location.pathname.split("/")[1];
    const activeItem = SidebarMock.findIndex(
      (item) => item.section === currentPath
    );
    setActiveIndex(currentPath.length === 0 ? 0 : activeItem);
  }, [location]);
  return (
    <aside
      className="sidebar-container"
      style={{
        opacity: isOpen ? "100%" : "0",
        top: isOpen ? "0" : "-100%",
      }}
    >
      <div className="icon-container" onClick={toggle}>
        <CloseIcon className="close-icon" />
      </div>
      <div className="sidebar-wrapper">
        <div className="sidebar-menu">
          {SidebarMock.map((item, index) => (
            <Link key={index} to={item.link} onClick={toggle}  className={`${
                activeIndex === index && `sidebar-item-active`
              }`}>
              {item.text}
            </Link>
          ))}
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
