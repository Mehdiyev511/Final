import React from "react";

//font awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";

const ComponentNetworks = (props) => {
  return (
    <ul className={props.className}>
      <li>
        <a href=" #">
          <FontAwesomeIcon icon={faFacebook} />
        </a>
      </li>
      <li>
        <a href=" #">
          <FontAwesomeIcon icon={faTwitter} />
        </a>
      </li>
      <li>
        <a href=" #">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
      </li>
      <li>
        <a href=" #">
          <FontAwesomeIcon icon={faYoutube} />
        </a>
      </li>
    </ul>
  );
};

export default ComponentNetworks;
