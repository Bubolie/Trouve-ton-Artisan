import { useParams } from "react-router-dom";
import data from "../data/datas.json";
import NotFound from "./NotFound";
import FilterSearch from "../components/FilterSearch";
import Meta from "../components/Meta";

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
    <>
      <Meta
        title={`Catégorie ${category}`}
        content={`Cette page contient toutes les entreprises répertoriées sur notre site appartenant à la catégorie ${category}`}
      />
      <main>
        <FilterSearch
          filter={categories}
          title="Catégorie"
          filterTerm={category}
          ifFalse={<NotFound />}
        />
      </main>
    </>
  );
};
export default CategorySearch;
