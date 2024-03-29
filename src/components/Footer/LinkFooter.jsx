import { NavLink } from "react-router-dom";

const LinkFooter = (props) => {
  return (
    <li>
      <NavLink
        to={`/${props.link}`}
        rel="noopener noreferrer"
        className="mx-3"
        aria-label={`Lien vers la page ${props.link}`}
      >
        {props.nameLink}
      </NavLink>
    </li>
  );
};

export default LinkFooter;
