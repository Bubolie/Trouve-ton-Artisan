import { useState } from "react";
import { useNavigate } from "react-router-dom";
import imageLoupe from "../../assets/images/loupe.svg";

const SearchFormHeader = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();
  const handleSearchChange = (e) => {
    let value = e.target.value;
    setSearchTerm(value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    navigate(`resultats-de-recherche/${searchTerm}`);
    setSearchTerm("");
  };
  return (
    <div>
      <form className="navbar-form" role="search" onSubmit={handleSearchSubmit}>
        <button
          className="btn d-lg-none"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#searchCollapse"
          aria-expanded="false"
          aria-controls="searchCollapse"
        >
          <img
            src={imageLoupe}
            className="logo"
            alt="logo d'une loupe"
            width="512"
            height="512"
          />
        </button>

        <div className="collapse d-lg-block " id="searchCollapse">
          <div className="d-flex ">
            <input
              className="form-control me-2 bg-input-search"
              name="search"
              type="search"
              placeholder="Nom, spécialité, ville"
              value={searchTerm}
              aria-label="Search"
              onChange={handleSearchChange}
              required
            />
            <button className="btn w-25" type="submit">
              <img
                src={imageLoupe}
                className="logo-mini"
                alt="logo d'une loupe"
                width="512"
                height="512"
              />
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SearchFormHeader;
