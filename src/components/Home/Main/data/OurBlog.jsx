import React from "react";

const CarouselItem = (props) => {
  const { title, date, coments, link } = props;
  return (
    <div className="our-blog__carousel-item">
      <h2>{title}</h2>
      <p className="our-blog__carousel-item--text">{date}</p>
      <p>{coments}</p>
      <a href=" #">{link} &#8594;</a>
    </div>
  );
};

export default CarouselItem;
