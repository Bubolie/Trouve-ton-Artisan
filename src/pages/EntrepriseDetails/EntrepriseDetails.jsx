import { useParams } from "react-router-dom";

import iconStar from "../../assets/images/star-512.svg";
import iconLocation from "../../assets/images/location.svg";
import iconCategory from "../../assets/images/categories.svg";
import data from "../../data/datas.json";

import "./entrepriseDetails.scss";
import FormContactArtisan from "./FormContactArtisan";

const EntrepriseDetails = () => {
  const { artisanName } = useParams();

  const entreprise = data.find((entreprise) => entreprise.name === artisanName);

  return (
    <main className="container my-5">
      {entreprise && (
        <div className="container bg-container">
          <h2 className="text-center mt-4">{entreprise.name} </h2>
          <div className="d-flex align-items-center justify-content-center">
            <img
              src={iconStar}
              alt="Etoile jaune à 5 branche"
              width="512"
              height="512"
              className="logo"
            />
            <p className="m-3">{entreprise.note}/5</p>
          </div>
          <div className="d-flex align-items-center">
            <img
              src={iconCategory}
              alt="Symbole de catégorie : quatre éléments distincts"
              className="logo logo-custom img-thumbnail"
              width="512"
              height="512"
            />
            <p className="m-2">{entreprise.specialty}</p>
          </div>
          <div className="d-flex align-items-center">
            <img
              src={iconLocation}
              alt="Symbole de localisation : point sur une carte"
              className="logo logo-custom img-thumbnail"
              width="512"
              height="512"
            />
            <p className="m-2">{entreprise.location}</p>
          </div>
          <h3 className="mt-5 mb-3 ">A propos</h3>
          <p>{entreprise.about}</p>
          <h3 className="mt-5 mb-4 ">Nous contacter</h3>

          <FormContactArtisan email={entreprise.email} />

          <p>
            Notre site web :{" "}
            {entreprise.website ? (
              <a href={entreprise.website} target="_blank" rel="noreferrer">
                {entreprise.website}
              </a>
            ) : (
              "Non disponible"
            )}
          </p>
        </div>
      )}
    </main>
  );
};

export default EntrepriseDetails;
