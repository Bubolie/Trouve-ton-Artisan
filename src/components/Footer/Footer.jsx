import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="container">
      <div className="row">
        <section>
          <h2>Pages Legale</h2>
          <ul>
            <li><NavLink to="/mentions-legales">Mentions Légales</NavLink></li>
            <li><NavLink to="/donnees-personnelles">Données personnelles</NavLink></li>
            <li><NavLink to="/cookies">Cookies</NavLink></li>
            <li><NavLink to="/accessibilite">Accéssibilités</NavLink></li>
          </ul>
        </section>
        <section>
          <address></address>
        </section>
      </div>
    </footer>
  );
};

export default Footer;
