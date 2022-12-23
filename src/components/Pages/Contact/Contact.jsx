import React, { useEffect } from "react";

//components
import Footer from "../../Home/Footer/Footer";
import Breadcrumb from "../Breadcrumb/Breadcrump";
import ContactOptions from "./ContactOptions";
import ContactGoogleMaps from "./ContactGoogleMaps";
import BtnBackToTop from "../../BtnBackToTop/BtnBackToTop";


const Contact = (props) => {
  useEffect(() => {
    document.title = "Videograph / Contact Us";
  }, []);

  return (
    <section>
      <Breadcrumb title="Contact us" bread="Home / contact" />
      <ContactOptions />
      <ContactGoogleMaps />
      <Footer />
      <BtnBackToTop />
    </section>
  );
};

export default Contact;
