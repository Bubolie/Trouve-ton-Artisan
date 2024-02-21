import { useParams } from "react-router-dom";
import data from "../../data/datas.json";
import NotFound from "../NotFound/NotFound";
import FilterSearch from "../../components/FilterSearch/FilterSearch";

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
    <main>
      <FilterSearch
        filter={categories}
        title="Catégorie"
        filterTerm={category}
        ifFalse={<NotFound/>}
      />
    </main>
  );
};
export default CategorySearch;
