import React from "react";

import "./style.css";
import Logo from "../../assets/images/logo.svg";
import {
  Copyright,
  Facebook,
  Instagram,
  LinkedIn,
  Twitter,
  WhatsApp,
  YouTube,
} from "@mui/icons-material";

export const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <img src={Logo} alt="Logo" className="Logo" />
        <ul className="Navbar">
          <a href="#">
            <li>About</li>
          </a>
          <a href="#how" style={{ whiteSpace: "nowrap" }}>
            <li>How it works</li>
          </a>
          <a href="#">
            <li>Features</li>
          </a>
          <a href="#">
            <li>blog</li>
          </a>
        </ul>
        <div className="icon">
          <a href="#">
            <Facebook fontSize="large" />
          </a>
          <a href="#">
            <Instagram fontSize="large" />
          </a>
          <a href="#">
            <Twitter fontSize="large" />
          </a>
          <a href="#">
            <YouTube fontSize="large" />
          </a>
          <a href="#">
            <WhatsApp fontSize="large" />
          </a>
          <a href="#">
            <LinkedIn fontSize="large" />
          </a>
        </div>
      </div>
      <div className="copyright">
        <span>Copyrights</span>
        <Copyright className="icon" />
        <span>SkilledBeings 2022</span>
      </div>
    </div>
  );
};

export default Footer;
