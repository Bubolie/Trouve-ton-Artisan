import React from "react";
import "./card.scss";
import Button from "../Button/Button";
import star from "../../assets/images/star-32.png";
import location from "../../assets/images/location-24.png";
import category from "../../assets/images/categories-24.png";

const Card = (props) => {
  return (
    <div className=" col-md-4 my-3">
      <div className="card shadow h-100">
        <div className="m-4 card-body shadow">
          <h3 className="card-title text-center ">{props.nameEntreprise}</h3>
          <div className="card-text">
            <div className="d-flex align-items-center justify-content-center">
              <img src={star} alt="Etoile jaune" />
              <p className="m-3">{props.note}/5</p>
            </div>
            <div className="d-flex align-items-center">
              <img src={category} alt="" className="logo img-thumbnail" />
              <p className="m-2">{props.category}</p>
            </div>
            <div className="d-flex align-items-center">
              <img src={location} alt="" className="logo img-thumbnail" />
              <p className="m-2">{props.location}</p>
            </div>
          </div>
        </div>
        <div className="text-center mb-3">
          <Button
            linkPage="#"
            type="link"
            onClick="#"
            buttonName="En savoir plus"
          />
        </div>
      </div>
    </div>
  );
};

export default Card;
