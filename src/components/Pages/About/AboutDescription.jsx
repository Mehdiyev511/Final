import React from "react";

//custom style
import { ComponentAbout } from "./style/AboutStyle";

//images
import About01 from "./img/about-1.jpg";
import About02 from "./img/about-2.jpg";
import About03 from "./img/about-3.jpg";
import Si03 from "./img/si-3.png";
import Si04 from "./img/si-4.png";

//components
import { TitleSection } from "../../Home/Global/TitleSection";

const AboutDescription = (props) => {
  return (
    <ComponentAbout className="about">
      <div className="container about__container">
        {/* picture */}
        <div className="about__pic">
          <figure>
            <img src={About01} alt="videograph-master-pic-about-01" />
          </figure>

          <figure>
            <img src={About02} alt="videograph-master-pic-about-02" />
            <img src={About03} alt="videograph-master-pic-about-03" />
          </figure>
        </div>

        {/* description */}
        <div className="about__description">
          <TitleSection>
            <h2>About videograph</h2>
            <h1>Who we are?</h1>
          </TitleSection>

          <div className="about__services">
            <figure className="about__services-item">
              <img
                src={Si03}
                alt="videograph-master-services-about-distribution"
              />

              <figcaption>
                <h3>Video distribution</h3>
                <p>
                  Whether you’re halfway through the editing process, or you.
                </p>
              </figcaption>
            </figure>

            <figure className="about__services-item">
              <img src={Si04} alt="videograph-master-services-about-hosting" />

              <figcaption>
                <h3>Video hosting</h3>
                <p>
                  Whether you’re halfway through the editing process, or you.
                </p>
              </figcaption>
            </figure>
          </div>

          <p className="about__description-text">
            Formed in 2006 by Matt Hobbs and Cael Jones, Videoprah is an
            award-winning, full-service production company specializing in
            commercial, broadcast, tourism & action sport video production
            services has been featured.
          </p>
        </div>
      </div>
    </ComponentAbout>
  );
};

export default AboutDescription;
