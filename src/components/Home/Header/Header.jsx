import React, { useEffect, useRef } from "react";

//custom style
import { ComponentHeader } from "./HeaderStyle";

//images
import Logo from "./img/logo.png";

//components
import HandleControlMenu from "./HandleControlMenu";
import ComponentNetworks from "../Global/ComponentNetworks";

const Header = (props) => {
  const headerRef = useRef(null);

  useEffect(() => {
    function scrollTopHeaderShow() {
      if (
        document.body.scrollTop > 330 ||
        document.documentElement.scrollTop > 330
      ) {
        headerRef.current.style.position = "fixed";
        headerRef.current.style.backgroundColor = " #100028";
        headerRef.current.classList.add("showHeader");
      } else {
        headerRef.current.style.position = "absolute";
        headerRef.current.style.backgroundColor = "transparent";
        headerRef.current.classList.remove("showHeader");
      }
    }

    window.addEventListener("scroll", scrollTopHeaderShow);
    return () => window.removeEventListener("scroll", scrollTopHeaderShow);
  }, [headerRef]);

  return (
    <ComponentHeader className="header" ref={headerRef}>
      <div className="header__container">
        {/* Logo */}
        <a href="/" className="header__logo">
          <img src={Logo} alt="videograph-master-img-logo" />
        </a>

        {/* navbar */}
        <nav className="header__nav">
          <HandleControlMenu />
        </nav>

        {/* social networks */}
        <ComponentNetworks className="header__networks" />
      </div>
    </ComponentHeader>
  );
};

export default Header;
