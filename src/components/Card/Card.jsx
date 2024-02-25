import "./card.scss";
import Button from "../Button/Button";
// import iconStar from "../../assets/images/star-512.svg";
import { NavLink } from "react-router-dom";
import ArtisanDetailsCommon from "../ArtisanDetailsCommon";

const Card = (props) => {
  return (
    <div className=" col-md-6 col-lg-4 my-3 mx-auto">
      <NavLink to={`/entreprise/${props.nameEntreprise}`} className="card-link">
        <article className="card shadow h-100 ">
          <div className="m-4 card-body shadow">
            <h3 className="card-title text-center ">{props.nameEntreprise}</h3>
            <div className="card-text">
              <ArtisanDetailsCommon
                note={props.note}
                specialty={props.specialty}
                location={props.location}
              />
            </div>
          </div>
          <div className="text-center mb-3">
            <Button
              linkPage={`/entreprise/${props.nameEntreprise}`}
              type="link"
              buttonName="En savoir plus"
              color="red"
            />
          </div>{" "}
        </article>
      </NavLink>
    </div>
  );
};

export default Card;
