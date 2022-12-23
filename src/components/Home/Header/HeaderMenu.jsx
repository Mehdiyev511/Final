import React from "react";

import { NavLink } from "react-router-dom";

//header__menu--active

const HeaderMenu = React.forwardRef((props, ref) => {
  return (
    <ul className="header__menu" ref={ref}>
      <li>
        <NavLink
          to="/"
          exact="true"
          className={({ isActive }) => (isActive ? "active" : null)}
        >
          Home
        </NavLink>
      </li>

      <li>
        <NavLink
          to="About"
          className={({ isActive }) => (isActive ? "active" : null)}
        >
          About
        </NavLink>
      </li>

      <li>
        <NavLink
          to="Portfolio"
          className={({ isActive }) => (isActive ? "active" : null)}
        >
          Portfolio
        </NavLink>
      </li>

      <li>
        <NavLink
          to="Services"
          className={({ isActive }) => (isActive ? "active" : null)}
        >
          Services
        </NavLink>
      </li>

      <li>
        <NavLink
          to="Contact"
          className={({ isActive }) => (isActive ? "active" : null)}
        >
          Contact
        </NavLink>
      </li>
    </ul>
  );
});

export default HeaderMenu;
