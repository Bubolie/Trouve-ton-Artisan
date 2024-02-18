import React from "react";
import { useParams } from "react-router-dom";

import iconStar from "../../assets/images/star-512.svg";
import iconLocation from "../../assets/images/location.svg";
import iconCategory from "../../assets/images/categories.svg";
import Button from "../../components/Button/Button";
import data from "../../data/datas.json";

import "./entrepriseDetails.scss";

const EntrepriseDetails = () => {
  const { artisanName } = useParams();

  const entreprise = data.find((entreprise) => entreprise.name === artisanName);

  // Pour forcer l'envoie par amil du formulaire
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const name = formData.get("name");
    const body = `${formData.get("message")}\n\nNom: ${name}`;
    const mailtoURL = `mailto:${entreprise.email}?subject=${formData.get(
      "objet"
    )}&body=${encodeURIComponent(body)}`;

    window.open(mailtoURL);
    form.reset();
  };

  return (
    <section className="container my-5">
      {entreprise && (
        <div className="container bg-container">
          <h2 className="text-center mt-4">{entreprise.name} </h2>
          <div className="d-flex align-items-center justify-content-center">
            <img
              src={iconStar}
              alt="Etoile jaune à 5 branche"
              width="512"
              height="512"
            />
            <p className="m-3">{entreprise.note}/5</p>
          </div>
          <div className="d-flex align-items-center">
            <img
              src={iconCategory}
              alt="Symbole de catégorie : quatre éléments distincts"
              className="logo img-thumbnail"
              width="512"
              height="512"
            />
            <p className="m-2">{entreprise.category}</p>
          </div>
          <div className="d-flex align-items-center">
            <img
              src={iconLocation}
              alt="Symbole de localisation : point sur une carte"
              className="logo img-thumbnail"
              width="512"
              height="512"
            />
            <p className="m-2">{entreprise.location}</p>
          </div>
          <h3 className="mt-5 mb-3 ">A propos</h3>
          <p>{entreprise.about}</p>
          <h3 className="mt-5 mb-4 ">Nous contacter</h3>
          <form action="" method="post" onSubmit={handleSubmit}>
            <div className="row m-3">
              <input
                className="px-2 my-2 rounded-4 form-text-color col-lg-6"
                type="text"
                name="name"
                placeholder="Nom"
                autoComplete="name"
                required
              />
              <input
                className="px-2 my-2 rounded-4 form-text-color col-lg-6"
                type="text"
                name="objet"
                placeholder="Objet"
                required
              />

              <textarea
                className="px-2 my-2 rounded-4 form-text-color"
                name="message"
                id="message"
                rows="10"
                placeholder="Votre message..."
                required
              ></textarea>
            </div>
            <div className="text-end my-3">
              <Button type="submit" buttonName="Envoyer" />
            </div>
          </form>
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
    </section>
  );
};

export default EntrepriseDetails;
