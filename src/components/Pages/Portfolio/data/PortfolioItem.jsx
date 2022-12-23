import React from "react";

//font awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";

const PortfolioItem = (props) => {
  const { img, alt, title, office, category } = props;
  return (
    <figure className="portfolio__gallery-item" data-category={category}>
      <div className="portfolio__gallery-hero">
        <img src={img} alt={alt} />
        <button type="button" className="portfolio__gallery-play">
          <FontAwesomeIcon icon={faPlay} />
        </button>
      </div>

      <figcaption>
        <h2>{title}</h2>
        <p>{office}</p>
      </figcaption>
    </figure>
  );
};

export default PortfolioItem;
