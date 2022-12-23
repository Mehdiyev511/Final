import React from "react";

const OurServicesCard = (props) => {
  const { img, alt, title, description } = props;
  return (
    <figure>
      <img src={img} alt={alt} />
      <figcaption>
        <h3>{title}</h3>
        <p className="our-services__description">{description}</p>
      </figcaption>
    </figure>
  );
};

export default OurServicesCard;
