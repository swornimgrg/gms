import React from "react";
import { Carousel, Container, Row, Col } from "react-bootstrap";
import "./SlideShow.css";

function SlideShow() {
  return (
    <Carousel pause="hover">
      <Carousel.Item bsPrefix="carousel-item">
        <img className="banner" src="/images/banner.jpg" alt="First slide" />
        <Carousel.Caption>
          <h3>Reliable Security Partner</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item bsPrefix="carousel-item">
        <img
          className="other-slides"
          src="/images/guard1.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Liscensed and Fully Insured</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item bsPrefix="carousel-item">
        <img
          className="other-slides"
          src="/images/guard2.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Specialize Security Training</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default SlideShow;
