import React from "react";
import Button from "../../components/Button/Button";
import img404 from "../../assets/images/error-404.svg";

const NotFound = () => {
  return (
    <main className="container body-wrapper my-5">
      <h1 className="text-center">Erreur 404 - Page non trouvé</h1>
      <div className="text-center">
        <img src={img404} alt='logo ordinateur affichant "404"' width="512" height="512"/>
      </div>
      <Button
        linkPage="/"
        type="button"
        buttonName="Retourner à la page d'accueil"
        color="blue"
      />
    </main>
  );
};

export default NotFound;
