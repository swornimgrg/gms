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
        <Col md>
          <div className="form-wrapper">
            <p className="form-title">Or visit us!</p>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2482.5382568516075!2d-0.14586808402778897!3d51.52168671747923!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761b3a9cd87457%3A0x9734f33aa59affda!2sThe%20London%20Office!5e0!3m2!1sen!2snp!4v1660498972380!5m2!1sen!2snp"
              width="100%"
              height="450"
              title="Gurkha Mangement Services Location"
              allowFullScreen
              className="map-container"
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Contactus;
