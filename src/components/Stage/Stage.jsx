import React from "react";
import "./stage.scss"

const Stage = (props) => {
  return (
    <div className="container ">
      <p className="my-2">
        <span>Etape {props.number}</span> : {props.description}
      </p>
    </div>
  );
};

export default Stage;
