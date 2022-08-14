import React from "react";
import { Form, Button } from "react-bootstrap";
import "./Enquiryform.css";

function Enquiryform() {
  return (
    <div className="form-container">
      <Form>
        <Form.Group className="mb-3">
          <Form.Label bsPrefix="form-label">FULL NAME</Form.Label>
          <Form.Control placeholder="Full Name" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label bsPrefix="form-label">CONTACT EMAIL ADDRESS</Form.Label>
          <Form.Control type="email" placeholder="Email Address" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label bsPrefix="form-label">
            CONTACT TELEPHONE NUMBER
          </Form.Label>
          <Form.Control placeholder="Password" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label bsPrefix="form-label">YOUR ENQUIRY</Form.Label>
          <Form.Control as="textarea" rows={3} />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default Enquiryform;
