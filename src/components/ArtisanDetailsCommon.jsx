import fullStar from "../assets/images/star-512.svg";
import starWhite from "../assets/images/star-white.svg";
import iconLocation from "../assets/images/location.svg";
import iconCategory from "../assets/images/categories.svg";

const ArtisanDetailsCommon = (props) => {
  const stars = [];

  for (let i = 1; i <= 5; i++) {
    stars.push(
      <img
        key={i}
        src={i <= props.note ? fullStar : starWhite}
        alt={`${i <= props.note ? "Pleine" : "Vide"} étoile`}
        width="512"
        height="512"
        className="logo"
      />
    );
  }
  return (
    <div>
      <div className="d-flex align-items-center justify-content-center">
        <div className="text-center">{stars}</div>
        <p className="m-3">{props.note}/5</p>
      </div>
      <div className="d-flex align-items-center">
        <img
          src={iconCategory}
          alt="Symbole de catégorie : quatre éléments distincts"
          className="logo logo-custom img-thumbnail"
          width="512"
          height="512"
        />
        <p className="m-2">{props.specialty}</p>
      </div>
      <div className="d-flex align-items-center">
        <img
          src={iconLocation}
          alt="Symbole de localisation : point sur une carte"
          className="logo logo-custom img-thumbnail"
          width="512"
          height="512"
        />
        <p className="m-2">{props.location}</p>
      </div>
    </div>
  );
};

export default ArtisanDetailsCommon;
