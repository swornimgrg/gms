import React from "react";
import { Carousel } from "react-bootstrap";
import "./SlideShow.css";

function SlideShow() {
  return (
    <Carousel pause="hover">
      <Carousel.Item bsPrefix="carousel-item">
        <img
          className="banner"
          src={process.env.PUBLIC_URL + `/images/banner.jpg`}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Reliable Security Partner</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item bsPrefix="carousel-item">
        <img
          className="other-slides"
          src={process.env.PUBLIC_URL + `/images/guard1.jpg`}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Liscensed and Fully Insured</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item bsPrefix="carousel-item">
        <img
          className="other-slides"
          src={process.env.PUBLIC_URL + `/images/guard2.jpg`}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Specialize Security Training</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default SlideShow;
