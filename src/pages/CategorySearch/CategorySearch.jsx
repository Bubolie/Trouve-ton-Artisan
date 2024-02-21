import { useParams } from "react-router-dom";
import Card from "../../components/Card/Card";
import data from "../../data/datas.json";
import Button from "../../components/Button/Button";
import NotFound from "../NotFound/NotFound";

const CategorySearch = () => {
  const { filterCategory } = useParams();

  const categories = data.filter((artisan) => {
    return (
      artisan.category
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .toLowerCase() ===
      filterCategory
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .toLowerCase()
    );
  });

  const category = categories.length > 0 ? categories[0].category : "";

  return (
    <div className="container">
      {categories.length > 0 ? (
        <div className="container">
          <div className="d-flex justify-content-center ">
            <h1 className="d-inline-flex title-style my-5 px-5 py-2 text-center">
              Liste des artisans pour la categorie {category}
            </h1>
          </div>

          <article className="row">
            {categories.map((artisan) => (
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
        <NotFound/>
      )}
      ;
    </div>
  );
};
export default CategorySearch;
