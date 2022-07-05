import React from "react";
import { Container } from "react-bootstrap";
import "./OurValues.css";

function OurValues() {
  return (
    <Container className="wrapper">
      <h2>OUR VALUES</h2>
      <div className="text-body">
        <div className="image-wrapper">
          <img
            src={process.env.PUBLIC_URL + `/images/values.jpg`}
            className="value-img"
            alt="values"
          />
        </div>
        <div>
          <p className="paragraph">
            We aim to provide a bespoke, professional service to each client,
            achieving any needs they may have while being as cost efficient as
            possible. Though we are based in London, we have officers and staff
            located around the whole of the UK meaning we are able to easily
            able to provide our services anywhere and at any time.
            <br />
            <br />
            Integrity, Helpfulness and Avaiablity are the are the foundation on
            which we build trust with our customers, our colleagues, and the
            surrounding community.
          </p>
          <hr />
        </div>
      </div>
      <h4>Integrity</h4>
      <p className="description">
        A strong work ethic, equity and reliability are the qualities that our
        employees strive to achieve as they work with our clients in the
        interests of their safety and their security. Our values are intergrated
        into our trainees as well.
      </p>

      <h4>Helpfulness</h4>
      <p className="description">
        We understand that it is our responsibility to be of as much help and
        assistance to our clients as possible when needed. We provide proper
        training environment with cooperation, safety, risk-taking support and
        accountability.
      </p>
      <h4>Availability</h4>
      <p className="description">
        We are available to provide proper service to our clients when or
        wherever needed.
      </p>
    </Container>
  );
}

export default OurValues;
