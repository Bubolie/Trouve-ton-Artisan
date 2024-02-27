import Card from "../../components/Card/Card";
import Stage from "../../components/Stage/Stage";
import "./home.scss";
import dataJson from "../../data/datas.json";
import Meta from "../../components/Meta";

const Home = () => {
  const topArtisans = dataJson.filter((dataJson) => dataJson.top);

  const sortTopArtisans = topArtisans.sort((a, b) => b.note - a.note);

  return (
    <>
      <Meta
        title="Trouve ton Artisan"
        content="Site web de la Région Auvergne-Rhône-Alpes permettant de rechercher et trouver facilement un artisan de la Région"
      />
      <main>
        <section className="bg-color-secondary py-5">
          <div className="container">
            <h1 className="text-center mb-5">Comment trouver mon artisan ?</h1>
            <div className="d-flex justify-content-center align-items-center">
              <div className="d-flex flex-column align-items-center">
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
          </div>
        </section>
        <section className="container my-5 ">
          <div className="d-flex justify-content-center">
            <h2 className="text-center subtitle">Nos artisans du mois</h2>
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
    </>
  );
};

export default Home;
