import React from "react";

//custom style
import { ComponentOurServices } from "./style/OurServices";
import { TitleSection } from "../Global/TitleSection";
import { MainLink } from "../Global/MainLink";

//data
import DataOurServices from "./data/MainDataOurService";
import OurServicesCard from "./data/OurServicesCard";

const OurServices = (props) => {
  return (
    <ComponentOurServices className="our-services">
      <div className="container our-services__container">
        {/* title */}
        <div className="our-services__title">
          <TitleSection>
            <h2>OUR SERVICES</h2>
            <h1>WHAT WE DO?</h1>
          </TitleSection>

          <p className="our-services__description">
            If you hire a videographer of our team you will get a video
            professional to make a custom video for your business and, once the
            project is over.
          </p>

          <MainLink href="#">
            <span> VIEW ALL SERVICES</span>
          </MainLink>
        </div>

        {/* contents - cards*/}
        <div className="our-services__contents">
          {/* Motion graphics */}

          {DataOurServices.map((services) => (
            <OurServicesCard
              key={services.title}
              img={services.img}
              alt={services.alt}
              title={services.title}
              description={services.description}
            />
          ))}
        </div>
      </div>
    </ComponentOurServices>
  );
};

export default OurServices;
