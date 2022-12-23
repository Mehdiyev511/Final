import React from "react";

//font awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const HeaderBtnMenu = (props) => {
  return (
    <button
      type="button"
      className="header__btn-menu"
      onClick={props.handleClick}
    >
      <span>Menu</span>
      <FontAwesomeIcon icon={faBars} className="header__menu-icon" />
    </button>
  );
};

export default HeaderBtnMenu;
