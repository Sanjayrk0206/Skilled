import React, { useState } from "react";

import "./style.css";
import MenuIcon from "@mui/icons-material/Menu";
import Logo from "../../assets/images/logo.svg";

const Navigation = () => {
  const [width, setwidth] = useState(false);
  const [navbar, setnavbar] = useState(false);
  const [overlay, setoverlay] = useState(false);

  const changebackground = () => {
    if (window.scrollY >= 130) {
      setnavbar(true);
    } else {
      setnavbar(false);
    }
  };

  const responsive = () => {
    if (window.innerWidth <= 1175 || window.screen.width <= 1175) {
      setwidth(true);
    } else {
      setwidth(false);
    }
  };

  window.onload = responsive;
  window.addEventListener("resize", responsive);
  window.addEventListener("scroll", changebackground);

  return (
    <div className={navbar ? "Navigation dropshadow" : "Navigation"}>
      <MenuIcon
        className="Navicon"
        style={width ? { display: "block" } : { display: "none" }}
        onClick={() => {
          setoverlay(true);
        }}
      />
      <img src={Logo} alt="Logo" className="Logo" />
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
          <a href="#">Blog</a>
        </li>
      </ul>
      <div className="Buttondiv">
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
        <div className="overlay-content">
          <a href="#">About</a>
          <a href="#">How it works</a>
          <a href="#">Features</a>
          <a href="#">Blog</a>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
