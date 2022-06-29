import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import Icons from "./Icons";

function Footer() {
  return (
    <div className="footer">
      <Icons />
      <ul>
        <li key="home">
          <Link to="/" className="link">
            Home
          </Link>
        </li>

        <li key="about">
          <Link to="/about-us/" className="link">
            About
          </Link>
        </li>
        <li key="tos">
          <Link to="/tos/" className="link">
            Terms of Service
          </Link>
        </li>
        <li key="privacy">
          <Link to="/privacy-policy/" className="link">
            Privacy Policy
          </Link>
        </li>
      </ul>
      <hr />
      <p className="copyright">Copyright &copy; All rights reserved.</p>
    </div>
  );
}

export default Footer;
