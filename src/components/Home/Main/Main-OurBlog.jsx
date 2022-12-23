import React from "react";

//custom style
import { ComponentOurBlog } from "./style/OurBlog";
import { TitleSection } from "../Global/TitleSection";

//datas
import DataOurBlog from "./data/MainDataOurBlog";
import CarouselItem from "./data/OurBlog";

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
    breakpoint: { max: 1024, min: 601 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 600, min: 0 },
    items: 1,
  },
};

const OurBlog = (props) => {
  return (
    <ComponentOurBlog className="our-blog">
      {/* title */}
      <TitleSection TextCenter MarginAuto className="our-blog__title">
        <h2>OUR BLOG</h2>
        <h1>BLOG UPDATE</h1>
      </TitleSection>

      <div className="container our-blog__container">
        <Carousel
          responsive={responsive}
          className="our-blog__carousel"
          showDots={false}
          infinite={true}
          autoPlay={props.deviceType !== "mobile" ? true : false}
          autoPlaySpeed={4000}
        >
          {DataOurBlog.map((carousel) => (
            <CarouselItem
              key={carousel.title}
              title={carousel.title}
              date={carousel.date}
              coments={carousel.coments}
              link={carousel.link}
            />
          ))}
        </Carousel>
      </div>
    </ComponentOurBlog>
  );
};

export default OurBlog;
