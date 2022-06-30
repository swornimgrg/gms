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
            <img src="/images/cctv.jpg" className="service-image" alt="cctv" />
            <h4 className="services-header">Security Services</h4>
            <ul className="lists">
              <li>Mobile Patrol</li>
              <li>Manned Security Guard</li>
              <li>Key Holding Response</li>
              <li>Enforcement Agent</li>
              <li>CCTV Installation and Maintenance</li>
            </ul>
          </div>
        </Col>
        <Col md>
          <div className="service-wrapper">
            <img
              src="/images/gema-saputera.jpg"
              className="service-image"
              alt="cctv"
            />
            <h4 className="services-header">Training</h4>
            <ul className="lists">
              <li>SIA Door Supervisor Training</li>
              <li>First Aid Course</li>
              <li>Fire Marshal Training</li>
              <li>Health & Safety Course</li>
              <li>Food Safety & Hygiene Course</li>
            </ul>
          </div>
        </Col>
        <Col md>
          <div className="service-wrapper">
            <img
              src="/images/ryoji-iwata.jpg"
              className="service-image"
              alt="cctv"
            />
            <h4 className="services-header">Cleaning Services</h4>
            <ul className="lists">
              <li>Commercial building</li>
              <li>Residential properties</li>
            </ul>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
export default Services;
