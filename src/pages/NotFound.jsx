import Button from "../components/Button/Button";
import img404 from "../assets/images/error-404.svg";
import Meta from "../components/Meta";

const NotFound = () => {
  return (
    <>
      <Meta
        title="Erreur 404"
        content="La page que vous recherchez n'existe pas."
      />

      <main className="container body-wrapper my-5">
        <h1 className="text-center">Erreur 404</h1>
        <div className="text-center">
          <p>La page que vous recherchez n'exite pas.</p>
          <img
            src={img404}
            alt='Logo ordinateur affichant "404"'
            width="512"
            height="512"
          />
        </div>
        <Button
          linkPage="/"
          type="button"
          buttonName="Retourner à la page d'accueil"
          color="blue"
        />
      </main>
    </>
  );
};

export default NotFound;
