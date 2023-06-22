import React from "react";
import { useState } from "react";
import "./Navbar.css";
import logo from "./images/logo.png";
import { BrowserRouter } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";
import { FaBars, FaInstagram } from "react-icons/fa";

function Navbar() {
  // const navigate = useNavigate();
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const handleToggleMenu = () => {
    setShowMobileMenu(!showMobileMenu);
  };
  return (
    <BrowserRouter>
      <div className="navbar_outer">
        <div className="container navbar_container">
          <nav className="main_nav">
            <div className="navbar_logo">
              <img src={logo} alt="" />
            </div>
            <div className="menu_link">
              <ul>
                <li>
                  <Link to="#">Home</Link>
                </li>
                <li>
                  <Link to="#about">About</Link>
                </li>
                <li>
                  <Link to="#services">Services</Link>
                </li>
                <li>
                  <Link to="#pricing">Pricing</Link>
                </li>
                <li>
                  <Link to="#contact">Contact</Link>
                </li>
                <li>
                  <div className="instagram_link">
                    <Link to="https://instagram.com/finaltax?igshid=ZDc4ODBmNjlmNQ==">
                      <FaInstagram />
                    </Link>
                  </div>
                </li>
                <li>
                  <div className="work_with_us">
                    <Link to="#consultation">Work with us</Link>
                  </div>
                </li>
              </ul>
            </div>

            <div className="mobile_menu_toggle" onClick={handleToggleMenu}>
              <FaBars />
            </div>
          </nav>
          <div className={`mobile_menu_main ${showMobileMenu ? "show" : ""}`}>
            <ul>
              <li>
                <Link to="#">Home</Link>
              </li>
              <li>
                <Link to="#about">About</Link>
              </li>
              <li>
                <Link to="#services">Services</Link>
              </li>
              <li>
                <Link to="#pricing">Pricing</Link>
              </li>
              <li>
                <Link to="#contact">Contact</Link>
              </li>
              <li>
                <div className="instagram_link">
                  <Link to="https://instagram.com/finaltax?igshid=ZDc4ODBmNjlmNQ==">
                    <FaInstagram />
                  </Link>
                </div>
              </li>
              <li>
                <div className="work_with_us">
                  <Link to="#consultation">Work with us</Link>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default Navbar;
