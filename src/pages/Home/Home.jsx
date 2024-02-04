import React from "react";
import Card from "../../components/Card/Card";

const Home = () => {
  return (
    <main className="container">
      <h1>Accueil</h1>
      <Card nameEntreprise="Didier" note="2.6" category="Fabrication" location="Lyon"/>
    </main>

  )
}

export default Home