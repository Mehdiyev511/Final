import React, { useEffect } from "react";

//global style
import "../global-style.css";

//components
import Hero from "./Hero/Hero";
import Main from "./Main/Main";
import Footer from "./Footer/Footer";
import BtnBackToTop from "../BtnBackToTop/BtnBackToTop";

const Home = () => {
  useEffect(() => {
    document.title = "Videograph-Master";
  }, []);

  return (
    <>
      <Hero />
      <Main />
      <Footer />
      <BtnBackToTop />
    </>
  );
};

export default Home;
