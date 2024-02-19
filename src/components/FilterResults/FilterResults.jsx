import { useParams } from "react-router-dom";
import Card from "../Card/Card";
import data from "../../data/datas.json";
import { useEffect, useState } from "react";

const FilterResults = () => {
  const { filterTermSearch } = useParams();
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    setSearchTerm(filterTermSearch);
  }, [filterTermSearch]);

  const filteredData = data.filter(
    (artisan) =>
      artisan.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      artisan.specialty.toLowerCase().includes(searchTerm.toLowerCase()) ||
      artisan.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container">
      {filteredData.length > 0 ? (
        <div className="container">
          <h1 className="text-center my-5">Résultats de recherche pour "{searchTerm}"</h1>
          <div className="row">
            {filteredData.map((artisan) => (
              <Card
                key={artisan.id}
                artisan={artisan}
                nameEntreprise={artisan.name}
                note={artisan.note}
                category={artisan.category}
                location={artisan.location}
              />
            ))}
          </div>
        </div>
      ) : (
        <p className="container text-center my-5">Aucun résultat ne correspond à "{searchTerm}"</p>
      )}
    </div>
  );
};

export default FilterResults;
