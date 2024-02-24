import { NavLink } from "react-router-dom";

const LinkFooter = (props) => {
  return (
    <li>
      <NavLink
        to={`/${props.link}`}
        rel="noopener noreferrer"
        className="link-footer"
      >
        {props.nameLink}
      </NavLink>
    </li>
  );
};

export default LinkFooter;
