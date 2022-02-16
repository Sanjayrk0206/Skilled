import React from "react";

import "./style.css";
import Logo from "../../assets/images/logo.svg";

const Navigation = () => {
  return (
    <div className="Navigation">
      <img src={Logo} alt="Logo" className="Logo" />
      <ul className="Navbar">
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
          <a href="#">blog</a>
        </li>
      </ul>
      <div className="Buttondiv">
        <span className="Signup">Sign Up</span>
        <span className="Login">Login</span>
      </div>
    </div>
  );
};

export default Navigation;
