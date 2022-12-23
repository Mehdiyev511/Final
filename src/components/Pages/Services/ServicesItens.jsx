import React from "react";

//custom style
import { ComponentServices } from "./style/ServiceStyle.js";

//images
import Si01 from "./img/si-1.png";
import Si02 from "./img/si-2.png";
import Si03 from "./img/si-3.png";
import Si04 from "./img/si-4.png";
import Logo01 from "./img/logo-1.png";
import Logo02 from "./img/logo-2.png";
import Logo03 from "./img/logo-3.png";
import Logo04 from "./img/logo-4.png";
import Logo05 from "./img/logo-5.png";
import Logo06 from "./img/logo-6.png";

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
    items: 5,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 2,
  },
};

const ServicesItens = (props) => {
  return (
    <ComponentServices className="our-services">
      {/* services */}
      <div className="container our-services__container">
        <figure className="our-services__item">
          <img src={Si01} alt="videograph-master-our-services-01" />

          <figcaption>
            <h2>Scriptwriting and editing</h2>
            <p>
              Whether you’re halfway through the editing process, or you haven’t
              even started, our post production services can put the finishing
              touches.
            </p>
          </figcaption>
        </figure>

        <figure className="our-services__item">
          <img src={Si02} alt="videograph-master-our-services-02" />

          <figcaption>
            <h2>Motion graphics</h2>
            <p>
              Whether you’re halfway through the editing process, or you haven’t
              even started, our post production services can put the finishing
              touches.
            </p>
          </figcaption>
        </figure>

        <figure className="our-services__item">
          <img src={Si03} alt="videograph-master-our-services-03" />

          <figcaption>
            <h2>Scriptwriting and editing</h2>
            <p>
              Whether you’re halfway through the editing process, or you haven’t
              even started, our post production services can put the finishing
              touches.
            </p>
          </figcaption>
        </figure>

        <figure className="our-services__item">
          <img src={Si04} alt="videograph-master-our-services-04" />

          <figcaption>
            <h2>Video distribution</h2>
            <p>
              Whether you’re halfway through the editing process, or you haven’t
              even started, our post production services can put the finishing
              touches.
            </p>
          </figcaption>
        </figure>

        <figure className="our-services__item">
          <img src={Si01} alt="videograph-master-our-services-01" />

          <figcaption>
            <h2>Video hosting</h2>
            <p>
              Whether you’re halfway through the editing process, or you haven’t
              even started, our post production services can put the finishing
              touches.
            </p>
          </figcaption>
        </figure>

        <figure className="our-services__item">
          <img src={Si03} alt="videograph-master-our-services-03" />

          <figcaption>
            <h2>Scriptwriting and editing</h2>
            <p>
              Whether you’re halfway through the editing process, or you haven’t
              even started, our post production services can put the finishing
              touches.
            </p>
          </figcaption>
        </figure>
      </div>

      {/* hero */}
      <div className="container our-services__hero">
        <div className="our-services__hero-description">
          <hgroup>
            <h1>Create awesome videos with wideo’s powerful features</h1>
            <h2>
              Video combines all the features you need to easily create
              professional videos and presentations
            </h2>
          </hgroup>
          <button type="button" className="our-services__start">
            Start Your Stories
          </button>
        </div>
      </div>

      <div className="container our-services__carousel-container">
        <Carousel
          responsive={responsive}
          className="our-services__carousel"
          showDots={false}
          infinite={true}
          autoPlay={props.deviceType !== "mobile" ? true : false}
          autoPlaySpeed={4000}
          draggable={true}
        >
          <figure>
            <a href=" #">
              <img
                src={Logo01}
                alt="videograph-master-our-services-carousel-01"
              />
            </a>
          </figure>
          <figure>
            <a href=" #">
              <img
                src={Logo02}
                alt="videograph-master-our-services-carousel-02"
              />
            </a>
          </figure>
          <figure>
            <a href=" #">
              <img
                src={Logo03}
                alt="videograph-master-our-services-carousel-03"
              />
            </a>
          </figure>
          <figure>
            <a href=" #">
              <img
                src={Logo04}
                alt="videograph-master-our-services-carousel-04"
              />
            </a>
          </figure>
          <figure>
            <a href=" #">
              <img
                src={Logo05}
                alt="videograph-master-our-services-carousel-05"
              />
            </a>
          </figure>
          <figure>
            <a href=" #">
              <img
                src={Logo06}
                alt="videograph-master-our-services-carousel-06"
              />
            </a>
          </figure>
          <figure>
            <a href=" #">
              <img
                src={Logo01}
                alt="videograph-master-our-services-carousel-01"
              />
            </a>
          </figure>
          <figure>
            <a href=" #">
              <img
                src={Logo02}
                alt="videograph-master-our-services-carousel-02"
              />
            </a>
          </figure>
          <figure>
            <a href=" #">
              <img
                src={Logo03}
                alt="videograph-master-our-services-carousel-03"
              />
            </a>
          </figure>
          <figure>
            <a href=" #">
              <img
                src={Logo04}
                alt="videograph-master-our-services-carousel-04"
              />
            </a>
          </figure>
          <figure>
            <a href=" #">
              <img
                src={Logo05}
                alt="videograph-master-our-services-carousel-05"
              />
            </a>
          </figure>
          <figure>
            <a href=" #">
              <img
                src={Logo06}
                alt="videograph-master-our-services-carousel-06"
              />
            </a>
          </figure>
        </Carousel>
      </div>
    </ComponentServices>
  );
};

export default ServicesItens;
