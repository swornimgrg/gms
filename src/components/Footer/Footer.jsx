import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import Icons from "./Icons";

function Footer() {
  return (
    <div className="footer">
      <Icons />
      <ul className="footer-menu">
        <li className="menu-item" key="home">
          <Link to="/" className="link">
            Home
          </Link>
        </li>

        <li className="menu-item" key="about">
          <Link to="/about-us/" className="link">
            About
          </Link>
        </li>
      </ul>
      <hr />
      <p className="copyright">Copyright &copy; All rights reserved.</p>
    </div>
  );
}

export default Footer;
