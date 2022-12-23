import React, { useCallback, useEffect } from "react";

//custom style
import { BtnStyle } from "./BtnStyle";

//fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleUp } from "@fortawesome/free-solid-svg-icons";

const BtnBackToTop = (props) => {
  const HandlebackToTop = useCallback(() => {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }, []);

  useEffect(() => {
    function scrollTop() {
      if (
        document.body.scrollTop > 330 ||
        document.documentElement.scrollTop > 330
      ) {
        document.querySelector(".BtnBackToTop").style.display = "block";
      } else {
        document.querySelector(".BtnBackToTop").style.display = "none";
      }
    }

    window.addEventListener("scroll", scrollTop);
    return () => window.removeEventListener("scroll", scrollTop);
  }, []);

  return (
    <BtnStyle className="BtnBackToTop" onClick={HandlebackToTop}>
      <FontAwesomeIcon icon={faArrowCircleUp} className="BtnBackToTop__icon" />
    </BtnStyle>
  );
};

export default BtnBackToTop;
