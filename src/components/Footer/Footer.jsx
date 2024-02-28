import location from "../../assets/images/location.svg";
import phone from "../../assets/images/telephone.svg";
import "./footer.scss";
import LinkFooter from "./LinkFooter";
import logoRegion from "../../assets/images/logo-region.svg";
import logoSite from "../../assets/images/logo.svg";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="py-5">
      <div className="container">
        <div className="row">
          <section className="container col-md-6 d-flex flex-column align-items-center justify-content-center">
            <NavLink to="/" aria-label="Page d'accueil de Trouve ton Artisan">
              <img
                src={logoSite}
                alt='Logo de notre site "Trouve ton artisan"'
                className="bg-light rounded p-1 m-3"
                width="131"
                height="72"
              />
            </NavLink>
            <p className="text-center px-4">
              <i>
                En partenariat avec l'Antenne Lyonnaise du Conseil Régional
                Auvergne-Rhône-Alpes
              </i>
            </p>
            <a
              href="https://www.auvergnerhonealpes.fr/"
              target="_blank"
              rel="noreferrer"
              aria-label="Lien externe vers le site du Conseil Régional Auvergne-Rhône-Alpes"
            >
              <img
                src={logoRegion}
                alt="Logo du Conseil Régional Auvergne-Rhône-Alpes"
                className="bg-light rounded p-1 m-3"
                width="225"
                height="70"
              />
            </a>
          </section>
          <section className="col-md-6 d-flex flex-column align-items-center justify-content-center mt-3">
            <h4 className="container text-center px-5">Nous contacter</h4>
            <address>
              <div className="m-4">
                <a
                  href="tel:+33(0)426734000"
                  className="d-flex"
                  aria-label="Appeler Trouve ton Artisan"
                >
                  <img
                    src={phone}
                    alt="Icône d'un téléphone"
                    className="logo-mini logo-custom img-thumbnail"
                    width="512"
                    height="512"
                  />
                  <p>+33 (0)4 26 73 40 00</p>
                </a>
                <a
                  href="https://maps.app.goo.gl/8UuoBFoPiLitMo628"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="d-flex"
                  aria-label="Voir la localisation sur Google Maps"
                >
                  <img
                    src={location}
                    alt="Icône de localisation"
                    className="logo-mini logo-custom img-thumbnail"
                    width="512"
                    height="512"
                  />
                  <div>
                    101 cours Charlemagne <br />
                    CS 20033 <br />
                    69269 LYON CEDEX 02
                    <br />
                    FRANCE
                  </div>
                </a>
              </div>
            </address>
          </section>
        </div>
        <section className="container">
          <h4 className="text-center">Pages Légales</h4>
          <ul className="my-3 d-flex justify-content-center flex-wrap">
            <LinkFooter link="mentions-legales" nameLink="Mentions Légales" />
            <LinkFooter
              link="donnees-personnelles"
              nameLink="Données personnelles"
            />
            <LinkFooter link="cookies" nameLink="Cookies" />
            <LinkFooter link="accessibilite" nameLink="Accessibilité" />
          </ul>
        </section>
      </div>
    </footer>
  );
};

export default Footer;
