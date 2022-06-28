import React from "react";
import { Container } from "react-bootstrap";
import "./Aboutus.css";

function Homepage() {
  return (
    <Container className="wrapper">
      <h2>ABOUT US </h2>
      <div className="text-body">
        <div>
          <p className="about-us">
            Gurkha Management Services Ltd was founded in...to provide
            high-quality services to businesses and homes alike. Combining the
            reliability, experience and skill of Gurkha soldiers and then
            transferring it into the commercial world, we provide a unique and
            specialised service.
            <br />
            <br />
            Since our inception, building strong client relationships has
            remained our main objective. Through consistent lines of
            communication and an open-minded attitude about client objectives,
            we have managed to exceed client expectations and develop
            long-lasting relationships. Consequently, we have benefitted from
            significant synergies in the past and will continue to do so in the
            future.
            <br />
            <br />
            We believe that one of the keys to our success is the strong
            relationship we have built within all areas of our team, from
            managing levels down to officers. This has enabled us to build a
            family environment, in which we support and guide each individual.
          </p>
        </div>
        <div>
          <img
            src="/images/flex-point-security.jpg"
            width="400"
            height="400"
            alt="security guard bw"
            className="security-images"
          ></img>
        </div>
      </div>
    </Container>
  );
}

export default Homepage;
