import React from "react";
import { Container } from "react-bootstrap";
import "./Icons.css";

function Icons() {
  return (
    <Container>
      <p className="address">
        Gurkha Management Services Limited <br />
        Company Registration Number: 13696404 <br />
        167-169 Great Portland Street 5th Floor London, England W1W 5PF <br />
      </p>
      <div className="contact">
        <i className="bi bi-telephone-fill">07434832739</i>
        <i className="bi bi-envelope-fill">info@gurkhamanagementservices.com</i>
      </div>
    </Container>
  );
}

export default Icons;
