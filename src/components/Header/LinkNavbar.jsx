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
        to={`categorie/${removeAccentsAndLowerCase(props.category)}`}
        className="nav-link p-2"
        aria-current="page"
        aria-expanded="false"
        aria-label={`Onglet ${props.category}`}
        onClick={props.onClick}
      >
        {props.category}
      </NavLink>
    </li>
  );
};

export default LinkNavBar;
