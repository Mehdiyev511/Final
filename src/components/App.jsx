import React from "react";

//global style
import "./global-style.css";

//components
import Header from "./Home/Header/Header";
import Home from "./Home/Home";
import About from "./Pages/About/About";
import Portfolio from "./Pages/Portfolio/Portfolio";
import Contact from "./Pages/Contact/Contact";
import Services from "./Pages/Services/Services";
import NotFound from "./NotFound";

//react router
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="Home" element={<Home />} />
          <Route path="About" element={<About />} />
          <Route path="Portfolio" element={<Portfolio />} />
          <Route path="Contact" element={<Contact />} />
          <Route path="Services" element={<Services />} />
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
