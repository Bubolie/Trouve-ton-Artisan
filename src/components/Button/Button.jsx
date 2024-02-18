import React from "react";
import "./button.scss"
import { NavLink } from "react-router-dom";

const Button = (props) => {
  return (
    <div >
      <NavLink to={props.linkPage}>
        <button className="style-button" type={props.type} onClick={props.onClick}>
        {props.buttonName}
      </button>
      </NavLink>
      
    </div>
  )
}

export default Button