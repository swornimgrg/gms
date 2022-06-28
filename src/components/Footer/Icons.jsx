import React from "react";
import { Container } from "react-bootstrap";
import "./Icons.css";

function Icons() {
  return (
    <Container>
      <div className="icons-container">
        <i class="bi bi-facebook"></i>
        <i class="bi bi-instagram"></i>
        <i class="bi bi-linkedin"></i>
      </div>
      <p className="address">
        Gurkha Management Services Limited <br />
        Address <br />
      </p>
      <div className="contact">
        <i class="bi bi-telephone-fill">+44 878435945</i>
        <i class="bi bi-envelope-fill"> info@gms.com</i>
      </div>
    </Container>
  );
}

export default Icons;
