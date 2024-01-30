import { NavLink } from "react-router-dom";
import location from "../../assets/images/location-24.png";
import phone from "../../assets/images/telephone-24.png";
import "./footer.scss";

const Footer = () => {
  return (
    <footer className="container-fluid">
      <div className="row">
        <section className="container text-center col-md-6">
          <h2>Pages Legale</h2>
          <ul>
            <li>
              <NavLink to="/mentions-legales" rel="noopener noreferrer">
                Mentions Légales
              </NavLink>
            </li>
            <li>
              <NavLink to="/donnees-personnelles" rel="noopener noreferrer">
                Données personnelles
              </NavLink>
            </li>
            <li>
              <NavLink to="/cookies" rel="noopener noreferrer">
                Cookies
              </NavLink>
            </li>
            <li>
              <NavLink to="/accessibilite" rel="noopener noreferrer">
                Accéssibilités
              </NavLink>
            </li>
          </ul>
        </section>
        <section className="container col-md-6">
          <address>
            <h2>Nous contacter</h2>
            <a href="tel:+33(0)426734000" className="d-flex">
              <img src={phone} alt="icone d'un téléphone" className="logo" />
              <p>+33 (0)4 26 73 40 00</p>
            </a>
            <a
              href="https://maps.app.goo.gl/8UuoBFoPiLitMo628"
              target="_blank"
              rel="noopener noreferrer"
              className="d-flex"
            >
              <img
                src={location}
                alt="icone de localisation"
                className="logo"
              />
              <div>
                <p>101 cours Charlemagne</p>
                <p>CS 20033</p>
                <p>69269 LYON CEDEX 02</p>
                <p>FRANCE</p>
              </div>
            </a>
          </address>
        </section>
      </div>
    </footer>
  );
};

export default Footer;
