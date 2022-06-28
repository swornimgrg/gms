import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import "./NavigationBar.css";

function NavigationBar() {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      defaultActiveKey="/home"
      bsPrefix="navbar"
    >
      <Container>
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
          <Nav>
            <Nav.Link href="#home" bsPrefix="nav-link">
              Home
            </Nav.Link>
            <Nav.Link bsPrefix="nav-link" eventKey={1} href="#our-values">
              Our Values
            </Nav.Link>
            <Nav.Link bsPrefix="nav-link" eventKey={2} href="#services">
              Services
            </Nav.Link>
            <Nav.Link bsPrefix="nav-link" eventKey={3} href="#about-us">
              About Us
            </Nav.Link>
            <Nav.Link bsPrefix="nav-link" eventKey={4} href="#contact-us">
              Contact Us
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
