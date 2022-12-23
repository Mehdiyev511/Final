import React, { useState, useCallback } from "react";
import HeaderBtnMenu from "./HeaderBtnMenu";
import HeaderMenu from "./HeaderMenu";

const HandleControlMenu = (props) => {
  const [menu, setMenu] = useState(false);
  const menuRef = React.createRef();

  const handleClick = useCallback(() => {
    if (menu === false) {
      menuRef.current.classList.remove("slideOutUp");
      menuRef.current.classList.add("slideInDown");
      return setMenu(true);
    } else {
      menuRef.current.classList.remove("slideInDown");
      menuRef.current.classList.add("slideOutUp");
      return setMenu(false);
    }
  }, [menu, menuRef]);

  return (
    <>
      <HeaderBtnMenu handleClick={handleClick} />
      <HeaderMenu ref={menuRef} />
    </>
  );
};

export default HandleControlMenu;
