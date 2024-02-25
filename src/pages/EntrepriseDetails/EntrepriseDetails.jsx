import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import data from "../../data/datas.json";

import "./entrepriseDetails.scss";
import FormContactArtisan from "./FormContactArtisan";
import NotFound from "../NotFound";
import Meta from "../../components/Meta";
import ArtisanDetailsCommon from "../../components/ArtisanDetailsCommon";

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
      <Meta
        title={entreprise.name}
        content={`Fiche descriptive de l'entreprise ${entreprise.name}et formulaire de contact`}
      />
      <main className="container my-5">
        <div className="container bg-container">
          <h1 className="text-center mt-4">
            <u>{entreprise.name}</u>{" "}
          </h1>
          <ArtisanDetailsCommon
            note={entreprise.note}
            specialty={entreprise.specialty}
            location={entreprise.location}
          />
          <h2 className="mt-5 mb-3 ">A propos</h2>
          <p className="container">{entreprise.about}</p>
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
            <p>Cet artisan ne possède pas encore de site web.</p>
          )}
        </div>
      </main>
    </>
  );
};

export default EntrepriseDetails;
