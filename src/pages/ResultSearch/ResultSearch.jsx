import { useParams } from "react-router-dom";
import data from "../../data/datas.json";
import { useEffect, useState } from "react";
import Card from "../../components/Card/Card";
import Button from "../../components/Button/Button";
// import Home from "../Home/Home";
// import "./filterResults.scss";

const ResultSearch = () => {
  const { filterTermSearch } = useParams();
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    setSearchTerm(filterTermSearch);
  }, [filterTermSearch]);

  const filteredData = data.filter((artisan) => {
    return (
      artisan.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      artisan.specialty.toLowerCase().includes(searchTerm.toLowerCase()) ||
      artisan.location.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });



  return (
    <div className="container">
      {filteredData.length > 0 ? (
        <div className="container ">
          <div className="d-flex justify-content-center ">
            <h1 className="d-inline-flex title-style my-5 px-5 py-2 text-center">
              Liste des artisans trouvés pour "{searchTerm}"
            </h1>
          </div>
         
          <article className="row">
            {filteredData.map((artisan) => (
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
        </div>
      ) : (
        <p className="container text-center my-5">
          Aucun résultat ne correspond à "{searchTerm}"
        </p>
      )} 
      <div className="text-end my-5">

      <Button
            linkPage="/"
            type="button"
            buttonName="Retourner à la page d'accueil"
            color="blue"
          />
          </div>
    </div>
  );
};

export default ResultSearch;
