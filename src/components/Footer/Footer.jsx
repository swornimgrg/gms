import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Footer.css";
import Icons from "./Icons";

function Footer() {
  return (
    <Container>
      <Icons />
      <ul>
        <li>
          <Link to="/" className="link">
            Home
          </Link>
        </li>

        <li>
          <Link to="/about-us/" className="link">
            About
          </Link>
        </li>
        <li>
          <Link to="/tos/" className="link">
            Terms of Service
          </Link>
        </li>
        <li>
          <Link to="/privacy-policy/" className="link">
            Privacy Policy
          </Link>
        </li>
      </ul>
      <hr />
      <p className="copyright">Copyright &copy; All rights reserved.</p>
    </Container>
  );
}

export default Footer;
