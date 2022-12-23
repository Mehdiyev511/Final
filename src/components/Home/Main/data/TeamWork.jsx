import React, { useState, useRef, useCallback } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-regular-svg-icons";
import { faEyeSlash } from "@fortawesome/free-regular-svg-icons";

const TeamWork = (props) => {
  const { img, alt, name, office, facebook, twitter, instagram, youtube } =
    props;

  const [about, setAbout] = useState(false);
  const aboutRef = useRef(null);

  const HandleClickShow = useCallback(() => {
    if (about === false) {
      aboutRef.current.style.maxHeight = "200px";
      return setAbout(true);
    }
  }, [about, aboutRef]);

  const HandleClickHide = useCallback(() => {
    if (about === true) {
      aboutRef.current.style.maxHeight = 0;
      return setAbout(false);
    }
  }, [about, aboutRef]);

  return (
    <figure className="team-work__card">
      <div className="team-work__control">
        <button
          type="button"
          className="team-work__btn"
          onClick={HandleClickShow}
        >
          <FontAwesomeIcon icon={faEye} />
        </button>
        <button
          type="button"
          className="team-work__btn"
          onClick={HandleClickHide}
        >
          <FontAwesomeIcon icon={faEyeSlash} />
        </button>
      </div>
      <img src={img} alt={alt} />
      <figcaption ref={aboutRef}>
        <h2>{name}</h2>
        <p>{office}</p>

        <ul>
          <li>
            <a href=" #">{facebook}</a>
          </li>
          <li>
            <a href=" #">{twitter}</a>
          </li>
          <li>
            <a href=" #">{instagram}</a>
          </li>
          <li>
            <a href=" #">{youtube}</a>
          </li>
        </ul>
      </figcaption>
    </figure>
  );
};

export default TeamWork;
