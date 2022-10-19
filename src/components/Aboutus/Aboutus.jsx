import React from "react";
import { Container } from "react-bootstrap";
import "./Aboutus.css";

function Aboutus() {
  return (
    <Container className="wrapper">
      <h2>ABOUT US </h2>
      <div className="text-body">
        <div>
          <p className="paragraph">
            We are a young company driven to provide bespoke and high-quality
            services to smoothly run your business. We take pride in achieving
            any needs you may have while being cost-efficient. Since our
            inception, building strong client relationships has remained our
            primary objective. Through consistent communication and an
            open-minded attitude about client objectives, we have managed to
            exceed client expectations and develop long-lasting relationships.
            Consequently, we have benefitted from significant synergies in the
            past and will continue to do so in the future. Our strong team
            relationship within all areas of our team has been the main key to
            our success. This has enabled us to create a family environment
            where we support and guide each individual.
          </p>
        </div>
        <div className="image-wrapper">
          <img
            src={process.env.PUBLIC_URL + `/images/flex-point-security.jpg`}
            width="400"
            height="260"
            alt="flex point security"
            className="security-images"
          ></img>
        </div>
      </div>
    </Container>
  );
}

export default Aboutus;
