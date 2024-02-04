import React from "react";
import Card from "../../components/Card/Card";
import Stage from "../../components/Stage/Stage";
import "./home.scss";
import dataJson from "../../data/datas.json";

const Home = () => {
  const topArtisans = dataJson.filter((dataJson) => dataJson.top);

  return (
    <main>
      <section className="bg-color-secondary py-5">
        <div className="container body-wrapper">
          <h1 className="text-center mb-5">Comment trouver mon artisan ?</h1>
          <Stage
            number="1"
            description="Choisir la catégorie d'artisanat dans le menu."
          />
          <Stage number="2" description="Choisir un artisan." />
          <Stage
            number="3"
            description="Le contacter via le formulaire de contact."
          />
          <Stage number="4" description="Une réponse sera apportée sous 48h." />
        </div>
      </section>
      <section className="my-5 row">
        <div className="d-flex justify-content-center">
          <h2>Nos artisans du mois</h2>
        </div>
        <div className="col-md-4">
          {topArtisans.map((artisan) => (
            <Card
              key={artisan.id}
              nameEntreprise={artisan.name}
              note={artisan.note}
              category={artisan.specialty}
              location={artisan.location}
            />
          ))}
        </div>
      </section>
    </main>
  );
};

export default Home;
