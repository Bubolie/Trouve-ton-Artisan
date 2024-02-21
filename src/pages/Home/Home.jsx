import React from "react";
import Card from "../../components/Card/Card";
import Stage from "../../components/Stage/Stage";
import "./home.scss";
import dataJson from "../../data/datas.json";

const Home = () => {
  const topArtisans = dataJson.filter((dataJson) => dataJson.top);

  const sortTopArtisans = topArtisans.sort((a, b) => b.note - a.note);

  return (
    <main>
      <section className="bg-color-secondary py-5">
        <h1 className="text-center mb-5">Comment trouver mon artisan ?</h1>
        <div className="container">
          <div className="d-flex flex-column justify-content-center align-items-center">
            <Stage
              number="1"
              description="Choisir la catégorie d'artisanat dans le menu."
            />
            <Stage number="2" description="Choisir un artisan." />
            <Stage
              number="3"
              description="Le contacter via le formulaire de contact."
            />
            <Stage
              number="4"
              description="Une réponse sera apportée sous 48h."
            />
          </div>
        </div>
      </section>
      <section className="container my-5 ">
        <div className="d-flex justify-content-center">
          <h2>Nos artisans du mois</h2>
        </div>
        <div className="row">
          {sortTopArtisans.map((entreprise) => (
            <Card
              key={entreprise.id}
              nameEntreprise={entreprise.name}
              note={entreprise.note}
              specialty={entreprise.specialty}
              location={entreprise.location}
            />
          ))}
        </div>
      </section>
    </main>
  );
};

export default Home;
