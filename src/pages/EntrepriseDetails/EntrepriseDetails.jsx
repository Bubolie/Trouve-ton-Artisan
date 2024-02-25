import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import iconStar from "../../assets/images/star-512.svg";
import iconLocation from "../../assets/images/location.svg";
import iconCategory from "../../assets/images/categories.svg";
import data from "../../data/datas.json";

import "./entrepriseDetails.scss";
import FormContactArtisan from "./FormContactArtisan";
import NotFound from "../NotFound";
import Meta from "../../components/Meta";

const EntrepriseDetails = () => {
  const { artisanName } = useParams();
  const [entreprise, setentreprise] = useState("");

  useEffect(() => {
    const updatedEntreprise = data.find(
      (entreprise) => entreprise.name === artisanName
    );
    setentreprise(updatedEntreprise);
  }, [artisanName]);

  if (!entreprise) {
    return <NotFound />;
  }

  return (
    <>
    <Meta title={entreprise.name} content={`Fiche descriptive de l'entreprise ${entreprise.name}et formulaire de contact`}/>
      <main className="container my-5">
        <div className="container bg-container">
          <h1 className="text-center mt-4">{entreprise.name} </h1>
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
          <h2 className="mt-5 mb-3 ">A propos</h2>
          <p>{entreprise.about}</p>
          <h2 className="mt-5 mb-4 ">Nous contacter</h2>

          <FormContactArtisan email={entreprise.email} />

          {entreprise.website ? (
            <p>
              Notre site web :{" "}
              <a href={entreprise.website} target="_blank" rel="noreferrer">
                {entreprise.website}
              </a>
            </p>
          ) : (
            <p>Cet artisan ne possède pas encore de site web</p>
          )}
        </div>
      </main>
    </>
  );
};

export default EntrepriseDetails;
