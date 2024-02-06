import React from "react";
import Card from "../../components/Card/Card";
import Stage from "../../components/Stage/Stage";
import "./home.scss";
import dataJson from "../../data/datas.json";

const Home = () => {
  const topArtisans = dataJson.filter((dataJson) => dataJson.top);

  const sortTopArtisans = topArtisans.sort((a,b) => b.note-a.note);

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
      <section className="container my-5 ">
        <div className="d-flex justify-content-center">
          <h2>Nos artisans du mois</h2>
        </div>
        <div className="row">
          {sortTopArtisans.map((artisan) => (
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
