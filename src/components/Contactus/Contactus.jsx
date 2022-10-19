import React from "react";
import { Container } from "react-bootstrap";
import Enquiryform from "../Enquiryform/Enquiryform";
import "./Contactus.css";

function Contactus() {
  return (
    <Container className="wrapper">
      <h2>CONTACT US</h2>

      <div className="form-wrapper">
        <p className="form-title">Get in touch with us!</p>
        <Enquiryform />
      </div>
    </Container>
  );
}

export default Contactus;
