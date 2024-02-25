import { NavLink } from "react-router-dom";

const LinkFooter = (props) => {
  return (
    <li>
      <NavLink
        to={`/${props.link}`}
        rel="noopener noreferrer"
        className="link-footer mx-3"
      >
        {props.nameLink}
      </NavLink>
    </li>
  );
};

export default LinkFooter;
