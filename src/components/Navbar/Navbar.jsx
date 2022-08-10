import React, { useEffect, useState } from "react";
import { FaBars } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import "./navbar.scss";
import logo from "../../assets/images/logo-text.png";
import navbarMock from "../../mocks/NavbarMock";
import Text from "../shared/Text/Text";

const Navbar = ({ toggle }) => {
  const [navActive, setNavActive] = useState(false);
  const location = useLocation();
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const currentPath = window.location.pathname.split("/")[1];
    const activeItem = navbarMock.findIndex(
      (item) => item.section === currentPath
    );
    setActiveIndex(currentPath.length === 0 ? 0 : activeItem);
  }, [location]);


  const changeBackground = () => {
    if (window.scrollY >= 38) {
      setNavActive(true);
    } else {
      setNavActive(false);
    }
  };

  window.addEventListener("scroll", changeBackground);

  return (
    <>
      <div
        className="nav"
        style={{
          backgroundColor: navActive ? "#0bef9a8f" : "#0bef9b00",
          boxShadow: navActive ? "0 5px 10px 0 #0bef9a8f" : "0 5px 10px 0  #0bef9b00",
        }}
      >
        <div className="container">
          <div className="row content">
            <div className="col-4 col-md-4">
              <ul className="item-container">
                {navbarMock.map(
                  (item, index) =>
                    index <= 3 && (
                      <li className="item">
                        <Link
                           className={`item-link ${
                            activeIndex === index && `item-link-active`
                          }`}
                          to={item.link}
                          smooth={true}
                          duration={500}
                          spy={true}
                          exact="true"
                          offset={-80}
                        >
                          {item.text}
                        </Link>
                      </li>
                    )
                )}
              </ul>
            </div>
            <div className="col-4 col-md-4">
              <Link to="/" className="logo-container">
                {/* <img src={logo} alt={`logo`} width={186} height={97} /> */}
                <Text quentin hasShadow size={35} color={`white`}>
                  {`Nearby Discos`}
                </Text>
              </Link>
            </div>
            <div className="col-4 col-md-4">
              <ul className="item-container">
              {navbarMock.map(
                  (item, index) =>
                    index > 3 && (
                      <li className="item">
                        <Link
                          className={`item-link ${
                            activeIndex === index && `item-link-active`
                          }`}
                          to={item.link}
                          smooth={true}
                          duration={500}
                          spy={true}
                          exact="true"
                          offset={-80}
                        >
                          {item.text}
                        </Link>
                      </li>
                    )
                )}
              </ul>
            </div>
          </div>
        </div>
        <div className="row mobile-container" onClick={toggle}>
          <FaBars />
        </div>
      </div>
    </>
  );
};

export default Navbar;
