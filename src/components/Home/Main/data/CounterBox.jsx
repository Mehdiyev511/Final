import React from "react";

const CounterBox = (props) => {
  const { img, alt, counter, description } = props;

  return (
    <figure className="counter__box">
      <figcaption>
        <img src={img} alt={alt} />
        <h2>{counter}</h2>
        <p>{description}</p>
      </figcaption>
    </figure>
  );
};

export default CounterBox;
