import Card from "../../components/Card/Card";
import Button from "../../components/Button/Button";

const FilterSearch = (props) => {
  return (
    <div className="container">
      {props.filter.length > 0 ? (
        <div className="container ">
          <div className="d-flex flex-column justify-content-center ">
            <h1 className="d-flex title-style mt-5 py-2 justify-content-center">
              {props.title} "{props.filterTerm}"
            </h1>
            <h2 className="d-flex justify-content-center py-3"><u>Liste des Artisans répertoriés</u></h2>
          </div>

          <article className="row">
            {props.filter.map((artisan) => (
              <Card
                key={artisan.id}
                artisan={artisan}
                nameEntreprise={artisan.name}
                note={artisan.note}
                specialty={artisan.specialty}
                location={artisan.location}
              />
            ))}
          </article>
          <div className="text-end my-5">
            <Button
              linkPage="/"
              type="button"
              buttonName="Retourner à la page d'accueil"
              color="blue"
            />
          </div>
        </div>
      ) : (
        props.ifFalse
      )}
    </div>
  );
};

export default FilterSearch;
