import React from "react";

//custom style
import { AboutTestimonialStyle } from "./style/AboutStyle";

//title
import { TitleSection } from "../../Home/Global/TitleSection";

//data
import AboutData from "./data/AboutData";
import CarouselItem from "./data/AboutCarousel";

//carousel
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const AboutTestimonial = (props) => {
  return (
    <AboutTestimonialStyle className="testimonial">
      <div className="container testimonial__container">
        <TitleSection TextCenter MarginAuto>
          <h2>LOVED BY CLIENTS</h2>
          <h1>WHAT CLIENTS SAY?</h1>
        </TitleSection>

        <Carousel
          responsive={responsive}
          className="our-blog__carousel"
          showDots={true}
          infinite={true}
          autoPlay={props.deviceType !== "mobile" ? true : false}
          autoPlaySpeed={4000}
        >
          {AboutData.map((testimonial) => (
            <CarouselItem
              key={testimonial.name}
              comments={testimonial.comments}
              name={testimonial.name}
              office={testimonial.office}
              img={testimonial.img}
              alt={testimonial.alt}
            />
          ))}
        </Carousel>
      </div>
    </AboutTestimonialStyle>
  );
};

export default AboutTestimonial;
