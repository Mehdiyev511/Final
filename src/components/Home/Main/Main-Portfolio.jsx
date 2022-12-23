import React, { useCallback, useRef, useState } from "react";

//custom style
import { ComponentPortfolio } from "./style/Portfolio";

//images - box 01
import Work_1 from "./img/work/work-1.jpg";
import Work_5 from "./img/work/work-5.jpg";
import Work_6 from "./img/work/work-6.jpg";

//images - box 02
import Work_2 from "./img/work/work-2.jpg";
import Work_3 from "./img/work/work-3.jpg";
import Work_7 from "./img/work/work-7.jpg";

//images - box 03
import Work_4 from "./img/work/work-4.jpg";

//font awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const Portfolio = (props) => {
  const [play, setPlay] = useState(false);
  const playRef = useRef(null);

  const handleClickShow = useCallback(() => {
    if (play === false) {
      playRef.current.classList.remove("fadeOut");
      playRef.current.classList.add("fadeIn");
      playRef.current.style.display = "block";

      return setPlay(true);
    }
  }, [play, playRef]);

  const handleClickHide = useCallback(() => {
    if (play === true) {
      playRef.current.classList.remove("fadeIn");
      playRef.current.classList.add("fadeOut");

      setTimeout(() => {
        playRef.current.style.display = "none";
      }, 1000);

      return setPlay(false);
    }
  }, [play, playRef]);

  return (
    <ComponentPortfolio className="portfolio">
      <div className="portfolio__container">
        {/* portfolio - 01 */}
        <figure className="portfolio__card">
          <div className="portfolio__hero">
            <img src={Work_1} alt="videograph-master-portfolio-work-1" />

            <button
              type="button"
              className="portfolio__play"
              onClick={handleClickShow}
            >
              <FontAwesomeIcon icon={faPlay} />
            </button>

            <figcaption>
              <h1>VIP Auto Tires & Service</h1>
              <p>eCommerce / Magento</p>
            </figcaption>
          </div>

          <img src={Work_5} alt="videograph-master-portfolio-work-5" />
          <img src={Work_6} alt="videograph-master-portfolio-work-6" />
        </figure>

        {/* portfolio - 02 */}
        <figure className="portfolio__card">
          <img src={Work_2} alt="videograph-master-portfolio-work-2" />
          <img src={Work_3} alt="videograph-master-portfolio-work-3" />

          <div className="portfolio__hero">
            <img src={Work_7} alt="videograph-master-portfolio-work-7" />

            <button
              type="button"
              className="portfolio__play"
              onClick={handleClickShow}
            >
              <FontAwesomeIcon icon={faPlay} />
            </button>

            <figcaption>
              <h1>VIP Auto Tires & Service</h1>
              <p>eCommerce / Magento</p>
            </figcaption>
          </div>
        </figure>

        {/* portfolio - 03 */}
        <figure className="portfolio__card portfolio__card--modify">
          <div className="portfolio__hero portfolio__hero--three">
            <img src={Work_4} alt="videograph-master-portfolio-work-4" />

            <button
              type="button"
              className="portfolio__play"
              onClick={handleClickShow}
            >
              <FontAwesomeIcon icon={faPlay} />
            </button>

            <figcaption>
              <h1>VIP Auto Tires & Service</h1>
              <p>eCommerce / Magento</p>
            </figcaption>
          </div>
        </figure>
      </div>

      <div className="portfolio__modal" ref={playRef}>
        <button
          type="button"
          className="portfolio__close"
          onClick={handleClickHide}
        >
          <FontAwesomeIcon icon={faTimes} />
        </button>
        <iframe
          src={play ? "https://www.youtube.com/embed/L9sirTErkQU" : null}
          title="YouTube video player exemple"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        ></iframe>
      </div>
    </ComponentPortfolio>
  );
};

export default Portfolio;
