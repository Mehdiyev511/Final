import React from "react";

//custom style
import { ComponentHero } from "./HeroStyle";

//hero - carousel
import HeroCarousel from "./HeroCarousel";

const Hero = (props) => {
  return (
    <ComponentHero className="hero">
      <div className="hero__description">
        <HeroCarousel />
      </div>
    </ComponentHero>
  );
};

export default Hero;
