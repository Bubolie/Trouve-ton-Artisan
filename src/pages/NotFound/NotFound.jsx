import React from "react";
import Button from "../../components/Button/Button";
import img404 from "../../assets/images/error-404.png";

const NotFound = () => {
  return (
    <div className="container body-wrapper my-5">
      <h1>Erreur 404</h1>
      <div className="container-fluid text-center">
        <img src={img404} alt='logo ordinateur affichant "404"' />
      </div>
      <p>Page non trouvée...</p>
      <Button
        linkPage="/"
        type="button"
        buttonName="Retourner à la page d'accueil"
      />
    </div>
  );
};

export default NotFound;
