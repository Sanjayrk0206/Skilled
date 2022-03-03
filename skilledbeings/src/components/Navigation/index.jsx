import React, { useState, useEffect } from "react";

import "./style.css";
import MenuIcon from "@mui/icons-material/Menu";
import Logo from "../../assets/images/logo.svg";
import { Login, PersonAdd } from "@mui/icons-material";

const Navigation = () => {
  const [width, setwidth] = useState(false);
  const [navbar, setnavbar] = useState(false);
  const [overlay, setoverlay] = useState(false);
  const [iconwidth, seticonwidth] = useState(false);

  const changebackground = () => {
    if (window.scrollY >= 75) {
      setnavbar(true);
    } else {
      setnavbar(false);
    }
  };
  useEffect(() => {
    const Responsive = () => {
      if (
        window.innerWidth <= 1370 ||
        window.screen.width <= 1370 ||
        document.getElementById("NavContainer").style.height === "87.2px"
      ) {
        setwidth(true);
      } else {
        setwidth(false);
      }
      if (window.innerWidth <= 1120 || window.screen.width <= 1120) {
        seticonwidth(true);
      } else {
        seticonwidth(false);
      }
    };
    window.addEventListener("resize", Responsive);
    Responsive();
    return () => window.addEventListener("resize", Responsive);
  }, []);

  window.addEventListener("scroll", changebackground);

  return (
    <div className="Navigation">
      <div
        id="NavContainer"
        className={navbar ? "NavContainer dropshadow" : "NavContainer"}
      >
        <div className="Logodiv">
          <MenuIcon
            className="Navicon"
            style={width ? { display: "block" } : { display: "none" }}
            onClick={() => {
              setoverlay(true);
            }}
          />
          <img src={Logo} alt="Logo" className="Logo" />
        </div>
        <ul
          className="Navbar"
          style={width ? { display: "none" } : { display: "block" }}
        >
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#how">How it works</a>
          </li>
          <li>
            <a href="#">Features</a>
          </li>
          <li>
            <a href="#blog">Blog</a>
          </li>
        </ul>
        <div
          className="Buttonicon"
          style={iconwidth ? { display: "block" } : { display: "none" }}
        >
          <PersonAdd className="Navicon" />
          <Login className="Navicon" />
        </div>
        <div
          className="Buttondiv"
          style={iconwidth ? { display: "none" } : { display: "block" }}
        >
          <span className="Signup">Sign Up</span>
          <span className="Login">Login</span>
        </div>
        <div
          className="overlay"
          style={overlay ? { width: "100%" } : { width: "0" }}
        >
          <a
            className="closebtn"
            onClick={() => {
              setoverlay(false);
            }}
          >
            &times;
          </a>
          <div
            className="overlay-content"
            onClick={() => {
              setoverlay(false);
            }}
          >
            <a href="#">About</a>
            <a href="#">How it works</a>
            <a href="#">Features</a>
            <a href="#blog">Blog</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
