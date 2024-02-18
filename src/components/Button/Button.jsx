import React from "react";
import "./button.scss";
import { useNavigate } from "react-router-dom";

const Button = (props) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(props.linkPage);
  };

  return (
    <div>
      <button className="style-button" type={props.type} onClick={handleClick}>
        {props.buttonName}
      </button>
    </div>
  );
};

export default Button;

