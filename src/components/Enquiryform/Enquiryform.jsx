import React, { useState, useRef } from "react";
import { Form, Button } from "react-bootstrap";
import Alert from "react-bootstrap/Alert";
import "./Enquiryform.css";
import emailjs from "@emailjs/browser";

function Enquiryform() {
  const form = useRef();
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        `service_o5cshl8`,
        `template_ka78pqe`,
        form.current,
        `0RR3-wuLdDBJof2Sw`
      )
      .then(
        (result) => {
          if (result.text == "OK") {
            setShowSuccess(true);
          }
          setShowError(true);
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <div className="form-container">
      <Alert show={showSuccess} variant="success">
        <Alert.Heading>Sucessfully submitted!</Alert.Heading>
      </Alert>
      <Alert show={showError} variant="success">
        <Alert.Heading>Error submitting!</Alert.Heading>
      </Alert>
      <Form ref={form} onSubmit={sendEmail}>
        <Form.Group className="mb-3" controlId="formName">
          <Form.Label bsPrefix="form-label">FULL NAME</Form.Label>
          <Form.Control name="name" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formEmail">
          <Form.Label bsPrefix="form-label">CONTACT EMAIL ADDRESS</Form.Label>
          <Form.Control type="email" name="email" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formNumber">
          <Form.Label bsPrefix="form-label">
            CONTACT TELEPHONE NUMBER
          </Form.Label>
          <Form.Control name="number" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formMessage">
          <Form.Label bsPrefix="form-label">YOUR ENQUIRY</Form.Label>
          <Form.Control as="textarea" rows={3} name="message" />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default Enquiryform;
