import React, { useEffect } from "react";

//breadcrumb
import Breadcrumb from "../Breadcrumb/Breadcrump";

//components - home
import Counter from "../../Home/Main/Main-Counter";
import TeamWork from "../../Home/Main/Main-TeamWork";
import Footer from "../../Home/Footer/Footer";
import AboutDescription from "./AboutDescription";
import AboutTestimonial from "./AboutTestimonial";
import BtnBackToTop from "../../BtnBackToTop/BtnBackToTop";

const About = (props) => {
  useEffect(() => {
    document.title = "Videograph / About";
  }, []);

  return (
    <section>
      <Breadcrumb title="About" bread="Home / About" />
      <AboutDescription />
      <AboutTestimonial />
      <Counter />
      <TeamWork />
      <Footer />
      <BtnBackToTop />
    </section>
  );
};

export default About;
