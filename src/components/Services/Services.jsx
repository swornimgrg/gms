import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Services.css";

function Services() {
  return (
    <Container className="wrapper">
      <h2>OUR SERVICES</h2>
      <Row>
        <Col md>
          <div className="service-wrapper">
            <img
              src={process.env.PUBLIC_URL + `/images/cctv.jpg`}
              className="service-image"
              alt="cctv"
            />
            <h4 className="services-header">Security Services</h4>
            <ul className="lists">
              <li>Security door supervisor</li>
              <li>Manned Guarding</li>
              <li>Mobile Patrol</li>
              <li>Event Security</li>
              <li>Receptionist</li>
              <li>Concierge</li>
              <li>Key Holding</li>
              <li>Enforcement Agent</li>
            </ul>
          </div>
        </Col>
        <Col md>
          <div className="service-wrapper">
            <img
              src={process.env.PUBLIC_URL + `/images/gema-saputera.jpg`}
              className="service-image"
              alt="gema-saputera"
            />
            <h4 className="services-header">Training Services</h4>
            <ul className="lists">
              <li>CCTV Training</li>
              <li>First Aid Course</li>
              <li>Fire Marshal Training</li>
              <li>Health & Safety Course</li>
              <li>SIA Door Supervisor Training</li>
              <li>Food Safety & Hygiene Course</li>
            </ul>
          </div>
        </Col>
        <Col md>
          <div className="service-wrapper">
            <img
              src={process.env.PUBLIC_URL + `/images/ryoji-iwata.jpg`}
              className="service-image"
              alt="cctv"
            />
            <h4 className="services-header">Cleaning Services</h4>
            <ul className="lists">
              <li>Commercial Cleaning Services</li>
              <li>Residential Cleaning Services</li>
              <li>General cleaning services</li>
            </ul>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
export default Services;
