import React from "react";
import { NavLink } from "react-router-dom";

const LinkNavBar = (props) => {
  function removeAccentsAndLowerCase(str) {
    return str
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase();
  }

  return (
    <li className="nav-item">
      <NavLink
        to={`/${removeAccentsAndLowerCase(props.category)}`}
        className="nav-link"
        aria-current="page"
        aria-expanded="false"
        onClick={props.onClick}
      >
        {props.category}
      </NavLink>
    </li>
  );
};

export default LinkNavBar;
