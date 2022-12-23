import React from "react";

const AboutCarousel = (props) => {
  const { comments, name, office, img, alt } = props;

  return (
    <div className="testimonial__carousel-item">
      <div className="testomial__comments">
        <p>{comments}</p>
      </div>
      <figure className="testimonial__author">
        <img src={img} alt={alt} />

        <figcaption>
          <hgroup>
            <h4>{name}</h4>
            <h5>{office}</h5>
          </hgroup>
        </figcaption>
      </figure>
    </div>
  );
};

export default AboutCarousel;
