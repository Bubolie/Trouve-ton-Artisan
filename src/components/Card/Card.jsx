import React from "react";
import "./card.scss";
import Button from "../Button/Button";
import iconStar from "../../assets/images/star-512.svg";
import iconLocation from "../../assets/images/location.svg";
import iconCategory from "../../assets/images/categories.svg";

const Card = (props) => {
  // const {nameEntreprise} = props
  // const formattedName = nameEntreprise
  //   ? nameEntreprise
  //       .normalize("NFD")
  //       .replace(/[\u0300-\u036f]/g, "")
  //       .replace(/\s+/g, "-")
  //       .toLowerCase()
  //   : "";

  return (
    <div className=" col-md-6 col-lg-4 my-3 mx-auto">
      <div className="card shadow h-100 ">
        <div className="m-4 card-body shadow">
          <h3 className="card-title text-center ">{props.nameEntreprise}</h3>
          <div className="card-text">
            <div className="d-flex align-items-center justify-content-center">
              <img
                src={iconStar}
                className="star-size"
                alt="Etoile jaune à 5 branches"
                width="512"
                height="512"
              />
              <p className="m-3">{props.note}/5</p>
            </div>
            <div className="d-flex align-items-center">
              <img
                src={iconCategory}
                alt="Symbole de catégorie : quatre éléments distincts"
                className="logo img-thumbnail"
                width="512"
                height="512"
              />
              <p className="m-2">{props.category}</p>
            </div>
            <div className="d-flex align-items-center">
              <img
                src={iconLocation}
                alt="Symbole de localisation : point sur une carte"
                className="logo img-thumbnail"
                width="512"
                height="512"
              />
              <p className="m-2">{props.location}</p>
            </div>
          </div>
        </div>
        <div className="text-center mb-3">
          <Button
            linkPage={`/entreprise/${props.nameEntreprise}`}
            type="link"
            buttonName="En savoir plus"
          />
        </div>
      </div>
    </div>
  );
};

export default Card;
