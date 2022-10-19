import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Enquiryform from "../Enquiryform/Enquiryform";
import "./Contactus.css";

function Contactus() {
  return (
    <Container className="wrapper">
      <h2>CONTACT US</h2>
      <Row>
        <Col md>
          <div className="form-wrapper">
            <p className="form-title">Get in touch with us!</p>
            <Enquiryform />
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Contactus;
