import React from "react";

//custom style
import { ComponentFooter } from "./FooterStyle";

//components
import ComponentNetworks from "../Global/ComponentNetworks";


//fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTelegramPlane } from "@fortawesome/free-brands-svg-icons";

//images
import Logo from "../Header/img/logo.png";

const Footer = (props) => {
  
  
  
  return (
    <ComponentFooter className="footer">
      <div className="container footer__container-networks">
        {/* logo */}
        <a href="/" className="footer__logo">
          <img src={Logo} alt="videograph-master-img-logo" />
        </a>

        {/* social networks */}
        <ComponentNetworks className="footer__networks" />
      </div>
      <div className="container footer__container">
        {/* about */}
        <div className="footer__contents">
          <h2>About us</h2>
          <p>
            Formed in 2006 by Matt Hobbs and Cael Jones, Videoprah is an
            award-winning, full-service production company specializing.
          </p>
          <a href=" #">Read More &#8594;</a>
        </div>

        {/* who we are */}
        <div className="footer__contents">
          <h2>Who we are</h2>

          <ul>
            <li>
              <a href=" #">Team</a>
            </li>
            <li>
              <a href=" #">Carrers</a>
            </li>
            <li>
              <a href=" #">Contact us</a>
            </li>
            <li>
              <a href=" #">Locations</a>
            </li>
          </ul>
        </div>

        {/* Our Work */}
        <div className="footer__contents">
          <h2>Our work</h2>

          <ul>
            <li>
              <a href=" #">Feature</a>
            </li>
            <li>
              <a href=" #">Latest</a>
            </li>
            <li>
              <a href=" #">Browse Archive</a>
            </li>
            <li>
              <a href=" #">Video for web</a>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div className="footer__contents">
          <h2>Newsletter</h2>
          <p>
            Videoprah is an award-winning, full-service production company
            specializing.
          </p>
          <form>
          
            <input type="text" placeholder="email" />
            <button type="button">
              <FontAwesomeIcon icon={faTelegramPlane} />
            </button>
          </form>
        </div>
      </div>
      <div className="container footer__copyright">
        <p>
          Copyright © 2022 All rights reserved | This template is made with by
          <span> Colorlib</span>
        </p>
      </div>
    </ComponentFooter>
  );
};

export default Footer;
