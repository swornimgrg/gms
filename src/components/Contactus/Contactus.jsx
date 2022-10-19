import React from "react";
import { Container } from "react-bootstrap";
import Enquiryform from "../Enquiryform/Enquiryform";
import "./Contactus.css";

function Contactus() {
  return (
    <Container className="wrapper">
      <h2>CONTACT US</h2>
      <div className="contactus-body">
        <div className="contactus-image">
          <img
            src={process.env.PUBLIC_URL + `/images/contactus.jpg`}
            alt="contactus"
          ></img>
        </div>
        <div className="form-wrapper">
          <p className="form-title">Get in touch with us!</p>
          <Enquiryform />
        </div>
      </div>
    </Container>
  );
}

export default Contactus;
