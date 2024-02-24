import { useParams } from "react-router-dom";
import data from "../data/datas.json";
import { useEffect, useState } from "react";
import Button from "../components/Button/Button";
import FilterSearch from "../components/FilterSearch";

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
    <main>
      <FilterSearch
        filter={filteredData}
        title="Résultat(s) pour la recherche "
        filterTerm={searchTerm}
        ifFalse={
          <div>
            <p className="container text-center my-5">
              Aucun résultat correspond à la recherche : "{searchTerm}"
            </p>
            <div className="text-end my-5">
              <Button
                linkPage="/"
                type="button"
                buttonName="Retourner à la page d'accueil"
                color="blue"
              />
            </div>
          </div>
        }
      />
    </main>
  );
};

export default ResultSearch;
