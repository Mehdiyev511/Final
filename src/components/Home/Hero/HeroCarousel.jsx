import React from "react";

//carousel
import Carousel from "react-bootstrap/Carousel";

//Main - Link
import { MainLink } from "../Global/MainLink";

import ImgHero01 from "./img/hero-1.jpg";
import ImgHero02 from "./img/hero-2.jpg";
import ImgHero03 from "./img/hero-3.jpg";

const HeroCarousel = (props) => {
  return (
    <>
      <Carousel className="carousel" fade>
        <Carousel.Item interval={4000} className="carousel__item">
          <img src={ImgHero01} alt="video-Videographer-hero-01" />
          <div className="carousel__description">
            <h2>For website and video editing</h2>
            <h3>Videographer’s Portfolio</h3>
            <MainLink href=" #">See more about us</MainLink>
          </div>
        </Carousel.Item>
        <Carousel.Item interval={4000} className="carousel__item">
          <img src={ImgHero02} alt="video-Videographer-hero-02" />
          <div className="carousel__description">
            <h2>For website and video editing</h2>
            <h3>Videographer’s Portfolio</h3>
            <MainLink href=" #">See more about us</MainLink>
          </div>
        </Carousel.Item>
        <Carousel.Item interval={4000} className="carousel__item">
          <img src={ImgHero03} alt="video-Videographer-hero-03" />
          <div className="carousel__description">
            <h2>For website and video editing</h2>
            <h3>Videographer’s Portfolio</h3>
            <MainLink href=" #">See more about us</MainLink>
          </div>
        </Carousel.Item>
      </Carousel>
    </>
  );
};
export default HeroCarousel;
