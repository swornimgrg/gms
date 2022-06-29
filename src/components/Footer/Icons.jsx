import React from "react";
import { Container } from "react-bootstrap";
import "./Icons.css";

function Icons() {
  return (
    <Container>
      <div className="icons-container">
        <i className="bi bi-facebook"></i>
        <i className="bi bi-instagram"></i>
        <i className="bi bi-linkedin"></i>
      </div>
      <p className="address">
        Gurkha Management Services Limited <br />
        Address <br />
      </p>
      <div className="contact">
        <i className="bi bi-telephone-fill">+44 878435945</i>
        <i className="bi bi-envelope-fill"> info@gms.com</i>
      </div>
    </Container>
  );
}

export default Icons;
