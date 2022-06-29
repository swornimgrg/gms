import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./NavigationBar.css";

const menuItems = [
  { title: "Home", url: "/" },
  { title: "Our Values", url: "/our-values/" },
  { title: "Services", url: "/services/" },
  { title: "About Us", url: "/about-us/" },
  { title: "Contact Us", url: "/contact-us/" },
];

function NavigationBar() {
  return (
    <Navbar collapseOnSelect expand="lg" bsPrefix="navbar">
      <Container className="nav-wrapper">
        <Navbar.Brand as={Link} to="/">
          <img
            src="/images/logo.png"
            height="90px"
            width="120px"
            className="d-inline-block align-top"
            alt="GMS logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"></Nav>
          <Nav defaultActiveKey={1}>
            {menuItems.map((item, index) => (
              <Nav.Link
                key={index}
                eventKey={index + 1}
                bsPrefix="nav-link"
                as={Link}
                to={item.url}
              >
                {item.title}
              </Nav.Link>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
