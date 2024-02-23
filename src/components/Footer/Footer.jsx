import location from "../../assets/images/location.svg";
import phone from "../../assets/images/telephone.svg";
import "./footer.scss";
import LinkFooter from "./LinkFooter";

const Footer = () => {
  return (
    <footer className="py-5">
      <div className="row">
        <section className="col-md-6 d-flex flex-column align-items-center">
          <h4 className="text-center">Nous contacter</h4>
          <address>
            <div className="m-4">
              <a href="tel:+33(0)426734000" className="link-footer d-flex">
                <img
                  src={phone}
                  alt="icone d'un téléphone"
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
                className="link-footer d-flex"
              >
                <img
                  src={location}
                  alt="icone de localisation"
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
        <section className="container col-md-6 d-flex flex-column align-items-center">
          <h4 className="text-center">Pages Légales</h4>
          <ul className="my-3">
            <LinkFooter link="mentions-legales" nameLink="Mentions Légales" />
            <LinkFooter
              link="donnees-personnelles"
              nameLink="Données personnelles"
            />
            <LinkFooter link="cookies" nameLink="Cookies" />
            <LinkFooter link="accessibilite" nameLink="Accessibilités" />
          </ul>
        </section>
      </div>
    </footer>
  );
};

export default Footer;
